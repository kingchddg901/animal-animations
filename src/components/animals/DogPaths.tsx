/** Golden retriever-style dog — same coordinate space as the cat */
const DogBody = () => (
  <>
    {/* Torso — broader, deeper chest */}
    <path
      d="M135,155 C145,135 175,125 215,122 C255,120 295,122 325,130
         C345,135 358,150 360,168 C362,185 355,200 340,208
         C320,218 285,222 250,222 C215,222 180,218 160,212
         C142,206 132,188 135,155 Z"
      fill="hsl(var(--animal-fur))"
    />
    {/* Belly highlight */}
    <path
      d="M170,210 C210,220 260,222 300,218 C330,214 350,206 355,198"
      stroke="hsl(var(--animal-fur-highlight))" strokeWidth="2.5" fill="none" opacity="0.25"
    />
    {/* Neck — thicker */}
    <path
      d="M142,152 C138,148 134,146 131,146 C127,146 126,149 128,153 C130,158 136,164 142,166"
      fill="hsl(var(--animal-fur))"
    />
  </>
);

export const DogFrontLeftLeg = () => (
  <g>
    <line x1="162" y1="208" x2="166" y2="246" stroke="hsl(var(--animal-fur))" strokeWidth="16" strokeLinecap="round" />
    <g className="dog-fl-lower" style={{ transformOrigin: "166px 246px" }}>
      <line x1="166" y1="246" x2="170" y2="277" stroke="hsl(var(--animal-fur))" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="170" cy="280" rx="12" ry="5.5" fill="hsl(var(--animal-fur))" />
    </g>
    <circle cx="166" cy="246" r="7.5" fill="hsl(var(--animal-fur))" />
  </g>
);

export const DogFrontRightLeg = () => (
  <g>
    <line x1="192" y1="208" x2="196" y2="246" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="16" strokeLinecap="round" />
    <g className="dog-fr-lower" style={{ transformOrigin: "196px 246px" }}>
      <line x1="196" y1="246" x2="200" y2="277" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="200" cy="280" rx="12" ry="5.5" fill="hsl(var(--animal-fur-shadow))" />
    </g>
    <circle cx="196" cy="246" r="7.5" fill="hsl(var(--animal-fur-shadow))" />
  </g>
);

export const DogBackLeftLeg = () => (
  <g>
    {/* Haunch — meatier muscle mass */}
    <path d="M292,202 C286,214 286,232 296,244 L308,244 C312,230 310,212 305,202 Z" fill="hsl(var(--animal-fur))" />
    <g className="dog-bl-lower" style={{ transformOrigin: "301px 244px" }}>
      <line x1="301" y1="244" x2="310" y2="277" stroke="hsl(var(--animal-fur))" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="310" cy="280" rx="12" ry="5.5" fill="hsl(var(--animal-fur))" />
    </g>
    <circle cx="301" cy="244" r="7.5" fill="hsl(var(--animal-fur))" />
  </g>
);

export const DogBackRightLeg = () => (
  <g>
    <path d="M322,200 C316,212 316,230 326,242 L338,242 C342,228 340,210 335,200 Z" fill="hsl(var(--animal-fur-shadow))" />
    <g className="dog-br-lower" style={{ transformOrigin: "333px 242px" }}>
      <line x1="333" y1="242" x2="342" y2="277" stroke="hsl(var(--animal-fur-shadow))" strokeWidth="13" strokeLinecap="round" />
      <ellipse cx="342" cy="280" rx="12" ry="5.5" fill="hsl(var(--animal-fur-shadow))" />
    </g>
    <circle cx="333" cy="242" r="7.5" fill="hsl(var(--animal-fur-shadow))" />
  </g>
);

export const DogTail = () => (
  <>
    {/* Upward-curving fluffy tail */}
    <path d="M355,165 C365,148 372,125 370,105 C368,90 362,82 358,85 C355,90 358,108 360,125" stroke="hsl(var(--animal-fur))" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M370,105 C368,90 362,82 358,85" stroke="hsl(var(--animal-fur-highlight))" strokeWidth="10" fill="none" strokeLinecap="round" />
  </>
);

export const DogHead = () => (
  <>
    {/* Rounder, broader head */}
    <path d="M100,140 C95,120 100,98 115,88 C126,82 140,78 154,80 C168,82 178,90 184,104 C190,118 188,138 180,148 C172,158 160,162 148,164 C135,165 120,162 112,155 C106,150 102,146 100,140 Z" fill="hsl(var(--animal-fur))" />
    {/* Muzzle — longer, rounded snout */}
    <path d="M105,138 C98,142 92,148 90,155 C88,162 92,168 100,168 C108,168 115,164 120,158 C124,152 122,145 116,140" fill="hsl(var(--animal-fur-highlight))" />
    {/* Floppy ears */}
    <path d="M112,98 C105,92 95,88 88,92 C82,96 80,108 82,122 C84,132 90,138 96,135 C102,130 108,115 112,102" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M168,92 C175,86 185,84 192,88 C198,94 200,108 198,122 C196,132 190,138 184,135 C178,130 172,112 168,96" fill="hsl(var(--animal-fur-shadow))" />
  </>
);

export const DogEyes = () => (
  <>
    {/* Rounder, friendlier eyes */}
    <ellipse cx="128" cy="118" rx="7" ry="7.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="128" cy="118" rx="3.5" ry="4.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="131" cy="116" r="2" fill="hsl(var(--animal-white-tip))" opacity="0.85" />
    <ellipse cx="158" cy="118" rx="7" ry="7.5" fill="hsl(var(--animal-eye))" />
    <ellipse cx="158" cy="118" rx="3.5" ry="4.5" fill="hsl(var(--animal-pupil))" />
    <circle cx="161" cy="116" r="2" fill="hsl(var(--animal-white-tip))" opacity="0.85" />
  </>
);

export const DogFace = () => (
  <>
    {/* Nose — larger, rounded */}
    <ellipse cx="105" cy="155" rx="6" ry="4.5" fill="hsl(var(--animal-nose))" />
    {/* Mouth */}
    <path d="M105,159 C105,163 100,166 96,166" stroke="hsl(var(--animal-whisker))" strokeWidth="0.8" fill="none" />
    <path d="M105,159 C105,163 110,166 114,166" stroke="hsl(var(--animal-whisker))" strokeWidth="0.8" fill="none" />
    {/* Tongue peeking */}
    <path d="M104,163 C103,168 106,170 108,168 C110,166 108,163 106,163" fill="hsl(0 65% 55%)" opacity="0.7" />
  </>
);

export default DogBody;
