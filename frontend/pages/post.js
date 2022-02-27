import {gql, useQuery} from '@apollo/client'
import { DocumentRenderer } from '@keystone-6/document-renderer';

// Create a query literal
const POST_QUERY = gql`
  query {
    posts{
      title
      status
      author{
        name
      }
      content{
        document
      }
    }
  }
`;

// Create a function (just a react component?) that executes that query and returns some JSX
const Post = () => {

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
  return data.posts.map(({ title, content, author}) => (
    <div className='card my-4'>
      <div className='card-body'> {/* These class names are from Bootstrap and used for quick styling */}
        <h4 className='card-title'>{title}</h4>
        <div className='card-text'>
          <DocumentRenderer document={content.document}/> {/* Use Keystone's document renderer to display the document content */}
        </div>
      </div>
      <div className='card-footer text-muted'>
        <p><small>Author: {author ? author.name : 'null'}</small></p>
        <p><a href='#' className='btn btn-secondary'>Edit this post</a></p>
      </div>
    </div>
  ));
}


export default Post