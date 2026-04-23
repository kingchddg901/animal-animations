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
    {/* Upper leg to knee */}
    <path d="M172,225 C169,235 168,245 170,252 C172,256 176,258 178,255 C180,250 179,244 177,238 C175,232 175,228 176,224" fill="hsl(var(--animal-fur))" />
    {/* Lower leg from knee */}
    <path d="M178,255 C176,264 175,274 176,280" fill="hsl(var(--animal-fur))" />
    {/* Hand-like paw with fingers */}
    <path d="M170,280 C168,284 170,288 174,288 C176,288 177,286 177,284" fill="hsl(var(--animal-pupil))" />
    <path d="M174,280 C174,285 176,289 179,289 C181,289 182,286 181,284" fill="hsl(var(--animal-pupil))" />
    <path d="M179,279 C180,284 183,288 186,287 C188,286 188,283 186,281" fill="hsl(var(--animal-pupil))" />
    <path d="M183,278 C185,282 188,285 190,284 C192,282 191,279 189,278" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonFrontRightLeg = () => (
  <>
    <path d="M205,225 C202,235 201,245 203,252 C205,256 209,258 211,255 C213,250 212,244 210,238 C208,232 208,228 209,224" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M211,255 C209,264 208,274 209,280" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M203,280 C201,284 203,288 207,288 C209,288 210,286 210,284" fill="hsl(var(--animal-pupil))" />
    <path d="M207,280 C207,285 209,289 212,289 C214,289 215,286 214,284" fill="hsl(var(--animal-pupil))" />
    <path d="M212,279 C213,284 216,288 219,287 C221,286 221,283 219,281" fill="hsl(var(--animal-pupil))" />
    <path d="M216,278 C218,282 221,285 223,284 C225,282 224,279 222,278" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackLeftLeg = () => (
  <>
    {/* Haunch to hock */}
    <path d="M295,222 C291,232 289,242 291,252 C293,256 297,258 300,255 C302,250 301,242 299,235 C297,228 296,224 298,220" fill="hsl(var(--animal-fur))" />
    {/* Lower leg from hock */}
    <path d="M300,255 C298,264 298,274 299,280" fill="hsl(var(--animal-fur))" />
    <path d="M293,280 C291,284 293,288 297,288 C299,288 300,286 300,284" fill="hsl(var(--animal-pupil))" />
    <path d="M297,280 C297,285 299,289 302,289 C304,289 305,286 304,284" fill="hsl(var(--animal-pupil))" />
    <path d="M302,279 C303,284 306,288 309,287 C311,286 311,283 309,281" fill="hsl(var(--animal-pupil))" />
    <path d="M306,278 C308,282 311,285 313,284 C315,282 314,279 312,278" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackRightLeg = () => (
  <>
    <path d="M328,218 C324,228 323,238 325,248 C327,254 331,256 333,253 C335,248 334,240 332,233 C330,226 330,220 332,216" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M333,253 C332,262 332,272 333,278" fill="hsl(var(--animal-fur-shadow))" />
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
