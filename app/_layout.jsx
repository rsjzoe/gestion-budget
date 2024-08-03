import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, usePathname } from "expo-router";
import { useColorScheme } from "@/lib/hooks/useColorScheme";
import { View } from "@/components/custom/themed";
import { LoadFont } from "@/components/load-font/load-font";
import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "@/constants/Colors";
import { TouchableOpacity } from "@/components/custom/touchable-opacity";
import Plus from "@/components/icons/plus";
import { Tab } from "@/app/components/tab";

export default function Layout() {
  const colorScheme = useColorScheme();
  const valueTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const activePage = usePathname();

  return (
    <LoadFont>
      <ThemeProvider value={DefaultTheme}>
        <StatusBar backgroundColor={COLORS.primary} style="dark" />
        <View style={styles.contianer}>
          <Slot />
          <View style={styles.tabBar}>
            <Tab name={"Accueil"} href={"/"} pageActive={activePage} />
            <Tab name={"Graphique"} href={"/graphic"} pageActive={activePage} />
            <TouchableOpacity style={styles.tab}>
              <View style={styles.plus}>
                <Plus />
              </View>
            </TouchableOpacity>
            <Tab name={"Rapports"} href={"/rapport"} pageActive={activePage} />
            <Tab name={"Moi"} href={"/user"} pageActive={activePage} />
          </View>
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
});
