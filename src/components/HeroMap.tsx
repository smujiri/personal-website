// Europe dot-map hero visual
// Landmass rendered as a repeating dot pattern clipped to country shapes.
// City positions shown as small squares (no labels), lines converge on Georgia.

const W = 900;
const H = 520;

function px(lon: number, lat: number): [number, number] {
  // Equirectangular: lon -12→58 (70°), lat 33→72 (39°)
  return [
    Math.round(((lon + 12) / 70) * W),
    Math.round(((72 - lat) / 39) * H),
  ];
}

const [TX, TY] = px(44.8, 41.7); // Tbilisi

// City square markers — no labels shown
const cities = [
  px(-0.1,  51.5),  // London
  px( 2.35, 48.85), // Paris
  px(13.4,  52.5),  // Berlin
  px(12.5,  41.9),  // Rome
  px(21.0,  52.2),  // Warsaw
  px(29.0,  41.0),  // Istanbul
  px( 4.9,  52.4),  // Amsterdam
  px(16.4,  48.2),  // Vienna
];

// Bezier control points for lines (city → Tbilisi)
const lineControls = [
  [380,  60], // London
  [440,  80], // Paris
  [550,  50], // Berlin
  [540, 280], // Rome
  [590,  80], // Warsaw
  [650, 330], // Istanbul
  [430,  65], // Amsterdam
  [590, 130], // Vienna
];

// Country/region shapes — used as clipPath for dot pattern.
// Smoother polygon approximations of each region.
const landPaths = [
  // Iberian Peninsula
  `M ${px(-9,44)[0]},${px(-9,44)[1]}
   L ${px(-1,44)[0]},${px(-1,44)[1]}
   Q ${px(3,43.5)[0]},${px(3,43.5)[1]} ${px(3.3,41)[0]},${px(3.3,41)[1]}
   Q ${px(0,37)[0]},${px(0,37)[1]} ${px(-5.5,36)[0]},${px(-5.5,36)[1]}
   Q ${px(-9,36.5)[0]},${px(-9,36.5)[1]} ${px(-9,38)[0]},${px(-9,38)[1]}
   Z`,

  // France + Benelux
  `M ${px(-5,43.5)[0]},${px(-5,43.5)[1]}
   Q ${px(-1,43.5)[0]},${px(-1,43.5)[1]} ${px(3,43.5)[0]},${px(3,43.5)[1]}
   Q ${px(7.5,44)[0]},${px(7.5,44)[1]} ${px(8,47.5)[0]},${px(8,47.5)[1]}
   L ${px(8,51)[0]},${px(8,51)[1]}
   L ${px(3,51.5)[0]},${px(3,51.5)[1]}
   L ${px(2,51)[0]},${px(2,51)[1]}
   Q ${px(-2,50.5)[0]},${px(-2,50.5)[1]} ${px(-5,48)[0]},${px(-5,48)[1]}
   Q ${px(-5,46)[0]},${px(-5,46)[1]} ${px(-5,43.5)[0]},${px(-5,43.5)[1]}
   Z`,

  // UK mainland (England + Wales + Scotland simplified)
  `M ${px(-5.5,50)[0]},${px(-5.5,50)[1]}
   Q ${px(-2,50)[0]},${px(-2,50)[1]} ${px(1.5,51.5)[0]},${px(1.5,51.5)[1]}
   Q ${px(0,53)[0]},${px(0,53)[1]} ${px(-2,54.5)[0]},${px(-2,54.5)[1]}
   Q ${px(-4,57)[0]},${px(-4,57)[1]} ${px(-5,57.5)[0]},${px(-5,57.5)[1]}
   Q ${px(-7,56)[0]},${px(-7,56)[1]} ${px(-5.5,54)[0]},${px(-5.5,54)[1]}
   Q ${px(-5,52)[0]},${px(-5,52)[1]} ${px(-5.5,50)[0]},${px(-5.5,50)[1]}
   Z`,

  // Ireland
  `M ${px(-10,51.5)[0]},${px(-10,51.5)[1]}
   Q ${px(-7,51)[0]},${px(-7,51)[1]} ${px(-6,53)[0]},${px(-6,53)[1]}
   Q ${px(-8,54)[0]},${px(-8,54)[1]} ${px(-10,53)[0]},${px(-10,53)[1]}
   Z`,

  // Germany + Austria + Switzerland + Benelux extension
  `M ${px(6,51)[0]},${px(6,51)[1]}
   L ${px(14,54)[0]},${px(14,54)[1]}
   L ${px(15,50.5)[0]},${px(15,50.5)[1]}
   Q ${px(17,48)[0]},${px(17,48)[1]} ${px(17,47.5)[0]},${px(17,47.5)[1]}
   Q ${px(14,46)[0]},${px(14,46)[1]} ${px(13,46.5)[0]},${px(13,46.5)[1]}
   Q ${px(9,47)[0]},${px(9,47)[1]} ${px(8,47.5)[0]},${px(8,47.5)[1]}
   L ${px(6,51)[0]},${px(6,51)[1]}
   Z`,

  // Scandinavia (Denmark + Norway + Sweden — southern visible portion)
  `M ${px(8,57)[0]},${px(8,57)[1]}
   Q ${px(14,58)[0]},${px(14,58)[1]} ${px(20,59)[0]},${px(20,59)[1]}
   Q ${px(26,62)[0]},${px(26,62)[1]} ${px(24,64)[0]},${px(24,64)[1]}
   Q ${px(20,66)[0]},${px(20,66)[1]} ${px(15,67)[0]},${px(15,67)[1]}
   Q ${px(14,64)[0]},${px(14,64)[1]} ${px(18,60)[0]},${px(18,60)[1]}
   Q ${px(12,58)[0]},${px(12,58)[1]} ${px(8,57)[0]},${px(8,57)[1]}
   Z`,

  // Poland + Czech + Slovakia + Baltic states
  `M ${px(14,54)[0]},${px(14,54)[1]}
   L ${px(24,54.5)[0]},${px(24,54.5)[1]}
   Q ${px(28,56)[0]},${px(28,56)[1]} ${px(26,57)[0]},${px(26,57)[1]}
   Q ${px(22,57)[0]},${px(22,57)[1]} ${px(21,56)[0]},${px(21,56)[1]}
   L ${px(24,54.5)[0]},${px(24,54.5)[1]}
   L ${px(24,48)[0]},${px(24,48)[1]}
   Q ${px(21,47.5)[0]},${px(21,47.5)[1]} ${px(17,47.5)[0]},${px(17,47.5)[1]}
   L ${px(15,50.5)[0]},${px(15,50.5)[1]}
   L ${px(14,54)[0]},${px(14,54)[1]}
   Z`,

  // Italy peninsula
  `M ${px(7.5,44)[0]},${px(7.5,44)[1]}
   Q ${px(13,44.5)[0]},${px(13,44.5)[1]} ${px(14,41)[0]},${px(14,41)[1]}
   Q ${px(16,38.5)[0]},${px(16,38.5)[1]} ${px(15.5,37.5)[0]},${px(15.5,37.5)[1]}
   Q ${px(13,37.5)[0]},${px(13,37.5)[1]} ${px(12,38)[0]},${px(12,38)[1]}
   Q ${px(9,40)[0]},${px(9,40)[1]} ${px(8,43)[0]},${px(8,43)[1]}
   Z`,

  // Balkans + Romania + Hungary + Greece
  `M ${px(13,46.5)[0]},${px(13,46.5)[1]}
   L ${px(17,47.5)[0]},${px(17,47.5)[1]}
   L ${px(24,48)[0]},${px(24,48)[1]}
   Q ${px(30,46)[0]},${px(30,46)[1]} ${px(30,44)[0]},${px(30,44)[1]}
   Q ${px(28,41)[0]},${px(28,41)[1]} ${px(26,40)[0]},${px(26,40)[1]}
   Q ${px(23,37)[0]},${px(23,37)[1]} ${px(22,37.5)[0]},${px(22,37.5)[1]}
   Q ${px(20,38)[0]},${px(20,38)[1]} ${px(20,40)[0]},${px(20,40)[1]}
   Q ${px(16,41)[0]},${px(16,41)[1]} ${px(14,41)[0]},${px(14,41)[1]}
   Q ${px(13,44)[0]},${px(13,44)[1]} ${px(13,46.5)[0]},${px(13,46.5)[1]}
   Z`,

  // Greece islands + peninsula extension
  `M ${px(22,37.5)[0]},${px(22,37.5)[1]}
   Q ${px(24,36)[0]},${px(24,36)[1]} ${px(26,36.5)[0]},${px(26,36.5)[1]}
   Q ${px(26,38)[0]},${px(26,38)[1]} ${px(24,38)[0]},${px(24,38)[1]}
   Z`,

  // Ukraine + Moldova + Belarus
  `M ${px(24,54.5)[0]},${px(24,54.5)[1]}
   Q ${px(34,52)[0]},${px(34,52)[1]} ${px(40,52)[0]},${px(40,52)[1]}
   Q ${px(40,47)[0]},${px(40,47)[1]} ${px(38,46)[0]},${px(38,46)[1]}
   Q ${px(34,45)[0]},${px(34,45)[1]} ${px(30,46)[0]},${px(30,46)[1]}
   L ${px(24,48)[0]},${px(24,48)[1]}
   Z`,

  // Turkey (western + central)
  `M ${px(26,42)[0]},${px(26,42)[1]}
   Q ${px(36,42)[0]},${px(36,42)[1]} ${px(44,42)[0]},${px(44,42)[1]}
   Q ${px(44,37)[0]},${px(44,37)[1]} ${px(36,36)[0]},${px(36,36)[1]}
   Q ${px(28,36)[0]},${px(28,36)[1]} ${px(26,38)[0]},${px(26,38)[1]}
   Z`,

  // Caucasus region (Armenia + Azerbaijan + small bits)
  `M ${px(40,42)[0]},${px(40,42)[1]}
   L ${px(50,42)[0]},${px(50,42)[1]}
   Q ${px(50,39)[0]},${px(50,39)[1]} ${px(44,37)[0]},${px(44,37)[1]}
   Q ${px(40,37)[0]},${px(40,37)[1]} ${px(40,39)[0]},${px(40,39)[1]}
   Z`,
];

// Georgia polygon (separate — rendered with darker dots)
const georgiaPath = `
  M ${px(40.0,43.5)[0]},${px(40.0,43.5)[1]}
  Q ${px(43,43.7)[0]},${px(43,43.7)[1]} ${px(46.5,43)[0]},${px(46.5,43)[1]}
  Q ${px(46.7,42)[0]},${px(46.7,42)[1]} ${px(46.2,41.2)[0]},${px(46.2,41.2)[1]}
  Q ${px(43.5,41)[0]},${px(43.5,41)[1]} ${px(41,41.2)[0]},${px(41,41.2)[1]}
  Q ${px(40,41.8)[0]},${px(40,41.8)[1]} ${px(40.0,43.5)[0]},${px(40.0,43.5)[1]}
  Z
`;

export default function HeroMap() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Regular land dot pattern */}
        <pattern id="dots-land" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.4" fill="rgba(26,50,96,0.22)" />
        </pattern>

        {/* Georgia highlight dot pattern — darker */}
        <pattern id="dots-georgia" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.7" fill="rgba(26,50,96,0.65)" />
        </pattern>

        {/* Clip path for all land */}
        <clipPath id="clip-land">
          {landPaths.map((d, i) => <path key={i} d={d} />)}
        </clipPath>

        {/* Clip path for Georgia */}
        <clipPath id="clip-georgia">
          <path d={georgiaPath} />
        </clipPath>

        <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 1400; }
            to   { stroke-dashoffset: 0; }
          }
          .conn-line {
            stroke-dasharray: 1400;
            stroke-dashoffset: 1400;
            animation: drawLine 2s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
      </defs>

      {/* Land: dot pattern clipped to all country shapes */}
      <rect width={W} height={H} fill="url(#dots-land)" clipPath="url(#clip-land)" />

      {/* Georgia: darker dot pattern */}
      <rect width={W} height={H} fill="url(#dots-georgia)" clipPath="url(#clip-georgia)" />

      {/* Georgia outline */}
      <path
        d={georgiaPath}
        fill="none"
        stroke="rgba(26,50,96,0.5)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Connection lines — city squares → Tbilisi */}
      {cities.map(([cx, cy], i) => (
        <path
          key={`line-${i}`}
          d={`M ${cx},${cy} Q ${lineControls[i][0]},${lineControls[i][1]} ${TX},${TY}`}
          stroke="rgba(26,50,96,0.28)"
          strokeWidth="0.9"
          className="conn-line"
          style={{ animationDelay: `${0.15 + i * 0.3}s` }}
        />
      ))}

      {/* City squares */}
      {cities.map(([cx, cy], i) => (
        <rect
          key={`sq-${i}`}
          x={cx - 3}
          y={cy - 3}
          width="6"
          height="6"
          fill="rgba(26,50,96,0.55)"
        />
      ))}

      {/* Tbilisi pulse rings */}
      {[0, 1.0].map((delay, i) => (
        <circle key={i} cx={TX} cy={TY} r="4" fill="none" stroke="rgba(26,50,96,0.4)" strokeWidth="1">
          <animate attributeName="r"       values="4;18"   dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0"  dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Tbilisi dot */}
      <circle cx={TX} cy={TY} r="4" fill="#1A3260" />

      {/* Tbilisi label */}
      <text
        x={TX + 8} y={TY + 4}
        fontSize="9" fontFamily="Outfit, system-ui, sans-serif" fontWeight="700"
        fill="rgba(26,50,96,0.75)" letterSpacing="0.12em"
      >
        TBILISI
      </text>
    </svg>
  );
}
