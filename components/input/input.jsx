import { COLORS } from "@/constants/Colors";
import { StyleSheet, TextInput } from "react-native";

export function Input({ label, style, ...props }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={COLORS.neutral[400]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.neutral[600],
    color: COLORS.neutral[500],
  },
});
