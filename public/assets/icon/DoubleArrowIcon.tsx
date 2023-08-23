import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#032282"
      fillRule="evenodd"
      d="M16.611 7.452a3.287 3.287 0 0 1 .121 4.467l-.12.13-3.296 3.15a.791.791 0 0 1-1.132 0 .822.822 0 0 1-.066-1.072l.066-.077L15.48 10.9a1.644 1.644 0 0 0 .093-2.195l-.093-.103-3.296-3.151a.822.822 0 0 1 0-1.15.791.791 0 0 1 1.056-.067l.076.067 3.295 3.152Z"
      clipRule="evenodd"
    />
    <path
      fill="#032282"
      fillRule="evenodd"
      d="M11.811 7.452a3.287 3.287 0 0 1 .121 4.467l-.12.13-3.296 3.15a.791.791 0 0 1-1.132 0 .822.822 0 0 1-.066-1.072l.066-.077L10.68 10.9a1.644 1.644 0 0 0 .093-2.195l-.093-.103L7.384 5.45a.821.821 0 0 1 0-1.15.791.791 0 0 1 1.056-.067l.076.067 3.295 3.152Z"
      clipRule="evenodd"
      opacity={0.3}
    />
  </svg>
)
export default SvgComponent
