(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},o={1:0},n={1:0},i=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{2:"74f93fa6",3:"86705386",4:"efd95bd9"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={2:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{2:"f4c2aff9",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",n=l.p+s,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===s||u===n)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var s=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete o[e],g.parentNode.removeChild(g),a(i)},g.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(g)})).then((function(){o[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(g);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",d.name="ChunkLoadError",d.type=s,d.request=o,a[1](d)}n[e]=void 0}};var g=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var g=u;i.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"2f39":function(e,t,a){"use strict";a.r(t);a("5319"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var s=a("2b0e"),o=a("1f91"),n=a("42d2"),i=a("b05d");s["a"].use(i["a"],{config:{},lang:o["a"],iconSet:n["a"]});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},l=[],c={name:"App",mounted(){}},u=c,d=a("2877"),g=Object(d["a"])(u,r,l,!1,null,null,null),h=g.exports,p=(a("ddb0"),a("2f62")),m=a("bc3a"),f=a.n(m),y=a("43ac"),v=a.n(y);function b(e){return t=>{t.$socket=e,e.on("authResult",(a=>{e.auth.token=a.id,t.commit("setUserId",a.id),"Search"===a.path?t.commit("setUserType","traveller"):"MyProfile"===a.path&&t.commit("setUserType","guide"),t.commit("changeView",a.path),t.commit("loggedIn",a.loggedIn),"Registration"===a.path&&(t.commit("setUserName",a.name),t.commit("setUserEmail",a.email),t.commit("setUsergid",a.gid))})),e.on("changeView",(()=>{console.log("store access here"),t.state.currentView="HowTo"})),e.on("chatUpdate",(e=>t.commit("chatUpdate",e)))}}var w=a("6c23");s["a"].use(p["a"]);const S=b(w["a"]);var k=new p["a"].Store({state:{currentView:"Login",userType:"",id:"",name:"",email:"",gid:"",sendTo:"",travellerPackage:{},guidePackage:{},currentChat:"",currentChatLog:[],typingStatus:!1,chatList:[],singleGuide:{},guideSelf:{},bookings:[],filteredGuides:[],somethingStupid:0,loggedIn:"false"},plugins:[S],mutations:{changeView(e,t){this.state.currentView=t},loggedIn(e,t){this.state.loggedIn=t},setUserType(e,t){console.log("setting user type to: ",t),this.state.userType=t},setUserId(e,t){console.log("setuserid function in store ",t),this.state.id=t,w["a"].emit("matchSocketWithMongoId",t)},setCurrentChat(e,t){this.state.currentChat=t,console.log(this.state.currentChat)},chatUpdate(e,t){for(message of t)this.state.currentChatLog.push(message)},setUserName(e,t){this.state.name=t},setUserEmail(e,t){this.state.email=t},setUsergid(e,t){this.state.gid=t},setTravellerPackage(e,t){this.state.travellerPackage=t},setGuidePackage(e,t){this.state.guidePackage=t},setGuidePackageUpdate(e,t){this.state.guidePackageUpdate=t},setFilteredGuides(e,t){this.state.filteredGuides=t,console.log("Setter's"),console.log(this.state.filteredGuides),this.state.currentView="SearchResults"},setSingleGuide(e,t){this.state.singleGuide.id=t._id,this.state.singleGuide.name=t.name,this.state.singleGuide.avatar=t.avatar,this.state.singleGuide.languages=t.languages,this.state.singleGuide.locations=t.locations,this.state.singleGuide.weekdays=t.weekdays,this.state.singleGuide.bio=t.bio,this.state.singleGuide.gallery=t.gallery,this.state.singleGuide.rate=t.rate,console.log("before ",t.unavailable_dates);let a=t.unavailable_dates;a=a.map((function(e){return e.substring(0,4)+"/"+e.substring(4,6)+"/"+e.substring(6,8)})),this.state.singleGuide.unavailableDates=a,this.state.currentView="SelectedProfile",this.state.somethingStupid+=1},setSelf(e,t){this.state.guideSelf.id=t._id,this.state.guideSelf.name=t.name,this.state.guideSelf.avatar=t.avatar,this.state.guideSelf.languages=t.languages,this.state.guideSelf.locations=t.locations,this.state.guideSelf.weekdays=t.weekdays,this.state.guideSelf.bio=t.bio,this.state.guideSelf.gallery=t.gallery,this.state.guideSelf.rate=t.rate,console.log("before ",t.unavailable_dates);let a=t.unavailable_dates;a=a.map((function(e){return e.substring(0,4)+"/"+e.substring(4,6)+"/"+e.substring(6,8)})),this.state.guideSelf.unavailableDates=a,this.state.somethingStupid+=1},setChatList(e,t){console.log("setChatList payload: ",t),this.state.chatList=t,console.log("chat list is : ",this.state.chatList)},appendMessage(e,t){this.state.currentChatLog.push(t)},setTypingStatus(e,t){this.state.typingStatus=t},setCheckoutSessionId(e,t){this.state.checkoutSessionId=t}},actions:{async receiveMessage(e,t){console.log("this was received:",t)},async search(e,t){e.commit("setFilteredGuides")},async getFilteredGuides(e,t){console.log("Payload is: ",t);const a=t.location,s=t.language,o=t.date,n=t.meme,i=(await f.a.get(`${v.a}/api/guides/search/${a}/${s}/${o}/${n}`)).data;e.commit("setFilteredGuides",i)},async getSingleGuide(e,t){console.log("getSingleGuide called",t);try{const a=(await f.a.get(`${v.a}/api/guides/${t}`)).data;console.log(a),e.commit("setSingleGuide",a),console.log("state commit setSingleGuide happened")}catch(a){console.log(a)}},async getSelf(e,t){console.log("getSelf called",t);try{const a=(await f.a.get(`${v.a}/api/guides/${t}`)).data;console.log(a),e.commit("setSelf",a),console.log("state commit setSelf happened")}catch(a){console.log(a)}},async getChatLog(e,t){const a=(await f.a.get(`${v.a}/api/conversations/${t}/messages`)).data;console.log("data: ",a),console.log("messages: ",a.messages);let s="guide"===this.state.userType?"traveller":"guide";this.state.currentChatLog=a.messages,console.log(a[s]._id),this.state.sendTo=a[s]._id,console.log(this.state.sendTo),this.state.currentView="Messages"},async getTravellerChats(e,t){console.log("getTrav payload should be id: ",t);const a=(await f.a.get(`${v.a}/api/conversations/traveller/${t}`)).data;e.commit("setChatList",a)},async getGuideChats(e,t){const a=(await f.a.get(`${v.a}/api/conversations/guide/${t}`)).data;e.commit("setChatList",a)},async getBookings(e){const t=(await f.a.get(`${v.a}/api/bookings/${this.state.userType}/${this.state.id}`)).data;this.state.bookings=t,console.log("get bookings data: ",t)},async openBookingStartChat(e,t){let a={traveller:"60b6326339b7417d0f2649ad",guide:"60b47b595c7aa6b557654a30",location:"your mom",date:"Tomorrow, I guess",start_time:"lol",end_time:"ecks Dee",meeting_location:"deez nuts",details:"I have ligma",status:"pending",conversation:"098123098312980"};f.a.post(`${v.a}/api/bookings`,a)},async travellerPackage(e,t){f.a.post(`${v.a}/api/travellers/newtravellerregistration`,t).then((t=>e.commit("setUserId",t["data"]))).then(e.commit("setUserType","traveller")).then(e.commit("loggedIn",!0)).then(e.commit("changeView","HowTo"))},async guidePackage(e,t){f.a.post(`${v.a}/api/guides/newguideregistration`,t).then((t=>e.commit("setUserId",t["data"]))).then(e.commit("setUserType","guide")).then(e.commit("loggedIn",!0)).then(e.commit("changeView","HowTo"))},async guidePackageUpdate(e,t){f.a.post(`${v.a}/api/guides/update`,t),console.log("guide Update on front")}},getters:{chatChecker(e){return console.log("GETTTTTAAAAAAAAAZZZZ"),Object.keys(e.currentChatLog).length}}}),T=a("8c4f");const P=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var C=P;s["a"].use(T["a"]);var G=function(){const e=new T["a"]({scrollBehavior:()=>({x:0,y:0}),routes:C,mode:"hash",base:""});return e},$=async function(){const e="function"===typeof k?await k({Vue:s["a"]}):k,t="function"===typeof G?await G({Vue:s["a"],store:e}):G;e.$router=t;const a={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:a,store:e,router:t}};s["a"].prototype.$axios=f.a;const U="";async function _(){const{app:e,store:t,router:a}=await $();let o=!1;const n=e=>{o=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),r=[void 0];for(let c=0;!1===o&&c<r.length;c++)if("function"===typeof r[c])try{await r[c]({app:e,router:a,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:i,publicPath:U})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new s["a"](e)}_()},"31cd":function(e,t,a){},"43ac":function(e,t){e.exports=server=(()=>"http://localhost:8080"===window.location.origin||"http://localhost:5000"===window.location.origin?"http://localhost:5000":"https://getguides.herokuapp.com")()},"6c23":function(e,t,a){"use strict";var s=a("8e27"),o=a.n(s);const n=o()("wss://getguides.herokuapp.com");n.on("connect",(()=>{console.log("connected now")})),n.on("disconnect",(()=>{console.log("disconnected now")})),t["a"]=n}});