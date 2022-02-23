import {gql, useQuery} from '@apollo/client'

// Create a query literal
const MY_QUERY = gql`
  query MyQueryName{
    posts{
      title
      status
    }
  }
`;

// Create a function (just a react component?) that executes that query and returns some JSX
const MyQuery = () => {
  console.log("running query")
  const { loading, error, data } = useQuery(MY_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <div>
      <p>Error :( </p>
      <p>{error.message}</p>
    </div>;
  
  return data.posts.map(({ title, status }) => (
    <div key={title}>
      <h3>Post title: {title}</h3>
      <small>Status: {status}</small>
      <br /><br />
    </div>
  ));
}


export default MyQuery