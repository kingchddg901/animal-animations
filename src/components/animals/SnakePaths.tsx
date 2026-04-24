import { useEffect, useRef, useState } from "react";

/**
 * Snake renderer.
 * Anchored at the head. Body is a thick stroked path built from a series of segments.
 *
 * Poses:
 *  - moving:  travelling sine wave per user formula
 *             y(x,t) = sin(x*0.8*t)+.03* sin(x*1.7+t*1.3)+.015*sin(x*2.5+2.5*t)+.07
 *  - alert:   coiled body with head raised
 *  - resting: coiled body with head down
 *  - curling: animates from resting -> moving (uses moving + slow reveal)
 */

type SnakeMode = "moving" | "alert" | "resting" | "curling" | "standing";

// Head anchor (in SVG coords). Snake extends to the right from here.
const HEAD_X = 90;
const HEAD_Y = 170;

// Body geometry
const SEGMENTS = 70;
const SEG_LEN = 5; // along-axis spacing for moving wave
const BODY_WIDTH_HEAD = 22;
const BODY_WIDTH_TAIL = 4;

function buildMovingPoints(t: number): Array<[number, number]> {
  // x is segment index normalized; we walk from head (i=0) to tail
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const x = i * 0.18; // phase coordinate
    const y =
      Math.sin(x * 0.8 * t) +
      0.03 * Math.sin(x * 1.7 + t * 1.3) +
      0.015 * Math.sin(x * 2.5 + 2.5 * t) +
      0.07;
    const px = HEAD_X + i * SEG_LEN;
    const py = HEAD_Y + y * 18; // amplitude in px
    pts.push([px, py]);
  }
  return pts;
}

// Coiled spiral points (resting / alert body shape). Coil center to the right of head.
function buildCoilPoints(): Array<[number, number]> {
  const cx = HEAD_X + 90;
  const cy = HEAD_Y + 25;
  const pts: Array<[number, number]> = [];
  // start near head and spiral inward
  const turns = 2.4;
  for (let i = 0; i < SEGMENTS; i++) {
    const f = i / (SEGMENTS - 1);
    // Radius shrinks as we go to the tail (inward spiral)
    const r = 70 * (1 - f * 0.85);
    const angle = Math.PI + f * turns * Math.PI * 2; // start on the left side near head
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r * 0.55; // squashed vertically for perspective
    pts.push([x, y]);
  }
  return pts;
}

function pointsToPath(pts: Array<[number, number]>): string {
  if (pts.length === 0) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  // Smooth via quadratic curves through midpoints
  for (let i = 1; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    d += ` Q ${x0} ${y0} ${mx} ${my}`;
  }
  const last = pts[pts.length - 1];
  d += ` T ${last[0]} ${last[1]}`;
  return d;
}

interface SnakeProps {
  mode: SnakeMode;
}

const Snake = ({ mode }: SnakeProps) => {
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // Drive the moving animation
  useEffect(() => {
    const animating = mode === "moving" || mode === "curling";
    if (!animating) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
      return;
    }
    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = (ts - startRef.current) / 1000;
      setT(elapsed * 2.2);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mode]);

  const movingPts = buildMovingPoints(t);
  const coilPts = buildCoilPoints();

  // For curling pose we blend from coil -> moving over time using a fixed shape (just show moving)
  const showCoiled = mode === "alert" || mode === "resting" || mode === "standing";
  const pts = showCoiled ? coilPts : movingPts;
  const pathD = pointsToPath(pts);

  // Head position is always pts[0] (anchor)
  const headPt = pts[0];
  const nextPt = pts[1] ?? headPt;
  // Head angle from first segment direction
  let headAngleDeg = (Math.atan2(nextPt[1] - headPt[1], nextPt[0] - headPt[0]) * 180) / Math.PI;
  // For coiled poses we override head orientation
  let headLift = 0;
  if (mode === "alert") {
    headAngleDeg = -70; // head up
    headLift = -55;
  } else if (mode === "resting") {
    headAngleDeg = 20; // head down/relaxed onto coil
    headLift = -10;
  } else if (mode === "standing") {
    headAngleDeg = -20;
    headLift = -20;
  }

  // For alert/resting we keep head anchored at HEAD_X/HEAD_Y but raised/lowered
  const renderHeadX = showCoiled ? HEAD_X : headPt[0];
  const renderHeadY = showCoiled ? HEAD_Y + headLift : headPt[1];

  return (
    <g style={{ transition: "none" }}>
      {/* Body shadow */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--animal-fur-shadow))"
        strokeWidth={BODY_WIDTH_HEAD + 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.5}
        style={{ transition: showCoiled ? "d 0.6s ease" : "none" }}
      />
      {/* Body main */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--animal-fur))"
        strokeWidth={BODY_WIDTH_HEAD}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Body taper: overlay a thinner highlight stripe along the back half toward tail */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--animal-fur-highlight))"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 8"
        opacity={0.55}
      />
      {/* Tail tip — draw a thinner cap by overlaying last few segments */}
      {(() => {
        const tailStart = Math.floor(SEGMENTS * 0.75);
        const tailPts = pts.slice(tailStart);
        const tailD = pointsToPath(tailPts);
        return (
          <path
            d={tailD}
            fill="none"
            stroke="hsl(var(--animal-fur))"
            strokeWidth={BODY_WIDTH_TAIL + 4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })()}

      {/* Head — anchored */}
      <g
        transform={`translate(${renderHeadX} ${renderHeadY}) rotate(${headAngleDeg})`}
        style={{ transition: showCoiled ? "transform 0.6s ease" : "none" }}
      >
        {/* Head shape (diamond-ish) */}
        <ellipse cx={0} cy={0} rx={26} ry={16} fill="hsl(var(--animal-fur))" />
        <ellipse cx={-6} cy={-2} rx={22} ry={13} fill="hsl(var(--animal-fur-highlight))" opacity={0.35} />
        {/* Eyes */}
        <circle cx={-6} cy={-6} r={3.2} fill="hsl(var(--animal-eye))" />
        <circle cx={-6} cy={-6} r={1.4} fill="hsl(var(--animal-pupil))" />
        <circle cx={-6} cy={6} r={3.2} fill="hsl(var(--animal-eye))" />
        <circle cx={-6} cy={6} r={1.4} fill="hsl(var(--animal-pupil))" />
        {/* Nostrils */}
        <circle cx={-22} cy={-3} r={1} fill="hsl(var(--animal-nose))" />
        <circle cx={-22} cy={3} r={1} fill="hsl(var(--animal-nose))" />
        {/* Tongue — flicks when alert/moving */}
        {(mode === "alert" || mode === "moving" || mode === "curling") && (
          <g>
            <path
              d="M -26 0 Q -36 -1 -42 -4 M -26 0 Q -36 1 -42 4 M -26 0 L -38 0"
              stroke="hsl(0 70% 50%)"
              strokeWidth={1.4}
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="1;1;0;0;1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        )}
      </g>
    </g>
  );
};

export default Snake;
