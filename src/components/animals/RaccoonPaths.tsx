/** Raccoon — chunky body, bandit mask, ringed tail, hand-like paws */
const RaccoonBody = () => (
  <>
    {/* Chunky rounded torso — raccoons are pudgy */}
    <path
      d="M145,150 C152,132 180,120 220,117
         C260,115 300,120 325,130
         C345,140 358,158 358,178
         C358,200 348,215 330,224
         C310,234 275,238 245,238
         C215,238 180,234 162,224
         C142,214 134,195 138,172
         C140,162 142,155 145,150 Z"
      fill="hsl(var(--animal-fur))"
    />
    {/* Lighter underbelly */}
    <path
      d="M175,190 C190,175 225,168 260,168
         C290,168 315,175 325,190
         C332,202 328,218 318,228
         C305,235 275,238 250,238
         C225,238 195,235 182,228
         C170,218 168,205 175,190 Z"
      fill="hsl(var(--animal-fur-highlight))" opacity="0.35"
    />
    {/* Neck — thicker */}
    <path d="M152,148 C146,142 140,138 136,138 C130,140 130,146 134,152 C138,158 146,162 152,162" fill="hsl(var(--animal-fur))" />
  </>
);

export const RaccoonFrontLeftLeg = () => (
  <>
    {/* Stocky leg */}
    <path d="M172,225 C168,238 166,252 167,264 C168,270 171,276 176,278 C181,280 186,278 188,274 C190,268 189,258 187,248 C185,235 182,225 180,220" fill="hsl(var(--animal-fur))" />
    {/* Hand-like paw with fingers */}
    <path d="M170,278 C168,282 170,286 174,286 C176,286 177,284 177,282" fill="hsl(var(--animal-pupil))" />
    <path d="M174,278 C174,283 176,287 179,287 C181,287 182,284 181,282" fill="hsl(var(--animal-pupil))" />
    <path d="M179,277 C180,282 183,286 186,285 C188,284 188,281 186,279" fill="hsl(var(--animal-pupil))" />
    <path d="M183,276 C185,280 188,283 190,282 C192,280 191,277 189,276" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonFrontRightLeg = () => (
  <>
    <path d="M205,225 C202,238 200,252 201,264 C202,270 205,276 210,278 C215,280 220,278 222,274 C224,268 223,258 221,248 C219,235 216,225 214,220" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M204,278 C202,282 204,286 208,286 C210,286 211,284 211,282" fill="hsl(var(--animal-pupil))" />
    <path d="M208,278 C208,283 210,287 213,287 C215,287 216,284 215,282" fill="hsl(var(--animal-pupil))" />
    <path d="M213,277 C214,282 217,286 220,285 C222,284 222,281 220,279" fill="hsl(var(--animal-pupil))" />
    <path d="M217,276 C219,280 222,283 224,282 C226,280 225,277 223,276" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackLeftLeg = () => (
  <>
    <path d="M295,222 C290,235 288,250 290,264 C291,270 294,276 299,278 C304,280 309,278 311,274 C313,268 312,258 310,248 C308,235 304,222 302,218" fill="hsl(var(--animal-fur))" />
    <path d="M293,278 C291,282 293,286 297,286 C299,286 300,284 300,282" fill="hsl(var(--animal-pupil))" />
    <path d="M297,278 C297,283 299,287 302,287 C304,287 305,284 304,282" fill="hsl(var(--animal-pupil))" />
    <path d="M302,277 C303,282 306,286 309,285 C311,284 311,281 309,279" fill="hsl(var(--animal-pupil))" />
    <path d="M306,276 C308,280 311,283 313,282 C315,280 314,277 312,276" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackRightLeg = () => (
  <>
    <path d="M328,218 C324,232 322,248 324,264 C325,270 328,276 333,278 C338,280 343,278 345,274 C347,268 346,258 344,248 C342,232 338,218 336,214" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M327,278 C325,282 327,286 331,286 C333,286 334,284 334,282" fill="hsl(var(--animal-pupil))" />
    <path d="M331,278 C331,283 333,287 336,287 C338,287 339,284 338,282" fill="hsl(var(--animal-pupil))" />
    <path d="M336,277 C337,282 340,286 343,285 C345,284 345,281 343,279" fill="hsl(var(--animal-pupil))" />
    <path d="M340,276 C342,280 345,283 347,282 C349,280 348,277 346,276" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonTail = () => (
  <>
    {/* Thick bushy tail with prominent rings */}
    <path
      d="M352,170 C362,155 370,132 374,108
         C376,88 374,72 368,68
         C362,65 358,70 358,82
         C358,95 360,115 358,135"
      stroke="hsl(var(--animal-fur))" strokeWidth="16" fill="none" strokeLinecap="round"
    />
    {/* Dark rings — thick and obvious */}
    <path d="M372,115 C373,108 373,100 372,94" stroke="hsl(var(--animal-pupil))" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M366,140 C368,132 369,124 369,118" stroke="hsl(var(--animal-pupil))" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M374,88 C375,82 374,76 372,72" stroke="hsl(var(--animal-pupil))" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.6" />
    {/* Bushy tip */}
    <circle cx="368" cy="68" r="10" fill="hsl(var(--animal-pupil))" opacity="0.5" />
  </>
);

export const RaccoonHead = () => (
  <>
    {/* Wider, rounder head */}
    <path
      d="M104,132 C100,112 106,90 122,80
         C134,72 150,68 166,70
         C182,73 194,85 198,102
         C202,118 198,138 188,150
         C178,160 164,166 148,168
         C132,168 118,162 110,152
         C106,146 104,140 104,132 Z"
      fill="hsl(var(--animal-fur))"
    />
    {/* White face — broader, covering cheeks and forehead stripe */}
    <path
      d="M125,140 C122,128 126,115 136,108
         C144,103 155,103 163,108
         C172,115 176,128 173,140
         C170,150 162,158 150,160
         C138,160 128,152 125,140 Z"
      fill="hsl(var(--animal-white-tip))" opacity="0.7"
    />
    {/* Forehead stripe — white line between the eyes */}
    <path d="M148,80 C148,88 148,96 148,108" stroke="hsl(var(--animal-white-tip))" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
    {/* Rounded ears — short, not pointed */}
    <ellipse cx="118" cy="72" rx="10" ry="14" fill="hsl(var(--animal-fur))" />
    <ellipse cx="118" cy="72" rx="6" ry="9" fill="hsl(var(--animal-ear-inner))" />
    <ellipse cx="178" cy="72" rx="10" ry="14" fill="hsl(var(--animal-fur))" />
    <ellipse cx="178" cy="72" rx="6" ry="9" fill="hsl(var(--animal-ear-inner))" />
  </>
);

export const RaccoonEyes = () => (
  <>
    {/* Bandit mask — single dark band across both eyes */}
    <path
      d="M112,108 C114,98 124,92 136,92
         C148,92 154,96 158,100
         C162,96 168,92 180,92
         C192,92 200,98 202,108
         C204,118 198,128 186,130
         C174,132 164,126 158,120
         C152,126 142,132 130,130
         C118,128 112,118 112,108 Z"
      fill="hsl(var(--animal-pupil))" opacity="0.75"
    />
    {/* Eyes — bright against the dark mask */}
    <ellipse cx="136" cy="112" rx="6" ry="6.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="136" cy="112" rx="3" ry="4" fill="hsl(var(--animal-pupil))" />
    <circle cx="138" cy="110" r="2" fill="hsl(var(--animal-white-tip))" opacity="0.9" />
    <ellipse cx="170" cy="112" rx="6" ry="6.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="170" cy="112" rx="3" ry="4" fill="hsl(var(--animal-pupil))" />
    <circle cx="172" cy="110" r="2" fill="hsl(var(--animal-white-tip))" opacity="0.9" />
  </>
);

export const RaccoonFace = () => (
  <>
    {/* Pointier snout with dark nose */}
    <path d="M148,138 C144,142 140,148 140,152 C140,156 144,158 148,156 C152,154 155,150 156,146 C157,150 160,154 164,156 C168,158 172,156 172,152 C172,148 168,142 164,138" fill="hsl(var(--animal-fur-highlight))" opacity="0.5" />
    <ellipse cx="156" cy="142" rx="5" ry="4" fill="hsl(var(--animal-nose))" />
    {/* Mouth line */}
    <path d="M156,146 C154,150 152,152 150,153" stroke="hsl(var(--animal-whisker))" strokeWidth="0.8" fill="none" />
    <path d="M156,146 C158,150 160,152 162,153" stroke="hsl(var(--animal-whisker))" strokeWidth="0.8" fill="none" />
  </>
);

export default RaccoonBody;
