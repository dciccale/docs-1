"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[1164,6667],{2034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(4848),s=n(8453),o=n(5221);const r={},a="Plugin",l={id:"db/plugin",title:"Plugin",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/docs/db/plugin.md",sourceDirName:"db",slug:"/db/plugin",permalink:"/docs/next/db/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/db/plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rules",permalink:"/docs/next/db/authorization/rules"},next:{title:"Logging",permalink:"/docs/next/db/logging"}},c={},d=[{value:"Context Integration in Plugin Operations",id:"context-integration-in-plugin-operations",level:2},{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2},{value:"TypeScript and autocompletion",id:"typescript-and-autocompletion",level:2},{value:"Plugin definition with TypeScript",id:"plugin-definition-with-typescript",level:3},...o.toc];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"plugin",children:"Plugin"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,i.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,i.jsx)(t.p,{children:"The config file will specify where the plugin file is located as the example below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The paths are relative to the config file path."}),"\n",(0,i.jsx)(t.p,{children:"Once the config file is set up, you can write your plugin to extend Platformatic DB API or write your custom business logic."}),"\n",(0,i.jsxs)(t.p,{children:["You should export an async ",(0,i.jsx)(t.code,{children:"function"})," which receives a parameters:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"app"})," (",(0,i.jsx)(t.code,{children:"FastifyInstance"}),") the main Fastify ",(0,i.jsx)(t.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"})," running Platformatic DB."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"opts"})," all the options specified in the config file after ",(0,i.jsx)(t.code,{children:"path"}),"."]}),"\n",(0,i.jsx)(t.li,{}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can always access Platformatic ",(0,i.jsx)(t.a,{href:"/docs/next/packages/sql-mapper/overview",children:"data mapper"})," through ",(0,i.jsx)(t.code,{children:"app.platformatic"})," property."]}),"\n",(0,i.jsx)(t.h2,{id:"context-integration-in-plugin-operations",children:"Context Integration in Plugin Operations"}),"\n",(0,i.jsxs)(t.p,{children:["To ensure robust authorization and data management, it's important to pass the ",(0,i.jsx)(t.code,{children:"context"})," object to the ",(0,i.jsx)(t.code,{children:"entity mapper"}),". This ",(0,i.jsx)(t.code,{children:"context"})," includes user-specific data, permissions, and other parameters that influence how data operations are executed."]}),"\n",(0,i.jsx)(t.p,{children:"Here's how you can integrate context into your plugin:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"app.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n\n  await app.platformatic.entities.movies.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Check some ",(0,i.jsx)(t.a,{href:"/guides/add-custom-functionality/introduction.md",children:"examples"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,i.jsxs)(t.p,{children:["Plugin files are monitored by the ",(0,i.jsx)(t.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,i.jsx)(t.code,{children:"fs.watch"})})," function."]}),"\n",(0,i.jsx)(t.p,{children:"You don't need to reload Platformatic DB server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,i.jsx)(t.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"here"}),")."]})}),"\n",(0,i.jsx)(t.h2,{id:"directories",children:"Directories"}),"\n",(0,i.jsxs)(t.p,{children:["The path can also be a directory. In that case, the directory will be loaded with ",(0,i.jsx)(t.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,i.jsx)(t.code,{children:"@fastify/autoload"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Consider the following directory structure:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By default the folder will be added as a prefix to all the routes defined within them.\nSee the ",(0,i.jsx)(t.a,{href:"/docs/next/runtime/configuration#autoload",children:"autoload documentation"})," for all the options to customize this behavior."]}),"\n",(0,i.jsx)(t.h2,{id:"multiple-plugins",children:"Multiple plugins"}),"\n",(0,i.jsx)(t.p,{children:"Multiple plugins can be loaded in parallel by specifying an array:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"typescript-and-autocompletion",children:"TypeScript and autocompletion"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to access any of the types provided by Platformatic DB, generate them using the ",(0,i.jsx)(t.code,{children:"platformatic db types"})," command.\nThis will create a ",(0,i.jsx)(t.code,{children:"global.d.ts"})," file that you can now import everywhere, like so:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'/// <references <types="./global.d.ts" />\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Remember to adjust the path to ",(0,i.jsx)(t.code,{children:"global.d.ts"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"plugin-definition-with-typescript",children:"Plugin definition with TypeScript"}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of writing a plugin in TypeScript:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"/// <reference types=\"./global.d.ts\" />\nimport { FastifyInstance, FastifyPluginOptions } from 'fastify'\n\nexport default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that you need to add the ",(0,i.jsx)(t.code,{children:'"plugins": { "typescript": true }'})," configuration to your ",(0,i.jsx)(t.code,{children:"platformatic.json"}),"."]}),"\n",(0,i.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={},r=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/docs/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/next/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/getting-started/issues.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Issues",id:"issues",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,i.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,i.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);