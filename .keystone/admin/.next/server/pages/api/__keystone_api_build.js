"use strict";
(() => {
var exports = {};
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 4922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* reexport */ keystone),
  "default": () => (/* binding */ _keystone_api_build)
});

;// CONCATENATED MODULE: external "@keystone-6/core"
const core_namespaceObject = require("@keystone-6/core");
;// CONCATENATED MODULE: external "@keystone-6/core/fields"
const fields_namespaceObject = require("@keystone-6/core/fields");
;// CONCATENATED MODULE: external "@keystone-6/fields-document"
const fields_document_namespaceObject = require("@keystone-6/fields-document");
;// CONCATENATED MODULE: ../../schema.ts
/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/ // Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.

// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.

// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
const lists = {
    // Here we define the user list.
    User: (0,core_namespaceObject.list)({
        // Here are the fields that `User` will have. We want an email and password so they can log in
        // a name so we can refer to them, and a way to connect users to posts.
        fields: {
            name: (0,fields_namespaceObject.text)({
                validation: {
                    isRequired: true
                }
            }),
            email: (0,fields_namespaceObject.text)({
                validation: {
                    isRequired: true
                },
                isIndexed: 'unique',
                isFilterable: true
            }),
            // The password field takes care of hiding details and hashing values
            password: (0,fields_namespaceObject.password)({
                validation: {
                    isRequired: true
                }
            }),
            // Relationships allow us to reference other lists. In this case,
            // we want a user to have many posts, and we are saying that the user
            // should be referencable by the 'author' field of posts.
            // Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
            posts: (0,fields_namespaceObject.relationship)({
                ref: 'Post.author',
                many: true
            })
        },
        // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
        ui: {
            listView: {
                initialColumns: [
                    'name',
                    'posts'
                ]
            }
        }
    }),
    // Our second list is the Posts list. We've got a few more fields here
    // so we have all the info we need for displaying posts.
    Post: (0,core_namespaceObject.list)({
        fields: {
            title: (0,fields_namespaceObject.text)(),
            // Having the status here will make it easy for us to choose whether to display
            // posts on a live site.
            status: (0,fields_namespaceObject.select)({
                options: [
                    {
                        label: 'Published',
                        value: 'published'
                    },
                    {
                        label: 'Draft',
                        value: 'draft'
                    }, 
                ],
                // We want to make sure new posts start off as a draft when they are created
                defaultValue: 'draft',
                // fields also have the ability to configure their appearance in the Admin UI
                ui: {
                    displayMode: 'segmented-control'
                }
            }),
            // The document field can be used for making highly editable content. Check out our
            // guide on the document field https://keystonejs.com/docs/guides/document-fields#how-to-use-document-fields
            // for more information
            content: (0,fields_document_namespaceObject.document)({
                formatting: true,
                layouts: [
                    [
                        1,
                        1
                    ],
                    [
                        1,
                        1,
                        1
                    ],
                    [
                        2,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        2,
                        1
                    ], 
                ],
                links: true,
                dividers: true
            }),
            publishDate: (0,fields_namespaceObject.timestamp)(),
            // Here is the link from post => author.
            // We've configured its UI display quite a lot to make the experience of editing posts better.
            author: (0,fields_namespaceObject.relationship)({
                ref: 'User.posts',
                ui: {
                    displayMode: 'cards',
                    cardFields: [
                        'name',
                        'email'
                    ],
                    inlineEdit: {
                        fields: [
                            'name',
                            'email'
                        ]
                    },
                    linkToItem: true,
                    inlineCreate: {
                        fields: [
                            'name',
                            'email'
                        ]
                    }
                }
            }),
            // We also link posts to tags. This is a many <=> many linking.
            tags: (0,fields_namespaceObject.relationship)({
                ref: 'Tag.posts',
                ui: {
                    displayMode: 'cards',
                    cardFields: [
                        'name'
                    ],
                    inlineEdit: {
                        fields: [
                            'name'
                        ]
                    },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: {
                        fields: [
                            'name'
                        ]
                    }
                },
                many: true
            })
        }
    }),
    // Our final list is the tag list. This field is just a name and a relationship to posts
    Tag: (0,core_namespaceObject.list)({
        ui: {
            isHidden: true
        },
        fields: {
            name: (0,fields_namespaceObject.text)(),
            posts: (0,fields_namespaceObject.relationship)({
                ref: 'Post.tags',
                many: true
            })
        }
    })
};

;// CONCATENATED MODULE: external "@keystone-6/auth"
const auth_namespaceObject = require("@keystone-6/auth");
;// CONCATENATED MODULE: external "@keystone-6/core/session"
const session_namespaceObject = require("@keystone-6/core/session");
;// CONCATENATED MODULE: ../../auth.ts
/*
Welcome to the auth file! Here we have put a config to do basic auth in Keystone.

`createAuth` is an implementation for an email-password login out of the box.
`statelessSessions` is a base implementation of session logic.

For more on auth, check out: https://keystonejs.com/docs/apis/auth#authentication-api
*/ 
// See https://keystonejs.com/docs/apis/session#session-api for the session docs

let sessionSecret = process.env.SESSION_SECRET;
// Here is a best practice! It's fine to not have provided a session secret in dev,
// however it should always be there in production.
if (!sessionSecret) {
    if (true) {
        throw new Error('The SESSION_SECRET environment variable must be set in production');
    } else {}
}
// Here we define how auth relates to our schemas.
// What we are saying here is that we want to use the list `User`, and to log in
// we will need their email and password.
const { withAuth  } = (0,auth_namespaceObject.createAuth)({
    listKey: 'User',
    identityField: 'email',
    sessionData: 'name',
    secretField: 'password',
    initFirstItem: {
        // If there are no items in the database, keystone will ask you to create
        // a new user, filling in these fields.
        fields: [
            'name',
            'email',
            'password'
        ]
    }
});
// This defines how long people will remain logged in for.
// This will get refreshed when they log back in.
let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days
// This defines how sessions should work. For more details, check out: https://keystonejs.com/docs/apis/session#session-api
const session = (0,session_namespaceObject.statelessSessions)({
    maxAge: sessionMaxAge,
    secret: sessionSecret
});


;// CONCATENATED MODULE: ../../keystone.ts
/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/ 
// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.

/* harmony default export */ const keystone = (withAuth(// Using the config function helps typescript guide you to the available options.
(0,core_namespaceObject.config)({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
        provider: 'sqlite',
        url: 'file:./keystone.db'
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
        // For our starter, we check that someone has session data before letting them see the Admin UI.
        isAccessAllowed: (context)=>{
            var ref;
            return !!((ref = context.session) === null || ref === void 0 ? void 0 : ref.data);
        }
    },
    lists: lists,
    session: session
})));

;// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ function _keystone_api_build(req, res) {
    return res.status(500);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4922));
module.exports = __webpack_exports__;

})();