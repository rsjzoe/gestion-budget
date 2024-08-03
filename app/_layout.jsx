import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, usePathname } from "expo-router";
import { useColorScheme } from "@/lib/hooks/useColorScheme";
import { Text, View } from "@/components/custom/themed";
import { LoadFont } from "@/components/load-font/load-font";
import { StyleSheet, StatusBar, Animated } from "react-native";
import { COLORS } from "@/constants/Colors";
import { TouchableOpacity } from "@/components/custom/touchable-opacity";
import Plus from "@/components/icons/plus";
import { Tab } from "@/app/components/tab";
import { useEffect, useRef, useState } from "react";
import Calendar from "@/components/icons/calendar";

export default function Layout() {
  const colorScheme = useColorScheme();
  const valueTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const activePage = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const topAnim = useRef(new Animated.Value(StatusBar.currentHeight)).current;

  useEffect(() => {
    Animated.timing(topAnim, {
      toValue: openModal ? StatusBar.currentHeight : 1000,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [openModal]);

  return (
    <LoadFont>
      <ThemeProvider value={DefaultTheme}>
        <StatusBar backgroundColor={COLORS.primary} style="dark" />
        <View style={styles.contianer}>
          <Slot />
          <View style={styles.tabBar}>
            <Tab name={"Accueil"} href={"/"} pageActive={activePage} />
            <Tab name={"Graphique"} href={"/graphic"} pageActive={activePage} />
            <TouchableOpacity
              style={styles.tab}
              onPress={() => {
                setOpenModal(true);
              }}
            >
              <View style={styles.plus}>
                <Plus />
              </View>
            </TouchableOpacity>
            <Tab name={"Rapports"} href={"/rapport"} pageActive={activePage} />
            <Tab name={"Moi"} href={"/user"} pageActive={activePage} />
          </View>
          <Animated.View style={[styles.addContainer, { top: topAnim }]}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                }}
              >
                <Text style={styles.annuler}>Annuler</Text>
              </TouchableOpacity>
              <Text style={styles.ajouter}>Ajouter</Text>
              <Calendar />
              {/* <View></View> */}
            </View>
          </Animated.View>
        </View>
      </ThemeProvider>
    </LoadFont>
  );
}

const styles = StyleSheet.create({
  contianer: {
    // padding: 8,
    height: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    width: "100%",
    padding: 10,
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
  },
  plus: {
    backgroundColor: COLORS.primary,
    borderRadius: 9999,
    padding: 11,
    position: "absolute",
    top: -20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2.5,
  },
  addContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  modalHeader: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  annuler:{
    fontSize:18,
  },
  ajouter:{
    fontSize:20,
    fontWeight:"800",
    position:"relative",
    left:-20
  }
});
