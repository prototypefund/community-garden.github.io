!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],_=0,d=[];_<i.length;_++)c=i[_],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={6:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"templates/"+({0:"vendors~__react_static_root__/src/containers/Markdown~__react_static_root__/src/containers/Post~__re~b073af23",1:"__react_static_root__/src/containers/Markdown",2:"__react_static_root__/src/containers/Post",3:"__react_static_root__/src/pages/404.tsx",4:"__react_static_root__/src/pages/blog.tsx",5:"__react_static_root__/src/pages/team.tsx",8:"vendors~__react_static_root__/src/pages/team.tsx"}[e]||e)+"."+{0:"b6b568d2",1:"29424016",2:"d2da2512",3:"74778308",4:"606ab2ed",5:"ba38c42a",8:"a8ddc453"}[e]+".js"}(e);var s=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([163,7,9]),n()}({149:function(e,t,n){"use strict";var r=n(77),a=n.n(r),o=n(78),c=n.n(o),i=n(39),s=n.n(i),l=n(80),u=n.n(l),_=n(109),d=n.n(_),m=n(79),p=n.n(m),f=n(40),h=n.n(f),g=n(48),v=n.n(g),b=n(110),y=n.n(b),E=n(0),x=n.n(E),k=n(103),P=n(65),w=n(18),j=function(){return x.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},M=(n(223),n(144)),O=n(246),S=n(250),L=n(249),T=n(64),A=n(248),C=n(247),B=n(251),R=n(252);n(228);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}Object(P.addPrefetchExcludes)(["dynamic"]);var z=Object(M.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),F=z.MediaContextProvider,H=z.Media,I=function(e){var t=e.mobile;return x.a.createElement(O.a,{text:!0},x.a.createElement(S.a,{as:"h1",content:"Community Garden App",inverted:!0,style:{fontSize:"3rem",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5rem":"2rem"}}),x.a.createElement(S.a,{as:"h2",content:"organize, manage, connect to local gardening initiatives",inverted:!0,style:{fontSize:t?"1.5rem":"1.7rem",fontWeight:"normal",marginTop:t?".5rem":"1.5rem"}}),x.a.createElement(L.a,{style:{display:"none"},primary:!0,size:"huge"},"Get the App",x.a.createElement(T.a,{name:"right arrow"})))},G=function(e){var t=e.to,n=e.children,r=y()(e,["to","children"]);return x.a.createElement(w.Match,{path:"".concat(t)},(function(e){return x.a.createElement(A.a.Item,v()({to:t,active:!!e.match},r),n)}))},D=function(e){u()(n,e);var t=N(n);function n(){var e;a()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),h()(s()(e),"state",{fixed:void 0}),h()(s()(e),"hideFixedMenu",(function(){return e.setState({fixed:!1})})),h()(s()(e),"showFixedMenu",(function(){return e.setState({fixed:!0})})),e}return c()(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return x.a.createElement(H,{greaterThan:"mobile"},x.a.createElement(C.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},x.a.createElement(B.a,{inverted:!0,textAlign:"center",style:{backgroundImage:'url("/jtilsch_06_2021_garden_q60.JPG")',backgroundSize:"cover",backgroundPosition:"top -100px center",padding:"1rem 0 3rem"},vertical:!0},x.a.createElement(A.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large"},x.a.createElement(O.a,null,x.a.createElement(G,{as:w.Link,to:"/"},"Project"),x.a.createElement(G,{as:w.Link,to:"/blog"},"Blog"),x.a.createElement(G,{as:w.Link,to:"/milestones"},"Milestones"),x.a.createElement(G,{as:w.Link,to:"/team"},"Team"))),x.a.createElement(I,null))),e,x.a.createElement(O.a,{text:!0},x.a.createElement("a",{href:"https://www.bmbf.de/en/index.html",target:"_blank"},x.a.createElement("img",{className:"ui medium image",src:"/BMBF-sponsered-by_en.jpg"}))))}}]),n}(E.Component),J=function(e){u()(n,e);var t=N(n);function n(){var e;a()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),h()(s()(e),"state",{sidebarOpened:void 0}),h()(s()(e),"handleSidebarHide",(function(){return e.setState({sidebarOpened:!1})})),h()(s()(e),"handleToggle",(function(){return e.setState({sidebarOpened:!0})})),e}return c()(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return x.a.createElement(H,{at:"mobile"},x.a.createElement(R.a.Pushable,null,x.a.createElement(R.a,{as:A.a,animation:"overlay",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:t},x.a.createElement(G,{as:w.Link,to:"/"},"Project"),x.a.createElement(G,{as:w.Link,to:"/blog"},"Blog"),x.a.createElement(G,{as:w.Link,to:"/milestones"},"Milestones"),x.a.createElement(G,{as:w.Link,to:"/team"},"Team")),x.a.createElement(R.a.Pusher,{dimmed:t},x.a.createElement(B.a,{inverted:!0,textAlign:"center",style:{backgroundImage:'url("/jtilsch_06_2021_garden_q60.JPG")',backgroundSize:"cover",backgroundPosition:"top center",padding:"1rem 0 2rem"},vertical:!0},x.a.createElement(O.a,null,x.a.createElement(A.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},x.a.createElement(A.a.Item,{onClick:this.handleToggle},x.a.createElement(T.a,{name:"sidebar"})),x.a.createElement(A.a.Item,{position:"right"}))),x.a.createElement(I,{mobile:!0})),e)))}}]),n}(E.Component),q=function(e){var t=e.children;return x.a.createElement(F,null,x.a.createElement(D,null,t),x.a.createElement(J,null,t))};t.a={HomepageLayout:function(){return x.a.createElement(P.Root,null,x.a.createElement(k.Helmet,null,x.a.createElement("title",null,"Pergola | Community Garden App")),x.a.createElement(q,null,x.a.createElement(B.a,{style:{padding:"4rem 0"},vertical:!0},x.a.createElement(O.a,{text:!0},x.a.createElement(x.a.Suspense,{fallback:x.a.createElement("em",null,"Loading...")},x.a.createElement(w.Router,null,x.a.createElement(j,{path:"dynamic"}),x.a.createElement(P.Routes,{path:"*"})))))))}}},163:function(e,t,n){n(164),n(208),e.exports=n(216)},165:function(e,t,n){"use strict";n.r(t);var r=n(140),a=[{location:"__react_static_root__/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=a},209:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return g}));var r=n(23),a=n.n(r),o=n(24),c=n.n(o),i=n(0),s=n.n(i),l=n(26),u=n.n(l);Object(l.setHasBabelPlugin)();var _={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=u()(c()({id:"__react_static_root__/src/pages/404.tsx",load:function(){return Promise.all([n.e(3).then(n.bind(null,151))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/404.tsx")},resolve:function(){return 151},chunkName:function(){return"__react_static_root__/src/pages/404.tsx"}}),_);d.template="__react_static_root__/src/pages/404.tsx";var m=u()(c()({id:"__react_static_root__/src/pages/blog.tsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.bind(null,152))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/blog.tsx")},resolve:function(){return 152},chunkName:function(){return"__react_static_root__/src/pages/blog.tsx"}}),_);m.template="__react_static_root__/src/pages/blog.tsx";var p=u()(c()({id:"__react_static_root__/src/pages/team.tsx",load:function(){return Promise.all([Promise.all([n.e(8),n.e(5)]).then(n.bind(null,153))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/team.tsx")},resolve:function(){return 153},chunkName:function(){return"__react_static_root__/src/pages/team.tsx"}}),_);p.template="__react_static_root__/src/pages/team.tsx";var f=u()(c()({id:"__react_static_root__/src/containers/Post",load:function(){return Promise.all([Promise.all([n.e(0),n.e(2)]).then(n.bind(null,150))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/containers/Post")},resolve:function(){return 150},chunkName:function(){return"__react_static_root__/src/containers/Post"}}),_);f.template="__react_static_root__/src/containers/Post";var h=u()(c()({id:"__react_static_root__/src/containers/Markdown",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1)]).then(n.bind(null,154))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/containers/Markdown")},resolve:function(){return 154},chunkName:function(){return"__react_static_root__/src/containers/Markdown"}}),_);h.template="__react_static_root__/src/containers/Markdown",t.default={"__react_static_root__/src/pages/404.tsx":d,"__react_static_root__/src/pages/blog.tsx":m,"__react_static_root__/src/pages/team.tsx":p,"__react_static_root__/src/containers/Post":f,"__react_static_root__/src/containers/Markdown":h};var g="__react_static_root__/src/pages/404.tsx"}.call(this,"/")},211:function(e,t,n){var r={".":67,"./":67,"./index":67,"./index.js":67};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=211},218:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),o=n(37),c=n.n(o),i=n(147),s=(n(222),n(149).a.HomepageLayout);if(t.default=s,"undefined"!=typeof document){var l=document.getElementById("root"),u=l.hasChildNodes()?c.a.hydrate:c.a.render,_=function(e){u(a.a.createElement(i.AppContainer,null,a.a.createElement(e,null)),l)};_(s),e&&e.hot&&e.hot.accept("./App",(function(){_(s)}))}}.call(this,n(108)(e))}});