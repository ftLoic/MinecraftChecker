import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

export const Header = () => {
  const navigation = useNavigation();
  const { name } = useRoute();

  return (
    <Appbar.Header>
      <Appbar.BackAction
        style={{ display: navigation.canGoBack() ? "flex" : "none" }}
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content title={name} />
    </Appbar.Header>
  );
};
