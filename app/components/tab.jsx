import Actualite from "@/components/icons/actualite";
import { Text } from "@/components/custom/themed";
import { TouchableOpacity } from "@/components/custom/touchable-opacity";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { COLORS } from "@/constants/Colors";
import Graphic from "@/components/icons/graphic";
import Rapport from "@/components/icons/rapport";
import User from "@/components/icons/user";

export function Tab({ name, href, pageActive }) {
  return (
    <>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          router.push(href);
        }}
      >
        {name == "Accueil" ? (
          <Actualite color={pageActive == href ? COLORS.secondary : "#000"} />
        ) : (
          ""
        )}
        {name == "Graphique" ? (
          <Graphic color={pageActive == href ? COLORS.secondary : "#000"} />
        ) : (
          ""
        )}
        {name == "Rapports" ? (
          <Rapport color={pageActive == href ? COLORS.secondary : "#000"} />
        ) : (
          ""
        )}
        {name == "Moi" ? (
          <User color={pageActive == href ? COLORS.secondary : "#000"} />
        ) : (
          ""
        )}
        <Text
          style={[
            styles.tabText,
            {
              color: pageActive == href ? COLORS.secondary : "#000",
            },
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
  },
});
