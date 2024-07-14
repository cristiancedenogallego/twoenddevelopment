import {ApolloProvider} from "@apollo/client";
import {createApolloClient} from "./apollo"

function App() {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
    </ApolloProvider>
  )
}

export default App
