// { "framework": "Vue" }
!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o,n,a=[];a.push(i(237)),o=i(238);var r=i(239);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-366e8c85",n.style=n.style||{},a.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),t.exports=o,t.exports.el="true",new Vue(t.exports)},117:function(t,e,i){var o,n,a=[];a.push(i(118)),a.push(i(119)),o=i(120);var r=i(121);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,n._scopeId="data-v-9a3f0db8",n.style=n.style||{},a.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,a),t.exports=o},118:function(t,e){t.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},119:function(t,e){t.exports={layout:{backgroundColor:"#333333",height:128,width:750,flexDirection:"row",alignItems:"center",justifyContent:"center"}}},120:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},back:{default:!0},bgcolor:{default:"#222222"},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:128},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){var t=weex.requireModule("navigator");t.back(),this.$emit("backClick")},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var t=weex.config.env.osVersion;t=t.replace(/\./g,""),t.length<3&&(t+="0"),t<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}},t.exports=e.default},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["layout"],style:{"background-color":t.bgcolor,height:t.height}},[i("div",{staticStyle:{flexDirection:"row"},style:{top:t.titletop}},[t.isloading?i("div",{staticStyle:{height:"40",width:"40",marginRight:"10"}}):t._e(),i("text",{staticStyle:{flex:"1",color:"#ffffff",textAlign:"center",fontSize:"38"},on:{click:t.titleClick}},[t._v(t._s(t.title))]),t.isloading?i("floading",{staticStyle:{height:"40",width:"40",marginLeft:"10",marginTop:"5"},attrs:{color:"#ffffff",loadingStyle:"small"}}):t._e()],1),t.back?i("div",{staticStyle:{width:"200",top:"40",position:"absolute",left:"0"},style:{height:t.height,top:t.top},on:{click:t.backTo}},[i("image",{staticStyle:{width:"80",height:"80"},attrs:{src:"root:img/back.png"}})]):t._e(),i("div",{staticStyle:{width:"200",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:t.height},on:{click:t.rightclick}},[t._t("right")],2),i("div",{staticStyle:{height:"1",backgroundColor:"#111111",position:"absolute",bottom:"0",left:"0",right:"0"}})])},staticRenderFns:[]}},237:function(t,e){t.exports={text:{fontSize:50},btn:{backgroundColor:"#0085ee",height:100,marginTop:50,marginLeft:50,marginRight:50,borderRadius:10,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},238:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(117);e.default={components:{head:o},data:function(){return{text:"",param:"",data:{}}},methods:{save:function(){var t=weex.requireModule("static");t.setString("key",11111);var e=weex.requireModule("modal");e.toast({message:"存储成功"})},get:function(){var t=weex.requireModule("static"),e=t.getString("key"),i=weex.requireModule("modal");i.toast({message:"存储成功的值:"+e})},saveObj:function(){var t=weex.requireModule("static"),e={};e.a=1,e.b=2,t.set("objkey",e);var i=weex.requireModule("modal");i.toast({message:"存储成功"})},gonext:function(){var t=weex.requireModule("navigator");t.push("static1.js")},getObj:function(){var t=weex.requireModule("static"),e=t.get("objkey");this.data=e}},created:function(){var t=weex.requireModule("globalEvent");t.addEventListener("onPageInit",function(t){})}},t.exports=e.default},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("head",{appendAsTree:!0,attrs:{title:"内存存储",append:"tree"}}),t._m(0),i("input",{staticStyle:{width:"750",paddingLeft:"10",height:"100",color:"#000000"},attrs:{type:"text",placeholder:"请输入要存储的值",value:t.text},on:{input:function(e){t.text=e.target.attr.value}}}),i("text",{staticStyle:{color:"#ffffff"}},[t._v(t._s(t.data))]),i("div",{staticClass:["btn"],on:{click:t.save}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("存储字符串")])]),i("div",{staticClass:["btn"],on:{click:t.get}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("获取字符串")])]),i("div",{staticClass:["btn"],on:{click:t.saveObj}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("存储对象{a:1}")])]),i("div",{staticClass:["btn"],on:{click:t.getObj}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("获取对象")])]),i("div",{staticClass:["btn"],on:{click:t.gonext}},[i("text",{staticStyle:{color:"#ffffff"}},[t._v("跳转到下一个界面")])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"160",height:"160",borderRadius:"80",marginLeft:"20"}},[i("image",{staticStyle:{borderRadius:"80",position:"absolute",left:"0",right:"0",bottom:"0",top:"0"},attrs:{src:"root:img/cat.png"}})])}]}}});