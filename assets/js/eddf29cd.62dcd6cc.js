"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[7588,5664],{3554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(4848),a=n(8453),i=n(1470),s=n(9365);const o={},l=void 0,c={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:",source:"@site/versioned_docs/version-1.52.2/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/getting-started/new-api-project-instructions.md",tags:[],version:"1.52.2",frontMatter:{}},d={},u=[];function h(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"To start the Platformatic creator wizard, run the appropriate command for your package manager in your terminal:"}),"\n",(0,r.jsxs)(i.A,{groupId:"package-manager-create",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"This interactive command-line tool will guide you through setting up a new Platformatic project. For this guide, please choose the following options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"- What kind of project do you want to create?   => Application\n- Where would you like to create your project?  => quick-start\n- Which kind of project do you want to create?  => @platformatic/db\n- What is the name of the service?              => (generated-randomly), e.g. legal-soup\n- What is the connection string?                => sqlite://./db.sqlite\n- Do you want to create default migrations?     => Yes\n- Do you want to create another service?        => No\n- Do you want to use TypeScript?                => No\n- What port do you want to use?                 => 3042\n- Do you want to init the git repository?       => No\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After completing the wizard, your Platformatic application will be ready in the ",(0,r.jsx)(t.code,{children:"quick-start"})," folder. This includes example migration files, plugin scripts, routes, and tests within your service directory."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If the wizard does not handle dependency installation, ensure to run ",(0,r.jsx)(t.code,{children:"npm/yarn/pnpm"})," install command manually:"]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(4848),a=n(8453),i=n(1470),s=n(9365),o=n(3554);const l={},c="Quick Start Guide",d={id:"getting-started/quick-start-guide",title:"Quick Start Guide",description:"Welcome to your first steps with Platformatic DB. This guide will help you set up and run your first API using Platformatic DB with SQLite. By the end of this guide, you'll have a fully functional API ready to use.",source:"@site/versioned_docs/version-1.52.2/getting-started/quick-start-guide.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start-guide",permalink:"/docs/getting-started/quick-start-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.52.2/getting-started/quick-start-guide.md",tags:[],version:"1.52.2",frontMatter:{},sidebar:"Learn",previous:{title:"Overview",permalink:"/docs/learn/overview"},next:{title:"Build a Todo API",permalink:"/docs/learn/beginner/crud-application"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Automatic Setup with Platformatic CLI",id:"automatic-setup-with-platformatic-cli",level:2},...o.toc,{value:"Start Your API Server",id:"start-your-api-server",level:3},{value:"Check The Database Schema",id:"check-the-database-schema",level:3},{value:"Check Your API configuration",id:"check-your-api-configuration",level:3},{value:"Manual setup",id:"manual-setup",level:2},{value:"Initialize Your Project",id:"initialize-your-project",level:3},{value:"Configuration Your Database",id:"configuration-your-database",level:3},{value:"Configure Your API",id:"configure-your-api",level:3},{value:"Start Your API Server",id:"start-your-api-server-1",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Interacting with the REST API Interface",id:"interacting-with-the-rest-api-interface",level:3},{value:"Create a new movie",id:"create-a-new-movie",level:4},{value:"Get All Movies",id:"get-all-movies",level:4},{value:"Exploring API Documentation with Swagger",id:"exploring-api-documentation-with-swagger",level:4},{value:"Interacting with the GraphQL Interface",id:"interacting-with-the-graphql-interface",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quick-start-guide",children:"Quick Start Guide"}),"\n",(0,r.jsxs)(t.p,{children:["Welcome to your first steps with ",(0,r.jsx)(t.a,{href:"/docs/reference/db/introduction.md",children:"Platformatic DB"}),". This guide will help you set up and run your first API using Platformatic DB with ",(0,r.jsx)(t.a,{href:"https://www.sqlite.org/",children:"SQLite"}),". By the end of this guide, you'll have a fully functional API ready to use."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["While this guide uses ",(0,r.jsx)(t.a,{href:"https://www.sqlite.org/",children:"SQLite"}),", Platformatic DB also supports ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),", ",(0,r.jsx)(t.a,{href:"https://www.mysql.com/",children:"MySQL"}),", and ",(0,r.jsx)(t.a,{href:"https://mariadb.org/",children:"MariaDB"}),". For more details on database compatibility, see the ",(0,r.jsx)(t.a,{href:"/docs/reference/db/introduction.md",children:"Platformatic DB documentation"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before starting, ensure you have the following installed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," (v18.8.0 or higher)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://docs.npmjs.com/cli/",children:"npm"})," (v7 or higher)"]}),"\n",(0,r.jsxs)(t.li,{children:["A code editor, (e.g., ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"automatic-setup-with-platformatic-cli",children:"Automatic Setup with Platformatic CLI"}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(t.h3,{id:"start-your-api-server",children:"Start Your API Server"}),"\n",(0,r.jsx)(t.p,{children:"Run the following command in your project directory to start your API server:"}),"\n",(0,r.jsxs)(i.A,{groupId:"package-manager",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm start\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn run start\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm start\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Your API server is now live! \ud83c\udf1f It will automatically serve REST and GraphQL interfaces for your SQL database."}),"\n",(0,r.jsx)(t.h3,{id:"check-the-database-schema",children:"Check The Database Schema"}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.code,{children:"migrations"})," directory within the ",(0,r.jsx)(t.code,{children:"services"})," folder of your project directory. This folder contains your database migration files:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"001.do.sql"}),": contains the SQL statements for creating database objects."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"001.undo.sql"}),": contains the SQL statements to remove database objects."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"check-your-api-configuration",children:"Check Your API configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Examine the ",(0,r.jsx)(t.code,{children:"platformatic.json"})," file in the services folder and the ",(0,r.jsx)(t.code,{children:".env"})," file in the root of your project directory to confirm the API configuration:"]}),"\n",(0,r.jsx)(t.p,{children:"This generated configuration tells Platformatic to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run an API server on ",(0,r.jsx)(t.code,{children:"http://0.0.0.0:3042/"})]}),"\n",(0,r.jsxs)(t.li,{children:["Connect to an SQLite database stored in a file named ",(0,r.jsx)(t.code,{children:"db.sqlite"})]}),"\n",(0,r.jsxs)(t.li,{children:["Look for database migration files in the ",(0,r.jsx)(t.code,{children:"migrations"})," directory"]}),"\n",(0,r.jsx)(t.li,{children:"Auto-apply the migrations"}),"\n",(0,r.jsxs)(t.li,{children:["Load the plugin file named ",(0,r.jsx)(t.code,{children:"plugin.js"})," and automatically generate types"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can learn more about configuration options in the ",(0,r.jsx)(t.a,{href:"/docs/db/configuration",children:"Configuration reference"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"manual-setup",children:"Manual setup"}),"\n",(0,r.jsx)(t.p,{children:"Follow the steps below if you prefer setting up manually or need custom configurations:"}),"\n",(0,r.jsx)(t.h3,{id:"initialize-your-project",children:"Initialize Your Project"}),"\n",(0,r.jsx)(t.p,{children:"Create and navigate into your project directory:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir quick-start\ncd quick-start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Initialize your project and install ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/platformatic",children:"Platformatic"})," as a dependency using your preferred package manager:"]}),"\n",(0,r.jsxs)(i.A,{groupId:"package-manager",children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init --yes\n\nnpm install platformatic\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn init --yes\n\nyarn add platformatic\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm init\n\npnpm add platformatic\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"configuration-your-database",children:"Configuration Your Database"}),"\n",(0,r.jsxs)(t.p,{children:["In your project directory (",(0,r.jsx)(t.code,{children:"quick-start"}),"), create a file for your sqlite database and also, a ",(0,r.jsx)(t.code,{children:"migrations"})," directory to\nstore your database migration files:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"touch db.sqlite\nmkdir migrations\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Create a new migration file named ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"001.do.sql"})})," in the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"migrations"})}),"\ndirectory. Copy and paste the SQL query below into the migration file to create a new database table\nnamed ",(0,r.jsx)(t.code,{children:"movies"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",metastring:'title="migrations/001.do.sql"',children:"CREATE TABLE movies (\n  id INTEGER PRIMARY KEY,\n  title VARCHAR(255) NOT NULL\n);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can check syntax for SQL queries on the ",(0,r.jsx)(t.a,{href:"https://database.guide/sql-reference-for-beginners/",children:"Database Guide SQL Reference"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"configure-your-api",children:"Configure Your API"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new Platformatic configuration file named ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"platformatic.json"})})," in your project directory with the following configuration to set up your server and database:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.json"',children:'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": "3042"\n  },\n  "db": {\n    "connectionString": "sqlite://./db.sqlite"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "autoApply": "true"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This configuration tells Platformatic to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run an API server on ",(0,r.jsx)(t.code,{children:"http://127.0.0.1:3042/"})]}),"\n",(0,r.jsxs)(t.li,{children:["Connect to an SQLite database stored in a file named ",(0,r.jsx)(t.code,{children:"db.sqlite"})]}),"\n",(0,r.jsxs)(t.li,{children:["Look for, and apply the database migrations specified in the ",(0,r.jsx)(t.code,{children:"migrations"})," directory"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"start-your-api-server-1",children:"Start Your API Server"}),"\n",(0,r.jsx)(t.p,{children:"In your project directory, use the Platformatic CLI to start your API server:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx platformatic db start\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Automatically map your SQL database to REST and GraphQL API interfaces."}),"\n",(0,r.jsx)(t.li,{children:"Start the Platformatic API server."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Your Platformatic API is now up and running! \ud83c\udf1f"}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(t.p,{children:"Now that your API is up and running, it's time to interact with it using the REST and GraphQL interfaces. Below, you'll find simple examples of how to use these interfaces effectively."}),"\n",(0,r.jsx)(t.h3,{id:"interacting-with-the-rest-api-interface",children:"Interacting with the REST API Interface"}),"\n",(0,r.jsxs)(t.p,{children:["The REST API allows you to perform standard HTTP requests. Below are examples of how you can create a new movie and retrieve all movies from your database using ",(0,r.jsx)(t.code,{children:"cURL"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"create-a-new-movie",children:"Create a new movie"}),"\n",(0,r.jsxs)(t.p,{children:["To add a new movie to your database, use this ",(0,r.jsx)(t.code,{children:"cURL"})," command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n  -d "{ \\"title\\": \\"Hello Platformatic DB\\" }" \\\n\thttp://localhost:3042/movies\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should receive a response similar to this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"id":1,"title":"Hello Platformatic DB"}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This means that the movie was successfully added to your database"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Learn more about your API's GraphQL interface in the\n",(0,r.jsx)(t.a,{href:"/docs/packages/sql-graphql/overview",children:"GraphQL API reference"}),"."]})}),"\n",(0,r.jsx)(t.h4,{id:"get-all-movies",children:"Get All Movies"}),"\n",(0,r.jsx)(t.p,{children:"To fetch all movies stored in your database, use the following command"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl http://localhost:3042/movies\n"})}),"\n",(0,r.jsx)(t.p,{children:"The response will be an array containing all the movies:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[{"id":1,"title":"Hello Platformatic DB"}]\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For a comprehensive list of available routes and operations, refer to the ",(0,r.jsx)(t.a,{href:"/docs/reference/sql-openapi/introduction.md",children:"REST API reference"})]})}),"\n",(0,r.jsx)(t.h4,{id:"exploring-api-documentation-with-swagger",children:"Exploring API Documentation with Swagger"}),"\n",(0,r.jsx)(t.p,{children:"You can access the Swagger UI to explore detailed documentation for your REST API at:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://localhost:3042/documentation",children:"http://localhost:3042/documentation"})}),"\n",(0,r.jsx)(t.h3,{id:"interacting-with-the-graphql-interface",children:"Interacting with the GraphQL Interface"}),"\n",(0,r.jsxs)(t.p,{children:["Open ",(0,r.jsx)(t.a,{href:"http://localhost:3042/graphiql",children:"http://localhost:3042/graphiql"})," in your\nweb browser to explore the GraphQL interface of your API."]}),"\n",(0,r.jsx)(t.p,{children:"Run the query below to retrieve all movies:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"query {\n  movies {\n    id\n    title\n  }\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For more advanced guides, refer to the ",(0,r.jsx)(t.a,{href:"/docs/learn/overview",children:"Platformatic learning hub"}),"."]})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var i=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(8215),i=n(3104),s=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),j=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);