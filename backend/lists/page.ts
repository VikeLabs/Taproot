import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  timestamp,
  select,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';

import { Session, canAccessList } from './list-access';

export const Page = list({
  fields: {
    title: text(),
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
    }),
    publishDate: timestamp(),
    snippets: relationship({ ref: 'ContentSnippet.pages', many: true })
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