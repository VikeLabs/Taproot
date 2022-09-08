# Development resources
A brief overview of the technologies used by Taproot and links to their documentation and tutorials.

### JavaScript
Really easy-to-understand guide [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

### Keystone JS
Keystone is used to create and organize content on the back end. It also creates an API through which all of the content can be accessed by the front end. It helps you define the types of content that you want to store and provides a nice user interface for editing content.

[Docs - Getting set up](https://keystonejs.com/docs/walkthroughs/getting-started-with-create-keystone-app)

[YouTube - Keystone tutorial](https://www.youtube.com/watch?v=3cH1BXJbfa4)

[Editing the admin UI](https://keystonejs.com/docs/guides/custom-admin-ui-navigation)

### React
React is used to organize HTML, CSS, and Javascript into reusable components and helps to manage some of the tedious work that’s normally involved in creating user interfaces. The actual HTML you write is in a format called JSX which is essentially HTML within a Javascript file. So if there’s no actual HTML, how does your browser know what to render? It turns out that React generates HTML *in the browser* using Javascript and the JSX you wrote. This means that when you visit a React site, your browser only receives Javascript and not HTML.

We’re using React for Taproot because

- It makes your website faster
- It makes user interfaces way easier to create and manage
- It’s a good skill to learn since it’s one of the main web technologies

[Getting started with React](https://reactjs.org/docs/hello-world.html)

[YouTube - React crash course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

### Next
Next adds extra functionality to React. It uses React to generate HTML before the client ever requests it. This means there’s actual HTML sitting on the server, ready to go, just waiting for someone to request it. This is called *static site generation* and adds performance and SEO benefits. Next also does a bunch of other stuff that I don’t understand.

[Docs - Getting set up](https://nextjs.org/learn/basics/create-nextjs-app/setup)

[YouTube - Next crash course](https://www.youtube.com/watch?v=mTz0GXj8NN0)

### Apollo
Apollo is used to generate GraphQL queries in the front end so that they can be sent to the back end and interpreted by the Keystone API.

[Docs - Getting set up](https://www.apollographql.com/docs/)

### GraphQL
GraphQL is the actual query language (like SQL) that is used to access data, in this case from our Keystone back end API.

[Docs - Everything you need to know about GraphQL queries](https://graphql.org/learn/queries/)

### TypeScript
TypeScript is a superset of Javascript that adds static typing, among other things.

[YouTube - TypeScript crash course](https://www.youtube.com/watch?v=BCg4U1FzODs)

### Bootstrap
Bootstrap is a bunch of CSS that’s pre-packaged using CSS classes and is very easy to integrate into your site. It just makes it really fast to get decent looking styling.

[Docs - Card components (browse other components if you’re looking for something else)](https://getbootstrap.com/docs/5.1/components/card/)