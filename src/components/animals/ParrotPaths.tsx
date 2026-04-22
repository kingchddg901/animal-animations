/** Parrot — perched, side profile, same coordinate space */
const ParrotBody = () => (
  <>
    {/* Plump body — green/teal */}
    <path
      d="M200,130 C220,118 260,115 290,120
         C315,125 335,140 340,165
         C345,190 338,215 320,230
         C305,242 280,248 255,248
         C230,248 210,242 198,230
         C185,218 182,195 188,170
         C192,150 196,138 200,130 Z"
      fill="hsl(var(--animal-fur))"
    />
    {/* Breast — lighter */}
    <path
      d="M210,170 C215,155 235,145 260,142
         C280,140 300,145 310,155
         C320,170 318,195 308,215
         C298,230 278,240 258,242
         C238,242 220,235 212,220
         C205,208 205,188 210,170 Z"
      fill="hsl(var(--animal-fur-highlight))" opacity="0.35"
    />
  </>
);

export const ParrotFrontLeftLeg = () => (
  <>
    {/* Short legs with gripping feet */}
    <path d="M240,244 C238,255 237,265 238,272 C239,276 242,278 245,278" stroke="hsl(var(--animal-whisker))" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Talons */}
    <path d="M245,278 C248,280 250,278 248,275" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
    <path d="M245,278 C243,280 240,279 241,276" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
    <path d="M245,278 C246,281 244,283 242,281" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
  </>
);

export const ParrotFrontRightLeg = () => (
  <>
    <path d="M275,244 C273,255 272,265 273,272 C274,276 277,278 280,278" stroke="hsl(var(--animal-whisker))" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M280,278 C283,280 285,278 283,275" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
    <path d="M280,278 C278,280 275,279 276,276" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
    <path d="M280,278 C281,281 279,283 277,281" stroke="hsl(var(--animal-whisker))" strokeWidth="2" fill="none" />
  </>
);

export const ParrotBackLeftLeg = () => <></>;
export const ParrotBackRightLeg = () => <></>;

export const ParrotTail = () => (
  <>
    {/* Long tail feathers */}
    <path d="M320,225 C335,240 350,268 355,295 C358,310 355,320 350,318 C345,315 340,300 335,280" stroke="hsl(var(--animal-fur))" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M315,228 C328,245 340,275 342,300 C343,312 340,318 336,316 C332,312 330,295 328,275" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M310,230 C320,250 328,280 328,305 C328,315 325,318 322,316 C320,312 318,295 318,275" stroke="hsl(var(--animal-eye))" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
  </>
);

export const ParrotHead = () => (
  <>
    {/* Round head */}
    <path d="M180,125 C175,108 180,88 195,78 C206,72 220,70 234,72 C248,75 258,85 262,100 C265,115 260,132 250,142 C240,150 228,154 216,154 C204,152 192,148 186,140 C182,135 180,130 180,125 Z" fill="hsl(var(--animal-fur))" />
    {/* Cere (above beak) */}
    <path d="M192,130 C188,125 188,118 194,115 C200,112 208,115 210,120 C212,126 208,132 200,132 C196,132 193,131 192,130 Z" fill="hsl(var(--animal-white-tip))" opacity="0.7" />
  </>
);

export const ParrotEyes = () => (
  <>
    {/* White eye ring */}
    <circle cx="218" cy="108" r="10" fill="hsl(var(--animal-white-tip))" opacity="0.6" />
    <ellipse cx="218" cy="108" rx="6" ry="6.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="218" cy="108" rx="3" ry="4" fill="hsl(var(--animal-pupil))" />
    <circle cx="220" cy="106" r="2" fill="hsl(var(--animal-white-tip))" opacity="0.9" />
  </>
);

export const ParrotFace = () => (
  <>
    {/* Curved beak — upper */}
    <path d="M190,128 C185,130 178,132 174,130 C170,128 168,122 172,118 C176,114 184,116 190,120 C194,124 192,128 190,128 Z" fill="hsl(var(--animal-nose))" />
    {/* Lower beak */}
    <path d="M190,128 C186,132 180,134 176,132 C173,130 174,126 178,125" fill="hsl(var(--animal-whisker))" opacity="0.5" />
    {/* Nostril */}
    <circle cx="184" cy="122" r="1.2" fill="hsl(var(--animal-pupil))" opacity="0.4" />
  </>
);

/** Perch/branch for the parrot to stand on */
export const ParrotPerch = () => (
  <path d="M200,278 L320,278" stroke="hsl(var(--animal-whisker))" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
);

export default ParrotBody;
