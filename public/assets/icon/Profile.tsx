import * as React from "react"
import { SVGProps } from "react"
const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M10 18.967c-.908 0-1.808-.267-2.517-.792L3.9 15.5c-.95-.708-1.692-2.183-1.692-3.367V5.942c0-1.284.942-2.65 2.15-3.1l4.159-1.559c.825-.308 2.125-.308 2.95 0l4.166 1.559c1.209.45 2.15 1.816 2.15 3.1v6.191c0 1.184-.741 2.659-1.691 3.367l-3.584 2.675c-.7.525-1.6.792-2.508.792ZM8.958 2.45 4.8 4.008c-.717.267-1.342 1.167-1.342 1.934v6.191c0 .792.559 1.9 1.184 2.367l3.583 2.675c.958.717 2.583.717 3.542 0L15.35 14.5c.633-.475 1.183-1.583 1.183-2.367V5.942c0-.759-.625-1.659-1.341-1.934L11.033 2.45c-.55-.208-1.516-.208-2.075 0Z"
    />
    <path
      fill="#fff"
      d="M10 9.725h-.058C8.733 9.692 7.85 8.767 7.85 7.642c0-1.15.942-2.092 2.092-2.092 1.15 0 2.091.942 2.091 2.092a2.095 2.095 0 0 1-2.016 2.091c-.009-.008-.009-.008-.017-.008ZM9.942 6.8a.84.84 0 0 0-.842.842c0 .458.358.825.808.841H10a.834.834 0 0 0 .783-.841.834.834 0 0 0-.841-.842ZM10 14.458c-.717 0-1.442-.191-2-.566-.558-.367-.875-.909-.875-1.484s.317-1.116.875-1.491c1.125-.75 2.883-.742 4 0 .558.366.875.908.875 1.483 0 .575-.317 1.117-.875 1.492-.559.375-1.284.566-2 .566ZM8.69 11.95c-.208.133-.325.3-.316.45 0 .15.117.317.316.45.7.467 1.917.467 2.617 0 .209-.133.325-.3.325-.45 0-.15-.116-.317-.316-.45-.7-.458-1.925-.458-2.626 0Z"
    />
  </svg>
)
export default ProfileIcon