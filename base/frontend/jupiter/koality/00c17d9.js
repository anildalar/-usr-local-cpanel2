(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1040:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(25),n(15),n(39),n(17),n(1)),l=n(871),c=n(723),d=n(720),f=n(872),v=(n(68),n(899)),m=Object(o.b)({name:"InsecureResultsTextBlock",components:{ColorMarker:v.a},props:{count:{type:Number,default:2}},setup:function(e){var t=Object(o.l)().i18n;return{headline:Object(o.a)((function(){var n=e.count>1?2:e.count;return t.tc("insecure.textblockHeadline",n)})),subline:Object(o.a)((function(){return t.tc("insecure.textblockSubline",e.count>0?2:1)}))}}}),h=n(4),x=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-stretch"},[n("ColorMarker",{attrs:{status:e.count>0?"failure":"success"}}),e._v(" "),n("div",[n("div",{staticClass:"cSubline mb-1"},[e._v("\n      "+e._s(e.headline)+"\n    ")]),e._v(" "),n("div",{staticClass:"cBody"},[n("p",[e._v(e._s(e.subline))])])])],1)}),[],!1,null,null,null).exports,_=n(730),y=n(728),C=n(876),w=Object(o.b)({name:"InsecureResults",components:{ComponentHeader:y.a,AdditionalInfo:_.a,InsecureResultsTextBlock:x,ComponentScreenshot:f.a,Dimensions:d.a},props:{component:{type:Object,default:function(){}},externalUrl:{type:String,default:""},screenshot:{type:Object,default:function(){}}},setup:function(e){return{componentName:Object(C.a)(e.component.component).componentName,resultList:Object(o.a)((function(){return e.component.insecure_elements.map((function(e){return{url:e}}))}))}}}),O=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ComponentHeader",{attrs:{"external-url":e.externalUrl}},[e._v("\n    "+e._s(e.componentName)+"\n  ")]),e._v(" "),n("Dimensions",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.width;return n("div",{staticClass:"grid-twoColumOneFixed",class:[{"grid-twoColumOneFixed--small":r<750},{"grid-twoColumOneFixed--big":r>=750}]},[n("div",{staticClass:"grid-twoColumOneFixed__1"},[n("ComponentScreenshot",{attrs:{screenshot:e.screenshot}})],1),e._v(" "),n("div",{staticClass:"grid-twoColumOneFixed__2"},[n("InsecureResultsTextBlock",{staticClass:"mb-6",attrs:{count:e.component.insecure_elements.length}}),e._v(" "),n("AdditionalInfo",{attrs:{"additional-info":e.resultList,header:e.$t("insecure.elements")}})],1)])}}])})],1)}),[],!1,null,null,null).exports,k=n(285),j=n(877),S=Object(o.b)({name:"PageSecurityElements",components:{CollectDataInfo:j.a,LoadingSpinner:k.a,InsecureResults:O,SegmentHeader:c.a},setup:function(){var e=Object(o.l)(),t=e.$apiClient,n=e.route.value.params.sid,c=Object(o.i)(null),d=Object(o.i)(0),f=Object(l.a)(),v=f.url,m=f.screenshot,h=Object(o.m)(Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRepository("checkinsecurecontent");case 3:return r=e.sent,e.next=6,r.getInsecureElements(n);case 6:o=e.sent,l=o.results,c.value=Object.keys(l).map((function(e){return l[e]})).filter((function(e){return e.insecure_elements})),d.value=Object.keys(l).length,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))),x=h.fetch;return{url:v,screenshot:m,fetchState:h.fetchState,fetch:x,dataCount:d,insecureData:c}}}),I=Object(h.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SegmentHeader"),e._v(" "),e.$fetchState.pending?n("LoadingSpinner"):[n("CollectDataInfo",{attrs:{"data-count":e.dataCount},on:{updateData:e.$fetch}}),e._v(" "),e._l(e.insecureData,(function(component){return n("InsecureResults",{key:component.component.id,staticClass:"mb-10",attrs:{id:component.component.id,component:component,screenshot:e.screenshot(component.component.id),"external-url":e.url(component.component.id)}})}))]],2)}),[],!1,null,null,null);t.default=I.exports},720:function(e,t,n){"use strict";var r=n(724),o=n(1),l=Object(o.b)({name:"Dimensions",data:function(){return{width:null,height:null}},computed:{dimensionObserver:function(){var e=this;return new r.a((function(t){window.requestAnimationFrame((function(){e.width=t[0].contentRect.width,e.height=t[0].contentRect.height}))}))}},mounted:function(){this.dimensionObserver.observe(this.$el)},destroyed:function(){this.dimensionObserver.disconnect()},render:function(){return this.$scopedSlots.default({width:this.width,height:this.height})}}),c=n(4),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);t.a=component.exports},721:function(e,t,n){"use strict";var r={name:"IconExternal",props:{color:{type:String,default:"currentColor"}}},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M440,256H424a8,8,0,0,0-8,8V464a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V112A16,16,0,0,1,48,96H248a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V264A8,8,0,0,0,440,256ZM500,0,364,.34a12,12,0,0,0-12,12v10a12,12,0,0,0,12,12L454,34l.7.71L131.51,357.86a12,12,0,0,0,0,17l5.66,5.66a12,12,0,0,0,17,0L477.29,57.34l.71.7-.34,90a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12L512,12A12,12,0,0,0,500,0Z",fill:e.color}})])}),[],!1,null,null,null);t.a=component.exports},722:function(e,t,n){e.exports={}},726:function(e,t,n){e.exports={}},727:function(e,t,n){e.exports={}},728:function(e,t,n){"use strict";var r={name:"ComponentHeader",components:{IconExternal:n(721).a},props:{externalUrl:{type:String,default:""}}},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h3",{staticClass:"cHeadline mb-4 flex items-center"},[e._t("default"),e._v(" "),e.externalUrl&&e.externalUrl.length?n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:e.$t("externalLink"),popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{content: $t('externalLink'), popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}} }"}],staticClass:"ml-2",attrs:{href:e.externalUrl,target:"_blank",rel:"noopener"}},[n("IconExternal",{staticClass:"w-3 relative",staticStyle:{top:"-1px"}})],1):e._e()],2)])}),[],!1,null,null,null);t.a=component.exports},729:function(e,t,n){"use strict";n(722)},730:function(e,t,n){"use strict";var r=n(18),o=n(9),l=(n(22),n(150),n(41),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(31),n(38),n(15),n(25),n(1)),c=n(60),d=n.n(c),f=n(149),v=n(90),m=n(286),h=n(80),x=Object(l.b)({name:"IgnorePatterns",components:{GeneralButton:h.a,IconCancel:m.a},props:{ignoreToolId:{type:String,default:""},entries:{type:Array,default:function(){return[]}}},setup:function(e,t){var n=t.emit,r=Object(l.l)(),c=r.route,d=r.$apiClient,f=c.value.params.sid,v=Object(l.i)(!1),m=Object(l.a)((function(){return{DeadLink:{headline:"ignoreDeadlinksHeadline",sentence:"ignoreDeadlinksSentence",listHeader:"Ignored",buttonLabel:"storeAndActualize"},BigFiles:{headline:"ignoreBigFiles",sentence:"ignoreBigFilesSentence",listHeader:"IgnoredBigFilesLinks",buttonLabel:"storeAndActualize"}}[e.ignoreToolId]})),h=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getRepository("checkdeadlinks");case 2:return r=e.sent,e.next=5,r.ignorePattern(t,{pattern:"",patterns:n});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getRepository("checkfilesize");case 2:return r=e.sent,e.next=5,r.ignorePattern(t,{patterns:n});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.getRepository("check");case 3:return n=t.sent,t.next=6,n.runChecksForSystem(f,e.ignoreToolId);case 6:if("DeadLink"!==e.ignoreToolId){t.next=11;break}return t.next=9,h(f,e.entries);case 9:t.next=14;break;case 11:if("BigFiles"!==e.ignoreToolId){t.next=14;break}return t.next=14,x(f,e.entries);case 14:y(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}(),y=function(){v.value=!0,setTimeout((function(){n("clearEntries"),v.value=!1}),1e4)};return{ignorePatternText:m,openStackIgnore:v,store:_}}}),_=x,y=n(4),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.entries.length?n("div",{staticClass:"rounded mb-8 p-4 bg-gray-100 border border-solid border-gray-300 sticky z-10 shadow-lg -mx-4 top-0",staticStyle:{top:"30px"}},[e.openStackIgnore?n("div",[e._t("success",(function(){return[e._v("\n      "+e._s(e.$t("checksUpdatedInFewMinutesSentence"))+"\n    ")]}))],2):n("div",[n("div",{staticClass:"lg:flex"},[n("div",{staticClass:"lg:w-1/2 lg:pr-6 flex-grow-0 flex-shrink-0 cBody"},[n("p",[n("strong",[e._v("\n            "+e._s(e.$t(e.ignorePatternText.headline))+"\n          ")]),e._v(" "),n("br"),e._v("\n          "+e._s(e.$t(e.ignorePatternText.sentence))+"\n        ")])]),e._v(" "),n("div",{staticClass:"text-sm mt-2 flex-auto  overflow-hidden"},[e.ignorePatternText.listHeader?n("p",{staticClass:"font-medium"},[e._v("\n          "+e._s(e.$t(e.ignorePatternText.listHeader))+":\n        ")]):e._e(),e._v(" "),n("ul",{staticClass:"list-disc list-inside text-sm mb-4"},e._l(e.entries,(function(t,r){return n("li",{key:r,staticClass:"flex items-center"},[n("div",{staticClass:"cursor-pointer mr-2",on:{click:function(n){return e.$emit("removeEntry",t)}}},[n("IconCancel",{staticClass:"w-3 h-3",attrs:{color:"#F46565"}})],1),e._v(" "),n("div",{staticClass:"truncate max-w-full"},[e._v("\n              "+e._s(t)+"\n            ")])])})),0)])]),e._v(" "),n("GeneralButton",{staticClass:"mt-6",attrs:{size:"px-4 py-2"},nativeOn:{click:function(t){return e.store.apply(null,arguments)}}},[n("svg",{staticClass:"w-4 mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256.001 8 119.34 8 7.9 119.525 8 256.185 8.1 393.067 119.095 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.353-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.321 0-196-87.662-196-196 0-108.321 87.662-196 196-196 54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486z",fill:"currentColor"}})]),e._v("\n      "+e._s(e.$t(e.ignorePatternText.buttonLabel))+"\n    ")])],1)]):e._e()}),[],!1,null,null,null),C=component.exports,w=n(285),O=Object(l.b)({name:"AdditionalInfo",components:{LoadingSpinner:w.a,GeneralButton:h.a,IgnorePatterns:C,IconChevron:v.a,HeightExpander:f.a},props:{additionalInfo:{type:Array,default:function(){return[]}},header:{type:String,default:""},trigger:{type:String,default:""},ignoreToolId:{type:String,default:""}},setup:function(e,t){var n=t.root,c=t.emit,f=Object(l.l)().i18n,v=Object(l.i)(!1),m=Object(l.i)([]),h=Object(l.i)(!1),x=Object(l.i)([]),_=Object(l.i)([]),y=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$copyText(t);case 3:n.$notify({group:"socketNotificationArea",type:"info",title:"".concat(f.t("copyToClipboard")),text:"".concat(f.t("sentenceCopyUrl"))}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.value=[].concat(Object(r.a)(x.value),[n]),_.value=_.value.filter((function(e){return e!==n})),e.prev=2,e.next=5,d.a.get(t);case 5:o=e.sent,"success"===o.data.status&&c("triggerUpdate"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0),_.value=[].concat(Object(r.a)(_.value),[n]);case 14:return e.prev=14,x.value=x.value.filter((function(e){return e!==n})),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(t,n){return e.apply(this,arguments)}}();return{infoOpen:v,copyUrl:y,collectIgnorePatterns:function(e){h.value=!0,m.value=Object(r.a)(new Set([].concat(Object(r.a)(m.value),[e])))},ignoreList:m,removeEntry:function(e){m.value=m.value.filter((function(t){return t!==e}))},clearEntries:function(){return m.value=[]},updateWithRest:C,updateIndex:x,updateError:_}}}),k=O,j=(n(729),Object(y.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.additionalInfo.length?n("div",{staticClass:"mt-4 additionalInfo",attrs:{"data-cy":"additional-info"}},[n("div",{staticClass:"flex items-center cursor-pointer",attrs:{"data-cy":"trigger"},on:{click:function(t){e.infoOpen=!e.infoOpen}}},[n("div",{staticClass:"font-medium mr-5"},[e._v("\n      "+e._s(e.header)+"\n    ")]),e._v(" "),n("IconChevron",{staticClass:"w-3 h-3",attrs:{"data-cy":"indicator",degree:e.infoOpen?270:90}})],1),e._v(" "),n("HeightExpander",[e.infoOpen?n("div",{staticClass:"py-2",attrs:{"data-cy":"list"}},e._l(e.additionalInfo,(function(t,r){return n("div",{key:r,staticClass:"text-sm text-gray-600 additionalInfo__row",attrs:{"data-cy":"list-entry"}},[n("div",{staticClass:"flex justify-between items-center -mx-1 overflow-hidden py-2"},[t["content-type"]?n("div",{staticClass:"flex-grow-0 flex-shrink-0 w-20 mx-1"},[e._v("\n            "+e._s(t["content-type"].split("/")[1])+"\n          ")]):e._e(),e._v(" "),t.type?n("div",{staticClass:"flex-grow-0 flex-shrink-0 w-20 mx-1"},[e._v("\n            "+e._s(t.type)+"\n          ")]):e._e(),e._v(" "),t.restName?n("div",{staticClass:"truncate flex-auto mx-1"},[e._v("\n            "+e._s(t.restName)+" "),e.updateError.includes(r)?n("span",{staticClass:"text-sm text-error-high"},[e._v("[Update Error]")]):e._e()]):e._e(),e._v(" "),t.restUrl?n("div",[n("GeneralButton",{attrs:{size:"py-1 px-2 text-xs"},nativeOn:{click:function(n){return e.updateWithRest(t.restUrl,r)}}},[e.updateIndex.includes(r)?n("LoadingSpinner",{staticClass:"mr-1",attrs:{size:8,"border-size":1,"border-color":"text-white"}}):e._e(),e._v("\n              update\n            ")],1)],1):e._e(),e._v(" "),t.name?n("div",{staticClass:"truncate flex-auto mx-1"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.name,classes:"breakAll",popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{\n                content: info.name,\n                classes: 'breakAll',\n                popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}}\n              }"}]},[e._v("\n              "+e._s(t.name)+"\n            ")])]):e._e(),e._v(" "),t.link?n("div",{staticClass:"truncate flex-auto mx-1 cursor-pointer"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"<span class='break-all'>"+t.link+"</span>",popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{\n                content: `<span class='break-all'>${info.link}</span>`,\n                popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}}\n              }"}]},[n("a",{attrs:{href:t.link,target:"_blank",rel:"nofollow norefferer"}},[e._v(e._s(t.link))])])]):e._e(),e._v(" "),t.url?n("div",{staticClass:"truncate flex-auto mx-1 cursor-pointer",on:{click:function(n){return e.copyUrl(t.url.url||t.url)}}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"<span class='break-all'>"+(t.url.url||t.url)+"</span><br><span class='text-xs'>"+e.$t("clickToCopy")+"</span>",popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{\n                content: `<span class='break-all'>${info.url.url || info.url}</span><br><span class='text-xs'>${$t('clickToCopy')}</span>`,\n                popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}}\n              }"}]},[t.url.url?[n("strong",[e._v(e._s(t.url.status))]),e._v(" - "+e._s(t.url.url))]:[e._v(e._s(t.url))]],2)]):e._e(),e._v(" "),t.size?n("div",{staticClass:"flex-grow-0 flex-shrink-0 w-20 mx-1 text-right"},[e._v("\n            "+e._s(t.size)+"\n          ")]):e._e(),e._v(" "),e.trigger?n("div",{staticClass:"cursor-pointer",on:{click:function(n){return e.$emit("triggerElement",t)}}},[e._v("\n            "+e._s(e.trigger)+"\n          ")]):e._e(),e._v(" "),["DeadLink","BigFiles"].includes(e.ignoreToolId)&&(t.url||t.name)?n("div",{staticClass:"ml-4 underline hover:no-underline cursor-pointer",on:{click:function(n){return e.collectIgnorePatterns(t.url.url||t.url||t.name)}}},[e._v("\n            "+e._s(e.$t("ignore"))+"\n          ")]):e._e()])])})),0):e._e()]),e._v(" "),e.ignoreToolId?n("portal",{attrs:{to:"ignorePatternBlock"}},[e.ignoreList.length?n("IgnorePatterns",{attrs:{"ignore-tool-id":e.ignoreToolId,entries:e.ignoreList},on:{removeEntry:e.removeEntry,clearEntries:e.clearEntries}}):e._e()],1):e._e()],1):e._e()}),[],!1,null,null,null));t.a=j.exports},731:function(e,t,n){"use strict";var r=n(7);r="default"in r?r.default:r;var o="2.2.2";/^2\./.test(r.version)||r.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+r.version);var l="_vue_clickaway_handler";function c(e,t,n){d(e);var r=n.context,o=t.value;if("function"==typeof o){var c=!1;setTimeout((function(){c=!0}),0),e[l]=function(t){var path=t.path||(t.composedPath?t.composedPath():void 0);if(c&&(path?path.indexOf(e)<0:!e.contains(t.target)))return o.call(r,t)},document.documentElement.addEventListener("click",e[l],!1)}}function d(e){document.documentElement.removeEventListener("click",e[l],!1),delete e[l]}var f={bind:c,update:function(e,t){t.value!==t.oldValue&&c(e,t)},unbind:d},v={directives:{onClickaway:f}};t.version=o,t.directive=f,t.mixin=v},869:function(e,t,n){"use strict";n(726)},870:function(e,t,n){"use strict";n(727)},871:function(e,t,n){"use strict";n(40);var r=n(1);t.a=function(){var e=Object(r.l)().store,t=Object(r.a)((function(){return e.getters["pageComponents/getComponents"]})),n=Object(r.a)((function(){return e.getters["screenshots/getScreenshots"]}));return{url:function(e){var n;return null===(n=t.value.find((function(t){return t.id===e})))||void 0===n?void 0:n.url},screenshot:function(e){return n.value[e]}}}},872:function(e,t,n){"use strict";var r=n(731),o=n(1),l=n(286),c=Object(o.b)({name:"ModalPorter",components:{IconCancel:l.a},props:{target:{type:String,default:"modal-place"},openState:{type:Boolean,default:!1},screenColor:{type:String,default:"bg-trans-black-08"},modalColor:{type:String,default:"bg-white"},modalStyle:{type:String,default:""},middle:{type:Boolean,default:!0},modalWidth:{type:String,default:"container"},scrollable:{type:Boolean,default:!1},desktopCentered:{type:Boolean,default:!0},customClose:{type:Boolean,default:!1}},setup:function(e){Object(o.s)((function(){return e.openState}),(function(){var t;t=document.querySelector(".pageLayout__body"),e.openState?(document.body.classList.add("overflow-hidden","scrolling-touch"),null==t||t.classList.add("pointer-events-none","select-none")):(document.body.classList.remove("overflow-hidden","scrolling-touch"),null==t||t.classList.remove("pointer-events-none","select-none"))}),{immediate:!0})}}),d=(n(869),n(870),n(4)),f=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("portal",{attrs:{to:e.target}},[n("transition",{attrs:{name:"visible"}},[e.openState?n("div",{staticClass:"fixed w-full top-0 left-0 flex min-h-screen",class:[e.screenColor,e.middle?"items-center":"items-start",e.scrollable?"overflow-y-scroll":""],staticStyle:{"z-index":"1000"}},[n("div",{staticClass:"w-full",class:[e.scrollable?"overflow-y-scroll scrolling-touch py-20p":"flex justify-center items-center",e.desktopCentered?"md:flex justify-center items-center":""]},[n("div",{staticClass:"relative mx-auto",class:[e.modalColor,e.modalStyle,e.modalWidth]},[e.customClose?e._e():n("div",{staticClass:"absolute right-0 top-0 p-2 cursor-pointer z-10",on:{click:function(t){return e.$emit("closeModal")}}},[n("IconCancel",{staticClass:"h-4 w-4",attrs:{color:"#383737"}})],1),e._v(" "),e._t("default")],2)])]):e._e()])],1)}),[],!1,null,"b688792c",null).exports,v=Object(o.b)({name:"ComponentScreenshot",components:{ModalPorter:f},directives:{onClickaway:r.directive},props:{screenshot:{type:Object,default:function(){}},alt:{type:String,default:"screenshot"},storybook:{type:Boolean,default:!1}},setup:function(e){var t=Object(o.i)(!1);return{lightboxState:t,toggleLightbox:function(){e.screenshot.raw&&(t.value=!t.value)},closeLightbox:function(){return t.value=!1}}}}),m=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.screenshot&&Object.keys(e.screenshot).length?n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeLightbox,expression:"closeLightbox"}],attrs:{"data-cy":"element"}},[e.screenshot.thumb?e._e():n("div",{staticClass:"border-gray-300 border-solid border p-3",attrs:{"data-cy":"background"}},[e._m(0)]),e._v(" "),e.screenshot.thumb?n("figure",{staticClass:"border-gray-300 border-solid border p-3",class:[e.screenshot.raw&&e.screenshot.raw.length?"cursor-pointer":""],attrs:{"data-cy":"trigger"},on:{click:e.toggleLightbox}},[n("div",{staticClass:"aspect-ratio-4/3 h-0 overflow-hidden"},[n("img",{staticClass:"object-cover w-full",attrs:{"data-cy":"image",src:e.screenshot.thumb,alt:e.alt}})])]):e._e(),e._v(" "),e.screenshot.raw&&e.screenshot.raw.length?n("ModalPorter",{attrs:{target:"screen-place","open-state":e.lightboxState,"modal-style":"rounded mx-4 max-h-5/6 flex py-1 px-1","modal-width":"max-w-xl w-full"},on:{closeModal:function(t){e.lightboxState=!1}}},[n("figure",{attrs:{"data-cy":"lightbox"}},[n("img",{staticClass:"object-contain w-full h-full",attrs:{src:e.screenshot.raw,alt:e.alt}})])]):e._e()],1):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"aspect-ratio-4/3 h-0 overflow-hidden relative"},[t("div",{staticClass:"absolute w-full h-full bg-gray-300"})])}],!1,null,null,null);t.a=m.exports},876:function(e,t,n){"use strict";n(30);var r=n(1);t.a=function(e){var t=Object(r.l)().i18n;return{componentName:Object(r.a)((function(){if(!e.suggestion)return e.name;var n=e.suggestion.identifier,r=e.name;if(!n)return r;var o="admin.components.names.".concat(n);return t.te(o)?t.t(o):r}))}}},877:function(e,t,n){"use strict";n(68);var r=n(1),o=n(878),l=n(112),c=Object(r.b)({name:"CollectDataInfo",components:{Richtext:l.a,InfoBox:o.a},props:{dataCount:{type:Number,default:0}},setup:function(e,t){var n=t.emit,o=Object(r.l)().store,l=Object(r.i)(!1),c=Object(r.i)(!1),d=Object(r.i)(!1),f=Object(r.a)({get:function(){return!1},set:function(){return o.getters["testrunner/getFirstRun"]}});return Object(r.s)(f,(function(){f.value?(c.value=!1,l.value=!0):(l.value=!1,c.value=0===e.dataCount,d.value!==f.value&&n("updateData")),d.value=f.value}),{immediate:!0}),{showInfoForFirstRun:l,showInfoForNoData:c}}}),d=n(4),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showInfoForFirstRun||e.showInfoForNoData?n("InfoBox",{staticClass:"mb-6"},[e.showInfoForFirstRun?[n("h2",{staticClass:"cSubline"},[e._v("\n      "+e._s(e.$t("WeAreCollectingData"))+"\n    ")]),e._v(" "),n("p",[n("Richtext",{attrs:{content:e.$t("WeCollectDataSentence")}})],1)]:e._e(),e._v(" "),e.showInfoForNoData?[e._v("\n    "+e._s(e.$t("noStatsOnProject"))+"\n  ")]:e._e()],2):e._e()}),[],!1,null,null,null);t.a=component.exports},899:function(e,t,n){"use strict";var r=n(1),o=Object(r.b)({name:"ColorMarker",props:{status:{type:String,default:"success"},limitHeight:{type:Boolean,default:!0}}}),l=n(4),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"w-1 mr-3 flex-grow-0 flex-shrink-0 rounded",class:["failure"===e.status?"bg-error-high":"bg-error-low",{"max-h-48p":e.limitHeight}]})}),[],!1,null,null,null);t.a=component.exports}}]);