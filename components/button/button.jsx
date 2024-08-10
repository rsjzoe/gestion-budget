import {
  StyleProp,
  StyleSheet,
  TouchableOpacityProps as TOP,
  ViewStyle,
} from "react-native";
import { Text, View } from "../custom/themed";
import { TouchableOpacity } from "../custom/touchable-opacity";
import { COLORS } from "@/constants/Colors";

export function Button({
  children,
  style,
  containerStyle,
  hideBackground = false,
  disable = false,
  variant = "primary",
  iconLeft,
  iconRight,
  ...props
}) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      <View style={[styles.button, style, styles[variant]]}>
        <View style={styles.buttonContent}>
          {iconLeft}
          <Text style={styles.text}>{children}</Text>
          {iconRight}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  primary: {},
  secondary: {
    backgroundColor: COLORS.primaryTransparent,
  },
  text: {
    backgroundColor: "transparent",
    color: "#fff",
  },
});
