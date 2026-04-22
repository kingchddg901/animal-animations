/** Raccoon — same coordinate space */
const RaccoonBody = () => (
  <>
    {/* Stocky torso */}
    <path
      d="M140,158 C150,140 178,130 215,127 C250,125 288,127 315,133
         C335,138 350,152 352,168 C354,185 348,200 335,208
         C318,218 285,222 255,222 C225,222 190,218 168,210
         C148,204 136,185 140,158 Z"
      fill="hsl(var(--animal-fur))"
    />
    {/* Lighter belly */}
    <path
      d="M180,205 C215,218 260,220 300,215 C325,210 342,202 348,195"
      stroke="hsl(var(--animal-fur-highlight))" strokeWidth="3" fill="none" opacity="0.3"
    />
    {/* Neck */}
    <path d="M146,154 C142,150 138,148 135,148 C131,148 130,151 132,155 C134,160 140,165 146,167" fill="hsl(var(--animal-fur))" />
  </>
);

export const RaccoonFrontLeftLeg = () => (
  <>
    <path d="M162,208 C160,220 158,236 158,252 C158,262 160,270 164,274 C168,278 174,278 177,274 C180,270 180,262 179,252 C178,236 176,220 174,208" fill="hsl(var(--animal-fur))" />
    <ellipse cx="170" cy="277" rx="12" ry="5" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonFrontRightLeg = () => (
  <>
    <path d="M192,208 C190,220 188,236 188,252 C188,262 190,270 194,274 C198,278 204,278 207,274 C210,270 210,262 209,252 C208,236 206,220 204,208" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="200" cy="277" rx="12" ry="5" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackLeftLeg = () => (
  <>
    <path d="M300,205 C295,218 292,232 294,248 C295,258 298,268 302,274 C306,278 312,278 315,274 C318,268 318,258 316,248 C314,232 310,218 308,205" fill="hsl(var(--animal-fur))" />
    <ellipse cx="308" cy="277" rx="12" ry="5" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonBackRightLeg = () => (
  <>
    <path d="M330,202 C326,215 324,230 326,248 C327,258 330,268 334,274 C338,278 344,278 347,274 C350,268 350,258 348,248 C346,230 342,215 340,202" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="340" cy="277" rx="12" ry="5" fill="hsl(var(--animal-pupil))" />
  </>
);

export const RaccoonTail = () => (
  <>
    {/* Bushy striped tail */}
    <path d="M348,165 C358,152 365,132 368,110 C370,92 366,78 360,75 C355,73 352,78 353,88 C355,100 358,118 358,130" stroke="hsl(var(--animal-fur))" strokeWidth="12" fill="none" strokeLinecap="round" />
    {/* Tail stripes */}
    <path d="M366,118 C367,112 367,106 366,100" stroke="hsl(var(--animal-pupil))" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M362,138 C364,132 365,126 365,120" stroke="hsl(var(--animal-pupil))" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M360,75 C355,73 352,78 353,88" stroke="hsl(var(--animal-pupil))" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
  </>
);

export const RaccoonHead = () => (
  <>
    {/* Rounder head */}
    <path d="M108,138 C103,120 108,98 122,90 C132,84 144,80 156,82 C168,84 178,92 182,106 C186,120 184,138 176,148 C168,156 158,160 146,162 C134,163 122,160 114,152 C110,148 108,144 108,138 Z" fill="hsl(var(--animal-fur))" />
    {/* White face markings */}
    <path d="M120,128 C118,120 122,112 130,110 C138,108 146,112 148,120 C150,128 146,136 138,138 C130,140 122,136 120,128 Z" fill="hsl(var(--animal-fur-highlight))" opacity="0.6" />
    <path d="M148,128 C146,120 150,112 158,110 C166,108 172,112 174,120 C176,128 172,136 164,138 C156,140 150,136 148,128 Z" fill="hsl(var(--animal-fur-highlight))" opacity="0.6" />
    {/* Pointed ears */}
    <path d="M116,100 C112,85 108,68 110,56 C112,48 116,46 120,50 C124,56 124,72 122,88" fill="hsl(var(--animal-fur))" />
    <path d="M114,68 C114,60 116,52 118,50 C120,48 122,52 122,58 C122,64 120,72 118,76" fill="hsl(var(--animal-ear-inner))" />
    <path d="M168,88 C170,72 174,56 176,50 C178,46 182,48 183,56 C184,68 180,85 176,100" fill="hsl(var(--animal-fur))" />
    <path d="M176,76 C176,64 178,58 180,52 C182,48 184,52 183,58 C182,60 180,68 178,72" fill="hsl(var(--animal-ear-inner))" />
  </>
);

export const RaccoonEyes = () => (
  <>
    {/* Raccoon mask — dark patches around eyes */}
    <path d="M118,115 C116,108 120,102 128,100 C136,98 142,102 144,110 C146,118 142,124 134,126 C126,128 120,124 118,115 Z" fill="hsl(var(--animal-pupil))" opacity="0.7" />
    <path d="M150,115 C148,108 152,102 160,100 C168,98 174,102 176,110 C178,118 174,124 166,126 C158,128 152,124 150,115 Z" fill="hsl(var(--animal-pupil))" opacity="0.7" />
    {/* Actual eyes */}
    <ellipse cx="132" cy="114" rx="5" ry="5.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="132" cy="114" rx="2.5" ry="3.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="134" cy="112" r="1.5" fill="hsl(var(--animal-white-tip))" opacity="0.9" />
    <ellipse cx="162" cy="114" rx="5" ry="5.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="162" cy="114" rx="2.5" ry="3.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="164" cy="112" r="1.5" fill="hsl(var(--animal-white-tip))" opacity="0.9" />
  </>
);

export const RaccoonFace = () => (
  <>
    {/* Pointed nose */}
    <path d="M144,133 L140,138 L148,138 Z" fill="hsl(var(--animal-nose))" />
    <path d="M144,138 C144,141 141,143 138,144" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" fill="none" />
    <path d="M144,138 C144,141 147,143 150,144" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" fill="none" />
    {/* Whiskers */}
    <line x1="118" y1="130" x2="85" y2="125" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
    <line x1="118" y1="134" x2="82" y2="134" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
    <line x1="118" y1="138" x2="85" y2="143" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
    <line x1="172" y1="130" x2="202" y2="125" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
    <line x1="172" y1="134" x2="205" y2="134" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
    <line x1="172" y1="138" x2="202" y2="143" stroke="hsl(var(--animal-whisker))" strokeWidth="0.6" opacity="0.5" />
  </>
);

export default RaccoonBody;
