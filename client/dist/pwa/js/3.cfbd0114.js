(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",["traveller"===this.$store.state.userType||"guide"===this.$store.state.userType||"admin"===this.$store.state.userType?i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),i("q-toolbar-title",[e._v("\n        "+e._s(this.$store.state.currentView)+"\n      ")]),"Messages"===this.$store.state.currentView||"SelectedProfile"===this.$store.state.currentView||"SearchResults"===this.$store.state.currentView?i("q-btn",{attrs:{dense:"",flat:"",icon:"arrow_back",label:"Back"},on:{click:e.goBack}}):e._e()],1)],1),i("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Essential Links\n      ")]),"guide"===this.$store.state.userType?i("div",e._l(e.profileLinks,(function(t){return i("ProfileLink",e._b({key:t.title},"ProfileLink",t,!1))})),1):e._e(),e._l(e.essentialLinks,(function(t){return i("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),i("q-page-container",[i("router-view")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-item",{attrs:{clickable:"",tag:"span"},on:{click:function(t){return e.changeView(e.view)}}},[e.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:e.icon}})],1):e._e(),i("q-item-section",[i("q-item-label",[e._v(e._s(e.title))]),i("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},r=[],s={methods:{changeView(e){console.log(e),this.$store.commit("changeView",e)}},name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},view:{type:String,default:""},icon:{type:String,default:""}}},l=s,c=i("2877"),u=i("66e5"),p=i("4074"),h=i("0016"),w=i("0170"),m=i("eebe"),f=i.n(m),d=Object(c["a"])(l,o,r,!1,null,null,null),g=d.exports;f()(d,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:h["a"],QItemLabel:w["a"]});var b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-item",{attrs:{clickable:"",tag:"span"},on:{click:function(t){return e.changeView(e.view)}}},[e.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:e.icon}})],1):e._e(),i("q-item-section",[i("q-item-label",[e._v(e._s(e.title))]),i("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},k=[],v={methods:{changeView(e){console.log(e),this.$store.commit("changeView",e)}},name:"ProfileLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},view:{type:String,default:""},icon:{type:String,default:""}}},_=v,q=Object(c["a"])(_,b,k,!1,null,null,null),y=q.exports;f()(q,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:h["a"],QItemLabel:w["a"]});const L=[{title:"My Profile",caption:"Show and edit your own Profile",icon:"person",view:"SelectedProfile"}],S=[{title:"Search",caption:"Search for Guides",icon:"code",view:"Search"},{title:"Bookings",caption:"Check your bookings",icon:"book_online",view:"Bookings"},{title:"How to",caption:"How to use the App",icon:"help_outline",view:"HowTo"},{title:"Chats",caption:"Your chats",icon:"message",view:"Chats"},{title:"About Us",caption:"The team behind Get Guides",icon:"favorite",view:"AboutUs"},{title:"Logout",caption:"Bye bye",icon:"favorite",view:"Logout"}];var $={name:"MainLayout",components:{EssentialLink:g,ProfileLink:y},data(){return{leftDrawerOpen:!1,essentialLinks:S,profileLinks:L}},methods:{goBack(){"Messages"===this.$store.state.currentView?this.$store.commit("changeView","Chats"):"SearchResults"===this.$store.state.currentView?this.$store.commit("changeView","Search"):"SelectedProfile"===this.$store.state.currentView&&this.$store.commit("changeView","SearchResults")}}},Q=$,V=i("4d5a"),P=i("e359"),I=i("65c6"),O=i("9c40"),T=i("6ac5"),E=i("9404"),B=i("1c1c"),D=i("09e3"),C=Object(c["a"])(Q,n,a,!1,null,null,null);t["default"]=C.exports;f()(C,"components",{QLayout:V["a"],QHeader:P["a"],QToolbar:I["a"],QBtn:O["a"],QToolbarTitle:T["a"],QDrawer:E["a"],QList:B["a"],QItemLabel:w["a"],QPageContainer:D["a"]})}}]);