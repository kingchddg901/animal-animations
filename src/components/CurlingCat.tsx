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

  // Curling transforms: head tucks, body compresses, tail wraps, legs fold
  const headStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(20px, 10px) rotate(30deg)", transformOrigin: "140px 140px", transition: "transform 1s ease" }
    : (isStanding || isWalking)
    ? { transform: "translate(0,0) rotate(0deg)", transformOrigin: "140px 140px", transition: "transform 1s ease" }
    : undefined;

  const bodyStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(15deg)", transformOrigin: "250px 200px", transition: "transform 1s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg)", transformOrigin: "250px 200px", transition: "transform 1s ease" }
    : undefined;

  const tailStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "rotate(40deg) translate(-20px, 10px)", transformOrigin: "340px 180px", transition: "transform 1s ease" }
    : (isStanding || isWalking)
    ? { transform: "rotate(0deg) translate(0,0)", transformOrigin: "340px 180px", transition: "transform 1s ease" }
    : undefined;

  const legsStyle: React.CSSProperties | undefined = isCurled
    ? { opacity: 0, transition: "opacity 0.35s ease 0.45s" }
    : (isStanding || isWalking)
    ? { opacity: 1, transition: "opacity 0.25s ease" }
    : undefined;

  const legMotionTransition = "transform 0.95s cubic-bezier(0.22, 1, 0.36, 1)";

  const frontLeftLegStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(8px, -16px) rotate(-96deg) scaleY(0.38)", transformOrigin: "166px 198px", transition: legMotionTransition }
    : isStanding
    ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "166px 198px", transition: legMotionTransition }
    : undefined;

  const frontRightLegStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(6px, -14px) rotate(-90deg) scaleY(0.38)", transformOrigin: "194px 198px", transition: legMotionTransition }
    : isStanding
    ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "194px 198px", transition: legMotionTransition }
    : undefined;

  const backLeftLegStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(-8px, -18px) rotate(104deg) scaleY(0.38)", transformOrigin: "303px 198px", transition: legMotionTransition }
    : isStanding
    ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "303px 198px", transition: legMotionTransition }
    : undefined;

  const backRightLegStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(-7px, -16px) rotate(100deg) scaleY(0.38)", transformOrigin: "332px 195px", transition: legMotionTransition }
    : isStanding
    ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "332px 195px", transition: legMotionTransition }
    : undefined;

  const eyesStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "scaleY(0.15)", transformOrigin: "145px 117px", transition: "transform 0.8s ease" }
    : (isStanding || isWalking)
    ? { transform: "scaleY(1)", transformOrigin: "145px 117px", transition: "transform 0.8s ease" }
    : undefined;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="-10 -10 500 340"
        width="360"
        height="240"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {isAnimating && (
          <style>{`
            .a-head { animation: headTuck 3s ease-in-out infinite alternate; transform-origin: 140px 140px; }
            .a-body { animation: bodyCompress 3s ease-in-out infinite alternate; transform-origin: 250px 200px; }
            .a-tail { animation: tailCurl 3s ease-in-out infinite alternate; transform-origin: 340px 180px; }
            .a-legs { animation: legsFade 3s ease-in-out infinite alternate; }
            .a-fl { animation: frontLeftLegCurl 3s ease-in-out infinite alternate; transform-origin: 166px 198px; }
            .a-fr { animation: frontRightLegCurl 3s ease-in-out infinite alternate; transform-origin: 194px 198px; }
            .a-bl { animation: backLeftLegCurl 3s ease-in-out infinite alternate; transform-origin: 303px 198px; }
            .a-br { animation: backRightLegCurl 3s ease-in-out infinite alternate; transform-origin: 332px 195px; }
            .a-eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: 145px 117px; }

            @keyframes headTuck { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(20px,10px) rotate(30deg); } }
            @keyframes bodyCompress { 0% { transform: rotate(0deg); } 100% { transform: rotate(15deg); } }
            @keyframes tailCurl { 0% { transform: rotate(0deg) translate(0,0); } 100% { transform: rotate(40deg) translate(-20px,10px); } }
            @keyframes legsFade { 0%, 78% { opacity: 1; } 100% { opacity: 0; } }
            @keyframes frontLeftLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(2px,-5px) rotate(-34deg) scaleY(0.88); } 100% { transform: translate(8px,-16px) rotate(-96deg) scaleY(0.38); } }
            @keyframes frontRightLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(2px,-4px) rotate(-30deg) scaleY(0.88); } 100% { transform: translate(6px,-14px) rotate(-90deg) scaleY(0.38); } }
            @keyframes backLeftLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(-3px,-6px) rotate(36deg) scaleY(0.88); } 100% { transform: translate(-8px,-18px) rotate(104deg) scaleY(0.38); } }
            @keyframes backRightLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(-2px,-5px) rotate(34deg) scaleY(0.88); } 100% { transform: translate(-7px,-16px) rotate(100deg) scaleY(0.38); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 75% { transform:scaleY(1); } 100% { transform:scaleY(0.15); } }
          `}</style>
        )}

        {isWalking && (
          <style>{`
            .w-bounce { animation: wBounce 0.8s ease-in-out infinite; }
            .w-fl { animation: wStepA 0.8s ease-in-out infinite; transform-origin: 162px 198px; }
            .w-fr { animation: wStepB 0.8s ease-in-out infinite; transform-origin: 190px 198px; }
            .w-bl { animation: wStepB 0.8s ease-in-out infinite; transform-origin: 300px 195px; }
            .w-br { animation: wStepA 0.8s ease-in-out infinite; transform-origin: 325px 192px; }
            .w-tail { animation: wTailSway 0.8s ease-in-out infinite alternate; transform-origin: 340px 180px; }
            .w-head { animation: wHeadBob 0.8s ease-in-out infinite; transform-origin: 140px 160px; }

            @keyframes wBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
            @keyframes wStepA { 0% { transform: rotate(-10deg); } 25% { transform: rotate(10deg); } 50% { transform: rotate(10deg); } 75% { transform: rotate(-10deg); } 100% { transform: rotate(-10deg); } }
            @keyframes wStepB { 0% { transform: rotate(10deg); } 25% { transform: rotate(-10deg); } 50% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } 100% { transform: rotate(10deg); } }
            @keyframes wTailSway { 0% { transform: rotate(-10deg); } 100% { transform: rotate(10deg); } }
            @keyframes wHeadBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
          `}</style>
        )}

        <g className={isAnimating ? "a-body" : isWalking ? "w-bounce" : ""} style={bodyStyle}>

          {/* === BODY === Horizontal cat torso */}
          <path
            d="M145,160
               C155,145 180,135 210,132
               C240,130 280,130 310,135
               C330,138 345,148 348,162
               C350,175 345,190 335,198
               C320,208 290,212 260,212
               C230,212 190,210 170,205
               C155,200 142,185 145,160 Z"
            fill="hsl(var(--cat-fur))"
          />
          {/* Subtle belly curve */}
          <path
            d="M175,200 C200,210 240,212 280,210 C310,208 335,202 340,195"
            stroke="hsl(var(--cat-fur-highlight))"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />

          {/* Neck - connects body to head */}
          <path
            d="M150,155 C148,152 146,150 144,149
               C141,148 140,150 141,153
               C142,156 146,160 150,162"
            fill="hsl(var(--cat-fur))"
          />

          {/* === FRONT LEGS === Under the front of the body */}
          <g className={isAnimating ? "a-legs" : ""} style={legsStyle}>
            {/* Left front leg */}
            <g className={`${isAnimating ? "a-fl" : ""} ${isWalking ? "w-fl" : ""}`.trim()} style={frontLeftLegStyle}>
              <path
                d="M162,198
                   C160,210 158,228 157,245
                   C156,255 155,262 156,268
                   C157,274 162,278 168,278
                   C174,278 177,274 177,268
                   C177,260 176,248 175,235
                   C174,222 172,210 170,200"
                fill="hsl(var(--cat-fur))"
              />
              <ellipse cx="167" cy="277" rx="12" ry="5" fill="hsl(var(--cat-fur))" />
            </g>
            {/* Right front leg (slightly behind) */}
            <g className={`${isAnimating ? "a-fr" : ""} ${isWalking ? "w-fr" : ""}`.trim()} style={frontRightLegStyle}>
              <path
                d="M190,198
                   C188,210 186,228 185,245
                   C184,255 184,262 185,268
                   C186,274 190,278 196,278
                   C202,278 205,274 205,268
                   C205,260 204,248 203,235
                   C202,222 200,210 198,200"
                fill="hsl(var(--cat-fur-shadow))"
              />
              <ellipse cx="195" cy="277" rx="12" ry="5" fill="hsl(var(--cat-fur-shadow))" />
            </g>
          </g>

          {/* === BACK LEGS === Under the rear of the body, with haunch */}
          <g className={isAnimating ? "a-legs" : ""} style={legsStyle}>
            {/* Left back leg with thigh/haunch */}
            <g className={`${isAnimating ? "a-bl" : ""} ${isWalking ? "w-bl" : ""}`.trim()} style={backLeftLegStyle}>
              <path
                d="M300,195
                   C295,205 290,218 292,232
                   C293,242 295,255 296,265
                   C297,272 300,278 307,278
                   C314,278 316,272 315,265
                   C314,255 312,240 310,228
                   C308,215 306,205 305,198"
                fill="hsl(var(--cat-fur))"
              />
              <ellipse cx="307" cy="277" rx="12" ry="5" fill="hsl(var(--cat-fur))" />
            </g>
            {/* Right back leg */}
            <g className={`${isAnimating ? "a-br" : ""} ${isWalking ? "w-br" : ""}`.trim()} style={backRightLegStyle}>
              <path
                d="M325,192
                   C322,202 320,215 322,230
                   C323,242 325,255 326,265
                   C327,272 330,278 336,278
                   C342,278 344,272 343,265
                   C342,255 340,240 338,228
                   C336,215 334,202 332,195"
                fill="hsl(var(--cat-fur-shadow))"
              />
              <ellipse cx="336" cy="277" rx="12" ry="5" fill="hsl(var(--cat-fur-shadow))" />
            </g>
          </g>

          {/* === TAIL === Curves up from the rear */}
          <g className={isAnimating ? "a-tail" : isWalking ? "w-tail" : ""} style={tailStyle}>
            <path
              d="M345,170
                 C355,160 368,140 375,118
                 C380,100 378,82 372,75
                 C368,70 364,72 363,78
                 C362,85 365,98 366,108"
              stroke="hsl(var(--cat-fur))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* White tail tip */}
            <path
              d="M366,98 C365,90 363,82 362,76"
              stroke="hsl(var(--cat-white-tip))"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* === HEAD === Side-angled cat head on horizontal body */}
          <g className={isAnimating ? "a-head" : isWalking ? "w-head" : ""} style={headStyle}>
            {/* Main head */}
            <path
              d="M112,135
                 C107,120 112,100 124,93
                 C132,88 142,85 152,87
                 C162,89 170,95 174,105
                 C178,115 178,130 172,140
                 C167,148 160,153 150,155
                 C140,157 130,155 122,150
                 C117,147 113,142 112,135 Z"
              fill="hsl(var(--cat-fur))"
            />
            {/* Cheek fluff left */}
            <path
              d="M110,137 C106,145 108,153 116,155
                 C120,156 122,153 120,148
                 C118,143 112,140 110,137 Z"
              fill="hsl(var(--cat-fur))"
            />
            {/* Cheek fluff right */}
            <path
              d="M170,135 C174,141 174,149 168,153
                 C164,155 160,153 162,148
                 C164,143 168,139 170,135 Z"
              fill="hsl(var(--cat-fur))"
            />

            {/* Left ear */}
            <path
              d="M118,105
                 C114,87 108,65 107,53
                 C106,45 109,41 114,45
                 C120,51 126,69 128,87"
              fill="hsl(var(--cat-fur))"
            />
            <path
              d="M108,55 C107,47 109,43 112,43
                 C115,43 117,47 116,53 L108,55 Z"
              fill="hsl(var(--cat-white-tip))"
            />
            <path
              d="M114,75 C112,65 110,55 112,49
                 C114,45 117,47 118,52
                 C120,59 120,69 120,79"
              fill="hsl(var(--cat-ear-inner))"
            />

            {/* Right ear */}
            <path
              d="M160,87
                 C162,69 168,51 174,45
                 C179,41 182,45 181,53
                 C180,65 174,87 170,105"
              fill="hsl(var(--cat-fur))"
            />
            <path
              d="M173,53 C172,47 174,43 177,43
                 C180,43 182,47 181,55 L173,53 Z"
              fill="hsl(var(--cat-white-tip))"
            />
            <path
              d="M166,79 C168,69 170,59 172,52
                 C173,47 176,45 177,49
                 C178,55 176,65 174,75"
              fill="hsl(var(--cat-ear-inner))"
            />

            {/* === EYES === */}
            <g className={isAnimating ? "a-eyes" : ""} style={eyesStyle}>
              {/* Left eye */}
              <path
                d="M124,117 C128,110 138,110 142,117 C138,124 128,124 124,117 Z"
                fill="hsl(var(--cat-eye))"
              />
              <ellipse cx="133" cy="117" rx="2" ry="5.5" fill="hsl(var(--cat-pupil))" />
              <circle cx="136" cy="115" r="1.8" fill="hsl(var(--cat-white-tip))" opacity="0.85" />
              <circle cx="131" cy="119" r="0.7" fill="hsl(var(--cat-white-tip))" opacity="0.4" />

              {/* Right eye */}
              <path
                d="M148,117 C152,110 162,110 166,117 C162,124 152,124 148,117 Z"
                fill="hsl(var(--cat-eye))"
              />
              <ellipse cx="157" cy="117" rx="2" ry="5.5" fill="hsl(var(--cat-pupil))" />
              <circle cx="160" cy="115" r="1.8" fill="hsl(var(--cat-white-tip))" opacity="0.85" />
              <circle cx="155" cy="119" r="0.7" fill="hsl(var(--cat-white-tip))" opacity="0.4" />
            </g>

            {/* Nose */}
            <path d="M144,131 L141,135 L147,135 Z" fill="hsl(var(--cat-nose))" />
            {/* Mouth */}
            <path d="M144,135 C144,138 142,140 139,141" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" fill="none" />
            <path d="M144,135 C144,138 146,140 149,141" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" fill="none" />

            {/* Whiskers */}
            <line x1="117" y1="127" x2="84" y2="121" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
            <line x1="117" y1="131" x2="80" y2="131" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
            <line x1="117" y1="135" x2="84" y2="141" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
            <line x1="170" y1="127" x2="200" y2="121" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
            <line x1="170" y1="131" x2="204" y2="131" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
            <line x1="170" y1="135" x2="200" y2="141" stroke="hsl(var(--cat-whisker))" strokeWidth="0.7" opacity="0.6" />
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
