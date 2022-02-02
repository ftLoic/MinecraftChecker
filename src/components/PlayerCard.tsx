import React from "react";
import { StyleSheet } from "react-native";
import { Card, List, Paragraph } from "react-native-paper";

interface PlayerCardProps {
  meta: any;
  username: string;
  id: string;
  avatar: string;
}

const PlayerCard = ({ meta, username, id, avatar }: PlayerCardProps) => {
  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Cover source={{ uri: avatar }} />
      <Card.Title title={username} />
      <Card.Content>
        <Paragraph>UID: {id}</Paragraph>
      </Card.Content>
      <List.Section>
        <List.Subheader>Username history</List.Subheader>
        {meta.name_history.map((name: any) => (
          <List.Item style={styles.badge} key={name.name} title={name.name} />
        ))}
      </List.Section>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  badge: {
    borderRadius: 5,
    padding: 5,
    margin: 5,
    backgroundColor: "#f7f7f7",
  },
});

export default PlayerCard;
