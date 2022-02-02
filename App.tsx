import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navigator } from "./src/navigation/Navigator";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;
