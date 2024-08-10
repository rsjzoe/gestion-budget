import { Text, View } from "@/components/custom/themed";
import Search from "@/components/icons/search";
import Calendar from "@/components/icons/calendar";
import { StyleSheet } from "react-native";
import { Transaction } from "@/app/components/transaction";
import { COLORS } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { db } from "@/drizzle/drizzle";
import { Depenses } from "@/lib/depenses";

export default function Index() {
  const [depenses, setDepenses] = useState([]);

  useEffect(() => {
    async function get() {
      // await Depenses.insert({
      //   category: "Bus",
      //   montant: 1000,
      //   label: "bus",
      // });

      const data = await Depenses.findMany();
      setDepenses(data);
      console.log(data);
    }
    get();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.navbar}>
          <Search />
          <Text style={styles.navText}>Gestion de budget</Text>
          <Calendar />
        </View>
        <View style={styles.barStat}>
          <View style={styles.stat}>
            <Text style={styles.statText}>Dépenses</Text>
            <Text style={styles.statMontant}>0</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statText}>Revenus</Text>
            <Text style={styles.statMontant}>0</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statText}>Balance</Text>
            <Text style={styles.statMontant}>0</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.transactionDay}>
          <Text style={styles.transactionText}>3 aout Samedi</Text>
          <View style={styles.depenseRevenu}>
            <Text style={styles.transactionText}>Dépenses: 90 000</Text>
            <Text style={styles.transactionText}>Revenus: 100 000</Text>
          </View>
        </View>
        <View style={styles.transactionContainer}>
          {depenses.map((item, i) => (
            <Transaction
              key={i}
              label={item.label}
              montant={item.montant}
              category={item.category}
              type={"Depense"}
            />
          ))}
          <Transaction
            label={"Bonus"}
            montant={"1 000 000"}
            category={"Bonus"}
            type={"Revenus"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: COLORS.primary,
    padding: 15,
    gap: 13,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navText: {
    fontWeight: "800",
    fontSize: 17,
  },
  barStat: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    gap: 8,
  },
  statText: {
    fontSize: 16,
    color: "#766010",
  },
  statMontant: {
    fontSize: 18,
  },
  transactionDay: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 9,
    justifyContent: "space-between",
    borderBottomColor: "#c9c9c5",
    borderBottomWidth: 0.18,
  },
  depenseRevenu: {
    flexDirection: "row",
    gap: 7,
  },
  transactionText: {
    color: "#989796",
    fontSize: 12,
  },
  transactionContainer: {
    padding: 15,
    gap: 15,
  },
});
