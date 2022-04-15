import { config, list } from '@keystone-6/core';

import {
  text,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

export const Page = list({
  fields: {
    title: text(),
    slug: text({
      validation: { isRequired: true },
      isIndexed: 'unique'
    }),
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
        embed: {
          listKey: 'ContentSnippet',
          selection: 'id title content{document}',
          label: 'Content',
          kind: 'inline'
        },
      },
    }),
    },

  // ui: {
  //   isHidden: ({ session }: { session: Session }) => !canAccessList(session, 'Page'),
  // },

  access: {
    operation: {
      // create: ({ session }: { session: Session }) => canAccessList(session, 'Page'),
      // update: ({ session }: { session: Session }) => canAccessList(session, 'Page'),
      // delete: ({ session }: { session: Session }) => canAccessList(session, 'Page'),
      // query: ({ session }: { session: Session }) => canAccessList(session, 'Page'),
    }
  }
});