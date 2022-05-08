
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
  import { useRouter } from 'next/router'
  import Page from './page.js'
  
  const BACKEND_URL = "http://localhost:5000"
  
  // Create an instance of ApolloClient
  const client = new ApolloClient({
    uri: BACKEND_URL + '/api/graphql',
    cache: new InMemoryCache()
  });


  // function getSlug(){
  //   const router = useRouter();
  //   console.log("Router.query.slug: ", router.query.slug)
  //   if(router.query.slug){
  //     return router.query.slug;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  
  // Export a function that returns our FooBar component wrapped in some JSX which is wrapped in the ApolloProvider component
  export default function Slug() {
    const {query, isReady} = useRouter();
    const pid = query.pid;
    if(isReady && pid){
      console.log("Returning full output from the Slug() function")
      return (
        <ApolloProvider client={client}>
          <div className='container'>
            <h2 className='jumbo' style={{marginTop: 2 + 'rem'}}>Taproot</h2>
            <hr/>
            
            {/* Insert a Page component, which renders pages depending on which slug you pass it */}
            <Page slug={pid}/>

            {/* Include Boostrap via CDN */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          </div>
        </ApolloProvider>
      )
    }
    return null
  }
  