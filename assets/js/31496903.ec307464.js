"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4806],{2068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(4848),o=t(8453);const r={},a="Programmatic API",s={id:"client/programmatic",title:"Programmatic API",description:"It is possible to use the Platformatic client without the generator.",source:"@site/versioned_docs/version-1.52.2/client/programmatic.md",sourceDirName:"client",slug:"/client/programmatic",permalink:"/docs/client/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/client/programmatic.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Client",permalink:"/docs/client/overview"},next:{title:"Frontend client",permalink:"/docs/client/frontend"}},l={},c=[{value:"OpenAPI Client",id:"openapi-client",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Accessing Operation Mapping",id:"accessing-operation-mapping",level:3},{value:"Dynamic Headers",id:"dynamic-headers",level:2},{value:"Optional properties",id:"optional-properties",level:2},{value:"TypeScript Support",id:"typescript-support",level:2},{value:"GraphQL Client",id:"graphql-client",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to use the Platformatic client without the generator."}),"\n",(0,i.jsx)(n.h2,{id:"openapi-client",children:"OpenAPI Client"}),"\n",(0,i.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: `https://yourapi.com/documentation/json`, \n  // path: 'path/to/openapi.json',\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.yourOperationName({ foo: 'bar' })\n\nconsole.log(res)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"accessing-operation-mapping",children:"Accessing Operation Mapping"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have a ",(0,i.jsx)(n.code,{children:"client"})," generated from ",(0,i.jsx)(n.code,{children:"buildOpenAPIClient"}),", you can access a mapping between operation IDs and method/path by leveraging the ",(0,i.jsx)(n.code,{children:"Symbol.for('plt.operationIdMap')"})," property"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const client = await buildOpenAPIClient({\n  // ... your client settings\n})\n\nconst mapping = client[Symbol.for('plt.operationIdMap')]\n\nconsole.log(mapping)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  getOperationFoo: { path: '/operation-foo/', method: 'get' },\n  postOperationBar: { path: '/operation-bar/', method: 'post' },\n }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-headers",children:"Dynamic Headers"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass an asynchronous function to modify the headers for each request with the ",(0,i.jsx)(n.code,{children:"getHeaders"})," option. This function will be executed before each request. Note that ",(0,i.jsx)(n.code,{children:"headers"})," and ",(0,i.jsx)(n.code,{children:"getHeaders"})," can work together:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: `https://yourapi.com/documentation/json`, \n  headers: {\n    'foo': 'bar'\n  },\n  getHeaders(options) {\n    const { url, method, body, headers, telemetryHeaders } = options\n\n    // generate your dynamic headers\n\n    return {\n      myDynamicHeader: 'my-value',\n    }\n  }\n})\n\nconst res = await client.yourOperationName({ foo: 'bar' })\n\nconsole.log(res)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"optional-properties",children:"Optional properties"}),"\n",(0,i.jsxs)(n.p,{children:["You can also pass the following properties to ",(0,i.jsx)(n.code,{children:"buildOpenAPIClient"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { buildOpenAPIClient } from '@platformatic/client'\n\nconst client = await buildOpenAPIClient({\n  url: 'string', // the URL of the service to be called\n  path: 'string', // the path to the Open API schema\n  fullResponse: true, // require or not a full response object\n  fullRequest: true, // require or not a full request object\n  throwOnError: true, // if there is an error, the client will throw depending ton this option\n  headers: {}, // additional headers to be passed\n  bodyTimeout: 900000, // body timeout passed to the undici request method\n  headersTimeout: 900000, // headers timeout passed to the undici request method\n  validateResponse: true, // validate or not the response received against the expected schema\n  queryParser: (query) => `${query.toString()}[]` // override the default query parser logic\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typescript-support",children:"TypeScript Support"}),"\n",(0,i.jsx)(n.p,{children:"If you use Typescript, you can take advantage of the generated types file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { buildOpenAPIClient } from '@platformatic/client'\nimport Client from './client'\n//\n// interface Client {\n//   getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponse>>;\n//   createMovie(req: CreateMovieRequest): Promise<CreateMovieResponse>;\n//   ...\n// }\n//\n\nconst client: Client = await buildOpenAPIClient<Client>({\n  url: `https://yourapi.com/documentation/json`, \n  // path: 'path/to/openapi.json',\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.getMovies()\nconsole.log(res)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"graphql-client",children:"GraphQL Client"}),"\n",(0,i.jsxs)(n.p,{children:["To create a GraphQL client, use the ",(0,i.jsx)(n.code,{children:"buildGraphQLClient"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { buildGraphQLClient } from '@platformatic/client'\n\nconst client = await buildGraphQLClient({\n  url: `https://yourapi.com/graphql`,\n  headers: {\n    'foo': 'bar'\n  }\n})\n\nconst res = await client.graphql({\n  query: `\n    mutation createMovie($title: String!) {\n      saveMovie(input: {title: $title}) {\n        id\n        title\n      }\n    }\n  `,\n  variables: {\n    title: 'The Matrix'\n  }\n})\n\nconsole.log(res)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);