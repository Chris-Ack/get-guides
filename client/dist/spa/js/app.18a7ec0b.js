(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},s={1:0},n={1:0},i=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{2:"ccd25aae",3:"f4d093df",4:"efd95bd9"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={2:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var o="css/"+({}[e]||e)+"."+{2:"3bd35818",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",n=l.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===o||u===n)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var o=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete s[e],g.parentNode.removeChild(g),a(i)},g.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(g)})).then((function(){s[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,a){o=n[e]=[t,a]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,a[1](d)}n[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var g=u;i.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"2f39":function(e,t,a){"use strict";a.r(t);a("5319"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var o=a("2b0e"),s=a("1f91"),n=a("42d2"),i=a("b05d");o["a"].use(i["a"],{config:{},lang:s["a"],iconSet:n["a"]});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},l=[],c={name:"App",mounted(){}},u=c,d=a("2877"),g=Object(d["a"])(u,r,l,!1,null,null,null),h=g.exports,p=(a("ddb0"),a("2f62")),m=a("bc3a"),f=a.n(m);function v(e){return t=>{t.$socket=e,e.on("authResult",(a=>{e.auth.token=a.id,t.commit("setUserId",a.id),"Search"===a.path?t.commit("setUserType","traveller"):"SelectedProfile"===a.path&&t.commit("setUserType","guide"),t.commit("changeView",a.path),t.commit("loggedIn",a.loggedIn),"Registration"===a.path&&(t.commit("setUserName",a.name),t.commit("setUserEmail",a.email),t.commit("setUsergid",a.gid))})),e.on("changeView",(()=>{console.log("store access here"),t.state.currentView="HowTo"})),e.on("relayMessage",(e=>{console.log("Message Arrived"),t.commit("appendMessage",e)})),e.on("typingStatus",(e=>{console.log("Typing Status Arrived"),t.commit("settypingStatus",e)})),e.on("chatUpdate",(e=>t.commit("chatUpdate",e)))}}var y=a("6c23");o["a"].use(p["a"]);const w=v(y["a"]);var b=new p["a"].Store({state:{currentView:"Login",userType:"guide",id:"",name:"",email:"",gid:"",sendTo:"",travellerPackage:{},guidePackage:{},currentChat:"",currentChatLog:[],typingStatus:!1,chatList:[],singleGuide:{},bookings:[],filteredGuides:[],somethingStupid:0,loggedIn:"false"},plugins:[w],mutations:{changeView(e,t){this.state.currentView=t},loggedIn(e,t){this.state.loggedIn=t},setUserType(e,t){console.log("setting user type to: ",t),this.state.userType=t},setUserId(e,t){console.log("setuserid function in store ",t),this.state.id=t,y["a"].emit("matchSocketWithMongoId",t)},setCurrentChat(e,t){this.state.currentChat=t,console.log(this.state.currentChat)},chatUpdate(e,t){for(message of t)this.state.currentChatLog.push(message)},setUserName(e,t){this.state.name=t},setUserEmail(e,t){this.state.email=t},setUsergid(e,t){this.state.gid=t},setTravellerPackage(e,t){this.state.travellerPackage=t},setGuidePackage(e,t){this.state.guidePackage=t},setFilteredGuides(e,t){this.state.filteredGuides=t,console.log("Setter's"),console.log(this.state.filteredGuides)},setSingleGuide(e,t){this.state.singleGuide.id=t._id,this.state.singleGuide.name=t.name,this.state.singleGuide.avatar=t.avatar,this.state.singleGuide.languages=t.languages,this.state.singleGuide.locations=t.locations,this.state.singleGuide.weekdays=t.weekdays,this.state.singleGuide.bio=t.bio,this.state.singleGuide.gallery=t.gallery,this.state.singleGuide.rate=t.rate,this.state.singleGuide.unavailableDates=t.unavailable_dates,console.log("setter function"),this.state.somethingStupid+=1,console.log("forced render",Date.now())},setChatList(e,t){console.log("setChatList payload: ",t),this.state.chatList=t,console.log("chat list is : ",this.state.chatList)},appendMessage(e,t){this.state.currentChatLog.push(t)},setTypingStatus(e,t){this.state.typingStatus=t}},actions:{async receiveMessage(e,t){console.log("this was received:",t)},async search(e,t){e.commit("setFilteredGuides")},async getFilteredGuides(e,t){console.log("Payload is: ",t);const a=t.location,o=t.language,s=t.date,n=t.meme,i=(await f.a.get(`/api/guides/search/${a}/${o}/${s}/${n}`)).data;e.commit("setFilteredGuides",i)},async getSingleGuide(e,t){console.log("getSingleGuide called",t);try{const a=(await f.a.get(`https://g1000.herokuapp.com/api/guides/${t}`)).data;console.log(a),e.commit("setSingleGuide",a),console.log("state commit setSingleGuide happened")}catch(a){console.log(a)}},async getChatLog(e,t){const a=(await f.a.get(`https://g1000.herokuapp.com/api/conversations/${t}/messages`)).data;console.log("data: ",a),console.log("messages: ",a.messages);let o="guide"===this.state.userType?"traveller":"guide";this.state.currentChatLog=a.messages,console.log(a[o]._id),this.state.sendTo=a[o]._id,console.log(this.state.sendTo)},async getTravellerChats(e,t){console.log("getTrav payload should be id: ",t);const a=(await f.a.get(`https://g1000.herokuapp.com/api/conversations/traveller/${t}`)).data;e.commit("setChatList",a)},async getGuideChats(e,t){const a=(await f.a.get(`https://g1000.herokuapp.com/api/conversations/guide/${t}`)).data;e.commit("setChatList",a)},async getBookings(e){const t=(await f.a.get(`https://g1000.herokuapp.com/api/bookings/${this.state.userType}/${this.state.id}`)).data;this.state.bookings=t,console.log(this.state)},async someShit(e,t){let a={traveller:"60b6326339b7417d0f2649ad",guide:"60b47b595c7aa6b557654a30",location:"your mom",date:"Tomorrow, I guess",start_time:"lol",end_time:"ecks Dee",meeting_location:"deez nuts",details:"I have ligma",status:"pending",conversation:"098123098312980"};f.a.post("https://g1000.herokuapp.com/api/bookings",a)},async travellerPackage(e,t){y["a"].emit("newTravellerRegistration",t),console.log("newTravellerRegistration on front")},async guidePackage(e,t){y["a"].emit("newGuideRegistration",t),console.log("newGuideRegistration on front")}}}),k=a("8c4f");const S=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var G=S;o["a"].use(k["a"]);var P=function(){const e=new k["a"]({scrollBehavior:()=>({x:0,y:0}),routes:G,mode:"hash",base:""});return e},T=async function(){const e="function"===typeof b?await b({Vue:o["a"]}):b,t="function"===typeof P?await P({Vue:o["a"],store:e}):P;e.$router=t;const a={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:a,store:e,router:t}};o["a"].prototype.$axios=f.a;const C="";async function L(){const{app:e,store:t,router:a}=await T();let s=!1;const n=e=>{s=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),r=[void 0];for(let c=0;!1===s&&c<r.length;c++)if("function"===typeof r[c])try{await r[c]({app:e,router:a,store:t,Vue:o["a"],ssrContext:null,redirect:n,urlPath:i,publicPath:C})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==s&&new o["a"](e)}L()},"31cd":function(e,t,a){},"6c23":function(e,t,a){"use strict";var o=a("8e27"),s=a.n(o);const n=s()("wss://g1000.herokuapp.com");n.on("connect",(()=>{console.log("connected now")})),n.on("disconnect",(()=>{console.log("disconnected now")})),t["a"]=n}});