(self.webpackChunkheader=self.webpackChunkheader||[]).push([[592],{1967:(i,s,n)=>{n.r(s),n.d(s,{CabeceraComponent:()=>l,SharedUiModule:()=>a});var d=n(1327),t=n(1423);let a=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=t.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=t.\u0275\u0275defineInjector({imports:[d.CommonModule]}),r})(),l=(()=>{class r{ngOnInit(){this.versionLibrary="0.0.2"}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["app-cabecera"]],decls:2,vars:1,template:function(c,o){1&c&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&c&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("cabecera workss v",o.versionLibrary,"!!"))}}),r})()},181:(i,s,n)=>{n.r(s),n.d(s,{SharedUserServiceModule:()=>l,UserService:()=>r});var d=n(1327),t=n(7233),a=n(1423);let l=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=a.\u0275\u0275defineInjector({imports:[d.CommonModule,t.HttpClientModule]}),e})(),r=(()=>{class e{constructor(o){this.http=o}getUser(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({next:o=>{console.log(o)},error:o=>console.error(o)})}}return e.\u0275fac=function(o){return new(o||e)(a.\u0275\u0275inject(t.HttpClient))},e.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);