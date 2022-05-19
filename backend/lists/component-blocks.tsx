import React from 'react';
import { jsx } from '@keystone-ui/core';
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  quote: component({
    component: ({ attribution, content }) => {
      return (
        <div
          style={{
            borderLeft: '3px solid #CBD5E0',
            paddingLeft: 16,
          }}
        >
          <div style={{ fontStyle: 'italic', color: '#4A5568' }}>{content}</div>
          <div style={{ fontWeight: 'bold', color: '#718096' }}>
            <NotEditable>— </NotEditable>
            {attribution}
          </div>
        </div>
      );
    },
    label: 'My Foo Component Block',
    props: {
      content: fields.child({
        kind: 'block',
        placeholder: 'Quote...',
        formatting: { inlineMarks: 'inherit', softBreaks: 'inherit' },
        links: 'inherit',
      }),
      attribution: fields.child({ kind: 'inline', placeholder: 'Attribution...' }),
    },
    chromeless: true,
  }),
};