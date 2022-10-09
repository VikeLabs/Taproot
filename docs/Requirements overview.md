# Requirements overview
This document is part of a broad effort to be explicit about the goals of this project. These requirements are far too few and far too ambiguous, but they are a starting place and still better than nothing.

### Business
- Provide a comprehensive source of knowledge on all aspects of horticulture
- Make horticultural knowledge easier to access than current systems
- Explore new ways of collecting and publishing user-generated content
- Add extra value by providing specialized UI to help users find certain information faster

### User
- Search for content on the site
- Access an editor area by signing in
- Edit certain pieces of content (text and images) and submit them for review
- Edit certain pages and submit them for review

### Functional
- Must store content snippets in database
- Must store pages in database
- Must store users in database
- Must store user roles in database
- Must be able to render all pages into a set of static html files
- All content must be accessible via graphql queries to back end server

### Non-functional
- Interface must be simple and easy to navigate
- Interface must not feature any ads
- Interface must look good on mobile