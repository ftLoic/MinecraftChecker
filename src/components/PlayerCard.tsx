import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";

interface PlayerCardProps {
  username: string;
  id: string;
  avatar: string;
}

const PlayerCard = ({ username, id, avatar }: PlayerCardProps) => {
  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Cover
        source={{
          uri: avatar,
        }}
      />
      <Card.Title title={username} />
      <Card.Content>
        <Paragraph>UID: {id}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    maxWidth: 200,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default PlayerCard;
