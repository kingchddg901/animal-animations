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
    ? { transform: "translate(25px, 95px) rotate(40deg)", transformOrigin: "200px 105px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "translate(0, 0) rotate(0deg)", transformOrigin: "200px 105px", transition: "transform 0.8s ease" }
    : undefined;

  const bodyStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(22deg)", transformOrigin: "200px 300px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg)", transformOrigin: "200px 300px", transition: "transform 0.8s ease" }
    : undefined;

  const tailStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(-50deg) scaleX(-1)", transformOrigin: "215px 280px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg) scaleX(1)", transformOrigin: "215px 280px", transition: "transform 0.8s ease" }
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
        viewBox="0 0 400 400"
        width="340"
        height="340"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isAnimating && (
          <style>{`
            .head { animation: headMove 3s ease-in-out infinite alternate; transform-origin: 200px 105px; }
            .body-group { animation: bodyBend 3s ease-in-out infinite alternate; transform-origin: 200px 300px; }
            .tail-group { animation: tailWrap 3s ease-in-out infinite alternate; transform-origin: 215px 280px; }
            .front-legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
            .back-legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
            .eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: center center; }

            @keyframes headMove { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(25px,95px) rotate(40deg); } }
            @keyframes bodyBend { 0% { transform: rotate(0deg); } 100% { transform: rotate(22deg); } }
            @keyframes tailWrap { 0% { transform: rotate(0deg) scaleX(1); } 100% { transform: rotate(-50deg) scaleX(-1); } }
            @keyframes legsFold { 0% { opacity:1; transform:scaleY(1); } 50% { opacity:1; transform:scaleY(0.5); } 100% { opacity:0; transform:scaleY(0); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 75% { transform:scaleY(1); } 100% { transform:scaleY(0.15); } }
          `}</style>
        )}

        {isWalking && (
          <style>{`
            .walk-bounce { animation: walkBounce 0.5s ease-in-out infinite; }
            .fl-1 { animation: stepA 0.5s ease-in-out infinite; transform-origin: 185px 275px; }
            .fl-2 { animation: stepB 0.5s ease-in-out infinite; transform-origin: 205px 275px; }
            .bl-1 { animation: stepB 0.5s ease-in-out infinite; transform-origin: 188px 270px; }
            .bl-2 { animation: stepA 0.5s ease-in-out infinite; transform-origin: 210px 270px; }
            .walk-tail { animation: tailSway 0.5s ease-in-out infinite alternate; transform-origin: 215px 280px; }
            .walk-head { animation: headBob 0.5s ease-in-out infinite; transform-origin: 200px 130px; }

            @keyframes walkBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            @keyframes stepA { 0% { transform: rotate(-16deg); } 50% { transform: rotate(16deg); } 100% { transform: rotate(-16deg); } }
            @keyframes stepB { 0% { transform: rotate(16deg); } 50% { transform: rotate(-16deg); } 100% { transform: rotate(16deg); } }
            @keyframes tailSway { 0% { transform: rotate(-12deg); } 100% { transform: rotate(12deg); } }
            @keyframes headBob { 0%,100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-3px) rotate(-2deg); } 75% { transform: translateY(-3px) rotate(2deg); } }
          `}</style>
        )}

        <g className={isAnimating ? "body-group" : isWalking ? "walk-bounce" : ""} style={bodyStyle}>

          {/* === BODY === Organic cat torso - curved back, narrow waist, wider hips */}
          <path
            d="M180,140 
               C168,155 162,175 160,195
               C157,220 160,245 165,260
               C168,268 174,275 182,278
               L216,278
               C224,275 230,268 233,260
               C238,245 241,220 238,195
               C236,175 230,155 218,140 Z"
            fill="#111"
          />
          {/* Curved back spine line for depth */}
          <path
            d="M185,142 C178,160 174,185 175,210 C176,235 180,260 185,275"
            stroke="#1a1a1a"
            strokeWidth="3"
            fill="none"
            opacity="0.3"
          />
          {/* Chest area - subtle lighter fill */}
          <path
            d="M185,210 C183,230 185,255 190,275
               L208,275
               C213,255 215,230 213,210
               C210,195 188,195 185,210 Z"
            fill="#161616"
          />

          {/* Neck connection */}
          <path
            d="M182,142 C185,135 190,130 198,128
               C206,130 212,135 216,142"
            fill="#111"
          />

          {/* === FRONT LEGS === Shaped like real cat legs with joints */}
          <g className={isAnimating ? "front-legs" : ""} style={legsStyle}>
            {/* Left front leg - with shoulder and slight knee bend */}
            <g className={isWalking ? "fl-1" : ""}>
              <path
                d="M176,270 
                   C174,280 172,295 170,310
                   C169,320 168,330 168,338
                   C168,344 172,348 178,348
                   C184,348 188,344 188,338
                   C188,330 187,315 186,300
                   C185,290 184,280 183,272"
                fill="#111"
              />
              {/* Paw with toes */}
              <path d="M168,345 C166,348 168,352 174,353 L182,353 C188,352 190,348 188,345" fill="#111"/>
            </g>
            {/* Right front leg */}
            <g className={isWalking ? "fl-2" : ""}>
              <path
                d="M214,272 
                   C213,280 212,290 211,300
                   C210,315 209,330 209,338
                   C209,344 213,348 219,348
                   C225,348 229,344 229,338
                   C229,330 228,320 227,310
                   C225,295 223,280 221,270"
                fill="#111"
              />
              <path d="M209,345 C207,348 209,352 215,353 L223,353 C229,352 231,348 229,345" fill="#111"/>
            </g>
          </g>

          {/* === BACK LEGS (slightly darker, behind body) === */}
          <g className={isAnimating ? "back-legs" : ""} style={legsStyle}>
            <g className={isWalking ? "bl-1" : ""}>
              <path
                d="M170,265
                   C166,278 163,295 161,312
                   C160,325 160,335 162,342
                   C164,347 168,350 174,350
                   C179,349 182,345 181,340
                   C180,332 178,315 177,300
                   C176,288 175,278 174,270"
                fill="#0d0d0d"
              />
            </g>
            <g className={isWalking ? "bl-2" : ""}>
              <path
                d="M225,270
                   C226,278 227,288 228,300
                   C229,315 230,332 229,340
                   C228,345 225,349 220,350
                   C215,350 212,347 213,342
                   C214,335 215,325 216,312
                   C218,295 220,278 224,265"
                fill="#0d0d0d"
              />
            </g>
          </g>

          {/* === TAIL === Elegant curve */}
          <g className={isAnimating ? "tail-group" : isWalking ? "walk-tail" : ""} style={tailStyle}>
            <path
              d="M228,272 
                 C240,262 258,245 272,222
                 C282,204 288,182 286,162
                 C285,150 280,142 275,145
                 C272,148 272,155 273,165"
              stroke="#111"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* White tail tip */}
            <path
              d="M275,155 C274,148 272,142 268,136"
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* === HEAD === Natural rounded cat head */}
          <g className={isAnimating ? "head" : isWalking ? "walk-head" : ""} style={headStyle}>
            {/* Main head shape */}
            <path
              d="M168,108
                 C163,92 167,72 180,65
                 C188,61 196,59 204,59
                 C212,60 222,65 228,72
                 C236,82 239,98 236,112
                 C234,122 228,130 220,135
                 C212,139 204,141 196,140
                 C186,139 176,132 170,122
                 C168,118 167,113 168,108 Z"
              fill="#111"
            />
            {/* Cheek fluff - left */}
            <path
              d="M164,112 C160,120 162,130 170,134
                 C174,136 178,134 176,128
                 C174,124 167,118 164,112 Z"
              fill="#111"
            />
            {/* Cheek fluff - right */}
            <path
              d="M238,112 C242,120 240,130 232,134
                 C228,136 224,134 226,128
                 C228,124 235,118 238,112 Z"
              fill="#111"
            />

            {/* Left ear - graceful pointed */}
            <path
              d="M172,88 
                 C168,72 162,50 160,38
                 C159,30 162,26 167,30
                 C174,36 180,55 183,75"
              fill="#111"
            />
            {/* Left ear white tip */}
            <path
              d="M161,40 C160,33 162,28 165,28
                 C168,28 170,32 169,37 L161,40 Z"
              fill="white"
            />
            {/* Left ear inner pink/dark */}
            <path
              d="M167,62 C165,52 163,42 165,36
                 C167,33 170,35 171,40
                 C173,48 174,58 175,68"
              fill="#1a1a1a"
            />

            {/* Right ear */}
            <path
              d="M225,75
                 C228,55 234,36 240,30
                 C245,26 248,30 247,38
                 C246,50 240,72 236,88"
              fill="#111"
            />
            {/* Right ear white tip */}
            <path
              d="M239,37 C238,32 240,28 243,28
                 C246,28 248,33 247,40 L239,37 Z"
              fill="white"
            />
            {/* Right ear inner */}
            <path
              d="M233,68 C234,58 235,48 237,40
                 C238,35 241,33 242,36
                 C243,42 242,52 240,62"
              fill="#1a1a1a"
            />

            {/* === EYES === Almond-shaped cat eyes */}
            <g className={isAnimating ? "eyes" : ""} style={eyesStyle}>
              {/* Left eye outline */}
              <path
                d="M180,100 C184,93 194,93 198,100 C194,107 184,107 180,100 Z"
                fill="#22c55e"
              />
              {/* Left pupil - vertical slit */}
              <ellipse cx="189" cy="100" rx="2" ry="5.5" fill="#111" />
              {/* Left eye shine */}
              <circle cx="192" cy="98" r="1.8" fill="white" opacity="0.85" />
              <circle cx="187" cy="103" r="0.7" fill="white" opacity="0.4" />

              {/* Right eye */}
              <path
                d="M206,100 C210,93 220,93 224,100 C220,107 210,107 206,100 Z"
                fill="#22c55e"
              />
              <ellipse cx="215" cy="100" rx="2" ry="5.5" fill="#111" />
              <circle cx="218" cy="98" r="1.8" fill="white" opacity="0.85" />
              <circle cx="213" cy="103" r="0.7" fill="white" opacity="0.4" />
            </g>

            {/* Nose */}
            <path d="M200,116 L197,120 L203,120 Z" fill="#555" />
            {/* Mouth */}
            <path d="M200,120 C200,123 198,126 195,127" stroke="#333" strokeWidth="0.7" fill="none" />
            <path d="M200,120 C200,123 202,126 205,127" stroke="#333" strokeWidth="0.7" fill="none" />

            {/* Whiskers */}
            <line x1="172" y1="110" x2="138" y2="104" stroke="#555" strokeWidth="0.7" opacity="0.6" />
            <line x1="172" y1="114" x2="135" y2="114" stroke="#555" strokeWidth="0.7" opacity="0.6" />
            <line x1="172" y1="118" x2="138" y2="124" stroke="#555" strokeWidth="0.7" opacity="0.6" />
            <line x1="230" y1="110" x2="264" y2="104" stroke="#555" strokeWidth="0.7" opacity="0.6" />
            <line x1="230" y1="114" x2="267" y2="114" stroke="#555" strokeWidth="0.7" opacity="0.6" />
            <line x1="230" y1="118" x2="264" y2="124" stroke="#555" strokeWidth="0.7" opacity="0.6" />
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
