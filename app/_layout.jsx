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
import { Ajouter } from "@/app/ajouter/ajouter";
import { db } from "@/drizzle/drizzle";
import migrations from "@/drizzle/migrations";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";

export default function Layout() {
  const { success, error } = useMigrations(db, migrations);
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
   
  if (error)
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );

  if (!success)
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );

  return (
    <LoadFont>
      <ThemeProvider value={DefaultTheme}>
        <StatusBar backgroundColor={COLORS.primary} style="dark" />
        <View style={styles.contianer}>
          <Slot />
          <View style={styles.round}>
            <Plus />
          </View>
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

              <View style={styles.roundWhite}>
                <Plus />
              </View>
            </TouchableOpacity>
            <Tab name={"Rapports"} href={"/rapport"} pageActive={activePage} />
            <Tab name={"Moi"} href={"/user"} pageActive={activePage} />
          </View>
          <Animated.View style={[styles.addContainer, { top: topAnim }]}>
            <Ajouter
              onClose={() => {
                setOpenModal(false);
              }}
            />
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
  },
  round: {
    borderRadius: 9999,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    padding: 16,
    position: "absolute",
    zIndex: -9999,
    bottom: 13,
    left: "42%",
  },
  roundWhite: {
    borderRadius: 9999,
    backgroundColor: "#fff",
    padding: 16,
    position: "absolute",
    zIndex: -9999,
    bottom: 1,
    left: "8.5%",
  },
  addContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
