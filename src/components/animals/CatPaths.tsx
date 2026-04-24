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
  <g>
    {/* Upper leg — thick stroke from hip to knee */}
    <line x1="166" y1="200" x2="170" y2="236" stroke="hsl(var(--animal-fur))" strokeWidth="13" strokeLinecap="round" />
    {/* Lower leg — knee to paw */}
    <g className="cat-fl-lower" style={{ transformOrigin: "170px 236px" }}>
      <line x1="170" y1="236" x2="172" y2="275" stroke="hsl(var(--animal-fur))" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="172" cy="278" rx="10" ry="4.5" fill="hsl(var(--animal-fur))" />
    </g>
    {/* Knee highlight */}
    <circle cx="170" cy="236" r="6" fill="hsl(var(--animal-fur))" />
  </g>
);

export const CatFrontRightLeg = () => (
  <g>
    <line x1="194" y1="200" x2="198" y2="236" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="13" strokeLinecap="round" />
    <g className="cat-fr-lower" style={{ transformOrigin: "198px 236px" }}>
      <line x1="198" y1="236" x2="200" y2="275" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="200" cy="278" rx="10" ry="4.5" fill="hsl(var(--animal-fur-shadow))" />
    </g>
    <circle cx="198" cy="236" r="6" fill="hsl(var(--animal-fur-shadow))" />
  </g>
);

export const CatBackLeftLeg = () => (
  <g>
    {/* Haunch — wider at top */}
    <path d="M295,195 C290,205 290,220 298,235 L308,235 C310,220 308,205 305,195 Z" fill="hsl(var(--animal-fur))" />
    <g className="cat-bl-lower" style={{ transformOrigin: "303px 234px" }}>
      <line x1="303" y1="234" x2="312" y2="275" stroke="hsl(var(--animal-fur))" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="312" cy="278" rx="10" ry="4.5" fill="hsl(var(--animal-fur))" />
    </g>
    <circle cx="303" cy="234" r="6.5" fill="hsl(var(--animal-fur))" />
  </g>
);

export const CatBackRightLeg = () => (
  <g>
    <path d="M322,192 C318,202 318,217 326,233 L336,233 C338,217 336,202 332,192 Z" fill="hsl(var(--animal-fur-shadow))" />
    <g className="cat-br-lower" style={{ transformOrigin: "330px 232px" }}>
      <line x1="330" y1="232" x2="339" y2="275" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="339" cy="278" rx="10" ry="4.5" fill="hsl(var(--animal-fur-shadow))" />
    </g>
    <circle cx="330" cy="232" r="6.5" fill="hsl(var(--animal-fur-shadow))" />
  </g>
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
