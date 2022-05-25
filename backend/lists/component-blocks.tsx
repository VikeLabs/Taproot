import React from 'react';
import { jsx } from '@keystone-ui/core';
import { NotEditable, component, fields } from '@keystone-6/fields-document/component-blocks';
// import { } from '@keystone-6/core/component-blocks';

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
  customBlock: component({

    // So I think this part is a React component where the props are the editable bits.
    component: ({ customStuff }) => {
      return (
        <div>
          {customStuff}
        </div>
      );
    },
    label: 'Custom Block',
    props: {
      customStuff: fields.child({
        kind: 'inline',
        placeholder: 'this really is some custom stuff...'
      }),
      // customStuff: fields.text({
      //   label: 'text field',
      //   defaultValue: 'custom text here'
      // }),
    },
  }),
  // customBlock2: fields.text({
  //   label: 'text field',
  //   defaultValue: 'custom text here'
  // })
};