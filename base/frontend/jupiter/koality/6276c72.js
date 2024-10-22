(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1052:function(e,t,n){"use strict";n.r(t);var r=n(723),c={name:"PageCrawlerDeadLink",components:{Crawler:n(907).a,SegmentHeader:r.a}},l=n(4),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SegmentHeader"),e._v(" "),n("Crawler")],1)}),[],!1,null,null,null);t.default=component.exports},720:function(e,t,n){"use strict";var r=n(724),c=n(1),l=Object(c.b)({name:"Dimensions",data:function(){return{width:null,height:null}},computed:{dimensionObserver:function(){var e=this;return new r.a((function(t){window.requestAnimationFrame((function(){e.width=t[0].contentRect.width,e.height=t[0].contentRect.height}))}))}},mounted:function(){this.dimensionObserver.observe(this.$el)},destroyed:function(){this.dimensionObserver.disconnect()},render:function(){return this.$scopedSlots.default({width:this.width,height:this.height})}}),o=n(4),component=Object(o.a)(l,undefined,undefined,!1,null,null,null);t.a=component.exports},882:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return w}));n(32),n(69),n(81),n(22),n(96);var r=n(1026),c=n(1027),l=n(1076),o=n(908).utcToZonedTime,d=function(e,t){return o(new Date(e),t)},f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"short",c={dateStyle:r,timeStyle:"short"};return d(e,n).toLocaleString(t,c)},w=function(e,t){var n=Object(r.a)(t,e);return n<121?{value:n,unit:"minutes"}:n<2880?{value:Object(c.a)(t,e),unit:"hours"}:{value:Object(l.a)(t,e),unit:"days"}}},887:function(e,t,n){e.exports={}},895:function(e,t,n){var r=n(10),c=n(467),l=n(20),o=n(37),d=n(168).onFreeze,f=Object.freeze;r({target:"Object",stat:!0,forced:l((function(){f(1)})),sham:!c},{freeze:function(e){return f&&o(e)?f(d(e)):e}})},896:function(e,t,n){"use strict";t.a={bigFile:{group:"standard",checklist_name:"_big_file_2",curl_only:!1,name:"crawl._big_file_2.name",desc:"crawl._big_file_2.desc",identifier:"bigFile"},vat:{group:"ecommerce",checklist_name:"mehrwertsteuer_check",curl_only:!0,name:"crawl.mwst.name",desc:"crawl.mwst.desc",identifier:"vat"},deadLink:{group:"standard",checklist_name:"_deadlinks",curl_only:!1,name:"crawl._deadLink.name",desc:"crawl._deadLink.desc",identifier:"deadLink"},brokenResource:{group:"standard",checklist_name:"_brokenResource",curl_only:!1,name:"crawl._brokenResource.name",desc:"crawl._brokenResource.desc",identifier:"brokenResource"}}},906:function(e,t,n){"use strict";n(887)},907:function(e,t,n){"use strict";n(17),n(16),n(27),n(28);var r=n(11),c=n(9),l=(n(25),n(895),n(15),n(40),n(35),n(43),n(59),n(32),n(81),n(19),n(36)),o=n(167),d=n(896),f=n(285),w=n(720),_=n(18),h=(n(291),n(1)),v=(n(68),n(38),n(882)),m={name:"PageCrawlerEntry"};m.props={entry:{type:Object,default:function(){}},header:{type:Array,default:function(){return[]}}},m.setup=function(e,t){var n=e,r=Object(h.o)(),c=Object(h.r)(),l=Object(h.p)(),o=Object(h.l)().i18n,d=r.value.params,f=d.pid,w=d.sid,_=Object(h.a)((function(){return c.getters["access/getTimezone"]}));return{crawlDate:Object(h.a)((function(){return Object(v.b)(n.entry.start_date,o.locale,_.value)})),progress:Object(h.a)((function(){return"running"!==n.entry.status?0:Number(n.entry.result_count/n.entry.crawl_depth*100)})),openEntry:function(){"finished"===n.entry.status&&l.push({path:"/".concat(f,"/").concat(w,"/crawler/crawl/").concat(n.entry.id)})}}},m.components=Object.assign({LoadingSpinner:f.a},m.components);var C=m,y=n(4),j=Object(y.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"text-sm pageCrawler__entry",class:["finished"===e.entry.status?"cursor-pointer hover:bg-gray-200 transition duration-200":"text-gray-500"],on:{click:e.openEntry}},[n("div",{class:"pageCrawler__grid__"+e.header[0]},[n("span",{staticClass:"pageCrawler__entry__listHeader font-bold"},[e._v("\n      "+e._s(e.$t(e.header[0]))+":\n    ")]),e._v("\n    "+e._s(e.crawlDate)+"\n  ")]),e._v(" "),n("div",{class:"pageCrawler__grid__"+e.header[1]},[n("span",{staticClass:"pageCrawler__entry__listHeader font-bold"},[e._v("\n      "+e._s(e.$t(e.header[1]))+":\n    ")]),e._v(" "),n("span",{class:[e.entry.failure>0?"text-error-high":""]},[e._v("\n      "+e._s(e.entry.failure)+"\n    ")])]),e._v(" "),n("div",{class:"pageCrawler__grid__"+e.header[2]},[n("span",{staticClass:"pageCrawler__entry__listHeader font-bold"},[e._v("\n      "+e._s(e.$t(e.header[2]))+":\n    ")]),e._v("\n    "+e._s(e.entry.success+e.entry.failure)+"\n  ")]),e._v(" "),n("div",{class:"pageCrawler__grid__"+e.header[3]},[n("span",{staticClass:"pageCrawler__entry__listHeader font-bold"},[e._v("\n      "+e._s(e.$t(e.header[3]))+":\n    ")]),e._v(" "),"running"===e.entry.status||"queued"===e.entry.status?n("LoadingSpinner",{staticClass:"mr-1",attrs:{size:12,"border-size":1}}):e._e(),e._v(" "),n("span",{staticClass:"font-medium",class:["finished"===e.entry.status?"":"italic"]},[e._v("\n      "+e._s(e.$t("checkStatus"+e.entry.status))+"\n    ")]),e._v(" "),e.progress>0?n("div",{staticClass:"rounded-full overflow-hidden h-1 bg-gray-200 mt-1"},[n("div",{staticClass:"rounded-full h-1 bg-error-low",style:{width:e.progress+"%"}})]):e._e()],1)])}),[],!1,null,null,null).exports,k=Object(h.b)({name:"PageCrawler",components:{PageCrawlerEntry:j,Dimensions:w.a},props:{crawls:{type:Array,default:function(){return[]}}},setup:function(e){return{breakpoint:710,header:["date","foundVatPages","searchedVatPages","status"],sortCrawls:Object(h.a)((function(){return Object(_.a)(e.crawls).sort((function(a,b){return b.start_date-a.start_date}))}))}}}),O=(n(906),Object(y.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Dimensions",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.width;return n("div",{staticClass:"pageCrawler",class:[{"pageCrawler--isSmallList":r<e.breakpoint},{"pageCrawler--isTable":r>=e.breakpoint}]},[n("p",{staticClass:"cHeadline mb-4"},[e._v("\n      "+e._s(e.$t("pastChecks"))+"\n    ")]),e._v(" "),r>=e.breakpoint?n("div",{staticClass:"bg-gray-200 py-3 text-sm uppercase px-4 pageCrawler__grid"},e._l(e.header,(function(head,t){return n("div",{key:t,class:"pageCrawler__grid__"+head},[e._v("\n        "+e._s(e.$t(head))+"\n      ")])})),0):e._e(),e._v(" "),n("ul",{staticClass:"pageCrawler__list  pageCrawler__wrapper"},e._l(e.sortCrawls,(function(t){return n("PageCrawlerEntry",{key:t.id,staticClass:"pageCrawler__grid",attrs:{entry:t,header:e.header}})})),1)])}}])})}),[],!1,null,null,null).exports),x=n(878),S=n(112);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E={name:"Crawler",components:{GeneralButton:n(80).a,Richtext:S.a,InfoBox:x.a,PageCrawler:O,Dimensions:w.a,LoadingSpinner:f.a},data:function(){return{crawlerConfigs:Object.freeze(d.a),crawlerType:"",crawls:null,queryId:null,runningCrawler:!1,projectRunningCrawler:0,loadingState:!0,MarketPlaceConsts:o.c}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$route.params,r=n.pid,c=n.sid,t.next=4,e.$apiClient.getRepository("crawler");case 4:return l=t.sent,t.next=7,l.listCrawls(r,{system:c,checklist_name:e.crawlerConfigs[e.crawlerType].checklist_name});case 7:return e.crawls=t.sent,t.next=10,l.getCrawlerStatus(r);case 10:o=t.sent,e.projectRunningCrawler=o.project.running+o.project.queued,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0.response.data);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()},computed:$($({},Object(l.c)({projectName:"projects/getActualSystemName",actualMaxCrawlDepth:"projects/getActualMaxCrawlDepth",projectRole:"projects/getProjectRole",uid:"access/getUserId",isTrial:"access/getTrialuser",features:"navigation/getCombinedFeatures",sublayout:"navigation/getSublayout",actualSystemSKU:"projects/getActualSystemSKU"})),{},{queueIsRunning:function(){return!!this.crawls&&this.crawls.crawls.filter((function(e){return"running"===e.status||"queued"===e.status})).length>0},buttonDisabled:function(){return this.runningCrawler||this.queueIsRunning||this.projectRunningCrawler>0},generatedCrawlButtons:function(){var e=this;return this.features?[{condition:"FEATURE_CRAWL_DEPTH_2000",depth:2e3},{condition:"FEATURE_CRAWL_DEPTH_5000",depth:5e3},{condition:"unlimited-lite"===this.actualSystemSKU,depth:20},{condition:"basic"===this.actualSystemSKU,depth:100},{condition:"unlimited-lite"!==this.actualSKU,depth:500}].find((function(t){return Object.prototype.hasOwnProperty.call(t,"condition")?!1===t.condition?null:!0===t.condition||e.features.includes(e.MarketPlaceConsts[t.condition])?t:null:t})):[]}}),mounted:function(){var e=this;this.registerWebsocketEvents(),this.crawlerType=this.$route.fullPath.split("/").slice(-1)[0],setTimeout((function(){e.loadingState=!1}),500)},methods:{handleButton:function(e){this.buttonDisabled||this.loadingState||this.initiateCrawler(e)},initiateCrawler:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c,l,o,d,f,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$route.params,c=r.pid,l=r.sid,n.prev=1,n.next=4,t.$apiClient.getRepository("crawler");case 4:return o=n.sent,d=t.crawlerConfigs[t.crawlerType],f=d.checklist_name,w=d.curl_only,n.next=8,o.runCrawl(c,{user:t.uid,checklist_name:f,name:new Date,system:l,curl_only:w,depth:e});case 8:t.runningCrawler=!0,t.$fetch(),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},stopCrawler:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$route.params.pid,r=e.crawls.crawls.filter((function(e){return"running"===e.status||"queued"===e.status})),c=r.length?r[0].id:null){t.next=5;break}return t.abrupt("return");case 5:return e.runningCrawler=0===r.length,t.prev=6,t.next=9,e.$apiClient.getRepository("crawler");case 9:return l=t.sent,t.next=12,l.abortCrawl(n,c);case 12:e.$fetch(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[6,15]])})))()},registerWebsocketEvents:function(){var e=this;this.$nuxt.$on("websocket.crawl.run",(function(t){e.handleWebsocketEvent("crawl.run",t)})),this.$nuxt.$on("websocket.crawl.abort",(function(t){e.handleWebsocketEvent("crawl.abort",t)})),this.$nuxt.$on("websocket.crawl.result",(function(t){e.handleWebsocketEvent("crawl.result",t)})),this.$nuxt.$on("websocket.crawl.finish",(function(t){e.handleWebsocketEvent("crawl.finish",t)}))},handleWebsocketEvent:function(e,t){var n=this,r=JSON.parse(t.attributes);this.crawls.crawls.forEach((function(element){element.id===r.crawl_id&&(element.status=r.crawl_status,element.success=r.crawl_success,element.failure=r.crawl_failure,"crawl.result"===e?element.result_count++:"crawl.finish"===e&&(n.runningCrawler=!1,n.projectRunningCrawler--))}))}}},P=Object(y.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Dimensions",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.width;return n("div",{staticClass:"overflow-hidden -mx-4",class:[r>540?"flex ":""]},[e.projectRunningCrawler>0&&!e.runningCrawler&&!e.queueIsRunning?n("div",[n("InfoBox",[n("Richtext",{attrs:{content:e.$t("crawler.projectRunning")}})],1),e._v(" "),n("br")],1):e._e(),e._v(" "),e.isTrial&&"cpanel"!==e.sublayout?n("div",[n("InfoBox",[n("Richtext",{attrs:{content:e.$t("trial.crawler")}}),e._v(" "),n("div",{staticClass:"relative h-0 mb-5 mt-5",staticStyle:{"padding-top":"56%"}},[n("iframe",{staticClass:"absolute h-full w-full top-0 left-0",attrs:{src:"https://www.youtube.com/embed/etQqMLRzAcs",frameborder:"0",allowfullscreen:"allowfullscreen"}})])],1)],1):e._e()])}}])}),e._v(" "),n("Dimensions",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.width;return n("div",{staticClass:"overflow-hidden -mx-4 transition-all duration-500",class:[r>540?"flex ":""]},[![0,100,200].includes(e.projectRole)||e.isTrial&&"cpanel"!==e.sublayout?e._e():n("div",{class:[r>540?"w-1/2 flex-grow-0":""]},[n("div",{staticClass:"px-4 mb-3 font-medium"},[e._v("\n          "+e._s(e.$t("CrawlWithDepth"))+"\n        ")]),e._v(" "),n("div",{staticClass:"px-4"},[n("div",{staticClass:"md:flex",class:[e.loadingState?"invisible":"visible"]},[n("GeneralButton",{attrs:{size:"px-4 py-2 mr-2","is-disabled":e.loadingState||e.buttonDisabled},nativeOn:{click:function(t){return e.handleButton(e.generatedCrawlButtons.depth)}}},[e._v("\n              "+e._s(e.generatedCrawlButtons.depth)+" URLs\n            ")])],1),e._v(" "),e.runningCrawler||e.queueIsRunning?n("p",{staticClass:"mt-2 font-light text-sm"},[e._v("\n            "+e._s(e.$t("crawlerRunSentence"))+"\n          ")]):e._e()])]),e._v(" "),n("div",{class:[r>540?"w-1/2 flex-grow-0 mt-7":"mt-4"]},[e.runningCrawler||e.queueIsRunning?n("div",{staticClass:"px-4"},[n("GeneralButton",{attrs:{size:"px-4 py-2","color-palette":"caution"},nativeOn:{click:function(t){return e.stopCrawler.apply(null,arguments)}}},[e._v("\n            "+e._s(e.$t("stopAllCrawls"))+"\n          ")]),e._v(" "),n("p",{staticClass:"mt-2 font-light text-sm"},[e._v("\n            "+e._s(e.$t("crawlerStopSentence"))+"\n          ")])],1):e._e()])])}}])}),e._v(" "),n("div",{staticClass:"mt-16"},[e.$fetchState.pending?n("LoadingSpinner",{staticClass:"block",attrs:{size:30}}):e._e(),e._v(" "),!e.$fetchState.pending&&e.crawls.crawls.length?n("div",[n("PageCrawler",{attrs:{crawls:e.crawls.crawls,"crawler-type":e.crawlerType}})],1):e._e()],1)],1)}),[],!1,null,null,null);t.a=P.exports}}]);