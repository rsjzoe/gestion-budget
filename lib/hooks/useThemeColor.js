import { ThemeColor } from "@/constants/Colors";
import { useColorScheme } from "./useColorScheme";

export function useThemeColor(props, colorName) {
  // const theme = useColorScheme() ?? "dark";
  // TODO : manage with state
  const theme = "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return ThemeColor[theme][colorName];
  }
}
