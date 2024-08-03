import * as React from "react"
import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg"
const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    color={"#000"}
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle
        cx={10.5}
        cy={10.5}
        r={6.5}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <Path
        fill="currentColor"
        d="M19.646 20.354a.5.5 0 0 0 .708-.708l-.708.708Zm.708-.708-5-5-.708.708 5 5 .708-.708Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Search
