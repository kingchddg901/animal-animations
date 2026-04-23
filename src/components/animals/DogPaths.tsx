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
  <>
    {/* Upper leg */}
    <path d="M158,208 C156,218 154,228 156,240 C158,246 162,248 165,246 C168,242 167,234 165,226 C163,218 163,212 165,208" fill="hsl(var(--animal-fur))" />
    {/* Lower leg from knee */}
    <path d="M165,246 C163,256 162,266 162,272 C162,276 165,280 170,280" fill="hsl(var(--animal-fur))" />
    <ellipse cx="170" cy="279" rx="12" ry="5" fill="hsl(var(--animal-fur))" />
  </>
);

export const DogFrontRightLeg = () => (
  <>
    <path d="M188,208 C186,218 184,228 186,240 C188,246 192,248 195,246 C198,242 197,234 195,226 C193,218 193,212 195,208" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M195,246 C193,256 192,266 192,272 C192,276 195,280 200,280" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="200" cy="279" rx="12" ry="5" fill="hsl(var(--animal-fur-shadow))" />
  </>
);

export const DogBackLeftLeg = () => (
  <>
    {/* Haunch angling forward to hock */}
    <path d="M298,205 C294,215 290,225 292,238 C294,244 298,246 301,244 C304,240 303,232 301,224 C299,216 298,210 300,205" fill="hsl(var(--animal-fur))" />
    {/* Lower leg from hock */}
    <path d="M301,244 C300,254 300,266 301,272 C302,276 305,280 310,280" fill="hsl(var(--animal-fur))" />
    <ellipse cx="310" cy="279" rx="12" ry="5" fill="hsl(var(--animal-fur))" />
  </>
);

export const DogBackRightLeg = () => (
  <>
    <path d="M328,202 C324,212 322,222 324,235 C326,242 330,244 333,242 C336,238 335,230 333,222 C331,214 330,208 332,202" fill="hsl(var(--animal-fur-shadow))" />
    <path d="M333,242 C332,252 332,264 333,272 C334,276 337,280 342,280" fill="hsl(var(--animal-fur-shadow))" />
    <ellipse cx="342" cy="279" rx="12" ry="5" fill="hsl(var(--animal-fur-shadow))" />
  </>
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
