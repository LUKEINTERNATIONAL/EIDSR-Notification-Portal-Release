(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ef37fdf"],{"1f4f":function(t,e,n){"use strict";var a=n("5530"),r=(n("a9e3"),n("8b37"),n("80d2")),i=n("7560"),o=n("58df");e["a"]=Object(o["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,n){},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("6b75");function r(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");n("d9e2");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||Object(o["a"])(t)||s()}},"5c00":function(t,e,n){"use strict";var a=n("7424");e["a"]={index:function(){return Object(a["a"])().get("roles",{})},post:function(t){return Object(a["a"])().post("role",t)},show:function(t){return Object(a["a"])().get("roles/".concat(t))},put:function(t,e){return Object(a["a"])().put("role/".concat(e),t)},delete:function(t){return Object(a["a"])().delete("role/".concat(t))}}},"636f":function(t,e,n){"use strict";var a=n("7424");e["a"]={index:function(){return Object(a["a"])().get("respondents",{})},post:function(t){return Object(a["a"])().post("respondent",t)},show:function(t){return Object(a["a"])().get("respondents/".concat(t))},put:function(t,e){return Object(a["a"])().put("respondent/".concat(e),t)},delete:function(t){return Object(a["a"])().delete("respondent/".concat(t))}}},"8b37":function(t,e,n){},"8d91":function(t,e,n){"use strict";n("e194")},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function r(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,r=n.data,i=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,i)}})}var i=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,r=e.data,o=e.children,s=r.attrs;return s&&(r.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})},e194:function(t,e,n){},ebb8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"regular-tables",fluid:"",tag:"section"}},[n("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"",title:""},scopedSlots:t._u([{key:"heading",fn:function(){return[n("div",{staticClass:"clip-b font-weight-light"},[n("v-icon",[t._v("mdi-clipboard-text")])],1),n("div",{staticClass:"font-weight-light",staticStyle:{float:"right","margin-top":"-60px"}},[n("v-btn",{attrs:{elevation:"2",fab:""},on:{click:function(e){return t.navigateTo({name:"Add Respondent"})}}},[n("v-icon",[t._v("mdi-account-plus")])],1)],1)]},proxy:!0}])},[n("v-simple-table",[n("thead",[n("tr",[n("th",{staticClass:"primary--text"},[t._v(" ID ")]),n("th",{staticClass:"primary--text"},[t._v(" Name ")]),n("th",{staticClass:"primary--text"},[t._v(" Role ")]),n("th",{staticClass:"primary--text"},[t._v(" Phone (primary) ")]),n("th",{staticClass:"primary--text"},[t._v(" Phone (secondary) ")]),n("th",{staticClass:"primary--text"},[t._v(" Email ")]),n("th",{staticClass:"primary--text"})])]),n("tbody",t._l(t.respondents,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.role))]),n("td",[t._v(t._s(e.phone1))]),n("td",[t._v(t._s(e.phone2))]),n("td",[t._v(t._s(e.email))]),n("td",{staticClass:"action-edit-btn"},[n("v-btn",{staticStyle:{"background-color":"#5757e7"},attrs:{elevation:"3",fab:""},on:{click:function(n){return t.navigateTo({name:"Edit Respondent"},e.id)}}},[n("v-icon",[t._v("mdi-account-edit")])],1),n("v-btn",{staticStyle:{"margin-left":"33px","background-color":"#e46048"},attrs:{elevation:"3",fab:""},on:{click:function(n){return t.removeRespondent(e.id)}}},[n("v-icon",[t._v("mdi-account-remove")])],1)],1)])})),0)])],1),n("div",{staticClass:"py-3"})],1)},r=[],i=n("2909"),o=n("1da1"),s=(n("d81d"),n("96cf"),n("636f")),c=(n("5c00"),{components:{},data:function(){return{respondents:[]}},methods:{navigateTo:function(t,e){this.$store.dispatch("setRespondentIdEdit",e),this.$router.push(t)},removeRespondent:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Do you really want to delete?")){n.next=11;break}return n.prev=1,n.next=4,s["a"].delete(t);case 4:a=n.sent.data,a&&e.$router.go(e.$router.currentRoute),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$loading.show({container:t.fullPage?null:t.$refs.formContainer,canCancel:!1,loader:"spinner",width:100,height:64}),e.next=3,s["a"].index();case 3:a=e.sent.data,a&&(a.map((function(e){var n,a=e.role_name,r=e.Respondents.map((function(t){return{id:t.id,name:t.first_name+" "+t.last_name,phone1:t.phone_pri,phone2:t.phone_sec,role:a,email:t.email}}));return(n=t.respondents).push.apply(n,Object(i["a"])(r)),r})),n.hide());case 5:case"end":return e.stop()}}),e)})))()}}),d=c,u=(n("8d91"),n("2877")),l=n("6544"),p=n.n(l),f=n("8336"),h=n("a523"),v=n("132d"),b=n("1f4f"),m=Object(u["a"])(d,a,r,!1,null,"3e7c0450",null);e["default"]=m.exports;p()(m,{VBtn:f["a"],VContainer:h["a"],VIcon:v["a"],VSimpleTable:b["a"]})}}]);
//# sourceMappingURL=chunk-5ef37fdf.c7dbbb83.js.map