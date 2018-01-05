// { "framework": "Vue" }
!function(t){function e(o){if(i[o])return i[o].exports;var a=i[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o,a,r=[];r.push(i(188)),r.push(i(189)),o=i(190);var s=i(191);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-de97ab00",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)},117:function(t,e,i){var o,a,r=[];r.push(i(118)),r.push(i(119)),o=i(120);var s=i(121);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,a._scopeId="data-v-9a3f0db8",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=o},118:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},119:function(t,e){t.exports={layout:{backgroundColor:"#333333",height:128,width:750,flexDirection:"row",alignItems:"center",justifyContent:"center"}}},120:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},back:{default:!0},bgcolor:{default:"#222222"},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:128},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){var t=weex.requireModule("navigator");t.back(),this.$emit("backClick")},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var t=weex.config.env.osVersion;t=t.replace(/\./g,""),t.length<3&&(t+="0"),t<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}},t.exports=e.default},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["layout"],style:{"background-color":t.bgcolor,height:t.height}},[i("div",{staticStyle:{flexDirection:"row"},style:{top:t.titletop}},[t.isloading?i("div",{staticStyle:{height:"40",width:"40",marginRight:"10"}}):t._e(),i("text",{staticStyle:{flex:"1",color:"#ffffff",textAlign:"center",fontSize:"38"},on:{click:t.titleClick}},[t._v(t._s(t.title))]),t.isloading?i("floading",{staticStyle:{height:"40",width:"40",marginLeft:"10",marginTop:"5"},attrs:{color:"#ffffff",loadingStyle:"small"}}):t._e()],1),t.back?i("div",{staticStyle:{width:"200",top:"40",position:"absolute",left:"0"},style:{height:t.height,top:t.top},on:{click:t.backTo}},[i("image",{staticStyle:{width:"80",height:"80"},attrs:{src:"root:img/back.png"}})]):t._e(),i("div",{staticStyle:{width:"200",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:t.height},on:{click:t.rightclick}},[t._t("right")],2),i("div",{staticStyle:{height:"1",backgroundColor:"#111111",position:"absolute",bottom:"0",left:"0",right:"0"}})])},staticRenderFns:[]}},188:function(t,e){t.exports={it:{width:700,height:100,marginTop:10,borderColor:"#006ce7",borderWidth:1,borderRadius:10}}},189:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:200,marginTop:50,borderRadius:10,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},190:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(117),a=weex.requireModule("globalEvent");a.addEventListener("onPageInit",function(t){var e=weex.requireModule("navbar");e.setTitle("网络请求");weex.requireModule("navigator")}),e.default={components:{head:o},data:function(){return{back:""}},methods:{read:function(){var t=this,e=weex.requireModule("addressBook");e.read(function(e){t.back=e})}},created:function(){}},t.exports=e.default},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroller",[i("div",{staticStyle:{alignItems:"center"}},[i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}}),i("input",{staticClass:["it"],attrs:{placeholder:"姓名"}})])])}]}}});