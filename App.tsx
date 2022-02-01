import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import FeedScript from "./src/screens/FeedScript";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
  const queryClient = new QueryClient();
  //   return <LoginScreen />;
  return (
    <QueryClientProvider client={queryClient}>
      <FeedScript />
    </QueryClientProvider>
  );
};

export default App;
