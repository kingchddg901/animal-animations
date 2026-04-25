import { useEffect, useRef, useState } from "react";

/**
 * SnakePaths.tsx
 * =============================================================================
 * Procedural snake renderer. The body is a thick stroked smooth path built
 * from SEGMENTS sample points. The head is a separate <g> that is always
 * welded to pts[0] and oriented along the body's opening tangent so it never
 * visually disconnects.
 *
 * === POSE MODES ===
 *  moving   — travelling sine wave; head follows pts[0] tangent
 *  curling  — same as moving (transition pose into the other states)
 *  standing — coiled body, head raised at a neutral angle
 *  alert    — coiled body, head reared up high, tongue out
 *  resting  — coiled body, head drooped down onto coils
 *  warning  — tight defensive coil, head reared back in S-curve, tail tip
 *             lifted and rattle shaking
 *
 * === BUGS FIXED (from original) ===
 *  1. FREQUENCY BLOWUP: sin(x * 0.8 * t) changed to sin(x*0.8 + t) —
 *     spatial frequency is now fixed; only phase advances.
 *  2. HEAD DISCONNECT: tangent averaged over TANGENT_SAMPLES leading segments
 *     instead of single pts[0]->pts[1] vector.
 * =============================================================================
 */

type SnakeMode = "moving" | "alert" | "resting" | "curling" | "standing" | "warning";

// === GEOMETRY CONSTANTS ======================================================

const HEAD_X = 90;
const HEAD_Y = 170;
const SEGMENTS = 70;
const SEG_LEN = 5;
const BODY_WIDTH_HEAD = 22;
const BODY_WIDTH_TAIL = 4;
const TANGENT_SAMPLES = 5;

// === WAVE CONSTANTS (intended formula restored) ==============================
// snakeOffset(x, t) = sin(x*0.8+t) + 0.3*sin(x*1.7+t*1.3) + 0.15*sin(x*2.5+t*0.7)
// x = i * 0.18  (phase coordinate)

const WAVE_AMP = 22;

// === RATTLE GEOMETRY =========================================================
// The rattle is a series of overlapping ellipses at the tail tip.
// Rendered in warning mode with a fast shake animation.
const RATTLE_SEGMENTS = 5;
const RATTLE_SEG_W = 7;   // width of each rattle bead
const RATTLE_SEG_H = 5;   // height of each rattle bead

// =============================================================================

function buildMovingPoints(t: number): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const x = i * 0.18;
    const wave =
            Math.sin(x * 0.8  + t) +
      0.30 * Math.sin(x * 1.7  + t * 1.3) +
      0.15 * Math.sin(x * 2.5  + t * 0.7);
    pts.push([HEAD_X + i * SEG_LEN, HEAD_Y + wave * WAVE_AMP]);
  }
  return pts;
}

function buildCoilPoints(): Array<[number, number]> {
  const cx = HEAD_X + 90;
  const cy = HEAD_Y + 25;
  const turns = 2.4;
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const f = i / (SEGMENTS - 1);
    const r = 70 * (1 - f * 0.85);
    const angle = Math.PI + f * turns * Math.PI * 2;
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r * 0.55]);
  }
  return pts;
}

/**
 * Warning coil: tighter, more compressed than the resting coil.
 * The tail end curves upward so the rattle can be drawn above the coil mass.
 */
function buildWarningCoilPoints(): Array<[number, number]> {
  const cx = HEAD_X + 85;
  const cy = HEAD_Y + 30;
  const turns = 2.0;
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const f = i / (SEGMENTS - 1);
    const r = 55 * (1 - f * 0.80);
    const angle = Math.PI + f * turns * Math.PI * 2;
    // Last 15% of body: lift the tail upward above the coil
    const tailLift = f > 0.85 ? (f - 0.85) / 0.15 * 60 : 0;
    pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r * 0.52 - tailLift]);
  }
  return pts;
}

function pointsToPath(pts: Array<[number, number]>): string {
  if (pts.length === 0) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    d += ` Q ${x0} ${y0} ${(x0 + x1) / 2} ${(y0 + y1) / 2}`;
  }
  const last = pts[pts.length - 1];
  d += ` T ${last[0]} ${last[1]}`;
  return d;
}

function computeHeadAngleDeg(pts: Array<[number, number]>): number {
  const count = Math.min(TANGENT_SAMPLES, pts.length - 1);
  let dx = 0, dy = 0;
  for (let i = 0; i < count; i++) {
    dx += pts[i + 1][0] - pts[i][0];
    dy += pts[i + 1][1] - pts[i][1];
  }
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

// =============================================================================

interface SnakeProps {
  mode: SnakeMode;
}

const Snake = ({ mode }: SnakeProps) => {
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

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
      setT((ts - startRef.current) / 1000);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [mode]);

  // === BODY POINTS ============================================================
  const showCoiled  = mode === "alert" || mode === "resting" || mode === "standing";
  const showWarning = mode === "warning";
  const showCurling = mode === "curling";

  let pts: Array<[number, number]>;
  if (showWarning) {
    pts = buildWarningCoilPoints();
  } else if (showCoiled) {
    pts = buildCoilPoints();
  } else if (showCurling) {
    // Transition stretched → coiled over ~1.2s, then hold coiled
    const CURL_DURATION = 1.2;
    const raw = Math.min(1, t / CURL_DURATION);
    // ease in-out
    const k = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
    const stretched = buildMovingPoints(t);
    const coiled = buildCoilPoints();
    pts = stretched.map(([sx, sy], i) => {
      const [cx, cy] = coiled[i];
      return [sx + (cx - sx) * k, sy + (cy - sy) * k];
    });
  } else {
    pts = buildMovingPoints(t);
  }

  const pathD = pointsToPath(pts);

  // Tail tip coords — used to position the rattle in warning mode
  const tailPt = pts[pts.length - 1];

  // === HEAD PLACEMENT =========================================================
  // Head is ALWAYS welded to pts[0] so it can never visually detach from the
  // body. Mode-specific pose adjustments are applied as an additional rotation
  // around the neck joint, plus a small lift offset along the head's local
  // axis for reared poses.
  const neckX = pts[0][0];
  const neckY = pts[0][1];
  const bodyTangentDeg = computeHeadAngleDeg(pts);

  // Head sprite has snout at -X (rotation 0 → snout points left).
  // Body tangent at pts[0] points INTO the body (away from snout), which is
  // exactly the direction we want rotation 0 to face when body extends to the
  // right. So no flip is needed for the moving/curling default.
  let headAngleDeg = bodyTangentDeg;
  let liftAlongHead = 0; // negative = forward along snout direction

  // Head sprite has snout at LOCAL -X. After rotating by headAngleDeg, the
  // snout points in world direction (-cos, -sin). To rear the head UP, we
  // need that snout direction to have a NEGATIVE y component.
  //   straight up   → headAngleDeg ≈  90°  (snoutDir = (0, -1))
  //   forward-left  → headAngleDeg ≈   0°  (snoutDir = (-1, 0))
  //   down-left     → headAngleDeg ≈ -90°
  if (mode === "alert") {
    headAngleDeg = 75;        // reared up high
    liftAlongHead = 30;
  } else if (mode === "resting") {
    headAngleDeg = -20;       // drooped down onto coils
    liftAlongHead = 6;
  } else if (mode === "warning") {
    headAngleDeg = 100;       // S-curve strike pose, head pulled back & up
    liftAlongHead = 34;
  } else if (mode === "standing") {
    headAngleDeg = 30;
    liftAlongHead = 20;
  }

  // Snout local direction is (-1, 0); world snout dir = (-cos, -sin).
  // Place head body so the snout extends away from the neck along that dir.
  const rad = (headAngleDeg * Math.PI) / 180;
  const renderHeadX = neckX - Math.cos(rad) * liftAlongHead;
  const renderHeadY = neckY - Math.sin(rad) * liftAlongHead;

  const showTongue = mode === "alert" || mode === "moving" || mode === "curling" || mode === "warning";

  return (
    <g style={{ transition: "none" }}>

      {/* Warning keyframes — rattle shake + head S-curve sway */}
      {showWarning && (
        <style>{`
          .sn-warn-head { animation: snWarnHeadSway 0.35s ease-in-out infinite alternate; transform-origin: ${renderHeadX}px ${renderHeadY}px; }
          .sn-rattle    { animation: snRattleShake 0.08s linear infinite alternate; transform-origin: ${tailPt[0]}px ${tailPt[1]}px; }
          @keyframes snWarnHeadSway  { 0% { transform: rotate(-8deg); } 100% { transform: rotate(8deg); } }
          @keyframes snRattleShake   { 0% { transform: translateX(-3px) rotate(-5deg); } 100% { transform: translateX(3px) rotate(5deg); } }
        `}</style>
      )}

      {/* === BODY SHADOW === */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--animal-fur-shadow))"
        strokeWidth={BODY_WIDTH_HEAD + 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.5}
        style={{ transition: (showCoiled || showWarning) ? "d 0.6s ease" : "none" }}
      />

      {/* === BODY MAIN === */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--animal-fur))"
        strokeWidth={BODY_WIDTH_HEAD}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* === DORSAL STRIPE === */}
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

      {/* === TAIL TAPER === */}
      {(() => {
        const tailStart = Math.floor(SEGMENTS * 0.75);
        const tailD = pointsToPath(pts.slice(tailStart));
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

      {/* === RATTLE (warning only) =============================================
       * Overlapping ellipse beads drawn at the tail tip. The whole group gets
       * the snRattleShake animation class for the rapid vibration effect.
       * Bead color alternates between fur-shadow and fur-highlight to suggest
       * the interlocked keratin rings of a real rattlesnake.
       * ==================================================================== */}
      {showWarning && (() => {
        const [tx, ty] = tailPt;
        const beads = Array.from({ length: RATTLE_SEGMENTS }, (_, k) => {
          // Each bead stacks horizontally away from the tail end.
          // We approximate direction as rightward since the warning coil
          // lifts the tail almost straight up — the last segment delta
          // gives us the true direction.
          const prev = pts[pts.length - 2] ?? pts[pts.length - 1];
          const dx = tx - prev[0];
          const dy = ty - prev[1];
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / len;
          const uy = dy / len;
          const ox = tx + ux * k * (RATTLE_SEG_W - 2);
          const oy = ty + uy * k * (RATTLE_SEG_W - 2);
          // Beads taper slightly toward the tip
          const scale = 1 - k * 0.1;
          return { ox, oy, scale, dark: k % 2 === 0 };
        });
        return (
          <g className="sn-rattle">
            {beads.map(({ ox, oy, scale, dark }, k) => (
              <ellipse
                key={k}
                cx={ox}
                cy={oy}
                rx={RATTLE_SEG_W * scale}
                ry={RATTLE_SEG_H * scale}
                fill={dark ? "hsl(var(--animal-fur-shadow))" : "hsl(var(--animal-fur-highlight))"}
                opacity={0.9}
              />
            ))}
          </g>
        );
      })()}

      {/* === HEAD ============================================================
       * In warning mode gets the snWarnHeadSway class for the side-to-side
       * intimidation bob.
       * ==================================================================== */}
      <g
        className={showWarning ? "sn-warn-head" : ""}
        transform={`translate(${renderHeadX} ${renderHeadY}) rotate(${headAngleDeg})`}
        style={{ transition: (showCoiled || showWarning) ? "transform 0.6s ease" : "none" }}
      >
        <ellipse cx={0} cy={0} rx={26} ry={16} fill="hsl(var(--animal-fur))" />
        <ellipse cx={-6} cy={-2} rx={22} ry={13} fill="hsl(var(--animal-fur-highlight))" opacity={0.35} />

        {/* Eyes — wider open in warning */}
        <circle cx={-6} cy={-6} r={showWarning ? 4 : 3.2} fill="hsl(var(--animal-eye))" />
        <circle cx={-6} cy={-6} r={showWarning ? 2 : 1.4} fill="hsl(var(--animal-pupil))" />
        <circle cx={-6} cy={6}  r={showWarning ? 4 : 3.2} fill="hsl(var(--animal-eye))" />
        <circle cx={-6} cy={6}  r={showWarning ? 2 : 1.4} fill="hsl(var(--animal-pupil))" />

        {/* Nostrils */}
        <circle cx={-22} cy={-3} r={1} fill="hsl(var(--animal-nose))" />
        <circle cx={-22} cy={3}  r={1} fill="hsl(var(--animal-nose))" />

        {/* Tongue */}
        {showTongue && (
          <g>
            <path
              d="M -26 0 Q -36 -1 -42 -4 M -26 0 Q -36 1 -42 4 M -26 0 L -38 0"
              stroke="hsl(0 70% 50%)"
              strokeWidth={showWarning ? 2 : 1.4}
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="1;1;0;0;1"
                dur={showWarning ? "0.4s" : "1.2s"}
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
