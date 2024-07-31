"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4621,7343],{8996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453),o=n(3045);const r={},a="Logging",l={id:"db/logging",title:"Logging",description:"Platformatic DB uses a low overhead logger named Pino",source:"@site/versioned_docs/version-1.52.2/db/logging.md",sourceDirName:"db",slug:"/db/logging",permalink:"/docs/db/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/db/logging.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/db/plugin"},next:{title:"Programmatic API",permalink:"/docs/db/programmatic"}},d={},c=[{value:"Logger output level",id:"logger-output-level",level:2},{value:"Log formatting",id:"log-formatting",level:2},{value:"Query Logging",id:"query-logging",level:2},...o.toc];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB uses a low overhead logger named ",(0,s.jsx)(t.a,{href:"https://github.com/pinojs/pino",children:"Pino"}),"\nto output structured log messages, which are efficient and easy to parse both programmatically and visually."]}),"\n",(0,s.jsx)(t.h2,{id:"logger-output-level",children:"Logger output level"}),"\n",(0,s.jsxs)(t.p,{children:["The default logging level is set to ",(0,s.jsx)(t.code,{children:"info"}),". This means that all log messages from ",(0,s.jsx)(t.code,{children:"info"})," level and above (",(0,s.jsx)(t.code,{children:"warn"}),", ",(0,s.jsx)(t.code,{children:"error"}),", ",(0,s.jsx)(t.code,{children:"fatal"}),") will be displayed. To override the logger output, add a ",(0,s.jsx)(t.code,{children:"logger"})," object in the ",(0,s.jsx)(t.code,{children:"server"})," configuration settings:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  "server": {\n    "logger": {\n      "level": "error"\n    },\n   ...\n  },\n  ...\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For a full list of log levels and their meanings, see the ",(0,s.jsx)(t.a,{href:"https://github.com/pinojs/pino/blob/main/docs/api.md#level-string",children:"Pino documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"log-formatting",children:"Log formatting"}),"\n",(0,s.jsxs)(t.p,{children:["Logs are automatically pretty-printed by ",(0,s.jsx)(t.a,{href:"https://github.com/pinojs/pino-pretty",children:"pino-pretty"})," to improve readability when running Platformatic DB in a terminal environment where standard out ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)",children:"stdout"})," supports ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Tty_(Unix)",children:"TTY"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ npx platformatic db start\n[11:20:33.466] INFO (337606): server listening\n  url: "http://127.0.0.1:3042"\n'})}),"\n",(0,s.jsx)(t.p,{children:"In non-TTY environments, such as when logs are redirected to a file or a log management system, logs are formatted as newline-delimited JSON for easier parsing:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ npx platformatic db start | head\n{"level":30,"time":1665566628973,"pid":338365,"hostname":"darkav2","url":"http://127.0.0.1:3042","msg":"server listening"}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"query-logging",children:"Query Logging"}),"\n",(0,s.jsxs)(t.p,{children:["Enable detailed query logging by setting the log level to ",(0,s.jsx)(t.code,{children:"trace"}),". This is especially useful during development for monitoring the queries executed against the database:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'[12:09:13.810] INFO (platformatic-db/9695): incoming request\n[12:09:13.819] TRACE (platformatic-db/9695): query\n  query: {\n    "text": "SELECT \\"id\\", \\"title\\"\\n FROM \\"movies\\"\\nLIMIT ?"\n  }\n[12:09:13.820] INFO (platformatic-db/9695): request completed\n  responseTime: 10.350167274475098\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Note extensive logging, especially at the ",(0,s.jsx)(t.code,{children:"trace"})," level, can impact performance and should be used judiciously in production environments."]})}),"\n",(0,s.jsx)(o.default,{})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},3045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const o={},r=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/versioned_docs/version-1.52.2/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/getting-started/issues.md",tags:[],version:"1.52.2",frontMatter:{}},l={},d=[{value:"Issues",id:"issues",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"issues",children:"Issues"}),"\n",(0,s.jsxs)(t.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,s.jsx)(t.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,s.jsx)(t.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);