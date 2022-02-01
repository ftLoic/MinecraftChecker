import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

export function StarshipCard({
  name,
  model,
  manufacturer,
  cost_in_credits,
}: StarshipCardProps) {
  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Cover
        source={{
          uri: "https://inteng-storage.s3.amazonaws.com/img/iea/BxG2d8lJw9/sizes/porsche-lucasfilm-starship-ie_md.jpg",
        }}
      />
      <Card.Title title={name} />
      <Card.Content>
        <Paragraph>Model: {model}</Paragraph>
        <Paragraph>Manufacturer: {manufacturer}</Paragraph>
        <Paragraph>Cost in Credits: {cost_in_credits}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" style={styles.button}>
          Buy this
        </Button>
      </Card.Actions>
    </Card>
  );
}

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
