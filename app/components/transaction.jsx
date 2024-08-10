import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";
import { Text, View } from "@/components/custom/themed";
import Transport from "@/components/icons/transport";
import Animal from "@/components/icons/animal";
import Bonus from "@/components/icons/bonus";
import Cart from "@/components/icons/cart";

//category = transport na achat de mretourne anle icon izi
//type => revenus ou depenses
export function Transaction({ label, montant, category, type }) {
  return (
    <>
      <View style={styles.transaction}>
        <View style={styles.iconLabel}>
          {category == "Transport" && (
            <View
              style={[styles.icon, { backgroundColor: COLORS.iconTransport }]}
            >
              <Transport />
            </View>
          )}
          {category == "Achats" && (
            <View
              style={[styles.icon, { backgroundColor: COLORS.iconTransport }]}
            >
              <Cart />
            </View>
          )}
          {category == "Animal" && (
            <View style={[styles.icon, { backgroundColor: COLORS.iconAnimal }]}>
              <Animal />
            </View>
          )}
          {category == "Bonus" && (
            <View style={[styles.icon, { backgroundColor: COLORS.iconBonus }]}>
              <Bonus />
            </View>
          )}
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text>
          {type == "Depense" ? "-" : ""}
          {montant}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ebebeb",
    paddingBottom: 10,
    borderBottomWidth: 0.18,
  },
  iconLabel: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  icon: {
    padding: 5,
    borderRadius: 9999,
  },
  label: {
    fontSize: 15,
  },
});
