import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Actualite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    color={"#000"}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M24 8H8a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Zm6 20c0 1.099-1.086 2.012-2.183 2.012H3.974a1.988 1.988 0 0 1-1.987-1.989V4.165C1.987 3.066 2.902 2 4 2h24c1.098 0 2 .902 2 2v24ZM28 0H4C1.806 0 0 1.969 0 4.165v23.858A3.975 3.975 0 0 0 3.974 32h23.843C30.012 32 32 30.196 32 28V4c0-2.196-1.806-4-4-4Zm-4 20H8a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Zm0-6H8a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z"
    />
  </Svg>
)
export default Actualite
