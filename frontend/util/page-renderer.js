import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';

export const TaprootPageRenderer = {
  inline: {
    relationship({ relationship, data }) {
      if (relationship === 'embed') {
        if (data === null || data.data === undefined) {
          return <span>[unknown snippet]</span>;
        } else {
          return(
            "Rendering"
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