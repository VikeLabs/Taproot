import { list } from '@keystone-6/core';

import {
  text,
  relationship,
} from '@keystone-6/core/fields';

import { Session, canAccessList } from './list-access';

export const ListKey = list({
  fields: {
    key: text({ 
      validation: { isRequired: true },
      isIndexed: 'unique' // Do we need this property to be set?
      }),
    roles: relationship({ ref: 'Role.accessibleLists', many: true }),
  },

  ui: {
    isHidden: ({ session }: { session: Session }) => !canAccessList(session, 'ListKey'),
    listView: {
      initialColumns: ['key'],
    },
    labelField: 'key'
  },

  access: {
    operation: {
      create: ({ session }: { session: Session }) => canAccessList(session, 'ListKey'),
      update: ({ session }: { session: Session }) => canAccessList(session, 'ListKey'),
      delete: ({ session }: { session: Session }) => canAccessList(session, 'ListKey'),
      query: ({ session }: { session: Session }) => canAccessList(session, 'ListKey'),
    }
  }
});