import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";

import { Routes } from "../navigation/Routes";
import { Header } from "../components/Header";

type Props = {
  route: any;
  navigation: any;
};

const HomeScreen = ({ route, navigation }: Props) => {
  const [username, setUsername] = React.useState("");
  const searchUser = () => {
    console.log(username, route, Routes.PLAYER_SCREEN);
    navigation.navigate(Routes.PLAYER_SCREEN, { username });
  };

  return (
    <View>
      <Header />
      <View style={{ padding: 32 }}>
        <Title style={styles.title}>Search for a player</Title>
        <TextInput
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          label="Username"
          autoComplete="off"
        />
        <Button mode="contained" onPress={searchUser}>
          Search
        </Button>
      </View>
      <View style={{ backgroundColor: "#fafafa", padding: 32 }}>
        <Title style={styles.title}>Last searched players</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default HomeScreen;
