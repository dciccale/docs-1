"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[8627],{2025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const r={},a="Extend REST API",o={id:"guides/add-custom-functionality/extend-rest",title:"Extend REST API",description:"We will follow same examples implemented in GraphQL examples: a sum function and an API to get pages by title.",source:"@site/versioned_docs/version-1.52.2/guides/add-custom-functionality/extend-rest.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/extend-rest",permalink:"/docs/guides/add-custom-functionality/extend-rest",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/guides/add-custom-functionality/extend-rest.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"Learn",previous:{title:"Extend GraphQL Schema",permalink:"/docs/guides/add-custom-functionality/extend-graphql"},next:{title:"Securing Platformatic DB with Authorization",permalink:"/docs/guides/securing-platformatic-db"}},l={},c=[{value:"Sum Function",id:"sum-function",level:2},{value:"Extend Entities API",id:"extend-entities-api",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"extend-rest-api",children:"Extend REST API"}),"\n",(0,s.jsxs)(n.p,{children:["We will follow same examples implemented in ",(0,s.jsx)(n.a,{href:"./extend-graphql",children:"GraphQL examples"}),": a sum function and an API to get pages by title."]}),"\n",(0,s.jsx)(n.h2,{id:"sum-function",children:"Sum Function"}),"\n",(0,s.jsxs)(n.p,{children:["Copy and paste this code into ",(0,s.jsx)(n.code,{children:"./sample-plugin.js"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\nmodule.exports = async(app, opts) => {\n  app.post('/sum', async(req, reply) => {\n    const { x, y } = req.body\n    return { sum: (x + y)}\n  })\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You don't need to reload the server, since it will watch this file and hot-reload itself."}),"\n",(0,s.jsxs)(n.p,{children:["Let's make a ",(0,s.jsx)(n.code,{children:"POST /sum"})," request to the server with the following body"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "x": 1,\n  "y": 2\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"curl"})," command to run this query"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ curl --location --request POST 'http://localhost:3042/sum' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"x\": 1,\n    \"y\": 2\n}'\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will get this output, with the sum."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "sum": 3\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"extend-entities-api",children:"Extend Entities API"}),"\n",(0,s.jsxs)(n.p,{children:["Let's implement a ",(0,s.jsx)(n.code,{children:"/page-by-title"})," endpoint, using Entities API"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\nmodule.exports = async(app, opts) => {\n  app.get('/page-by-title', async(req, reply) => {\n    const { title } = req.query\n    const res = await app.platformatic.entities.page.find({\n      where: {\n        title: {\n          eq: title\n        }\n      }\n    })\n    if (res) {\n      return res[0]\n    }\n    return null\n  })\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We will make a ",(0,s.jsx)(n.code,{children:"GET /page-by-title?title=First%20Page"})," request, and we expect a single page as output."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"curl"})," command to run this query"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ curl --location --request GET 'http://localhost:3042/page-by-title?title=First Page'\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will get an output similar to this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": "1",\n    "title": "First Page",\n    "body": "This is the first sample page"\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);