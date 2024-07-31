"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[7865,6667],{8764:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(4848),s=i(8453),o=i(5221);const r={title:"Overview",label:"Authorization"},a="Introduction",c={id:"db/authorization/overview",title:"Overview",description:"Authorization in Platformatic DB is role-based access control (RBAC), which is important for managing user permissions. User authentication and the assignment of roles must be handled by an external authentication service, allowing for integration with existing identity providers.",source:"@site/docs/db/authorization/overview.md",sourceDirName:"db/authorization",slug:"/db/authorization/overview",permalink:"/docs/next/db/authorization/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/db/authorization/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",label:"Authorization"},sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/next/db/migrations"},next:{title:"Strategies",permalink:"/docs/next/db/authorization/strategies"}},d={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Bypass authorization in development",id:"bypass-authorization-in-development",level:2},...o.toc];function u(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(e.p,{children:["Authorization in Platformatic DB is ",(0,n.jsx)(e.strong,{children:"role-based access control"})," (RBAC), which is important for managing user permissions. User authentication and the assignment of roles must be handled by an external authentication service, allowing for integration with existing identity providers."]}),"\n",(0,n.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(e.p,{children:"Authorization strategies and rules are configured via a Platformatic DB configuration file. This configuration dictates how user roles interact with the database\u2019s resources:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Authorization Strategies"}),": Define how Platformatic DB recognizes and enforces user roles and permissions."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Rules"}),": Specific permissions tied to roles that dictate access to different database operations."]}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{type:"note",children:(0,n.jsxs)(e.p,{children:["To learn more about roles, permissions and rules, visit our guide on ",(0,n.jsx)(e.a,{href:"/docs/next/db/configuration#authorization",children:"Authorization Configuration"}),"."]})}),"\n",(0,n.jsx)(e.h2,{id:"bypass-authorization-in-development",children:"Bypass authorization in development"}),"\n",(0,n.jsxs)(e.p,{children:["To make testing and developing easier, it's possible to bypass authorization checks\nif an ",(0,n.jsx)(e.code,{children:"adminSecret"})," is set. See the ",(0,n.jsx)(e.a,{href:"/docs/next/db/authorization/strategies#http-headers-development-only",children:"HTTP headers (development only)"})," documentation."]}),"\n",(0,n.jsx)(o.default,{})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},5221:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(4848),s=i(8453);const o={},r=void 0,a={id:"getting-started/issues",title:"issues",description:"Issues",source:"@site/docs/getting-started/issues.md",sourceDirName:"getting-started",slug:"/getting-started/issues",permalink:"/docs/next/getting-started/issues",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/getting-started/issues.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Issues",id:"issues",level:2}];function l(t){const e={a:"a",h2:"h2",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"issues",children:"Issues"}),"\n",(0,n.jsxs)(e.p,{children:["If you run into a bug or have a suggestion for improvement, please raise an\n",(0,n.jsx)(e.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"issue on GitHub"})," or join our ",(0,n.jsx)(e.a,{href:"https://discord.gg/platformatic",children:"Discord feedback"})," channel."]})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);