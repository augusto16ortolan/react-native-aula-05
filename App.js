import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.estiloTexto}>Olá mundo!</Text>
      <Text style={styles.estiloTexto}>Olá mundo!</Text>
      <Text style={styles.estiloTexto}>Olá mundo!</Text>
      <Text style={styles.estiloTexto}>Olá mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4287f5",
    alignItems: "center",
    justifyContent: "center",
  },
  estiloTexto: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
});
