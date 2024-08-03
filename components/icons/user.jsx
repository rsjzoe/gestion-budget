import * as React from "react"
import Svg, { Path } from "react-native-svg"
const User = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    color={"#000"}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.2 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3 22a9.71 9.71 0 0 1 9-7c4.12 0 7.63 2.91 9 7"
    />
  </Svg>
)
export default User
