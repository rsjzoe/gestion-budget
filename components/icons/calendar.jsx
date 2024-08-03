import * as React from "react"
import Svg, { Path, G, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Calendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    color={"#000"}
    {...props}
  >
    <G filter="url(#a)">
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M3 8.267V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8.267m-18 0V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3.267m-18 0h18"
      />
    </G>
    <G filter="url(#b)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 2v3"
      />
    </G>
    <G filter="url(#c)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 2v3"
      />
    </G>
    <G filter="url(#d)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 11h-2"
      />
    </G>
    <G filter="url(#e)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 17h-2"
      />
    </G>
    <G filter="url(#f)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 11h-2"
      />
    </G>
    <G filter="url(#g)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 17h-2"
      />
    </G>
    <G filter="url(#h)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 11H6"
      />
    </G>
    <G filter="url(#i)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 17H6"
      />
    </G>
    <G filter="url(#j)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 14h-2"
      />
    </G>
    <G filter="url(#k)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 14h-2"
      />
    </G>
    <G filter="url(#l)">
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14H6"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default Calendar
