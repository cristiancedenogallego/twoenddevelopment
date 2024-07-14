import {ApolloClient, InMemoryCache} from "@apollo/client"

export const createApolloClient = () => {
	const cache = new InMemoryCache()

	const client = new ApolloClient({
		cache,
		uri: "https://my-no-existing-graphql-api.com/graphql"
	})

	return client
}