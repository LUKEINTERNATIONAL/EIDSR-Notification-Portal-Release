(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b00eec6"],{"0fd9":function(t,e,r){"use strict";var n=r("ade3"),a=r("5530"),s=(r("d3b7"),r("caad"),r("2532"),r("99af"),r("b64b"),r("ac1f"),r("5319"),r("4ec9"),r("3ca3"),r("ddb0"),r("159b"),r("4b85"),r("2b0e")),i=r("d9f7"),o=r("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return c.reduce((function(r,n){return r[t+Object(o["x"])(n)]=e(),r}),{})}var l=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:l}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=d("justify",(function(){return{type:String,default:null,validator:p}})),w=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},b=d("alignContent",(function(){return{type:String,default:null,validator:w}})),v={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(b)},g={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,r){var n=g[t];if(null!=r){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(r),n.toLowerCase()}}var m=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l}},f),{},{justify:{type:String,default:null,validator:p}},h),{},{alignContent:{type:String,default:null,validator:w}},b),render:function(t,e){var r=e.props,a=e.data,s=e.children,o="";for(var c in r)o+=String(r[c]);var u=m.get(o);return u||function(){var t,e;for(e in u=[],v)v[e].forEach((function(t){var n=r[t],a=_(e,t,n);a&&u.push(a)}));u.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n["a"])(t,"align-".concat(r.align),r.align),Object(n["a"])(t,"justify-".concat(r.justify),r.justify),Object(n["a"])(t,"align-content-".concat(r.alignContent),r.alignContent),t)),m.set(o,u)}(),t(r.tag,Object(i["a"])(a,{staticClass:"row",class:u}),s)}})},"35ca":function(t,e,r){"use strict";var n=r("7424");e["a"]={index:function(){return Object(n["a"])().get("users",{})},post:function(t){return Object(n["a"])().post("user",t)},show:function(t){return Object(n["a"])().get("users/".concat(t))},put:function(t,e){return Object(n["a"])().put("user/".concat(e),t)},delete:function(t){return Object(n["a"])().delete("user/".concat(t))}}},3974:function(t,e,r){},"4bd4":function(t,e,r){"use strict";var n=r("5530"),a=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("d3b7"),r("159b"),r("7db0"),r("58df")),s=r("7e2b"),i=r("3206");e["a"]=Object(a["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"636f":function(t,e,r){"use strict";var n=r("7424");e["a"]={index:function(){return Object(n["a"])().get("respondents",{})},post:function(t){return Object(n["a"])().post("respondent",t)},show:function(t){return Object(n["a"])().get("respondents/".concat(t))},put:function(t,e){return Object(n["a"])().put("respondent/".concat(e),t)},delete:function(t){return Object(n["a"])().delete("respondent/".concat(t))}}},c5b9:function(t,e,r){"use strict";var n=r("7424");e["a"]={register:function(t){return Object(n["a"])().post("register",t)},login:function(t){return Object(n["a"])().post("login",t)}}},cf3b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"8"}},[r("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[r("div",{staticClass:"display-2 font-weight-light"},[t._v(" Change Password ")]),r("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Enter your curent and new password ")])]},proxy:!0}])},[r("v-form",[r("v-container",{staticClass:"py-0"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{staticClass:"purple-input",attrs:{label:"Current Password"},model:{value:t.current_password,callback:function(e){t.current_password=e},expression:"current_password"}})],1),r("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"6"}},[r("v-text-field",{staticClass:"purple-input",attrs:{label:"New Password"},model:{value:t.new_password_first,callback:function(e){t.new_password_first=e},expression:"new_password_first"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{staticClass:"purple-input",attrs:{label:"New Password"},model:{value:t.new_password_second,callback:function(e){t.new_password_second=e},expression:"new_password_second"}})],1),r("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[r("div",{staticClass:"error1",staticStyle:{float:"left"},domProps:{innerHTML:t._s(t.error)}}),r("v-btn",{staticClass:"mr-0",attrs:{color:"success"},on:{click:t.saveUpdatedUserPassword}},[t._v(" Update Profile ")])],1)],1)],1)],1)],1)],1)],1)],1)},a=[],s=r("1da1"),i=(r("96cf"),r("35ca")),o=r("636f"),c=r("c5b9"),u=r("c0d6"),d={data:function(){return{current_password:this.current_password,new_password_first:this.new_password_first,new_password_second:this.new_password_second,error:null,userID:this.$store.state.user.id,rules:{required:function(t){return!!t||"Required."}}}},methods:{saveUpdatedUserPassword:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.new_password_first===t.new_password_second){e.next=5;break}return t.error="newly entred passwords do not match",e.abrupt("return");case 5:return t.error=null,e.prev=6,e.next=9,c["a"].login({email:t.$store.state.user.email,password:t.current_password});case 9:if(r=e.sent,!r){e.next=32;break}if(824!=u["a"].state.userRoleId){e.next=23;break}return e.prev=12,e.next=15,i["a"].put({password:t.new_password_first},t.userID);case 15:t.$router.push({name:"Dashboard"}),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](12),t.error=e.t0.response.data.error;case 21:e.next=32;break;case 23:return e.prev=23,e.next=26,o["a"].put({password:t.new_password_first},t.userID);case 26:t.$router.push({name:"Dashboard"}),e.next=32;break;case 29:e.prev=29,e.t1=e["catch"](23),t.error=e.t1.response.data.error;case 32:e.next=37;break;case 34:e.prev=34,e.t2=e["catch"](6),t.error=e.t2.response.data.error;case 37:case"end":return e.stop()}}),e,null,[[6,34],[12,18],[23,29]])})))()}}},l=d,f=(r("db6e"),r("2877")),p=r("6544"),h=r.n(p),w=r("8336"),b=r("62ad"),v=r("a523"),g=r("4bd4"),_=r("0fd9"),m=r("8654"),j=Object(f["a"])(l,n,a,!1,null,"2c63e3e6",null);e["default"]=j.exports;h()(j,{VBtn:w["a"],VCol:b["a"],VContainer:v["a"],VForm:g["a"],VRow:_["a"],VTextField:m["a"]})},db6e:function(t,e,r){"use strict";r("3974")}}]);
//# sourceMappingURL=chunk-8b00eec6.3ff5a22b.js.map