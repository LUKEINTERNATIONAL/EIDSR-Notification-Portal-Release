(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3db389f1"],{"20f6":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i("6b75");function n(t){if(Array.isArray(t))return Object(o["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");i("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||s(t)||Object(r["a"])(t)||a()}},"2fa4":function(t,e,i){"use strict";i("20f6");var o=i("80d2");e["a"]=Object(o["h"])("spacer","div","v-spacer")},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i("fe6c"),n=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"5e23":function(t,e,i){},8690:function(t,e,i){"use strict";i("9deb")},"8b0d":function(t,e,i){},"8e07":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[i("v-btn",{staticClass:"mr-3",attrs:{elevation:"1",fab:"",small:""},on:{click:function(e){return t.setDrawer(!t.drawer)}}},[t.value?i("v-icon",[t._v(" mdi-view-quilt ")]):i("v-icon",[t._v(" mdi-dots-vertical ")])],1),i("v-toolbar-title",{staticClass:"hidden-sm-and-down font-weight-light",domProps:{textContent:t._s(t.$route.name)}}),i("v-spacer"),i("div",{staticClass:"mx-3"}),i("v-btn",{staticClass:"ml-2",attrs:{"min-width":"0",text:"",to:"/"}},[i("v-icon",[t._v("mdi-view-dashboard")])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[i("v-badge",{attrs:{color:"red",overlap:"",bordered:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("span",[t._v("5")])]},proxy:!0}],null,!0)},[i("v-icon",[t._v("mdi-bell")])],1)],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:""}},[i("div",t._l(t.notifications,(function(e,o){return i("app-bar-item",{key:"item-"+o},[i("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1)])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[i("v-icon",[t._v("mdi-cog")])],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:""}},[i("v-list-item",{staticClass:"vli-c",attrs:{to:"/pages/change-password"}},[i("v-icon",[t._v("mdi-lock")]),t._v("Message Body Settings")],1)],1)],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[i("v-icon",[t._v("mdi-account")])],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:""}},[i("v-list-item",{staticClass:"vli-c"},[i("v-icon",[t._v("mdi-account-plus")]),t._v("Add User")],1),i("v-list-item",{staticClass:"vli-c",attrs:{to:"/pages/user"}},[i("v-icon",[t._v("mdi-account-edit")]),t._v("Edit Profile")],1),i("v-list-item",{staticClass:"vli-c",attrs:{to:"/pages/change-password"}},[i("v-icon",[t._v("mdi-lock")]),t._v("Change Password")],1),i("v-list-item",{staticClass:"vli-c",on:{click:t.logout}},[i("v-icon",[t._v("mdi-axe")]),t._v("Logout")],1)],1)],1)],1)},n=[],s=i("5530"),r=i("16b7"),a=i("f2e7"),l=i("58df"),c=i("d9bd"),h=Object(l["a"])(r["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),d=i("da13"),u=i("2f62"),p={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(t){var e=this;return t(h,{scopedSlots:{default:function(i){var o=i.hover;return t(d["a"],{attrs:e.$attrs,class:{"black--text":!o,"white--text secondary elevation-12":o},props:Object(s["a"])({activeClass:"",dark:o,link:!0},e.$attrs)},e.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"]}},computed:Object(s["a"])({},Object(u["c"])(["drawer"])),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])({setDrawer:"SET_DRAWER"})),{},{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"login"})}})},f=p,v=(i("8690"),i("2877")),m=i("6544"),b=i.n(m),g=(i("c7cd"),i("a9e3"),i("8b0d"),i("3835")),S=(i("0481"),i("4069"),i("d3b7"),i("5e23"),i("8dd9")),O=i("adda"),y=i("80d2"),_=S["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},S["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(y["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(g["a"])(e,2),o=i[0],n=i[1];t.$attrs.hasOwnProperty(o)&&Object(c["a"])(o,n,t)}))},methods:{genBackground:function(){var t={height:Object(y["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(O["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(y["g"])(this.computedContentHeight)}},Object(y["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(y["g"])(this.extensionHeight)}},Object(y["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),j=i("53ca");function B(t,e,i){var o=e.modifiers||{},n=o.self,s=void 0!==n&&n,r=e.value,a="object"===Object(j["a"])(r)&&r.options||{passive:!0},l="function"===typeof r||"handleEvent"in r?r:r.handler,c=s?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,a),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:l,options:a,target:s?void 0:c})}function x(t,e,i){var o;if(null!=(o=t._onScroll)&&o[i.context._uid]){var n=t._onScroll[i.context._uid],s=n.handler,r=n.options,a=n.target,l=void 0===a?t:a;l.removeEventListener("scroll",s,r),delete t._onScroll[i.context._uid]}}var w={inserted:B,unbind:x},$=w,C=i("3a66"),T=i("2b0e"),A=T["a"].extend({name:"scrollable",directives:{Scroll:w},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),k=i("d10f"),E=Object(l["a"])(_,A,k["a"],a["a"],Object(C["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),P=E.extend({name:"v-app-bar",directives:{Scroll:$},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return A.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(s["a"])(Object(s["a"])({},_.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return _.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=_.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:_.options.computed.isCollapsed.call(this)},isProminent:function(){return _.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(s["a"])(Object(s["a"])({},_.options.computed.styles.call(this)),{},{fontSize:Object(y["g"])(this.computedFontSize,"rem"),marginTop:Object(y["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(y["g"])(this.computedTransform),")"),left:Object(y["g"])(this.computedLeft),right:Object(y["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=_.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=_.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),R=i("15fd"),H=(i("ff44"),i("132d")),L=i("a9ad"),M=i("7560"),N=i("f40d"),U=i("fe6c"),I=["aria-atomic","aria-label","aria-live","role","title"],V=Object(l["a"])(L["a"],Object(U["b"])(["left","bottom"]),M["a"],a["a"],N["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(s["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(y["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),o=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[o]):o},genBadgeContent:function(){if(!this.dot){var t=Object(y["o"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(H["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(y["o"])(this)],o=this.$attrs,n=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(R["a"])(o,I));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:n,class:this.classes},i)}}),Y=i("8336"),D=i("8860"),X=i("5d23"),q=i("e449"),z=i("2fa4"),J=Object(y["h"])("v-toolbar__title"),W=(Object(y["h"])("v-toolbar__items"),Object(v["a"])(f,o,n,!1,null,"59f5fb1c",null));e["default"]=W.exports;b()(W,{VAppBar:P,VBadge:V,VBtn:Y["a"],VIcon:H["a"],VList:D["a"],VListItem:d["a"],VListItemTitle:X["c"],VMenu:q["a"],VSpacer:z["a"],VToolbarTitle:J})},"9deb":function(t,e,i){},dd89:function(t,e,i){"use strict";function o(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return o}))},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3db389f1.2f02e316.js.map