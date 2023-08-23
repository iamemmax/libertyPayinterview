import * as React from "react"
import { SVGProps } from "react"
const LayoutIccons = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={89}
    height={62}
    fill="none"
    {...props}
  >
    <g filter="url(#a)" opacity={0.1}>
      <rect
        width={50.952}
        height={109.9}
        fill="url(#b)"
        rx={2}
        shapeRendering="crispEdges"
        transform="matrix(-.88337 .46867 -.32952 -.94415 85.224 30.761)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={25.476}
        x2={25.476}
        y1={0}
        y2={109.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        width={88.145}
        height={134.208}
        x={0.54}
        y={-72.283}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0117647 0 0 0 0 0.133333 0 0 0 0 0.509804 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2317" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2317"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default LayoutIccons
