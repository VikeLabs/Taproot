
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


const FooRenderer = {
  inline: {
    relationship({ relationship, data }) {
      if (relationship === 'embed') {
        if (data === null || data.data === undefined) {
          return <span>[unknown snippet]</span>;
        } else {
          return(
            "Rendering with Foo Renderer"
            // <div className='card my-4'>
            //   <div className='card-body'>
            //     <h6 className='card-title'>{data.data.title}</h6>
            //     <div className='card-text'>
            //       <DocumentRenderer document={data.data.content.document}/>
            //     </div>
            //   </div>
            // </div>
          );
        }
      }
      return null;
    },
  },
};

const MageRenderer = {
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
  },
};

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
          About to render the document using our custom renderer
          <DocumentRenderer document={data.page.content.document} />
        </div>
      )
    }
    else{
      return <span>Couldn't find a page with the id: {slug}</span>
    }
  }
  if(loading){
    return (<span>Loading...</span>);
  }
  if(error){
    return (<span>Error loading page {slug}</span>)
  }
}

export default Page
