import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginPage from "./pages/loginPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
