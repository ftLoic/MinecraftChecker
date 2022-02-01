import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Header>
        Welcome to STARPORT
      </Header>
      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          autoComplete={false}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          autoComplete={false}
          secureTextEntry={true}
        />
        <Button
          mode="contained"
          style={styles.button}
        >
          Login
        </Button>
      </View>
      <Text>
        Read Conditions and Terms
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#a31d7f',
    color: 'white',
    paddingVertical: '33%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#a31d7f',
  }
});