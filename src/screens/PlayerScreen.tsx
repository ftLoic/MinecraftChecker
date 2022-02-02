import React from "react";
import { Text, ScrollView, View, StatusBar } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";

import { usePlayers } from "../hooks/usePlayer";
import { Header } from "../components/Header";
import PlayerCard from "../components/PlayerCard";

type Props = {
  route: any;
};

const PlayerScreen = ({ route }: Props) => {
  const { isLoading, isError, data } = usePlayers(route.params.name);

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
      <ScrollView style={{ padding: 32 }}>
        <Title>A player was found!</Title>
        <PlayerCard {...data.data.player} />
      </ScrollView>
    </View>
  );
};

export default PlayerScreen;
