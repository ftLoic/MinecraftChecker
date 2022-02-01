import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";
import ContentLoader, {
  Circle,
  Facebook,
  Rect,
} from "react-content-loader/native";

// import { data } from "../../api/data";
import { useStarships } from "../hooks/useStarships";

const App = () => {
  const renderItem = ({ item }: any) => (
    <Card mode="elevated" style={styles.card}>
      <Card.Title title={item.name} />
      <Card.Content>
        <Paragraph>Model: {item.model}</Paragraph>
        <Paragraph>Crew: {item.crew}</Paragraph>
        <Paragraph>Hyperdrive Rating: {item.hyperdrive_rating}</Paragraph>
        <Paragraph>Cost in Credits: {item.cost_in_credits}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" style={styles.button}>
          Buy this
        </Button>
      </Card.Actions>
    </Card>
  );

  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return (
      <ContentLoader viewBox="0 0 380 70">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );
  }
  if (isError) {
    return <Text>Error!</Text>;
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
    padding: 20,
  },
  card: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});

export default App;
