import React from 'react';
import { jsx } from '@keystone-ui/core';
import { NotEditable, component, fields, FormField } from '@keystone-6/fields-document/component-blocks';
// import { } from '@keystone-6/core/component-blocks';
import { FieldContainer, FieldLabel, TextArea } from "@keystone-ui/fields";

// naming the export componentBlocks is important because the Admin UI expects this
export const componentBlocks = {
  customBlock: component({  // Create a component called customBlock

    // Here we define a React component to render in the Admin UI. The props will be different kinds of
    // editable fields. This customStuff prop is defined below.
    component: ({ childField, hamtaro }) => {
      return (
        <div>
          {childField}
          <hr></hr>
          {hamtaro}
        </div>
      );
    },
    label: 'Custom Block',  // Component will be called 'Custom Block' in the Admin UI
    props: {
      // Here we define the prop to be a field of type child with some various arguments. 
      childField: fields.child({
        kind: 'inline',
        placeholder: 'this really is some custom stuff...',
      }),
      hamtaro: fields.text({ label: 'foo', defaultValue: 'bar' }),
    },
    chromeless: false
  }),
};