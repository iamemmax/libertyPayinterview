import * as React from "react"
import { SVGProps } from "react"
const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#032282"
      d="M20.4 16.33c-.28.75-.87 1.32-1.64 1.58-1.08.36-2.19.63-3.31.82-.11.02-.22.04-.33.05-.18.03-.36.05-.54.07-.22.03-.45.05-.68.07-.63.05-1.25.08-1.88.08-.64 0-1.28-.03-1.91-.09a9.99 9.99 0 0 1-.79-.09l-.44-.06c-.11-.02-.22-.03-.33-.05-1.11-.18-2.21-.45-3.28-.81-.8-.27-1.41-.84-1.68-1.57-.27-.72-.17-1.56.26-2.28l1.13-1.88c.24-.41.46-1.2.46-1.68V8.63c0-3.63 2.95-6.58 6.58-6.58 3.62 0 6.57 2.95 6.57 6.58v1.86c0 .48.22 1.27.47 1.68l1.13 1.88c.41.7.49 1.52.21 2.28Z"
    />
    <path
      fill="#fff"
      d="M12 10.76a.76.76 0 0 1-.76-.76V6.9a.76.76 0 1 1 1.52 0V10c-.01.42-.35.76-.76.76Z"
    />
    <path
      fill="#032282"
      d="M14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z"
    />
    <path
      fill="red"
      d="M19.333 7.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
    />
  </svg>
)
export default NotificationIcon
