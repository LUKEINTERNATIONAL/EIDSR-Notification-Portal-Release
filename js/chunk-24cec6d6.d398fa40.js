(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24cec6d6"],{"033a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app",{style:{backgroundImage:"url("+t.image.background+")"}},[i("v-card",{staticClass:"lgn-card",attrs:{elevation:"8",raised:"true"}},[i("v-container",{staticClass:"lgn-container",attrs:{title:"Login"}},[i("div",[i("v-row",[i("v-col",{attrs:{cols:"3"}},[i("v-img",{staticClass:"lgn-img",attrs:{src:t.image.msg}})],1),i("v-col",{staticStyle:{"margin-top":"6%"}},[i("label",{staticClass:"lgn-txt"},[t._v("EIDSR Notification Portal")])])],1)],1),i("div",{staticClass:"lgn-form"},[i("v-text-field",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("br"),i("v-text-field",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("br"),i("v-row",[i("v-col",[i("div",{staticClass:"error1",domProps:{innerHTML:t._s(t.error)}})]),i("v-col",[i("v-btn",{staticClass:"cyan lgn-btn",on:{click:t.login}},[t._v("Login")])],1)],1)],1)])],1),i("v-footer",{staticClass:"footer",attrs:{fixed:"true"}},[i("v-row",[i("v-col",{attrs:{cols:"1"}},[i("v-img",{staticClass:"ftr-img f-img",attrs:{src:t.image.malawiGovn}})],1),i("v-col",{attrs:{cols:"1"}},[i("v-img",{staticClass:"ftr-img sl-img",attrs:{src:t.image.pepfar}})],1),i("v-col",{attrs:{cols:"1"}},[i("v-img",{staticClass:"ftr-img ls-img",attrs:{src:t.image.lin}})],1)],1)],1)],1)],1)},s=[],o=i("1da1"),n=(i("96cf"),i("c5b9")),r={components:{},data:function(){return{email:"",password:"",error:null,connectionStatus:!1,image:{msg:"msg.jpg",background:"login.jpg",malawiGovn:"Malawi-Coat_of_arms_of_arms.png",pepfar:"PEPFAR.png",lin:"LIN.png"}}},methods:{login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.sendRequest();case 1:case"end":return e.stop()}}),e)})))()},tryToConnect:function(){var t=0,e=setInterval((function(){this.sendRequest(),t++,10===t&&clearInterval(e)}),1e3)},sendRequest:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n["a"].login({email:t.email,password:t.password});case 3:i=e.sent,t.$store.dispatch("setToken",i.data.token),t.$store.dispatch("setUser",i.data.user),t.$router.push({name:"Dashboard"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.error=e.t0.response.data.error;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},c=r,l=(i("0756"),i("2877")),p=i("6544"),u=i.n(p),d=i("7496"),f=i("8336"),h=i("b0af"),v=i("62ad"),m=i("a523"),g=i("553a"),b=i("adda"),y=i("0fd9"),w=i("8654"),j=Object(l["a"])(c,a,s,!1,null,"58a5657c",null);e["default"]=j.exports;u()(j,{VApp:d["a"],VBtn:f["a"],VCard:h["a"],VCol:v["a"],VContainer:m["a"],VFooter:g["a"],VImg:b["a"],VRow:y["a"],VTextField:w["a"]})},"0756":function(t,e,i){"use strict";i("2860")},2860:function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("fe6c"),s=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(s["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"553a":function(t,e,i){"use strict";var a=i("5530"),s=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),o=i("3a66"),n=i("d10f"),r=i("58df"),c=i("80d2");e["a"]=Object(r["a"])(s["a"],Object(o["a"])("footer",["height","inset"]),n["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(c["h"])(t),left:Object(c["h"])(this.computedLeft),right:Object(c["h"])(this.computedRight),bottom:Object(c["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},7496:function(t,e,i){"use strict";var a=i("5530"),s=(i("d9e2"),i("df86"),i("7560")),o=i("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},b5b6:function(t,e,i){},c5b9:function(t,e,i){"use strict";var a=i("7424");e["a"]={register:function(t){return Object(a["a"])().post("register",t)},login:function(t){return Object(a["a"])().post("login",t)}}},df86:function(t,e,i){}}]);
//# sourceMappingURL=chunk-24cec6d6.d398fa40.js.map