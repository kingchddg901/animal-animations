import { useState } from "react";

type Pose = "animating" | "standing" | "curled" | "walking";

const CurlingCat = () => {
  const [pose, setPose] = useState<Pose>("animating");

  const poses: Pose[] = ["animating", "standing", "curled", "walking"];
  const nextPose = () => {
    setPose((p) => poses[(poses.indexOf(p) + 1) % poses.length]);
  };

  const labels: Record<Pose, string> = {
    animating: "Curling",
    standing: "Standing",
    curled: "Sleeping",
    walking: "Walking",
  };

  const isAnimating = pose === "animating";
  const isCurled = pose === "curled";
  const isWalking = pose === "walking";
  const isStanding = pose === "standing";

  const headStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(30px, 80px) rotate(35deg)", transformOrigin: "200px 100px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "translate(0, 0) rotate(0deg)", transformOrigin: "200px 100px", transition: "transform 0.8s ease" }
    : undefined;

  const bodyStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(20deg)", transformOrigin: "200px 280px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg)", transformOrigin: "200px 280px", transition: "transform 0.8s ease" }
    : undefined;

  const tailStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(-50deg) scaleX(-1)", transformOrigin: "210px 270px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg) scaleX(1)", transformOrigin: "210px 270px", transition: "transform 0.8s ease" }
    : undefined;

  const legsStyle: React.CSSProperties | undefined = isCurled
    ? { opacity: 0, transform: "scaleY(0)", transformOrigin: "center bottom", transition: "all 0.6s ease" }
    : (isStanding || isWalking)
    ? { opacity: 1, transform: "scaleY(1)", transformOrigin: "center bottom", transition: "all 0.6s ease" }
    : undefined;

  const eyesStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "scaleY(0.15)", transformOrigin: "center center", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "scaleY(1)", transformOrigin: "center center", transition: "transform 0.8s ease" }
    : undefined;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 400 380"
        width="360"
        height="340"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isAnimating && (
          <style>{`
            .head { animation: headMove 3s ease-in-out infinite alternate; transform-origin: 200px 100px; }
            .body-group { animation: bodyBend 3s ease-in-out infinite alternate; transform-origin: 200px 280px; }
            .tail-group { animation: tailWrap 3s ease-in-out infinite alternate; transform-origin: 210px 270px; }
            .front-legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
            .back-legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
            .eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: center center; }

            @keyframes headMove { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(30px,80px) rotate(35deg); } }
            @keyframes bodyBend { 0% { transform: rotate(0deg); } 100% { transform: rotate(20deg); } }
            @keyframes tailWrap { 0% { transform: rotate(0deg) scaleX(1); } 100% { transform: rotate(-50deg) scaleX(-1); } }
            @keyframes legsFold { 0% { opacity:1; transform:scaleY(1); } 50% { opacity:1; transform:scaleY(0.6); } 100% { opacity:0; transform:scaleY(0); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 75% { transform:scaleY(1); } 100% { transform:scaleY(0.15); } }
          `}</style>
        )}

        {isWalking && (
          <style>{`
            .walk-bounce { animation: walkBounce 0.5s ease-in-out infinite; }
            .fl-1 { animation: stepA 0.5s ease-in-out infinite; transform-origin: 185px 260px; }
            .fl-2 { animation: stepB 0.5s ease-in-out infinite; transform-origin: 200px 260px; }
            .bl-1 { animation: stepB 0.5s ease-in-out infinite; transform-origin: 190px 258px; }
            .bl-2 { animation: stepA 0.5s ease-in-out infinite; transform-origin: 205px 258px; }
            .walk-tail { animation: tailSway 0.5s ease-in-out infinite alternate; transform-origin: 210px 270px; }
            .walk-head { animation: headBob 0.5s ease-in-out infinite; transform-origin: 200px 120px; }

            @keyframes walkBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            @keyframes stepA { 0% { transform: rotate(-18deg); } 50% { transform: rotate(18deg); } 100% { transform: rotate(-18deg); } }
            @keyframes stepB { 0% { transform: rotate(18deg); } 50% { transform: rotate(-18deg); } 100% { transform: rotate(18deg); } }
            @keyframes tailSway { 0% { transform: rotate(-12deg); } 100% { transform: rotate(12deg); } }
            @keyframes headBob { 0%,100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-3px) rotate(-2deg); } 75% { transform: translateY(-3px) rotate(2deg); } }
          `}</style>
        )}

        <g className={isAnimating ? "body-group" : isWalking ? "walk-bounce" : ""} style={bodyStyle}>

          {/* === BODY === Natural cat torso shape */}
          <path
            d="M170,150 C160,170 155,210 158,240 C160,255 168,265 180,268
               L215,268 C228,265 236,255 238,240 C241,210 236,170 226,150 Z"
            fill="#111"
          />
          {/* Chest / belly highlight area for shape */}
          <path
            d="M175,200 C172,220 174,250 182,265
               L214,265 C222,250 224,220 221,200
               C218,185 178,185 175,200 Z"
            fill="#151515"
          />

          {/* === FRONT LEGS === */}
          <g className={isAnimating ? "front-legs" : ""} style={legsStyle}>
            {/* Left front leg */}
            <g className={isWalking ? "fl-1" : ""}>
              <path
                d="M178,260 C176,275 174,300 172,320
                   C171,328 174,335 180,336
                   C186,337 190,332 190,325
                   C190,315 188,290 186,268"
                fill="#111"
              />
              {/* Paw */}
              <ellipse cx="180" cy="335" rx="10" ry="5" fill="#111" />
            </g>
            {/* Right front leg */}
            <g className={isWalking ? "fl-2" : ""}>
              <path
                d="M206,260 C204,275 202,300 200,320
                   C199,328 202,335 208,336
                   C214,337 218,332 218,325
                   C218,315 216,290 214,268"
                fill="#111"
              />
              <ellipse cx="208" cy="335" rx="10" ry="5" fill="#111" />
            </g>
          </g>

          {/* === BACK LEGS (behind body, slightly darker) === */}
          <g className={isAnimating ? "back-legs" : ""} style={legsStyle}>
            <g className={isWalking ? "bl-1" : ""}>
              <path
                d="M172,255 C168,270 165,295 164,315
                   C163,325 167,332 173,333 C179,333 182,328 182,320
                   C182,305 180,280 179,260"
                fill="#0d0d0d"
              />
            </g>
            <g className={isWalking ? "bl-2" : ""}>
              <path
                d="M222,255 C226,270 229,295 230,315
                   C231,325 227,332 221,333 C215,333 212,328 212,320
                   C212,305 214,280 215,260"
                fill="#0d0d0d"
              />
            </g>
          </g>

          {/* === TAIL === */}
          <g className={isAnimating ? "tail-group" : isWalking ? "walk-tail" : ""} style={tailStyle}>
            <path
              d="M230,260 C245,250 265,230 278,205
                 C288,185 292,165 288,148
                 C286,140 282,135 278,138"
              stroke="#111"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
            {/* White tail tip */}
            <path
              d="M282,148 C280,140 276,134 272,130"
              stroke="white"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* === HEAD === Organic cat head */}
          <g className={isAnimating ? "head" : isWalking ? "walk-head" : ""} style={headStyle}>
            {/* Head shape - slightly wider, rounder */}
            <path
              d="M165,115 C160,95 165,75 180,68
                 C190,63 200,62 210,63
                 C220,65 230,70 235,80
                 C240,90 242,105 238,118
                 C235,128 228,135 218,138
                 C208,141 195,142 185,140
                 C175,138 168,128 165,115 Z"
              fill="#111"
            />
            {/* Cheek fluff left */}
            <path
              d="M162,110 C158,118 160,128 168,132
                 C172,134 178,135 180,130
                 C175,125 165,120 162,110 Z"
              fill="#111"
            />
            {/* Cheek fluff right */}
            <path
              d="M240,110 C244,118 242,128 234,132
                 C230,134 224,135 222,130
                 C227,125 237,120 240,110 Z"
              fill="#111"
            />

            {/* Left ear - triangular, organic */}
            <path
              d="M168,90 C162,70 155,48 158,38
                 C160,32 165,30 170,35
                 C176,42 180,60 182,78"
              fill="#111"
            />
            {/* Left ear white tip */}
            <path
              d="M160,45 C158,38 160,33 163,32
                 C166,31 169,34 170,38
                 C168,40 163,42 160,45 Z"
              fill="white"
            />
            {/* Left ear inner */}
            <path
              d="M164,65 C162,55 160,45 163,40
                 C165,37 168,38 170,42
                 C172,48 173,58 174,68"
              fill="#1a1a1a"
            />

            {/* Right ear */}
            <path
              d="M232,78 C234,60 238,42 240,35
                 C242,30 247,32 249,38
                 C251,48 248,70 242,90"
              fill="#111"
            />
            {/* Right ear white tip */}
            <path
              d="M242,38 C241,33 243,31 246,32
                 C248,33 250,37 249,42
                 C247,40 244,38 242,38 Z"
              fill="white"
            />
            {/* Right ear inner */}
            <path
              d="M236,68 C237,58 238,48 240,42
                 C241,38 244,37 245,40
                 C247,45 246,55 245,65"
              fill="#1a1a1a"
            />

            {/* === EYES === */}
            <g className={isAnimating ? "eyes" : ""} style={eyesStyle}>
              {/* Left eye - almond shaped */}
              <path
                d="M182,102 C185,96 193,96 196,102
                   C193,108 185,108 182,102 Z"
                fill="#22c55e"
              />
              {/* Left pupil */}
              <ellipse cx="189" cy="102" rx="2.5" ry="5" fill="#111" />
              {/* Left eye shine */}
              <circle cx="191" cy="100" r="1.5" fill="white" opacity="0.8" />
              <circle cx="187" cy="104" r="0.8" fill="white" opacity="0.5" />

              {/* Right eye */}
              <path
                d="M206,102 C209,96 217,96 220,102
                   C217,108 209,108 206,102 Z"
                fill="#22c55e"
              />
              {/* Right pupil */}
              <ellipse cx="213" cy="102" rx="2.5" ry="5" fill="#111" />
              {/* Right eye shine */}
              <circle cx="215" cy="100" r="1.5" fill="white" opacity="0.8" />
              <circle cx="211" cy="104" r="0.8" fill="white" opacity="0.5" />
            </g>

            {/* Nose - small triangle */}
            <path
              d="M198,118 L195,122 L201,122 Z"
              fill="#444"
            />
            {/* Mouth lines */}
            <path d="M198,122 C198,125 196,127 193,128" stroke="#333" strokeWidth="0.8" fill="none" />
            <path d="M198,122 C198,125 200,127 203,128" stroke="#333" strokeWidth="0.8" fill="none" />

            {/* Whiskers - left */}
            <line x1="170" y1="112" x2="138" y2="106" stroke="#555" strokeWidth="0.8" opacity="0.7" />
            <line x1="170" y1="116" x2="135" y2="116" stroke="#555" strokeWidth="0.8" opacity="0.7" />
            <line x1="170" y1="120" x2="138" y2="126" stroke="#555" strokeWidth="0.8" opacity="0.7" />
            {/* Whiskers - right */}
            <line x1="232" y1="112" x2="264" y2="106" stroke="#555" strokeWidth="0.8" opacity="0.7" />
            <line x1="232" y1="116" x2="267" y2="116" stroke="#555" strokeWidth="0.8" opacity="0.7" />
            <line x1="232" y1="120" x2="264" y2="126" stroke="#555" strokeWidth="0.8" opacity="0.7" />
          </g>
        </g>
      </svg>

      <button
        onClick={nextPose}
        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity"
      >
        {labels[pose]}
      </button>
    </div>
  );
};

export default CurlingCat;
