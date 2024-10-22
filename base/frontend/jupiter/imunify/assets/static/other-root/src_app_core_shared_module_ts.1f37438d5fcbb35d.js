"use strict";(self["webpackJsonpother-root"]=self["webpackJsonpother-root"]||[]).push([["src_app_core_shared_module_ts"],{90285:(e,t,n)=>{n.d(t,{y:()=>v});var o=n(3594),i=n(91792),r=n(53850),a=n(74571),s=n(52191),c=n(29782),l=n(64650);let u=(()=>{class e{constructor(e,t){this.router=e,this.xhr=t,this.emailFilterBy={sender:"emails.quarantine.headers.sender",account_name:"emails.quarantine.headers.account",reason:"emails.quarantine.filters.reason",recipients:"emails.quarantine.headers.recipients",any:"emails.quarantine.headers.any",received_date_from:"emails.quarantine.filters.receivedDateFrom",received_date_to:"emails.quarantine.filters.receivedDateTo",subject:"emails.quarantine.headers.subject"},this.list=this.xhr.wrap(this.xhr.rx(a.i0.list),a.iQ),this.editEmails=this.xhr.request(a.i0.editEmails),this.viewEmail=this.xhr.rx(a.i0.viewEmail),this.emailVersions=this.xhr.rx(a.i0.imunifyEmailVersion,!1,!1)().pipe((0,i.map)((e=>{let t=[];return e.data.items&&(t=e.data.items.components.map((e=>e.name+" - "+e.version))),{version:e.data.items.version,components:t.join("\r\n")}})),(0,c.F)(300),(0,i.catchError)((e=>(0,i.of)(null)))),this.imunifyEmailExist=()=>"undefined"!=typeof i360ieExist&&"1"===i360ieExist}getAvailableKeys(e){return!e&&this.emailFilterBy.account_name&&delete this.emailFilterBy.account_name,this.emailFilterBy}canActivate(){return!!this.imunifyEmailExist()||(this.router.navigate(["/"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](s.Router),r["\u0275\u0275inject"](l.K))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n(90528),d=n(11807),m=n(9249),f=n(2671),M=n(27344),h=n(28838),g=n(64228);let v=(()=>{class e{constructor(e,t,n,o,r,a,s,c){this.emailsService=e,this.historyService=t,this.appState=n,this.licenseService=o,this.eulaService=r,this.reputationService=a,this.userFeaturesStatus=s,this.config=c,this.support=this.config.changes.pipe((0,i.map)((e=>e.PERMISSIONS.support_form)))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](u),r["\u0275\u0275directiveInject"](p.q),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](m.E,8),r["\u0275\u0275directiveInject"](f.L,8),r["\u0275\u0275directiveInject"](M.l,8),r["\u0275\u0275directiveInject"](h.j,8),r["\u0275\u0275directiveInject"](o.p))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],features:[r["\u0275\u0275ProvidersFeature"]([o.p])],decls:3,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"main"),r["\u0275\u0275element"](1,"i360-help-link")(2,"router-outlet"),r["\u0275\u0275elementEnd"]())},dependencies:[s.RouterOutlet,g.U],styles:[".i360-app .i360-logo .i360-service-status {\n  color: #333;\n  font-size: 11px;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n}"],encapsulation:2}),e})()},50509:(e,t,n)=>{n.d(t,{s:()=>a});var o=n(53850),i=n(14633),r=n(38699);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["coming-soon"]],decls:5,vars:0,consts:[[1,"card-container","coming-soon_component"],[1,"text-center"],["svgIcon","dmc"],["translate","",1,"text"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0)(1,"div",1),o["\u0275\u0275element"](2,"mat-icon",2),o["\u0275\u0275elementStart"](3,"p",3),o["\u0275\u0275text"](4,"comingSoon.teaser"),o["\u0275\u0275elementEnd"]()()())},dependencies:[i.MatIcon,r.Pi],styles:[".coming-soon_component[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 127px auto 42px;\n  width: 263px;\n  height: 100px;\n}\n\n.coming-soon_component[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  font-style: italic;\n  letter-spacing: 0.2px;\n  color: #b1b1b1;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}"]}),e})()},94242:(e,t,n)=>{n.d(t,{r:()=>u});var o=n(60136),i=n(14633),r=n(85290),a=n(67765),s=n(69679),c=n(53850),l=n(63722);let u=(()=>{class e{constructor(e){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275inject"](l._6,8))},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[o.CommonModule,i.MatIconModule,r.MatTooltipModule,a.FormsModule,a.ReactiveFormsModule,s.Q]}),e})()},38684:(e,t,n)=>{n.d(t,{m:()=>Re});var o=n(82247),i=n(67765),r=n(50509),a=n(16901),s=n.n(a),c=n(53850);let l=(()=>{class e{transform(e){return e?s().unix(e).format("DD.MM.YYYY"):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c["\u0275\u0275definePipe"]({name:"timestamp",type:e,pure:!0}),e})();var u=n(60136),p=n(92240),d=n(94395),m=n(33530),f=n(38340),M=n(48274),h=n(4497),g=n(89493),v=n(62143),x=n(27276),C=n(69679),y=n(52191),I=n(95471),_=n(17602),b=n(8208),S=n(76399);let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({}),e})();var w=n(47883),P=n(45271),O=n(80586),E=n(33389),k=n(11375),F=n(85290),B=n(45361),N=n(90285),R=n(48810),T=n(71071),q=n(8774),L=n(19140),J=n(14633),V=n(56230),D=n(23096),A=n(10502),Q=n(23233),Y=n(63358),z=n(91818),H=n(43237),K=n(36804),X=n(60675),G=n(55127);const U=function(e,t){return{status:e,resource_type:t}};function $(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"i360-action",1),c["\u0275\u0275listener"]("perform",(function(t){c["\u0275\u0275restoreView"](e);const n=c["\u0275\u0275nextContext"]();return c["\u0275\u0275resetView"](n.malicious.changeItems("restore-from-backup",t))})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("filter",c["\u0275\u0275pureFunction2"](1,U,e.status,e.ResourceType.file))}}let W=(()=>{class e{constructor(e,t){this.malicious=e,this.backupSystemsService=t,this.ResourceType=X._g,this.status=[A.xB.quarantined,A.xB.found]}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](Q.u),c["\u0275\u0275directiveInject"](Y.w))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["i360-restore-from-backup-malicious-action"]],decls:2,vars:3,consts:[["title","actions.tryToRestore",3,"filter","perform",4,"ngIf"],["title","actions.tryToRestore",3,"filter","perform"]],template:function(e,t){1&e&&(c["\u0275\u0275template"](0,$,1,4,"i360-action",0),c["\u0275\u0275pipe"](1,"async")),2&e&&c["\u0275\u0275property"]("ngIf",c["\u0275\u0275pipeBind1"](1,1,t.backupSystemsService.backupsEnabled))},dependencies:[u.NgIf,H.My,G.O,u.AsyncPipe],encapsulation:2}),e})();const Z=function(e){return{status:e}};let ee=(()=>{class e{constructor(e){this.malicious=e,this.status=[A.xB.quarantined]}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](Q.u))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["i360-restore-from-quarantine-malicious-action"]],decls:1,vars:3,consts:[["icon","fish","title","actions.restoreFromQuarantine",3,"filter","perform"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"i360-action",0),c["\u0275\u0275listener"]("perform",(function(e){return t.malicious.changeItems("restore-from-quarantine",e)})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("filter",c["\u0275\u0275pureFunction1"](1,Z,t.status))},dependencies:[H.My,G.O],encapsulation:2}),e})();const te=function(e){return{status:e}};let ne=(()=>{class e{constructor(e,t){this.malicious=e,this.backupSystemsService=t,this.status=[A.xB.quarantined,A.xB.found]}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](Q.u),c["\u0275\u0275directiveInject"](Y.w))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:4,vars:3,consts:[["title","actions.other","i360-group-actions","",3,"filter"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"i360-action",0),c["\u0275\u0275element"](1,"cl-add-to-ignore-malicious-action")(2,"i360-restore-from-backup-malicious-action")(3,"i360-restore-from-quarantine-malicious-action"),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("filter",c["\u0275\u0275pureFunction1"](1,te,t.status))},dependencies:[z.b,H.My,K.O,W,ee],encapsulation:2}),e})();var oe=n(32811),ie=n(76073),re=n(79112);let ae=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[D.d.import({maliciousActions:[re.X,oe.E,ie.K,ee,ne]}),u.CommonModule,x.a]}),e})();var se=n(2671);let ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({providers:[se.L],imports:[u.CommonModule,_.MatButtonModule,k.MatMenuModule,J.MatIconModule,F.MatTooltipModule,R.l]}),e})();var le=n(62007),ue=n(27758),pe=n(60577),de=n(76187),me=n(38949),fe=n(64650),Me=n(47288),he=n(10422),ge=n(74159),ve=n(32377),xe=n(34929),Ce=n(91792),ye=n(84355),Ie=n(11807);class _e{constructor(e){this.appState=e}intercept(e,t){return t.handle(e).pipe((0,Ce.switchMap)((e=>{if(e instanceof b.HttpResponse){const t=e.body.data?e.body.data.license:e.body.license;t&&t.demo&&(this.appState.demo=!0)}return(0,Ce.of)(e)})))}}_e.\u0275fac=function(e){return new(e||_e)(c["\u0275\u0275inject"](Ie.a))},_e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:_e,factory:_e.\u0275fac}),(0,xe.gn)([ye.Q],_e.prototype,"intercept",null);var be=n(9249),Se=n(89114),je=n(15145),we=n(94564),Pe=n(8373),Oe=n(50745),Ee=n(57101),ke=n(63722);let Fe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[u.CommonModule,_.MatButtonModule,R.l]}),e})();var Be=n(94242);r.s,g.S,S.k,w.t,N.y;const Ne=[P.MatRippleModule,M.MatSlideToggleModule,p.MatCheckboxModule,d.MatRadioModule,h.MatProgressBarModule,y.RouterModule,u.CommonModule,f.MatSliderModule,i.FormsModule,b.HttpClientModule,i.ReactiveFormsModule,Fe,v.V,x.a,C.Q,m.MatSelectModule,I.MatAutocompleteModule,_.MatButtonModule,O.r,E.MatDialogModule,J.MatIconModule,k.MatMenuModule,o.MatChipsModule,F.MatTooltipModule,R.l,B.z,ae,j,T.L,q.s,L.Y,V.B,ce,ue.u,pe.n,de.G,Oe.L,ve.k,Se.S,we.MatFormFieldModule,je.MatInputModule,Pe.N,Ee.X,Be.r];let Re=(()=>{class e{constructor(e){}static forUser(){return{ngModule:e,providers:[me.G9,Me.g,fe.K,ge.I,Y.w,be.E,ke._6,{provide:b.HTTP_INTERCEPTORS,useClass:_e,multi:!0},{provide:b.HTTP_INTERCEPTORS,useClass:he.z,multi:!0}]}}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275inject"](ke._6,8))},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[Ne,le.r,le.r,P.MatRippleModule,M.MatSlideToggleModule,p.MatCheckboxModule,d.MatRadioModule,h.MatProgressBarModule,y.RouterModule,u.CommonModule,f.MatSliderModule,i.FormsModule,b.HttpClientModule,i.ReactiveFormsModule,Fe,v.V,x.a,C.Q,m.MatSelectModule,I.MatAutocompleteModule,_.MatButtonModule,O.r,E.MatDialogModule,J.MatIconModule,k.MatMenuModule,o.MatChipsModule,F.MatTooltipModule,R.l,B.z,ae,j,T.L,q.s,L.Y,V.B,ce,ue.u,pe.n,de.G,Oe.L,ve.k,Se.S,we.MatFormFieldModule,je.MatInputModule,Pe.N,Ee.X,Be.r]}),e})()},63358:(e,t,n)=>{n.d(t,{w:()=>c});var o=n(91792),i=n(70690),r=n(29782),a=n(53850),s=n(64650);let c=(()=>{class e{constructor(e){this.xhr=e,this.status=this.xhr.rx(i.LJ.status),this.narrowStatus=this.xhr.rx(i.LJ.narrowStatus),this.list=this.xhr.rx(i.LJ.list),this.disable=this.xhr.rx(i.LJ.disable),this.disableCloudlinux=this.xhr.rx(i.LJ.disableCloudlinux),this.checkCloudlinux=this.xhr.rx(i.LJ.checkCloudlinux),this.init=this.xhr.rx(i.LJ.init),this.backupsEnabled=this.narrowStatus().pipe((0,r.F)(5),(0,o.map)((e=>e.data.items&&e.data.items.enabled)))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](s.K))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},47883:(e,t,n)=>{n.d(t,{t:()=>r});var o=n(53850);const i=["*"];let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["i360-colored-ip"]],hostVars:1,hostBindings:function(e,t){2&e&&o["\u0275\u0275attribute"]("color",t.listName)},inputs:{listName:"listName"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"text-nowrap"]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275elementStart"](0,"span",0),o["\u0275\u0275projection"](1),o["\u0275\u0275elementEnd"]())},styles:["[_nghost-%COMP%] {\n  height: 23px;\n  display: inline-block;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 106px;\n  display: inline-block;\n  height: 23px;\n  margin: 0;\n  padding-right: 14px;\n  padding-left: 14px;\n  border-radius: 100px;\n  color: #fff;\n  line-height: 23px;\n  text-align: center;\n}\n[_nghost-%COMP%]:not([color])   span[_ngcontent-%COMP%] {\n  background-color: #299aed;\n}\n[color=black][_nghost-%COMP%]   span[_ngcontent-%COMP%], [color=drop][_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n[color=white][_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #fff;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.27);\n}\n[color=gray][_nghost-%COMP%]   span[_ngcontent-%COMP%], [color=captcha][_nghost-%COMP%]   span[_ngcontent-%COMP%], [color=splashscreen][_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #9f9f9f;\n}\na[_nghost-%COMP%]:hover   span[_ngcontent-%COMP%], a   [_nghost-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}"]}),e})()},76399:(e,t,n)=>{n.d(t,{k:()=>p});var o=n(53850),i=n(98521),r=n(60136),a=n(21819),s=n(73281),c=n(38699);const l=function(e){return{listName:e}};function u(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0,2),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"translateCut"),o["\u0275\u0275pipe"](3,"translate"),o["\u0275\u0275elementStart"](4,"a",3),o["\u0275\u0275text"](5),o["\u0275\u0275pipe"](6,"translateCut"),o["\u0275\u0275pipe"](7,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"translateCut"),o["\u0275\u0275pipe"](10,"translate"),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](2,3,o["\u0275\u0275pipeBind2"](3,6,"utils.csf.note",o["\u0275\u0275pureFunction1"](21,l,e.listName)),0)," "),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](6,9,o["\u0275\u0275pipeBind2"](7,12,"utils.csf.note",o["\u0275\u0275pureFunction1"](23,l,e.listName)),1)," "),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](9,15,o["\u0275\u0275pipeBind2"](10,18,"utils.csf.note",o["\u0275\u0275pureFunction1"](25,l,e.listName)),2)," ")}}let p=(()=>{class e{constructor(e){this.panel=e}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.s_))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["i360-csf-warning"]],inputs:{listName:"listName"},decls:5,vars:7,consts:[["title",""],["note","",4,"ngIf"],["note",""],["href","../../../cgi/configserver/csf.cgi",1,"i360-dashboard-link"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"i360-whole-page-error"),o["\u0275\u0275elementContainerStart"](1,0),o["\u0275\u0275text"](2),o["\u0275\u0275pipe"](3,"translate"),o["\u0275\u0275elementContainerEnd"](),o["\u0275\u0275template"](4,u,11,27,"ng-container",1),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind2"](3,2,"utils.csf.title",o["\u0275\u0275pureFunction1"](5,l,t.listName))," "),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.panel.isCpanel))},dependencies:[r.NgIf,a.G,s.v,c.X$],encapsulation:2}),e})()},57101:(e,t,n)=>{n.d(t,{X:()=>r});var o=n(60136),i=n(53850);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[o.CommonModule]}),e})()}}]);
//# sourceMappingURL=src_app_core_shared_module_ts.1f37438d5fcbb35d.js.map