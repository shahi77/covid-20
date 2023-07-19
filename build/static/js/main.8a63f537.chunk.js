(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,c){},57:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(19),a=c.n(i),r=(c(47),c(20)),l=c(83),d=c(82),o=c(1),j=function(){return Object(o.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{width:"100%",position:"fixed",zIndex:"1"},children:[Object(o.jsx)(l.a.Brand,{href:"#home",children:"Covid 19"}),Object(o.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(o.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(o.jsxs)(d.a,{className:"mr-auto",children:[Object(o.jsx)(r.b,{to:"/india",className:"nav-link",children:"India"}),Object(o.jsx)(r.b,{to:"/world",className:"nav-link",children:"World"})]})})]})},h=c(17),b=(c(57),c(80)),x=c(16),O=c.n(x),v=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){O.a.get("https://corona.lmao.ninja/v2/countries").then((function(e){s(e.data)}))}),[]),Object(o.jsx)("div",{className:"world",style:{paddingTop:"80px"},children:c.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"World"}),Object(o.jsx)("div",{className:"container mt-5 pt-5 scroll",style:{maxHeight:"600px",overflowY:" auto"},children:Object(o.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"No"}),Object(o.jsx)("th",{children:"Flags"}),Object(o.jsx)("th",{children:"Country"}),Object(o.jsx)("th",{children:"Total Case"}),Object(o.jsx)("th",{children:"Recovered"}),Object(o.jsx)("th",{children:"Death"})]})}),c.map((function(e,t){return Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t+1}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{src:e.countryInfo.flag,alt:"",style:{width:"30px"}})}),Object(o.jsx)("td",{children:e.country}),Object(o.jsx)("td",{children:e.cases}),Object(o.jsx)("td",{children:e.recovered}),Object(o.jsx)("td",{children:e.deaths})]})})}))]})})]}):Object(o.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h1",{children:"Loading.."})})})},u=(c(76),c(84)),m=c(85),f=c(81),g=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){O.a.get("https://api.covid19india.org/state_district_wise.json").then((function(e){s(e.data)}))}),[]);var i=Object.keys(c);return i.shift(),Object(o.jsx)("div",{className:"scroll",style:{width:"100%",height:"100vh",overflowY:"auto"},children:(null===i||void 0===i?void 0:i.length)>0?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row pt-5",children:Object(o.jsx)("div",{className:"col-12",children:i.map((function(e,t){var n=c[e].districtData,s=(Object.keys(n),0),i=0,a=0,r=0,l=[];for(var d in n){s+=n[d].active,i+=n[d].confirmed,r+=n[d].deceased,a+=n[d].recovered,n[d].district_name=[d],l.push(n[d])}return Object(o.jsx)(u.a,{defaultActiveKey:"1",children:Object(o.jsxs)(m.a,{className:"bg-light",children:[Object(o.jsx)(m.a.Header,{className:"bg-success",children:Object(o.jsxs)(u.a.Toggle,{as:f.a,variant:"",eventKey:"0",className:"bg-light",children:[e," ",Object(o.jsxs)("span",{className:"bg-info ",children:["[Total Confirmered:",i,"]"]})," ",Object(o.jsxs)("span",{className:"bg-warning ",children:["[Total Active:",s,"]"]})," ",Object(o.jsxs)("span",{className:"bg-light ",children:["[Total Recovery:",a,"]"]})," ",Object(o.jsxs)("span",{className:"bg-danger",children:["[Total Death:",r," ]"]})]})}),Object(o.jsx)(u.a.Collapse,{eventKey:"0",children:Object(o.jsx)(m.a.Body,{children:Object(o.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,className:"bg-warning",responsive:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"No"}),Object(o.jsx)("th",{children:"Districts"}),Object(o.jsx)("th",{children:"Confirmered"}),Object(o.jsx)("th",{children:"Active Case"}),Object(o.jsx)("th",{children:"Recovery Case"}),Object(o.jsx)("th",{children:"Death"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t+1}),Object(o.jsx)("td",{children:e.district_name}),Object(o.jsx)("td",{children:e.confirmed}),Object(o.jsx)("td",{children:e.active}),Object(o.jsx)("td",{children:e.recovered}),Object(o.jsx)("td",{children:e.deceased})]})}))})]})})})]})})}))})})})}):Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("h1",{children:"Loading..."})})})},p=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(e,t){O.a.get("https://corona.lmao.ninja/v2/countries/india").then((function(e){s(e.data)}))}),[]),Object(o.jsxs)("div",{style:{paddingTop:"80px"},children:[Object(o.jsx)("img",{src:"https://flagsapi.com/IN/flat/64.png",alt:"india"}),Object(o.jsx)("h3",{children:"India"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-4 pt-4",children:Object(o.jsx)(m.a,{style:{maxwidth:"5px"},children:Object(o.jsxs)(m.a.Body,{className:"bg-info",children:[Object(o.jsx)(m.a.Title,{children:"Total Case"}),Object(o.jsx)("h2",{children:c.cases})]})})}),Object(o.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-4 pt-4",children:Object(o.jsx)(m.a,{style:{maxwidth:"18rem"},children:Object(o.jsxs)(m.a.Body,{className:"bg-warning",children:[Object(o.jsx)(m.a.Title,{children:"Active Case"}),Object(o.jsx)("h2",{children:c.active})]})})}),Object(o.jsx)("div",{className:"col-sm-6 col-md-4 col-xl-4 pt-4",children:Object(o.jsx)(m.a,{style:{maxwidth:"18rem"},children:Object(o.jsxs)(m.a.Body,{className:"bg-success",children:[Object(o.jsx)(m.a.Title,{children:"Recovery Case"}),Object(o.jsx)("h2",{children:c.recovered})]})})}),Object(o.jsx)("div",{className:"col-sm-6 col-md-12 col-xl-12 pt-4",children:Object(o.jsx)(m.a,{style:{maxwidth:"18rem"},children:Object(o.jsxs)(m.a.Body,{className:"bg-danger",children:[Object(o.jsx)(m.a.Title,{children:"Death"}),Object(o.jsx)("h2",{children:c.deaths})]})})})]})}),Object(o.jsx)(g,{})]})},w=function(){return Object(o.jsx)("div",{className:"bg-dark mt-5",style:{width:"100%",height:"100px"}})},y=c(6);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(y.c,{children:[Object(o.jsx)(y.a,{exact:!0,path:"/",children:Object(o.jsx)(p,{})}),Object(o.jsx)(y.a,{path:"/india",children:Object(o.jsx)(p,{})}),Object(o.jsx)(v,{}),Object(o.jsx)(y.a,{path:"/world",children:Object(o.jsx)(v,{})})]}),Object(o.jsx)(w,{})]})})},k=(c(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.8a63f537.chunk.js.map