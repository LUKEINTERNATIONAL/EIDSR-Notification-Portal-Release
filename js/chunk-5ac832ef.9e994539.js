(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ac832ef"],{"51c9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"settings-wrapper"}},[i("v-card",{staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"115px",right:"-35px","border-radius":"8px"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[i("v-icon",{attrs:{large:""}},[t._v(" mdi-settings ")])],1),i("v-menu",{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",{staticClass:"text-center mb-0",attrs:{width:"300"}},[i("v-card-text",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("SIDEBAR FILTERS")]),i("v-item-group",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(e){return i("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.active,n=t.toggle;return[i("v-avatar",{staticClass:"v-settings__item",class:s&&"v-settings__item--active",attrs:{color:e,size:"25"},on:{click:n}})]}}],null,!0)})})),1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Dark Mode ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Sidebar Image ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("IMAGES")]),i("v-item-group",{staticClass:"d-flex justify-space-between mb-3",model:{value:t.image,callback:function(e){t.image=e},expression:"image"}},t._l(t.images,(function(e){return i("v-item",{key:e,staticClass:"mx-1",attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.active,n=t.toggle;return[i("v-sheet",{staticClass:"d-inline-block v-settings__item",class:s&&"v-settings__item--active",on:{click:n}},[i("v-img",{attrs:{src:e,height:"100",width:"50"}})],1)]}}],null,!0)})})),1),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",href:"https://www.creative-tim.com/product/vuetify-material-dashboard",default:"",rel:"noopener",target:"_blank"}},[t._v(" Free Download ")]),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"grey darken-1",dark:"",href:"https://vuetifyjs.com/components/api-explorer",default:"",rel:"noopener",target:"_blank"}},[t._v(" Documentation ")]),i("div",{staticClass:"my-12"}),i("div",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("THANK YOU FOR SHARING!")])]),i("v-btn",{staticClass:"ma-1",attrs:{color:"#55acee",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-twitter")]),t._v(" - 45 ")],1),i("v-btn",{staticClass:"ma-1",attrs:{color:"#3b5998",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-facebook")]),t._v(" - 50 ")],1)],1)],1)],1)],1)},n=[],a=i("5530"),o=i("a452"),r=i("2f62"),c={name:"DashboardCoreSettings",mixins:[o["a"]],data:function(){return{color:"#E91E63",colors:["#9C27b0","#00CAE3","#4CAF50","#ff9800","#E91E63","#FF5252"],image:"https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",images:["https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg"],menu:!1,saveImage:"",showImg:!0}},computed:Object(a["a"])({},Object(r["c"])(["barImage"])),watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t},showImg:function(t){t?this.saveImage?(this.setBarImage(this.saveImage),this.saveImage=""):this.setBarImage(t):(this.saveImage=this.barImage,this.setBarImage(""))},image:function(t){this.setBarImage(t)}},methods:Object(a["a"])({},Object(r["b"])({setBarImage:"SET_BAR_IMAGE"}))},l=c,h=(i("b947"),i("2877")),u=i("6544"),d=i.n(u),f=i("8212"),v=i("8336"),m=i("b0af"),p=i("99d9"),g=i("62ad"),b=i("ce7e"),w=i("132d"),y=i("adda"),O=i("ade3"),C=i("4e82"),x=i("58df"),A=i("d9bd"),k=i("2b0e"),T=k["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(O["a"])({},this.activeClass,this.isActive)}),t):(Object(A["c"])("v-item should only contain a single element",this),t)):(Object(A["c"])("v-item is missing a default scopedSlot",this),null);var t}}),I=Object(x["a"])(T,Object(C["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),S=i("604c"),j=i("e449"),_=i("0fd9"),$=i("8dd9"),D=i("2fa4"),L=i("15fd"),B=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("d3b7"),i("25f0"),i("4de4"),i("c37a")),V=i("5607"),M=k["a"].extend({name:"rippleable",directives:{ripple:V["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),W=i("8547");function Y(t){t.preventDefault()}var E=Object(x["a"])(B["a"],M,W["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=B["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:Y},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:Y},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),F=i("c3f0"),H=i("0789"),R=i("490a"),N=i("80d2"),q=["title"],X=E.extend({name:"v-switch",directives:{Touch:F["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(L["a"])(t,q));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(H["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(R["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===N["q"].left&&this.isActive||t.keyCode===N["q"].right&&!this.isActive)&&this.onChange()}}}),z=Object(h["a"])(l,s,n,!1,null,null,null);e["default"]=z.exports;d()(z,{VAvatar:f["a"],VBtn:v["a"],VCard:m["a"],VCardText:p["b"],VCol:g["a"],VDivider:b["a"],VIcon:w["a"],VImg:y["a"],VItem:I,VItemGroup:S["b"],VMenu:j["a"],VRow:_["a"],VSheet:$["a"],VSpacer:D["a"],VSwitch:X})},"58d3":function(t,e,i){},"9d01":function(t,e,i){},b947:function(t,e,i){"use strict";i("58d3")},e449:function(t,e,i){"use strict";var s=i("ade3"),n=i("2909"),a=i("5530"),o=(i("a9e3"),i("7db0"),i("d3b7"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("caad"),i("2532"),i("ee6f"),i("480e")),r=i("4ad4"),c=i("16b7"),l=i("b848"),h=i("f573"),u=i("e4d3"),d=i("a236"),f=i("7560"),v=i("a293"),m=i("dc22"),p=i("58df"),g=i("d9bd"),b=i("80d2"),w=i("7d8f"),y=Object(p["a"])(l["a"],c["a"],u["a"],d["a"],f["a"],h["a"]);e["a"]=y.extend({name:"v-menu",directives:{ClickOutside:v["a"],Resize:m["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(b["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(b["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(b["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(b["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(b["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(b["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted");var s=this.$refs.content.scrollTop,n=this.$refs.content.clientHeight;s>i.offsetTop-8?Object(w["b"])(i.offsetTop-i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):s+n<i.offsetTop+i.clientHeight+8&&Object(w["b"])(i.offsetTop-n+2*i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==b["q"].tab){if(t.keyCode===b["q"].down)this.nextTile();else if(t.keyCode===b["q"].up)this.prevTile();else if(t.keyCode===b["q"].end)this.lastTile();else if(t.keyCode===b["q"].home)this.firstTile();else{if(t.keyCode!==b["q"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(a["a"])(Object(a["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=h["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(n["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(a["a"])(Object(a["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(a["a"])(Object(a["a"])(Object(a["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(s["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){var i;null!=(i=e.$refs.content)&&i.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===b["q"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[b["q"].up,b["q"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},ec29:function(t,e,i){},ee6f:function(t,e,i){},f573:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("d3b7"),i("21be")),a=i("fe6c"),o=i("4ad4"),r=i("75eb"),c=i("58df"),l=i("80d2"),h=Object(c["a"])(n["a"],Object(a["b"])(["top","right","bottom","left","absolute"]),o["a"],r["a"]);e["a"]=h.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width),n=0;if(n+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(n-=s-t.width),this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-a:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(l["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(l["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,a=t+n,o=i<a;return o&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):o&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(s["a"])({},this.dimensions.activator),content:Object(s["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);
//# sourceMappingURL=chunk-5ac832ef.9e994539.js.map