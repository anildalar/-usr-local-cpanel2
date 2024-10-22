(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1065:function(e,t,r){"use strict";r.r(t);r(17),r(16),r(15),r(27),r(19),r(28);var n=r(11),o=r(36),c=r(723);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"PageTechnicalOverview",components:{Scoring:r(893).a,SegmentHeader:c.a},data:function(){return{scores:{}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({polling:"scores/getPollingState"})),watch:{polling:{handler:function(){if(!this.polling){var e=this.$store.getters["scores/getSystemScores"];this.scores=e.technical}},immediate:!0}}},m=d,f=r(4),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("SegmentHeader"),e._v(" "),r("Scoring",{attrs:{scores:e.scores}})],1)}),[],!1,null,null,null);t.default=component.exports},720:function(e,t,r){"use strict";var n=r(724),o=r(1),c=Object(o.b)({name:"Dimensions",data:function(){return{width:null,height:null}},computed:{dimensionObserver:function(){var e=this;return new n.a((function(t){window.requestAnimationFrame((function(){e.width=t[0].contentRect.width,e.height=t[0].contentRect.height}))}))}},mounted:function(){this.dimensionObserver.observe(this.$el)},destroyed:function(){this.dimensionObserver.disconnect()},render:function(){return this.$scopedSlots.default({width:this.width,height:this.height})}}),l=r(4),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);t.a=component.exports},721:function(e,t,r){"use strict";var n={name:"IconExternal",props:{color:{type:String,default:"currentColor"}}},o=r(4),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M440,256H424a8,8,0,0,0-8,8V464a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V112A16,16,0,0,1,48,96H248a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V264A8,8,0,0,0,440,256ZM500,0,364,.34a12,12,0,0,0-12,12v10a12,12,0,0,0,12,12L454,34l.7.71L131.51,357.86a12,12,0,0,0,0,17l5.66,5.66a12,12,0,0,0,17,0L477.29,57.34l.71.7-.34,90a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12L512,12A12,12,0,0,0,500,0Z",fill:e.color}})])}),[],!1,null,null,null);t.a=component.exports},883:function(e,t,r){"use strict";r(68),r(32),r(81),r(97),r(59),r(38);var n=r(1),o=r(82),c=r(721),l=r(290),d=Object(n.b)({name:"ScoreProgress",props:{score:{type:Number,default:0},maxScore:{type:Number,default:100},status:{type:String,default:"bad"},gap:{type:Number,default:4},progressHeight:{type:String,default:"h-6px"}},setup:function(e){return{fill:Object(n.a)((function(){return{good:"bg-error-low",medium:"bg-error-medium",bad:"bg-error-high"}[e.status]})),difference:Object(n.a)((function(){return 0===e.score?100:e.score<e.maxScore-1?e.maxScore-e.score:0}))}}}),m=r(4),f=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{"data-cy":"element"}},[r("div",{staticClass:"font-light text-1xl mb-5",attrs:{"data-cy":"text"}},[e.score>=0?r("span",{staticClass:"font-medium text-3xl"},[e._v(e._s(e.score))]):e._e(),e._v(" "),e.score>=0?r("span",[e._v(e._s(e.$t("from"))+" "+e._s(e.maxScore))]):e._e(),e._v(" "),e.score<0?r("span",{staticClass:"font-medium text-3xl",staticStyle:{width:"1px"}}):e._e(),e._v(" "),e.score<0?r("span",[e._v(e._s(e.$t("notYetCalculated")))]):e._e()]),e._v(" "),r("div",{staticClass:"rounded-full relative"},[r("div",{staticClass:"absolute left-0 top-0 w-full rounded-full",class:[{"min-w-2":e.score>0},e.fill,e.progressHeight],style:[{width:"calc("+(e.score>=0?e.score:0)+"% - "+(0===e.score?0:e.gap)+"px)"}],attrs:{"data-cy":"positive"}}),e._v(" "),r("div",{staticClass:"absolute right-0 top-0 w-full bg-gray-300 rounded-full",class:[{"min-w-2":e.difference>0},e.progressHeight],style:[{width:"calc("+(e.score>=0?e.difference:100)+"% - "+(0===e.score?0:e.gap)+"px)"}],attrs:{"data-cy":"negative"}})])])}),[],!1,null,null,null).exports,v=Object(n.b)({name:"ScoringResult",components:{ScoreProgress:f,IconArrow:l.a,IconExternal:c.a},inheritAttrs:!1,props:{score:{type:Object,default:function(){}},masterScore:{type:Boolean,default:!1},background:{type:String,default:"bg-gray-100"},maxScore:{type:Number,default:100},width:{type:Number,default:1400},hints:{type:Boolean,default:!0}},setup:function(e){var t=Object(n.r)(),r=Object(n.a)((function(){return t.getters["projects/getActualSystem"]})),c=Object(n.a)((function(){return t.getters["projects/getActualProject"]})),l=Object(n.a)((function(){return t.getters["navigation/getNavAliases"]}));return{breakpoint:650,actualSystem:r,actualProject:c,navAliases:l,generateDetailLink:function(){if(!e.score.identifier)return!1;var t=o.d[e.score.identifier];if(!t)return!1;var n=l.value[t].path.split("/");if(n.length>1&&"[psid]"!==n[1])return!1;var d=n.slice(2).join("/");return"/".concat(c.value,"/").concat(r.value,"/").concat(d)}}}}),h=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex-shrink-0 flex-grow-0 rounded",class:[e.masterScore?e.background+" p-6 grid-scores__master":"",e.masterScore||0!==e.score.score?"":"-m-5 p-5",{"grid-scores__master--twoColSmall":e.masterScore&&e.width>520&&e.width<=910},{"grid-scores__master--twoColWide":e.masterScore&&e.width>910}],style:[e.masterScore||0!==e.score.score?{}:{backgroundColor:"#FFF5F6"}]},[r("div",{class:[e.masterScore&&e.width>e.breakpoint?"flex-shrink-0":"mb-12"]},[r("h3",{staticClass:"cHeadline mb-3 flex items-center"},[r("span",[e._v(e._s(e.score.title))]),e._v(" "),e.score.description?r("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:e.score.score>=0?e.score.description:e.$t("scoreCalculationFailed"),popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{content: score.score >= 0 ? score.description : $t('scoreCalculationFailed'), popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}} }"}],staticClass:"w-4 h-4 rounded-full text-white flex-center ml-2 text-xs leading-none bg-gray-400 font-medium flex-shrink-0 flex-grow-0 cursor-pointer",staticStyle:{"margin-top":"-2px"}},[e._v("\n        ?\n      ")]):e._e()]),e._v(" "),r("ScoreProgress",{attrs:{score:e.score.score,"max-score":e.maxScore,status:e.score.status}})],1),e._v(" "),r("div",[r("div",{staticClass:"cSubline mb-4"},[e._v("\n      "+e._s(e.$t("summary"))+"\n    ")]),e._v(" "),r("div",{staticClass:"cBodyLeading mb-4"},[r("p",[e._v("\n        "+e._s(e.score.message)+"\n      ")])]),e._v(" "),!e.masterScore&&e.generateDetailLink()?r("div",{staticClass:"flex items-center mt-8"},[r("nuxt-link",{staticClass:"cTextLink",attrs:{to:e.generateDetailLink()}},[e._v("\n        "+e._s(e.$t("toTheDetails"))+"\n      ")]),e._v(" "),r("IconArrow",{staticClass:"w-4 h-4 ml-2"})],1):e._e(),e._v(" "),e.hints&&!e.masterScore&&e.score.score>=0?r("div",[e.score.incidents.length?r("div",{staticClass:"font-medium uppercase text-smm mb-4 mt-8"},[e._v("\n        "+e._s(e.$tc("pagesWithReference","",{n:e.score.incidents.length}))+"\n      ")]):e._e(),e._v(" "),r("ul",{staticClass:"list-disc",staticStyle:{"margin-left":"20px"}},e._l(e.score.incidents,(function(t,n){return r("li",{key:n,staticClass:"mb-1"},[r("div",{staticClass:"flex items-center justify-between"},[r("div",[r("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.message,trigger:"hover",popperOptions:{modifiers:{computeStyle:{gpuAcceleration:!1}}}},expression:"{\n                  content: incident.message,\n                  trigger: 'hover',\n                  popperOptions: { modifiers: { computeStyle: {gpuAcceleration: false}}}\n                }"}],staticClass:"flex-auto"},[e._v("\n                "+e._s(t.component.name)+"\n              ")])]),e._v(" "),t.component.url.length?r("a",{staticClass:"ml-3 w-4 flex-shrink-0 flex-grow-0",attrs:{href:t.component.url,target:"_blank"}},[r("IconExternal",{staticClass:"w-3 h-3"})],1):e._e()])])})),0)]):e._e()])])}),[],!1,null,null,null);t.a=h.exports},893:function(e,t,r){"use strict";var n=r(1),o=r(883),c=r(720),l=Object(n.b)({name:"Scoring",components:{Dimensions:c.a,ScoringResult:o.a},props:{scores:{type:Object,default:function(){}}}}),d=r(4),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Dimensions",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.width;return r("div",{staticClass:"max-w-6xl"},[e.scores.master?r("div",{staticClass:"mb-10 md:mb-20"},[r("div",{staticClass:"lg:flex flex-wrap -mx-6"},e._l([].concat(e.scores.master),(function(e){return r("ScoringResult",{key:e.identifier,staticClass:"w-full",attrs:{score:e,"master-score":!0,width:n}})})),1)]):e._e(),e._v(" "),e.scores.sub_scores?r("div",[r("div",{staticClass:"grid-scores__group",class:[{"grid-scores__group--twoCol":n>520&&n<=910},{"grid-scores__group--threeCol":n>910}]},e._l(e.scores.sub_scores,(function(e){return r("ScoringResult",{key:e.identifier,attrs:{score:e}})})),1)]):e._e()])}}])})}),[],!1,null,null,null);t.a=component.exports}}]);