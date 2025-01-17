import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import logo from "../assets/logo.png";

export default function Login() {
  return (
    <KeyboardAvoidingView
      //enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>TECNOLOGIAS</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encontrar Spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    //Ocupa todo tamanho da tela
    flex: 1,
    //Alinha conteudo da tela no centro
    justifyContent: "center",
    //Alinha horizontalmente ao centro
    alignItems: "center"
  },

  form: {
    //Ocupa a largura inteira
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginBottom: 8
  },

  label: {
    //negrito
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
