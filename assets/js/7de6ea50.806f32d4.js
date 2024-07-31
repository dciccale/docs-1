"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[7226],{2562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(4848),s=t(8453);const r={},a="Monitoring with Prometheus and Grafana",i={id:"guides/monitoring",title:"Monitoring with Prometheus and Grafana",description:"Prometheus is open source system and alerting toolkit for monitoring and alerting. It's a time series database that collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.",source:"@site/docs/guides/monitoring.md",sourceDirName:"guides",slug:"/guides/monitoring",permalink:"/docs/next/guides/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/guides/monitoring.md",tags:[],version:"current",frontMatter:{},sidebar:"Learn",previous:{title:"Configure JWT with Auth0",permalink:"/docs/next/guides/jwt-auth0"},next:{title:"Debug Platformatic DB",permalink:"/docs/next/guides/debug-platformatic-db"}},c={},d=[{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"Grafana Configuration",id:"grafana-configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"monitoring-with-prometheus-and-grafana",children:"Monitoring with Prometheus and Grafana"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," is open source system and alerting toolkit for monitoring and alerting. It's a time series database that collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.\n",(0,o.jsx)(n.a,{href:"https://grafana.com/oss/grafana/",children:"Grafana"})," is an open source visualization and analytics software."]}),"\n",(0,o.jsx)(n.p,{children:"It's a pretty common solution to use Prometheus to collect and store monitoring data, and Grafana to visualize it."}),"\n",(0,o.jsx)(n.p,{children:"Platformatic can be configured to expose Prometheus metrics:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'...\n  "metrics": {\n    "port": 9091,\n    "auth": {\n      "username": "platformatic",\n      "password": "mysecret"\n    }\n  }\n...\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, we are exposing the metrics on port 9091 (defaults to ",(0,o.jsx)(n.code,{children:"9090"}),"), and we are using basic authentication to protect the endpoint.\nWe can also specify the IP address to bind to (defaults to ",(0,o.jsx)(n.code,{children:"0.0.0.0"}),").\nNote that the metrics port is not the default in this configuration. This is because if you want to test the integration running both Prometheus and Platformatic on the same host, Prometheus starts on ",(0,o.jsx)(n.code,{children:"9090"})," port too."]}),"\n",(0,o.jsxs)(n.p,{children:["Prometheus recommends using a port different from the main application port for serving the metrics. But, it is possible to serve metrics on the same port as the application by setting ",(0,o.jsx)(n.code,{children:'"server": "parent"'})," in the ",(0,o.jsx)(n.code,{children:"metrics"})," configuration. It is also possible to change the endpoint on which metrics are being served by passing the ",(0,o.jsx)(n.code,{children:"endpoint"})," property. The following example configuration illustrates this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'...\n  "metrics": {\n    "server": "parent",\n    "endpoint": "/platformatic-app-metrics",\n    "auth": {\n      "username": "platformatic",\n      "password": "mysecret"\n    }\n  }\n...\n'})}),"\n",(0,o.jsxs)(n.p,{children:["All the configuration settings are optional. To use the default settings, set ",(0,o.jsx)(n.code,{children:'"metrics": true'}),". See the ",(0,o.jsx)(n.a,{href:"/docs/next/db/configuration#metrics",children:"configuration reference"})," for more details.md#metrics"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"/reference/db/configuration.md#environment-variable-placeholders",children:"environment variable placeholders"})," in your Platformatic DB configuration file to avoid exposing credentials."]})}),"\n",(0,o.jsx)(n.h2,{id:"prometheus-configuration",children:"Prometheus Configuration"}),"\n",(0,o.jsx)(n.p,{children:"This is an example of a minimal Prometheus configuration to scrape the metrics from Platformatic:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"global:\n  scrape_interval: 15s\n  scrape_timeout: 10s\n  evaluation_interval: 1m\nscrape_configs:\n  - job_name: 'platformatic'\n    scrape_interval: 2s\n    metrics_path: /metrics\n    scheme: http\n    basic_auth:\n      username: platformatic\n      password: mysecret\n    static_configs:\n      - targets: ['192.168.69.195:9091']\n        labels:\n          group: 'platformatic'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We specify a ",(0,o.jsx)(n.code,{children:"target"})," configuring the IP address and the port where Platformatic is running, and we specify the ",(0,o.jsx)(n.code,{children:"username"})," and ",(0,o.jsx)(n.code,{children:"password"})," to use for basic authentication. The ",(0,o.jsx)(n.code,{children:"metrics"})," path is the one used by Platformatic. The ",(0,o.jsx)(n.code,{children:"ip"})," address is not a loopback address so this will work even with Prometheus running in docker on the same host (see below), please change it to your host ip."]}),"\n",(0,o.jsxs)(n.p,{children:["To test this configuration, we can run Prometheus locally using ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:(0,o.jsx)(n.code,{children:"docker"})})," and ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:(0,o.jsx)(n.code,{children:"docker-compose"})}),", so please be sure to have both correctly installed.\nSave the above configuration in a file named ",(0,o.jsx)(n.code,{children:"./prometheus/prometheus.yml"})," and create a ",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"version: \"3.7\"\n\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - prometheus_data:/prometheus\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml\n    command:\n      - '--config.file=/etc/prometheus/prometheus.yml'\n    ports:\n      - '9090:9090'\n\nvolumes:\n  prometheus_data: {}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then run ",(0,o.jsx)(n.code,{children:"docker-compose up -d"})," and open ",(0,o.jsx)(n.code,{children:"http://localhost:9090"})," in your browser. You should see the Prometheus dashboard, and you can also query the metrics, e.g. ",(0,o.jsx)(n.code,{children:'{group="platformatic"}'}),". See ",(0,o.jsx)(n.a,{href:"https://prometheus.io/docs/introduction/overview/",children:"Prometheus docs"})," for more information on querying and metrics."]}),"\n",(0,o.jsx)(n.h2,{id:"grafana-configuration",children:"Grafana Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Let's see how we can configure Grafana to chart some Platformatics metrics from Prometheus.\nChange the ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," to add a ",(0,o.jsx)(n.code,{children:"grafana"})," service:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"version: \"3.7\"\nservices:\n\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - prometheus_data:/prometheus\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml\n    command:\n      - '--config.file=/etc/prometheus/prometheus.yml'\n    ports:\n      - '9090:9090'\n\n  grafana:\n    image: grafana/grafana:latest\n    volumes:\n      - grafana_data:/var/lib/grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=pleasechangeme\n    depends_on:\n      - prometheus\n    ports:\n      - '3000:3000'\n\nvolumes:\n  prometheus_data: {}\n  grafana_data: {}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In Grafana, select ",(0,o.jsx)(n.code,{children:"Configuration"})," -> ",(0,o.jsx)(n.code,{children:"Data Sources"})," -> ",(0,o.jsx)(n.code,{children:"Add Data Source"}),", and select Prometheus.\nIn the URL field, specify the URL of the Prometheus server, e.g. ",(0,o.jsx)(n.code,{children:"http://prometheus:9090"})," (the name of the service in the ",(0,o.jsx)(n.code,{children:"docker-compose"})," file), then Save & Test."]}),"\n",(0,o.jsx)(n.p,{children:"Now we can create a dashboard and add panels to it. Select the Prometheus data source, and add queries. You should see the metrics exposed by Platformatic."}),"\n",(0,o.jsxs)(n.p,{children:["It's also possible to import pre-configured dashboards, like ",(0,o.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/12230-node-js-dashboard/",children:"this one"})," from Grafana.com."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);