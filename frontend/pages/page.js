
import {gql, useQuery} from '@apollo/client'
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { TaprootPageRenderer } from '../util/page-renderer';


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
  console.log("getting page with slug: ", slug)
    const { loading, error, data } = useQuery(PAGE_QUERY, {
      variables: { slug: slug },
    });
    if(loading){
      console.log("Loading: ", loading)
    }
    if(error){
      console.log("Error: ", error)
    }
    if(data){
      console.log("Data found: ", data)
      return data;
    }
}

/**
 * Here's the thing. It seems like the code below gets run multiple times and I'm not sure why. 
 * I really need to understand this asynchronous business better.
 */

const Page = ({pid}) => {
  console.log("Running page() function with pid: ", pid)
  if(pid){
    return (
      <div>
        <DocumentRenderer document={getPage(pid)?.page.content.document} renderers={TaprootPageRenderer}/>
      </div>
    );
  }
  else{
    return (
      <div>
        Nothing to return
      </div>
    );
  }
}

export default Page
