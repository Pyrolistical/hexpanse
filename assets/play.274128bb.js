var jo=Object.defineProperty;var i=(r,e)=>jo(r,"name",{value:e,configurable:!0});i(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}i(n,"processPreload")},"polyfill")();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(r){var e=r.default;if(typeof e=="function"){var t=i(function(){return e.apply(this,arguments)},"a");t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),t}i(No,"getAugmentedNamespace");var Ar=i(function(r){return r&&r.Math==Math&&r},"check"),A=Ar(typeof globalThis=="object"&&globalThis)||Ar(typeof window=="object"&&window)||Ar(typeof self=="object"&&self)||Ar(typeof H=="object"&&H)||function(){return this}()||Function("return this")(),at={},E=i(function(r){try{return!!r()}catch{return!0}},"fails$p"),Lo=E,W=!Lo(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Mo=E,ee=!Mo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Do=ee,jr=Function.prototype.call,L=Do?jr.bind(jr):function(){return jr.apply(jr,arguments)},aa={},oa={}.propertyIsEnumerable,ia=Object.getOwnPropertyDescriptor,Fo=ia&&!oa.call({1:2},1);aa.f=Fo?i(function(e){var t=ia(this,e);return!!t&&t.enumerable},"propertyIsEnumerable"):oa;var Sr=i(function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},"createPropertyDescriptor$5"),ca=ee,sa=Function.prototype,Go=sa.bind,Fe=sa.call,Bo=ca&&Go.bind(Fe,Fe),O=ca?function(r){return r&&Bo(r)}:function(r){return r&&function(){return Fe.apply(r,arguments)}},la=O,Uo=la({}.toString),Ko=la("".slice),wr=i(function(r){return Ko(Uo(r),8,-1)},"classofRaw$1"),ko=O,zo=E,Wo=wr,se=Object,qo=ko("".split),ua=zo(function(){return!se("z").propertyIsEnumerable(0)})?function(r){return Wo(r)=="String"?qo(r,""):se(r)}:se,Xo=TypeError,Q=i(function(r){if(r==null)throw Xo("Can't call method on "+r);return r},"requireObjectCoercible$8"),Ho=ua,Yo=Q,te=i(function(r){return Ho(Yo(r))},"toIndexedObject$4"),T=i(function(r){return typeof r=="function"},"isCallable$k"),Vo=T,Y=i(function(r){return typeof r=="object"?r!==null:Vo(r)},"isObject$9"),le=A,Jo=T,Zo=i(function(r){return Jo(r)?r:void 0},"aFunction"),V=i(function(r,e){return arguments.length<2?Zo(le[r]):le[r]&&le[r][e]},"getBuiltIn$9"),Qo=O,Ir=Qo({}.isPrototypeOf),ri=V,ei=ri("navigator","userAgent")||"",va=A,ue=ei,Nt=va.process,Lt=va.Deno,Mt=Nt&&Nt.versions||Lt&&Lt.version,Dt=Mt&&Mt.v8,K,zr;Dt&&(K=Dt.split("."),zr=K[0]>0&&K[0]<4?1:+(K[0]+K[1]));!zr&&ue&&(K=ue.match(/Edge\/(\d+)/),(!K||K[1]>=74)&&(K=ue.match(/Chrome\/(\d+)/),K&&(zr=+K[1])));var ti=zr,Ft=ti,ni=E,fa=!!Object.getOwnPropertySymbols&&!ni(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Ft&&Ft<41}),ai=fa,pa=ai&&!Symbol.sham&&typeof Symbol.iterator=="symbol",oi=V,ii=T,ci=Ir,si=pa,li=Object,ga=si?function(r){return typeof r=="symbol"}:function(r){var e=oi("Symbol");return ii(e)&&ci(e.prototype,li(r))},ui=String,Tr=i(function(r){try{return ui(r)}catch{return"Object"}},"tryToString$5"),vi=T,fi=Tr,pi=TypeError,Rr=i(function(r){if(vi(r))return r;throw pi(fi(r)+" is not a function")},"aCallable$5"),gi=Rr,fr=i(function(r,e){var t=r[e];return t==null?void 0:gi(t)},"getMethod$6"),ve=L,fe=T,pe=Y,di=TypeError,yi=i(function(r,e){var t,n;if(e==="string"&&fe(t=r.toString)&&!pe(n=ve(t,r))||fe(t=r.valueOf)&&!pe(n=ve(t,r))||e!=="string"&&fe(t=r.toString)&&!pe(n=ve(t,r)))return n;throw di("Can't convert object to primitive value")},"ordinaryToPrimitive$1"),ne={exports:{}},$i=!1,Gt=A,hi=Object.defineProperty,ot=i(function(r,e){try{hi(Gt,r,{value:e,configurable:!0,writable:!0})}catch{Gt[r]=e}return e},"defineGlobalProperty$3"),mi=A,xi=ot,Bt="__core-js_shared__",bi=mi[Bt]||xi(Bt,{}),it=bi,Ut=it;(ne.exports=function(r,e){return Ut[r]||(Ut[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Ei=Q,Oi=Object,ir=i(function(r){return Oi(Ei(r))},"toObject$7"),Si=O,wi=ir,Ii=Si({}.hasOwnProperty),F=Object.hasOwn||i(function(e,t){return Ii(wi(e),t)},"hasOwn"),Ti=O,Ri=0,Pi=Math.random(),Ci=Ti(1 .toString),da=i(function(r){return"Symbol("+(r===void 0?"":r)+")_"+Ci(++Ri+Pi,36)},"uid$2"),_i=A,Ai=ne.exports,Kt=F,ji=da,kt=fa,ya=pa,sr=Ai("wks"),ar=_i.Symbol,zt=ar&&ar.for,Ni=ya?ar:ar&&ar.withoutSetter||ji,j=i(function(r){if(!Kt(sr,r)||!(kt||typeof sr[r]=="string")){var e="Symbol."+r;kt&&Kt(ar,r)?sr[r]=ar[r]:ya&&zt?sr[r]=zt(e):sr[r]=Ni(e)}return sr[r]},"wellKnownSymbol$f"),Li=L,Wt=Y,qt=ga,Mi=fr,Di=yi,Fi=j,Gi=TypeError,Bi=Fi("toPrimitive"),Ui=i(function(r,e){if(!Wt(r)||qt(r))return r;var t=Mi(r,Bi),n;if(t){if(e===void 0&&(e="default"),n=Li(t,r,e),!Wt(n)||qt(n))return n;throw Gi("Can't convert object to primitive value")}return e===void 0&&(e="number"),Di(r,e)},"toPrimitive$1"),Ki=Ui,ki=ga,$a=i(function(r){var e=Ki(r,"string");return ki(e)?e:e+""},"toPropertyKey$2"),zi=A,Xt=Y,Ge=zi.document,Wi=Xt(Ge)&&Xt(Ge.createElement),ha=i(function(r){return Wi?Ge.createElement(r):{}},"documentCreateElement$1"),qi=W,Xi=E,Hi=ha,ma=!qi&&!Xi(function(){return Object.defineProperty(Hi("div"),"a",{get:function(){return 7}}).a!=7}),Yi=W,Vi=L,Ji=aa,Zi=Sr,Qi=te,rc=$a,ec=F,tc=ma,Ht=Object.getOwnPropertyDescriptor;at.f=Yi?Ht:i(function(e,t){if(e=Qi(e),t=rc(t),tc)try{return Ht(e,t)}catch{}if(ec(e,t))return Zi(!Vi(Ji.f,e,t),e[t])},"getOwnPropertyDescriptor");var J={},nc=W,ac=E,xa=nc&&ac(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),oc=Y,ic=String,cc=TypeError,N=i(function(r){if(oc(r))return r;throw cc(ic(r)+" is not an object")},"anObject$e"),sc=W,lc=ma,uc=xa,Nr=N,Yt=$a,vc=TypeError,ge=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,de="enumerable",ye="configurable",$e="writable";J.f=sc?uc?i(function(e,t,n){if(Nr(e),t=Yt(t),Nr(n),typeof e=="function"&&t==="prototype"&&"value"in n&&$e in n&&!n[$e]){var o=fc(e,t);o&&o[$e]&&(e[t]=n.value,n={configurable:ye in n?n[ye]:o[ye],enumerable:de in n?n[de]:o[de],writable:!1})}return ge(e,t,n)},"defineProperty"):ge:i(function(e,t,n){if(Nr(e),t=Yt(t),Nr(n),lc)try{return ge(e,t,n)}catch{}if("get"in n||"set"in n)throw vc("Accessors not supported");return"value"in n&&(e[t]=n.value),e},"defineProperty");var pc=W,gc=J,dc=Sr,pr=pc?function(r,e,t){return gc.f(r,e,dc(1,t))}:function(r,e,t){return r[e]=t,r},ct={exports:{}},Be=W,yc=F,ba=Function.prototype,$c=Be&&Object.getOwnPropertyDescriptor,st=yc(ba,"name"),hc=st&&i(function(){},"something").name==="something",mc=st&&(!Be||Be&&$c(ba,"name").configurable),xc={EXISTS:st,PROPER:hc,CONFIGURABLE:mc},bc=O,Ec=T,Ue=it,Oc=bc(Function.toString);Ec(Ue.inspectSource)||(Ue.inspectSource=function(r){return Oc(r)});var lt=Ue.inspectSource,Sc=A,wc=T,Ic=lt,Vt=Sc.WeakMap,Tc=wc(Vt)&&/native code/.test(Ic(Vt)),Rc=ne.exports,Pc=da,Jt=Rc("keys"),ut=i(function(r){return Jt[r]||(Jt[r]=Pc(r))},"sharedKey$3"),vt={},Cc=Tc,Ea=A,he=O,_c=Y,Ac=pr,me=F,xe=it,jc=ut,Nc=vt,Zt="Object already initialized",Ke=Ea.TypeError,Lc=Ea.WeakMap,Wr,xr,qr,Mc=i(function(r){return qr(r)?xr(r):Wr(r,{})},"enforce"),Dc=i(function(r){return function(e){var t;if(!_c(e)||(t=xr(e)).type!==r)throw Ke("Incompatible receiver, "+r+" required");return t}},"getterFor");if(Cc||xe.state){var tr=xe.state||(xe.state=new Lc),Fc=he(tr.get),Qt=he(tr.has),Gc=he(tr.set);Wr=i(function(r,e){if(Qt(tr,r))throw new Ke(Zt);return e.facade=r,Gc(tr,r,e),e},"set"),xr=i(function(r){return Fc(tr,r)||{}},"get"),qr=i(function(r){return Qt(tr,r)},"has")}else{var lr=jc("state");Nc[lr]=!0,Wr=i(function(r,e){if(me(r,lr))throw new Ke(Zt);return e.facade=r,Ac(r,lr,e),e},"set"),xr=i(function(r){return me(r,lr)?r[lr]:{}},"get"),qr=i(function(r){return me(r,lr)},"has")}var ft={set:Wr,get:xr,has:qr,enforce:Mc,getterFor:Dc},Bc=E,Uc=T,Lr=F,ke=W,Kc=xc.CONFIGURABLE,kc=lt,Oa=ft,zc=Oa.enforce,Wc=Oa.get,Gr=Object.defineProperty,qc=ke&&!Bc(function(){return Gr(function(){},"length",{value:8}).length!==8}),Xc=String(String).split("String"),Hc=ct.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Lr(r,"name")||Kc&&r.name!==e)&&(ke?Gr(r,"name",{value:e,configurable:!0}):r.name=e),qc&&t&&Lr(t,"arity")&&r.length!==t.arity&&Gr(r,"length",{value:t.arity});try{t&&Lr(t,"constructor")&&t.constructor?ke&&Gr(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=zc(r);return Lr(n,"source")||(n.source=Xc.join(typeof e=="string"?e:"")),r};Function.prototype.toString=Hc(i(function(){return Uc(this)&&Wc(this).source||kc(this)},"toString"),"toString");var Yc=T,Vc=J,Jc=ct.exports,Zc=ot,Pr=i(function(r,e,t,n){n||(n={});var o=n.enumerable,c=n.name!==void 0?n.name:e;if(Yc(t)&&Jc(t,c,n),n.global)o?r[e]=t:Zc(e,t);else{try{n.unsafe?r[e]&&(o=!0):delete r[e]}catch{}o?r[e]=t:Vc.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},"defineBuiltIn$5"),Sa={},Qc=Math.ceil,rs=Math.floor,es=Math.trunc||i(function(e){var t=+e;return(t>0?rs:Qc)(t)},"trunc"),ts=es,rr=i(function(r){var e=+r;return e!==e||e===0?0:ts(e)},"toIntegerOrInfinity$8"),ns=rr,as=Math.max,os=Math.min,is=i(function(r,e){var t=ns(r);return t<0?as(t+e,0):os(t,e)},"toAbsoluteIndex$1"),cs=rr,ss=Math.min,pt=i(function(r){return r>0?ss(cs(r),9007199254740991):0},"toLength$3"),ls=pt,gr=i(function(r){return ls(r.length)},"lengthOfArrayLike$6"),us=te,vs=is,fs=gr,rn=i(function(r){return function(e,t,n){var o=us(e),c=fs(o),u=vs(n,c),l;if(r&&t!=t){for(;c>u;)if(l=o[u++],l!=l)return!0}else for(;c>u;u++)if((r||u in o)&&o[u]===t)return r||u||0;return!r&&-1}},"createMethod$2"),wa={includes:rn(!0),indexOf:rn(!1)},ps=O,be=F,gs=te,ds=wa.indexOf,ys=vt,en=ps([].push),Ia=i(function(r,e){var t=gs(r),n=0,o=[],c;for(c in t)!be(ys,c)&&be(t,c)&&en(o,c);for(;e.length>n;)be(t,c=e[n++])&&(~ds(o,c)||en(o,c));return o},"objectKeysInternal"),gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],$s=Ia,hs=gt,ms=hs.concat("length","prototype");Sa.f=Object.getOwnPropertyNames||i(function(e){return $s(e,ms)},"getOwnPropertyNames");var Ta={};Ta.f=Object.getOwnPropertySymbols;var xs=V,bs=O,Es=Sa,Os=Ta,Ss=N,ws=bs([].concat),Is=xs("Reflect","ownKeys")||i(function(e){var t=Es.f(Ss(e)),n=Os.f;return n?ws(t,n(e)):t},"ownKeys"),tn=F,Ts=Is,Rs=at,Ps=J,dt=i(function(r,e,t){for(var n=Ts(e),o=Ps.f,c=Rs.f,u=0;u<n.length;u++){var l=n[u];!tn(r,l)&&!(t&&tn(t,l))&&o(r,l,c(e,l))}},"copyConstructorProperties$3"),Cs=E,_s=T,As=/#|\.prototype\./,Cr=i(function(r,e){var t=Ns[js(r)];return t==Ms?!0:t==Ls?!1:_s(e)?Cs(e):!!e},"isForced$1"),js=Cr.normalize=function(r){return String(r).replace(As,".").toLowerCase()},Ns=Cr.data={},Ls=Cr.NATIVE="N",Ms=Cr.POLYFILL="P",Ds=Cr,Ee=A,Fs=at.f,Gs=pr,Bs=Pr,Us=ot,Ks=dt,ks=Ds,P=i(function(r,e){var t=r.target,n=r.global,o=r.stat,c,u,l,a,s,v;if(n?u=Ee:o?u=Ee[t]||Us(t,{}):u=(Ee[t]||{}).prototype,u)for(l in e){if(s=e[l],r.dontCallGetSet?(v=Fs(u,l),a=v&&v.value):a=u[l],c=ks(n?l:t+(o?".":"#")+l,r.forced),!c&&a!==void 0){if(typeof s==typeof a)continue;Ks(s,a)}(r.sham||a&&a.sham)&&Gs(s,"sham",!0),Bs(u,l,s,r)}},"_export"),zs=E,Ws=!zs(function(){function r(){}return i(r,"F"),r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),qs=F,Xs=T,Hs=ir,Ys=ut,Vs=Ws,nn=Ys("IE_PROTO"),ze=Object,Js=ze.prototype,Ra=Vs?ze.getPrototypeOf:function(r){var e=Hs(r);if(qs(e,nn))return e[nn];var t=e.constructor;return Xs(t)&&e instanceof t?t.prototype:e instanceof ze?Js:null},Zs=T,Qs=String,rl=TypeError,el=i(function(r){if(typeof r=="object"||Zs(r))return r;throw rl("Can't set "+Qs(r)+" as a prototype")},"aPossiblePrototype$1"),tl=O,nl=N,al=el,yt=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=tl(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return i(function(o,c){return nl(o),al(c),r?t(o,c):o.__proto__=c,o},"setPrototypeOf")}():void 0),Pa={},ol=Ia,il=gt,cl=Object.keys||i(function(e){return ol(e,il)},"keys"),sl=W,ll=xa,ul=J,vl=N,fl=te,pl=cl;Pa.f=sl&&!ll?Object.defineProperties:i(function(e,t){vl(e);for(var n=fl(t),o=pl(t),c=o.length,u=0,l;c>u;)ul.f(e,l=o[u++],n[l]);return e},"defineProperties");var gl=V,dl=gl("document","documentElement"),yl=N,$l=Pa,an=gt,hl=vt,ml=dl,xl=ha,bl=ut,on=">",cn="<",We="prototype",qe="script",Ca=bl("IE_PROTO"),Oe=i(function(){},"EmptyConstructor"),_a=i(function(r){return cn+qe+on+r+cn+"/"+qe+on},"scriptTag"),sn=i(function(r){r.write(_a("")),r.close();var e=r.parentWindow.Object;return r=null,e},"NullProtoObjectViaActiveX"),El=i(function(){var r=xl("iframe"),e="java"+qe+":",t;return r.style.display="none",ml.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(_a("document.F=Object")),t.close(),t.F},"NullProtoObjectViaIFrame"),Mr,Br=i(function(){try{Mr=new ActiveXObject("htmlfile")}catch{}Br=typeof document<"u"?document.domain&&Mr?sn(Mr):El():sn(Mr);for(var r=an.length;r--;)delete Br[We][an[r]];return Br()},"NullProtoObject");hl[Ca]=!0;var ae=Object.create||i(function(e,t){var n;return e!==null?(Oe[We]=yl(e),n=new Oe,Oe[We]=null,n[Ca]=e):n=Br(),t===void 0?n:$l.f(n,t)},"create"),Ol=O,Aa=Error,Sl=Ol("".replace),wl=function(r){return String(Aa(r).stack)}("zxcasd"),ja=/\n\s*at [^:]*:[^\n]*/,Il=ja.test(wl),Na=i(function(r,e){if(Il&&typeof r=="string"&&!Aa.prepareStackTrace)for(;e--;)r=Sl(r,ja,"");return r},"clearErrorStack$2"),Tl=Y,Rl=pr,La=i(function(r,e){Tl(e)&&"cause"in e&&Rl(r,"cause",e.cause)},"installErrorCause$2"),ln=O,Pl=Rr,Cl=ee,_l=ln(ln.bind),Ma=i(function(r,e){return Pl(r),e===void 0?r:Cl?_l(r,e):function(){return r.apply(e,arguments)}},"functionBindContext"),$t={},Al=j,jl=$t,Nl=Al("iterator"),Ll=Array.prototype,Ml=i(function(r){return r!==void 0&&(jl.Array===r||Ll[Nl]===r)},"isArrayIteratorMethod$1"),Dl=j,Fl=Dl("toStringTag"),Da={};Da[Fl]="z";var Gl=String(Da)==="[object z]",Bl=Gl,Ul=T,Ur=wr,Kl=j,kl=Kl("toStringTag"),zl=Object,Wl=Ur(function(){return arguments}())=="Arguments",ql=i(function(r,e){try{return r[e]}catch{}},"tryGet"),ht=Bl?Ur:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=ql(e=zl(r),kl))=="string"?t:Wl?Ur(e):(n=Ur(e))=="Object"&&Ul(e.callee)?"Arguments":n},Xl=ht,un=fr,Hl=$t,Yl=j,Vl=Yl("iterator"),Fa=i(function(r){if(r!=null)return un(r,Vl)||un(r,"@@iterator")||Hl[Xl(r)]},"getIteratorMethod$2"),Jl=L,Zl=Rr,Ql=N,ru=Tr,eu=Fa,tu=TypeError,nu=i(function(r,e){var t=arguments.length<2?eu(r):e;if(Zl(t))return Ql(Jl(t,r));throw tu(ru(r)+" is not iterable")},"getIterator$1"),au=L,vn=N,ou=fr,iu=i(function(r,e,t){var n,o;vn(r);try{if(n=ou(r,"return"),!n){if(e==="throw")throw t;return t}n=au(n,r)}catch(c){o=!0,n=c}if(e==="throw")throw t;if(o)throw n;return vn(n),t},"iteratorClose$1"),cu=Ma,su=L,lu=N,uu=Tr,vu=Ml,fu=gr,fn=Ir,pu=nu,gu=Fa,pn=iu,du=TypeError,Kr=i(function(r,e){this.stopped=r,this.result=e},"Result"),gn=Kr.prototype,Ga=i(function(r,e,t){var n=t&&t.that,o=!!(t&&t.AS_ENTRIES),c=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),a=cu(e,n),s,v,f,p,g,d,$,b=i(function(x){return s&&pn(s,"normal",x),new Kr(!0,x)},"stop"),w=i(function(x){return o?(lu(x),l?a(x[0],x[1],b):a(x[0],x[1])):l?a(x,b):a(x)},"callFn");if(c)s=r.iterator;else if(u)s=r;else{if(v=gu(r),!v)throw du(uu(r)+" is not iterable");if(vu(v)){for(f=0,p=fu(r);p>f;f++)if(g=w(r[f]),g&&fn(gn,g))return g;return new Kr(!1)}s=pu(r,v)}for(d=c?r.next:s.next;!($=su(d,s)).done;){try{g=w($.value)}catch(x){pn(s,"throw",x)}if(typeof g=="object"&&g&&fn(gn,g))return g}return new Kr(!1)},"iterate$2"),yu=ht,$u=String,er=i(function(r){if(yu(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return $u(r)},"toString$8"),hu=er,Ba=i(function(r,e){return r===void 0?arguments.length<2?"":e:hu(r)},"normalizeStringArgument$2"),mu=E,xu=Sr,Ua=!mu(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",xu(1,7)),r.stack!==7):!0}),bu=P,Eu=Ir,Ou=Ra,Xr=yt,Su=dt,Ka=ae,Dr=pr,Se=Sr,wu=Na,Iu=La,Tu=Ga,Ru=Ba,Pu=j,Cu=Ua,_u=Pu("toStringTag"),Hr=Error,Au=[].push,br=i(function(e,t){var n=arguments.length>2?arguments[2]:void 0,o=Eu(we,this),c;Xr?c=Xr(new Hr,o?Ou(this):we):(c=o?this:Ka(we),Dr(c,_u,"Error")),t!==void 0&&Dr(c,"message",Ru(t)),Cu&&Dr(c,"stack",wu(c.stack,1)),Iu(c,n);var u=[];return Tu(e,Au,{that:u}),Dr(c,"errors",u),c},"AggregateError");Xr?Xr(br,Hr):Su(br,Hr,{name:!0});var we=br.prototype=Ka(Hr.prototype,{constructor:Se(1,br),message:Se(1,""),name:Se(1,"AggregateError")});bu({global:!0,constructor:!0,arity:2},{AggregateError:br});var ju=ee,ka=Function.prototype,dn=ka.apply,yn=ka.call,mt=typeof Reflect=="object"&&Reflect.apply||(ju?yn.bind(dn):function(){return yn.apply(dn,arguments)}),Nu=J.f,Lu=i(function(r,e,t){t in r||Nu(r,t,{configurable:!0,get:function(){return e[t]},set:function(n){e[t]=n}})},"proxyAccessor$1"),Mu=T,Du=Y,$n=yt,Fu=i(function(r,e,t){var n,o;return $n&&Mu(n=e.constructor)&&n!==t&&Du(o=n.prototype)&&o!==t.prototype&&$n(r,o),r},"inheritIfRequired$1"),hn=V,Gu=F,Ie=pr,Bu=Ir,mn=yt,xn=dt,bn=Lu,Uu=Fu,Ku=Ba,ku=La,zu=Na,Wu=Ua,qu=W,za=i(function(r,e,t,n){var o="stackTraceLimit",c=n?2:1,u=r.split("."),l=u[u.length-1],a=hn.apply(null,u);if(!!a){var s=a.prototype;if(Gu(s,"cause")&&delete s.cause,!t)return a;var v=hn("Error"),f=e(function(p,g){var d=Ku(n?g:p,void 0),$=n?new a(p):new a;return d!==void 0&&Ie($,"message",d),Wu&&Ie($,"stack",zu($.stack,2)),this&&Bu(s,this)&&Uu($,this,f),arguments.length>c&&ku($,arguments[c]),$});f.prototype=s,l!=="Error"?mn?mn(f,v):xn(f,v,{name:!0}):qu&&o in a&&(bn(f,a,o),bn(f,a,"prepareStackTrace")),xn(f,a);try{s.name!==l&&Ie(s,"name",l),s.constructor=f}catch{}return f}},"wrapErrorConstructorWithCause$2"),Xu=P,Hu=V,Yu=mt,En=E,Vu=za,xt="AggregateError",On=Hu(xt),Sn=!En(function(){return On([1]).errors[0]!==1})&&En(function(){return On([1],xt,{cause:7}).cause!==7});Xu({global:!0,constructor:!0,arity:2,forced:Sn},{AggregateError:Vu(xt,function(r){return i(function(t,n){return Yu(r,this,arguments)},"AggregateError")},Sn,!0)});var Ju=j,Zu=ae,Qu=J.f,Xe=Ju("unscopables"),He=Array.prototype;He[Xe]==null&&Qu(He,Xe,{configurable:!0,value:Zu(null)});var oe=i(function(r){He[Xe][r]=!0},"addToUnscopables$4"),rv=P,ev=ir,tv=gr,nv=rr,av=oe;rv({target:"Array",proto:!0},{at:i(function(e){var t=ev(this),n=tv(t),o=nv(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:t[c]},"at")});av("at");var ov=Ma,iv=ua,cv=ir,sv=gr,wn=i(function(r){var e=r==1;return function(t,n,o){for(var c=cv(t),u=iv(c),l=ov(n,o),a=sv(u),s,v;a-- >0;)if(s=u[a],v=l(s,a,c),v)switch(r){case 0:return s;case 1:return a}return e?-1:void 0}},"createMethod$1"),Wa={findLast:wn(0),findLastIndex:wn(1)},lv=P,uv=Wa.findLast,vv=oe;lv({target:"Array",proto:!0},{findLast:i(function(e){return uv(this,e,arguments.length>1?arguments[1]:void 0)},"findLast")});vv("findLast");var fv=P,pv=Wa.findLastIndex,gv=oe;fv({target:"Array",proto:!0},{findLastIndex:i(function(e){return pv(this,e,arguments.length>1?arguments[1]:void 0)},"findLastIndex")});gv("findLastIndex");var dv=P,yv=wa.includes,$v=E,hv=oe,mv=$v(function(){return!Array(1).includes()});dv({target:"Array",proto:!0,forced:mv},{includes:i(function(e){return yv(this,e,arguments.length>1?arguments[1]:void 0)},"includes")});hv("includes");var xv=TypeError,bv=9007199254740991,qa=i(function(r){if(r>bv)throw xv("Maximum allowed index exceeded");return r},"doesNotExceedSafeInteger$2"),Ev=P,Ov=ir,Sv=gr,wv=qa,Iv=E,Tv=Iv(function(){return[].push.call({length:4294967296},1)!==4294967297}),Rv=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}}();Ev({target:"Array",proto:!0,arity:1,forced:Tv||Rv},{push:i(function(e){var t=Ov(this),n=Sv(t),o=arguments.length;wv(n+o);for(var c=0;c<o;c++)t[n]=arguments[c],n++;return t.length=n,n},"push")});var In=Tr,Pv=TypeError,Cv=i(function(r,e){if(!delete r[e])throw Pv("Cannot delete property "+In(e)+" of "+In(r))},"deletePropertyOrThrow$1"),_v=P,Av=ir,jv=gr,Nv=Cv,Lv=qa,Mv=[].unshift(0)!==1,Dv=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}}();_v({target:"Array",proto:!0,arity:1,forced:Mv||Dv},{unshift:i(function(e){var t=Av(this),n=jv(t),o=arguments.length;if(o){Lv(n+o);for(var c=n;c--;){var u=c+o;c in t?t[u]=t[c]:Nv(t,u)}for(var l=0;l<o;l++)t[l]=arguments[l]}return t.length=n+o},"unshift")});var Xa=P,Fv=A,q=mt,Ha=za,Ye="WebAssembly",Tn=Fv[Ye],Yr=Error("e",{cause:7}).cause!==7,cr=i(function(r,e){var t={};t[r]=Ha(r,e,Yr),Xa({global:!0,constructor:!0,arity:1,forced:Yr},t)},"exportGlobalErrorCauseWrapper"),bt=i(function(r,e){if(Tn&&Tn[r]){var t={};t[r]=Ha(Ye+"."+r,e,Yr),Xa({target:Ye,stat:!0,constructor:!0,arity:1,forced:Yr},t)}},"exportWebAssemblyErrorCauseWrapper");cr("Error",function(r){return i(function(t){return q(r,this,arguments)},"Error")});cr("EvalError",function(r){return i(function(t){return q(r,this,arguments)},"EvalError")});cr("RangeError",function(r){return i(function(t){return q(r,this,arguments)},"RangeError")});cr("ReferenceError",function(r){return i(function(t){return q(r,this,arguments)},"ReferenceError")});cr("SyntaxError",function(r){return i(function(t){return q(r,this,arguments)},"SyntaxError")});cr("TypeError",function(r){return i(function(t){return q(r,this,arguments)},"TypeError")});cr("URIError",function(r){return i(function(t){return q(r,this,arguments)},"URIError")});bt("CompileError",function(r){return i(function(t){return q(r,this,arguments)},"CompileError")});bt("LinkError",function(r){return i(function(t){return q(r,this,arguments)},"LinkError")});bt("RuntimeError",function(r){return i(function(t){return q(r,this,arguments)},"RuntimeError")});var Gv=O,Bv=Gv(1 .valueOf),Uv=rr,Kv=er,kv=Q,zv=RangeError,Wv=i(function(e){var t=Kv(kv(this)),n="",o=Uv(e);if(o<0||o==1/0)throw zv("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))o&1&&(n+=t);return n},"repeat"),qv=Math.log,Xv=Math.LOG10E,Hv=Math.log10||i(function(e){return qv(e)*Xv},"log10"),Yv=P,Et=O,Vv=rr,Jv=Bv,Zv=Wv,Qv=Hv,Vr=E,rf=RangeError,Rn=String,ef=isFinite,tf=Math.abs,nf=Math.floor,Pn=Math.pow,af=Math.round,z=Et(1 .toExponential),of=Et(Zv),Cn=Et("".slice),Ya=z(-69e-12,4)==="-6.9000e-11"&&z(1.255,2)==="1.25e+0"&&z(12345,3)==="1.235e+4"&&z(25,0)==="3e+1",cf=Vr(function(){z(1,1/0)})&&Vr(function(){z(1,-1/0)}),sf=!Vr(function(){z(1/0,1/0)})&&!Vr(function(){z(NaN,1/0)}),lf=!Ya||!cf||!sf;Yv({target:"Number",proto:!0,forced:lf},{toExponential:i(function(e){var t=Jv(this);if(e===void 0)return z(t);var n=Vv(e);if(!ef(t))return String(t);if(n<0||n>20)throw rf("Incorrect fraction digits");if(Ya)return z(t,n);var o="",c="",u=0,l="",a="";if(t<0&&(o="-",t=-t),t===0)u=0,c=of("0",n+1);else{var s=Qv(t);u=nf(s);var v=0,f=Pn(10,u-n);v=af(t/f),2*t>=(2*v+1)*f&&(v+=1),v>=Pn(10,n+1)&&(v/=10,u+=1),c=Rn(v)}return n!==0&&(c=Cn(c,0,1)+"."+Cn(c,1)),u===0?(l="+",a="0"):(l=u>0?"+":"-",a=Rn(tf(u))),c+="e"+l+a,o+c},"toExponential")});var uf=P,vf=F;uf({target:"Object",stat:!0},{hasOwn:vf});var Ot={},_n=Rr,ff=i(function(r){var e,t;this.promise=new r(function(n,o){if(e!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");e=n,t=o}),this.resolve=_n(e),this.reject=_n(t)},"PromiseCapability");Ot.f=function(r){return new ff(r)};var pf=i(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$1"),gf=P,df=L,yf=Rr,$f=V,hf=Ot,mf=pf,xf=Ga,An="No one promise resolved";gf({target:"Promise",stat:!0},{any:i(function(e){var t=this,n=$f("AggregateError"),o=hf.f(t),c=o.resolve,u=o.reject,l=mf(function(){var a=yf(t.resolve),s=[],v=0,f=1,p=!1;xf(e,function(g){var d=v++,$=!1;f++,df(a,t,g).then(function(b){$||p||(p=!0,c(b))},function(b){$||p||($=!0,s[d]=b,--f||u(new n(s,An)))})}),--f||u(new n(s,An))});return l.error&&u(l.value),o.promise},"any")});var bf=A,Ef=bf.Promise,Of=O,Sf=E,Va=T,wf=ht,If=V,Tf=lt,Ja=i(function(){},"noop"),Rf=[],Za=If("Reflect","construct"),St=/^\s*(?:class|function)\b/,Pf=Of(St.exec),Cf=!St.exec(Ja),hr=i(function(e){if(!Va(e))return!1;try{return Za(Ja,Rf,e),!0}catch{return!1}},"isConstructor"),Qa=i(function(e){if(!Va(e))return!1;switch(wf(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Cf||!!Pf(St,Tf(e))}catch{return!0}},"isConstructor");Qa.sham=!0;var _f=!Za||Sf(function(){var r;return hr(hr.call)||!hr(Object)||!hr(function(){r=!0})||r})?Qa:hr,Af=_f,jf=Tr,Nf=TypeError,Lf=i(function(r){if(Af(r))return r;throw Nf(jf(r)+" is not a constructor")},"aConstructor$1"),jn=N,Mf=Lf,Df=j,Ff=Df("species"),ro=i(function(r,e){var t=jn(r).constructor,n;return t===void 0||(n=jn(t)[Ff])==null?e:Mf(n)},"speciesConstructor$2"),Gf=N,Bf=Y,Uf=Ot,Kf=i(function(r,e){if(Gf(r),Bf(e)&&e.constructor===r)return e;var t=Uf.f(r),n=t.resolve;return n(e),t.promise},"promiseResolve$1"),kf=P,Jr=Ef,zf=E,eo=V,to=T,Wf=ro,Nn=Kf,qf=Pr,Ve=Jr&&Jr.prototype,Xf=!!Jr&&zf(function(){Ve.finally.call({then:function(){}},function(){})});kf({target:"Promise",proto:!0,real:!0,forced:Xf},{finally:function(r){var e=Wf(this,eo("Promise")),t=to(r);return this.then(t?function(n){return Nn(e,r()).then(function(){return n})}:r,t?function(n){return Nn(e,r()).then(function(){throw n})}:r)}});if(to(Jr)){var Ln=eo("Promise").prototype.finally;Ve.finally!==Ln&&qf(Ve,"finally",Ln,{unsafe:!0})}var Hf=J.f,Yf=F,Vf=j,Mn=Vf("toStringTag"),no=i(function(r,e,t){r&&!t&&(r=r.prototype),r&&!Yf(r,Mn)&&Hf(r,Mn,{configurable:!0,value:e})},"setToStringTag$2"),Jf=P,Zf=A,Qf=no;Jf({global:!0},{Reflect:{}});Qf(Zf.Reflect,"Reflect",!0);var Dn=ct.exports,rp=J,ep=i(function(r,e,t){return t.get&&Dn(t.get,e,{getter:!0}),t.set&&Dn(t.set,e,{setter:!0}),rp.f(r,e,t)},"defineBuiltInAccessor$1"),tp=N,wt=i(function(){var r=tp(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),np=A,ap=W,op=ep,ip=wt,cp=E,ao=np.RegExp,oo=ao.prototype,sp=ap&&cp(function(){var r=!0;try{ao(".","d")}catch{r=!1}var e={},t="",n=r?"dgimsy":"gimsy",o=i(function(a,s){Object.defineProperty(e,a,{get:function(){return t+=s,!0}})},"addGetter"),c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(c.hasIndices="d");for(var u in c)o(u,c[u]);var l=Object.getOwnPropertyDescriptor(oo,"flags").get.call(e);return l!==n||t!==n});sp&&op(oo,"flags",{configurable:!0,get:ip});var lp=P,up=O,vp=Q,fp=rr,pp=er,gp=E,dp=up("".charAt),yp=gp(function(){return"\u{20BB7}".at(-2)!=="\uD842"});lp({target:"String",proto:!0,forced:yp},{at:i(function(e){var t=pp(vp(this)),n=t.length,o=fp(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:dp(t,c)},"at")});var $p=E,hp=T,Fn=Ra,mp=Pr,xp=j,Je=xp("iterator"),io=!1,or,Te,Re;[].keys&&(Re=[].keys(),"next"in Re?(Te=Fn(Fn(Re)),Te!==Object.prototype&&(or=Te)):io=!0);var bp=or==null||$p(function(){var r={};return or[Je].call(r)!==r});bp&&(or={});hp(or[Je])||mp(or,Je,function(){return this});var Ep={IteratorPrototype:or,BUGGY_SAFARI_ITERATORS:io},Op=Ep.IteratorPrototype,Sp=ae,wp=Sr,Ip=no,Tp=$t,Rp=i(function(){return this},"returnThis"),Pp=i(function(r,e,t,n){var o=e+" Iterator";return r.prototype=Sp(Op,{next:wp(+!n,t)}),Ip(r,o,!1),Tp[o]=Rp,r},"createIteratorConstructor$1"),Cp=Y,_p=wr,Ap=j,jp=Ap("match"),co=i(function(r){var e;return Cp(r)&&((e=r[jp])!==void 0?!!e:_p(r)=="RegExp")},"isRegexp"),Np=L,Lp=F,Mp=Ir,Dp=wt,Gn=RegExp.prototype,so=i(function(r){var e=r.flags;return e===void 0&&!("flags"in Gn)&&!Lp(r,"flags")&&Mp(Gn,r)?Np(Dp,r):e},"regexpGetFlags"),It=O,Fp=rr,Gp=er,Bp=Q,Up=It("".charAt),Bn=It("".charCodeAt),Kp=It("".slice),Un=i(function(r){return function(e,t){var n=Gp(Bp(e)),o=Fp(t),c=n.length,u,l;return o<0||o>=c?r?"":void 0:(u=Bn(n,o),u<55296||u>56319||o+1===c||(l=Bn(n,o+1))<56320||l>57343?r?Up(n,o):u:r?Kp(n,o,o+2):(u-55296<<10)+(l-56320)+65536)}},"createMethod"),kp={codeAt:Un(!1),charAt:Un(!0)},zp=kp.charAt,lo=i(function(r,e,t){return e+(t?zp(r,e).length:1)},"advanceStringIndex$2"),Tt=E,Wp=A,Rt=Wp.RegExp,Pt=Tt(function(){var r=Rt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),qp=Pt||Tt(function(){return!Rt("a","y").sticky}),Xp=Pt||Tt(function(){var r=Rt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),Hp={BROKEN_CARET:Xp,MISSED_STICKY:qp,UNSUPPORTED_Y:Pt},Yp=E,Vp=A,Jp=Vp.RegExp,Zp=Yp(function(){var r=Jp(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),Qp=E,rg=A,eg=rg.RegExp,tg=Qp(function(){var r=eg("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),vr=L,ie=O,ng=er,ag=wt,og=Hp,ig=ne.exports,cg=ae,sg=ft.get,lg=Zp,ug=tg,vg=ig("native-string-replace",String.prototype.replace),Zr=RegExp.prototype.exec,Ze=Zr,fg=ie("".charAt),pg=ie("".indexOf),gg=ie("".replace),Pe=ie("".slice),Qe=function(){var r=/a/,e=/b*/g;return vr(Zr,r,"a"),vr(Zr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),uo=og.BROKEN_CARET,rt=/()??/.exec("")[1]!==void 0,dg=Qe||rt||uo||lg||ug;dg&&(Ze=i(function(e){var t=this,n=sg(t),o=ng(e),c=n.raw,u,l,a,s,v,f,p;if(c)return c.lastIndex=t.lastIndex,u=vr(Ze,c,o),t.lastIndex=c.lastIndex,u;var g=n.groups,d=uo&&t.sticky,$=vr(ag,t),b=t.source,w=0,x=o;if(d&&($=gg($,"y",""),pg($,"g")===-1&&($+="g"),x=Pe(o,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&fg(o,t.lastIndex-1)!==`
`)&&(b="(?: "+b+")",x=" "+x,w++),l=new RegExp("^(?:"+b+")",$)),rt&&(l=new RegExp("^"+b+"$(?!\\s)",$)),Qe&&(a=t.lastIndex),s=vr(Zr,d?l:t,x),d?s?(s.input=Pe(s.input,w),s[0]=Pe(s[0],w),s.index=t.lastIndex,t.lastIndex+=s[0].length):t.lastIndex=0:Qe&&s&&(t.lastIndex=t.global?s.index+s[0].length:a),rt&&s&&s.length>1&&vr(vg,s[0],l,function(){for(v=1;v<arguments.length-2;v++)arguments[v]===void 0&&(s[v]=void 0)}),s&&g)for(s.groups=f=cg(null),v=0;v<g.length;v++)p=g[v],f[p[0]]=s[p[1]];return s},"exec"));var Ct=Ze,Kn=L,yg=N,$g=T,hg=wr,mg=Ct,xg=TypeError,vo=i(function(r,e){var t=r.exec;if($g(t)){var n=Kn(t,r,e);return n!==null&&yg(n),n}if(hg(r)==="RegExp")return Kn(mg,r,e);throw xg("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),bg=P,Eg=L,fo=O,Og=Pp,kn=Q,po=pt,Er=er,Sg=N,wg=wr,Ig=co,go=so,Tg=fr,Rg=Pr,Pg=E,Cg=j,_g=ro,Ag=lo,jg=vo,yo=ft,Ng=$i,Qr=Cg("matchAll"),$o="RegExp String",ho=$o+" Iterator",Lg=yo.set,Mg=yo.getterFor(ho),zn=RegExp.prototype,Dg=TypeError,et=fo("".indexOf),re=fo("".matchAll),Ce=!!re&&!Pg(function(){re("a",/./)}),Fg=Og(i(function(e,t,n,o){Lg(this,{type:ho,regexp:e,string:t,global:n,unicode:o,done:!1})},"RegExpStringIterator"),$o,i(function(){var e=Mg(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=jg(t,n);return o===null?{value:void 0,done:e.done=!0}:e.global?(Er(o[0])===""&&(t.lastIndex=Ag(n,po(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})},"next")),mo=i(function(r){var e=Sg(this),t=Er(r),n=_g(e,RegExp),o=Er(go(e)),c,u,l;return c=new n(n===RegExp?e.source:e,o),u=!!~et(o,"g"),l=!!~et(o,"u"),c.lastIndex=po(e.lastIndex),new Fg(c,t,u,l)},"$matchAll");bg({target:"String",proto:!0,forced:Ce},{matchAll:i(function(e){var t=kn(this),n,o,c,u;if(e!=null){if(Ig(e)&&(n=Er(kn(go(e))),!~et(n,"g")))throw Dg("`.matchAll` does not allow non-global regexes");if(Ce)return re(t,e);if(c=Tg(e,Qr),c===void 0&&Ng&&wg(e)=="RegExp"&&(c=mo),c)return Eg(c,e,t)}else if(Ce)return re(t,e);return o=Er(t),u=new RegExp(e,"g"),u[Qr](o)},"matchAll")});Qr in zn||Rg(zn,Qr,mo);var Gg=P,Wn=Ct;Gg({target:"RegExp",proto:!0,forced:/./.exec!==Wn},{exec:Wn});var qn=O,Xn=Pr,Bg=Ct,Hn=E,xo=j,Ug=pr,Kg=xo("species"),_e=RegExp.prototype,kg=i(function(r,e,t,n){var o=xo(r),c=!Hn(function(){var s={};return s[o]=function(){return 7},""[r](s)!=7}),u=c&&!Hn(function(){var s=!1,v=/a/;return r==="split"&&(v={},v.constructor={},v.constructor[Kg]=function(){return v},v.flags="",v[o]=/./[o]),v.exec=function(){return s=!0,null},v[o](""),!s});if(!c||!u||t){var l=qn(/./[o]),a=e(o,""[r],function(s,v,f,p,g){var d=qn(s),$=v.exec;return $===Bg||$===_e.exec?c&&!g?{done:!0,value:l(v,f,p)}:{done:!0,value:d(f,v,p)}:{done:!1}});Xn(String.prototype,r,a[0]),Xn(_e,o,a[1])}n&&Ug(_e[o],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),_t=O,zg=ir,Wg=Math.floor,Ae=_t("".charAt),qg=_t("".replace),je=_t("".slice),Xg=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Hg=/\$([$&'`]|\d{1,2})/g,bo=i(function(r,e,t,n,o,c){var u=t+r.length,l=n.length,a=Hg;return o!==void 0&&(o=zg(o),a=Xg),qg(c,a,function(s,v){var f;switch(Ae(v,0)){case"$":return"$";case"&":return r;case"`":return je(e,0,t);case"'":return je(e,u);case"<":f=o[je(v,1,-1)];break;default:var p=+v;if(p===0)return s;if(p>l){var g=Wg(p/10);return g===0?s:g<=l?n[g-1]===void 0?Ae(v,1):n[g-1]+Ae(v,1):s}f=n[p-1]}return f===void 0?"":f})},"getSubstitution$2"),Yg=mt,Yn=L,ce=O,Vg=kg,Jg=E,Zg=N,Qg=T,rd=rr,ed=pt,ur=er,td=Q,nd=lo,ad=fr,od=bo,id=vo,cd=j,tt=cd("replace"),sd=Math.max,ld=Math.min,ud=ce([].concat),Ne=ce([].push),Vn=ce("".indexOf),Jn=ce("".slice),vd=i(function(r){return r===void 0?r:String(r)},"maybeToString"),fd=function(){return"a".replace(/./,"$0")==="$0"}(),Zn=function(){return/./[tt]?/./[tt]("a","$0")==="":!1}(),pd=!Jg(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Vg("replace",function(r,e,t){var n=Zn?"$":"$0";return[i(function(c,u){var l=td(this),a=c==null?void 0:ad(c,tt);return a?Yn(a,c,l,u):Yn(e,ur(l),c,u)},"replace"),function(o,c){var u=Zg(this),l=ur(o);if(typeof c=="string"&&Vn(c,n)===-1&&Vn(c,"$<")===-1){var a=t(e,u,l,c);if(a.done)return a.value}var s=Qg(c);s||(c=ur(c));var v=u.global;if(v){var f=u.unicode;u.lastIndex=0}for(var p=[];;){var g=id(u,l);if(g===null||(Ne(p,g),!v))break;var d=ur(g[0]);d===""&&(u.lastIndex=nd(l,ed(u.lastIndex),f))}for(var $="",b=0,w=0;w<p.length;w++){g=p[w];for(var x=ur(g[0]),G=sd(ld(rd(g.index),l.length),0),h=[],m=1;m<g.length;m++)Ne(h,vd(g[m]));var R=g.groups;if(s){var I=ud([x],h,G,l);R!==void 0&&Ne(I,R);var S=ur(Yg(c,void 0,I))}else S=od(x,l,G,h,R,c);G>=b&&($+=Jn(l,b,G)+S,b=G+x.length)}return $+Jn(l,b)}]},!pd||!fd||Zn);var gd=P,dd=L,At=O,Qn=Q,yd=T,$d=co,mr=er,hd=fr,md=so,xd=bo,bd=j,Ed=bd("replace"),Od=TypeError,Eo=At("".indexOf);At("".replace);var ra=At("".slice),Sd=Math.max,ea=i(function(r,e,t){return t>r.length?-1:e===""?t:Eo(r,e,t)},"stringIndexOf");gd({target:"String",proto:!0},{replaceAll:i(function(e,t){var n=Qn(this),o,c,u,l,a,s,v,f,p,g=0,d=0,$="";if(e!=null){if(o=$d(e),o&&(c=mr(Qn(md(e))),!~Eo(c,"g")))throw Od("`.replaceAll` does not allow non-global regexes");if(u=hd(e,Ed),u)return dd(u,e,n,t)}for(l=mr(n),a=mr(e),s=yd(t),s||(t=mr(t)),v=a.length,f=Sd(1,v),g=ea(l,a,0);g!==-1;)p=s?mr(t(a,g,l)):xd(a,l,g,[],void 0,t),$+=ra(l,d,g)+p,d=g+v,g=ea(l,a,g+f);return d<l.length&&($+=ra(l,d)),$},"replaceAll")});var Fr,wd=new Uint8Array(16);function Id(){if(!Fr&&(Fr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Fr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fr(wd)}i(Id,"rng");const Td=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Rd(r){return typeof r=="string"&&Td.test(r)}i(Rd,"validate");var C=[];for(var Le=0;Le<256;++Le)C.push((Le+256).toString(16).substr(1));function Pd(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(C[r[e+0]]+C[r[e+1]]+C[r[e+2]]+C[r[e+3]]+"-"+C[r[e+4]]+C[r[e+5]]+"-"+C[r[e+6]]+C[r[e+7]]+"-"+C[r[e+8]]+C[r[e+9]]+"-"+C[r[e+10]]+C[r[e+11]]+C[r[e+12]]+C[r[e+13]]+C[r[e+14]]+C[r[e+15]]).toLowerCase();if(!Rd(t))throw TypeError("Stringified UUID is invalid");return t}i(Pd,"stringify");function Cd(r,e,t){r=r||{};var n=r.random||(r.rng||Id)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=n[o];return e}return Pd(n)}i(Cd,"v4");const _d=i(r=>(Object.assign(r,{appendTo(e){r.element,e.append(r.element)},dispose(){r.dispose?r.dispose():(r.element,r.element.remove())}}),r),"Component"),Ad=i((r,e)=>{const t={clear(){return e.transform.baseVal.clear(),t},translate(n,o){const c=r.createSVGTransform();return c.setTranslate(n,o),e.transform.baseVal.appendItem(c),t},scale(n,o=n){const c=r.createSVGTransform();return c.setScale(n,o),e.transform.baseVal.appendItem(c),t},rotate(n,o=0,c=0){console.log(n);const u=r.createSVGTransform();return u.setRotate(n,o,c),e.transform.baseVal.appendItem(u),t}};return t},"Transform"),dr=i(r=>(_d(r),Object.assign(r,{appendDefTo(e){r.element,e.append(r.element)},transformWith(e){return r.element,Ad(e,r.element)}}),r),"SvgComponent"),U=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<placeholder-element id="${v}"></placeholder-element>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElement("template");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`placeholder-element#${u}`);a.parentNode.replaceChild(l,a)}return c},"html"),_=i((r,...e)=>{const t=[],n={};for(let u=0;u<r.length-1;u++){t.push(r[u]);const l=e[u];if(l.element instanceof Element){const a=`__placeholder__${u}`;n[a]=l.element,t.push(`<g id="${a}"></g>`)}else if(l instanceof Element){const a=`__placeholder__${u}`;n[a]=l,t.push(`<g id="${a}"></g>`)}else if(l instanceof Array)for(const[a,s]of l.entries()){const v=`__placeholder__${u}_${a}`;if(s.element instanceof Element)n[v]=s.element;else if(s instanceof Element)n[v]=s;else throw new Error(`expected element but got ${s}`);t.push(`<g id="${v}"></g>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[u,l]of Object.entries(n)){const a=c.querySelector(`g#${u}`);a.parentNode.replaceChild(l,a)}return c},"svg"),Oo=Symbol("celly"),y=Math.sqrt(3)/2,So=i(()=>{const r=_`<path
		d="
    m ${-y} -0.5
    l  ${y} -0.5
    l  ${y}  0.5
    l 0                   1
    l ${-y}  0.5
    l ${-y} -0.5
    z
  "
	/>`;return dr({element:r})},"Hexagon"),jd=i(()=>{const r=document.createElementNS("http://www.w3.org/2000/svg","g");return dr({element:r})},"G"),Nd=i(r=>r[Oo],"isCell"),Ld=i((r,e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","g");for(const c of Object.values(e)){Object.assign(c.element,{[Oo]:!0,cell:c});const u=jd(),{coordinate:{q:l,r:a}}=c,s=2*y*l+y*a,v=3/2*a;u.transformWith(r).translate(s,v),c.appendTo(u.element),u.appendTo(n)}let o;return n.addEventListener("pointerdown",c=>{o=c.buttons}),n.addEventListener("pointerup",c=>{if(o===1){for(const u of c.composedPath())if(Nd(u))return t(u.cell)}}),dr({element:n,cells:e})},"Grid"),Md=i(([r,e])=>{const t=_`<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 ${r} ${e}"
		preserveAspectRatio="xMidYMid meet"
		draggable="false"
	>
		<g transform="rotate(-60) translate(-125, 175) scale(1.3)">
			<text
				x="0"
				y="0"
				font-size="200%"
				font-weight="bolder"
				text-anchor="middle"
			>
				Hexpanse
			</text>
			<text x="0" y="30" font-size="100%" text-anchor="middle">
				Goal: Connect everything
			</text>
		</g>
	</svg>`;return dr({element:t})},"Main"),ta=[0,60,120,180,240,300];function Dd(r){if(!ta.includes(r))throw new Error(`expected one of Orientation [${ta.join(", ")}] but got ${r}`)}i(Dd,"assertOrientation");const Fd=i((r,e)=>{switch(e){case 32:{const t=So();return t.transformWith(r).scale(.25),t.element.classList.add("end"),_`<g>
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
			</g>`;default:throw new Error(`unhandled connection ${e.toString(2)}`)}},"EdgeElement"),Gd=i((r,e)=>{const t=Fd(r,e);return dr({element:t})},"Edge"),Me={},Bd=i((r,e,t,n)=>{if(!Me[n]){const c=Gd(r,n);Me[n]=_`<g class="cell">${So()}${c}</g>`}const o=Me[n].cloneNode(!0);return o.classList.add(`rotate${t}`),dr({element:o,orientation:t,connection:n,valid:!1,coordinate:e,rotateClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateTo${t}`);let c=t;return c+=60,c%=360,Dd(c),t=c,o.classList.add(`rotate${t}`),o.classList.add(`rotateTo${t}`),t}})},"Cell");var wo={exports:{}};(function(r){(function(e,t,n){function o(a){var s=this,v=l();s.next=function(){var f=2091639*s.s0+s.c*23283064365386963e-26;return s.s0=s.s1,s.s1=s.s2,s.s2=f-(s.c=f|0)},s.c=1,s.s0=v(" "),s.s1=v(" "),s.s2=v(" "),s.s0-=v(a),s.s0<0&&(s.s0+=1),s.s1-=v(a),s.s1<0&&(s.s1+=1),s.s2-=v(a),s.s2<0&&(s.s2+=1),v=null}i(o,"Alea");function c(a,s){return s.c=a.c,s.s0=a.s0,s.s1=a.s1,s.s2=a.s2,s}i(c,"copy");function u(a,s){var v=new o(a),f=s&&s.state,p=v.next;return p.int32=function(){return v.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,f&&(typeof f=="object"&&c(f,v),p.state=function(){return c(v,{})}),p}i(u,"impl");function l(){var a=4022871197,s=i(function(v){v=String(v);for(var f=0;f<v.length;f++){a+=v.charCodeAt(f);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26},"mash");return s}i(l,"Mash"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.alea=u})(H,r,!1)})(wo);var Io={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var f=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^f^f>>>8},l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor128=u})(H,r,!1)})(Io);var To={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(f^f<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,l===(l|0)?a.x=l:s+=l;for(var v=0;v<s.length+64;v++)a.x^=s.charCodeAt(v)|0,v==s.length&&(a.d=a.x<<10^a.x>>>4),a.next()}i(o,"XorGen");function c(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a.v=l.v,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorwow=u})(H,r,!1)})(To);var Ro={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.x,f=a.i,p,g;return p=v[f],p^=p>>>7,g=p^p<<24,p=v[f+1&7],g^=p^p>>>10,p=v[f+3&7],g^=p^p>>>3,p=v[f+4&7],g^=p^p<<7,p=v[f+7&7],p=p^p<<13,g^=p^p<<9,v[f]=g,a.i=f+1&7,g};function s(v,f){var p,g=[];if(f===(f|0))g[0]=f;else for(f=""+f,p=0;p<f.length;++p)g[p&7]=g[p&7]<<15^f.charCodeAt(p)+g[p+1&7]<<13;for(;g.length<8;)g.push(0);for(p=0;p<8&&g[p]===0;++p);for(p==8?g[7]=-1:g[p],v.x=g,v.i=0,p=256;p>0;--p)v.next()}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.x=l.x.slice(),a.i=l.i,a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.x&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xorshift7=u})(H,r,!1)})(Ro);var Po={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var v=a.w,f=a.X,p=a.i,g,d;return a.w=v=v+1640531527|0,d=f[p+34&127],g=f[p=p+1&127],d^=d<<13,g^=g<<17,d^=d>>>15,g^=g>>>12,d=f[p]=d^g,a.i=p,d+(v^v>>>16)|0};function s(v,f){var p,g,d,$,b,w=[],x=128;for(f===(f|0)?(g=f,f=null):(f=f+"\0",g=0,x=Math.max(x,f.length)),d=0,$=-32;$<x;++$)f&&(g^=f.charCodeAt(($+32)%f.length)),$===0&&(b=g),g^=g<<10,g^=g>>>15,g^=g<<4,g^=g>>>13,$>=0&&(b=b+1640531527|0,p=w[$&127]^=g+b,d=p==0?d+1:0);for(d>=128&&(w[(f&&f.length||0)&127]=-1),d=127,$=4*128;$>0;--$)g=w[d+34&127],p=w[d=d+1&127],g^=g<<13,p^=p<<17,g^=g>>>15,p^=p>>>12,w[d]=g^p;v.w=b,v.X=w,v.i=d}i(s,"init"),s(a,l)}i(o,"XorGen");function c(l,a){return a.i=l.i,a.w=l.w,a.X=l.X.slice(),a}i(c,"copy");function u(l,a){l==null&&(l=+new Date);var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(v.X&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.xor4096=u})(H,r,!1)})(Po);var Co={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,s="";a.next=function(){var f=a.b,p=a.c,g=a.d,d=a.a;return f=f<<25^f>>>7^p,p=p-g|0,g=g<<24^g>>>8^d,d=d-f|0,a.b=f=f<<20^f>>>12^p,a.c=p=p-g|0,a.d=g<<16^p>>>16^d,a.a=d-f|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,l===Math.floor(l)?(a.a=l/4294967296|0,a.b=l|0):s+=l;for(var v=0;v<s.length+20;v++)a.b^=s.charCodeAt(v)|0,a.next()}i(o,"XorGen");function c(l,a){return a.a=l.a,a.b=l.b,a.c=l.c,a.d=l.d,a}i(c,"copy");function u(l,a){var s=new o(l),v=a&&a.state,f=i(function(){return(s.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=s.next()>>>11,g=(s.next()>>>0)/4294967296,d=(p+g)/(1<<21);while(d===0);return d},f.int32=s.next,f.quick=f,v&&(typeof v=="object"&&c(v,s),f.state=function(){return c(s,{})}),f}i(u,"impl"),t&&t.exports?t.exports=u:n&&n.amd?n(function(){return u}):this.tychei=u})(H,r,!1)})(Co);var _o={exports:{}};const Ud={},Kd=Object.freeze(Object.defineProperty({__proto__:null,default:Ud},Symbol.toStringTag,{value:"Module"})),kd=No(Kd);(function(r){(function(e,t,n){var o=256,c=6,u=52,l="random",a=n.pow(o,c),s=n.pow(2,u),v=s*2,f=o-1,p;function g(h,m,R){var I=[];m=m==!0?{entropy:!0}:m||{};var S=w(b(m.entropy?[h,G(t)]:h==null?x():h,3),I),M=new d(I),B=i(function(){for(var D=M.g(c),X=a,k=0;D<s;)D=(D+k)*o,X*=o,k=M.g(1);for(;D>=v;)D/=2,X/=2,k>>>=1;return(D+k)/X},"prng");return B.int32=function(){return M.g(4)|0},B.quick=function(){return M.g(4)/4294967296},B.double=B,w(G(M.S),t),(m.pass||R||function(D,X,k,Z){return Z&&(Z.S&&$(Z,M),D.state=function(){return $(M,{})}),k?(n[l]=D,X):D})(B,S,"global"in m?m.global:this==n,m.state)}i(g,"seedrandom");function d(h){var m,R=h.length,I=this,S=0,M=I.i=I.j=0,B=I.S=[];for(R||(h=[R++]);S<o;)B[S]=S++;for(S=0;S<o;S++)B[S]=B[M=f&M+h[S%R]+(m=B[S])],B[M]=m;(I.g=function(D){for(var X,k=0,Z=I.i,_r=I.j,$r=I.S;D--;)X=$r[Z=f&Z+1],k=k*o+$r[f&($r[Z]=$r[_r=f&_r+X])+($r[_r]=X)];return I.i=Z,I.j=_r,k})(o)}i(d,"ARC4");function $(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}i($,"copy");function b(h,m){var R=[],I=typeof h,S;if(m&&I=="object")for(S in h)try{R.push(b(h[S],m-1))}catch{}return R.length?R:I=="string"?h:h+"\0"}i(b,"flatten");function w(h,m){for(var R=h+"",I,S=0;S<R.length;)m[f&S]=f&(I^=m[f&S]*19)+R.charCodeAt(S++);return G(m)}i(w,"mixkey");function x(){try{var h;return p&&(h=p.randomBytes)?h=h(o):(h=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(h)),G(h)}catch{var m=e.navigator,R=m&&m.plugins;return[+new Date,e,R,e.screen,G(t)]}}i(x,"autoseed");function G(h){return String.fromCharCode.apply(0,h)}if(i(G,"tostring"),w(n.random(),t),r.exports){r.exports=g;try{p=kd}catch{}}else n["seed"+l]=g})(typeof self<"u"?self:H,[],Math)})(_o);var zd=wo.exports,Wd=Io.exports,qd=To.exports,Xd=Ro.exports,Hd=Po.exports,Yd=Co.exports,yr=_o.exports;yr.alea=zd;yr.xor128=Wd;yr.xorwow=qd;yr.xorshift7=Xd;yr.xor4096=Hd;yr.tychei=Yd;const Vd=["prims","wilsons"],Jd=i(r=>Vd.includes(r),"validMode"),Zd=i(()=>{const r=new Worker("/hexpanse/assets/worker.4219743c.js",{type:"module"}),e=i(n=>{r.postMessage(n)},"message"),t={restore(n){e({type:"restore",config:n})},updateCell(n,o){e({type:"update cell",coordinate:n,orientation:o})},onRestored(){throw new Error("missing onRestored")},onColoring(){throw new Error("missing onColoring")},onGameOver(){throw new Error("missing onGameOver")}};return r.onmessage=({data:n})=>{switch(n.type){case"restored":return t.onRestored(n.config,n.state);case"coloring":return t.onColoring(n.colors);case"game over":return t.onGameOver()}},t},"SaveWorker"),Or=Zd(),jt=1e3,nt=jt*y,nr=Md([jt,nt]);nr.element.onclick=r=>{r.preventDefault()};let kr;const na={};let De=Date.now();Or.onRestored=({size:r,mode:e},t)=>{let n=0;for(const[s,{coordinate:v,orientation:f,connection:p}]of Object.entries(t))na[s]=Bd(nr.element,v,f,p),[56,44,52,42].includes(p)&&(n+=1),[60,46,54].includes(p)&&(n+=2),[62].includes(p)&&(n+=3),[63].includes(p)&&(n+=4);const o=U`<p>Generated ${Math.ceil(Date.now()-De)}ms</p>`;De=Date.now(),kr=Ld(nr.element,na,s=>{if(Ao)return;const v=s.rotateClockwise();Or.updateCell(s.coordinate,v)}),kr.transformWith(nr.element).translate(jt/2,nt/2).scale(nt/(r*3+2)),kr.appendTo(nr.element),document.body.append(U`<main>${nr}</main>`);const c=U`<p>Rendered ${Math.ceil(Date.now()-De)}ms</p>`,u=U`<button>New game</button>`;u.onclick=s=>{s.preventDefault();const v=document.getElementById("new-game-form"),{size:f,mode:p}=Object.fromEntries(new FormData(v).entries()),g=`./?${new URLSearchParams({size:f,mode:p}).toString()}`;console.log(g),window.location.href=g},document.body.append(U`<h2>Game settings</h2>`,U`<form id="new-game-form">
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
			${u}
		</form>`,U`<h2>About</h2>`,o,c,U`<p>${n} branches</p>`,U`<p>
			Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a>
		</p>`,U`<p>
			Source code:
			<a href="https://github.com/Pyrolistical/hexpanse"
				>https://github.com/Pyrolistical/hexpanse</a
			>
		</p>`,U`<p>
			Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
		</p>`);const l=document.querySelector(`#new-game-form input[name="size"][value="${r}"]`);l.checked=!0;const a=document.querySelector(`#new-game-form input[name="mode"][value="${e}"]`);a.checked=!0};Or.onColoring=r=>{for(const[e,t]of Object.entries(r))for(const n of t)kr.cells[n].element.dataset.color=e};let Ao=!1;Or.onGameOver=()=>{Ao=!0,nr.element.classList.add("game-over")};const Qd=i(()=>{var c,u;window.location.hash===""&&history.replaceState(void 0,"","#");const r=new URLSearchParams(window.location.search),e=(c=r.get("seed"))!=null?c:Cd(),t=Number.parseInt((u=r.get("size"))!=null?u:"20"),n=r.get("mode"),o={seed:e,size:t,mode:Jd(n)?n:"wilsons"};return history.replaceState(void 0,"",`?${new URLSearchParams({...o,size:String(t)}).toString()}`),o},"loadConfig"),ry=Qd();Or.restore(ry);
