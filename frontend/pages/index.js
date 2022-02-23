import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyQuery from "./MyQuery";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

// Create an instance of ApolloClient
const client = new ApolloClient({
  uri: 'http://localhost:5000/api/graphql',
  cache: new InMemoryCache()
});


// Export a function that returns our FooBar component wrapped in some JSX which is wrapped in the ApolloProvider component
export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Test title</h1>
        <hr/>
        <MyQuery />
      </div>
    </ApolloProvider>
  )
}
