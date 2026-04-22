const CatPaths = () => (
  <>
    {/* === BODY === */}
    <path
      d="M145,160 C155,145 180,135 210,132 C240,130 280,130 310,135 C330,138 345,148 348,162 C350,175 345,190 335,198 C320,208 290,212 260,212 C230,212 190,210 170,205 C155,200 142,185 145,160 Z"
      fill="hsl(var(--animal-fur))"
    />
    <path
      d="M175,200 C200,210 240,212 280,210 C310,208 335,202 340,195"
      stroke="hsl(var(--animal-fur-highlight))"
      strokeWidth="2" fill="none" opacity="0.3"
    />
    {/* Neck */}
    <path
      d="M150,155 C148,152 146,150 144,149 C141,148 140,150 141,153 C142,156 146,160 150,162"
      fill="hsl(var(--animal-fur))"
    />
  </>
);

export const CatLegs = () => (
  <>
    <path d="M162,198 C160,210 158,228 157,245 C156,255 155,262 156,268 C157,274 162,278 168,278 C174,278 177,274 177,268 C177,260 176,248 175,235 C174,222 172,210 170,200" fill="hsl(var(--animal-fur))" />
    <ellipse cx="167" cy="277" rx="12" ry="5" fill="hsl(var(--animal-fur))" />
  </>
);

export const CatFrontRightLeg = () => (
  <>
    <path d="M190,198 C188,210 186,228 185,245 C184,255 184,262 185,268 C186,274 190,278 196,278 C202,278 205,274 205,268 C205,260 204,248 203,235 C202,222 200,210 198,200" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="195" cy="277" rx="12" ry="5" fill="hsl(var(--animal-fur-shadow))" />
  </>
);

export const CatBackLeftLeg = () => (
  <>
    <path d="M300,195 C295,205 290,218 292,232 C293,242 295,255 296,265 C297,272 300,278 307,278 C314,278 316,272 315,265 C314,255 312,240 310,228 C308,215 306,205 305,198" fill="hsl(var(--animal-fur))" />
    <ellipse cx="307" cy="277" rx="12" ry="5" fill="hsl(var(--animal-fur))" />
  </>
);

export const CatBackRightLeg = () => (
  <>
    <path d="M325,192 C322,202 320,215 322,230 C323,242 325,255 326,265 C327,272 330,278 336,278 C342,278 344,272 343,265 C342,255 340,240 338,228 C336,215 334,202 332,195" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="336" cy="277" rx="12" ry="5" fill="hsl(var(--animal-fur-shadow))" />
  </>
);

export const CatTail = () => (
  <>
    <path d="M345,170 C355,160 368,140 375,118 C380,100 378,82 372,75 C368,70 364,72 363,78 C362,85 365,98 366,108" stroke="hsl(var(--animal-fur))" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M372,75 C368,70 364,72 363,78" stroke="hsl(var(--animal-white-tip))" strokeWidth="8" fill="none" strokeLinecap="round" />
  </>
);

export const CatHead = () => (
  <>
    <path d="M112,135 C107,120 112,100 124,93 C132,88 142,85 152,87 C162,89 170,95 174,105 C178,115 178,130 172,140 C167,148 160,153 150,155 C140,157 130,155 122,150 C117,147 113,142 112,135 Z" fill="hsl(var(--animal-fur))" />
    <path d="M110,137 C106,145 108,153 116,155 C120,156 122,153 120,148 C118,143 112,140 110,137 Z" fill="hsl(var(--animal-fur))" />
    <path d="M170,135 C174,141 174,149 168,153 C164,155 160,153 162,148 C164,143 168,139 170,135 Z" fill="hsl(var(--animal-fur))" />
    {/* Ears */}
    <path d="M118,105 C114,87 108,65 107,53 C106,45 109,41 114,45 C120,51 126,69 128,87" fill="hsl(var(--animal-fur))" />
    <path d="M108,55 C107,47 109,43 112,43 C115,43 117,47 116,53 L108,55 Z" fill="hsl(var(--animal-white-tip))" />
    <path d="M114,75 C112,65 110,55 112,49 C114,45 117,47 118,52 C120,59 120,69 120,79" fill="hsl(var(--animal-ear-inner))" />
    <path d="M160,87 C162,69 168,51 174,45 C179,41 182,45 181,53 C180,65 174,87 170,105" fill="hsl(var(--animal-fur))" />
    <path d="M173,53 C172,47 174,43 177,43 C180,43 182,47 181,55 L173,53 Z" fill="hsl(var(--animal-white-tip))" />
    <path d="M166,79 C168,69 170,59 172,52 C173,47 176,45 177,49 C178,55 176,65 174,75" fill="hsl(var(--animal-ear-inner))" />
  </>
);

export const CatEyes = () => (
  <>
    <path d="M124,117 C128,110 138,110 142,117 C138,124 128,124 124,117 Z" fill="hsl(var(--animal-eye))" />
    <ellipse cx="133" cy="117" rx="2" ry="5.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="136" cy="115" r="1.8" fill="hsl(var(--animal-white-tip))" opacity="0.85" />
    <circle cx="131" cy="119" r="0.7" fill="hsl(var(--animal-white-tip))" opacity="0.4" />
    <path d="M148,117 C152,110 162,110 166,117 C162,124 152,124 148,117 Z" fill="hsl(var(--animal-eye))" />
    <ellipse cx="157" cy="117" rx="2" ry="5.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="160" cy="115" r="1.8" fill="hsl(var(--animal-white-tip))" opacity="0.85" />
    <circle cx="155" cy="119" r="0.7" fill="hsl(var(--animal-white-tip))" opacity="0.4" />
  </>
);

export const CatFace = () => (
  <>
    <path d="M144,131 L141,135 L147,135 Z" fill="hsl(var(--animal-nose))" />
    <path d="M144,135 C144,138 142,140 139,141" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" fill="none" />
    <path d="M144,135 C144,138 146,140 149,141" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" fill="none" />
    <line x1="117" y1="127" x2="84" y2="121" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
    <line x1="117" y1="131" x2="80" y2="131" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
    <line x1="117" y1="135" x2="84" y2="141" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
    <line x1="170" y1="127" x2="200" y2="121" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
    <line x1="170" y1="131" x2="204" y2="131" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
    <line x1="170" y1="135" x2="200" y2="141" stroke="hsl(var(--animal-whisker))" strokeWidth="0.7" opacity="0.6" />
  </>
);

export default CatPaths;
