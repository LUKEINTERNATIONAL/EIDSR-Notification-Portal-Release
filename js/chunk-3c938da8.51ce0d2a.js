(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c938da8"],{"01af":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"typography",fluid:"",tag:"section"}},[e("base-v-component",{attrs:{heading:"Typography",link:"styles/typography"}}),e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("base-material-card",{attrs:{color:"green"},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" Material Dashboard Heading ")]),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Created using Roboto Font Family ")])]},proxy:!0}])},[e("v-card-text",[e("v-container",{staticClass:"pa-0",attrs:{fluid:""}},t._l(t.typography,(function(a,n){return e("v-row",{key:n,attrs:{align:"center"}},[e("v-col",{attrs:{cols:"1",md:"3"}},[e("span",{staticClass:"tim-note",domProps:{textContent:t._s(a[0])}})]),e("v-col",{attrs:{cols:"8"}},[e(a[2],{tag:"component",class:n},["quote"!==n?[t._v(" "+t._s(a[1])+" ")]:t._e(),"quote"===n?e("p",[t._v(" "+t._s(a[1])+" ")]):t._e(),"quote"===n?e("small",[t._v("Kanye West, Musician")]):t._e(),"small"===n?[e("br"),e("small",[t._v("Use 'small' tag for the headers")])]:t._e()],2)],1)],1)})),1)],1)],1)],1)],1)],1)},r=[],i="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",s=i.slice(0,105)+"...",o="The Life of Material Dashboard",l="Header with small subtitle",c={data:function(){return{typography:{"display-4":["Display 4",o,"h1"],"display-3":["Display 3",o,"h2"],"display-2":["Display 2",o,"h3"],"display-1":["Display 1",o,"h4"],headline:["Headline",o,"h5"],"title text-uppercase":["Title",o,"h6"],"":["Paragraph",i,"p"],blockquote:["Quote",i,"blockquote"],"text--disabled":["Muted Text",s,"p"],"primary--text":["Primary Text",s,"p"],"info--text":["Info Text",s,"p"],"success--text":["Success Text",s,"p"],"warning--text":["Warning Text",s,"p"],"danger--text":["Danger Text",s,"p"],small:["Small Tag",l,"h2"]}}}},u=c,d=(e("9e3e"),e("2877")),p=e("6544"),f=e.n(p),g=e("99d9"),y=e("62ad"),h=e("a523"),b=e("0fd9"),v=Object(d["a"])(u,n,r,!1,null,null,null);a["default"]=v.exports;f()(v,{VCardText:g["b"],VCol:y["a"],VContainer:h["a"],VRow:b["a"]})},"066c":function(t,a,e){},"0fd9":function(t,a,e){"use strict";var n=e("ade3"),r=e("5530"),i=(e("d3b7"),e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),s=e("d9f7"),o=e("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,a){return l.reduce((function(e,n){return e[t+Object(o["x"])(n)]=a(),e}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},p=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:f}})),y=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:y}})),b={align:Object.keys(p),justify:Object.keys(g),alignContent:Object.keys(h)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,a,e){var n=v[t];if(null!=e){if(a){var r=a.replace(t,"");n+="-".concat(r)}return n+="-".concat(e),n.toLowerCase()}}var j=new Map;a["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p),{},{justify:{type:String,default:null,validator:f}},g),{},{alignContent:{type:String,default:null,validator:y}},h),render:function(t,a){var e=a.props,r=a.data,i=a.children,o="";for(var l in e)o+=String(e[l]);var c=j.get(o);return c||function(){var t,a;for(a in c=[],b)b[a].forEach((function(t){var n=e[t],r=m(a,t,n);r&&c.push(r)}));c.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),j.set(o,c)}(),t(e.tag,Object(s["a"])(r,{staticClass:"row",class:c}),i)}})},"20f6":function(t,a,e){},"9e3e":function(t,a,e){"use strict";e("066c")},a523:function(t,a,e){"use strict";e("4de4"),e("d3b7"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var n=e("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,r=e.data,i=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,i)}})}var i=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,r=a.data,s=a.children,o=r.attrs;return o&&(r.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),s)}})}}]);
//# sourceMappingURL=chunk-3c938da8.51ce0d2a.js.map