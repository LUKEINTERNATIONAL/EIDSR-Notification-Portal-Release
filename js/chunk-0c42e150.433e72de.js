(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c42e150"],{"09ae":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",t._b({attrs:{id:"core-navigation-drawer",dark:"rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)"!==t.barColor,"expand-on-hover":t.expandOnHover,right:t.$vuetify.rtl,src:t.barImage,"mobile-break-point":"960",app:"",width:"260"},scopedSlots:t._u([{key:"img",fn:function(e){return[i("v-img",t._b({attrs:{gradient:"to bottom, "+t.barColor}},"v-img",e,!1))]}}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1),[i("v-divider",{staticClass:"mb-1"}),i("v-list",{attrs:{dense:"",nav:""}},[i("v-list-item",[i("v-list-item-avatar",{staticClass:"align-self-center",attrs:{color:"white",contain:""}},[i("v-img",{staticStyle:{padding:"19px"},attrs:{src:t.image.msg,"max-height":"30"}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"display-1",domProps:{textContent:t._s(t.profile.title)}})],1)],1)],1),i("v-divider",{staticClass:"mb-2"}),i("v-list",{attrs:{expand:"",nav:""}},[i("div"),t._l(t.computedItems,(function(t,e){return[t.children?i("base-item-group",{key:"group-"+e,attrs:{item:t}}):i("base-item",{key:"item-"+e,staticClass:"sidepanelFont",attrs:{item:t}})]}))],2)],1)},a=[],o=i("5530"),s=(i("d81d"),i("2f62")),r={name:"DashboardCoreDrawer",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"dashboard",to:"/"},{icon:"mdi-message",title:"messages",to:"/pages/messages"},{icon:"mdi-alert-circle",title:"cases",to:"/pages/cases"},{icon:"mdi-account",title:"respondents",to:"/pages/respondents"},{icon:"mdi-account",title:"user",to:"/pages/user"},{title:"google",icon:"mdi-map-marker",to:"/maps/google-maps"},{title:"notifications",icon:"mdi-bell",to:"/components/notifications"}],image:{msg:"msg.jpg"}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])(["barColor","barImage"])),{},{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("SET_DRAWER",t)}},computedItems:function(){return this.items.map(this.mapItem)},profile:function(){return{avatar:!0,title:this.$t("avatar")}}}),methods:{mapItem:function(t){return Object(o["a"])(Object(o["a"])({},t),{},{children:t.children?t.children.map(this.mapItem):void 0,title:this.$t(t.title)})}}},c=r,l=(i("d406"),i("2877")),u=i("6544"),h=i.n(u),d=i("ce7e"),v=i("adda"),p=i("8860"),f=i("da13"),m=i("8270"),g=i("5d23"),y=(i("a9e3"),i("c7cd"),i("99af"),i("7958"),i("3a66")),b=i("a9ad"),w=i("b848"),O=i("e4cd"),A=i("e707"),$=i("d10f"),C=i("7560"),k=i("a293"),x=i("dc22"),_=i("c3f0"),E=i("80d2"),j=i("58df"),M=Object(j["a"])(Object(y["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),b["a"],w["a"],O["a"],A["a"],$["a"],C["a"]),S=M.extend({name:"v-navigation-drawer",directives:{ClickOutside:k["a"],Resize:x["a"],Touch:_["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(o["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&O["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(E["g"])(this.height),top:this.isBottom?"auto":Object(E["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(E["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(E["g"])(this.computedTransform,"%"),")"),width:Object(E["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(v["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var e=Object(E["m"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(E["m"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),N=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=N.exports;h()(N,{VDivider:d["a"],VImg:v["a"],VList:p["a"],VListItem:f["a"],VListItemAvatar:m["a"],VListItemContent:g["a"],VListItemTitle:g["c"],VNavigationDrawer:S})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=i("06c5");i("d9e2");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||o(t)||Object(s["a"])(t)||r()}},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fe6c"),a=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c93":function(t,e,i){},7958:function(t,e,i){},a293:function(t,e,i){"use strict";var n=i("53ca"),a=(i("d3b7"),i("dd89"));function o(){return!0}function s(t,e,i){if(!t||!1===r(t,i))return!1;var o=Object(a["a"])(e);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var s=("object"===Object(n["a"])(i.value)&&i.value.include||function(){return[]})();return s.push(e),!s.some((function(e){return e.contains(t.target)}))}function r(t,e){var i="object"===Object(n["a"])(e.value)&&e.value.closeConditional||o;return i(t)}function c(t,e,i,n){var a="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,i)&&setTimeout((function(){r(t,i)&&a&&a(t)}),0)}function l(t,e){var i=Object(a["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var u={inserted:function(t,e,i){var n=function(n){return c(n,t,e,i)},a=function(i){t._clickOutside.lastMousedownWasOutside=s(i,t,e)};l(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",a,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:a}},unbind:function(t,e,i){t._clickOutside&&(l(t,(function(e){var n;if(e&&null!=(n=t._clickOutside)&&n[i.context._uid]){var a=t._clickOutside[i.context._uid],o=a.onClick,s=a.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",s,!0)}})),delete t._clickOutside[i.context._uid])}};e["a"]=u},b848:function(t,e,i){"use strict";var n=i("2909"),a=i("58df");function o(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(n["a"])(o(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(n["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(n["a"])(this.getOpenDependentElements())),t}}})},c07f:function(t,e,i){},d406:function(t,e,i){"use strict";i("c07f")},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var n=i("5530"),a=(i("3c93"),i("a9ad")),o=i("7560"),s=i("f2e7"),r=i("58df"),c=Object(r["a"])(a["a"],o["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),l=c,u=i("80d2"),h=i("2b0e");e["a"]=h["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["o"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["q"].up,u["q"].pageup],i=[u["q"].down,u["q"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,a=e.shiftKey||e.deltaX?"x":"y",o="y"===a?e.deltaY:e.deltaX||e.deltaY;"y"===a?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var s=o<0,r=o>0;return!(i||!s)||(!(n||!r)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(u["f"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var a=0;a<e.length;a++){var o=e[a];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-0c42e150.433e72de.js.map