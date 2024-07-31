"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[8035],{7541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(4848),s=t(8453);const i={},r="Mutations",l={id:"packages/sql-graphql/mutations",title:"Mutations",description:"When the GraphQL plugin is loaded, some mutations are automatically adding to",source:"@site/versioned_docs/version-1.52.2/packages/sql-graphql/mutations.md",sourceDirName:"packages/sql-graphql",slug:"/packages/sql-graphql/mutations",permalink:"/docs/packages/sql-graphql/mutations",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/packages/sql-graphql/mutations.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/packages/sql-graphql/queries"},next:{title:"Many To Many Relationship",permalink:"/docs/packages/sql-graphql/many-to-many"}},o={},p=[{value:"<code>save[ENTITY]</code>",id:"saveentity",level:2},{value:"Example",id:"example",level:3},{value:"<code>insert[ENTITY]</code>",id:"insertentity",level:2},{value:"Example",id:"example-1",level:3},{value:"<code>delete[ENTITIES]</code>",id:"deleteentities",level:2},{value:"Example",id:"example-2",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"mutations",children:"Mutations"}),"\n",(0,a.jsx)(n.p,{children:"When the GraphQL plugin is loaded, some mutations are automatically adding to\nthe GraphQL schema."}),"\n",(0,a.jsx)(n.h2,{id:"saveentity",children:(0,a.jsx)(n.code,{children:"save[ENTITY]"})}),"\n",(0,a.jsxs)(n.p,{children:["Saves a new entity to the database or updates an existing entity.\nThis actually behaves as an ",(0,a.jsx)(n.code,{children:"upsert"}),", allowing both behaviours depending on the presence of the primary key field."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { id: 3 title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '3', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"insertentity",children:(0,a.jsx)(n.code,{children:"insert[ENTITY]"})}),"\n",(0,a.jsx)(n.p,{children:"Inserts a new entity in the database."}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '4', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"deleteentities",children:(0,a.jsx)(n.code,{children:"delete[ENTITIES]"})}),"\n",(0,a.jsxs)(n.p,{children:["Deletes one or more entities from the database, based on the ",(0,a.jsx)(n.code,{children:"where"})," clause\npassed as an input to the mutation."]}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          deletePages(where: { id: { eq: \"3\" } }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { deletePages: [ { id: '3', title: 'Platformatic is cool!' } ] }\n  await app.close()\n}\n\nmain()\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);