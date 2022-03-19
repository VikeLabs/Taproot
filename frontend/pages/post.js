import {gql, useQuery} from '@apollo/client'
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { TaprootPageRenderer } from '../util/page-renderer';

// Create a query literal
const POST_QUERY = gql`
  query {
    pages{
      title
      snippets{
        title
      }
      content{
        document
      }
      id
    }
  }
`;

const BACKEND_POST_DIR = "/content-snippets"

// Create a function (just a react component?) that executes that query and returns some JSX
const Post = ({BACKEND_URL}) => {

  // Query the back end and store results in those 3 variables
  const { loading, error, data } = useQuery(POST_QUERY);  

  // Return loading message if loading
  if (loading) return <p>Loading...</p>;

  // Return error message if error
  if (error) return <div>
      <p>Error :( </p>
      <p>{error.message}</p>
    </div>;
  
  // If we reach this point we must have data in the data variable. Use it to output some formatted stuff.
  return data.pages.map(({ title, content, snippets, id}) => (
    <div className='card my-4' key={id}>
      {console.log(content.document)}
      <div className='card-body'> {/* These class names are from Bootstrap and used for quick styling */}
        <h4 className='card-title'>{title}</h4>
        <div className='card-text'>
          <TaprootPageRenderer document={content.document}/>
        </div>
      </div>
      <div className='card-footer text-muted'>
        <p><a href={BACKEND_URL + BACKEND_POST_DIR + "/" + id} className='btn btn-secondary'>Edit this page</a></p>
      </div>
    </div>
  ));
}


export default Post