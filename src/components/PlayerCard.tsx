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
      <Card.Actions>
        <Button mode="contained" style={styles.button}>
          Add in favorites
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});

export default PlayerCard;
