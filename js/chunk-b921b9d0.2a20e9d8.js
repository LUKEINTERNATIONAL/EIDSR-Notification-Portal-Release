(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b921b9d0"],{"033a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{style:{backgroundImage:"url("+t.image.background+")"}},[a("v-card",{staticClass:"lgn-card",attrs:{elevation:"8",raised:"true"}},[a("v-container",{staticClass:"lgn-container",attrs:{title:"Login"}},[a("div",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-img",{staticClass:"lgn-img",attrs:{src:t.image.msg}})],1),a("v-col",{staticStyle:{"margin-top":"6%"}},[a("label",{staticClass:"lgn-txt"},[t._v("EIDSR Notification Portal")])])],1)],1),a("div",{staticClass:"lgn-form"},[a("v-text-field",{attrs:{type:"email",name:"email",placeholder:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("br"),a("v-text-field",{attrs:{type:"password",name:"password",placeholder:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("br"),a("v-row",[a("v-col",[a("div",{staticClass:"error1",domProps:{innerHTML:t._s(t.error)}})]),a("v-col",[a("v-btn",{staticClass:"cyan lgn-btn",on:{click:t.login}},[t._v("Login")])],1)],1)],1)])],1),a("v-footer",{staticClass:"footer",attrs:{fixed:"true"}},[a("v-row",[a("v-col",{attrs:{cols:"1"}},[a("v-img",{staticClass:"ftr-img f-img",attrs:{src:t.image.malawiGovn}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-img",{staticClass:"ftr-img sl-img",attrs:{src:t.image.pepfar}})],1),a("v-col",{attrs:{cols:"1"}},[a("v-img",{staticClass:"ftr-img ls-img",attrs:{src:t.image.lin}})],1)],1)],1)],1)],1)},n=[],s=a("1da1"),r=(a("96cf"),a("c5b9")),o={components:{},data:function(){return{email:"",password:"",error:null,connectionStatus:!1,image:{msg:"msg.jpg",background:"Malawi-Village-Kids-Luke-International-LIN-1920x1082-1.jpg",malawiGovn:"Malawi-Coat_of_arms_of_arms.png",pepfar:"PEPFAR.png",lin:"LIN.png"}}},methods:{login:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.sendRequest();case 1:case"end":return e.stop()}}),e)})))()},tryToConnect:function(){var t=0,e=setInterval((function(){this.sendRequest(),t++,10===t&&clearInterval(e)}),1e3)},sendRequest:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r["a"].login({email:t.email,password:t.password});case 3:a=e.sent,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",a.data.user),t.$store.dispatch("setUserRoleId",a.data.user.role_id),t.$router.push({name:"Dashboard"}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0.response.data.error;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},c=o,l=(a("6474"),a("2877")),u=a("6544"),p=a.n(u),d=a("7496"),f=a("8336"),h=a("b0af"),g=a("62ad"),v=a("a523"),m=a("553a"),b=a("adda"),y=a("0fd9"),j=a("8654"),w=Object(l["a"])(c,i,n,!1,null,"71c3a81c",null);e["default"]=w.exports;p()(w,{VApp:d["a"],VBtn:f["a"],VCard:h["a"],VCol:g["a"],VContainer:v["a"],VFooter:m["a"],VImg:b["a"],VRow:y["a"],VTextField:j["a"]})},"0fd9":function(t,e,a){"use strict";var i=a("ade3"),n=a("5530"),s=(a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(a,i){return a[t+Object(o["x"])(i)]=e(),a}),{})}var p=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:p}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var i=b[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var j=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},d),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,e){var a=e.props,n=e.data,s=e.children,o="";for(var c in a)o+=String(a[c]);var l=j.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var i=a[t],n=y(e,t,i);n&&l.push(n)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(t,"align-".concat(a.align),a.align),Object(i["a"])(t,"justify-".concat(a.justify),a.justify),Object(i["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),j.set(o,l)}(),t(a.tag,Object(r["a"])(n,{staticClass:"row",class:l}),s)}})},"3a66":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("fe6c"),n=a("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,a=e.length;t<a;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"553a":function(t,e,a){"use strict";var i=a("5530"),n=(a("a9e3"),a("c7cd"),a("b5b6"),a("8dd9")),s=a("3a66"),r=a("d10f"),o=a("58df"),c=a("80d2");e["a"]=Object(o["a"])(n["a"],Object(s["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(c["g"])(t),left:Object(c["g"])(this.computedLeft),right:Object(c["g"])(this.computedRight),bottom:Object(c["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6474:function(t,e,a){"use strict";a("6ac9")},"6ac9":function(t,e,a){},7496:function(t,e,a){"use strict";var i=a("5530"),n=(a("d9e2"),a("df86"),a("7560")),s=a("58df");e["a"]=Object(s["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},b5b6:function(t,e,a){},c5b9:function(t,e,a){"use strict";var i=a("7424");e["a"]={register:function(t){return Object(i["a"])().post("register",t)},login:function(t){return Object(i["a"])().post("login",t)}}},df86:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b921b9d0.2a20e9d8.js.map