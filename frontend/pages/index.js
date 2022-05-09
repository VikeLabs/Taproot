
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useRouter } from 'next/router'
import Post from './page.js'

const BACKEND_URL = "http://localhost:5000"

// Create an instance of ApolloClient
const client = new ApolloClient({
  uri: BACKEND_URL + '/api/graphql',
  cache: new InMemoryCache()
});


// Export a function that returns our FooBar component wrapped in some JSX which is wrapped in the ApolloProvider component
export default function Home() {
  // const router = useRouter()
  // const { pid } = router.query

  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <h2 className='jumbo' style={{marginTop: 2 + 'rem'}}>Taproot</h2>
        <hr/>

        <p>
          Welcome to Taproot Knowledge Base. Here are a few pages to check out.
        </p>

        {/* <Post pid={pid}/> */}

        <div className="list-group">
          <a href="carrots" className="list-group-item list-group-item-action">The current link item</a>
          <a href="foo" className="list-group-item list-group-item-action">A second link item</a>
          <a href="bar" className="list-group-item list-group-item-action">A third link item</a>
          <a href="gabba" className="list-group-item list-group-item-action">A fourth link item</a>
        </div>

        {/* Include Boostrap via CDN */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </div>
    </ApolloProvider>
  )
}
