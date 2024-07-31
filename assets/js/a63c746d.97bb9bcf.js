"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[3735,5664],{3554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(4848),r=n(8453),i=n(1470),o=n(9365);const s={},l=void 0,c={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:",source:"@site/versioned_docs/version-1.52.2/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/getting-started/new-api-project-instructions.md",tags:[],version:"1.52.2",frontMatter:{}},d={},u=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:"}),"\n",(0,a.jsxs)(i.A,{groupId:"package-manager-create",children:[(0,a.jsx)(o.A,{value:"npm",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This interactive command-line tool will guide you through setting up a new Platformatic project. For this guide, please choose the following options:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"- What kind of project do you want to create?   => Application\n- Where would you like to create your project?  => quick-start\n- Which kind of project do you want to create?  => @platformatic/db\n- What is the name of the service?              => (generated-randomly), e.g. legal-soup\n- What is the connection string?                => sqlite://./db.sqlite\n- Do you want to create default migrations?     => Yes\n- Do you want to create another service?        => No\n- Do you want to use TypeScript?                => No\n- What port do you want to use?                 => 3042\n- Do you want to init the git repository?       => No\n"})}),"\n",(0,a.jsxs)(t.p,{children:["After completing the wizard, your Platformatic application will be ready in the ",(0,a.jsx)(t.code,{children:"quick-start"})," folder. This includes example migration files, plugin scripts, routes, and tests within your service directory."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If the wizard does not handle dependency installation, ensure to run ",(0,a.jsx)(t.code,{children:"npm/yarn/pnpm"})," install command manually:"]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(4848),r=n(8453),i=n(3554);const o={},s="Using Environment Variables with Platformatic",l={id:"guides/environment-variables",title:"Using Environment Variables with Platformatic",description:"Applications built with Platformatic loosely follows the twelve factor app methodology.",source:"@site/versioned_docs/version-1.52.2/guides/environment-variables.md",sourceDirName:"guides",slug:"/guides/environment-variables",permalink:"/docs/guides/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/guides/environment-variables.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"Learn",previous:{title:"Debug Platformatic DB",permalink:"/docs/guides/debug-platformatic-db"},next:{title:"Integrate Prisma with Platformatic DB",permalink:"/docs/guides/prisma"}},c={},d=[{value:"Environment Variables replacement",id:"environment-variables-replacement",level:2},{value:"dotenv support",id:"dotenv-support",level:3},{value:"Adding a custom environment variable to a project",id:"adding-a-custom-environment-variable-to-a-project",level:2},{value:"Create a Platformatic DB App",id:"create-a-platformatic-db-app",level:3},...i.toc,{value:"Modify <code>platformatic.db.json</code>",id:"modify-platformaticdbjson",level:3},{value:"Decorate the Fastify instance",id:"decorate-the-fastify-instance",level:3},{value:"Use it inside a route",id:"use-it-inside-a-route",level:3},{value:"Add an environemnt variable",id:"add-an-environemnt-variable",level:3},{value:"Run your application and test the new route",id:"run-your-application-and-test-the-new-route",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"using-environment-variables-with-platformatic",children:"Using Environment Variables with Platformatic"}),"\n",(0,a.jsxs)(t.p,{children:["Applications built with Platformatic loosely follows ",(0,a.jsx)(t.a,{href:"https://12factor.net/",children:"the twelve factor app methodology"}),".\nThis guide will show how to make your application ",(0,a.jsx)(t.a,{href:"https://12factor.net/config",children:"configurable"}),", while\nkeeping your deployment environments as close as possible."]}),"\n",(0,a.jsx)(t.h2,{id:"environment-variables-replacement",children:"Environment Variables replacement"}),"\n",(0,a.jsx)(t.p,{children:"In any Platformatic configuration file, you can always interpolate an environment variable inside a value:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  ...\n  "db": {\n    "connectionString": "{DATABASE_URL}"\n  }\n  ...\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The replacement is done via ",(0,a.jsx)(t.a,{href:"http://npm.im/pupa",children:(0,a.jsx)(t.code,{children:"pupa"})}),", after the JSON file is parsed."]}),"\n",(0,a.jsx)(t.p,{children:"All Platformatic configuration files support Environment Variables replacement, i.e.\nenv variables are supported in Platformatic Service, Platformatic DB, Platformatic Composer, Platformatic Runtime."}),"\n",(0,a.jsx)(t.h3,{id:"dotenv-support",children:"dotenv support"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"http://npm.im/dotenv",children:(0,a.jsx)(t.code,{children:"dotenv"})})," is built in inside Platformatic, allowing you to create an envfile with\nall your environment variables, that is loaded automatically by Platformatic at startup.\nIf a ",(0,a.jsx)(t.code,{children:".env"})," file exists it will automatically be loaded by Platformatic using\n",(0,a.jsx)(t.a,{href:"https://github.com/motdotla/dotenv",children:(0,a.jsx)(t.code,{children:"dotenv"})}),". For example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plaintext",metastring:'title=".env"',children:"DATABASE_URL=sqlite://./db.sqlite\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:".env"})," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."]}),"\n",(0,a.jsx)(t.p,{children:"Environment variables can also be set directly on the command line, for example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic start\n"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-a-custom-environment-variable-to-a-project",children:"Adding a custom environment variable to a project"}),"\n",(0,a.jsx)(t.h3,{id:"create-a-platformatic-db-app",children:"Create a Platformatic DB App"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(t.p,{children:"This same tutorial applies to all other Platformatic tools."}),"\n",(0,a.jsxs)(t.h3,{id:"modify-platformaticdbjson",children:["Modify ",(0,a.jsx)(t.code,{children:"platformatic.db.json"})]}),"\n",(0,a.jsxs)(t.p,{children:["Add a ",(0,a.jsx)(t.code,{children:"greeting"})," option inside your ",(0,a.jsx)(t.code,{children:"plugins"})," configuration:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [\n      {\n        "path": "./plugins",\n        "encapsulate": false,\n        "options": {\n          "greeting": "{PLT_GREETING}"\n        }\n      },\n      {\n        "path": "./routes"\n      }\n    ]\n  },\n  ...\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This new options will be available inside all the options passed to\nall plugins in the ",(0,a.jsx)(t.code,{children:"plugins/"})," folder."]}),"\n",(0,a.jsx)(t.h3,{id:"decorate-the-fastify-instance",children:"Decorate the Fastify instance"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new ",(0,a.jsx)(t.code,{children:"plugins/greeting.js"})," file, calling ",(0,a.jsx)(t.a,{href:"https://fastify.dev/docs/latest/Reference/Decorators/#decorators",children:"fastify.decorate()"}),"\nto expose some functionality to other plugins:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"/// <reference path=\"../global.d.ts\" />\n'use strict'\n/** @param {import('fastify').FastifyInstance} fastify */\nmodule.exports = async function (fastify, opts) {\n  fastify.decorate('sayHello', sayHello)\n\n  function sayHello (name) {\n    return `${opts.greeting} ${name}`\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-it-inside-a-route",children:"Use it inside a route"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new ",(0,a.jsx)(t.code,{children:"routes/hello.js"})," file that uses the newly added functionality, like so:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"/// <reference path=\"../global.d.ts\" />\n'use strict'\n/** @param {import('fastify').FastifyInstance} fastify */\nmodule.exports = async function (fastify, opts) {\n  fastify.get('/hello', {\n    schema: {\n      querystring: {\n        type: 'object',\n        properties: {\n          name: { type: 'string' }\n        }\n      },\n      required: ['name']\n    }\n  }, async (request, reply) => {\n    return fastify.sayHello(request.query.name)\n  })\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"add-an-environemnt-variable",children:"Add an environemnt variable"}),"\n",(0,a.jsxs)(t.p,{children:["Edit your ",(0,a.jsx)(t.code,{children:".env"})," file and add:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"PLT_GREETING=Hello\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Don't forget to add a default value to your ",(0,a.jsx)(t.code,{children:".env.sample"}),", as\nthe ",(0,a.jsx)(t.code,{children:".env"})," file is not committed to the repository."]}),"\n",(0,a.jsx)(t.h3,{id:"run-your-application-and-test-the-new-route",children:"Run your application and test the new route"}),"\n",(0,a.jsxs)(t.p,{children:["Run your application with ",(0,a.jsx)(t.code,{children:"npm start"}),", and then test the new route with:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl 'http://localhost:3042/hello?name=matteo'\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(8215),i=n(3104),o=n(6347),s=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(6540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);