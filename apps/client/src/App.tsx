import {ApolloProvider} from "@apollo/client";
import {createApolloClient} from "./apollo"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Root} from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
       <RouterProvider router={router} />
    </ApolloProvider>
  )
}

export default App
