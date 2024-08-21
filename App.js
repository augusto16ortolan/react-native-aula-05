import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";

export default function App() {
  const [primeiroNome, setPrimeiroNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [escondeSobrenome, setEscondeSobrenome] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      console.log("funcinou");
      setLoading(false);
    }, 3000);
  }, []);

  function stopLoading() {
    setLoading(!loading);
  }

  function mostrarAlert() {
    const nomeCompleto = primeiroNome + " " + sobrenome;

    Alert.alert("Nome completo", nomeCompleto);
  }

  function ocultaSobrenome() {
    setEscondeSobrenome(!escondeSobrenome);
  }

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
      {escondeSobrenome ? (
        <></>
      ) : (
        <Text style={[styles.estiloTexto]}>Sobrenome: {sobrenome}</Text>
      )}
      <Button title="Executar" onPress={() => stopLoading()} />
      <ActivityIndicator animating={loading} size={"large"} color={"red"} />
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
