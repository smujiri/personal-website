// Decorative SVG map of Europe + Caucasus
// Projection: equirectangular — x = (lon+12)/67*900, y = (60-lat)/27*540

const W = 900;
const H = 540;

function px(lon: number, lat: number): [number, number] {
  return [
    Math.round(((lon + 12) / 67) * W),
    Math.round(((60 - lat) / 27) * H),
  ];
}

const [TX, TY] = px(44.8, 41.7); // Tbilisi: [763, 366]

const cities = [
  { name: 'London',   x: px(-0.1,  51.5)[0], y: px(-0.1,  51.5)[1], cx: 400, cy: 50  },
  { name: 'Paris',    x: px( 2.35, 48.85)[0], y: px( 2.35, 48.85)[1], cx: 460, cy: 70  },
  { name: 'Berlin',   x: px(13.4,  52.5)[0],  y: px(13.4,  52.5)[1],  cx: 560, cy: 55  },
  { name: 'Rome',     x: px(12.5,  41.9)[0],  y: px(12.5,  41.9)[1],  cx: 540, cy: 295 },
  { name: 'Warsaw',   x: px(21.0,  52.2)[0],  y: px(21.0,  52.2)[1],  cx: 600, cy: 95  },
  { name: 'Istanbul', x: px(29.0,  41.0)[0],  y: px(29.0,  41.0)[1],  cx: 655, cy: 340 },
];

const countryPaths = [
  'M 40,318 L 204,328 L 204,492 L 89,492 L 40,492 Z',                                   // Iberia
  'M 103,238 L 152,176 L 191,176 L 270,176 L 270,258 L 261,328 L 204,328 L 128,328 L 103,318 Z', // France
  'M 89,200 L 151,190 L 202,166 L 204,118 L 130,86 L 102,50 L 77,78 L 100,118 Z',       // UK
  'M 48,184 L 75,178 L 78,210 L 50,214 Z',                                               // Ireland
  'M 238,104 L 362,104 L 376,220 L 396,268 L 344,308 L 280,268 L 238,220 Z',            // Central EU
  'M 218,50 L 358,38 L 430,50 L 486,90 L 362,108 L 294,80 L 240,50 Z',                  // Scandinavia
  'M 362,108 L 486,90 L 486,224 L 456,244 L 396,268 L 376,220 Z',                       // Poland + Baltic
  'M 254,318 L 344,318 L 418,382 L 376,448 L 364,492 L 320,448 L 266,400 L 254,340 Z',  // Italy
  'M 344,308 L 396,268 L 456,244 L 568,298 L 556,386 L 512,408 L 460,386 L 430,374 L 364,386 L 344,346 Z', // Balkans
  'M 456,244 L 700,244 L 700,322 L 568,298 Z',                                           // Ukraine
  'M 514,362 L 756,362 L 756,474 L 514,474 Z',                                           // Turkey
];

const georgiaPath = 'M 699,338 L 754,334 L 793,342 L 793,366 L 754,382 L 720,376 L 699,366 Z';

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
        <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 1400; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          .conn-line {
            stroke-dasharray: 1400;
            stroke-dashoffset: 1400;
            animation: drawLine 2.2s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          .city-el {
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
          }
        `}</style>
      </defs>

      {/* Country fills + dotted borders */}
      {countryPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="rgba(26,50,96,0.04)"
          stroke="rgba(26,50,96,0.18)"
          strokeWidth="0.8"
          strokeDasharray="3 6"
          strokeLinejoin="round"
        />
      ))}

      {/* Georgia — highlighted */}
      <path
        d={georgiaPath}
        fill="rgba(26,50,96,0.13)"
        stroke="rgba(26,50,96,0.55)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Animated connection lines */}
      {cities.map((city, i) => (
        <path
          key={`line-${city.name}`}
          d={`M ${city.x},${city.y} Q ${city.cx},${city.cy} ${TX},${TY}`}
          stroke="rgba(26,50,96,0.30)"
          strokeWidth="1"
          className="conn-line"
          style={{ animationDelay: `${0.2 + i * 0.45}s` }}
        />
      ))}

      {/* City dots + labels */}
      {cities.map((city, i) => (
        <g
          key={`city-${city.name}`}
          className="city-el"
          style={{ animationDelay: `${0.2 + i * 0.45}s` }}
        >
          <circle cx={city.x} cy={city.y} r="3" fill="rgba(26,50,96,0.45)" />
          <text
            x={city.x + 6}
            y={city.y + 4}
            fontSize="8"
            fontFamily="Outfit, system-ui, sans-serif"
            fill="rgba(26,50,96,0.45)"
            letterSpacing="0.08em"
          >
            {city.name.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Tbilisi pulse rings */}
      {[0, 0.9].map((delay, i) => (
        <circle key={i} cx={TX} cy={TY} r="5" fill="none" stroke="rgba(26,50,96,0.4)" strokeWidth="1">
          <animate attributeName="r"       values="5;22"   dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0"  dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Tbilisi dot */}
      <circle cx={TX} cy={TY} r="5" fill="rgba(26,50,96,0.12)" />
      <circle cx={TX} cy={TY} r="3.5" fill="#1A3260" />

      {/* Labels */}
      <text x={TX + 9} y={TY + 4}
        fontSize="9.5" fontFamily="Outfit, system-ui, sans-serif" fontWeight="700"
        fill="rgba(26,50,96,0.75)" letterSpacing="0.12em">
        TBILISI
      </text>
      <text x="737" y="358"
        fontSize="7" fontFamily="Outfit, system-ui, sans-serif"
        fill="rgba(26,50,96,0.5)" letterSpacing="0.1em" textAnchor="middle">
        GEORGIA
      </text>
    </svg>
  );
}
