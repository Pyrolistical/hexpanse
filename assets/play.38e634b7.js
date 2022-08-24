var Co=Object.defineProperty;var i=(r,e)=>Co(r,"name",{value:e,configurable:!0});i(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}i(n,"processPreload")},"polyfill")();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ao(r){var e=r.default;if(typeof e=="function"){var t=i(function(){return e.apply(this,arguments)},"a");t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),t}i(Ao,"getAugmentedNamespace");var Cr=i(function(r){return r&&r.Math==Math&&r},"check"),A=Cr(typeof globalThis=="object"&&globalThis)||Cr(typeof window=="object"&&window)||Cr(typeof self=="object"&&self)||Cr(typeof H=="object"&&H)||function(){return this}()||Function("return this")(),nt={},E=i(function(r){try{return!!r()}catch{return!0}},"fails$p"),jo=E,W=!jo(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),No=E,Qr=!No(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Lo=Qr,Ar=Function.prototype.call,L=Lo?Ar.bind(Ar):function(){return Ar.apply(Ar,arguments)},na={},aa={}.propertyIsEnumerable,oa=Object.getOwnPropertyDescriptor,Mo=oa&&!aa.call({1:2},1);na.f=Mo?i(function(e){var t=oa(this,e);return!!t&&t.enumerable},"propertyIsEnumerable"):aa;var Or=i(function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},"createPropertyDescriptor$5"),ia=Qr,ca=Function.prototype,Do=ca.bind,Me=ca.call,Fo=ia&&Do.bind(Me,Me),O=ia?function(r){return r&&Fo(r)}:function(r){return r&&function(){return Me.apply(r,arguments)}},sa=O,Bo=sa({}.toString),Go=sa("".slice),Sr=i(function(r){return Go(Bo(r),8,-1)},"classofRaw$1"),Uo=O,Ko=E,ko=Sr,ie=Object,zo=Uo("".split),la=Ko(function(){return!ie("z").propertyIsEnumerable(0)})?function(r){return ko(r)=="String"?zo(r,""):ie(r)}:ie,Wo=TypeError,Q=i(function(r){if(r==null)throw Wo("Can't call method on "+r);return r},"requireObjectCoercible$8"),qo=la,Xo=Q,re=i(function(r){return qo(Xo(r))},"toIndexedObject$4"),T=i(function(r){return typeof r=="function"},"isCallable$k"),Ho=T,Y=i(function(r){return typeof r=="object"?r!==null:Ho(r)},"isObject$9"),ce=A,Yo=T,Vo=i(function(r){return Yo(r)?r:void 0},"aFunction"),V=i(function(r,e){return arguments.length<2?Vo(ce[r]):ce[r]&&ce[r][e]},"getBuiltIn$9"),Jo=O,wr=Jo({}.isPrototypeOf),Zo=V,Qo=Zo("navigator","userAgent")||"",ua=A,se=Qo,jt=ua.process,Nt=ua.Deno,Lt=jt&&jt.versions||Nt&&Nt.version,Mt=Lt&&Lt.v8,K,Kr;Mt&&(K=Mt.split("."),Kr=K[0]>0&&K[0]<4?1:+(K[0]+K[1]));!Kr&&se&&(K=se.match(/Edge\/(\d+)/),(!K||K[1]>=74)&&(K=se.match(/Chrome\/(\d+)/),K&&(Kr=+K[1])));var ri=Kr,Dt=ri,ei=E,va=!!Object.getOwnPropertySymbols&&!ei(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Dt&&Dt<41}),ti=va,fa=ti&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ni=V,ai=T,oi=wr,ii=fa,ci=Object,pa=ii?function(r){return typeof r=="symbol"}:function(r){var e=ni("Symbol");return ai(e)&&oi(e.prototype,ci(r))},si=String,Ir=i(function(r){try{return si(r)}catch{return"Object"}},"tryToString$5"),li=T,ui=Ir,vi=TypeError,Tr=i(function(r){if(li(r))return r;throw vi(ui(r)+" is not a function")},"aCallable$5"),fi=Tr,vr=i(function(r,e){var t=r[e];return t==null?void 0:fi(t)},"getMethod$6"),le=L,ue=T,ve=Y,pi=TypeError,gi=i(function(r,e){var t,n;if(e==="string"&&ue(t=r.toString)&&!ve(n=le(t,r))||ue(t=r.valueOf)&&!ve(n=le(t,r))||e!=="string"&&ue(t=r.toString)&&!ve(n=le(t,r)))return n;throw pi("Can't convert object to primitive value")},"ordinaryToPrimitive$1"),ee={exports:{}},di=!1,Ft=A,yi=Object.defineProperty,at=i(function(r,e){try{yi(Ft,r,{value:e,configurable:!0,writable:!0})}catch{Ft[r]=e}return e},"defineGlobalProperty$3"),$i=A,hi=at,Bt="__core-js_shared__",mi=$i[Bt]||hi(Bt,{}),ot=mi,Gt=ot;(ee.exports=function(r,e){return Gt[r]||(Gt[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var bi=Q,xi=Object,or=i(function(r){return xi(bi(r))},"toObject$7"),Ei=O,Oi=or,Si=Ei({}.hasOwnProperty),F=Object.hasOwn||i(function(e,t){return Si(Oi(e),t)},"hasOwn"),wi=O,Ii=0,Ti=Math.random(),Ri=wi(1 .toString),ga=i(function(r){return"Symbol("+(r===void 0?"":r)+")_"+Ri(++Ii+Ti,36)},"uid$2"),Pi=A,_i=ee.exports,Ut=F,Ci=ga,Kt=va,da=fa,cr=_i("wks"),nr=Pi.Symbol,kt=nr&&nr.for,Ai=da?nr:nr&&nr.withoutSetter||Ci,j=i(function(r){if(!Ut(cr,r)||!(Kt||typeof cr[r]=="string")){var e="Symbol."+r;Kt&&Ut(nr,r)?cr[r]=nr[r]:da&&kt?cr[r]=kt(e):cr[r]=Ai(e)}return cr[r]},"wellKnownSymbol$f"),ji=L,zt=Y,Wt=pa,Ni=vr,Li=gi,Mi=j,Di=TypeError,Fi=Mi("toPrimitive"),Bi=i(function(r,e){if(!zt(r)||Wt(r))return r;var t=Ni(r,Fi),n;if(t){if(e===void 0&&(e="default"),n=ji(t,r,e),!zt(n)||Wt(n))return n;throw Di("Can't convert object to primitive value")}return e===void 0&&(e="number"),Li(r,e)},"toPrimitive$1"),Gi=Bi,Ui=pa,ya=i(function(r){var e=Gi(r,"string");return Ui(e)?e:e+""},"toPropertyKey$2"),Ki=A,qt=Y,De=Ki.document,ki=qt(De)&&qt(De.createElement),$a=i(function(r){return ki?De.createElement(r):{}},"documentCreateElement$1"),zi=W,Wi=E,qi=$a,ha=!zi&&!Wi(function(){return Object.defineProperty(qi("div"),"a",{get:function(){return 7}}).a!=7}),Xi=W,Hi=L,Yi=na,Vi=Or,Ji=re,Zi=ya,Qi=F,rc=ha,Xt=Object.getOwnPropertyDescriptor;nt.f=Xi?Xt:i(function(e,t){if(e=Ji(e),t=Zi(t),rc)try{return Xt(e,t)}catch{}if(Qi(e,t))return Vi(!Hi(Yi.f,e,t),e[t])},"getOwnPropertyDescriptor");var J={},ec=W,tc=E,ma=ec&&tc(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),nc=Y,ac=String,oc=TypeError,N=i(function(r){if(nc(r))return r;throw oc(ac(r)+" is not an object")},"anObject$e"),ic=W,cc=ha,sc=ma,jr=N,Ht=ya,lc=TypeError,fe=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,pe="enumerable",ge="configurable",de="writable";J.f=ic?sc?i(function(e,t,n){if(jr(e),t=Ht(t),jr(n),typeof e=="function"&&t==="prototype"&&"value"in n&&de in n&&!n[de]){var o=uc(e,t);o&&o[de]&&(e[t]=n.value,n={configurable:ge in n?n[ge]:o[ge],enumerable:pe in n?n[pe]:o[pe],writable:!1})}return fe(e,t,n)},"defineProperty"):fe:i(function(e,t,n){if(jr(e),t=Ht(t),jr(n),cc)try{return fe(e,t,n)}catch{}if("get"in n||"set"in n)throw lc("Accessors not supported");return"value"in n&&(e[t]=n.value),e},"defineProperty");var vc=W,fc=J,pc=Or,fr=vc?function(r,e,t){return fc.f(r,e,pc(1,t))}:function(r,e,t){return r[e]=t,r},it={exports:{}},Fe=W,gc=F,ba=Function.prototype,dc=Fe&&Object.getOwnPropertyDescriptor,ct=gc(ba,"name"),yc=ct&&i(function(){},"something").name==="something",$c=ct&&(!Fe||Fe&&dc(ba,"name").configurable),hc={EXISTS:ct,PROPER:yc,CONFIGURABLE:$c},mc=O,bc=T,Be=ot,xc=mc(Function.toString);bc(Be.inspectSource)||(Be.inspectSource=function(r){return xc(r)});var st=Be.inspectSource,Ec=A,Oc=T,Sc=st,Yt=Ec.WeakMap,wc=Oc(Yt)&&/native code/.test(Sc(Yt)),Ic=ee.exports,Tc=ga,Vt=Ic("keys"),lt=i(function(r){return Vt[r]||(Vt[r]=Tc(r))},"sharedKey$3"),ut={},Rc=wc,xa=A,ye=O,Pc=Y,_c=fr,$e=F,he=ot,Cc=lt,Ac=ut,Jt="Object already initialized",Ge=xa.TypeError,jc=xa.WeakMap,kr,br,zr,Nc=i(function(r){return zr(r)?br(r):kr(r,{})},"enforce"),Lc=i(function(r){return function(e){var t;if(!Pc(e)||(t=br(e)).type!==r)throw Ge("Incompatible receiver, "+r+" required");return t}},"getterFor");if(Rc||he.state){var tr=he.state||(he.state=new jc),Mc=ye(tr.get),Zt=ye(tr.has),Dc=ye(tr.set);kr=i(function(r,e){if(Zt(tr,r))throw new Ge(Jt);return e.facade=r,Dc(tr,r,e),e},"set"),br=i(function(r){return Mc(tr,r)||{}},"get"),zr=i(function(r){return Zt(tr,r)},"has")}else{var sr=Cc("state");Ac[sr]=!0,kr=i(function(r,e){if($e(r,sr))throw new Ge(Jt);return e.facade=r,_c(r,sr,e),e},"set"),br=i(function(r){return $e(r,sr)?r[sr]:{}},"get"),zr=i(function(r){return $e(r,sr)},"has")}var vt={set:kr,get:br,has:zr,enforce:Nc,getterFor:Lc},Fc=E,Bc=T,Nr=F,Ue=W,Gc=hc.CONFIGURABLE,Uc=st,Ea=vt,Kc=Ea.enforce,kc=Ea.get,Fr=Object.defineProperty,zc=Ue&&!Fc(function(){return Fr(function(){},"length",{value:8}).length!==8}),Wc=String(String).split("String"),qc=it.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Nr(r,"name")||Gc&&r.name!==e)&&(Ue?Fr(r,"name",{value:e,configurable:!0}):r.name=e),zc&&t&&Nr(t,"arity")&&r.length!==t.arity&&Fr(r,"length",{value:t.arity});try{t&&Nr(t,"constructor")&&t.constructor?Ue&&Fr(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=Kc(r);return Nr(n,"source")||(n.source=Wc.join(typeof e=="string"?e:"")),r};Function.prototype.toString=qc(i(function(){return Bc(this)&&kc(this).source||Uc(this)},"toString"),"toString");var Xc=T,Hc=J,Yc=it.exports,Vc=at,Rr=i(function(r,e,t,n){n||(n={});var o=n.enumerable,c=n.name!==void 0?n.name:e;if(Xc(t)&&Yc(t,c,n),n.global)o?r[e]=t:Vc(e,t);else{try{n.unsafe?r[e]&&(o=!0):delete r[e]}catch{}o?r[e]=t:Hc.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},"defineBuiltIn$5"),Oa={},Jc=Math.ceil,Zc=Math.floor,Qc=Math.trunc||i(function(e){var t=+e;return(t>0?Zc:Jc)(t)},"trunc"),rs=Qc,rr=i(function(r){var e=+r;return e!==e||e===0?0:rs(e)},"toIntegerOrInfinity$8"),es=rr,ts=Math.max,ns=Math.min,as=i(function(r,e){var t=es(r);return t<0?ts(t+e,0):ns(t,e)},"toAbsoluteIndex$1"),os=rr,is=Math.min,ft=i(function(r){return r>0?is(os(r),9007199254740991):0},"toLength$3"),cs=ft,pr=i(function(r){return cs(r.length)},"lengthOfArrayLike$6"),ss=re,ls=as,us=pr,Qt=i(function(r){return function(e,t,n){var o=ss(e),c=us(o),u=ls(n,c),l;if(r&&t!=t){for(;c>u;)if(l=o[u++],l!=l)return!0}else for(;c>u;u++)if((r||u in o)&&o[u]===t)return r||u||0;return!r&&-1}},"createMethod$2"),Sa={includes:Qt(!0),indexOf:Qt(!1)},vs=O,me=F,fs=re,ps=Sa.indexOf,gs=ut,rn=vs([].push),wa=i(function(r,e){var t=fs(r),n=0,o=[],c;for(c in t)!me(gs,c)&&me(t,c)&&rn(o,c);for(;e.length>n;)me(t,c=e[n++])&&(~ps(o,c)||rn(o,c));return o},"objectKeysInternal"),pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ds=wa,ys=pt,$s=ys.concat("length","prototype");Oa.f=Object.getOwnPropertyNames||i(function(e){return ds(e,$s)},"getOwnPropertyNames");var Ia={};Ia.f=Object.getOwnPropertySymbols;var hs=V,ms=O,bs=Oa,xs=Ia,Es=N,Os=ms([].concat),Ss=hs("Reflect","ownKeys")||i(function(e){var t=bs.f(Es(e)),n=xs.f;return n?Os(t,n(e)):t},"ownKeys"),en=F,ws=Ss,Is=nt,Ts=J,gt=i(function(r,e,t){for(var n=ws(e),o=Ts.f,c=Is.f,u=0;u<n.length;u++){var l=n[u];!en(r,l)&&!(t&&en(t,l))&&o(r,l,c(e,l))}},"copyConstructorProperties$3"),Rs=E,Ps=T,_s=/#|\.prototype\./,Pr=i(function(r,e){var t=As[Cs(r)];return t==Ns?!0:t==js?!1:Ps(e)?Rs(e):!!e},"isForced$1"),Cs=Pr.normalize=function(r){return String(r).replace(_s,".").toLowerCase()},As=Pr.data={},js=Pr.NATIVE="N",Ns=Pr.POLYFILL="P",Ls=Pr,be=A,Ms=nt.f,Ds=fr,Fs=Rr,Bs=at,Gs=gt,Us=Ls,P=i(function(r,e){var t=r.target,n=r.global,o=r.stat,c,u,l,a,s,v;if(n?u=be:o?u=be[t]||Bs(t,{}):u=(be[t]||{}).prototype,u)for(l in e){if(s=e[l],r.dontCallGetSet?(v=Ms(u,l),a=v&&v.value):a=u[l],c=Us(n?l:t+(o?".":"#")+l,r.forced),!c&&a!==void 0){if(typeof s==typeof a)continue;Gs(s,a)}(r.sham||a&&a.sham)&&Ds(s,"sham",!0),Fs(u,l,s,r)}},"_export"),Ks=E,ks=!Ks(function(){function r(){}return i(r,"F"),r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),zs=F,Ws=T,qs=or,Xs=lt,Hs=ks,tn=Xs("IE_PROTO"),Ke=Object,Ys=Ke.prototype,Ta=Hs?Ke.getPrototypeOf:function(r){var e=qs(r);if(zs(e,tn))return e[tn];var t=e.constructor;return Ws(t)&&e instanceof t?t.prototype:e instanceof Ke?Ys:null},Vs=T,Js=String,Zs=TypeError,Qs=i(function(r){if(typeof r=="object"||Vs(r))return r;throw Zs("Can't set "+Js(r)+" as a prototype")},"aPossiblePrototype$1"),rl=O,el=N,tl=Qs,dt=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=rl(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return i(function(o,c){return el(o),tl(c),r?t(o,c):o.__proto__=c,o},"setPrototypeOf")}():void 0),Ra={},nl=wa,al=pt,ol=Object.keys||i(function(e){return nl(e,al)},"keys"),il=W,cl=ma,sl=J,ll=N,ul=re,vl=ol;Ra.f=il&&!cl?Object.defineProperties:i(function(e,t){ll(e);for(var n=ul(t),o=vl(t),c=o.length,u=0,l;c>u;)sl.f(e,l=o[u++],n[l]);return e},"defineProperties");var fl=V,pl=fl("document","documentElement"),gl=N,dl=Ra,nn=pt,yl=ut,$l=pl,hl=$a,ml=lt,an=">",on="<",ke="prototype",ze="script",Pa=ml("IE_PROTO"),xe=i(function(){},"EmptyConstructor"),_a=i(function(r){return on+ze+an+r+on+"/"+ze+an},"scriptTag"),cn=i(function(r){r.write(_a("")),r.close();var e=r.parentWindow.Object;return r=null,e},"NullProtoObjectViaActiveX"),bl=i(function(){var r=hl("iframe"),e="java"+ze+":",t;return r.style.display="none",$l.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(_a("document.F=Object")),t.close(),t.F},"NullProtoObjectViaIFrame"),Lr,Br=i(function(){try{Lr=new ActiveXObject("htmlfile")}catch{}Br=typeof document<"u"?document.domain&&Lr?cn(Lr):bl():cn(Lr);for(var r=nn.length;r--;)delete Br[ke][nn[r]];return Br()},"NullProtoObject");yl[Pa]=!0;var te=Object.create||i(function(e,t){var n;return e!==null?(xe[ke]=gl(e),n=new xe,xe[ke]=null,n[Pa]=e):n=Br(),t===void 0?n:dl.f(n,t)},"create"),xl=O,Ca=Error,El=xl("".replace),Ol=function(r){return String(Ca(r).stack)}("zxcasd"),Aa=/\n\s*at [^:]*:[^\n]*/,Sl=Aa.test(Ol),ja=i(function(r,e){if(Sl&&typeof r=="string"&&!Ca.prepareStackTrace)for(;e--;)r=El(r,Aa,"");return r},"clearErrorStack$2"),wl=Y,Il=fr,Na=i(function(r,e){wl(e)&&"cause"in e&&Il(r,"cause",e.cause)},"installErrorCause$2"),sn=O,Tl=Tr,Rl=Qr,Pl=sn(sn.bind),La=i(function(r,e){return Tl(r),e===void 0?r:Rl?Pl(r,e):function(){return r.apply(e,arguments)}},"functionBindContext"),yt={},_l=j,Cl=yt,Al=_l("iterator"),jl=Array.prototype,Nl=i(function(r){return r!==void 0&&(Cl.Array===r||jl[Al]===r)},"isArrayIteratorMethod$1"),Ll=j,Ml=Ll("toStringTag"),Ma={};Ma[Ml]="z";var Dl=String(Ma)==="[object z]",Fl=Dl,Bl=T,Gr=Sr,Gl=j,Ul=Gl("toStringTag"),Kl=Object,kl=Gr(function(){return arguments}())=="Arguments",zl=i(function(r,e){try{return r[e]}catch{}},"tryGet"),$t=Fl?Gr:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=zl(e=Kl(r),Ul))=="string"?t:kl?Gr(e):(n=Gr(e))=="Object"&&Bl(e.callee)?"Arguments":n},Wl=$t,ln=vr,ql=yt,Xl=j,Hl=Xl("iterator"),Da=i(function(r){if(r!=null)return ln(r,Hl)||ln(r,"@@iterator")||ql[Wl(r)]},"getIteratorMethod$2"),Yl=L,Vl=Tr,Jl=N,Zl=Ir,Ql=Da,ru=TypeError,eu=i(function(r,e){var t=arguments.length<2?Ql(r):e;if(Vl(t))return Jl(Yl(t,r));throw ru(Zl(r)+" is not iterable")},"getIterator$1"),tu=L,un=N,nu=vr,au=i(function(r,e,t){var n,o;un(r);try{if(n=nu(r,"return"),!n){if(e==="throw")throw t;return t}n=tu(n,r)}catch(c){o=!0,n=c}if(e==="throw")throw t;if(o)throw n;return un(n),t},"iteratorClose$1"),ou=La,iu=L,cu=N,su=Ir,lu=Nl,uu=pr,vn=wr,vu=eu,fu=Da,fn=au,pu=TypeError,Ur=i(function(r,e){this.stopped=r,this.result=e},"Result"),pn=Ur.prototype,Fa=i(function(r,e,t){var n=t&&t.that,o=!!(t&&t.AS_ENTRIES),c=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),a=ou(e,n),s,v,f,p,g,d,$,x=i(function(b){return s&&fn(s,"normal",b),new Ur(!0,b)},"stop"),w=i(function(b){return o?(cu(b),l?a(b[0],b[1],x):a(b[0],b[1])):l?a(b,x):a(b)},"callFn");if(c)s=r.iterator;else if(u)s=r;else{if(v=fu(r),!v)throw pu(su(r)+" is not iterable");if(lu(v)){for(f=0,p=uu(r);p>f;f++)if(g=w(r[f]),g&&vn(pn,g))return g;return new Ur(!1)}s=vu(r,v)}for(d=c?r.next:s.next;!($=iu(d,s)).done;){try{g=w($.value)}catch(b){fn(s,"throw",b)}if(typeof g=="object"&&g&&vn(pn,g))return g}return new Ur(!1)},"iterate$2"),gu=$t,du=String,er=i(function(r){if(gu(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return du(r)},"toString$8"),yu=er,Ba=i(function(r,e){return r===void 0?arguments.length<2?"":e:yu(r)},"normalizeStringArgument$2"),$u=E,hu=Or,Ga=!$u(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",hu(1,7)),r.stack!==7):!0}),mu=P,bu=wr,xu=Ta,Wr=dt,Eu=gt,Ua=te,Mr=fr,Ee=Or,Ou=ja,Su=Na,wu=Fa,Iu=Ba,Tu=j,Ru=Ga,Pu=Tu("toStringTag"),qr=Error,_u=[].push,xr=i(function(e,t){var n=arguments.length>2?arguments[2]:void 0,o=bu(Oe,this),c;Wr?c=Wr(new qr,o?xu(this):Oe):(c=o?this:Ua(Oe),Mr(c,Pu,"Error")),t!==void 0&&Mr(c,"message",Iu(t)),Ru&&Mr(c,"stack",Ou(c.stack,1)),Su(c,n);var u=[];return wu(e,_u,{that:u}),Mr(c,"errors",u),c},"AggregateError");Wr?Wr(xr,qr):Eu(xr,qr,{name:!0});var Oe=xr.prototype=Ua(qr.prototype,{constructor:Ee(1,xr),message:Ee(1,""),name:Ee(1,"AggregateError")});mu({global:!0,constructor:!0,arity:2},{AggregateError:xr});var Cu=Qr,Ka=Function.prototype,gn=Ka.apply,dn=Ka.call,ht=typeof Reflect=="object"&&Reflect.apply||(Cu?dn.bind(gn):function(){return dn.apply(gn,arguments)}),Au=J.f,ju=i(function(r,e,t){t in r||Au(r,t,{configurable:!0,get:function(){return e[t]},set:function(n){e[t]=n}})},"proxyAccessor$1"),Nu=T,Lu=Y,yn=dt,Mu=i(function(r,e,t){var n,o;return yn&&Nu(n=e.constructor)&&n!==t&&Lu(o=n.prototype)&&o!==t.prototype&&yn(r,o),r},"inheritIfRequired$1"),$n=V,Du=F,Se=fr,Fu=wr,hn=dt,mn=gt,bn=ju,Bu=Mu,Gu=Ba,Uu=Na,Ku=ja,ku=Ga,zu=W,ka=i(function(r,e,t,n){var o="stackTraceLimit",c=n?2:1,u=r.split("."),l=u[u.length-1],a=$n.apply(null,u);if(!!a){var s=a.prototype;if(Du(s,"cause")&&delete s.cause,!t)return a;var v=$n("Error"),f=e(function(p,g){var d=Gu(n?g:p,void 0),$=n?new a(p):new a;return d!==void 0&&Se($,"message",d),ku&&Se($,"stack",Ku($.stack,2)),this&&Fu(s,this)&&Bu($,this,f),arguments.length>c&&Uu($,arguments[c]),$});f.prototype=s,l!=="Error"?hn?hn(f,v):mn(f,v,{name:!0}):zu&&o in a&&(bn(f,a,o),bn(f,a,"prepareStackTrace")),mn(f,a);try{s.name!==l&&Se(s,"name",l),s.constructor=f}catch{}return f}},"wrapErrorConstructorWithCause$2"),Wu=P,qu=V,Xu=ht,xn=E,Hu=ka,mt="AggregateError",En=qu(mt),On=!xn(function(){return En([1]).errors[0]!==1})&&xn(function(){return En([1],mt,{cause:7}).cause!==7});Wu({global:!0,constructor:!0,arity:2,forced:On},{AggregateError:Hu(mt,function(r){return i(function(t,n){return Xu(r,this,arguments)},"AggregateError")},On,!0)});var Yu=j,Vu=te,Ju=J.f,We=Yu("unscopables"),qe=Array.prototype;qe[We]==null&&Ju(qe,We,{configurable:!0,value:Vu(null)});var ne=i(function(r){qe[We][r]=!0},"addToUnscopables$4"),Zu=P,Qu=or,rv=pr,ev=rr,tv=ne;Zu({target:"Array",proto:!0},{at:i(function(e){var t=Qu(this),n=rv(t),o=ev(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:t[c]},"at")});tv("at");var nv=La,av=la,ov=or,iv=pr,Sn=i(function(r){var e=r==1;return function(t,n,o){for(var c=ov(t),u=av(c),l=nv(n,o),a=iv(u),s,v;a-- >0;)if(s=u[a],v=l(s,a,c),v)switch(r){case 0:return s;case 1:return a}return e?-1:void 0}},"createMethod$1"),za={findLast:Sn(0),findLastIndex:Sn(1)},cv=P,sv=za.findLast,lv=ne;cv({target:"Array",proto:!0},{findLast:i(function(e){return sv(this,e,arguments.length>1?arguments[1]:void 0)},"findLast")});lv("findLast");var uv=P,vv=za.findLastIndex,fv=ne;uv({target:"Array",proto:!0},{findLastIndex:i(function(e){return vv(this,e,arguments.length>1?arguments[1]:void 0)},"findLastIndex")});fv("findLastIndex");var pv=P,gv=Sa.includes,dv=E,yv=ne,$v=dv(function(){return!Array(1).includes()});pv({target:"Array",proto:!0,forced:$v},{includes:i(function(e){return gv(this,e,arguments.length>1?arguments[1]:void 0)},"includes")});yv("includes");var hv=TypeError,mv=9007199254740991,Wa=i(function(r){if(r>mv)throw hv("Maximum allowed index exceeded");return r},"doesNotExceedSafeInteger$2"),bv=P,xv=or,Ev=pr,Ov=Wa,Sv=E,wv=Sv(function(){return[].push.call({length:4294967296},1)!==4294967297}),Iv=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}}();bv({target:"Array",proto:!0,arity:1,forced:wv||Iv},{push:i(function(e){var t=xv(this),n=Ev(t),o=arguments.length;Ov(n+o);for(var c=0;c<o;c++)t[n]=arguments[c],n++;return t.length=n,n},"push")});var wn=Ir,Tv=TypeError,Rv=i(function(r,e){if(!delete r[e])throw Tv("Cannot delete property "+wn(e)+" of "+wn(r))},"deletePropertyOrThrow$1"),Pv=P,_v=or,Cv=pr,Av=Rv,jv=Wa,Nv=[].unshift(0)!==1,Lv=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}}();Pv({target:"Array",proto:!0,arity:1,forced:Nv||Lv},{unshift:i(function(e){var t=_v(this),n=Cv(t),o=arguments.length;if(o){jv(n+o);for(var c=n;c--;){var u=c+o;c in t?t[u]=t[c]:Av(t,u)}for(var l=0;l<o;l++)t[l]=arguments[l]}return t.length=n+o},"unshift")});var qa=P,Mv=A,q=ht,Xa=ka,Xe="WebAssembly",In=Mv[Xe],Xr=Error("e",{cause:7}).cause!==7,ir=i(function(r,e){var t={};t[r]=Xa(r,e,Xr),qa({global:!0,constructor:!0,arity:1,forced:Xr},t)},"exportGlobalErrorCauseWrapper"),bt=i(function(r,e){if(In&&In[r]){var t={};t[r]=Xa(Xe+"."+r,e,Xr),qa({target:Xe,stat:!0,constructor:!0,arity:1,forced:Xr},t)}},"exportWebAssemblyErrorCauseWrapper");ir("Error",function(r){return i(function(t){return q(r,this,arguments)},"Error")});ir("EvalError",function(r){return i(function(t){return q(r,this,arguments)},"EvalError")});ir("RangeError",function(r){return i(function(t){return q(r,this,arguments)},"RangeError")});ir("ReferenceError",function(r){return i(function(t){return q(r,this,arguments)},"ReferenceError")});ir("SyntaxError",function(r){return i(function(t){return q(r,this,arguments)},"SyntaxError")});ir("TypeError",function(r){return i(function(t){return q(r,this,arguments)},"TypeError")});ir("URIError",function(r){return i(function(t){return q(r,this,arguments)},"URIError")});bt("CompileError",function(r){return i(function(t){return q(r,this,arguments)},"CompileError")});bt("LinkError",function(r){return i(function(t){return q(r,this,arguments)},"LinkError")});bt("RuntimeError",function(r){return i(function(t){return q(r,this,arguments)},"RuntimeError")});var Dv=O,Fv=Dv(1 .valueOf),Bv=rr,Gv=er,Uv=Q,Kv=RangeError,kv=i(function(e){var t=Gv(Uv(this)),n="",o=Bv(e);if(o<0||o==1/0)throw Kv("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))o&1&&(n+=t);return n},"repeat"),zv=Math.log,Wv=Math.LOG10E,qv=Math.log10||i(function(e){return zv(e)*Wv},"log10"),Xv=P,xt=O,Hv=rr,Yv=Fv,Vv=kv,Jv=qv,Hr=E,Zv=RangeError,Tn=String,Qv=isFinite,rf=Math.abs,ef=Math.floor,Rn=Math.pow,tf=Math.round,z=xt(1 .toExponential),nf=xt(Vv),Pn=xt("".slice),Ha=z(-69e-12,4)==="-6.9000e-11"&&z(1.255,2)==="1.25e+0"&&z(12345,3)==="1.235e+4"&&z(25,0)==="3e+1",af=Hr(function(){z(1,1/0)})&&Hr(function(){z(1,-1/0)}),of=!Hr(function(){z(1/0,1/0)})&&!Hr(function(){z(NaN,1/0)}),cf=!Ha||!af||!of;Xv({target:"Number",proto:!0,forced:cf},{toExponential:i(function(e){var t=Yv(this);if(e===void 0)return z(t);var n=Hv(e);if(!Qv(t))return String(t);if(n<0||n>20)throw Zv("Incorrect fraction digits");if(Ha)return z(t,n);var o="",c="",u=0,l="",a="";if(t<0&&(o="-",t=-t),t===0)u=0,c=nf("0",n+1);else{var s=Jv(t);u=ef(s);var v=0,f=Rn(10,u-n);v=tf(t/f),2*t>=(2*v+1)*f&&(v+=1),v>=Rn(10,n+1)&&(v/=10,u+=1),c=Tn(v)}return n!==0&&(c=Pn(c,0,1)+"."+Pn(c,1)),u===0?(l="+",a="0"):(l=u>0?"+":"-",a=Tn(rf(u))),c+="e"+l+a,o+c},"toExponential")});var sf=P,lf=F;sf({target:"Object",stat:!0},{hasOwn:lf});var Et={},_n=Tr,uf=i(function(r){var e,t;this.promise=new r(function(n,o){if(e!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");e=n,t=o}),this.resolve=_n(e),this.reject=_n(t)},"PromiseCapability");Et.f=function(r){return new uf(r)};var vf=i(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$1"),ff=P,pf=L,gf=Tr,df=V,yf=Et,$f=vf,hf=Fa,Cn="No one promise resolved";ff({target:"Promise",stat:!0},{any:i(function(e){var t=this,n=df("AggregateError"),o=yf.f(t),c=o.resolve,u=o.reject,l=$f(function(){var a=gf(t.resolve),s=[],v=0,f=1,p=!1;hf(e,function(g){var d=v++,$=!1;f++,pf(a,t,g).then(function(x){$||p||(p=!0,c(x))},function(x){$||p||($=!0,s[d]=x,--f||u(new n(s,Cn)))})}),--f||u(new n(s,Cn))});return l.error&&u(l.value),o.promise},"any")});var mf=A,bf=mf.Promise,xf=O,Ef=E,Ya=T,Of=$t,Sf=V,wf=st,Va=i(function(){},"noop"),If=[],Ja=Sf("Reflect","construct"),Ot=/^\s*(?:class|function)\b/,Tf=xf(Ot.exec),Rf=!Ot.exec(Va),$r=i(function(e){if(!Ya(e))return!1;try{return Ja(Va,If,e),!0}catch{return!1}},"isConstructor"),Za=i(function(e){if(!Ya(e))return!1;switch(Of(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Rf||!!Tf(Ot,wf(e))}catch{return!0}},"isConstructor");Za.sham=!0;var Pf=!Ja||Ef(function(){var r;return $r($r.call)||!$r(Object)||!$r(function(){r=!0})||r})?Za:$r,_f=Pf,Cf=Ir,Af=TypeError,jf=i(function(r){if(_f(r))return r;throw Af(Cf(r)+" is not a constructor")},"aConstructor$1"),An=N,Nf=jf,Lf=j,Mf=Lf("species"),Qa=i(function(r,e){var t=An(r).constructor,n;return t===void 0||(n=An(t)[Mf])==null?e:Nf(n)},"speciesConstructor$2"),Df=N,Ff=Y,Bf=Et,Gf=i(function(r,e){if(Df(r),Ff(e)&&e.constructor===r)return e;var t=Bf.f(r),n=t.resolve;return n(e),t.promise},"promiseResolve$1"),Uf=P,Yr=bf,Kf=E,ro=V,eo=T,kf=Qa,jn=Gf,zf=Rr,He=Yr&&Yr.prototype,Wf=!!Yr&&Kf(function(){He.finally.call({then:function(){}},function(){})});Uf({target:"Promise",proto:!0,real:!0,forced:Wf},{finally:function(r){var e=kf(this,ro("Promise")),t=eo(r);return this.then(t?function(n){return jn(e,r()).then(function(){return n})}:r,t?function(n){return jn(e,r()).then(function(){throw n})}:r)}});if(eo(Yr)){var Nn=ro("Promise").prototype.finally;He.finally!==Nn&&zf(He,"finally",Nn,{unsafe:!0})}var qf=J.f,Xf=F,Hf=j,Ln=Hf("toStringTag"),to=i(function(r,e,t){r&&!t&&(r=r.prototype),r&&!Xf(r,Ln)&&qf(r,Ln,{configurable:!0,value:e})},"setToStringTag$2"),Yf=P,Vf=A,Jf=to;Yf({global:!0},{Reflect:{}});Jf(Vf.Reflect,"Reflect",!0);var Mn=it.exports,Zf=J,Qf=i(function(r,e,t){return t.get&&Mn(t.get,e,{getter:!0}),t.set&&Mn(t.set,e,{setter:!0}),Zf.f(r,e,t)},"defineBuiltInAccessor$1"),rp=N,St=i(function(){var r=rp(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),ep=A,tp=W,np=Qf,ap=St,op=E,no=ep.RegExp,ao=no.prototype,ip=tp&&op(function(){var r=!0;try{no(".","d")}catch{r=!1}var e={},t="",n=r?"dgimsy":"gimsy",o=i(function(a,s){Object.defineProperty(e,a,{get:function(){return t+=s,!0}})},"addGetter"),c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(c.hasIndices="d");for(var u in c)o(u,c[u]);var l=Object.getOwnPropertyDescriptor(ao,"flags").get.call(e);return l!==n||t!==n});ip&&np(ao,"flags",{configurable:!0,get:ap});var cp=P,sp=O,lp=Q,up=rr,vp=er,fp=E,pp=sp("".charAt),gp=fp(function(){return"\u{20BB7}".at(-2)!=="\uD842"});cp({target:"String",proto:!0,forced:gp},{at:i(function(e){var t=vp(lp(this)),n=t.length,o=up(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:pp(t,c)},"at")});var dp=E,yp=T,Dn=Ta,$p=Rr,hp=j,Ye=hp("iterator"),oo=!1,ar,we,Ie;[].keys&&(Ie=[].keys(),"next"in Ie?(we=Dn(Dn(Ie)),we!==Object.prototype&&(ar=we)):oo=!0);var mp=ar==null||dp(function(){var r={};return ar[Ye].call(r)!==r});mp&&(ar={});yp(ar[Ye])||$p(ar,Ye,function(){return this});var bp={IteratorPrototype:ar,BUGGY_SAFARI_ITERATORS:oo},xp=bp.IteratorPrototype,Ep=te,Op=Or,Sp=to,wp=yt,Ip=i(function(){return this},"returnThis"),Tp=i(function(r,e,t,n){var o=e+" Iterator";return r.prototype=Ep(xp,{next:Op(+!n,t)}),Sp(r,o,!1),wp[o]=Ip,r},"createIteratorConstructor$1"),Rp=Y,Pp=Sr,_p=j,Cp=_p("match"),io=i(function(r){var e;return Rp(r)&&((e=r[Cp])!==void 0?!!e:Pp(r)=="RegExp")},"isRegexp"),Ap=L,jp=F,Np=wr,Lp=St,Fn=RegExp.prototype,co=i(function(r){var e=r.flags;return e===void 0&&!("flags"in Fn)&&!jp(r,"flags")&&Np(Fn,r)?Ap(Lp,r):e},"regexpGetFlags"),wt=O,Mp=rr,Dp=er,Fp=Q,Bp=wt("".charAt),Bn=wt("".charCodeAt),Gp=wt("".slice),Gn=i(function(r){return function(e,t){var n=Dp(Fp(e)),o=Mp(t),c=n.length,u,l;return o<0||o>=c?r?"":void 0:(u=Bn(n,o),u<55296||u>56319||o+1===c||(l=Bn(n,o+1))<56320||l>57343?r?Bp(n,o):u:r?Gp(n,o,o+2):(u-55296<<10)+(l-56320)+65536)}},"createMethod"),Up={codeAt:Gn(!1),charAt:Gn(!0)},Kp=Up.charAt,so=i(function(r,e,t){return e+(t?Kp(r,e).length:1)},"advanceStringIndex$2"),It=E,kp=A,Tt=kp.RegExp,Rt=It(function(){var r=Tt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),zp=Rt||It(function(){return!Tt("a","y").sticky}),Wp=Rt||It(function(){var r=Tt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),qp={BROKEN_CARET:Wp,MISSED_STICKY:zp,UNSUPPORTED_Y:Rt},Xp=E,Hp=A,Yp=Hp.RegExp,Vp=Xp(function(){var r=Yp(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),Jp=E,Zp=A,Qp=Zp.RegExp,rg=Jp(function(){var r=Qp("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),ur=L,ae=O,eg=er,tg=St,ng=qp,ag=ee.exports,og=te,ig=vt.get,cg=Vp,sg=rg,lg=ag("native-string-replace",String.prototype.replace),Vr=RegExp.prototype.exec,Ve=Vr,ug=ae("".charAt),vg=ae("".indexOf),fg=ae("".replace),Te=ae("".slice),Je=function(){var r=/a/,e=/b*/g;return ur(Vr,r,"a"),ur(Vr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),lo=ng.BROKEN_CARET,Ze=/()??/.exec("")[1]!==void 0,pg=Je||Ze||lo||cg||sg;pg&&(Ve=i(function(e){var t=this,n=ig(t),o=eg(e),c=n.raw,u,l,a,s,v,f,p;if(c)return c.lastIndex=t.lastIndex,u=ur(Ve,c,o),t.lastIndex=c.lastIndex,u;var g=n.groups,d=lo&&t.sticky,$=ur(tg,t),x=t.source,w=0,b=o;if(d&&($=fg($,"y",""),vg($,"g")===-1&&($+="g"),b=Te(o,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&ug(o,t.lastIndex-1)!==`
`)&&(x="(?: "+x+")",b=" "+b,w++),l=new RegExp("^(?:"+x+")",$)),Ze&&(l=new RegExp("^"+x+"$(?!\\s)",$)),Je&&(a=t.lastIndex),s=ur(Vr,d?l:t,b),d?s?(s.input=Te(s.input,w),s[0]=Te(s[0],w),s.index=t.lastIndex,t.lastIndex+=s[0].length):t.lastIndex=0:Je&&s&&(t.lastIndex=t.global?s.index+s[0].length:a),Ze&&s&&s.length>1&&ur(lg,s[0],l,function(){for(v=1;v<arguments.length-2;v++)arguments[v]===void 0&&(s[v]=void 0)}),s&&g)for(s.groups=f=og(null),v=0;v<g.length;v++)p=g[v],f[p[0]]=s[p[1]];return s},"exec"));var Pt=Ve,Un=L,gg=N,dg=T,yg=Sr,$g=Pt,hg=TypeError,uo=i(function(r,e){var t=r.exec;if(dg(t)){var n=Un(t,r,e);return n!==null&&gg(n),n}if(yg(r)==="RegExp")return Un($g,r,e);throw hg("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),mg=P,bg=L,vo=O,xg=Tp,Kn=Q,fo=ft,Er=er,Eg=N,Og=Sr,Sg=io,po=co,wg=vr,Ig=Rr,Tg=E,Rg=j,Pg=Qa,_g=so,Cg=uo,go=vt,Ag=di,Jr=Rg("matchAll"),yo="RegExp String",$o=yo+" Iterator",jg=go.set,Ng=go.getterFor($o),kn=RegExp.prototype,Lg=TypeError,Qe=vo("".indexOf),Zr=vo("".matchAll),Re=!!Zr&&!Tg(function(){Zr("a",/./)}),Mg=xg(i(function(e,t,n,o){jg(this,{type:$o,regexp:e,string:t,global:n,unicode:o,done:!1})},"RegExpStringIterator"),yo,i(function(){var e=Ng(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=Cg(t,n);return o===null?{value:void 0,done:e.done=!0}:e.global?(Er(o[0])===""&&(t.lastIndex=_g(n,fo(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})},"next")),ho=i(function(r){var e=Eg(this),t=Er(r),n=Pg(e,RegExp),o=Er(po(e)),c,u,l;return c=new n(n===RegExp?e.source:e,o),u=!!~Qe(o,"g"),l=!!~Qe(o,"u"),c.lastIndex=fo(e.lastIndex),new Mg(c,t,u,l)},"$matchAll");mg({target:"String",proto:!0,forced:Re},{matchAll:i(function(e){var t=Kn(this),n,o,c,u;if(e!=null){if(Sg(e)&&(n=Er(Kn(po(e))),!~Qe(n,"g")))throw Lg("`.matchAll` does not allow non-global regexes");if(Re)return Zr(t,e);if(c=wg(e,Jr),c===void 0&&Ag&&Og(e)=="RegExp"&&(c=ho),c)return bg(c,e,t)}else if(Re)return Zr(t,e);return o=Er(t),u=new RegExp(e,"g"),u[Jr](o)},"matchAll")});Jr in kn||Ig(kn,Jr,ho);var Dg=P,zn=Pt;Dg({target:"RegExp",proto:!0,forced:/./.exec!==zn},{exec:zn});var Wn=O,qn=Rr,Fg=Pt,Xn=E,mo=j,Bg=fr,Gg=mo("species"),Pe=RegExp.prototype,Ug=i(function(r,e,t,n){var o=mo(r),c=!Xn(function(){var s={};return s[o]=function(){return 7},""[r](s)!=7}),u=c&&!Xn(function(){var s=!1,v=/a/;return r==="split"&&(v={},v.constructor={},v.constructor[Gg]=function(){return v},v.flags="",v[o]=/./[o]),v.exec=function(){return s=!0,null},v[o](""),!s});if(!c||!u||t){var l=Wn(/./[o]),a=e(o,""[r],function(s,v,f,p,g){var d=Wn(s),$=v.exec;return $===Fg||$===Pe.exec?c&&!g?{done:!0,value:l(v,f,p)}:{done:!0,value:d(f,v,p)}:{done:!1}});qn(String.prototype,r,a[0]),qn(Pe,o,a[1])}n&&Bg(Pe[o],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),_t=O,Kg=or,kg=Math.floor,_e=_t("".charAt),zg=_t("".replace),Ce=_t("".slice),Wg=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,qg=/\$([$&'`]|\d{1,2})/g,bo=i(function(r,e,t,n,o,c){var u=t+r.length,l=n.length,a=qg;return o!==void 0&&(o=Kg(o),a=Wg),zg(c,a,function(s,v){var f;switch(_e(v,0)){case"$":return"$";case"&":return r;case"`":return Ce(e,0,t);case"'":return Ce(e,u);case"<":f=o[Ce(v,1,-1)];break;default:var p=+v;if(p===0)return s;if(p>l){var g=kg(p/10);return g===0?s:g<=l?n[g-1]===void 0?_e(v,1):n[g-1]+_e(v,1):s}f=n[p-1]}return f===void 0?"":f})},"getSubstitution$2"),Xg=ht,Hn=L,oe=O,Hg=Ug,Yg=E,Vg=N,Jg=T,Zg=rr,Qg=ft,lr=er,rd=Q,ed=so,td=vr,nd=bo,ad=uo,od=j,rt=od("replace"),id=Math.max,cd=Math.min,sd=oe([].concat),Ae=oe([].push),Yn=oe("".indexOf),Vn=oe("".slice),ld=i(function(r){return r===void 0?r:String(r)},"maybeToString"),ud=function(){return"a".replace(/./,"$0")==="$0"}(),Jn=function(){return/./[rt]?/./[rt]("a","$0")==="":!1}(),vd=!Yg(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Hg("replace",function(r,e,t){var n=Jn?"$":"$0";return[i(function(c,u){var l=rd(this),a=c==null?void 0:td(c,rt);return a?Hn(a,c,l,u):Hn(e,lr(l),c,u)},"replace"),function(o,c){var u=Vg(this),l=lr(o);if(typeof c=="string"&&Yn(c,n)===-1&&Yn(c,"$<")===-1){var a=t(e,u,l,c);if(a.done)return a.value}var s=Jg(c);s||(c=lr(c));var v=u.global;if(v){var f=u.unicode;u.lastIndex=0}for(var p=[];;){var g=ad(u,l);if(g===null||(Ae(p,g),!v))break;var d=lr(g[0]);d===""&&(u.lastIndex=ed(l,Qg(u.lastIndex),f))}for(var $="",x=0,w=0;w<p.length;w++){g=p[w];for(var b=lr(g[0]),B=id(cd(Zg(g.index),l.length),0),h=[],m=1;m<g.length;m++)Ae(h,ld(g[m]));var R=g.groups;if(s){var I=sd([b],h,B,l);R!==void 0&&Ae(I,R);var S=lr(Xg(c,void 0,I))}else S=nd(b,l,B,h,R,c);B>=x&&($+=Vn(l,x,B)+S,x=B+b.length)}return $+Vn(l,x)}]},!vd||!ud||Jn);var fd=P,pd=L,Ct=O,Zn=Q,gd=T,dd=io,hr=er,yd=vr,$d=co,hd=bo,md=j,bd=md("replace"),xd=TypeError,xo=Ct("".indexOf);Ct("".replace);var Qn=Ct("".slice),Ed=Math.max,ra=i(function(r,e,t){return t>r.length?-1:e===""?t:xo(r,e,t)},"stringIndexOf");fd({target:"String",proto:!0},{replaceAll:i(function(e,t){var n=Zn(this),o,c,u,l,a,s,v,f,p,g=0,d=0,$="";if(e!=null){if(o=dd(e),o&&(c=hr(Zn($d(e))),!~xo(c,"g")))throw xd("`.replaceAll` does not allow non-global regexes");if(u=yd(e,bd),u)return pd(u,e,n,t)}for(l=hr(n),a=hr(e),s=gd(t),s||(t=hr(t)),v=a.length,f=Ed(1,v),g=ra(l,a,0);g!==-1;)p=s?hr(t(a,g,l)):hd(a,l,g,[],void 0,t),$+=Qn(l,d,g)+p,d=g+v,g=ra(l,a,g+f);return d<l.length&&($+=Qn(l,d)),$},"replaceAll")});var Dr,Od=new Uint8Array(16);function Sd(){if(!Dr&&(Dr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Dr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Dr(Od)}i(Sd,"rng");const wd=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Id(r){return typeof r=="string"&&wd.test(r)}i(Id,"validate");var _=[];for(var je=0;je<256;++je)_.push((je+256).toString(16).substr(1));function Td(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(_[r[e+0]]+_[r[e+1]]+_[r[e+2]]+_[r[e+3]]+"-"+_[r[e+4]]+_[r[e+5]]+"-"+_[r[e+6]]+_[r[e+7]]+"-"+_[r[e+8]]+_[r[e+9]]+"-"+_[r[e+10]]+_[r[e+11]]+_[r[e+12]]+_[r[e+13]]+_[r[e+14]]+_[r[e+15]]).toLowerCase();if(!Id(t))throw TypeError("Stringified UUID is invalid");return t}i(Td,"stringify");function Rd(r,e,t){r=r||{};var n=r.random||(r.rng||Sd)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=n[o];return e}return Td(n)}i(Rd,"v4");const Pd=i(r=>(Object.assign(r,{appendTo(e){r.element,e.append(r.element)},dispose(){r.dispose?r.dispose():(r.element,r.element.remove())}}),r),"Component"),_d=i((r,e)=>{const t={clear(){return e.transform.baseVal.clear(),t},translate(n,o){const c=r.createSVGTransform();return c.setTranslate(n,o),e.transform.baseVal.appendItem(c),t},scale(n,o=n){const c=r.createSVGTransform();return c.setScale(n,o),e.transform.baseVal.appendItem(c),t},rotate(n,o=0,c=0){console.log(n);const u=r.createSVGTransform();return u.setRotate(n,o,c),e.transform.baseVal.appendItem(u),t}};return t},"Transform"),gr=i(r=>(Pd(r),Object.assign(r,{appendDefTo(e){r.element,e.append(r.element)},transformWith(e){return r.element,_d(e,r.element)}}),r),"SvgComponent"),U=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<placeholder-element id="${v}"></placeholder-element>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElement("template");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`placeholder-element#${u}`);a.parentNode.replaceChild(l,a)}return c},"html"),C=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<g id="${a}"></g>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<g id="${a}"></g>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<g id="${v}"></g>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`g#${u}`);a.parentNode.replaceChild(l,a)}return c},"svg"),Eo=Symbol("celly"),y=Math.sqrt(3)/2,Oo=i(()=>{const r=C`<path
		d="
    m ${-y} -0.5
    l  ${y} -0.5
    l  ${y}  0.5
    l 0                   1
    l ${-y}  0.5
    l ${-y} -0.5
    z
  "
	/>`;return gr({element:r})},"Hexagon"),Cd=i(()=>{const r=document.createElementNS("http://www.w3.org/2000/svg","g");return gr({element:r})},"G"),Ad=i(r=>r[Eo],"isCell"),jd=i((r,e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","g");for(const o of Object.values(e)){Object.assign(o.element,{[Eo]:!0,cell:o});const c=Cd(),{coordinate:{q:u,r:l}}=o,a=2*y*u+y*l,s=3/2*l;c.transformWith(r).translate(a,s),o.appendTo(c.element),c.appendTo(n)}return n.addEventListener("pointerdown",o=>{for(const c of o.composedPath())if(Ad(c))return t(c.cell,o)}),gr({element:n,cells:e})},"Grid"),Nd=i(([r,e])=>{const t=C`<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 ${r} ${e}"
		preserveAspectRatio="xMidYMid meet"
	></svg>`;return gr({element:t})},"Main"),ea=[0,60,120,180,240,300];function Ld(r){if(!ea.includes(r))throw new Error(`expected one of Orientation [${ea.join(", ")}] but got ${r}`)}i(Ld,"assertOrientation");const Md=i((r,e)=>{switch(e){case 32:{const t=Oo();return t.transformWith(r).scale(.25),t.element.classList.add("end"),C`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				${t}
			</g>`}case 48:return C`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
			</g>`;case 40:return C`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;case 36:return C`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 56:return C`<g>
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
			</g>`;case 44:return C`<g>
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
			</g>`;case 52:return C`<g>
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
			</g>`;case 42:return C`<g>
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
			</g>`;case 60:return C`<g>
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
			</g>`;case 46:return C`<g>
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
			</g>`;case 54:return C`<g>
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
			</g>`;case 62:return C`<g>
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
			</g>`;case 63:return C`<g>
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
			</g>`;default:throw new Error(`unhandled connection ${e.toString(2)}`)}},"EdgeElement"),Dd=i((r,e)=>{const t=Md(r,e);return gr({element:t})},"Edge"),Ne={},Fd=i((r,e,t,n)=>{if(!Ne[n]){const c=Dd(r,n);Ne[n]=C`<g class="cell">${Oo()}${c}</g>`}const o=Ne[n].cloneNode(!0);return o.classList.add(`rotate${t}`),gr({element:o,orientation:t,connection:n,valid:!1,coordinate:e,rotateClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateTo${t}`);let c=t;return c+=60,c%=360,Ld(c),t=c,o.classList.add(`rotate${t}`),o.classList.add(`rotateTo${t}`),t}})},"Cell");var So={exports:{}};(function(r){(function(e,t,n){function o(a){var s=this,v=l();s.next=function(){var f=2091639*s.s0+s.c*23283064365386963e-26;return s.s0=s.s1,s.s1=s.s2,s.s2=f-(s.c=f|0)},s.c=1,s.s0=v(" "),s.s1=v(" "),s.s2=v(" "),s.s0-=v(a),s.s0<0&&(s.s0+=1),s.s1-=v(a),s.s1<0&&(s.s1+=1),s.s2-=v(a),s.s2<0&&(s.s2+=1),v=null}i(o,"Alea");function c(a,s){return s.c=a.c,s.s0=a.s0,s.s1=a.s1,s.s2=a.s2,s}i(c,"copy");function u(a,s){var v=new o(a),f=s&&s.state,p=v.next;return p.int32=function(){return v.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,f&&(typeof f=="object"&&c(f,v),p.state=function(){return c(v,{})}),p}i(u,"impl");function l(){var a=4022871197,s=i(function(v){v=String(v);for(var f=0;f<v.length;f++){a+=v.charCodeAt(f);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26},"mash");return s}i(l,"Mash"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.alea=u})(H,r,!1)})(So);var wo={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var f=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^f^f>>>8},l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor128=u})(H,r,!1)})(wo);var Io={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(f^f<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,v==s.length&&(a.d=a.x<<10^a.x>>>4),a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a.v=l.v,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorwow=u})(H,r,!1)})(Io);var To={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.x,f=a.i,p,g;return p=v[f],p^=p>>>7,g=p^p<<24,p=v[f+1&7],g^=p^p>>>10,p=v[f+3&7],g^=p^p>>>3,p=v[f+4&7],g^=p^p<<7,p=v[f+7&7],p=p^p<<13,g^=p^p<<9,v[f]=g,a.i=f+1&7,g};function s(v,f){var p,g=[];if(f===(f|0))g[0]=f;else for(f=""+f,p=0;p<f.length;++p)g[p&7]=g[p&7]<<15^f.charCodeAt(p)+g[p+1&7]<<13;for(;g.length<8;)g.push(0);for(p=0;p<8&&g[p]===0;++p);for(p==8?g[7]=-1:g[p],v.x=g,v.i=0,p=256;p>0;--p)v.next()}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.x=l.x.slice(),a.i=l.i,a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.x&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorshift7=u})(H,r,!1)})(To);var Ro={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.w,f=a.X,p=a.i,g,d;return a.w=v=v+1640531527|0,d=f[p+34&127],g=f[p=p+1&127],d^=d<<13,g^=g<<17,d^=d>>>15,g^=g>>>12,d=f[p]=d^g,a.i=p,d+(v^v>>>16)|0};function s(v,f){var p,g,d,$,x,w=[],b=128;for(f===(f|0)?(g=f,f=null):(f=f+"\0",g=0,b=Math.max(b,f.length)),d=0,$=-32;$<b;++$)f&&(g^=f.charCodeAt(($+32)%f.length)),$===0&&(x=g),g^=g<<10,g^=g>>>15,g^=g<<4,g^=g>>>13,$>=0&&(x=x+1640531527|0,p=w[$&127]^=g+x,d=p==0?d+1:0);for(d>=128&&(w[(f&&f.length||0)&127]=-1),d=127,$=4*128;$>0;--$)g=w[d+34&127],p=w[d=d+1&127],g^=g<<13,p^=p<<17,g^=g>>>15,p^=p>>>12,w[d]=g^p;v.w=x,v.X=w,v.i=d}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.i=l.i,a.w=l.w,a.X=l.X.slice(),a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.X&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor4096=u})(H,r,!1)})(Ro);var Po={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.b,p=a.c,g=a.d,d=a.a;return f=f<<25^f>>>7^p,p=p-g|0,g=g<<24^g>>>8^d,d=d-f|0,a.b=f=f<<20^f>>>12^p,a.c=p=p-g|0,a.d=g<<16^p>>>16^d,a.a=d-f|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,l===Math.floor(l)?(a.a=l/4294967296|0,a.b=l|0):s+=l;for(var v=0;v<s.length+20;v++)a.b^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.a=l.a,a.b=l.b,a.c=l.c,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.tychei=u})(H,r,!1)})(Po);var _o={exports:{}};const Bd={},Gd=Object.freeze(Object.defineProperty({__proto__:null,default:Bd},Symbol.toStringTag,{value:"Module"})),Ud=Ao(Gd);(function(r){(function(e,t,n){var o=256,c=6,u=52,l="random",a=n.pow(o,c),s=n.pow(2,u),v=s*2,f=o-1,p;function g(h,m,R){var I=[];m=m==!0?{entropy:!0}:m||{};var S=w(x(m.entropy?[h,B(t)]:h==null?b():h,3),I),M=new d(I),G=i(function(){for(var D=M.g(c),X=a,k=0;D<s;)D=(D+k)*o,X*=o,k=M.g(1);for(;D>=v;)D/=2,X/=2,k>>>=1;return(D+k)/X},"prng");return G.int32=function(){return M.g(4)|0},G.quick=function(){return M.g(4)/4294967296},G.double=G,w(B(M.S),t),(m.pass||R||function(D,X,k,Z){return Z&&(Z.S&&$(Z,M),D.state=function(){return $(M,{})}),k?(n[l]=D,X):D})(G,S,"global"in m?m.global:this==n,m.state)}i(g,"seedrandom");function d(h){var m,R=h.length,I=this,S=0,M=I.i=I.j=0,G=I.S=[];for(R||(h=[R++]);S<o;)G[S]=S++;for(S=0;S<o;S++)G[S]=G[M=f&M+h[S%R]+(m=G[S])],G[M]=m;(I.g=function(D){for(var X,k=0,Z=I.i,_r=I.j,yr=I.S;D--;)X=yr[Z=f&Z+1],k=k*o+yr[f&(yr[Z]=yr[_r=f&_r+X])+(yr[_r]=X)];return I.i=Z,I.j=_r,k})(o)}i(d,"ARC4");function $(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}i($,"copy");function x(h,m){var R=[],I=typeof h,S;if(m&&I=="object")for(S in h)try{R.push(x(h[S],m-1))}catch{}return R.length?R:I=="string"?h:h+"\0"}i(x,"flatten");function w(h,m){for(var R=h+"",I,S=0;S<R.length;)m[f&S]=f&(I^=m[f&S]*19)+R.charCodeAt(S++);return B(m)}i(w,"mixkey");function b(){try{var h;return p&&(h=p.randomBytes)?h=h(o):(h=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(h)),B(h)}catch{var m=e.navigator,R=m&&m.plugins;return[+new Date,e,R,e.screen,B(t)]}}i(b,"autoseed");function B(h){return String.fromCharCode.apply(0,h)}if(i(B,"tostring"),w(n.random(),t),r.exports){r.exports=g;try{p=Ud}catch{}}else n["seed"+l]=g})(typeof self<"u"?self:H,[],Math)})(_o);var Kd=So.exports,kd=wo.exports,zd=Io.exports,Wd=To.exports,qd=Ro.exports,Xd=Po.exports,dr=_o.exports;dr.alea=Kd;dr.xor128=kd;dr.xorwow=zd;dr.xorshift7=Wd;dr.xor4096=qd;dr.tychei=Xd;const Hd=["prims","wilsons"],Yd=i(r=>Hd.includes(r),"validMode"),Vd=i(()=>{const r=new Worker("/hexpanse/assets/worker.13cefc78.js",{type:"module"}),e=i(n=>{r.postMessage(n)},"message"),t={restore(n){e({type:"restore",config:n})},updateCell(n,o){e({type:"update cell",coordinate:n,orientation:o})},onRestored(){throw new Error("missing onRestored")}};return r.onmessage=({data:n})=>{switch(n.type){case"restored":return t.onRestored(n.config,n.state)}},t},"SaveWorker"),et=Vd(),At=1e3,tt=At*y,mr=Nd([At,tt]),ta={};let Le=Date.now();et.onRestored=({size:r,mode:e},t)=>{let n=0;for(const[v,{coordinate:f,orientation:p,connection:g}]of Object.entries(t))ta[v]=Fd(mr.element,f,p,g),[56,44,52,42].includes(g)&&(n+=1),[60,46,54].includes(g)&&(n+=2),[62].includes(g)&&(n+=3),[63].includes(g)&&(n+=4);const o=U`<p>Generated ${Math.ceil(Date.now()-Le)}ms</p>`;Le=Date.now();const c=jd(mr.element,ta,(v,f)=>{if(f.buttons===1){const p=v.rotateClockwise();et.updateCell(v.coordinate,p)}});c.transformWith(mr.element).translate(At/2,tt/2).scale(tt/(r*3+2)),c.appendTo(mr.element),document.body.append(U`<main>${mr}</main>`);const u=U`<p>Rendered ${Math.ceil(Date.now()-Le)}ms</p>`,l=U`<button>New game</button>`;l.onclick=v=>{v.preventDefault();const f=document.getElementById("new-game-form"),{size:p,mode:g}=Object.fromEntries(new FormData(f).entries()),d=`./?${new URLSearchParams({size:p,mode:g}).toString()}`;console.log(d),window.location.href=d},document.body.append(U`<h2>Game settings</h2>`,U`<form id="new-game-form">
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
		</p>`);const a=document.querySelector(`#new-game-form input[name="size"][value="${r}"]`);a.checked=!0;const s=document.querySelector(`#new-game-form input[name="mode"][value="${e}"]`);s.checked=!0};const Jd=i(()=>{var c,u;window.location.hash===""&&history.replaceState(void 0,"","#");const r=new URLSearchParams(window.location.search),e=(c=r.get("seed"))!=null?c:Rd(),t=Number.parseInt((u=r.get("size"))!=null?u:"20"),n=r.get("mode"),o={seed:e,size:t,mode:Yd(n)?n:"wilsons"};return history.replaceState(void 0,"",`?${new URLSearchParams({...o,size:String(t)}).toString()}`),o},"loadConfig"),Zd=Jd();et.restore(Zd);
