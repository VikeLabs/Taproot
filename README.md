# Taproot Knowledge Base

### Vision
To build the world's most comprehensive and accessible repository of horticultural knowledge.

[Foo](/docs/About.md)

### About this repo
This repository has separate front end and back end sections. The back end is a temporary setup that uses a Keystone 6 headless CMS and a local SQLite database that provides all the content using a GraphQL API. You have to run a local server in order to use the Keystone admin UI and to access the data from the front end. The front end is a basic React app built with Next. In order to actually use this thing you currently have to start up both the front and and the back end as two different servers.

As soon as Prisma (which Keystone 6 uses to access databases) fully supports MongoDB then we'll switch to using a Mongo Atlas cloud database.

### Getting set up
Tutorial for Windows 10 here: https://www.youtube.com/watch?v=ByuS1UjsqbU
Linux is essentially the same. Make sure you have version 16 or higher of nodejs!
The tutorial takes a while to follow but it's mostly fluff. It should actually be pretty fast to get everything working.
