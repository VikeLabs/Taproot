// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  select,
} from '@keystone-6/core/fields';

// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from '@keystone-6/fields-document';

export const ContentSnippet = list({
  fields: {
    title: text(),

    // Having the status here will make it easy for us to choose whether to display
    // posts on a live site.
    status: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],

      // We want to make sure new posts start off as a draft when they are created
      defaultValue: 'draft',

      // fields also have the ability to configure their appearance in the Admin UI
      ui: {
        displayMode: 'segmented-control',
      },
    }),

    // The document field can be used for making highly editable content. Check out our
    // guide on the document field https://keystonejs.com/docs/guides/document-fields#how-to-use-document-fields
    // for more information
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
      relationships: {
        pageLink: {
          listKey: 'Page',
          selection: 'id title content{document}',
          label: 'Link (Page)',
          kind: 'inline'
        },
        contentLink: {
          listKey: 'ContentSnippet',
          selection: 'id title content{document}',
          label: 'Link (Snippet)',
          kind: 'inline'
        },
      },
    }),
  },

  // ui: {
  //   isHidden: ({ session }: { session: Session }) => !canAccessList(session, 'ContentSnippet'),
  // },

  access: {
    operation: {
      // create: ({ session }: { session: Session }) => canAccessList(session, 'ContentSnippet'),
      // update: ({ session }: { session: Session }) => canAccessList(session, 'ContentSnippet'),
      // delete: ({ session }: { session: Session }) => canAccessList(session, 'ContentSnippet'),
      // query: ({ session }: { session: Session }) => canAccessList(session, 'ContentSnippet'),
    }
  },
});