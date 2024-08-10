import { StyleSheet } from "react-native";
import { Text, View } from "@/components/custom/themed";
import { TouchableOpacity } from "@/components/custom/touchable-opacity";
import { COLORS } from "@/constants/Colors";
import Calendar from "@/components/icons/calendar";
import Cart from "@/components/icons/cart";
import Bonus from "@/components/icons/bonus";
import Animal from "@/components/icons/animal";
import Transport from "@/components/icons/transport";
import {FormAdd} from '@/app/ajouter/components/formAdd'
import { useState } from "react";

const depenses = [
  {
    Icon: Cart,
    category: "Achats",
  },
  {
    Icon: Animal,
    category: "Animal",
  },
  {
    Icon: Transport,
    category: "Transport",
  },
];
const revenus = [
  {
    Icon: Bonus,
    category: "Bonus",
  },
];
export function Ajouter({ onClose }) {
  const [isDepense, setDepense] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [category, setCategory] = useState(null)
  const data = isDepense ? depenses : revenus;

  return (
    <>
      <View style={styles.modalHeaderContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
          >
            <Text style={styles.annuler}>Annuler</Text>
          </TouchableOpacity>
          <Text style={styles.ajouter}>Ajouter</Text>
          <Calendar />
        </View>
        <View style={styles.depenseRevenus}>
          <TouchableOpacity
            style={[
              styles.depense,
              { backgroundColor: isDepense ? "#000" : "transparent" },
            ]}
            onPress={() => {
              setDepense(true);
            }}
          >
            <Text style={{ color: isDepense ? COLORS.secondary : "#000" }}>
              Dépenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.revenus,
              { backgroundColor: isDepense ? "transparent" : "#000" },
            ]}
            onPress={() => {
              setDepense(false);
            }}
          >
            <Text style={{ color: isDepense ? "#000" : COLORS.secondary }}>
              Revenus
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconContainer}>
        {data.map((item, i) => (
          <TouchableOpacity
            style={styles.icons}
            key={i}
            onPress={() => {
              setSelectedIndex(i);
              setShowInput(true);
              setCategory(item.category)
            }}
          >
            <View
              style={[
                styles.iconBg,
                {
                  backgroundColor:
                    selectedIndex === i ? COLORS.primary : "#e4e5e4",
                },
              ]}
            >
              <item.Icon color={"#5b5a5b"} />
            </View>
            <Text>{item.category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {showInput ? <FormAdd onClose={onClose} category={category}/> : null}
    </>
  );
}

const styles = StyleSheet.create({
  modalHeaderContainer: {
    backgroundColor: COLORS.primary,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  annuler: {
    fontSize: 18,
  },
  ajouter: {
    fontSize: 20,
    fontWeight: "800",
    position: "relative",
    left: -20,
  },
  depenseRevenus: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 55,
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 15,
  },
  depense: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    alignItems: "center",
    borderRightWidth: 1,
    backgroundColor: "#000",
  },
  revenus: {
    alignItems: "center",
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    padding: 15,
    flexWrap: "wrap",
  },
  icons: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconBg: {
    backgroundColor: "#e4e5e4",
    padding: 7,
    borderRadius: 9999,
  },
});
