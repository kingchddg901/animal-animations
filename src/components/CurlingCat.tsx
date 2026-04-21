const CurlingCat = () => {
  return (
    <svg
      viewBox="0 0 400 300"
      width="400"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <style>{`
        @keyframes curl {
          0% {
            d: path("M200,260 Q200,180 200,140 Q200,100 200,80");
          }
          100% {
            d: path("M200,260 Q230,230 250,220 Q270,210 260,200");
          }
        }

        .cat-group {
          animation: catCurl 3s ease-in-out infinite alternate;
          transform-origin: 200px 260px;
        }

        @keyframes catCurl {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(0.9) translate(10px, 20px) rotate(15deg);
          }
        }

        /* Standing pose */
        .standing {
          animation: standToCurl 3s ease-in-out infinite alternate;
        }

        @keyframes headMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(25px, 60px) rotate(30deg); }
        }

        @keyframes bodyBend {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(25deg); }
        }

        @keyframes tailWrap {
          0% { transform: rotate(0deg) scaleX(1); }
          100% { transform: rotate(-40deg) scaleX(-1); }
        }

        @keyframes legsFold {
          0% { opacity: 1; transform: scaleY(1); }
          60% { opacity: 1; transform: scaleY(0.5); }
          100% { opacity: 0; transform: scaleY(0); }
        }

        @keyframes eyeClose {
          0% { transform: scaleY(1); }
          80% { transform: scaleY(1); }
          100% { transform: scaleY(0.2); }
        }

        .head { animation: headMove 3s ease-in-out infinite alternate; transform-origin: 185px 95px; }
        .body { animation: bodyBend 3s ease-in-out infinite alternate; transform-origin: 195px 260px; }
        .tail-group { animation: tailWrap 3s ease-in-out infinite alternate; transform-origin: 195px 255px; }
        .legs { animation: legsFold 3s ease-in-out infinite alternate; transform-origin: center bottom; }
        .eyes { animation: eyeClose 3s ease-in-out infinite alternate; transform-origin: center center; }
      `}</style>

      {/* Body group */}
      <g className="body">
        {/* Main body - elongated oval */}
        <ellipse cx="195" cy="180" rx="35" ry="80" fill="#111111" />

        {/* Front legs */}
        <g className="legs">
          <rect x="175" y="240" width="12" height="45" rx="6" fill="#111111" />
          <rect x="195" y="240" width="12" height="45" rx="6" fill="#111111" />
          {/* Paws */}
          <ellipse cx="181" cy="287" rx="8" ry="5" fill="#111111" />
          <ellipse cx="201" cy="287" rx="8" ry="5" fill="#111111" />
        </g>

        {/* Back legs (behind body) */}
        <g className="legs">
          <rect x="180" y="235" width="14" height="40" rx="7" fill="#0a0a0a" />
          <rect x="200" y="235" width="14" height="40" rx="7" fill="#0a0a0a" />
        </g>

        {/* Tail */}
        <g className="tail-group">
          <path
            d="M210,250 Q250,240 270,210 Q285,185 280,160"
            stroke="#111111"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* White tail tip */}
          <path
            d="M280,165 Q282,155 278,148"
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Head group */}
        <g className="head">
          {/* Head */}
          <circle cx="195" cy="110" r="30" fill="#111111" />

          {/* Left ear */}
          <polygon points="170,95 160,60 182,85" fill="#111111" />
          {/* Left ear white tip */}
          <polygon points="164,70 160,60 170,68" fill="white" />

          {/* Right ear */}
          <polygon points="208,85 220,60 230,95" fill="#111111" />
          {/* Right ear white tip */}
          <polygon points="220,68 220,60 226,70" fill="white" />

          {/* Eyes */}
          <g className="eyes">
            {/* Left eye */}
            <ellipse cx="183" cy="108" rx="5" ry="6" fill="#22c55e" />
            <ellipse cx="183" cy="108" rx="2.5" ry="5" fill="#111111" />
            {/* Eye shine */}
            <circle cx="185" cy="106" r="1.5" fill="white" opacity="0.7" />

            {/* Right eye */}
            <ellipse cx="207" cy="108" rx="5" ry="6" fill="#22c55e" />
            <ellipse cx="207" cy="108" rx="2.5" ry="5" fill="#111111" />
            {/* Eye shine */}
            <circle cx="209" cy="106" r="1.5" fill="white" opacity="0.7" />
          </g>

          {/* Nose */}
          <polygon points="195,116 192,120 198,120" fill="#333" />

          {/* Whiskers */}
          <line x1="165" y1="115" x2="140" y2="110" stroke="#444" strokeWidth="1" />
          <line x1="165" y1="118" x2="138" y2="120" stroke="#444" strokeWidth="1" />
          <line x1="165" y1="121" x2="140" y2="128" stroke="#444" strokeWidth="1" />
          <line x1="225" y1="115" x2="250" y2="110" stroke="#444" strokeWidth="1" />
          <line x1="225" y1="118" x2="252" y2="120" stroke="#444" strokeWidth="1" />
          <line x1="225" y1="121" x2="250" y2="128" stroke="#444" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
};

export default CurlingCat;
