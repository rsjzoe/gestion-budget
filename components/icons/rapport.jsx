import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Rapport = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    viewBox="0 0 32 32"
    color={"#000"}
    {...props}
  >
    <Path fill={"currentColor"} d="M9.069 2.672V17.6H2.672v8.718c0 2.129 1.983 3.01 3.452 3.01H26.13c1.616 0 3.199-1.572 3.199-3.199V2.672H9.07zm-2.945 25.59c-.664 0-2.385-.349-2.385-1.944v-7.652H9.07v7.192c0 .714-.933 2.404-2.404 2.404h-.542zm22.138-2.133c0 1.036-1.096 2.133-2.133 2.133H9.016c.718-.748 1.119-1.731 1.119-2.404V3.738h18.126v22.391z" />
    <Path fill={"currentColor"} d="M12.268 5.871h13.861v1.066H12.268V5.871zM12.268 20.265h13.861v1.066H12.268v-1.066zM12.268 23.997h13.861v1.066H12.268v-1.066zM26.129 9.602H12.268v7.997h13.861V9.602zm-1.066 6.931H13.334v-5.864h11.729v5.864z" />
  </Svg>
)
export default Rapport
