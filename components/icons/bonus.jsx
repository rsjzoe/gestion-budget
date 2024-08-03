import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Bonus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    color={"#000"}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path d="M32 20c-6 0-12 0-12-6a6 6 0 0 1 6-6c6 0 6 8 6 12zM32 20c6 0 12 0 12-6a6 6 0 0 0-6-6c-6 0-6 8-6 12zM12 32v24h40V32M8 20h48v12H8zM32 20v36" />
  </Svg>
)
export default Bonus
