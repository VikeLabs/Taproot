import {gql, useQuery} from '@apollo/client'
import { DocumentRenderer } from '@keystone-6/document-renderer';

  // Create a query literal
  const SNIPPET_QUERY = gql`
    query GetSnippet($snippetId: ID){
      contentSnippet(where: {id: $snippetId} ){
        title
        content{
          document
        }
      }
    }
  `;


function getSnippet(snippetId){
  const { loading, error, data } = useQuery(SNIPPET_QUERY, {
    variables: { snippetId: snippetId },
  });
  if(data){
    return data;
  }
}


// Read through each line of the document. Replace all references to snippets with actual 
// snippets and replace the rest with text rendered by the Keystone document renderer.
// A good alternative strategy would be to edit the document first by inserting snippet 
// content and then pass the whole thing to the document renderer at the end.
// I think we'll assume that all snippet ids will be on their own line. This not only makes
// it easier for us here but it also makes more sense. I don't really like the idea of
// integrating a snippet with the rest of a sentence or line. They should all be their own chunks.
export const TaprootPageRenderer = ({document}) => {
  let output = [];
  for(let i = 0; i < document.length; i++){
    let line = document[i].children;
    let text = line[0].text;
    if(text[0] == '['){
      let snippetId = text.slice(1, -1);  // Remove first and last character from text (the '[' and ']')

      const { loading, error, data } = useQuery(SNIPPET_QUERY, {
        variables: { snippetId: snippetId },
      });
      if(data){
        let title = data.contentSnippet.title;
        let content = data.contentSnippet.content.document;
        
        output.push(
          <div className='card my-4' key={i}>
            <div className='card-body'>
              <h6 className='card-title'>{title}</h6>
              <div className='card-text'>
                <DocumentRenderer document={content}/>
              </div>
            </div>
          </div>
        );
      }


    }
    else{
      output.push(
        <div key={i} className="mt-2">
          <DocumentRenderer document={line}/>
        </div>
      );
    }
  }
  return (
    output
  );
}