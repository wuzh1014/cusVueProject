webpackJsonp([9],{217:function(t,e,n){function r(t){n(304)}var o=n(96)(n(275),n(328),r,"data-v-599bc30a",null);t.exports=o.exports},223:function(t,e,n){"use strict";e.__esModule=!0;var r=n(97),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var c=e[i](a),u=c.value}catch(t){return void n(t)}if(!c.done)return o.default.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}},224:function(t,e,n){t.exports=n(225)},225:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(226),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},226:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(r||[]);return a._invoke=l(t,n,c),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(n,o,i,a){var c=r(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&m.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=_;return function(i,a){if(o===E)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=s(c,n);if(u){if(u===T)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===_)throw o=k,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=E;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?k:L,l.arg===T)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=k,n.method="throw",n.arg=l.arg)}}}function s(t,e){var n=t.iterator[e.method];if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,s(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,T;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=g,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:g,done:!0}}var g,A=Object.prototype,m=A.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},b=y.iterator||"@@iterator",w=y.asyncIterator||"@@asyncIterator",C=y.toStringTag||"@@toStringTag",x="object"==typeof t,B=e.regeneratorRuntime;if(B)return void(x&&(t.exports=B));B=e.regeneratorRuntime=x?t.exports:{},B.wrap=n;var _="suspendedStart",L="suspendedYield",E="executing",k="completed",T={},O={};O[b]=function(){return this};var P=Object.getPrototypeOf,F=P&&P(P(p([])));F&&F!==A&&m.call(F,b)&&(O=F);var N=a.prototype=o.prototype=Object.create(O);i.prototype=N.constructor=a,a.constructor=i,a[C]=i.displayName="GeneratorFunction",B.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},B.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,C in t||(t[C]="GeneratorFunction")),t.prototype=Object.create(N),t},B.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[w]=function(){return this},B.AsyncIterator=u,B.async=function(t,e,r,o){var i=new u(n(t,e,r,o));return B.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(N),N[C]="Generator",N[b]=function(){return this},N.toString=function(){return"[object Generator]"},B.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},B.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=g),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;f(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),T}}}(function(){return this}()||Function("return this")())},227:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i});var r=void 0,o=void 0,i=void 0;r="https://api.iclient.ifeng.com/",o="https://api.3g.ifeng.com/",i="http://comment.ifeng.com/"},228:function(t,e,n){"use strict";n.d(e,"g",function(){return a}),n.d(e,"f",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return f});var r=n(98),o=n.n(r),i=(n(52),n(227)),a=function(t,e){return o.a.post("http://express.aoie.ren"+t,e)},c=function(t,e,n){return o.a.post(i.a+"ClientNews?id="+t+"&page="+e+"&gv="+n)},u=function(t){return o.a.get(i.b+t)},l=function(t,e){return o.a.get(i.c+"/get?job=1&orderby=uptimes&order=DESC&p="+t+"&docurl="+e)},s=function(t){return o.a.post(i.a+t)},h=function(t){return o.a.post(i.a+"api_phoenixtv_details?guid="+t)},f=function(t,e){return o.a.post(i.c+"/get?job=1&order=DESC&orderBy=create_time&p="+t+"&docurl="+e)}},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"head",data:function(){return{}},props:["headTitle","hideNumFlag","addTypeFlag"],methods:{routerto:function(t){this.$router.go(-1)},comfirmPage:function(t){this.$emit("comfirmPage")},showTitle:function(t){this.hideNumFlag||this.$emit("showTitle")},printPaper:function(){window.print()},toList:function(){this.$router.push("/billList")}}}},244:function(t,e,n){e=t.exports=n(210)(!0),e.push([t.i,".clearfix[data-v-8cf50ed4]{clear:both}.head-other[data-v-8cf50ed4]{position:fixed;z-index:2;left:0;top:0;width:100%;height:.8rem;line-height:1.093333rem;background-color:#ecf5fd;text-align:center}.head-other el-button[data-v-8cf50ed4]{font-size:.2rem}.head-other .head-back[data-v-8cf50ed4],.head-other .head-go[data-v-8cf50ed4],.head-other head-base[data-v-8cf50ed4]{position:fixed;top:.133333rem;display:inline-block;line-height:.5rem}.head-other .head-back[data-v-8cf50ed4]{left:.133333rem}.head-other .head-go[data-v-8cf50ed4]{right:.133333rem}.head-other .head-title[data-v-8cf50ed4]{min-height:.373333rem;min-width:5.333333rem;line-height:.373333rem;display:inline-block;color:#000;font-size:.4rem;cursor:pointer}","",{version:3,sources:["D:/OneDrives/OneDrive/vue-sports/src/components/paper/head.vue"],names:[],mappings:"AAAA,2BACE,UAAY,CACb,AAED,6BACE,eAAgB,AAChB,UAAW,AACX,OAAQ,AACR,MAAO,AACP,WAAY,AACZ,aAAe,AACf,wBAAyB,AACzB,yBAA0B,AAC1B,iBAAmB,CACpB,AAED,uCACE,eAAkB,CACnB,AAED,qHAGE,eAAgB,AAChB,eAAiB,AACjB,qBAAsB,AACtB,iBAAoB,CACrB,AAED,wCACE,eAAkB,CACnB,AAED,sCACE,gBAAmB,CACpB,AAED,yCACE,sBAAwB,AACxB,sBAAuB,AACvB,uBAAyB,AACzB,qBAAsB,AACtB,WAAY,AACZ,gBAAkB,AAClB,cAAgB,CACjB",file:"head.vue",sourcesContent:[".clearfix[data-v-8cf50ed4] {\n  clear: both;\n}\n\n.head-other[data-v-8cf50ed4] {\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  line-height: 1.093333rem;\n  background-color: #ECF5FD;\n  text-align: center;\n}\n\n.head-other el-button[data-v-8cf50ed4] {\n  font-size: 0.2rem;\n}\n\n.head-other head-base[data-v-8cf50ed4],\n.head-other .head-back[data-v-8cf50ed4],\n.head-other .head-go[data-v-8cf50ed4] {\n  position: fixed;\n  top: 0.133333rem;\n  display: inline-block;\n  line-height: 0.5rem;\n}\n\n.head-other .head-back[data-v-8cf50ed4] {\n  left: 0.133333rem;\n}\n\n.head-other .head-go[data-v-8cf50ed4] {\n  right: 0.133333rem;\n}\n\n.head-other .head-title[data-v-8cf50ed4] {\n  min-height: 0.373333rem;\n  min-width: 5.333333rem;\n  line-height: 0.373333rem;\n  display: inline-block;\n  color: #000;\n  font-size: 0.4rem;\n  cursor: pointer;\n}"],sourceRoot:""}])},245:function(t,e,n){var r=n(244);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(211)("508596a1",r,!0)},246:function(t,e,n){function r(t){n(245)}var o=n(96)(n(239),n(247),r,"data-v-8cf50ed4",null);t.exports=o.exports},247:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-header",[n("el-row",{staticClass:"head-other",on:{click:t.showTitle}},[n("div",{staticClass:"head-back"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.routerto}},[t._v("返回")])],1),t._v(" "),n("div",{staticClass:"head-title",on:{click:t.showTitle}},[t._v(t._s(t.headTitle))]),t._v(" "),n("div",{staticClass:"head-go"},[0==t.hideNumFlag?n("el-button",{attrs:{type:"success",round:""},on:{click:t.comfirmPage}},[t._v("保存")]):t._e(),t._v(" "),1==t.hideNumFlag?n("el-button",{attrs:{type:"danger",round:""},on:{click:t.printPaper}},[t._v("打印")]):t._e(),t._v(" "),1==t.hideNumFlag?n("el-button",{attrs:{type:"info",round:""},on:{click:t.comfirmPage}},[t._v("编辑")]):t._e(),t._v(" "),1==t.hideNumFlag?n("el-button",{attrs:{type:"success",round:""},on:{click:t.toList}},[t._v("订单列表")]):t._e(),t._v(" "),1==t.addTypeFlag?n("el-button",{attrs:{type:"info",round:""},on:{click:t.comfirmPage}},[t._v("新增")]):t._e()],1)])],1)},staticRenderFns:[]}},275:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(224),o=n.n(r),i=n(223),a=n.n(i),c=n(246),u=n.n(c),l=n(228);e.default={name:"billList",data:function(){return{titleName:"订单列表",billList:[],pageSize:10,current:1,pageCount:0,pageTotal:0}},watch:{},created:function(){this.getBillList()},methods:{getBillList:function(){var t=this;return a()(o.a.mark(function e(){var r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t,i=n.i(l.g)("/product/getBillList",{pageTotal:t.pageTotal,pageSize:t.pageSize,current:t.current}),i.then(function(t){if(t.data.code){var e=t.data.billList;for(var n in e)e[n].createTime?(e[n].createTime=new Date(e[n].createTime),e[n].createTime=e[n].createTime.getFullYear()+"年"+e[n].createTime.getMonth()+"月"+e[n].createTime.getDate()+"日 "+e[n].createTime.getHours()+":"+e[n].createTime.getMinutes()):e.createTime="";r.billList=e,r.pageTotal=t.data.count}});case 3:case"end":return e.stop()}},e,t)}))()},deleteBill:function(t,e){var r=this;return a()(o.a.mark(function i(){return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:t.stopPropagation(),r.$confirm("此操作将删除该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=r;n.i(l.g)("/product/deleteBillPhy",{uid:e}).then(function(e){e.data.code&&(t.$message({type:"success",message:"删除成功!"}),t.getBillList())})}).catch(function(){r.$message({type:"info",message:"已取消"})});case 2:case"end":return o.stop()}},i,r)}))()},toPaper:function(t){this.$router.push({path:"/main/paper",query:{contentId:t.uid,hideNumFlag:1}})},currentChange:function(t){this.current=t,this.getBillList()}},components:{headTop:u.a}}},288:function(t,e,n){e=t.exports=n(210)(!0),e.push([t.i,".clearfix[data-v-599bc30a]{clear:both}.billList[data-v-599bc30a]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;background-color:#fff;overflow:auto}.billList .box[data-v-599bc30a]{width:100%;height:100%;overflow:auto}","",{version:3,sources:["D:/OneDrives/OneDrive/vue-sports/src/components/paper/billList.vue"],names:[],mappings:"AAAA,2BACE,UAAY,CACb,AAED,2BACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,UAAW,AACX,sBAAuB,AACvB,aAAe,CAChB,AAED,gCACE,WAAY,AACZ,YAAa,AACb,aAAe,CAChB",file:"billList.vue",sourcesContent:[".clearfix[data-v-599bc30a] {\n  clear: both;\n}\n\n.billList[data-v-599bc30a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  background-color: #fff;\n  overflow: auto;\n}\n\n.billList .box[data-v-599bc30a] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}"],sourceRoot:""}])},304:function(t,e,n){var r=n(288);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(211)("4980b1aa",r,!0)},328:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"billList"},[n("headTop",{attrs:{headTitle:t.titleName}}),t._v(" "),n("div",{staticClass:"box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.billList},on:{"row-click":t.toPaper}},[n("el-table-column",{attrs:{prop:"uid",label:"订单号"}}),t._v(" "),n("el-table-column",{attrs:{prop:"titleName",label:"订单名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"地址"}}),t._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"手机"}}),t._v(" "),n("el-table-column",{attrs:{prop:"prize",label:"合计"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:"开单时间",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.deleteBill(n,e.row.uid)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-pagination",{attrs:{"page-size":t.pageSize,"page-count":t.pageCount,"current-page":t.current,layout:"prev, pager, next",total:t.pageTotal},on:{"current-change":t.currentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.ba15bf87381397964990.js.map