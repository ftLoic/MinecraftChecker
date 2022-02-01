import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import Header from "../components/Header";

export const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Header>Welcome to STARPORT</Header>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={() => setEmail(email)}
          autoComplete={false}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={() => setPassword(password)}
          autoComplete={false}
          secureTextEntry={true}
        />
        <Button mode="contained" style={styles.button}>
          Login
        </Button>
      </View>
      <Text>Read Conditions and Terms</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#a31d7f",
  },
});
