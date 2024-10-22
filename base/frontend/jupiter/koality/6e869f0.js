(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{210:function(e,t,n){"use strict";n(68),n(40),n(22),n(31),n(15);var r=n(1),o=Object(r.b)({name:"RLSingleSelect",props:{entries:{type:Array,default:function(){return[]}},startId:{type:[Number,String],default:null},withoutFiltering:{type:Boolean,default:!1}},data:function(){return{openMenuState:!1,actualId:0}},computed:{actualEntry:function(){var e=this;return this.entries.find((function(t){return t.id===e.actualId}))},filterEntries:function(){var e=this;return this.withoutFiltering?this.entries:this.entries.filter((function(t){return t.id!==e.actualId}))}},watch:{startId:function(){this.overwriteId()}},created:function(){this.overwriteId()},methods:{overwriteId:function(){var e=this;if(this.startId){var t=this.entries.find((function(t){return t.id===parseInt(e.startId)}));this.actualId=t?this.startId:this.entries[0].id}else this.actualId=this.entries[0].id;this.filterEntries,this.$emit("actualId",this.actualId)},closeMenu:function(){this.openMenuState=!1},toggleMenu:function(){if(!this.filterEntries.length)return!1;this.openMenuState=!this.openMenuState},selectEntry:function(e){this.actualId=e,this.$emit("sendEntry",e),this.closeMenu()}},render:function(){return this.$scopedSlots.default({menu:{state:this.openMenuState,toggle:this.toggleMenu,close:this.closeMenu},selectEntry:this.selectEntry,filterEntries:this.filterEntries,actualEntry:this.actualEntry})}}),c=n(4),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);t.a=component.exports},443:function(e,t,n){"use strict";n(17),n(16),n(15),n(27),n(19),n(28);var r=n(9),o=n(11),c=(n(25),n(36)),l=n(286);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"SecondScreen",components:{ContentBuilder:n(438).a,IconCancel:l.a},props:{storybook:{type:Boolean,default:!1}},data:function(){return{screenState:!1,responseMessage:null,requestUrl:null,isLoaded:!1}},computed:h(h({},Object(c.c)({screenOpen:"ui/getSecondScreenState",screenUrl:"ui/getSecondScreenUrl",message:"secondScreen/getMessage"})),{},{title:function(){var e,t;return(null===(e=this.responseMessage)||void 0===e?void 0:e.data.headline_infoFrame)||(null===(t=this.responseMessage)||void 0===t?void 0:t.data.title)||""},blocks:function(){var e;return(null===(e=this.responseMessage)||void 0===e?void 0:e.data.blocks)||[]}}),watch:{$route:function(){this.$store.dispatch("ui/clearSecondscreenUrl"),this.screenOpen&&(this.$store.dispatch("ui/closeSecondScreen"),this.isLoaded=!1)},screenOpen:function(){this.checkResponse()}},mounted:function(){this.storybook&&(this.isLoaded=!0,this.checkResponse())},methods:h(h({},Object(c.b)({closeScreen:"ui/closeSecondScreen"})),{},{checkResponse:function(){if(this.screenUrl.length||this.storybook){var e=this.message(this.screenUrl);e?(this.isLoaded=!0,this.responseMessage=e):(this.responseMessage=null,this.getResponse())}},getResponse:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get(e.screenUrl);case 3:data=t.sent,e.responseMessage={data:data.data},e.isLoaded=!0,e.$store.dispatch("secondScreen/addMessage",{url:e.screenUrl,data:data.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),e.$sentry.captureException(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}})},m=n(4),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"secondScreen z-60 fixed h-screen top-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out",class:[{"secondScreen--open":e.screenOpen&&e.isLoaded}],attrs:{"data-cy":"element"}},[n("div",{staticClass:"flex h-screen flex-col"},[n("header",{staticClass:"bg-secondary-regular text-white px-6 flex h-24 items-center justify-between mb-8 flex-grow-0 flex-shrink-0"},[n("h3",{staticClass:"text-2xl font-light",attrs:{"data-cy":"header"}},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("div",{staticClass:"p-1 rounded-full border border-solid border-white cursor-pointer",attrs:{"data-cy":"trigger"},on:{click:e.closeScreen}},[n("IconCancel",{staticClass:"w-4 h-4",attrs:{color:"white"}})],1)]),e._v(" "),n("ContentBuilder",{staticClass:"flex-auto px-6 overflow-y-auto",attrs:{content:e.blocks,"data-cy":"content-builder"}})],1)])}),[],!1,null,null,null);t.a=component.exports},455:function(e,t,n){"use strict";var r=n(9),o=(n(25),n(1)),c=n(294),l=n(67),d=n(288),h=n(287),f=n(50),m={name:"UpsellScreen"};m.props={actualSku:{type:String,default:""}},m.setup=function(e,t){var n=e,c=Object(o.l)().$apiClient,d=t.emit,h=Object(o.r)(),m=Object(o.a)((function(){return h.getters["ui/getUpsellScreenState"]})),O=Object(o.a)((function(){return h.getters["projects/getActualProject"]})),y=Object(o.i)(),v=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getRepository("subscription");case 2:return t=e.sent,e.next=5,t.getSubscriptionProducts();case 5:data=e.sent,y.value=Object(l.c)({products:data.products,currentPlan:n.actualSku});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();v();var j=Object(o.i)(""),k=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,o,code,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=void 0===n?"":n,o=t.code,code=void 0===o?"":o,e.prev=1,e.next=4,c.getRepositoryCollection().then((function(e){return e.getSubscriptionRepository()}));case 4:return l=e.sent,d=location.href,e.next=8,l.updateSubscriptionByProject(O.value,{price_id:r,success_url:d,cancel_url:d,two_factor_code:code});case 8:h=e.sent,window.location.href=h.session.url,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),j.value=e.t0.message,console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),S=Object(o.i)("");return{checkSku:l.a,props:n,screenOpen:m,mergedPlans:y,upgradeError:j,handleUpgrade:k,cancel:function(){d("close")},handleError:function(e){Object(f.a)(e),S.value=e}}},m.components=Object.assign({SideScreen:d.a,PlanComparisonTable:c.a,FormFooter:h.a},m.components);var O=m,y=n(4),component=Object(y.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SideScreen",{key:"upsell",attrs:{"is-open":e.screenOpen},scopedSlots:e._u([{key:"headline",fn:function(){return[n("header",{staticClass:"flex items-center justify-between mb-2 flex-grow-0 flex-shrink-0"},[n("h3",{staticClass:"text-2xl font-light",attrs:{"data-cy":"header"}},[e._v("\n        "+e._s(e.$t("upsellScreenTitle"))+"\n      ")])])]},proxy:!0},{key:"subline",fn:function(){return[n("p",{staticClass:"mb-4",domProps:{innerHTML:e._s(e.$tc("upsellScreenText","",{key:e.checkSku(e.props.actualSku)}))}})]},proxy:!0},e.mergedPlans?{key:"body",fn:function(){return[n("PlanComparisonTable",{key:e.props.actualSku,attrs:{"merged-plans":e.mergedPlans,"actual-sku":e.props.actualSku,type:"upgrade","code-error-upgrade":e.upgradeError},on:{close:e.cancel,error:function(t){return e.handleError(t)},upgrade:function(t){return e.handleUpgrade(t)}}})]},proxy:!0}:null,{key:"footer",fn:function(){return[n("FormFooter",{attrs:{config:"cancelOnly"},on:{cancel:e.cancel}})]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},458:function(e,t,n){"use strict";var r=n(1),o=n(461),c=Object(r.b)({name:"TrialBanner",components:{IconClock:o.a},setup:function(){var e=Object(r.l)().i18n,t=Object(r.r)(),n=Object(r.a)((function(){return t.getters["access/getTrialuser"]})),o=Object(r.a)((function(){return t.getters["access/getDemouser"]})),c=Object(r.a)((function(){return t.getters["access/getRemainTrialTime"]})),l=Object(r.a)((function(){return t.getters["access/getTrialEndTime"]})),d=Object(r.a)((function(){var t="translations"===e.locale?"de":e.locale,n=(new Date).getTime()+1e3*l.value;return new Date(n).toLocaleDateString(t,{})}));return{getTrialuser:n,getDemouser:o,getRemainTime:c,getTrialEndTime:l,trialEndDate:d}}}),l=n(4),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getTrialuser&&!e.getDemouser?n("div",{staticClass:"bg-forth-regular text-black px-2 py-2 rounded"},[n("nuxt-link",{staticClass:"flex gap-3",attrs:{to:"/dashboard/customerDetails",exact:""}},[n("IconClock",{staticClass:"w-10"}),e._v(" "),n("span",{staticClass:"flex flex-col"},[n("span",{staticClass:"text-md mb-0 inline-block"},[e.getRemainTime>0?[e._v("\n          "+e._s(e.$tc("trialTime",e.getRemainTime,{n:e.getRemainTime}))+"\n        ")]:[e._v("\n          "+e._s(e.$t("trialIsOver"))+"\n        ")]],2),e._v(" "),n("span",{staticClass:"text-xs"},[e._v(e._s(e.$tc("trailEndDate","",{date:e.trialEndDate})))])])],1)],1):e._e()}),[],!1,null,null,null);t.a=component.exports},462:function(e,t,n){"use strict";n(16),n(15),n(27),n(28);var r=n(9),o=n(11),c=(n(25),n(32),n(69),n(19),n(17),n(40),n(36)),l=n(142),d=n.n(l);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f=function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))},m={name:"WebSocketHandler",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)({socketResponses:"socket/getQueue"})),watch:{socketResponses:{handler:function(){this.socketResponseHandler()},deep:!0}},mounted:function(){this.$store.dispatch("socket/getSocketData")},methods:{clearQueueEntry:function(e){var t=this,time=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;setTimeout((function(){t.$store.dispatch("socket/deleteQueueEntry",e)}),time)},socketResponseHandler:function(){var e=this;Object.keys(this.socketResponses).forEach((function(t){var n=e.socketResponses[t],r=n.message;switch(e.$nuxt.$emit("websocket."+n.action,n),n.action){case"project.status.change":"open"===r?e.socketProjectChangeOpen(t):e.socketProjectChangeClose(t);break;case"system.component.delete":e.socketComponentDelete(t);break;case"system.component.update":e.socketComponentUpdate(t);break;case"system.component.create":e.socketComponentCreate(t);break;case"system.component.screenshot.create":e.socketComponentCreateScreenshot(t,n.attributes);break;case"component.finder.found":e.componentFinderFound(n.attributes);break;case"component.finder.finish":e.componentFinderFinish(n.attributes);break;case"system.run.full.start":e.socketNewFullRun();break;case"system.run.full.finish":case"system.run.full.finish.first":e.socketFinishRun(t)}}))},socketFinishRun:function(e){this.$route.params.pid===e&&this.$store.dispatch("testrunner/setFirstRun",!1)},socketProjectChangeOpen:d()((function(e){var t=this.$route.params,n=t.sid,r=t.pid;this.$store.dispatch("scores/collectSystemScores",{sid:n,update:!0}),this.$store.dispatch("incidents/collectProjectIncidents",{pid:e,update:!0}),r===e&&this.socketOpenIncident(e)}),8e3),socketProjectChangeClose:d()((function(e){var t=this.$route.params,n=t.sid,r=t.pid;this.$store.dispatch("scores/collectSystemScores",{sid:n,update:!0}),this.$store.dispatch("incidents/collectProjectIncidents",{pid:e,update:!0}),r===e&&this.socketClosedIncident(e)}),8e3),socketOpenIncident:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.socketResponses[e],!(o=!(!r||!r.attributes)&&JSON.parse(r.attributes).last_incident_id)){n.next=16;break}return n.prev=3,n.next=6,t.$apiClient.getRepository("incident");case 6:return c=n.sent,n.next=9,c.find(e,o);case 9:l=n.sent,t.$notify({group:"socketNotificationAreaIncidents",type:"error",title:t.$t("projectStatusChange.open"),text:l.details.message||t.$t("projectStatusChange.openSentence"),data:o,duration:-1,ignoreDuplicates:!0}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),t.$sentry.captureException(n.t0);case 16:t.clearQueueEntry(e);case 17:case"end":return n.stop()}}),n,null,[[3,13]])})))()},socketClosedIncident:function(e){this.$notify({group:"socketNotificationArea",type:"success",title:this.$t("projectStatusChange.close"),text:this.$t("projectStatusChange.closeSentence"),duration:4e3,ignoreDuplicates:!0}),this.clearQueueEntry(e)},socketComponentDelete:function(e){this.notification("componentDeleted",e)},socketComponentUpdate:function(e){this.notification("componentUpdated",e)},socketComponentCreate:function(e){this.notification("componentCreated",e)},socketComponentCreateScreenshot:function(e,t){var n=this.$route.params.sid,r=JSON.parse(t).system_id;this.notification("screenshotCreated",e),parseInt(n)===parseInt(r)&&this.$store.dispatch("screenshots/collect",n)},socketNewFullRun:function(){var e=this.$route.params.sid;e&&this.$store.dispatch("testrunner/initiateRunner",e)},componentFinderFound:function(e){var t=JSON.parse(e);this.$store.dispatch("componentFinder/setRunningFinder",t.run_id),this.$store.dispatch("componentFinder/setComponentFinder",{id:t.run_id,path:t.path,componentIdentifier:t.component_identifier})},componentFinderFinish:function(e){var t=JSON.parse(e);this.$store.dispatch("componentFinder/removeRunningFinder",t.run_id)},notification:function(title,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4e3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"info",r=this.socketResponses[e].message||"";this.$notify({group:"socketNotificationArea",type:n,title:this.$t(title),text:f(r),duration:t,ignoreDuplicates:!0}),this.clearQueueEntry(e)}},render:function(){return null}},O=m,y=n(4),component=Object(y.a)(O,undefined,undefined,!1,null,null,null);t.a=component.exports},463:function(e,t,n){"use strict";n(17),n(16),n(15),n(27),n(19),n(28);var r=n(11),o=n(36);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"InitialNavstate",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({pidSid:"projects/getPidsAndSids",onboarding:"onboarding/getOnboarding",projectPolling:"projects/getPolling"})),watch:{projectPolling:{handler:function(){this.projectPolling||this.initialProjectState()},immediate:!0}},methods:{initialProjectState:function(){if(this.$route){var e=this.$route.params,t=e.pid,n=e.sid;t&&n&&this.$store.dispatch("projects/setInitialProject",{pid:t,sid:n})}}},render:function(){return null}},d=l,h=n(4),component=Object(h.a)(d,undefined,undefined,!1,null,null,null);t.a=component.exports}}]);