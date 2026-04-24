import { useState } from "react";
import CatBody, { CatLegs, CatFrontRightLeg, CatBackLeftLeg, CatBackRightLeg, CatTail, CatHead, CatEyes, CatFace } from "./animals/CatPaths";
import DogBody, { DogFrontLeftLeg, DogFrontRightLeg, DogBackLeftLeg, DogBackRightLeg, DogTail, DogHead, DogEyes, DogFace } from "./animals/DogPaths";
import RaccoonBody, { RaccoonFrontLeftLeg, RaccoonFrontRightLeg, RaccoonBackLeftLeg, RaccoonBackRightLeg, RaccoonTail, RaccoonHead, RaccoonEyes, RaccoonFace } from "./animals/RaccoonPaths";
import ParrotBody, { ParrotFrontLeftLeg, ParrotFrontRightLeg, ParrotBackLeftLeg, ParrotBackRightLeg, ParrotTail, ParrotHead, ParrotEyes, ParrotFace, ParrotPerch, ParrotWingLeft, ParrotWingRight } from "./animals/ParrotPaths";
import Snake from "./animals/SnakePaths";

export type AnimalType = "cat" | "dog" | "raccoon" | "parrot" | "snake";
type Pose = "animating" | "standing" | "curled" | "alert" | "walking";

const animalParts: Partial<Record<AnimalType, {
  Body: React.FC;
  FrontLeftLeg: React.FC;
  FrontRightLeg: React.FC;
  BackLeftLeg: React.FC;
  BackRightLeg: React.FC;
  Tail: React.FC;
  Head: React.FC;
  Eyes: React.FC;
  Face: React.FC;
  Extra?: React.FC;
}>> = {
  cat: { Body: CatBody, FrontLeftLeg: CatLegs, FrontRightLeg: CatFrontRightLeg, BackLeftLeg: CatBackLeftLeg, BackRightLeg: CatBackRightLeg, Tail: CatTail, Head: CatHead, Eyes: CatEyes, Face: CatFace },
  dog: { Body: DogBody, FrontLeftLeg: DogFrontLeftLeg, FrontRightLeg: DogFrontRightLeg, BackLeftLeg: DogBackLeftLeg, BackRightLeg: DogBackRightLeg, Tail: DogTail, Head: DogHead, Eyes: DogEyes, Face: DogFace },
  raccoon: { Body: RaccoonBody, FrontLeftLeg: RaccoonFrontLeftLeg, FrontRightLeg: RaccoonFrontRightLeg, BackLeftLeg: RaccoonBackLeftLeg, BackRightLeg: RaccoonBackRightLeg, Tail: RaccoonTail, Head: RaccoonHead, Eyes: RaccoonEyes, Face: RaccoonFace },
  parrot: { Body: ParrotBody, FrontLeftLeg: ParrotFrontLeftLeg, FrontRightLeg: ParrotFrontRightLeg, BackLeftLeg: ParrotBackLeftLeg, BackRightLeg: ParrotBackRightLeg, Tail: ParrotTail, Head: ParrotHead, Eyes: ParrotEyes, Face: ParrotFace, Extra: ParrotPerch },
};

const animalColors: Record<AnimalType, Record<string, string>> = {
  cat: {
    "--animal-fur": "0 0% 7%",
    "--animal-fur-shadow": "0 0% 5%",
    "--animal-fur-highlight": "0 0% 10%",
    "--animal-eye": "142 71% 45%",
    "--animal-pupil": "0 0% 7%",
    "--animal-nose": "0 0% 33%",
    "--animal-whisker": "0 0% 33%",
    "--animal-ear-inner": "0 0% 10%",
    "--animal-white-tip": "0 0% 100%",
  },
  dog: {
    "--animal-fur": "35 55% 45%",
    "--animal-fur-shadow": "30 50% 35%",
    "--animal-fur-highlight": "38 60% 60%",
    "--animal-eye": "25 60% 30%",
    "--animal-pupil": "0 0% 7%",
    "--animal-nose": "0 0% 12%",
    "--animal-whisker": "0 0% 25%",
    "--animal-ear-inner": "30 40% 35%",
    "--animal-white-tip": "38 60% 80%",
  },
  raccoon: {
    "--animal-fur": "0 0% 40%",
    "--animal-fur-shadow": "0 0% 28%",
    "--animal-fur-highlight": "0 0% 70%",
    "--animal-eye": "0 0% 15%",
    "--animal-pupil": "0 0% 5%",
    "--animal-nose": "0 0% 10%",
    "--animal-whisker": "0 0% 30%",
    "--animal-ear-inner": "0 0% 25%",
    "--animal-white-tip": "0 0% 95%",
  },
  parrot: {
    "--animal-fur": "145 60% 38%",
    "--animal-fur-shadow": "145 50% 28%",
    "--animal-fur-highlight": "55 75% 55%",
    "--animal-eye": "45 80% 50%",
    "--animal-pupil": "0 0% 5%",
    "--animal-nose": "0 0% 18%",
    "--animal-whisker": "0 0% 30%",
    "--animal-ear-inner": "145 45% 30%",
    "--animal-white-tip": "0 0% 95%",
  },
  snake: {
    "--animal-fur": "95 45% 32%",
    "--animal-fur-shadow": "95 50% 18%",
    "--animal-fur-highlight": "60 70% 55%",
    "--animal-eye": "45 95% 55%",
    "--animal-pupil": "0 0% 5%",
    "--animal-nose": "0 0% 10%",
    "--animal-whisker": "0 0% 30%",
    "--animal-ear-inner": "95 40% 25%",
    "--animal-white-tip": "60 50% 85%",
  },
};

const animalLabels: Record<AnimalType, string> = {
  cat: "🐱 Cat",
  dog: "🐕 Dog",
  raccoon: "🦝 Raccoon",
  parrot: "🦜 Parrot",
  snake: "🐍 Snake",
};

const AnimalSVG = () => {
  const [animal, setAnimal] = useState<AnimalType>("cat");
  const [pose, setPose] = useState<Pose>("animating");

  const animals: AnimalType[] = ["cat", "dog", "raccoon", "parrot", "snake"];
  const poses: Pose[] = ["animating", "standing", "curled", "alert", "walking"];
  const nextPose = () => setPose((p) => poses[(poses.indexOf(p) + 1) % poses.length]);

  const poseLabels: Record<Pose, string> = {
    animating: "Curling",
    standing: "Standing",
    curled: animal === "snake" ? "Resting" : "Sleeping",
    alert: "Alert",
    walking: animal === "parrot" ? "Flying" : animal === "snake" ? "Slithering" : "Walking",
  };

  const isAnimating = pose === "animating";
  const isCurled = pose === "curled";
  const isAlert = pose === "alert";
  const isWalking = pose === "walking";
  const isStanding = pose === "standing";
  // Alert shares the curled body/legs/tail but keeps head up and eyes open
  const isTucked = isCurled || isAlert;

  const parts = animalParts[animal];
  const colors = animalColors[animal];

  const legMotionTransition = "transform 0.95s cubic-bezier(0.22, 1, 0.36, 1)";

  const headStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "translate(20px, 10px) rotate(30deg)", transformOrigin: "140px 140px", transition: "transform 1s ease" }
    : (isStanding || isWalking || isAlert) ? { transform: "translate(0,0) rotate(0deg)", transformOrigin: "140px 140px", transition: "transform 1s ease" } : undefined;

  const bodyStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "rotate(15deg)", transformOrigin: "250px 200px", transition: "transform 1s ease" }
    : (isStanding || isWalking) ? { transform: "rotate(0deg)", transformOrigin: "250px 200px", transition: "transform 1s ease" } : undefined;

  const tailStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "rotate(40deg) translate(-20px, 10px)", transformOrigin: "340px 180px", transition: "transform 1s ease" }
    : (isStanding || isWalking) ? { transform: "rotate(0deg) translate(0,0)", transformOrigin: "340px 180px", transition: "transform 1s ease" } : undefined;

  const legsStyle: React.CSSProperties | undefined = isTucked
    ? { opacity: 0, transition: "opacity 0.35s ease 0.45s" }
    : (isStanding || isWalking) ? { opacity: 1, transition: "opacity 0.25s ease" } : undefined;

  const frontLeftLegStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "translate(8px, -16px) rotate(-96deg) scaleY(0.38)", transformOrigin: "166px 198px", transition: legMotionTransition }
    : isStanding ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "166px 198px", transition: legMotionTransition } : undefined;

  const frontRightLegStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "translate(6px, -14px) rotate(-90deg) scaleY(0.38)", transformOrigin: "194px 198px", transition: legMotionTransition }
    : isStanding ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "194px 198px", transition: legMotionTransition } : undefined;

  const backLeftLegStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "translate(-8px, -18px) rotate(104deg) scaleY(0.38)", transformOrigin: "303px 198px", transition: legMotionTransition }
    : isStanding ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "303px 198px", transition: legMotionTransition } : undefined;

  const backRightLegStyle: React.CSSProperties | undefined = isTucked
    ? { transform: "translate(-7px, -16px) rotate(100deg) scaleY(0.38)", transformOrigin: "332px 195px", transition: legMotionTransition }
    : isStanding ? { transform: "translate(0, 0) rotate(0deg) scaleY(1)", transformOrigin: "332px 195px", transition: legMotionTransition } : undefined;

  const eyesStyle: React.CSSProperties | undefined = isCurled
    ? { transform: "scaleY(0.15)", transformOrigin: "145px 117px", transition: "transform 0.8s ease" }
    : isAlert
    ? { transform: "scaleY(1.15)", transformOrigin: "145px 117px", transition: "transform 0.4s ease" }
    : (isStanding || isWalking) ? { transform: "scaleY(1)", transformOrigin: "145px 117px", transition: "transform 0.8s ease" } : undefined;

  // Build inline CSS vars from the animal color map
  const svgStyle: React.CSSProperties = Object.entries(colors).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: val }),
    { overflow: "visible" } as Record<string, string>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Animal selector */}
      <div className="flex gap-2">
        {animals.map((a) => (
          <button
            key={a}
            onClick={() => setAnimal(a)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              animal === a
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:opacity-80"
            }`}
          >
            {animalLabels[a]}
          </button>
        ))}
      </div>

      <svg
        viewBox="-10 -10 500 340"
        width="360"
        height="240"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
      >
        {isAnimating && animal !== "parrot" && (
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
            /* Knees fold tightly as legs tuck under body */
            .cat-fl-lower, .dog-fl-lower, .rac-fl-lower,
            .cat-fr-lower, .dog-fr-lower, .rac-fr-lower,
            .cat-bl-lower, .dog-bl-lower, .rac-bl-lower,
            .cat-br-lower, .dog-br-lower, .rac-br-lower { animation: kneeFold 3s ease-in-out infinite alternate; }
            @keyframes headTuck { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(20px,10px) rotate(30deg); } }
            @keyframes bodyCompress { 0% { transform: rotate(0deg); } 100% { transform: rotate(15deg); } }
            @keyframes tailCurl { 0% { transform: rotate(0deg) translate(0,0); } 100% { transform: rotate(40deg) translate(-20px,10px); } }
            @keyframes legsFade { 0%, 78% { opacity: 1; } 100% { opacity: 0; } }
            @keyframes frontLeftLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(2px,-5px) rotate(-34deg) scaleY(0.88); } 100% { transform: translate(8px,-16px) rotate(-96deg) scaleY(0.38); } }
            @keyframes frontRightLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(2px,-4px) rotate(-30deg) scaleY(0.88); } 100% { transform: translate(6px,-14px) rotate(-90deg) scaleY(0.38); } }
            @keyframes backLeftLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(-3px,-6px) rotate(36deg) scaleY(0.88); } 100% { transform: translate(-8px,-18px) rotate(104deg) scaleY(0.38); } }
            @keyframes backRightLegCurl { 0% { transform: translate(0,0) rotate(0deg) scaleY(1); } 55% { transform: translate(-2px,-5px) rotate(34deg) scaleY(0.88); } 100% { transform: translate(-7px,-16px) rotate(100deg) scaleY(0.38); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 75% { transform:scaleY(1); } 100% { transform:scaleY(0.15); } }
            @keyframes kneeFold { 0% { transform: rotate(0deg); } 60% { transform: rotate(-40deg); } 100% { transform: rotate(-75deg); } }
          `}</style>
        )}

        {/* Parrot-specific animations: legs stay on perch, body puffs up, head tucks backward */}
        {isAnimating && animal === "parrot" && (
          <style>{`
            .p-body { animation: pBodyPuff 3s ease-in-out infinite alternate; transform-origin: 258px 244px; }
            .p-head { animation: pHeadTuck 3s ease-in-out infinite alternate; transform-origin: 220px 140px; }
            .p-tail { animation: pTailDroop 3s ease-in-out infinite alternate; transform-origin: 320px 225px; }
            .p-eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: 218px 108px; }
            @keyframes pBodyPuff { 0% { transform: rotate(0deg) scaleX(1); } 100% { transform: rotate(5deg) scaleX(1.05); } }
            @keyframes pHeadTuck { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(15px,12px) rotate(-25deg); } }
            @keyframes pTailDroop { 0% { transform: rotate(0deg); } 100% { transform: rotate(10deg); } }
            @keyframes eyeClose { 0% { transform:scaleY(1); } 75% { transform:scaleY(1); } 100% { transform:scaleY(0.15); } }
          `}</style>
        )}

        {isWalking && animal !== "parrot" && (
          <style>{`
            .w-bounce { animation: wBounce 0.8s ease-in-out infinite; }
            .w-fl { animation: wStepA 0.8s ease-in-out infinite; transform-origin: 162px 198px; }
            .w-fr { animation: wStepB 0.8s ease-in-out infinite; transform-origin: 190px 198px; }
            .w-bl { animation: wStepB 0.8s ease-in-out infinite; transform-origin: 300px 195px; }
            .w-br { animation: wStepA 0.8s ease-in-out infinite; transform-origin: 325px 192px; }
            .w-tail { animation: wTailSway 0.8s ease-in-out infinite alternate; transform-origin: 340px 180px; }
            .w-head { animation: wHeadBob 0.8s ease-in-out infinite; transform-origin: 140px 160px; }
            /* Knee/hock flex during step — applies to all quadruped lower-leg groups */
            .cat-fl-lower, .dog-fl-lower, .rac-fl-lower,
            .cat-br-lower, .dog-br-lower, .rac-br-lower { animation: kneeFlexA 0.8s ease-in-out infinite; }
            .cat-fr-lower, .dog-fr-lower, .rac-fr-lower,
            .cat-bl-lower, .dog-bl-lower, .rac-bl-lower { animation: kneeFlexB 0.8s ease-in-out infinite; }
            @keyframes wBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
            @keyframes wStepA { 0% { transform: rotate(-10deg); } 25% { transform: rotate(10deg); } 50% { transform: rotate(10deg); } 75% { transform: rotate(-10deg); } 100% { transform: rotate(-10deg); } }
            @keyframes wStepB { 0% { transform: rotate(10deg); } 25% { transform: rotate(-10deg); } 50% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } 100% { transform: rotate(10deg); } }
            @keyframes wTailSway { 0% { transform: rotate(-10deg); } 100% { transform: rotate(10deg); } }
            @keyframes wHeadBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
            @keyframes kneeFlexA { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-22deg); } 50% { transform: rotate(0deg); } }
            @keyframes kneeFlexB { 0%,100% { transform: rotate(0deg); } 75% { transform: rotate(-22deg); } }
          `}</style>
        )}

        {/* Parrot flight animation: whole bird lifts off perch, wings flap */}
        {isWalking && animal === "parrot" && (
          <style>{`
            .f-whole { animation: fLift 1.2s ease-in-out infinite; }
            .f-body { animation: fBodyTilt 1.2s ease-in-out infinite; transform-origin: 258px 200px; }
            .f-head { animation: fHeadBob 1.2s ease-in-out infinite; transform-origin: 220px 120px; }
            .f-tail { animation: fTailStream 1.2s ease-in-out infinite alternate; transform-origin: 320px 225px; }
            .f-legs { animation: fLegsTuck 1.2s ease-in-out infinite; transform-origin: 258px 244px; }
            .f-wing-l { animation: fWingFlapL 0.4s ease-in-out infinite alternate; transform-origin: 210px 155px; }
            .f-wing-r { animation: fWingFlapR 0.4s ease-in-out infinite alternate; transform-origin: 310px 155px; }
            @keyframes fLift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
            @keyframes fBodyTilt { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-8deg); } 75% { transform: rotate(8deg); } }
            @keyframes fHeadBob { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-3px) rotate(-5deg); } }
            @keyframes fTailStream { 0% { transform: rotate(-5deg); } 100% { transform: rotate(12deg); } }
            @keyframes fLegsTuck { 0%,100% { transform: translateY(0) scaleY(1); } 50% { transform: translateY(-8px) scaleY(0.7); } }
            @keyframes fWingFlapL { 0% { transform: rotate(25deg); } 100% { transform: rotate(-30deg); } }
            @keyframes fWingFlapR { 0% { transform: rotate(-25deg); } 100% { transform: rotate(30deg); } }
          `}</style>
        )}

        {/* Alert pose: tucked but watchful — head scans, ears/tail twitch */}
        {isAlert && animal !== "parrot" && (
          <style>{`
            .al-head { animation: alHeadScan 2.4s ease-in-out infinite; transform-origin: 140px 140px; }
            .al-tail { animation: alTailFlick 1.6s ease-in-out infinite; transform-origin: 340px 180px; }
            @keyframes alHeadScan { 0%,100% { transform: translate(0,0) rotate(-6deg); } 50% { transform: translate(2px,-1px) rotate(6deg); } }
            @keyframes alTailFlick { 0%,70%,100% { transform: rotate(40deg) translate(-20px,10px); } 80% { transform: rotate(55deg) translate(-22px,8px); } 90% { transform: rotate(30deg) translate(-18px,12px); } }
          `}</style>
        )}

        {isAlert && animal === "parrot" && (
          <style>{`
            .al-p-head { animation: alPHeadScan 2.4s ease-in-out infinite; transform-origin: 220px 140px; }
            .al-p-body { animation: alPBodyShift 3s ease-in-out infinite alternate; transform-origin: 258px 244px; }
            @keyframes alPHeadScan { 0%,100% { transform: translate(0,0) rotate(-8deg); } 50% { transform: translate(3px,-2px) rotate(10deg); } }
            @keyframes alPBodyShift { 0% { transform: rotate(0deg) scaleX(1.05); } 100% { transform: rotate(2deg) scaleX(1.06); } }
          `}</style>
        )}

        {/* Extra elements like perch */}
        {parts?.Extra && <parts.Extra />}

        {animal === "snake" ? (
          <Snake
            mode={
              isAnimating
                ? "curling"
                : isWalking
                ? "moving"
                : isAlert
                ? "alert"
                : isCurled
                ? "resting"
                : "standing"
            }
          />
        ) : animal === "parrot" && parts ? (
          /* Parrot: legs anchored to perch, flight lifts whole bird */
          <g className={isWalking ? "f-whole" : ""}>
            {/* Legs — tuck during flight, stay fixed otherwise */}
            <g className={isWalking ? "f-legs" : ""}>
              <parts.FrontLeftLeg />
              <parts.FrontRightLeg />
            </g>

            {/* Body */}
            <g
              className={isAnimating ? "p-body" : isWalking ? "f-body" : isAlert ? "al-p-body" : ""}
              style={
                isCurled
                  ? { transform: "rotate(5deg) scaleX(1.05)", transformOrigin: "258px 244px", transition: "transform 1s ease" }
                  : isAlert
                  ? { transform: "rotate(0deg) scaleX(1.05)", transformOrigin: "258px 244px", transition: "transform 1s ease" }
                  : isStanding
                  ? { transform: "rotate(0deg) scaleX(1)", transformOrigin: "258px 244px", transition: "transform 1s ease" }
                  : undefined
              }
            >
              <parts.Body />

              {/* Wings — only visible in flight */}
              {isWalking && (
                <>
                  <ParrotWingLeft />
                  <ParrotWingRight />
                </>
              )}

              {/* Tail */}
              <g
                className={isAnimating ? "p-tail" : isWalking ? "f-tail" : ""}
                style={
                  isCurled
                    ? { transform: "rotate(10deg)", transformOrigin: "320px 225px", transition: "transform 1s ease" }
                    : isAlert
                    ? { transform: "rotate(8deg)", transformOrigin: "320px 225px", transition: "transform 1s ease" }
                    : isStanding
                    ? { transform: "rotate(0deg)", transformOrigin: "320px 225px", transition: "transform 1s ease" }
                    : undefined
                }
              >
                <parts.Tail />
              </g>

              {/* Head */}
              <g
                className={isAnimating ? "p-head" : isWalking ? "f-head" : isAlert ? "al-p-head" : ""}
                style={
                  isCurled
                    ? { transform: "translate(15px,12px) rotate(-25deg)", transformOrigin: "220px 140px", transition: "transform 1s ease" }
                    : (isStanding || isAlert)
                    ? { transform: "translate(0,0) rotate(0deg)", transformOrigin: "220px 140px", transition: "transform 1s ease" }
                    : undefined
                }
              >
                <parts.Head />
                <g
                  className={isAnimating ? "p-eyes" : ""}
                  style={
                    isCurled
                      ? { transform: "scaleY(0.15)", transformOrigin: "218px 108px", transition: "transform 0.8s ease" }
                      : isAlert
                      ? { transform: "scaleY(1.15)", transformOrigin: "218px 108px", transition: "transform 0.4s ease" }
                      : isStanding
                      ? { transform: "scaleY(1)", transformOrigin: "218px 108px", transition: "transform 0.8s ease" }
                      : undefined
                  }
                >
                  <parts.Eyes />
                </g>
                <parts.Face />
              </g>
            </g>
          </g>
        ) : (
          /* Quadrupeds: body is the anchor, legs nest inside */
          <g className={isAnimating ? "a-body" : isWalking ? "w-bounce" : ""} style={bodyStyle}>
            <parts.Body />

            {/* Front legs */}
            <g className={isAnimating ? "a-legs" : ""} style={legsStyle}>
              <g className={`${isAnimating ? "a-fl" : ""} ${isWalking ? "w-fl" : ""}`.trim()} style={frontLeftLegStyle}>
                <parts.FrontLeftLeg />
              </g>
              <g className={`${isAnimating ? "a-fr" : ""} ${isWalking ? "w-fr" : ""}`.trim()} style={frontRightLegStyle}>
                <parts.FrontRightLeg />
              </g>
            </g>

            {/* Back legs */}
            <g className={isAnimating ? "a-legs" : ""} style={legsStyle}>
              <g className={`${isAnimating ? "a-bl" : ""} ${isWalking ? "w-bl" : ""}`.trim()} style={backLeftLegStyle}>
                <parts.BackLeftLeg />
              </g>
              <g className={`${isAnimating ? "a-br" : ""} ${isWalking ? "w-br" : ""}`.trim()} style={backRightLegStyle}>
                <parts.BackRightLeg />
              </g>
            </g>

            {/* Tail */}
            <g className={isAnimating ? "a-tail" : isWalking ? "w-tail" : isAlert ? "al-tail" : ""} style={tailStyle}>
              <parts.Tail />
            </g>

            {/* Head */}
            <g className={isAnimating ? "a-head" : isWalking ? "w-head" : isAlert ? "al-head" : ""} style={headStyle}>
              <parts.Head />
              <g className={isAnimating ? "a-eyes" : ""} style={eyesStyle}>
                <parts.Eyes />
              </g>
              <parts.Face />
            </g>
          </g>
        )}
      </svg>

      <button
        onClick={nextPose}
        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-80 transition-opacity"
      >
        {poseLabels[pose]}
      </button>
    </div>
  );
};

export default AnimalSVG;
