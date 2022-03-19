import { Session, canAccessList } from './list-access';

import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password
} from '@keystone-6/core/fields';

export const User = list({
  // Here are the fields that `User` will have. We want an email and password so they can log in
  // a name so we can refer to them, and a way to connect users to posts.
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),

    // The password field takes care of hiding details and hashing values
    password: password({ validation: { isRequired: true } }),
    role: relationship({ ref: 'Role.users', }),
  },

  // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
  ui: {
    listView: {
      initialColumns: ['name', 'role'],
    },
    isHidden: ({ session }: { session: Session }) => !canAccessList(session, 'User')
  },

  access: {
    operation: {
      create: ({ session }: { session: Session }) => canAccessList(session, 'User'),
      update: ({ session }: { session: Session }) => canAccessList(session, 'User'),
      delete: ({ session }: { session: Session }) => canAccessList(session, 'User'),
      // queries can't be restricted or else the user won't be able to sign out. At least, not unless
      // we create an alternative sign-out button to the default one in the admin UI. 
    }
  }
});