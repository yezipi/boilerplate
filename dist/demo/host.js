// { "framework": "Vue" }
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){var i,o,r=[];r.push(n(181)),i=n(182);var s=n(183);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-33e01a7f",o.style=o.style||{},r.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},181:function(t,e){t.exports={title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24}}},182:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",index:0,items:["../../busi/tab/mainpage.js","../../busi/tab/serial.js","../../busi/tab/movie.js","../../busi/tab/collection.js"]},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},change:function(t){this.index=t},show:function(){var t=weex.requireModule("modal"),e=weex.config.env.osVersion;e=e.replace(/\./g,""),t.alert({message:e})}},created:function(){var t=weex.requireModule("globalEvent");t.addEventListener("onPageInit",function(t){var e=weex.requireModule("navbar");e.hide()})}},t.exports=e.default},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{flex:"1"}},[n("host",{staticStyle:{position:"absolute",left:"0",top:"0",right:"0",bottom:"100"},attrs:{index:t.index,items:t.items}}),n("div",{staticStyle:{height:"100",width:"750",position:"absolute",bottom:"0",left:"0",right:"0",flexDirection:"row",backgroundColor:"#0088fb"}},[n("div",{staticStyle:{flex:"1",alignItems:"center",justifyContent:"center"},on:{click:function(e){t.change(0)}}},[n("text",[t._v("推荐")])]),n("div",{staticStyle:{flex:"1",alignItems:"center",justifyContent:"center"},on:{click:function(e){t.change(1)}}},[n("text",[t._v("电视剧")])]),n("div",{staticStyle:{flex:"1",alignItems:"center",justifyContent:"center"},on:{click:function(e){t.change(2)}}},[n("text",[t._v("电影")])]),n("div",{staticStyle:{flex:"1",alignItems:"center",justifyContent:"center"},on:{click:function(e){t.change(3)}}},[n("text",[t._v("收藏")])])])],1)},staticRenderFns:[]}}});