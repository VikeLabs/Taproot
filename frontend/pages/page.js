
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


const Page = ({slug}) => {
  console.log("Creating Page() component with slug = " + slug)

  // useQuery will still return data even if the query result is empty so you have to check for this (with data.page)
  const { loading, error, data } = useQuery(PAGE_QUERY, {
    variables: { slug: slug },
  });

  if(data){
    if(data.page){
      return (
        <div>
          <DocumentRenderer document={data.page.content.document} renderers={TaprootPageRenderer}/>
        </div>
      )
    }
    else{
      return <p>Couldn't find a page with the id: {slug}</p>
    }
  }
  if(loading){
    return (<p>Loading...</p>);
  }
  if(error){
    return (<p>Error loading page {slug}</p>)
  }
}

export default Page
