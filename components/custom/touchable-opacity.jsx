import {
  TouchableOpacity as TO,
  TouchableOpacityProps as TOP,
} from "react-native";

export function TouchableOpacity({
  activeOpacity = 0.6,
  ...props
}: TouchableOpacityProps) {
  return <TO activeOpacity={activeOpacity} {...props} />;
}

type TouchableOpacityProps = TOP;
