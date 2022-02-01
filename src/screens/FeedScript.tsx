import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";

import { StarshipCard } from "../components/StarshipCard";
import { useStarships } from "../hooks/useStarships";

const FeedScript = () => {
  const renderItem = ({ item }: any) => <StarshipCard {...item} />;

  const { isLoading, isError, data, refetch } = useStarships();

  if (!isLoading) {
    return (
      <ContentLoader viewBox="0 0 380 70">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );
  }
  if (isError) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <Text>Error!</Text>
        <Button mode="contained" onPress={() => refetch()}>
          Retry
        </Button>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingVertical: 20,
  },
});

export default FeedScript;
