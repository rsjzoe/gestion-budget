import { StyleSheet } from "react-native";
import { View } from "@/components/custom/themed";
import { Input } from "@/components/input/input";
import { COLORS } from "@/constants/Colors";
import Check from "@/components/icons/check";
import { Button } from "@/components/button/button";
import { useState } from "react";
import { Depenses } from "@/lib/depenses";

export function FormAdd({ onClose, category }) {
  const [montant, setMontant] = useState("");
  const [note, setNote] = useState("");

  return (
    <>
      <View style={styles.formAdd}>
        <Input
          keyboardType="decimal-pad"
          placeholder="entrer montant..."
          style={{ borderWidth: 0, padding: 10 }}
          onChangeText={(value) => {
            setMontant(value);
          }}
        />
        <View style={styles.inputSubmit}>
          <Input
            placeholder="Note : saisie une note..."
            style={{ borderWidth: 0, flex: 1, padding: 10 }}
            onChangeText={(text) => {
              setNote(text);
            }}
          />
          <Button
            style={styles.button}
            onPress={async () => {
              if (montant.length > 0 && note.length > 0 && category != null) {
                await Depenses.insert({
                  //category: category,
                  category,
                  montant: Number(montant),
                  label: note,
                });
                onClose();
              }
            }}
          >
            <Check />
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formAdd: {
    backgroundColor: "#e4e5e4",
    padding: 9,
    bottom: 0,
    position: "absolute",
    width: "100%",
    gap: 9,
    // display:"none",
  },
  inputSubmit: {
    flexDirection: "row",
    gap: 7,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
});
