import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";

import { usePlayers } from "../hooks/usePlayer";
import { Header } from "../components/Header";
import PlayerCard from "../components/PlayerCard";

type Props = {
  route: any;
  navigation: any;
};

const PlayerScreen = ({ route, navigation }: Props) => {
  const { isLoading, isError, data, refetch } = usePlayers(
    route.params.username
  );

  if (isLoading) {
    return (
      <View>
        <Header />
        <View style={{ padding: 32 }}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  if (isError || !data.data.player) {
    return (
      <View>
        <Header />
        <View style={{ padding: 32 }}>
          <Title>No player found</Title>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Header />
      <View style={{ padding: 32 }}>
        <PlayerCard {...data.data.player} />
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

export default PlayerScreen;
