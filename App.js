import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [primeiroNome, setPrimeiroNome] = useState();
  const [sobrenome, setSobrenome] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        value={primeiroNome}
        onChangeText={setPrimeiroNome}
        placeholder="Informe o seu primeiro nome"
        style={styles.estiloCampoTexto}
      />
      <TextInput
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholder="Informe o seu sobrenome"
        style={styles.estiloCampoTexto}
      />
      <Text style={styles.estiloTexto}>Primeiro nome: {primeiroNome}</Text>
      <Text style={[styles.estiloTexto, { color: "black" }]}>
        Sobrenome: {sobrenome}
      </Text>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  estiloCampoTexto: {
    borderWidth: 1,
    width: "80%",
    height: 55,
    color: "white",
    fontSize: 15,
    padding: 12,
    borderRadius: 100,
    marginBottom: 15,
  },
});
