import { list } from '@keystone-6/core';

import {
  text,
  relationship,
} from '@keystone-6/core/fields';

import { Session, canAccessList } from './list_access';

export const Role = list({
  fields: {
    name: text(),
    users: relationship({ ref: 'User.role', many: true }),
    accessibleLists: relationship({ ref: 'ListKey.roles', many: true })
  },

  ui: {
    isHidden: ({ session }: { session: Session }) => !canAccessList(session, 'Role'),
  },

  access: {
    operation: {
      create: ({ session }: { session: Session }) => canAccessList(session, 'Role'),
      update: ({ session }: { session: Session }) => canAccessList(session, 'Role'),
      delete: ({ session }: { session: Session }) => canAccessList(session, 'Role'),
      query: ({ session }: { session: Session }) => canAccessList(session, 'Role'),
    }
  }
});