(self.webpackChunkheader=self.webpackChunkheader||[]).push([[529],{9646:(A,T,h)=>{h.d(T,{of:()=>O});var E=h(7669),i=h(2076);function O(...g){const C=(0,E.yG)(g);return(0,i.D)(g,C)}},4351:(A,T,h)=>{h.d(T,{b:()=>O});var E=h(5577),i=h(576);function O(g,C){return(0,i.m)(C)?(0,E.z)(g,C,1):(0,E.z)(g,1)}},9300:(A,T,h)=>{h.d(T,{h:()=>O});var E=h(4482),i=h(5403);function O(g,C){return(0,E.e)((L,P)=>{let N=0;L.subscribe((0,i.x)(P,H=>g.call(C,H,N++)&&P.next(H)))})}},529:(A,T,h)=>{h.r(T),h.d(T,{HTTP_INTERCEPTORS:()=>S,HttpBackend:()=>H,HttpClient:()=>ee,HttpClientJsonpModule:()=>Oe,HttpClientModule:()=>we,HttpClientXsrfModule:()=>oe,HttpContext:()=>Y,HttpContextToken:()=>ce,HttpErrorResponse:()=>D,HttpEventType:()=>d,HttpHandler:()=>N,HttpHeaderResponse:()=>j,HttpHeaders:()=>v,HttpParams:()=>b,HttpRequest:()=>_,HttpResponse:()=>M,HttpResponseBase:()=>I,HttpUrlEncodingCodec:()=>V,HttpXhrBackend:()=>J,HttpXsrfTokenExtractor:()=>K,JsonpClientBackend:()=>B,JsonpInterceptor:()=>ne,XhrFactory:()=>Pe,\u0275HttpInterceptingHandler:()=>re});var E=h(1327),i=h(1423),O=h(9646),g=h(9751),C=h(4351),L=h(9300),P=h(4004);class N{}class H{}class v{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new v;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(u=>-1===o.indexOf(u)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class V{encodeKey(t){return G(t)}encodeValue(t){return G(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const le=/%(\d[a-f0-9])/gi,de={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function G(s){return encodeURIComponent(s).replace(le,(t,e)=>de[e]??t)}function k(s){return`${s}`}class b{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new V,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ae(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,u]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],a=e.get(l)||[];a.push(u),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],n=Array.isArray(r)?r.map(k):[k(r)];this.map.set(e,n)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new b({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(k(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(k(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(t){this.defaultValue=t}}class Y{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function Q(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function Z(s){return typeof Blob<"u"&&s instanceof Blob}function q(s){return typeof FormData<"u"&&s instanceof FormData}class _{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function he(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new v),this.context||(this.context=new Y),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const u=e.indexOf("?");this.urlWithParams=e+(-1===u?"?":u<e.length-1?"&":"")+l}}else this.params=new b,this.urlWithParams=e}serializeBody(){return null===this.body?null:Q(this.body)||Z(this.body)||q(this.body)||function ue(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof b?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||q(this.body)?null:Z(this.body)?this.body.type||null:Q(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,l=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,u=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,f=t.params||this.params;const R=t.context??this.context;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((w,m)=>w.set(m,t.setHeaders[m]),a)),t.setParams&&(f=Object.keys(t.setParams).reduce((w,m)=>w.set(m,t.setParams[m]),f)),new _(e,r,o,{params:f,headers:a,context:R,reportProgress:u,responseType:n,withCredentials:l})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class I{constructor(t,e=200,r="OK"){this.headers=t.headers||new v,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class j extends I{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new j({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class M extends I{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new M({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class D extends I{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function U(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let ee=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof _)o=e;else{let a,f;a=n.headers instanceof v?n.headers:new v(n.headers),n.params&&(f=n.params instanceof b?n.params:new b({fromObject:n.params})),o=new _(e,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:f,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,O.of)(o).pipe((0,C.b)(a=>this.handler.handle(a)));if(e instanceof _||"events"===n.observe)return l;const u=l.pipe((0,L.h)(a=>a instanceof M));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return u.pipe((0,P.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return u.pipe((0,P.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return u.pipe((0,P.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return u.pipe((0,P.U)(a=>a.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new b).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,U(n,r))}post(e,r,n={}){return this.request("POST",e,U(n,r))}put(e,r,n={}){return this.request("PUT",e,U(n,r))}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(N))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class te{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const S=new i.InjectionToken("HTTP_INTERCEPTORS");let F,pe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class se{}let B=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new g.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let u=null,a=!1;this.callbackMap[n]=m=>{delete this.callbackMap[n],u=m,a=!0};const f=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",m=>{this.resolvedPromise.then(()=>{f(),a?(r.next(new M({body:u,status:200,statusText:"OK",url:o})),r.complete()):r.error(new D({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",m=>{f(),r.error(new D({error:m,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:d.Sent}),()=>{a||this.removeListeners(l),f()}})}removeListeners(e){F||(F=this.document.implementation.createHTMLDocument()),F.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(se),i.\u0275\u0275inject(E.DOCUMENT))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ne=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(B))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ve=/^\)\]\}',?\n/;let J=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new g.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((c,p)=>n.setRequestHeader(c,p.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const c=e.detectContentTypeHeader();null!==c&&n.setRequestHeader("Content-Type",c)}if(e.responseType){const c=e.responseType.toLowerCase();n.responseType="json"!==c?c:"text"}const o=e.serializeBody();let l=null;const u=()=>{if(null!==l)return l;const c=n.statusText||"OK",p=new v(n.getAllResponseHeaders()),x=function be(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new j({headers:p,status:n.status,statusText:c,url:x}),l},a=()=>{let{headers:c,status:p,statusText:x,url:ie}=u(),y=null;204!==p&&(y=typeof n.response>"u"?n.responseText:n.response),0===p&&(p=y?200:0);let $=p>=200&&p<300;if("json"===e.responseType&&"string"==typeof y){const He=y;y=y.replace(ve,"");try{y=""!==y?JSON.parse(y):null}catch(_e){y=He,$&&($=!1,y={error:_e,text:y})}}$?(r.next(new M({body:y,headers:c,status:p,statusText:x,url:ie||void 0})),r.complete()):r.error(new D({error:y,headers:c,status:p,statusText:x,url:ie||void 0}))},f=c=>{const{url:p}=u(),x=new D({error:c,status:n.status||0,statusText:n.statusText||"Unknown Error",url:p||void 0});r.error(x)};let R=!1;const w=c=>{R||(r.next(u()),R=!0);let p={type:d.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(p.total=c.total),"text"===e.responseType&&!!n.responseText&&(p.partialText=n.responseText),r.next(p)},m=c=>{let p={type:d.UploadProgress,loaded:c.loaded};c.lengthComputable&&(p.total=c.total),r.next(p)};return n.addEventListener("load",a),n.addEventListener("error",f),n.addEventListener("timeout",f),n.addEventListener("abort",f),e.reportProgress&&(n.addEventListener("progress",w),null!==o&&n.upload&&n.upload.addEventListener("progress",m)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",f),n.removeEventListener("abort",f),n.removeEventListener("load",a),n.removeEventListener("timeout",f),e.reportProgress&&(n.removeEventListener("progress",w),null!==o&&n.upload&&n.upload.removeEventListener("progress",m)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(E.XhrFactory))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const z=new i.InjectionToken("XSRF_COOKIE_NAME"),X=new i.InjectionToken("XSRF_HEADER_NAME");class K{}let Te=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,E.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(E.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(z))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),W=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(K),i.\u0275\u0275inject(X))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),re=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(S,[]);this.chain=r.reduceRight((n,o)=>new te(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(H),i.\u0275\u0275inject(i.Injector))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Ce(){return"object"==typeof window?window:{}}let oe=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:W,useClass:pe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:z,useValue:e.cookieName}:[],e.headerName?{provide:X,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[W,{provide:S,useExisting:W,multi:!0},{provide:K,useClass:Te},{provide:z,useValue:"XSRF-TOKEN"},{provide:X,useValue:"X-XSRF-TOKEN"}]}),s})(),we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[ee,{provide:N,useClass:re},J,{provide:H,useExisting:J}],imports:[oe.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),s})(),Oe=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[B,{provide:se,useFactory:Ce},{provide:S,useClass:ne,multi:!0}]}),s})();const Pe=E.XhrFactory}}]);