/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.
*/

// We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from '.keystone/types';

import { User } from './lists/user';
import { ContentSnippet } from './lists/content-snippet';
import { Role } from './lists/role';
import { ListKey } from './lists/list-key';
import { Page } from './lists/page';

export const lists: Lists = {
  ContentSnippet,
  Page,
  User,
  Role,
  ListKey
};
