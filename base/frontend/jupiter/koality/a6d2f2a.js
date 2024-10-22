(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1045:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(25),n(15),n(39),n(17),n(723)),l=n(1),c=n(720),d=n(872),f=n(728),m=n(876),v=n(899),h=Object(l.b)({name:"CertResults",components:{ColorMarker:v.a,ComponentHeader:f.a,ComponentScreenshot:d.a,Dimensions:c.a},props:{component:{type:Object,default:function(){}},externalUrl:{type:String,default:""},screenshot:{type:Object,default:function(){}}},setup:function(t){return{componentName:Object(m.a)(t.component.component).componentName}}}),x=n(4),w=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ComponentHeader",{attrs:{"external-url":t.externalUrl}},[t._v("\n    "+t._s(t.componentName)+"\n  ")]),t._v(" "),n("Dimensions",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.width;return n("div",{staticClass:"grid-twoColumOneFixed",class:[{"grid-twoColumOneFixed--small":o<750},{"grid-twoColumOneFixed--big":o>=750}]},[n("div",{staticClass:"grid-twoColumOneFixed__1"},[n("ComponentScreenshot",{attrs:{screenshot:t.screenshot}})],1),t._v(" "),n("div",{staticClass:"grid-twoColumOneFixed__2"},[n("div",{staticClass:"flex items-stretch"},[n("ColorMarker",{attrs:{status:t.component.result.status,"limit-height":!1}}),t._v(" "),n("div",[n("div",{staticClass:"cSubline mb-1"},[t._v("\n              "+t._s(t.$t(t.component.result.title))+"\n            ")]),t._v(" "),n("div",{staticClass:"cBody"},[n("p",[t._v(t._s(t.$t(t.component.result.message)))])])])],1)])])}}])})],1)}),[],!1,null,null,null).exports,C=n(285),_=n(871),y=n(877),O=Object(l.b)({name:"PageSecurityCerts",components:{CollectDataInfo:y.a,LoadingSpinner:C.a,CertResults:w,SegmentHeader:r.a},setup:function(){var t=Object(l.l)(),e=t.$apiClient,n=t.route,r=Object(l.i)(null),c=Object(_.a)(),d=c.url,f=c.screenshot,m=Object(l.m)(Object(o.a)(regeneratorRuntime.mark((function t(){var o,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.value.params.sid,t.prev=1,t.next=4,e.getRepository("checkcertificate");case 4:return l=t.sent,t.next=7,l.getExpirationResults(o,"certificate");case 7:c=t.sent,d=c.results,r.value=Object.keys(d).map((function(t){return d[t]})).filter((function(t){return t.result})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))),v=m.fetch,h=m.fetchState;return{url:d,screenshot:f,certData:r,fetchState:h,fetch:v}}}),j=Object(x.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SegmentHeader"),t._v(" "),t.$fetchState.pending?n("LoadingSpinner"):[n("CollectDataInfo",{attrs:{"data-count":t.certData.length},on:{updateData:t.$fetch}}),t._v(" "),t._l(t.certData,(function(component){return n("CertResults",{key:component.component.id,staticClass:"mb-10",attrs:{id:component.component.id,component:component,screenshot:t.screenshot(component.component.id),"external-url":t.url(component.component.id)}})}))]],2)}),[],!1,null,null,null);e.default=j.exports},720:function(t,e,n){"use strict";var o=n(724),r=n(1),l=Object(r.b)({name:"Dimensions",data:function(){return{width:null,height:null}},computed:{dimensionObserver:function(){var t=this;return new o.a((function(e){window.requestAnimationFrame((function(){t.width=e[0].contentRect.width,t.height=e[0].contentRect.height}))}))}},mounted:function(){this.dimensionObserver.observe(this.$el)},destroyed:function(){this.dimensionObserver.disconnect()},render:function(){return this.$scopedSlots.default({width:this.width,height:this.height})}}),c=n(4),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.a=component.exports},721:function(t,e,n){"use strict";var o={name:"IconExternal",props:{color:{type:String,default:"currentColor"}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M440,256H424a8,8,0,0,0-8,8V464a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V112A16,16,0,0,1,48,96H248a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V264A8,8,0,0,0,440,256ZM500,0,364,.34a12,12,0,0,0-12,12v10a12,12,0,0,0,12,12L454,34l.7.71L131.51,357.86a12,12,0,0,0,0,17l5.66,5.66a12,12,0,0,0,17,0L477.29,57.34l.71.7-.34,90a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12L512,12A12,12,0,0,0,500,0Z",fill:t.color}})])}),[],!1,null,null,null);e.a=component.exports},726:function(t,e,n){t.exports={}},727:function(t,e,n){t.exports={}},728:function(t,e,n){"use strict";var o={name:"ComponentHeader",components:{IconExternal:n(721).a},props:{externalUrl:{type:String,default:""}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h3",{staticClass:"cHeadline mb-4 flex items-center"},[t._t("default"),t._v(" "),t.externalUrl&&t.externalUrl.length?n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.$t("externalLink"),popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{content: $t('externalLink'), popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}} }"}],staticClass:"ml-2",attrs:{href:t.externalUrl,target:"_blank",rel:"noopener"}},[n("IconExternal",{staticClass:"w-3 relative",staticStyle:{top:"-1px"}})],1):t._e()],2)])}),[],!1,null,null,null);e.a=component.exports},731:function(t,e,n){"use strict";var o=n(7);o="default"in o?o.default:o;var r="2.2.2";/^2\./.test(o.version)||o.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+o.version);var l="_vue_clickaway_handler";function c(t,e,n){d(t);var o=n.context,r=e.value;if("function"==typeof r){var c=!1;setTimeout((function(){c=!0}),0),t[l]=function(e){var path=e.path||(e.composedPath?e.composedPath():void 0);if(c&&(path?path.indexOf(t)<0:!t.contains(e.target)))return r.call(o,e)},document.documentElement.addEventListener("click",t[l],!1)}}function d(t){document.documentElement.removeEventListener("click",t[l],!1),delete t[l]}var f={bind:c,update:function(t,e){e.value!==e.oldValue&&c(t,e)},unbind:d},m={directives:{onClickaway:f}};e.version=r,e.directive=f,e.mixin=m},869:function(t,e,n){"use strict";n(726)},870:function(t,e,n){"use strict";n(727)},871:function(t,e,n){"use strict";n(40);var o=n(1);e.a=function(){var t=Object(o.l)().store,e=Object(o.a)((function(){return t.getters["pageComponents/getComponents"]})),n=Object(o.a)((function(){return t.getters["screenshots/getScreenshots"]}));return{url:function(t){var n;return null===(n=e.value.find((function(e){return e.id===t})))||void 0===n?void 0:n.url},screenshot:function(t){return n.value[t]}}}},872:function(t,e,n){"use strict";var o=n(731),r=n(1),l=n(286),c=Object(r.b)({name:"ModalPorter",components:{IconCancel:l.a},props:{target:{type:String,default:"modal-place"},openState:{type:Boolean,default:!1},screenColor:{type:String,default:"bg-trans-black-08"},modalColor:{type:String,default:"bg-white"},modalStyle:{type:String,default:""},middle:{type:Boolean,default:!0},modalWidth:{type:String,default:"container"},scrollable:{type:Boolean,default:!1},desktopCentered:{type:Boolean,default:!0},customClose:{type:Boolean,default:!1}},setup:function(t){Object(r.s)((function(){return t.openState}),(function(){var e;e=document.querySelector(".pageLayout__body"),t.openState?(document.body.classList.add("overflow-hidden","scrolling-touch"),null==e||e.classList.add("pointer-events-none","select-none")):(document.body.classList.remove("overflow-hidden","scrolling-touch"),null==e||e.classList.remove("pointer-events-none","select-none"))}),{immediate:!0})}}),d=(n(869),n(870),n(4)),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("portal",{attrs:{to:t.target}},[n("transition",{attrs:{name:"visible"}},[t.openState?n("div",{staticClass:"fixed w-full top-0 left-0 flex min-h-screen",class:[t.screenColor,t.middle?"items-center":"items-start",t.scrollable?"overflow-y-scroll":""],staticStyle:{"z-index":"1000"}},[n("div",{staticClass:"w-full",class:[t.scrollable?"overflow-y-scroll scrolling-touch py-20p":"flex justify-center items-center",t.desktopCentered?"md:flex justify-center items-center":""]},[n("div",{staticClass:"relative mx-auto",class:[t.modalColor,t.modalStyle,t.modalWidth]},[t.customClose?t._e():n("div",{staticClass:"absolute right-0 top-0 p-2 cursor-pointer z-10",on:{click:function(e){return t.$emit("closeModal")}}},[n("IconCancel",{staticClass:"h-4 w-4",attrs:{color:"#383737"}})],1),t._v(" "),t._t("default")],2)])]):t._e()])],1)}),[],!1,null,"b688792c",null).exports,m=Object(r.b)({name:"ComponentScreenshot",components:{ModalPorter:f},directives:{onClickaway:o.directive},props:{screenshot:{type:Object,default:function(){}},alt:{type:String,default:"screenshot"},storybook:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.i)(!1);return{lightboxState:e,toggleLightbox:function(){t.screenshot.raw&&(e.value=!e.value)},closeLightbox:function(){return e.value=!1}}}}),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.screenshot&&Object.keys(t.screenshot).length?n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeLightbox,expression:"closeLightbox"}],attrs:{"data-cy":"element"}},[t.screenshot.thumb?t._e():n("div",{staticClass:"border-gray-300 border-solid border p-3",attrs:{"data-cy":"background"}},[t._m(0)]),t._v(" "),t.screenshot.thumb?n("figure",{staticClass:"border-gray-300 border-solid border p-3",class:[t.screenshot.raw&&t.screenshot.raw.length?"cursor-pointer":""],attrs:{"data-cy":"trigger"},on:{click:t.toggleLightbox}},[n("div",{staticClass:"aspect-ratio-4/3 h-0 overflow-hidden"},[n("img",{staticClass:"object-cover w-full",attrs:{"data-cy":"image",src:t.screenshot.thumb,alt:t.alt}})])]):t._e(),t._v(" "),t.screenshot.raw&&t.screenshot.raw.length?n("ModalPorter",{attrs:{target:"screen-place","open-state":t.lightboxState,"modal-style":"rounded mx-4 max-h-5/6 flex py-1 px-1","modal-width":"max-w-xl w-full"},on:{closeModal:function(e){t.lightboxState=!1}}},[n("figure",{attrs:{"data-cy":"lightbox"}},[n("img",{staticClass:"object-contain w-full h-full",attrs:{src:t.screenshot.raw,alt:t.alt}})])]):t._e()],1):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aspect-ratio-4/3 h-0 overflow-hidden relative"},[e("div",{staticClass:"absolute w-full h-full bg-gray-300"})])}],!1,null,null,null);e.a=v.exports},876:function(t,e,n){"use strict";n(30);var o=n(1);e.a=function(t){var e=Object(o.l)().i18n;return{componentName:Object(o.a)((function(){if(!t.suggestion)return t.name;var n=t.suggestion.identifier,o=t.name;if(!n)return o;var r="admin.components.names.".concat(n);return e.te(r)?e.t(r):o}))}}},877:function(t,e,n){"use strict";n(68);var o=n(1),r=n(878),l=n(112),c=Object(o.b)({name:"CollectDataInfo",components:{Richtext:l.a,InfoBox:r.a},props:{dataCount:{type:Number,default:0}},setup:function(t,e){var n=e.emit,r=Object(o.l)().store,l=Object(o.i)(!1),c=Object(o.i)(!1),d=Object(o.i)(!1),f=Object(o.a)({get:function(){return!1},set:function(){return r.getters["testrunner/getFirstRun"]}});return Object(o.s)(f,(function(){f.value?(c.value=!1,l.value=!0):(l.value=!1,c.value=0===t.dataCount,d.value!==f.value&&n("updateData")),d.value=f.value}),{immediate:!0}),{showInfoForFirstRun:l,showInfoForNoData:c}}}),d=n(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showInfoForFirstRun||t.showInfoForNoData?n("InfoBox",{staticClass:"mb-6"},[t.showInfoForFirstRun?[n("h2",{staticClass:"cSubline"},[t._v("\n      "+t._s(t.$t("WeAreCollectingData"))+"\n    ")]),t._v(" "),n("p",[n("Richtext",{attrs:{content:t.$t("WeCollectDataSentence")}})],1)]:t._e(),t._v(" "),t.showInfoForNoData?[t._v("\n    "+t._s(t.$t("noStatsOnProject"))+"\n  ")]:t._e()],2):t._e()}),[],!1,null,null,null);e.a=component.exports},899:function(t,e,n){"use strict";var o=n(1),r=Object(o.b)({name:"ColorMarker",props:{status:{type:String,default:"success"},limitHeight:{type:Boolean,default:!0}}}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"w-1 mr-3 flex-grow-0 flex-shrink-0 rounded",class:["failure"===t.status?"bg-error-high":"bg-error-low",{"max-h-48p":t.limitHeight}]})}),[],!1,null,null,null);e.a=component.exports}}]);