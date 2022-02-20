# Taproot Knowledge Base

### Vision
To make gardening knowledge more accessible for everyone.

### About this repo
This repository has separate front end and back end sections. The back end is a temporary setup that uses a Keystone 6 headless CMS and a local SQLite database that provides all the content using a GraphQL API. You have to run a local server in order to use the Keystone admin UI and to access the data from the front end. The front end is a basic React app built with Next. In order to actually use this thing you currently have to start up both the front and and the back end as two different servers.

### Getting set up
Start by cloning this repo somewhere on your hard drive.

Then create your own keystone project by following the instructions here: https://keystonejs.com/docs/walkthroughs/getting-started-with-create-keystone-app

You may need to install node.js and yarn before completing the above.

When creating your keystone project put it in a temporary folder somewhere - not the same place as the cloned repo.

When your project has been created, copy node_modules into the main project folder (the one you cloned).

Run yarn dev in the main project folder and you should be up and running.