import { useState } from "react";

type Pose = "animating" | "standing" | "curled";

const CurlingCat = () => {
  const [pose, setPose] = useState<Pose>("animating");

  const nextPose = () => {
    setPose((p) =>
      p === "animating" ? "standing" : p === "standing" ? "curled" : "animating"
    );
  };

  const label =
    pose === "animating" ? "Animating" : pose === "standing" ? "Standing" : "Sleeping";

  // Transform values for each pose
  const isAnimating = pose === "animating";
  const isCurled = pose === "curled";

  const headStyle: React.CSSProperties = isCurled
    ? { transform: "translate(25px, 60px) rotate(30deg)", transformOrigin: "185px 95px", transition: "transform 0.6s ease" }
    : isAnimating
    ? undefined
    : { transform: "translate(0, 0)", transformOrigin: "185px 95px", transition: "transform 0.6s ease" };

  const bodyStyle: React.CSSProperties = isCurled
    ? { transform: "rotate(25deg)", transformOrigin: "195px 260px", transition: "transform 0.6s ease" }
    : isAnimating
    ? undefined
    : { transform: "rotate(0deg)", transformOrigin: "195px 260px", transition: "transform 0.6s ease" };

  const tailStyle: React.CSSProperties = isCurled
    ? { transform: "rotate(-40deg) scaleX(-1)", transformOrigin: "195px 255px", transition: "transform 0.6s ease" }
    : isAnimating
    ? undefined
    : { transform: "rotate(0deg) scaleX(1)", transformOrigin: "195px 255px", transition: "transform 0.6s ease" };

  const legsStyle: React.CSSProperties = isCurled
    ? { opacity: 0, transform: "scaleY(0)", transformOrigin: "center bottom", transition: "all 0.6s ease" }
    : isAnimating
    ? undefined
    : { opacity: 1, transform: "scaleY(1)", transformOrigin: "center bottom", transition: "all 0.6s ease" };

  const eyesStyle: React.CSSProperties = isCurled
    ? { transform: "scaleY(0.2)", transformOrigin: "center center", transition: "transform 0.6s ease" }
    : isAnimating
    ? undefined
    : { transform: "scaleY(1)", transformOrigin: "center center", transition: "transform 0.6s ease" };

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 400 300"
        width="400"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isAnimating && (
          <style>{`
            .head { animation: headMove 3s ease-in-out infinite alternate; transform-origin: 185px 95px; }
            .body { animation: bodyBend 3s ease-in-out infinite alternate; transform-origin: 195px 260px; }
            .tail-group { animation: tailWrap 3s ease-in-out infinite alternate; transform-origin: 195px 255px; }
            .legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
            .eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: center center; }

            @keyframes headMove { 0% { transform: translate(0,0); } 100% { transform: translate(25px,60px) rotate(30deg); } }
            @keyframes bodyBend { 0% { transform: rotate(0deg); } 100% { transform: rotate(25deg); } }
            @keyframes tailWrap { 0% { transform: rotate(0deg) scaleX(1); } 100% { transform: rotate(-40deg) scaleX(-1); } }
            @keyframes legsFold { 0% { opacity:1; transform:scaleY(1); } 60% { opacity:1; transform:scaleY(0.5); } 100% { opacity:0; transform:scaleY(0); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 80% { transform:scaleY(1); } 100% { transform:scaleY(0.2); } }
          `}</style>
        )}

        <g className={isAnimating ? "body" : ""} style={bodyStyle}>
          <ellipse cx="195" cy="180" rx="35" ry="80" fill="#111111" />

          <g className={isAnimating ? "legs" : ""} style={legsStyle}>
            <rect x="175" y="240" width="12" height="45" rx="6" fill="#111111" />
            <rect x="195" y="240" width="12" height="45" rx="6" fill="#111111" />
            <ellipse cx="181" cy="287" rx="8" ry="5" fill="#111111" />
            <ellipse cx="201" cy="287" rx="8" ry="5" fill="#111111" />
          </g>

          <g className={isAnimating ? "legs" : ""} style={legsStyle}>
            <rect x="180" y="235" width="14" height="40" rx="7" fill="#0a0a0a" />
            <rect x="200" y="235" width="14" height="40" rx="7" fill="#0a0a0a" />
          </g>

          <g className={isAnimating ? "tail-group" : ""} style={tailStyle}>
            <path d="M210,250 Q250,240 270,210 Q285,185 280,160" stroke="#111111" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M280,165 Q282,155 278,148" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>

          <g className={isAnimating ? "head" : ""} style={headStyle}>
            <circle cx="195" cy="110" r="30" fill="#111111" />
            <polygon points="170,95 160,60 182,85" fill="#111111" />
            <polygon points="164,70 160,60 170,68" fill="white" />
            <polygon points="208,85 220,60 230,95" fill="#111111" />
            <polygon points="220,68 220,60 226,70" fill="white" />

            <g className={isAnimating ? "eyes" : ""} style={eyesStyle}>
              <ellipse cx="183" cy="108" rx="5" ry="6" fill="#22c55e" />
              <ellipse cx="183" cy="108" rx="2.5" ry="5" fill="#111111" />
              <circle cx="185" cy="106" r="1.5" fill="white" opacity="0.7" />
              <ellipse cx="207" cy="108" rx="5" ry="6" fill="#22c55e" />
              <ellipse cx="207" cy="108" rx="2.5" ry="5" fill="#111111" />
              <circle cx="209" cy="106" r="1.5" fill="white" opacity="0.7" />
            </g>

            <polygon points="195,116 192,120 198,120" fill="#333" />
            <line x1="165" y1="115" x2="140" y2="110" stroke="#444" strokeWidth="1" />
            <line x1="165" y1="118" x2="138" y2="120" stroke="#444" strokeWidth="1" />
            <line x1="165" y1="121" x2="140" y2="128" stroke="#444" strokeWidth="1" />
            <line x1="225" y1="115" x2="250" y2="110" stroke="#444" strokeWidth="1" />
            <line x1="225" y1="118" x2="252" y2="120" stroke="#444" strokeWidth="1" />
            <line x1="225" y1="121" x2="250" y2="128" stroke="#444" strokeWidth="1" />
          </g>
        </g>
      </svg>

      <button
        onClick={nextPose}
        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity"
      >
        {label}
      </button>
    </div>
  );
};

export default CurlingCat;
