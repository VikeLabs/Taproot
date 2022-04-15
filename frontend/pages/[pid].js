
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
import { useRouter } from 'next/router'
import {gql, useQuery} from '@apollo/client'
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { TaprootPageRenderer } from '../util/page-renderer';


const BACKEND_URL = "http://localhost:5000"

// Create an instance of ApolloClient
const client = new ApolloClient({
    uri: BACKEND_URL + '/api/graphql',
    cache: new InMemoryCache()
  });
  

// Create a query literal
const PAGE_QUERY = gql`
  query GetPage($slug: String){
    page(where: {slug: $slug}){
      title
      content{
        document(hydrateRelationships:true)
      }
      id
    }
  }
`;

function getPage(slug){
    const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: { slug: slug },
    });
    if(data){
    return data;
    }
}

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <ApolloProvider client={client}>
        <div>
            <p>This is the post with the id: {pid} </p>
            
        </div>  
    </ApolloProvider>
  );
}

export default Post
