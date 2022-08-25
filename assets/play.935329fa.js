var Ao=Object.defineProperty;var i=(r,e)=>Ao(r,"name",{value:e,configurable:!0});i(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}i(n,"processPreload")},"polyfill")();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jo(r){var e=r.default;if(typeof e=="function"){var t=i(function(){return e.apply(this,arguments)},"a");t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),t}i(jo,"getAugmentedNamespace");var _r=i(function(r){return r&&r.Math==Math&&r},"check"),A=_r(typeof globalThis=="object"&&globalThis)||_r(typeof window=="object"&&window)||_r(typeof self=="object"&&self)||_r(typeof H=="object"&&H)||function(){return this}()||Function("return this")(),nt={},E=i(function(r){try{return!!r()}catch{return!0}},"fails$p"),No=E,W=!No(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Lo=E,re=!Lo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Mo=re,Ar=Function.prototype.call,L=Mo?Ar.bind(Ar):function(){return Ar.apply(Ar,arguments)},na={},aa={}.propertyIsEnumerable,oa=Object.getOwnPropertyDescriptor,Do=oa&&!aa.call({1:2},1);na.f=Do?i(function(e){var t=oa(this,e);return!!t&&t.enumerable},"propertyIsEnumerable"):aa;var Or=i(function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},"createPropertyDescriptor$5"),ia=re,ca=Function.prototype,Fo=ca.bind,De=ca.call,Bo=ia&&Fo.bind(De,De),O=ia?function(r){return r&&Bo(r)}:function(r){return r&&function(){return De.apply(r,arguments)}},sa=O,Go=sa({}.toString),Uo=sa("".slice),Sr=i(function(r){return Uo(Go(r),8,-1)},"classofRaw$1"),Ko=O,ko=E,zo=Sr,ce=Object,Wo=Ko("".split),la=ko(function(){return!ce("z").propertyIsEnumerable(0)})?function(r){return zo(r)=="String"?Wo(r,""):ce(r)}:ce,qo=TypeError,Q=i(function(r){if(r==null)throw qo("Can't call method on "+r);return r},"requireObjectCoercible$8"),Xo=la,Ho=Q,ee=i(function(r){return Xo(Ho(r))},"toIndexedObject$4"),T=i(function(r){return typeof r=="function"},"isCallable$k"),Yo=T,Y=i(function(r){return typeof r=="object"?r!==null:Yo(r)},"isObject$9"),se=A,Vo=T,Jo=i(function(r){return Vo(r)?r:void 0},"aFunction"),V=i(function(r,e){return arguments.length<2?Jo(se[r]):se[r]&&se[r][e]},"getBuiltIn$9"),Zo=O,wr=Zo({}.isPrototypeOf),Qo=V,ri=Qo("navigator","userAgent")||"",ua=A,le=ri,jt=ua.process,Nt=ua.Deno,Lt=jt&&jt.versions||Nt&&Nt.version,Mt=Lt&&Lt.v8,K,Kr;Mt&&(K=Mt.split("."),Kr=K[0]>0&&K[0]<4?1:+(K[0]+K[1]));!Kr&&le&&(K=le.match(/Edge\/(\d+)/),(!K||K[1]>=74)&&(K=le.match(/Chrome\/(\d+)/),K&&(Kr=+K[1])));var ei=Kr,Dt=ei,ti=E,va=!!Object.getOwnPropertySymbols&&!ti(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Dt&&Dt<41}),ni=va,fa=ni&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ai=V,oi=T,ii=wr,ci=fa,si=Object,pa=ci?function(r){return typeof r=="symbol"}:function(r){var e=ai("Symbol");return oi(e)&&ii(e.prototype,si(r))},li=String,Ir=i(function(r){try{return li(r)}catch{return"Object"}},"tryToString$5"),ui=T,vi=Ir,fi=TypeError,Tr=i(function(r){if(ui(r))return r;throw fi(vi(r)+" is not a function")},"aCallable$5"),pi=Tr,fr=i(function(r,e){var t=r[e];return t==null?void 0:pi(t)},"getMethod$6"),ue=L,ve=T,fe=Y,gi=TypeError,di=i(function(r,e){var t,n;if(e==="string"&&ve(t=r.toString)&&!fe(n=ue(t,r))||ve(t=r.valueOf)&&!fe(n=ue(t,r))||e!=="string"&&ve(t=r.toString)&&!fe(n=ue(t,r)))return n;throw gi("Can't convert object to primitive value")},"ordinaryToPrimitive$1"),te={exports:{}},yi=!1,Ft=A,$i=Object.defineProperty,at=i(function(r,e){try{$i(Ft,r,{value:e,configurable:!0,writable:!0})}catch{Ft[r]=e}return e},"defineGlobalProperty$3"),hi=A,mi=at,Bt="__core-js_shared__",bi=hi[Bt]||mi(Bt,{}),ot=bi,Gt=ot;(te.exports=function(r,e){return Gt[r]||(Gt[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var xi=Q,Ei=Object,or=i(function(r){return Ei(xi(r))},"toObject$7"),Oi=O,Si=or,wi=Oi({}.hasOwnProperty),F=Object.hasOwn||i(function(e,t){return wi(Si(e),t)},"hasOwn"),Ii=O,Ti=0,Ri=Math.random(),Pi=Ii(1 .toString),ga=i(function(r){return"Symbol("+(r===void 0?"":r)+")_"+Pi(++Ti+Ri,36)},"uid$2"),Ci=A,_i=te.exports,Ut=F,Ai=ga,Kt=va,da=fa,cr=_i("wks"),nr=Ci.Symbol,kt=nr&&nr.for,ji=da?nr:nr&&nr.withoutSetter||Ai,j=i(function(r){if(!Ut(cr,r)||!(Kt||typeof cr[r]=="string")){var e="Symbol."+r;Kt&&Ut(nr,r)?cr[r]=nr[r]:da&&kt?cr[r]=kt(e):cr[r]=ji(e)}return cr[r]},"wellKnownSymbol$f"),Ni=L,zt=Y,Wt=pa,Li=fr,Mi=di,Di=j,Fi=TypeError,Bi=Di("toPrimitive"),Gi=i(function(r,e){if(!zt(r)||Wt(r))return r;var t=Li(r,Bi),n;if(t){if(e===void 0&&(e="default"),n=Ni(t,r,e),!zt(n)||Wt(n))return n;throw Fi("Can't convert object to primitive value")}return e===void 0&&(e="number"),Mi(r,e)},"toPrimitive$1"),Ui=Gi,Ki=pa,ya=i(function(r){var e=Ui(r,"string");return Ki(e)?e:e+""},"toPropertyKey$2"),ki=A,qt=Y,Fe=ki.document,zi=qt(Fe)&&qt(Fe.createElement),$a=i(function(r){return zi?Fe.createElement(r):{}},"documentCreateElement$1"),Wi=W,qi=E,Xi=$a,ha=!Wi&&!qi(function(){return Object.defineProperty(Xi("div"),"a",{get:function(){return 7}}).a!=7}),Hi=W,Yi=L,Vi=na,Ji=Or,Zi=ee,Qi=ya,rc=F,ec=ha,Xt=Object.getOwnPropertyDescriptor;nt.f=Hi?Xt:i(function(e,t){if(e=Zi(e),t=Qi(t),ec)try{return Xt(e,t)}catch{}if(rc(e,t))return Ji(!Yi(Vi.f,e,t),e[t])},"getOwnPropertyDescriptor");var J={},tc=W,nc=E,ma=tc&&nc(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),ac=Y,oc=String,ic=TypeError,N=i(function(r){if(ac(r))return r;throw ic(oc(r)+" is not an object")},"anObject$e"),cc=W,sc=ha,lc=ma,jr=N,Ht=ya,uc=TypeError,pe=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,ge="enumerable",de="configurable",ye="writable";J.f=cc?lc?i(function(e,t,n){if(jr(e),t=Ht(t),jr(n),typeof e=="function"&&t==="prototype"&&"value"in n&&ye in n&&!n[ye]){var o=vc(e,t);o&&o[ye]&&(e[t]=n.value,n={configurable:de in n?n[de]:o[de],enumerable:ge in n?n[ge]:o[ge],writable:!1})}return pe(e,t,n)},"defineProperty"):pe:i(function(e,t,n){if(jr(e),t=Ht(t),jr(n),sc)try{return pe(e,t,n)}catch{}if("get"in n||"set"in n)throw uc("Accessors not supported");return"value"in n&&(e[t]=n.value),e},"defineProperty");var fc=W,pc=J,gc=Or,pr=fc?function(r,e,t){return pc.f(r,e,gc(1,t))}:function(r,e,t){return r[e]=t,r},it={exports:{}},Be=W,dc=F,ba=Function.prototype,yc=Be&&Object.getOwnPropertyDescriptor,ct=dc(ba,"name"),$c=ct&&i(function(){},"something").name==="something",hc=ct&&(!Be||Be&&yc(ba,"name").configurable),mc={EXISTS:ct,PROPER:$c,CONFIGURABLE:hc},bc=O,xc=T,Ge=ot,Ec=bc(Function.toString);xc(Ge.inspectSource)||(Ge.inspectSource=function(r){return Ec(r)});var st=Ge.inspectSource,Oc=A,Sc=T,wc=st,Yt=Oc.WeakMap,Ic=Sc(Yt)&&/native code/.test(wc(Yt)),Tc=te.exports,Rc=ga,Vt=Tc("keys"),lt=i(function(r){return Vt[r]||(Vt[r]=Rc(r))},"sharedKey$3"),ut={},Pc=Ic,xa=A,$e=O,Cc=Y,_c=pr,he=F,me=ot,Ac=lt,jc=ut,Jt="Object already initialized",Ue=xa.TypeError,Nc=xa.WeakMap,kr,br,zr,Lc=i(function(r){return zr(r)?br(r):kr(r,{})},"enforce"),Mc=i(function(r){return function(e){var t;if(!Cc(e)||(t=br(e)).type!==r)throw Ue("Incompatible receiver, "+r+" required");return t}},"getterFor");if(Pc||me.state){var tr=me.state||(me.state=new Nc),Dc=$e(tr.get),Zt=$e(tr.has),Fc=$e(tr.set);kr=i(function(r,e){if(Zt(tr,r))throw new Ue(Jt);return e.facade=r,Fc(tr,r,e),e},"set"),br=i(function(r){return Dc(tr,r)||{}},"get"),zr=i(function(r){return Zt(tr,r)},"has")}else{var sr=Ac("state");jc[sr]=!0,kr=i(function(r,e){if(he(r,sr))throw new Ue(Jt);return e.facade=r,_c(r,sr,e),e},"set"),br=i(function(r){return he(r,sr)?r[sr]:{}},"get"),zr=i(function(r){return he(r,sr)},"has")}var vt={set:kr,get:br,has:zr,enforce:Lc,getterFor:Mc},Bc=E,Gc=T,Nr=F,Ke=W,Uc=mc.CONFIGURABLE,Kc=st,Ea=vt,kc=Ea.enforce,zc=Ea.get,Fr=Object.defineProperty,Wc=Ke&&!Bc(function(){return Fr(function(){},"length",{value:8}).length!==8}),qc=String(String).split("String"),Xc=it.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Nr(r,"name")||Uc&&r.name!==e)&&(Ke?Fr(r,"name",{value:e,configurable:!0}):r.name=e),Wc&&t&&Nr(t,"arity")&&r.length!==t.arity&&Fr(r,"length",{value:t.arity});try{t&&Nr(t,"constructor")&&t.constructor?Ke&&Fr(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=kc(r);return Nr(n,"source")||(n.source=qc.join(typeof e=="string"?e:"")),r};Function.prototype.toString=Xc(i(function(){return Gc(this)&&zc(this).source||Kc(this)},"toString"),"toString");var Hc=T,Yc=J,Vc=it.exports,Jc=at,Rr=i(function(r,e,t,n){n||(n={});var o=n.enumerable,c=n.name!==void 0?n.name:e;if(Hc(t)&&Vc(t,c,n),n.global)o?r[e]=t:Jc(e,t);else{try{n.unsafe?r[e]&&(o=!0):delete r[e]}catch{}o?r[e]=t:Yc.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},"defineBuiltIn$5"),Oa={},Zc=Math.ceil,Qc=Math.floor,rs=Math.trunc||i(function(e){var t=+e;return(t>0?Qc:Zc)(t)},"trunc"),es=rs,rr=i(function(r){var e=+r;return e!==e||e===0?0:es(e)},"toIntegerOrInfinity$8"),ts=rr,ns=Math.max,as=Math.min,os=i(function(r,e){var t=ts(r);return t<0?ns(t+e,0):as(t,e)},"toAbsoluteIndex$1"),is=rr,cs=Math.min,ft=i(function(r){return r>0?cs(is(r),9007199254740991):0},"toLength$3"),ss=ft,gr=i(function(r){return ss(r.length)},"lengthOfArrayLike$6"),ls=ee,us=os,vs=gr,Qt=i(function(r){return function(e,t,n){var o=ls(e),c=vs(o),u=us(n,c),l;if(r&&t!=t){for(;c>u;)if(l=o[u++],l!=l)return!0}else for(;c>u;u++)if((r||u in o)&&o[u]===t)return r||u||0;return!r&&-1}},"createMethod$2"),Sa={includes:Qt(!0),indexOf:Qt(!1)},fs=O,be=F,ps=ee,gs=Sa.indexOf,ds=ut,rn=fs([].push),wa=i(function(r,e){var t=ps(r),n=0,o=[],c;for(c in t)!be(ds,c)&&be(t,c)&&rn(o,c);for(;e.length>n;)be(t,c=e[n++])&&(~gs(o,c)||rn(o,c));return o},"objectKeysInternal"),pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ys=wa,$s=pt,hs=$s.concat("length","prototype");Oa.f=Object.getOwnPropertyNames||i(function(e){return ys(e,hs)},"getOwnPropertyNames");var Ia={};Ia.f=Object.getOwnPropertySymbols;var ms=V,bs=O,xs=Oa,Es=Ia,Os=N,Ss=bs([].concat),ws=ms("Reflect","ownKeys")||i(function(e){var t=xs.f(Os(e)),n=Es.f;return n?Ss(t,n(e)):t},"ownKeys"),en=F,Is=ws,Ts=nt,Rs=J,gt=i(function(r,e,t){for(var n=Is(e),o=Rs.f,c=Ts.f,u=0;u<n.length;u++){var l=n[u];!en(r,l)&&!(t&&en(t,l))&&o(r,l,c(e,l))}},"copyConstructorProperties$3"),Ps=E,Cs=T,_s=/#|\.prototype\./,Pr=i(function(r,e){var t=js[As(r)];return t==Ls?!0:t==Ns?!1:Cs(e)?Ps(e):!!e},"isForced$1"),As=Pr.normalize=function(r){return String(r).replace(_s,".").toLowerCase()},js=Pr.data={},Ns=Pr.NATIVE="N",Ls=Pr.POLYFILL="P",Ms=Pr,xe=A,Ds=nt.f,Fs=pr,Bs=Rr,Gs=at,Us=gt,Ks=Ms,P=i(function(r,e){var t=r.target,n=r.global,o=r.stat,c,u,l,a,s,v;if(n?u=xe:o?u=xe[t]||Gs(t,{}):u=(xe[t]||{}).prototype,u)for(l in e){if(s=e[l],r.dontCallGetSet?(v=Ds(u,l),a=v&&v.value):a=u[l],c=Ks(n?l:t+(o?".":"#")+l,r.forced),!c&&a!==void 0){if(typeof s==typeof a)continue;Us(s,a)}(r.sham||a&&a.sham)&&Fs(s,"sham",!0),Bs(u,l,s,r)}},"_export"),ks=E,zs=!ks(function(){function r(){}return i(r,"F"),r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Ws=F,qs=T,Xs=or,Hs=lt,Ys=zs,tn=Hs("IE_PROTO"),ke=Object,Vs=ke.prototype,Ta=Ys?ke.getPrototypeOf:function(r){var e=Xs(r);if(Ws(e,tn))return e[tn];var t=e.constructor;return qs(t)&&e instanceof t?t.prototype:e instanceof ke?Vs:null},Js=T,Zs=String,Qs=TypeError,rl=i(function(r){if(typeof r=="object"||Js(r))return r;throw Qs("Can't set "+Zs(r)+" as a prototype")},"aPossiblePrototype$1"),el=O,tl=N,nl=rl,dt=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=el(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return i(function(o,c){return tl(o),nl(c),r?t(o,c):o.__proto__=c,o},"setPrototypeOf")}():void 0),Ra={},al=wa,ol=pt,il=Object.keys||i(function(e){return al(e,ol)},"keys"),cl=W,sl=ma,ll=J,ul=N,vl=ee,fl=il;Ra.f=cl&&!sl?Object.defineProperties:i(function(e,t){ul(e);for(var n=vl(t),o=fl(t),c=o.length,u=0,l;c>u;)ll.f(e,l=o[u++],n[l]);return e},"defineProperties");var pl=V,gl=pl("document","documentElement"),dl=N,yl=Ra,nn=pt,$l=ut,hl=gl,ml=$a,bl=lt,an=">",on="<",ze="prototype",We="script",Pa=bl("IE_PROTO"),Ee=i(function(){},"EmptyConstructor"),Ca=i(function(r){return on+We+an+r+on+"/"+We+an},"scriptTag"),cn=i(function(r){r.write(Ca("")),r.close();var e=r.parentWindow.Object;return r=null,e},"NullProtoObjectViaActiveX"),xl=i(function(){var r=ml("iframe"),e="java"+We+":",t;return r.style.display="none",hl.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(Ca("document.F=Object")),t.close(),t.F},"NullProtoObjectViaIFrame"),Lr,Br=i(function(){try{Lr=new ActiveXObject("htmlfile")}catch{}Br=typeof document<"u"?document.domain&&Lr?cn(Lr):xl():cn(Lr);for(var r=nn.length;r--;)delete Br[ze][nn[r]];return Br()},"NullProtoObject");$l[Pa]=!0;var ne=Object.create||i(function(e,t){var n;return e!==null?(Ee[ze]=dl(e),n=new Ee,Ee[ze]=null,n[Pa]=e):n=Br(),t===void 0?n:yl.f(n,t)},"create"),El=O,_a=Error,Ol=El("".replace),Sl=function(r){return String(_a(r).stack)}("zxcasd"),Aa=/\n\s*at [^:]*:[^\n]*/,wl=Aa.test(Sl),ja=i(function(r,e){if(wl&&typeof r=="string"&&!_a.prepareStackTrace)for(;e--;)r=Ol(r,Aa,"");return r},"clearErrorStack$2"),Il=Y,Tl=pr,Na=i(function(r,e){Il(e)&&"cause"in e&&Tl(r,"cause",e.cause)},"installErrorCause$2"),sn=O,Rl=Tr,Pl=re,Cl=sn(sn.bind),La=i(function(r,e){return Rl(r),e===void 0?r:Pl?Cl(r,e):function(){return r.apply(e,arguments)}},"functionBindContext"),yt={},_l=j,Al=yt,jl=_l("iterator"),Nl=Array.prototype,Ll=i(function(r){return r!==void 0&&(Al.Array===r||Nl[jl]===r)},"isArrayIteratorMethod$1"),Ml=j,Dl=Ml("toStringTag"),Ma={};Ma[Dl]="z";var Fl=String(Ma)==="[object z]",Bl=Fl,Gl=T,Gr=Sr,Ul=j,Kl=Ul("toStringTag"),kl=Object,zl=Gr(function(){return arguments}())=="Arguments",Wl=i(function(r,e){try{return r[e]}catch{}},"tryGet"),$t=Bl?Gr:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=Wl(e=kl(r),Kl))=="string"?t:zl?Gr(e):(n=Gr(e))=="Object"&&Gl(e.callee)?"Arguments":n},ql=$t,ln=fr,Xl=yt,Hl=j,Yl=Hl("iterator"),Da=i(function(r){if(r!=null)return ln(r,Yl)||ln(r,"@@iterator")||Xl[ql(r)]},"getIteratorMethod$2"),Vl=L,Jl=Tr,Zl=N,Ql=Ir,ru=Da,eu=TypeError,tu=i(function(r,e){var t=arguments.length<2?ru(r):e;if(Jl(t))return Zl(Vl(t,r));throw eu(Ql(r)+" is not iterable")},"getIterator$1"),nu=L,un=N,au=fr,ou=i(function(r,e,t){var n,o;un(r);try{if(n=au(r,"return"),!n){if(e==="throw")throw t;return t}n=nu(n,r)}catch(c){o=!0,n=c}if(e==="throw")throw t;if(o)throw n;return un(n),t},"iteratorClose$1"),iu=La,cu=L,su=N,lu=Ir,uu=Ll,vu=gr,vn=wr,fu=tu,pu=Da,fn=ou,gu=TypeError,Ur=i(function(r,e){this.stopped=r,this.result=e},"Result"),pn=Ur.prototype,Fa=i(function(r,e,t){var n=t&&t.that,o=!!(t&&t.AS_ENTRIES),c=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),a=iu(e,n),s,v,f,p,g,d,$,x=i(function(b){return s&&fn(s,"normal",b),new Ur(!0,b)},"stop"),w=i(function(b){return o?(su(b),l?a(b[0],b[1],x):a(b[0],b[1])):l?a(b,x):a(b)},"callFn");if(c)s=r.iterator;else if(u)s=r;else{if(v=pu(r),!v)throw gu(lu(r)+" is not iterable");if(uu(v)){for(f=0,p=vu(r);p>f;f++)if(g=w(r[f]),g&&vn(pn,g))return g;return new Ur(!1)}s=fu(r,v)}for(d=c?r.next:s.next;!($=cu(d,s)).done;){try{g=w($.value)}catch(b){fn(s,"throw",b)}if(typeof g=="object"&&g&&vn(pn,g))return g}return new Ur(!1)},"iterate$2"),du=$t,yu=String,er=i(function(r){if(du(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return yu(r)},"toString$8"),$u=er,Ba=i(function(r,e){return r===void 0?arguments.length<2?"":e:$u(r)},"normalizeStringArgument$2"),hu=E,mu=Or,Ga=!hu(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",mu(1,7)),r.stack!==7):!0}),bu=P,xu=wr,Eu=Ta,Wr=dt,Ou=gt,Ua=ne,Mr=pr,Oe=Or,Su=ja,wu=Na,Iu=Fa,Tu=Ba,Ru=j,Pu=Ga,Cu=Ru("toStringTag"),qr=Error,_u=[].push,xr=i(function(e,t){var n=arguments.length>2?arguments[2]:void 0,o=xu(Se,this),c;Wr?c=Wr(new qr,o?Eu(this):Se):(c=o?this:Ua(Se),Mr(c,Cu,"Error")),t!==void 0&&Mr(c,"message",Tu(t)),Pu&&Mr(c,"stack",Su(c.stack,1)),wu(c,n);var u=[];return Iu(e,_u,{that:u}),Mr(c,"errors",u),c},"AggregateError");Wr?Wr(xr,qr):Ou(xr,qr,{name:!0});var Se=xr.prototype=Ua(qr.prototype,{constructor:Oe(1,xr),message:Oe(1,""),name:Oe(1,"AggregateError")});bu({global:!0,constructor:!0,arity:2},{AggregateError:xr});var Au=re,Ka=Function.prototype,gn=Ka.apply,dn=Ka.call,ht=typeof Reflect=="object"&&Reflect.apply||(Au?dn.bind(gn):function(){return dn.apply(gn,arguments)}),ju=J.f,Nu=i(function(r,e,t){t in r||ju(r,t,{configurable:!0,get:function(){return e[t]},set:function(n){e[t]=n}})},"proxyAccessor$1"),Lu=T,Mu=Y,yn=dt,Du=i(function(r,e,t){var n,o;return yn&&Lu(n=e.constructor)&&n!==t&&Mu(o=n.prototype)&&o!==t.prototype&&yn(r,o),r},"inheritIfRequired$1"),$n=V,Fu=F,we=pr,Bu=wr,hn=dt,mn=gt,bn=Nu,Gu=Du,Uu=Ba,Ku=Na,ku=ja,zu=Ga,Wu=W,ka=i(function(r,e,t,n){var o="stackTraceLimit",c=n?2:1,u=r.split("."),l=u[u.length-1],a=$n.apply(null,u);if(!!a){var s=a.prototype;if(Fu(s,"cause")&&delete s.cause,!t)return a;var v=$n("Error"),f=e(function(p,g){var d=Uu(n?g:p,void 0),$=n?new a(p):new a;return d!==void 0&&we($,"message",d),zu&&we($,"stack",ku($.stack,2)),this&&Bu(s,this)&&Gu($,this,f),arguments.length>c&&Ku($,arguments[c]),$});f.prototype=s,l!=="Error"?hn?hn(f,v):mn(f,v,{name:!0}):Wu&&o in a&&(bn(f,a,o),bn(f,a,"prepareStackTrace")),mn(f,a);try{s.name!==l&&we(s,"name",l),s.constructor=f}catch{}return f}},"wrapErrorConstructorWithCause$2"),qu=P,Xu=V,Hu=ht,xn=E,Yu=ka,mt="AggregateError",En=Xu(mt),On=!xn(function(){return En([1]).errors[0]!==1})&&xn(function(){return En([1],mt,{cause:7}).cause!==7});qu({global:!0,constructor:!0,arity:2,forced:On},{AggregateError:Yu(mt,function(r){return i(function(t,n){return Hu(r,this,arguments)},"AggregateError")},On,!0)});var Vu=j,Ju=ne,Zu=J.f,qe=Vu("unscopables"),Xe=Array.prototype;Xe[qe]==null&&Zu(Xe,qe,{configurable:!0,value:Ju(null)});var ae=i(function(r){Xe[qe][r]=!0},"addToUnscopables$4"),Qu=P,rv=or,ev=gr,tv=rr,nv=ae;Qu({target:"Array",proto:!0},{at:i(function(e){var t=rv(this),n=ev(t),o=tv(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:t[c]},"at")});nv("at");var av=La,ov=la,iv=or,cv=gr,Sn=i(function(r){var e=r==1;return function(t,n,o){for(var c=iv(t),u=ov(c),l=av(n,o),a=cv(u),s,v;a-- >0;)if(s=u[a],v=l(s,a,c),v)switch(r){case 0:return s;case 1:return a}return e?-1:void 0}},"createMethod$1"),za={findLast:Sn(0),findLastIndex:Sn(1)},sv=P,lv=za.findLast,uv=ae;sv({target:"Array",proto:!0},{findLast:i(function(e){return lv(this,e,arguments.length>1?arguments[1]:void 0)},"findLast")});uv("findLast");var vv=P,fv=za.findLastIndex,pv=ae;vv({target:"Array",proto:!0},{findLastIndex:i(function(e){return fv(this,e,arguments.length>1?arguments[1]:void 0)},"findLastIndex")});pv("findLastIndex");var gv=P,dv=Sa.includes,yv=E,$v=ae,hv=yv(function(){return!Array(1).includes()});gv({target:"Array",proto:!0,forced:hv},{includes:i(function(e){return dv(this,e,arguments.length>1?arguments[1]:void 0)},"includes")});$v("includes");var mv=TypeError,bv=9007199254740991,Wa=i(function(r){if(r>bv)throw mv("Maximum allowed index exceeded");return r},"doesNotExceedSafeInteger$2"),xv=P,Ev=or,Ov=gr,Sv=Wa,wv=E,Iv=wv(function(){return[].push.call({length:4294967296},1)!==4294967297}),Tv=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}}();xv({target:"Array",proto:!0,arity:1,forced:Iv||Tv},{push:i(function(e){var t=Ev(this),n=Ov(t),o=arguments.length;Sv(n+o);for(var c=0;c<o;c++)t[n]=arguments[c],n++;return t.length=n,n},"push")});var wn=Ir,Rv=TypeError,Pv=i(function(r,e){if(!delete r[e])throw Rv("Cannot delete property "+wn(e)+" of "+wn(r))},"deletePropertyOrThrow$1"),Cv=P,_v=or,Av=gr,jv=Pv,Nv=Wa,Lv=[].unshift(0)!==1,Mv=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}}();Cv({target:"Array",proto:!0,arity:1,forced:Lv||Mv},{unshift:i(function(e){var t=_v(this),n=Av(t),o=arguments.length;if(o){Nv(n+o);for(var c=n;c--;){var u=c+o;c in t?t[u]=t[c]:jv(t,u)}for(var l=0;l<o;l++)t[l]=arguments[l]}return t.length=n+o},"unshift")});var qa=P,Dv=A,q=ht,Xa=ka,He="WebAssembly",In=Dv[He],Xr=Error("e",{cause:7}).cause!==7,ir=i(function(r,e){var t={};t[r]=Xa(r,e,Xr),qa({global:!0,constructor:!0,arity:1,forced:Xr},t)},"exportGlobalErrorCauseWrapper"),bt=i(function(r,e){if(In&&In[r]){var t={};t[r]=Xa(He+"."+r,e,Xr),qa({target:He,stat:!0,constructor:!0,arity:1,forced:Xr},t)}},"exportWebAssemblyErrorCauseWrapper");ir("Error",function(r){return i(function(t){return q(r,this,arguments)},"Error")});ir("EvalError",function(r){return i(function(t){return q(r,this,arguments)},"EvalError")});ir("RangeError",function(r){return i(function(t){return q(r,this,arguments)},"RangeError")});ir("ReferenceError",function(r){return i(function(t){return q(r,this,arguments)},"ReferenceError")});ir("SyntaxError",function(r){return i(function(t){return q(r,this,arguments)},"SyntaxError")});ir("TypeError",function(r){return i(function(t){return q(r,this,arguments)},"TypeError")});ir("URIError",function(r){return i(function(t){return q(r,this,arguments)},"URIError")});bt("CompileError",function(r){return i(function(t){return q(r,this,arguments)},"CompileError")});bt("LinkError",function(r){return i(function(t){return q(r,this,arguments)},"LinkError")});bt("RuntimeError",function(r){return i(function(t){return q(r,this,arguments)},"RuntimeError")});var Fv=O,Bv=Fv(1 .valueOf),Gv=rr,Uv=er,Kv=Q,kv=RangeError,zv=i(function(e){var t=Uv(Kv(this)),n="",o=Gv(e);if(o<0||o==1/0)throw kv("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))o&1&&(n+=t);return n},"repeat"),Wv=Math.log,qv=Math.LOG10E,Xv=Math.log10||i(function(e){return Wv(e)*qv},"log10"),Hv=P,xt=O,Yv=rr,Vv=Bv,Jv=zv,Zv=Xv,Hr=E,Qv=RangeError,Tn=String,rf=isFinite,ef=Math.abs,tf=Math.floor,Rn=Math.pow,nf=Math.round,z=xt(1 .toExponential),af=xt(Jv),Pn=xt("".slice),Ha=z(-69e-12,4)==="-6.9000e-11"&&z(1.255,2)==="1.25e+0"&&z(12345,3)==="1.235e+4"&&z(25,0)==="3e+1",of=Hr(function(){z(1,1/0)})&&Hr(function(){z(1,-1/0)}),cf=!Hr(function(){z(1/0,1/0)})&&!Hr(function(){z(NaN,1/0)}),sf=!Ha||!of||!cf;Hv({target:"Number",proto:!0,forced:sf},{toExponential:i(function(e){var t=Vv(this);if(e===void 0)return z(t);var n=Yv(e);if(!rf(t))return String(t);if(n<0||n>20)throw Qv("Incorrect fraction digits");if(Ha)return z(t,n);var o="",c="",u=0,l="",a="";if(t<0&&(o="-",t=-t),t===0)u=0,c=af("0",n+1);else{var s=Zv(t);u=tf(s);var v=0,f=Rn(10,u-n);v=nf(t/f),2*t>=(2*v+1)*f&&(v+=1),v>=Rn(10,n+1)&&(v/=10,u+=1),c=Tn(v)}return n!==0&&(c=Pn(c,0,1)+"."+Pn(c,1)),u===0?(l="+",a="0"):(l=u>0?"+":"-",a=Tn(ef(u))),c+="e"+l+a,o+c},"toExponential")});var lf=P,uf=F;lf({target:"Object",stat:!0},{hasOwn:uf});var Et={},Cn=Tr,vf=i(function(r){var e,t;this.promise=new r(function(n,o){if(e!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");e=n,t=o}),this.resolve=Cn(e),this.reject=Cn(t)},"PromiseCapability");Et.f=function(r){return new vf(r)};var ff=i(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$1"),pf=P,gf=L,df=Tr,yf=V,$f=Et,hf=ff,mf=Fa,_n="No one promise resolved";pf({target:"Promise",stat:!0},{any:i(function(e){var t=this,n=yf("AggregateError"),o=$f.f(t),c=o.resolve,u=o.reject,l=hf(function(){var a=df(t.resolve),s=[],v=0,f=1,p=!1;mf(e,function(g){var d=v++,$=!1;f++,gf(a,t,g).then(function(x){$||p||(p=!0,c(x))},function(x){$||p||($=!0,s[d]=x,--f||u(new n(s,_n)))})}),--f||u(new n(s,_n))});return l.error&&u(l.value),o.promise},"any")});var bf=A,xf=bf.Promise,Ef=O,Of=E,Ya=T,Sf=$t,wf=V,If=st,Va=i(function(){},"noop"),Tf=[],Ja=wf("Reflect","construct"),Ot=/^\s*(?:class|function)\b/,Rf=Ef(Ot.exec),Pf=!Ot.exec(Va),hr=i(function(e){if(!Ya(e))return!1;try{return Ja(Va,Tf,e),!0}catch{return!1}},"isConstructor"),Za=i(function(e){if(!Ya(e))return!1;switch(Sf(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Pf||!!Rf(Ot,If(e))}catch{return!0}},"isConstructor");Za.sham=!0;var Cf=!Ja||Of(function(){var r;return hr(hr.call)||!hr(Object)||!hr(function(){r=!0})||r})?Za:hr,_f=Cf,Af=Ir,jf=TypeError,Nf=i(function(r){if(_f(r))return r;throw jf(Af(r)+" is not a constructor")},"aConstructor$1"),An=N,Lf=Nf,Mf=j,Df=Mf("species"),Qa=i(function(r,e){var t=An(r).constructor,n;return t===void 0||(n=An(t)[Df])==null?e:Lf(n)},"speciesConstructor$2"),Ff=N,Bf=Y,Gf=Et,Uf=i(function(r,e){if(Ff(r),Bf(e)&&e.constructor===r)return e;var t=Gf.f(r),n=t.resolve;return n(e),t.promise},"promiseResolve$1"),Kf=P,Yr=xf,kf=E,ro=V,eo=T,zf=Qa,jn=Uf,Wf=Rr,Ye=Yr&&Yr.prototype,qf=!!Yr&&kf(function(){Ye.finally.call({then:function(){}},function(){})});Kf({target:"Promise",proto:!0,real:!0,forced:qf},{finally:function(r){var e=zf(this,ro("Promise")),t=eo(r);return this.then(t?function(n){return jn(e,r()).then(function(){return n})}:r,t?function(n){return jn(e,r()).then(function(){throw n})}:r)}});if(eo(Yr)){var Nn=ro("Promise").prototype.finally;Ye.finally!==Nn&&Wf(Ye,"finally",Nn,{unsafe:!0})}var Xf=J.f,Hf=F,Yf=j,Ln=Yf("toStringTag"),to=i(function(r,e,t){r&&!t&&(r=r.prototype),r&&!Hf(r,Ln)&&Xf(r,Ln,{configurable:!0,value:e})},"setToStringTag$2"),Vf=P,Jf=A,Zf=to;Vf({global:!0},{Reflect:{}});Zf(Jf.Reflect,"Reflect",!0);var Mn=it.exports,Qf=J,rp=i(function(r,e,t){return t.get&&Mn(t.get,e,{getter:!0}),t.set&&Mn(t.set,e,{setter:!0}),Qf.f(r,e,t)},"defineBuiltInAccessor$1"),ep=N,St=i(function(){var r=ep(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),tp=A,np=W,ap=rp,op=St,ip=E,no=tp.RegExp,ao=no.prototype,cp=np&&ip(function(){var r=!0;try{no(".","d")}catch{r=!1}var e={},t="",n=r?"dgimsy":"gimsy",o=i(function(a,s){Object.defineProperty(e,a,{get:function(){return t+=s,!0}})},"addGetter"),c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(c.hasIndices="d");for(var u in c)o(u,c[u]);var l=Object.getOwnPropertyDescriptor(ao,"flags").get.call(e);return l!==n||t!==n});cp&&ap(ao,"flags",{configurable:!0,get:op});var sp=P,lp=O,up=Q,vp=rr,fp=er,pp=E,gp=lp("".charAt),dp=pp(function(){return"\u{20BB7}".at(-2)!=="\uD842"});sp({target:"String",proto:!0,forced:dp},{at:i(function(e){var t=fp(up(this)),n=t.length,o=vp(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:gp(t,c)},"at")});var yp=E,$p=T,Dn=Ta,hp=Rr,mp=j,Ve=mp("iterator"),oo=!1,ar,Ie,Te;[].keys&&(Te=[].keys(),"next"in Te?(Ie=Dn(Dn(Te)),Ie!==Object.prototype&&(ar=Ie)):oo=!0);var bp=ar==null||yp(function(){var r={};return ar[Ve].call(r)!==r});bp&&(ar={});$p(ar[Ve])||hp(ar,Ve,function(){return this});var xp={IteratorPrototype:ar,BUGGY_SAFARI_ITERATORS:oo},Ep=xp.IteratorPrototype,Op=ne,Sp=Or,wp=to,Ip=yt,Tp=i(function(){return this},"returnThis"),Rp=i(function(r,e,t,n){var o=e+" Iterator";return r.prototype=Op(Ep,{next:Sp(+!n,t)}),wp(r,o,!1),Ip[o]=Tp,r},"createIteratorConstructor$1"),Pp=Y,Cp=Sr,_p=j,Ap=_p("match"),io=i(function(r){var e;return Pp(r)&&((e=r[Ap])!==void 0?!!e:Cp(r)=="RegExp")},"isRegexp"),jp=L,Np=F,Lp=wr,Mp=St,Fn=RegExp.prototype,co=i(function(r){var e=r.flags;return e===void 0&&!("flags"in Fn)&&!Np(r,"flags")&&Lp(Fn,r)?jp(Mp,r):e},"regexpGetFlags"),wt=O,Dp=rr,Fp=er,Bp=Q,Gp=wt("".charAt),Bn=wt("".charCodeAt),Up=wt("".slice),Gn=i(function(r){return function(e,t){var n=Fp(Bp(e)),o=Dp(t),c=n.length,u,l;return o<0||o>=c?r?"":void 0:(u=Bn(n,o),u<55296||u>56319||o+1===c||(l=Bn(n,o+1))<56320||l>57343?r?Gp(n,o):u:r?Up(n,o,o+2):(u-55296<<10)+(l-56320)+65536)}},"createMethod"),Kp={codeAt:Gn(!1),charAt:Gn(!0)},kp=Kp.charAt,so=i(function(r,e,t){return e+(t?kp(r,e).length:1)},"advanceStringIndex$2"),It=E,zp=A,Tt=zp.RegExp,Rt=It(function(){var r=Tt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),Wp=Rt||It(function(){return!Tt("a","y").sticky}),qp=Rt||It(function(){var r=Tt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),Xp={BROKEN_CARET:qp,MISSED_STICKY:Wp,UNSUPPORTED_Y:Rt},Hp=E,Yp=A,Vp=Yp.RegExp,Jp=Hp(function(){var r=Vp(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),Zp=E,Qp=A,rg=Qp.RegExp,eg=Zp(function(){var r=rg("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),vr=L,oe=O,tg=er,ng=St,ag=Xp,og=te.exports,ig=ne,cg=vt.get,sg=Jp,lg=eg,ug=og("native-string-replace",String.prototype.replace),Vr=RegExp.prototype.exec,Je=Vr,vg=oe("".charAt),fg=oe("".indexOf),pg=oe("".replace),Re=oe("".slice),Ze=function(){var r=/a/,e=/b*/g;return vr(Vr,r,"a"),vr(Vr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),lo=ag.BROKEN_CARET,Qe=/()??/.exec("")[1]!==void 0,gg=Ze||Qe||lo||sg||lg;gg&&(Je=i(function(e){var t=this,n=cg(t),o=tg(e),c=n.raw,u,l,a,s,v,f,p;if(c)return c.lastIndex=t.lastIndex,u=vr(Je,c,o),t.lastIndex=c.lastIndex,u;var g=n.groups,d=lo&&t.sticky,$=vr(ng,t),x=t.source,w=0,b=o;if(d&&($=pg($,"y",""),fg($,"g")===-1&&($+="g"),b=Re(o,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&vg(o,t.lastIndex-1)!==`
`)&&(x="(?: "+x+")",b=" "+b,w++),l=new RegExp("^(?:"+x+")",$)),Qe&&(l=new RegExp("^"+x+"$(?!\\s)",$)),Ze&&(a=t.lastIndex),s=vr(Vr,d?l:t,b),d?s?(s.input=Re(s.input,w),s[0]=Re(s[0],w),s.index=t.lastIndex,t.lastIndex+=s[0].length):t.lastIndex=0:Ze&&s&&(t.lastIndex=t.global?s.index+s[0].length:a),Qe&&s&&s.length>1&&vr(ug,s[0],l,function(){for(v=1;v<arguments.length-2;v++)arguments[v]===void 0&&(s[v]=void 0)}),s&&g)for(s.groups=f=ig(null),v=0;v<g.length;v++)p=g[v],f[p[0]]=s[p[1]];return s},"exec"));var Pt=Je,Un=L,dg=N,yg=T,$g=Sr,hg=Pt,mg=TypeError,uo=i(function(r,e){var t=r.exec;if(yg(t)){var n=Un(t,r,e);return n!==null&&dg(n),n}if($g(r)==="RegExp")return Un(hg,r,e);throw mg("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),bg=P,xg=L,vo=O,Eg=Rp,Kn=Q,fo=ft,Er=er,Og=N,Sg=Sr,wg=io,po=co,Ig=fr,Tg=Rr,Rg=E,Pg=j,Cg=Qa,_g=so,Ag=uo,go=vt,jg=yi,Jr=Pg("matchAll"),yo="RegExp String",$o=yo+" Iterator",Ng=go.set,Lg=go.getterFor($o),kn=RegExp.prototype,Mg=TypeError,rt=vo("".indexOf),Zr=vo("".matchAll),Pe=!!Zr&&!Rg(function(){Zr("a",/./)}),Dg=Eg(i(function(e,t,n,o){Ng(this,{type:$o,regexp:e,string:t,global:n,unicode:o,done:!1})},"RegExpStringIterator"),yo,i(function(){var e=Lg(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=Ag(t,n);return o===null?{value:void 0,done:e.done=!0}:e.global?(Er(o[0])===""&&(t.lastIndex=_g(n,fo(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})},"next")),ho=i(function(r){var e=Og(this),t=Er(r),n=Cg(e,RegExp),o=Er(po(e)),c,u,l;return c=new n(n===RegExp?e.source:e,o),u=!!~rt(o,"g"),l=!!~rt(o,"u"),c.lastIndex=fo(e.lastIndex),new Dg(c,t,u,l)},"$matchAll");bg({target:"String",proto:!0,forced:Pe},{matchAll:i(function(e){var t=Kn(this),n,o,c,u;if(e!=null){if(wg(e)&&(n=Er(Kn(po(e))),!~rt(n,"g")))throw Mg("`.matchAll` does not allow non-global regexes");if(Pe)return Zr(t,e);if(c=Ig(e,Jr),c===void 0&&jg&&Sg(e)=="RegExp"&&(c=ho),c)return xg(c,e,t)}else if(Pe)return Zr(t,e);return o=Er(t),u=new RegExp(e,"g"),u[Jr](o)},"matchAll")});Jr in kn||Tg(kn,Jr,ho);var Fg=P,zn=Pt;Fg({target:"RegExp",proto:!0,forced:/./.exec!==zn},{exec:zn});var Wn=O,qn=Rr,Bg=Pt,Xn=E,mo=j,Gg=pr,Ug=mo("species"),Ce=RegExp.prototype,Kg=i(function(r,e,t,n){var o=mo(r),c=!Xn(function(){var s={};return s[o]=function(){return 7},""[r](s)!=7}),u=c&&!Xn(function(){var s=!1,v=/a/;return r==="split"&&(v={},v.constructor={},v.constructor[Ug]=function(){return v},v.flags="",v[o]=/./[o]),v.exec=function(){return s=!0,null},v[o](""),!s});if(!c||!u||t){var l=Wn(/./[o]),a=e(o,""[r],function(s,v,f,p,g){var d=Wn(s),$=v.exec;return $===Bg||$===Ce.exec?c&&!g?{done:!0,value:l(v,f,p)}:{done:!0,value:d(f,v,p)}:{done:!1}});qn(String.prototype,r,a[0]),qn(Ce,o,a[1])}n&&Gg(Ce[o],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),Ct=O,kg=or,zg=Math.floor,_e=Ct("".charAt),Wg=Ct("".replace),Ae=Ct("".slice),qg=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Xg=/\$([$&'`]|\d{1,2})/g,bo=i(function(r,e,t,n,o,c){var u=t+r.length,l=n.length,a=Xg;return o!==void 0&&(o=kg(o),a=qg),Wg(c,a,function(s,v){var f;switch(_e(v,0)){case"$":return"$";case"&":return r;case"`":return Ae(e,0,t);case"'":return Ae(e,u);case"<":f=o[Ae(v,1,-1)];break;default:var p=+v;if(p===0)return s;if(p>l){var g=zg(p/10);return g===0?s:g<=l?n[g-1]===void 0?_e(v,1):n[g-1]+_e(v,1):s}f=n[p-1]}return f===void 0?"":f})},"getSubstitution$2"),Hg=ht,Hn=L,ie=O,Yg=Kg,Vg=E,Jg=N,Zg=T,Qg=rr,rd=ft,lr=er,ed=Q,td=so,nd=fr,ad=bo,od=uo,id=j,et=id("replace"),cd=Math.max,sd=Math.min,ld=ie([].concat),je=ie([].push),Yn=ie("".indexOf),Vn=ie("".slice),ud=i(function(r){return r===void 0?r:String(r)},"maybeToString"),vd=function(){return"a".replace(/./,"$0")==="$0"}(),Jn=function(){return/./[et]?/./[et]("a","$0")==="":!1}(),fd=!Vg(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Yg("replace",function(r,e,t){var n=Jn?"$":"$0";return[i(function(c,u){var l=ed(this),a=c==null?void 0:nd(c,et);return a?Hn(a,c,l,u):Hn(e,lr(l),c,u)},"replace"),function(o,c){var u=Jg(this),l=lr(o);if(typeof c=="string"&&Yn(c,n)===-1&&Yn(c,"$<")===-1){var a=t(e,u,l,c);if(a.done)return a.value}var s=Zg(c);s||(c=lr(c));var v=u.global;if(v){var f=u.unicode;u.lastIndex=0}for(var p=[];;){var g=od(u,l);if(g===null||(je(p,g),!v))break;var d=lr(g[0]);d===""&&(u.lastIndex=td(l,rd(u.lastIndex),f))}for(var $="",x=0,w=0;w<p.length;w++){g=p[w];for(var b=lr(g[0]),B=cd(sd(Qg(g.index),l.length),0),h=[],m=1;m<g.length;m++)je(h,ud(g[m]));var R=g.groups;if(s){var I=ld([b],h,B,l);R!==void 0&&je(I,R);var S=lr(Hg(c,void 0,I))}else S=ad(b,l,B,h,R,c);B>=x&&($+=Vn(l,x,B)+S,x=B+b.length)}return $+Vn(l,x)}]},!fd||!vd||Jn);var pd=P,gd=L,_t=O,Zn=Q,dd=T,yd=io,mr=er,$d=fr,hd=co,md=bo,bd=j,xd=bd("replace"),Ed=TypeError,xo=_t("".indexOf);_t("".replace);var Qn=_t("".slice),Od=Math.max,ra=i(function(r,e,t){return t>r.length?-1:e===""?t:xo(r,e,t)},"stringIndexOf");pd({target:"String",proto:!0},{replaceAll:i(function(e,t){var n=Zn(this),o,c,u,l,a,s,v,f,p,g=0,d=0,$="";if(e!=null){if(o=yd(e),o&&(c=mr(Zn(hd(e))),!~xo(c,"g")))throw Ed("`.replaceAll` does not allow non-global regexes");if(u=$d(e,xd),u)return gd(u,e,n,t)}for(l=mr(n),a=mr(e),s=dd(t),s||(t=mr(t)),v=a.length,f=Od(1,v),g=ra(l,a,0);g!==-1;)p=s?mr(t(a,g,l)):md(a,l,g,[],void 0,t),$+=Qn(l,d,g)+p,d=g+v,g=ra(l,a,g+f);return d<l.length&&($+=Qn(l,d)),$},"replaceAll")});var Dr,Sd=new Uint8Array(16);function wd(){if(!Dr&&(Dr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Dr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Dr(Sd)}i(wd,"rng");const Id=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Td(r){return typeof r=="string"&&Id.test(r)}i(Td,"validate");var C=[];for(var Ne=0;Ne<256;++Ne)C.push((Ne+256).toString(16).substr(1));function Rd(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(C[r[e+0]]+C[r[e+1]]+C[r[e+2]]+C[r[e+3]]+"-"+C[r[e+4]]+C[r[e+5]]+"-"+C[r[e+6]]+C[r[e+7]]+"-"+C[r[e+8]]+C[r[e+9]]+"-"+C[r[e+10]]+C[r[e+11]]+C[r[e+12]]+C[r[e+13]]+C[r[e+14]]+C[r[e+15]]).toLowerCase();if(!Td(t))throw TypeError("Stringified UUID is invalid");return t}i(Rd,"stringify");function Pd(r,e,t){r=r||{};var n=r.random||(r.rng||wd)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=n[o];return e}return Rd(n)}i(Pd,"v4");const Cd=i(r=>(Object.assign(r,{appendTo(e){r.element,e.append(r.element)},dispose(){r.dispose?r.dispose():(r.element,r.element.remove())}}),r),"Component"),_d=i((r,e)=>{const t={clear(){return e.transform.baseVal.clear(),t},translate(n,o){const c=r.createSVGTransform();return c.setTranslate(n,o),e.transform.baseVal.appendItem(c),t},scale(n,o=n){const c=r.createSVGTransform();return c.setScale(n,o),e.transform.baseVal.appendItem(c),t},rotate(n,o=0,c=0){console.log(n);const u=r.createSVGTransform();return u.setRotate(n,o,c),e.transform.baseVal.appendItem(u),t}};return t},"Transform"),dr=i(r=>(Cd(r),Object.assign(r,{appendDefTo(e){r.element,e.append(r.element)},transformWith(e){return r.element,_d(e,r.element)}}),r),"SvgComponent"),U=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<placeholder-element id="${v}"></placeholder-element>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElement("template");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`placeholder-element#${u}`);a.parentNode.replaceChild(l,a)}return c},"html"),_=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<g id="${a}"></g>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<g id="${a}"></g>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<g id="${v}"></g>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`g#${u}`);a.parentNode.replaceChild(l,a)}return c},"svg"),Eo=Symbol("celly"),y=Math.sqrt(3)/2,Oo=i(()=>{const r=_`<path
		d="
    m ${-y} -0.5
    l  ${y} -0.5
    l  ${y}  0.5
    l 0                   1
    l ${-y}  0.5
    l ${-y} -0.5
    z
  "
	/>`;return dr({element:r})},"Hexagon"),Ad=i(()=>{const r=document.createElementNS("http://www.w3.org/2000/svg","g");return dr({element:r})},"G"),jd=i(r=>r[Eo],"isCell"),Nd=i((r,e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","g");for(const c of Object.values(e)){Object.assign(c.element,{[Eo]:!0,cell:c});const u=Ad(),{coordinate:{q:l,r:a}}=c,s=2*y*l+y*a,v=3/2*a;u.transformWith(r).translate(s,v),c.appendTo(u.element),u.appendTo(n)}let o;return n.addEventListener("pointerdown",c=>{o=c.buttons}),n.addEventListener("pointerup",c=>{if(o===1){for(const u of c.composedPath())if(jd(u))return t(u.cell)}}),dr({element:n,cells:e})},"Grid"),Ld=i(([r,e])=>{const t=_`<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 ${r} ${e}"
		preserveAspectRatio="xMidYMid meet"
		draggable="false"
	></svg>`;return dr({element:t})},"Main"),ea=[0,60,120,180,240,300];function Md(r){if(!ea.includes(r))throw new Error(`expected one of Orientation [${ea.join(", ")}] but got ${r}`)}i(Md,"assertOrientation");const Dd=i((r,e)=>{switch(e){case 32:{const t=Oo();return t.transformWith(r).scale(.25),t.element.classList.add("end"),_`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				${t}
			</g>`}case 48:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
			</g>`;case 40:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;case 36:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 56:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;case 44:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 52:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 42:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;case 60:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 46:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;case 54:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;case 62:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(240)"
				/>
			</g>`;case 63:return _`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(240)"
				/>
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(300)"
				/>
			</g>`;default:throw new Error(`unhandled connection ${e.toString(2)}`)}},"EdgeElement"),Fd=i((r,e)=>{const t=Dd(r,e);return dr({element:t})},"Edge"),Le={},Bd=i((r,e,t,n)=>{if(!Le[n]){const c=Fd(r,n);Le[n]=_`<g class="cell">${Oo()}${c}</g>`}const o=Le[n].cloneNode(!0);return o.classList.add(`rotate${t}`),dr({element:o,orientation:t,connection:n,valid:!1,coordinate:e,rotateClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateTo${t}`);let c=t;return c+=60,c%=360,Md(c),t=c,o.classList.add(`rotate${t}`),o.classList.add(`rotateTo${t}`),t}})},"Cell");var So={exports:{}};(function(r){(function(e,t,n){function o(a){var s=this,v=l();s.next=function(){var f=2091639*s.s0+s.c*23283064365386963e-26;return s.s0=s.s1,s.s1=s.s2,s.s2=f-(s.c=f|0)},s.c=1,s.s0=v(" "),s.s1=v(" "),s.s2=v(" "),s.s0-=v(a),s.s0<0&&(s.s0+=1),s.s1-=v(a),s.s1<0&&(s.s1+=1),s.s2-=v(a),s.s2<0&&(s.s2+=1),v=null}i(o,"Alea");function c(a,s){return s.c=a.c,s.s0=a.s0,s.s1=a.s1,s.s2=a.s2,s}i(c,"copy");function u(a,s){var v=new o(a),f=s&&s.state,p=v.next;return p.int32=function(){return v.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,f&&(typeof f=="object"&&c(f,v),p.state=function(){return c(v,{})}),p}i(u,"impl");function l(){var a=4022871197,s=i(function(v){v=String(v);for(var f=0;f<v.length;f++){a+=v.charCodeAt(f);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26},"mash");return s}i(l,"Mash"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.alea=u})(H,r,!1)})(So);var wo={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var f=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^f^f>>>8},l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor128=u})(H,r,!1)})(wo);var Io={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(f^f<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,v==s.length&&(a.d=a.x<<10^a.x>>>4),a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a.v=l.v,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorwow=u})(H,r,!1)})(Io);var To={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.x,f=a.i,p,g;return p=v[f],p^=p>>>7,g=p^p<<24,p=v[f+1&7],g^=p^p>>>10,p=v[f+3&7],g^=p^p>>>3,p=v[f+4&7],g^=p^p<<7,p=v[f+7&7],p=p^p<<13,g^=p^p<<9,v[f]=g,a.i=f+1&7,g};function s(v,f){var p,g=[];if(f===(f|0))g[0]=f;else for(f=""+f,p=0;p<f.length;++p)g[p&7]=g[p&7]<<15^f.charCodeAt(p)+g[p+1&7]<<13;for(;g.length<8;)g.push(0);for(p=0;p<8&&g[p]===0;++p);for(p==8?g[7]=-1:g[p],v.x=g,v.i=0,p=256;p>0;--p)v.next()}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.x=l.x.slice(),a.i=l.i,a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.x&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorshift7=u})(H,r,!1)})(To);var Ro={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.w,f=a.X,p=a.i,g,d;return a.w=v=v+1640531527|0,d=f[p+34&127],g=f[p=p+1&127],d^=d<<13,g^=g<<17,d^=d>>>15,g^=g>>>12,d=f[p]=d^g,a.i=p,d+(v^v>>>16)|0};function s(v,f){var p,g,d,$,x,w=[],b=128;for(f===(f|0)?(g=f,f=null):(f=f+"\0",g=0,b=Math.max(b,f.length)),d=0,$=-32;$<b;++$)f&&(g^=f.charCodeAt(($+32)%f.length)),$===0&&(x=g),g^=g<<10,g^=g>>>15,g^=g<<4,g^=g>>>13,$>=0&&(x=x+1640531527|0,p=w[$&127]^=g+x,d=p==0?d+1:0);for(d>=128&&(w[(f&&f.length||0)&127]=-1),d=127,$=4*128;$>0;--$)g=w[d+34&127],p=w[d=d+1&127],g^=g<<13,p^=p<<17,g^=g>>>15,p^=p>>>12,w[d]=g^p;v.w=x,v.X=w,v.i=d}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.i=l.i,a.w=l.w,a.X=l.X.slice(),a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.X&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor4096=u})(H,r,!1)})(Ro);var Po={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.b,p=a.c,g=a.d,d=a.a;return f=f<<25^f>>>7^p,p=p-g|0,g=g<<24^g>>>8^d,d=d-f|0,a.b=f=f<<20^f>>>12^p,a.c=p=p-g|0,a.d=g<<16^p>>>16^d,a.a=d-f|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,l===Math.floor(l)?(a.a=l/4294967296|0,a.b=l|0):s+=l;for(var v=0;v<s.length+20;v++)a.b^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.a=l.a,a.b=l.b,a.c=l.c,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.tychei=u})(H,r,!1)})(Po);var Co={exports:{}};const Gd={},Ud=Object.freeze(Object.defineProperty({__proto__:null,default:Gd},Symbol.toStringTag,{value:"Module"})),Kd=jo(Ud);(function(r){(function(e,t,n){var o=256,c=6,u=52,l="random",a=n.pow(o,c),s=n.pow(2,u),v=s*2,f=o-1,p;function g(h,m,R){var I=[];m=m==!0?{entropy:!0}:m||{};var S=w(x(m.entropy?[h,B(t)]:h==null?b():h,3),I),M=new d(I),G=i(function(){for(var D=M.g(c),X=a,k=0;D<s;)D=(D+k)*o,X*=o,k=M.g(1);for(;D>=v;)D/=2,X/=2,k>>>=1;return(D+k)/X},"prng");return G.int32=function(){return M.g(4)|0},G.quick=function(){return M.g(4)/4294967296},G.double=G,w(B(M.S),t),(m.pass||R||function(D,X,k,Z){return Z&&(Z.S&&$(Z,M),D.state=function(){return $(M,{})}),k?(n[l]=D,X):D})(G,S,"global"in m?m.global:this==n,m.state)}i(g,"seedrandom");function d(h){var m,R=h.length,I=this,S=0,M=I.i=I.j=0,G=I.S=[];for(R||(h=[R++]);S<o;)G[S]=S++;for(S=0;S<o;S++)G[S]=G[M=f&M+h[S%R]+(m=G[S])],G[M]=m;(I.g=function(D){for(var X,k=0,Z=I.i,Cr=I.j,$r=I.S;D--;)X=$r[Z=f&Z+1],k=k*o+$r[f&($r[Z]=$r[Cr=f&Cr+X])+($r[Cr]=X)];return I.i=Z,I.j=Cr,k})(o)}i(d,"ARC4");function $(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}i($,"copy");function x(h,m){var R=[],I=typeof h,S;if(m&&I=="object")for(S in h)try{R.push(x(h[S],m-1))}catch{}return R.length?R:I=="string"?h:h+"\0"}i(x,"flatten");function w(h,m){for(var R=h+"",I,S=0;S<R.length;)m[f&S]=f&(I^=m[f&S]*19)+R.charCodeAt(S++);return B(m)}i(w,"mixkey");function b(){try{var h;return p&&(h=p.randomBytes)?h=h(o):(h=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(h)),B(h)}catch{var m=e.navigator,R=m&&m.plugins;return[+new Date,e,R,e.screen,B(t)]}}i(b,"autoseed");function B(h){return String.fromCharCode.apply(0,h)}if(i(B,"tostring"),w(n.random(),t),r.exports){r.exports=g;try{p=Kd}catch{}}else n["seed"+l]=g})(typeof self<"u"?self:H,[],Math)})(Co);var kd=So.exports,zd=wo.exports,Wd=Io.exports,qd=To.exports,Xd=Ro.exports,Hd=Po.exports,yr=Co.exports;yr.alea=kd;yr.xor128=zd;yr.xorwow=Wd;yr.xorshift7=qd;yr.xor4096=Xd;yr.tychei=Hd;const Yd=["prims","wilsons"],Vd=i(r=>Yd.includes(r),"validMode"),Jd=i(()=>{const r=new Worker("/hexpanse/assets/worker.cd9fe1ec.js",{type:"module"}),e=i(n=>{r.postMessage(n)},"message"),t={restore(n){e({type:"restore",config:n})},updateCell(n,o){e({type:"update cell",coordinate:n,orientation:o})},onRestored(){throw new Error("missing onRestored")},onPaintedCell(){throw new Error("missing onPaintedCell")},onGameOver(){throw new Error("missing onGameOver")}};return r.onmessage=({data:n})=>{switch(n.type){case"restored":return t.onRestored(n.config,n.state);case"painted cell":return t.onPaintedCell(n.coordinate,n.color);case"game over":return t.onGameOver()}},t},"SaveWorker"),Qr=Jd(),At=1e3,tt=At*y,ur=Ld([At,tt]),ta={};let Me=Date.now();Qr.onRestored=({size:r,mode:e},t)=>{let n=0;for(const[v,{coordinate:f,orientation:p,connection:g}]of Object.entries(t))ta[v]=Bd(ur.element,f,p,g),[56,44,52,42].includes(g)&&(n+=1),[60,46,54].includes(g)&&(n+=2),[62].includes(g)&&(n+=3),[63].includes(g)&&(n+=4);const o=U`<p>Generated ${Math.ceil(Date.now()-Me)}ms</p>`;Me=Date.now();const c=Nd(ur.element,ta,v=>{if(_o)return;const f=v.rotateClockwise();Qr.updateCell(v.coordinate,f)});c.transformWith(ur.element).translate(At/2,tt/2).scale(tt/(r*3+2)),c.appendTo(ur.element),document.body.append(U`<main>${ur}</main>`);const u=U`<p>Rendered ${Math.ceil(Date.now()-Me)}ms</p>`,l=U`<button>New game</button>`;l.onclick=v=>{v.preventDefault();const f=document.getElementById("new-game-form"),{size:p,mode:g}=Object.fromEntries(new FormData(f).entries()),d=`./?${new URLSearchParams({size:p,mode:g}).toString()}`;console.log(d),window.location.href=d},document.body.append(U`<h2>Game settings</h2>`,U`<form id="new-game-form">
			<fieldset>
				<legend>Size</legend>
				<label>
					<input type="radio" name="size" value="5" checked />
					Small
				</label>
				<label>
					<input type="radio" name="size" value="10" />
					Medium
				</label>
				<label>
					<input type="radio" name="size" value="15" />
					Large
				</label>
				<label>
					<input type="radio" name="size" value="20" />
					Extra large
				</label>
			</fieldset>
			<fieldset>
				<legend>Style</legend>
				<label>
					<input type="radio" name="mode" value="wilsons" checked />
					Wilson’s
				</label>
				<label>
					<input type="radio" name="mode" value="prims" />
					Prim’s
				</label>
			</fieldset>
			${l}
		</form>`,U`<h2>About</h2>`,o,u,U`<p>${n} branches</p>`,U`<p>
			Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a>
		</p>`,U`<p>
			Source code:
			<a href="https://github.com/Pyrolistical/hexpanse"
				>https://github.com/Pyrolistical/hexpanse</a
			>
		</p>`,U`<p>
			Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
		</p>`);const a=document.querySelector(`#new-game-form input[name="size"][value="${r}"]`);a.checked=!0;const s=document.querySelector(`#new-game-form input[name="mode"][value="${e}"]`);s.checked=!0};let _o=!1;Qr.onGameOver=()=>{_o=!0,ur.element.classList.add("game-over")};const Zd=i(()=>{var c,u;window.location.hash===""&&history.replaceState(void 0,"","#");const r=new URLSearchParams(window.location.search),e=(c=r.get("seed"))!=null?c:Pd(),t=Number.parseInt((u=r.get("size"))!=null?u:"20"),n=r.get("mode"),o={seed:e,size:t,mode:Vd(n)?n:"wilsons"};return history.replaceState(void 0,"",`?${new URLSearchParams({...o,size:String(t)}).toString()}`),o},"loadConfig"),Qd=Zd();Qr.restore(Qd);
