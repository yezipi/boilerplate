// { "framework": "Vue" }
!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){var o,i,r=[];r.push(n(155)),o=n(156);var u=n(157);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,i._scopeId="data-v-39d3e99e",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o,e.exports.el="true",new Vue(e.exports)},155:function(e,t){e.exports={text:{fontSize:50,textAlign:"center",color:"#41B883"}}},156:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{placeholder:{default:""},placeholder_color:{default:"#ffffff"},color:{default:"#000000"},value:{default:""},type:{type:String,default:"text"},font_size:{default:20},autofocus:{default:!1},return_key_type:{default:"defalut"}},data:function(){return{pulldistance:180,visiable:!0}},methods:{onchange:function(e){this.visiable=""==!e.value,this.value=e.value},onfocus:function(){this.$emit("focus")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur(),this.$emit("blur")},oninput:function(e){this.value=e.value,this.visiable=""!=e.value,this.$emit("onchange",e.value)},onreturn:function(e){this.$emit("return",e)},onclose:function(){this.value="",this.visiable=!1,this.$emit("onchange","")}},created:function(){var e=weex.requireModule("globalEvent");e.addEventListener("onPageInit",function(e){}),this.visiable=""==!this.value},ready:function(){}},e.exports=t.default},157:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{flexDirection:"row",height:"100",alignItems:"center"}},[n("input",{ref:"input",staticStyle:{flex:"1",paddingLeft:"20",height:"100"},style:{color:e.color,"placeholder-color":e.placeholder_color},attrs:{returnKeyType:e.return_key_type,autofocus:e.autofocus,placeholder:e.placeholder,type:e.type,value:e.value},on:{return:e.onreturn,focus:e.onfocus,change:e.onchange,input:[function(t){e.value=t.target.attr.value},e.oninput]}}),e.visiable?n("div",{staticStyle:{width:"50px",height:"100px",marginRight:"10",alignItems:"center",justifyContent:"center"},on:{click:function(t){e.onclose()}}},[n("image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"root:img/delete.png"}})]):e._e()])},staticRenderFns:[]}}});