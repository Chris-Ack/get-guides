(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},a={1:0},i=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{2:"338148d9",3:"d83a4557",4:"efd95bd9",5:"bb9a7074"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"56792ff6",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("ddb0"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),r=n("1f91"),a=n("42d2"),i=n("b05d");o["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"]});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},l=[],c={name:"App",mounted(){}},u=c,d=n("2877"),h=Object(d["a"])(u,s,l,!1,null,null,null),f=h.exports,g=n("2f62"),p=n("bc3a"),m=n.n(p);function v(e){return t=>{t.$socket=e,e.on("message",(e=>t.dispatch("receiveMessage",e))),e.on("authSuccess",(e=>{console.log(e),t.commit("setUserInfo",e)}))}}var b=n("8e27"),w=n.n(b);const y=w()("http://localhost:5000",{transportOptions:{polling:{auth:123}}});y.on("connect",(()=>{console.log("connected now"),y.emit()})),y.on("disconnect",(()=>{console.log("disconnected now")})),y.on("changeView",(()=>{console.log("store access here"),(void 0).$store.state.currentView="HowTo"}));var S=y;o["a"].use(g["a"]);const P=v(S);var G=new g["a"].Store({state:{currentView:"SearchResults",userType:"",guideID:"60b47b595c7aa6b557654a30",singleGuide:{},filteredGuides:[],somethingStupid:0},plugins:[P],mutations:{changeView(e,t){this.state.currentView=t},setUserType(e,t){this.state.userType="traveller"},setFilteredGuides(e,t){this.state.filteredGuides=t,console.log("Setter's"),console.log(this.state.filteredGuides)},setSingleGuide(e,t){this.state.singleGuide.id=t._id,this.state.singleGuide.name=t.name,this.state.singleGuide.avatar=t.avatar,this.state.singleGuide.languages=t.languages,this.state.singleGuide.locations=t.locations,this.state.singleGuide.weekdays=t.weekdays,this.state.singleGuide.bio=t.bio,this.state.singleGuide.gallery=t.gallery,this.state.singleGuide.rate=t.rate,this.state.singleGuide.unavailableDates=t.unavailable_dates,console.log("setter function"),this.state.somethingStupid+=1,console.log("forced render",Date.now())}},actions:{login(e){this.$router.push("/login")},async receiveMessage(e,t){console.log("this was received:",t)},async search(e,t){e.commit("setFilteredGuides")},async getFilteredGuides(e,t){console.log("Payload is: ",t);const n=t.location,o=t.language,r=t.date,a=t.meme,i=(await m.a.get(`http://localhost:5000/api/guides/search/${n}/${o}/${r}/${a}`)).data;console.log(i),e.commit("setFilteredGuides",i)},async getSingleGuide(e){let t=this.state.guideID;try{const n=(await m.a.get(`http://localhost:5000/api/guides/${t}`)).data;console.log(n),e.commit("setSingleGuide",n)}catch(n){console.log(n)}},async dispatchMessage(e,t){S.emit("Message",t),console.log("I SENT IT YOU PRICK")}}}),O=n("8c4f");const j=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/authorized",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"bd8c"))},{path:"/login",name:"login",beforeEnter(){location.href="http://localhost:5000/login"}},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var k=j;o["a"].use(O["a"]);var T=function(){const e=new O["a"]({scrollBehavior:()=>({x:0,y:0}),routes:k,mode:"hash",base:""});return e},_=async function(){const e="function"===typeof G?await G({Vue:o["a"]}):G,t="function"===typeof T?await T({Vue:o["a"],store:e}):T;e.$router=t;const n={router:t,store:e,render:e=>e(f),el:"#q-app"};return{app:n,store:e,router:t}},E=n("9483");Object(E["a"])("service-worker.js",{registrationOptions:{scope:"./"},ready(){console.log("Service worker is active.")},registered(){console.log("Service worker has been registered in the file where it shouldnt.")},cached(){},updatefound(){},updated(){},offline(){},error(){}}),o["a"].prototype.$axios=m.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const x="";async function $(){const{app:e,store:t,router:n}=await _();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0];for(let c=0;!1===r&&c<s.length;c++)if("function"===typeof s[c])try{await s[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:x})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&new o["a"](e)}$()},"31cd":function(e,t,n){}});