"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[9562],{5123:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(4848),i=s(8453);const o={},c="Subscription",r={id:"packages/sql-graphql/subscriptions",title:"Subscription",description:"When the GraphQL plugin is loaded, some subscriptions are automatically adding to",source:"@site/docs/packages/sql-graphql/subscriptions.md",sourceDirName:"packages/sql-graphql",slug:"/packages/sql-graphql/subscriptions",permalink:"/docs/next/packages/sql-graphql/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/packages/sql-graphql/subscriptions.md",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"<code>[ENTITY]Saved</code>",id:"entitysaved",level:2},{value:"<code>[ENTITY]Deleted</code>",id:"entitydeleted",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"subscription",children:"Subscription"}),"\n",(0,n.jsxs)(t.p,{children:["When the GraphQL plugin is loaded, some subscriptions are automatically adding to\nthe GraphQL schema if the ",(0,n.jsx)(t.code,{children:"@platformatic/sql-events"})," plugin has been previously registered."]}),"\n",(0,n.jsxs)(t.p,{children:["It's possible to avoid creating the subscriptions for a given entity by adding the ",(0,n.jsx)(t.code,{children:"subscriptionIgnore"})," config,\nlike so: ",(0,n.jsx)(t.code,{children:"subscriptionIgnore: ['page']"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"entitysaved",children:(0,n.jsx)(t.code,{children:"[ENTITY]Saved"})}),"\n",(0,n.jsxs)(t.p,{children:["Published whenever an entity is saved, e.g. when the mutation ",(0,n.jsx)(t.code,{children:"insert[ENTITY]"})," or ",(0,n.jsx)(t.code,{children:"save[ENTITY]"})," are called."]}),"\n",(0,n.jsx)(t.h2,{id:"entitydeleted",children:(0,n.jsx)(t.code,{children:"[ENTITY]Deleted"})}),"\n",(0,n.jsxs)(t.p,{children:["Published whenever an entity is deleted, e.g. when the mutation ",(0,n.jsx)(t.code,{children:"delete[ENTITY]"})," is called.."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);