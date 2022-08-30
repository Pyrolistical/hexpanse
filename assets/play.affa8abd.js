var No=Object.defineProperty;var i=(r,e)=>No(r,"name",{value:e,configurable:!0});i(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}i(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}i(n,"processPreload")},"polyfill")();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lo(r){var e=r.default;if(typeof e=="function"){var t=i(function(){return e.apply(this,arguments)},"a");t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),t}i(Lo,"getAugmentedNamespace");var Ar=i(function(r){return r&&r.Math==Math&&r},"check"),A=Ar(typeof globalThis=="object"&&globalThis)||Ar(typeof window=="object"&&window)||Ar(typeof self=="object"&&self)||Ar(typeof H=="object"&&H)||function(){return this}()||Function("return this")(),at={},E=i(function(r){try{return!!r()}catch{return!0}},"fails$p"),Do=E,W=!Do(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Mo=E,ee=!Mo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Fo=ee,jr=Function.prototype.call,L=Fo?jr.bind(jr):function(){return jr.apply(jr,arguments)},oa={},ia={}.propertyIsEnumerable,ca=Object.getOwnPropertyDescriptor,Go=ca&&!ia.call({1:2},1);oa.f=Go?i(function(e){var t=ca(this,e);return!!t&&t.enumerable},"propertyIsEnumerable"):ia;var Sr=i(function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},"createPropertyDescriptor$5"),sa=ee,la=Function.prototype,Bo=la.bind,Fe=la.call,Uo=sa&&Bo.bind(Fe,Fe),O=sa?function(r){return r&&Uo(r)}:function(r){return r&&function(){return Fe.apply(r,arguments)}},ua=O,ko=ua({}.toString),Ko=ua("".slice),wr=i(function(r){return Ko(ko(r),8,-1)},"classofRaw$1"),zo=O,Wo=E,qo=wr,se=Object,Xo=zo("".split),va=Wo(function(){return!se("z").propertyIsEnumerable(0)})?function(r){return qo(r)=="String"?Xo(r,""):se(r)}:se,Ho=TypeError,Q=i(function(r){if(r==null)throw Ho("Can't call method on "+r);return r},"requireObjectCoercible$8"),Yo=va,Vo=Q,te=i(function(r){return Yo(Vo(r))},"toIndexedObject$4"),T=i(function(r){return typeof r=="function"},"isCallable$k"),Jo=T,Y=i(function(r){return typeof r=="object"?r!==null:Jo(r)},"isObject$9"),le=A,Zo=T,Qo=i(function(r){return Zo(r)?r:void 0},"aFunction"),V=i(function(r,e){return arguments.length<2?Qo(le[r]):le[r]&&le[r][e]},"getBuiltIn$9"),ri=O,Ir=ri({}.isPrototypeOf),ei=V,ti=ei("navigator","userAgent")||"",fa=A,ue=ti,Nt=fa.process,Lt=fa.Deno,Dt=Nt&&Nt.versions||Lt&&Lt.version,Mt=Dt&&Dt.v8,k,zr;Mt&&(k=Mt.split("."),zr=k[0]>0&&k[0]<4?1:+(k[0]+k[1]));!zr&&ue&&(k=ue.match(/Edge\/(\d+)/),(!k||k[1]>=74)&&(k=ue.match(/Chrome\/(\d+)/),k&&(zr=+k[1])));var ni=zr,Ft=ni,ai=E,pa=!!Object.getOwnPropertySymbols&&!ai(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Ft&&Ft<41}),oi=pa,da=oi&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ii=V,ci=T,si=Ir,li=da,ui=Object,ga=li?function(r){return typeof r=="symbol"}:function(r){var e=ii("Symbol");return ci(e)&&si(e.prototype,ui(r))},vi=String,Tr=i(function(r){try{return vi(r)}catch{return"Object"}},"tryToString$5"),fi=T,pi=Tr,di=TypeError,Rr=i(function(r){if(fi(r))return r;throw di(pi(r)+" is not a function")},"aCallable$5"),gi=Rr,fr=i(function(r,e){var t=r[e];return t==null?void 0:gi(t)},"getMethod$6"),ve=L,fe=T,pe=Y,yi=TypeError,$i=i(function(r,e){var t,n;if(e==="string"&&fe(t=r.toString)&&!pe(n=ve(t,r))||fe(t=r.valueOf)&&!pe(n=ve(t,r))||e!=="string"&&fe(t=r.toString)&&!pe(n=ve(t,r)))return n;throw yi("Can't convert object to primitive value")},"ordinaryToPrimitive$1"),ne={exports:{}},hi=!1,Gt=A,mi=Object.defineProperty,ot=i(function(r,e){try{mi(Gt,r,{value:e,configurable:!0,writable:!0})}catch{Gt[r]=e}return e},"defineGlobalProperty$3"),xi=A,bi=ot,Bt="__core-js_shared__",Ei=xi[Bt]||bi(Bt,{}),it=Ei,Ut=it;(ne.exports=function(r,e){return Ut[r]||(Ut[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Oi=Q,Si=Object,ir=i(function(r){return Si(Oi(r))},"toObject$7"),wi=O,Ii=ir,Ti=wi({}.hasOwnProperty),F=Object.hasOwn||i(function(e,t){return Ti(Ii(e),t)},"hasOwn"),Ri=O,Pi=0,Ci=Math.random(),_i=Ri(1 .toString),ya=i(function(r){return"Symbol("+(r===void 0?"":r)+")_"+_i(++Pi+Ci,36)},"uid$2"),Ai=A,ji=ne.exports,kt=F,Ni=ya,Kt=pa,$a=da,sr=ji("wks"),ar=Ai.Symbol,zt=ar&&ar.for,Li=$a?ar:ar&&ar.withoutSetter||Ni,j=i(function(r){if(!kt(sr,r)||!(Kt||typeof sr[r]=="string")){var e="Symbol."+r;Kt&&kt(ar,r)?sr[r]=ar[r]:$a&&zt?sr[r]=zt(e):sr[r]=Li(e)}return sr[r]},"wellKnownSymbol$f"),Di=L,Wt=Y,qt=ga,Mi=fr,Fi=$i,Gi=j,Bi=TypeError,Ui=Gi("toPrimitive"),ki=i(function(r,e){if(!Wt(r)||qt(r))return r;var t=Mi(r,Ui),n;if(t){if(e===void 0&&(e="default"),n=Di(t,r,e),!Wt(n)||qt(n))return n;throw Bi("Can't convert object to primitive value")}return e===void 0&&(e="number"),Fi(r,e)},"toPrimitive$1"),Ki=ki,zi=ga,ha=i(function(r){var e=Ki(r,"string");return zi(e)?e:e+""},"toPropertyKey$2"),Wi=A,Xt=Y,Ge=Wi.document,qi=Xt(Ge)&&Xt(Ge.createElement),ma=i(function(r){return qi?Ge.createElement(r):{}},"documentCreateElement$1"),Xi=W,Hi=E,Yi=ma,xa=!Xi&&!Hi(function(){return Object.defineProperty(Yi("div"),"a",{get:function(){return 7}}).a!=7}),Vi=W,Ji=L,Zi=oa,Qi=Sr,rc=te,ec=ha,tc=F,nc=xa,Ht=Object.getOwnPropertyDescriptor;at.f=Vi?Ht:i(function(e,t){if(e=rc(e),t=ec(t),nc)try{return Ht(e,t)}catch{}if(tc(e,t))return Qi(!Ji(Zi.f,e,t),e[t])},"getOwnPropertyDescriptor");var J={},ac=W,oc=E,ba=ac&&oc(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),ic=Y,cc=String,sc=TypeError,N=i(function(r){if(ic(r))return r;throw sc(cc(r)+" is not an object")},"anObject$e"),lc=W,uc=xa,vc=ba,Nr=N,Yt=ha,fc=TypeError,de=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,ge="enumerable",ye="configurable",$e="writable";J.f=lc?vc?i(function(e,t,n){if(Nr(e),t=Yt(t),Nr(n),typeof e=="function"&&t==="prototype"&&"value"in n&&$e in n&&!n[$e]){var o=pc(e,t);o&&o[$e]&&(e[t]=n.value,n={configurable:ye in n?n[ye]:o[ye],enumerable:ge in n?n[ge]:o[ge],writable:!1})}return de(e,t,n)},"defineProperty"):de:i(function(e,t,n){if(Nr(e),t=Yt(t),Nr(n),uc)try{return de(e,t,n)}catch{}if("get"in n||"set"in n)throw fc("Accessors not supported");return"value"in n&&(e[t]=n.value),e},"defineProperty");var dc=W,gc=J,yc=Sr,pr=dc?function(r,e,t){return gc.f(r,e,yc(1,t))}:function(r,e,t){return r[e]=t,r},ct={exports:{}},Be=W,$c=F,Ea=Function.prototype,hc=Be&&Object.getOwnPropertyDescriptor,st=$c(Ea,"name"),mc=st&&i(function(){},"something").name==="something",xc=st&&(!Be||Be&&hc(Ea,"name").configurable),bc={EXISTS:st,PROPER:mc,CONFIGURABLE:xc},Ec=O,Oc=T,Ue=it,Sc=Ec(Function.toString);Oc(Ue.inspectSource)||(Ue.inspectSource=function(r){return Sc(r)});var lt=Ue.inspectSource,wc=A,Ic=T,Tc=lt,Vt=wc.WeakMap,Rc=Ic(Vt)&&/native code/.test(Tc(Vt)),Pc=ne.exports,Cc=ya,Jt=Pc("keys"),ut=i(function(r){return Jt[r]||(Jt[r]=Cc(r))},"sharedKey$3"),vt={},_c=Rc,Oa=A,he=O,Ac=Y,jc=pr,me=F,xe=it,Nc=ut,Lc=vt,Zt="Object already initialized",ke=Oa.TypeError,Dc=Oa.WeakMap,Wr,xr,qr,Mc=i(function(r){return qr(r)?xr(r):Wr(r,{})},"enforce"),Fc=i(function(r){return function(e){var t;if(!Ac(e)||(t=xr(e)).type!==r)throw ke("Incompatible receiver, "+r+" required");return t}},"getterFor");if(_c||xe.state){var tr=xe.state||(xe.state=new Dc),Gc=he(tr.get),Qt=he(tr.has),Bc=he(tr.set);Wr=i(function(r,e){if(Qt(tr,r))throw new ke(Zt);return e.facade=r,Bc(tr,r,e),e},"set"),xr=i(function(r){return Gc(tr,r)||{}},"get"),qr=i(function(r){return Qt(tr,r)},"has")}else{var lr=Nc("state");Lc[lr]=!0,Wr=i(function(r,e){if(me(r,lr))throw new ke(Zt);return e.facade=r,jc(r,lr,e),e},"set"),xr=i(function(r){return me(r,lr)?r[lr]:{}},"get"),qr=i(function(r){return me(r,lr)},"has")}var ft={set:Wr,get:xr,has:qr,enforce:Mc,getterFor:Fc},Uc=E,kc=T,Lr=F,Ke=W,Kc=bc.CONFIGURABLE,zc=lt,Sa=ft,Wc=Sa.enforce,qc=Sa.get,Gr=Object.defineProperty,Xc=Ke&&!Uc(function(){return Gr(function(){},"length",{value:8}).length!==8}),Hc=String(String).split("String"),Yc=ct.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Lr(r,"name")||Kc&&r.name!==e)&&(Ke?Gr(r,"name",{value:e,configurable:!0}):r.name=e),Xc&&t&&Lr(t,"arity")&&r.length!==t.arity&&Gr(r,"length",{value:t.arity});try{t&&Lr(t,"constructor")&&t.constructor?Ke&&Gr(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=Wc(r);return Lr(n,"source")||(n.source=Hc.join(typeof e=="string"?e:"")),r};Function.prototype.toString=Yc(i(function(){return kc(this)&&qc(this).source||zc(this)},"toString"),"toString");var Vc=T,Jc=J,Zc=ct.exports,Qc=ot,Pr=i(function(r,e,t,n){n||(n={});var o=n.enumerable,s=n.name!==void 0?n.name:e;if(Vc(t)&&Zc(t,s,n),n.global)o?r[e]=t:Qc(e,t);else{try{n.unsafe?r[e]&&(o=!0):delete r[e]}catch{}o?r[e]=t:Jc.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},"defineBuiltIn$5"),wa={},rs=Math.ceil,es=Math.floor,ts=Math.trunc||i(function(e){var t=+e;return(t>0?es:rs)(t)},"trunc"),ns=ts,rr=i(function(r){var e=+r;return e!==e||e===0?0:ns(e)},"toIntegerOrInfinity$8"),as=rr,os=Math.max,is=Math.min,cs=i(function(r,e){var t=as(r);return t<0?os(t+e,0):is(t,e)},"toAbsoluteIndex$1"),ss=rr,ls=Math.min,pt=i(function(r){return r>0?ls(ss(r),9007199254740991):0},"toLength$3"),us=pt,dr=i(function(r){return us(r.length)},"lengthOfArrayLike$6"),vs=te,fs=cs,ps=dr,rn=i(function(r){return function(e,t,n){var o=vs(e),s=ps(o),v=fs(n,s),l;if(r&&t!=t){for(;s>v;)if(l=o[v++],l!=l)return!0}else for(;s>v;v++)if((r||v in o)&&o[v]===t)return r||v||0;return!r&&-1}},"createMethod$2"),Ia={includes:rn(!0),indexOf:rn(!1)},ds=O,be=F,gs=te,ys=Ia.indexOf,$s=vt,en=ds([].push),Ta=i(function(r,e){var t=gs(r),n=0,o=[],s;for(s in t)!be($s,s)&&be(t,s)&&en(o,s);for(;e.length>n;)be(t,s=e[n++])&&(~ys(o,s)||en(o,s));return o},"objectKeysInternal"),dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hs=Ta,ms=dt,xs=ms.concat("length","prototype");wa.f=Object.getOwnPropertyNames||i(function(e){return hs(e,xs)},"getOwnPropertyNames");var Ra={};Ra.f=Object.getOwnPropertySymbols;var bs=V,Es=O,Os=wa,Ss=Ra,ws=N,Is=Es([].concat),Ts=bs("Reflect","ownKeys")||i(function(e){var t=Os.f(ws(e)),n=Ss.f;return n?Is(t,n(e)):t},"ownKeys"),tn=F,Rs=Ts,Ps=at,Cs=J,gt=i(function(r,e,t){for(var n=Rs(e),o=Cs.f,s=Ps.f,v=0;v<n.length;v++){var l=n[v];!tn(r,l)&&!(t&&tn(t,l))&&o(r,l,s(e,l))}},"copyConstructorProperties$3"),_s=E,As=T,js=/#|\.prototype\./,Cr=i(function(r,e){var t=Ls[Ns(r)];return t==Ms?!0:t==Ds?!1:As(e)?_s(e):!!e},"isForced$1"),Ns=Cr.normalize=function(r){return String(r).replace(js,".").toLowerCase()},Ls=Cr.data={},Ds=Cr.NATIVE="N",Ms=Cr.POLYFILL="P",Fs=Cr,Ee=A,Gs=at.f,Bs=pr,Us=Pr,ks=ot,Ks=gt,zs=Fs,P=i(function(r,e){var t=r.target,n=r.global,o=r.stat,s,v,l,a,c,u;if(n?v=Ee:o?v=Ee[t]||ks(t,{}):v=(Ee[t]||{}).prototype,v)for(l in e){if(c=e[l],r.dontCallGetSet?(u=Gs(v,l),a=u&&u.value):a=v[l],s=zs(n?l:t+(o?".":"#")+l,r.forced),!s&&a!==void 0){if(typeof c==typeof a)continue;Ks(c,a)}(r.sham||a&&a.sham)&&Bs(c,"sham",!0),Us(v,l,c,r)}},"_export"),Ws=E,qs=!Ws(function(){function r(){}return i(r,"F"),r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Xs=F,Hs=T,Ys=ir,Vs=ut,Js=qs,nn=Vs("IE_PROTO"),ze=Object,Zs=ze.prototype,Pa=Js?ze.getPrototypeOf:function(r){var e=Ys(r);if(Xs(e,nn))return e[nn];var t=e.constructor;return Hs(t)&&e instanceof t?t.prototype:e instanceof ze?Zs:null},Qs=T,rl=String,el=TypeError,tl=i(function(r){if(typeof r=="object"||Qs(r))return r;throw el("Can't set "+rl(r)+" as a prototype")},"aPossiblePrototype$1"),nl=O,al=N,ol=tl,yt=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=nl(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return i(function(o,s){return al(o),ol(s),r?t(o,s):o.__proto__=s,o},"setPrototypeOf")}():void 0),Ca={},il=Ta,cl=dt,sl=Object.keys||i(function(e){return il(e,cl)},"keys"),ll=W,ul=ba,vl=J,fl=N,pl=te,dl=sl;Ca.f=ll&&!ul?Object.defineProperties:i(function(e,t){fl(e);for(var n=pl(t),o=dl(t),s=o.length,v=0,l;s>v;)vl.f(e,l=o[v++],n[l]);return e},"defineProperties");var gl=V,yl=gl("document","documentElement"),$l=N,hl=Ca,an=dt,ml=vt,xl=yl,bl=ma,El=ut,on=">",cn="<",We="prototype",qe="script",_a=El("IE_PROTO"),Oe=i(function(){},"EmptyConstructor"),Aa=i(function(r){return cn+qe+on+r+cn+"/"+qe+on},"scriptTag"),sn=i(function(r){r.write(Aa("")),r.close();var e=r.parentWindow.Object;return r=null,e},"NullProtoObjectViaActiveX"),Ol=i(function(){var r=bl("iframe"),e="java"+qe+":",t;return r.style.display="none",xl.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(Aa("document.F=Object")),t.close(),t.F},"NullProtoObjectViaIFrame"),Dr,Br=i(function(){try{Dr=new ActiveXObject("htmlfile")}catch{}Br=typeof document<"u"?document.domain&&Dr?sn(Dr):Ol():sn(Dr);for(var r=an.length;r--;)delete Br[We][an[r]];return Br()},"NullProtoObject");ml[_a]=!0;var ae=Object.create||i(function(e,t){var n;return e!==null?(Oe[We]=$l(e),n=new Oe,Oe[We]=null,n[_a]=e):n=Br(),t===void 0?n:hl.f(n,t)},"create"),Sl=O,ja=Error,wl=Sl("".replace),Il=function(r){return String(ja(r).stack)}("zxcasd"),Na=/\n\s*at [^:]*:[^\n]*/,Tl=Na.test(Il),La=i(function(r,e){if(Tl&&typeof r=="string"&&!ja.prepareStackTrace)for(;e--;)r=wl(r,Na,"");return r},"clearErrorStack$2"),Rl=Y,Pl=pr,Da=i(function(r,e){Rl(e)&&"cause"in e&&Pl(r,"cause",e.cause)},"installErrorCause$2"),ln=O,Cl=Rr,_l=ee,Al=ln(ln.bind),Ma=i(function(r,e){return Cl(r),e===void 0?r:_l?Al(r,e):function(){return r.apply(e,arguments)}},"functionBindContext"),$t={},jl=j,Nl=$t,Ll=jl("iterator"),Dl=Array.prototype,Ml=i(function(r){return r!==void 0&&(Nl.Array===r||Dl[Ll]===r)},"isArrayIteratorMethod$1"),Fl=j,Gl=Fl("toStringTag"),Fa={};Fa[Gl]="z";var Bl=String(Fa)==="[object z]",Ul=Bl,kl=T,Ur=wr,Kl=j,zl=Kl("toStringTag"),Wl=Object,ql=Ur(function(){return arguments}())=="Arguments",Xl=i(function(r,e){try{return r[e]}catch{}},"tryGet"),ht=Ul?Ur:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=Xl(e=Wl(r),zl))=="string"?t:ql?Ur(e):(n=Ur(e))=="Object"&&kl(e.callee)?"Arguments":n},Hl=ht,un=fr,Yl=$t,Vl=j,Jl=Vl("iterator"),Ga=i(function(r){if(r!=null)return un(r,Jl)||un(r,"@@iterator")||Yl[Hl(r)]},"getIteratorMethod$2"),Zl=L,Ql=Rr,ru=N,eu=Tr,tu=Ga,nu=TypeError,au=i(function(r,e){var t=arguments.length<2?tu(r):e;if(Ql(t))return ru(Zl(t,r));throw nu(eu(r)+" is not iterable")},"getIterator$1"),ou=L,vn=N,iu=fr,cu=i(function(r,e,t){var n,o;vn(r);try{if(n=iu(r,"return"),!n){if(e==="throw")throw t;return t}n=ou(n,r)}catch(s){o=!0,n=s}if(e==="throw")throw t;if(o)throw n;return vn(n),t},"iteratorClose$1"),su=Ma,lu=L,uu=N,vu=Tr,fu=Ml,pu=dr,fn=Ir,du=au,gu=Ga,pn=cu,yu=TypeError,kr=i(function(r,e){this.stopped=r,this.result=e},"Result"),dn=kr.prototype,Ba=i(function(r,e,t){var n=t&&t.that,o=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),v=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),a=su(e,n),c,u,f,p,d,g,$,b=i(function(x){return c&&pn(c,"normal",x),new kr(!0,x)},"stop"),w=i(function(x){return o?(uu(x),l?a(x[0],x[1],b):a(x[0],x[1])):l?a(x,b):a(x)},"callFn");if(s)c=r.iterator;else if(v)c=r;else{if(u=gu(r),!u)throw yu(vu(r)+" is not iterable");if(fu(u)){for(f=0,p=pu(r);p>f;f++)if(d=w(r[f]),d&&fn(dn,d))return d;return new kr(!1)}c=du(r,u)}for(g=s?r.next:c.next;!($=lu(g,c)).done;){try{d=w($.value)}catch(x){pn(c,"throw",x)}if(typeof d=="object"&&d&&fn(dn,d))return d}return new kr(!1)},"iterate$2"),$u=ht,hu=String,er=i(function(r){if($u(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return hu(r)},"toString$8"),mu=er,Ua=i(function(r,e){return r===void 0?arguments.length<2?"":e:mu(r)},"normalizeStringArgument$2"),xu=E,bu=Sr,ka=!xu(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",bu(1,7)),r.stack!==7):!0}),Eu=P,Ou=Ir,Su=Pa,Xr=yt,wu=gt,Ka=ae,Mr=pr,Se=Sr,Iu=La,Tu=Da,Ru=Ba,Pu=Ua,Cu=j,_u=ka,Au=Cu("toStringTag"),Hr=Error,ju=[].push,br=i(function(e,t){var n=arguments.length>2?arguments[2]:void 0,o=Ou(we,this),s;Xr?s=Xr(new Hr,o?Su(this):we):(s=o?this:Ka(we),Mr(s,Au,"Error")),t!==void 0&&Mr(s,"message",Pu(t)),_u&&Mr(s,"stack",Iu(s.stack,1)),Tu(s,n);var v=[];return Ru(e,ju,{that:v}),Mr(s,"errors",v),s},"AggregateError");Xr?Xr(br,Hr):wu(br,Hr,{name:!0});var we=br.prototype=Ka(Hr.prototype,{constructor:Se(1,br),message:Se(1,""),name:Se(1,"AggregateError")});Eu({global:!0,constructor:!0,arity:2},{AggregateError:br});var Nu=ee,za=Function.prototype,gn=za.apply,yn=za.call,mt=typeof Reflect=="object"&&Reflect.apply||(Nu?yn.bind(gn):function(){return yn.apply(gn,arguments)}),Lu=J.f,Du=i(function(r,e,t){t in r||Lu(r,t,{configurable:!0,get:function(){return e[t]},set:function(n){e[t]=n}})},"proxyAccessor$1"),Mu=T,Fu=Y,$n=yt,Gu=i(function(r,e,t){var n,o;return $n&&Mu(n=e.constructor)&&n!==t&&Fu(o=n.prototype)&&o!==t.prototype&&$n(r,o),r},"inheritIfRequired$1"),hn=V,Bu=F,Ie=pr,Uu=Ir,mn=yt,xn=gt,bn=Du,ku=Gu,Ku=Ua,zu=Da,Wu=La,qu=ka,Xu=W,Wa=i(function(r,e,t,n){var o="stackTraceLimit",s=n?2:1,v=r.split("."),l=v[v.length-1],a=hn.apply(null,v);if(!!a){var c=a.prototype;if(Bu(c,"cause")&&delete c.cause,!t)return a;var u=hn("Error"),f=e(function(p,d){var g=Ku(n?d:p,void 0),$=n?new a(p):new a;return g!==void 0&&Ie($,"message",g),qu&&Ie($,"stack",Wu($.stack,2)),this&&Uu(c,this)&&ku($,this,f),arguments.length>s&&zu($,arguments[s]),$});f.prototype=c,l!=="Error"?mn?mn(f,u):xn(f,u,{name:!0}):Xu&&o in a&&(bn(f,a,o),bn(f,a,"prepareStackTrace")),xn(f,a);try{c.name!==l&&Ie(c,"name",l),c.constructor=f}catch{}return f}},"wrapErrorConstructorWithCause$2"),Hu=P,Yu=V,Vu=mt,En=E,Ju=Wa,xt="AggregateError",On=Yu(xt),Sn=!En(function(){return On([1]).errors[0]!==1})&&En(function(){return On([1],xt,{cause:7}).cause!==7});Hu({global:!0,constructor:!0,arity:2,forced:Sn},{AggregateError:Ju(xt,function(r){return i(function(t,n){return Vu(r,this,arguments)},"AggregateError")},Sn,!0)});var Zu=j,Qu=ae,rv=J.f,Xe=Zu("unscopables"),He=Array.prototype;He[Xe]==null&&rv(He,Xe,{configurable:!0,value:Qu(null)});var oe=i(function(r){He[Xe][r]=!0},"addToUnscopables$4"),ev=P,tv=ir,nv=dr,av=rr,ov=oe;ev({target:"Array",proto:!0},{at:i(function(e){var t=tv(this),n=nv(t),o=av(e),s=o>=0?o:n+o;return s<0||s>=n?void 0:t[s]},"at")});ov("at");var iv=Ma,cv=va,sv=ir,lv=dr,wn=i(function(r){var e=r==1;return function(t,n,o){for(var s=sv(t),v=cv(s),l=iv(n,o),a=lv(v),c,u;a-- >0;)if(c=v[a],u=l(c,a,s),u)switch(r){case 0:return c;case 1:return a}return e?-1:void 0}},"createMethod$1"),qa={findLast:wn(0),findLastIndex:wn(1)},uv=P,vv=qa.findLast,fv=oe;uv({target:"Array",proto:!0},{findLast:i(function(e){return vv(this,e,arguments.length>1?arguments[1]:void 0)},"findLast")});fv("findLast");var pv=P,dv=qa.findLastIndex,gv=oe;pv({target:"Array",proto:!0},{findLastIndex:i(function(e){return dv(this,e,arguments.length>1?arguments[1]:void 0)},"findLastIndex")});gv("findLastIndex");var yv=P,$v=Ia.includes,hv=E,mv=oe,xv=hv(function(){return!Array(1).includes()});yv({target:"Array",proto:!0,forced:xv},{includes:i(function(e){return $v(this,e,arguments.length>1?arguments[1]:void 0)},"includes")});mv("includes");var bv=TypeError,Ev=9007199254740991,Xa=i(function(r){if(r>Ev)throw bv("Maximum allowed index exceeded");return r},"doesNotExceedSafeInteger$2"),Ov=P,Sv=ir,wv=dr,Iv=Xa,Tv=E,Rv=Tv(function(){return[].push.call({length:4294967296},1)!==4294967297}),Pv=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}}();Ov({target:"Array",proto:!0,arity:1,forced:Rv||Pv},{push:i(function(e){var t=Sv(this),n=wv(t),o=arguments.length;Iv(n+o);for(var s=0;s<o;s++)t[n]=arguments[s],n++;return t.length=n,n},"push")});var In=Tr,Cv=TypeError,_v=i(function(r,e){if(!delete r[e])throw Cv("Cannot delete property "+In(e)+" of "+In(r))},"deletePropertyOrThrow$1"),Av=P,jv=ir,Nv=dr,Lv=_v,Dv=Xa,Mv=[].unshift(0)!==1,Fv=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}}();Av({target:"Array",proto:!0,arity:1,forced:Mv||Fv},{unshift:i(function(e){var t=jv(this),n=Nv(t),o=arguments.length;if(o){Dv(n+o);for(var s=n;s--;){var v=s+o;s in t?t[v]=t[s]:Lv(t,v)}for(var l=0;l<o;l++)t[l]=arguments[l]}return t.length=n+o},"unshift")});var Ha=P,Gv=A,q=mt,Ya=Wa,Ye="WebAssembly",Tn=Gv[Ye],Yr=Error("e",{cause:7}).cause!==7,cr=i(function(r,e){var t={};t[r]=Ya(r,e,Yr),Ha({global:!0,constructor:!0,arity:1,forced:Yr},t)},"exportGlobalErrorCauseWrapper"),bt=i(function(r,e){if(Tn&&Tn[r]){var t={};t[r]=Ya(Ye+"."+r,e,Yr),Ha({target:Ye,stat:!0,constructor:!0,arity:1,forced:Yr},t)}},"exportWebAssemblyErrorCauseWrapper");cr("Error",function(r){return i(function(t){return q(r,this,arguments)},"Error")});cr("EvalError",function(r){return i(function(t){return q(r,this,arguments)},"EvalError")});cr("RangeError",function(r){return i(function(t){return q(r,this,arguments)},"RangeError")});cr("ReferenceError",function(r){return i(function(t){return q(r,this,arguments)},"ReferenceError")});cr("SyntaxError",function(r){return i(function(t){return q(r,this,arguments)},"SyntaxError")});cr("TypeError",function(r){return i(function(t){return q(r,this,arguments)},"TypeError")});cr("URIError",function(r){return i(function(t){return q(r,this,arguments)},"URIError")});bt("CompileError",function(r){return i(function(t){return q(r,this,arguments)},"CompileError")});bt("LinkError",function(r){return i(function(t){return q(r,this,arguments)},"LinkError")});bt("RuntimeError",function(r){return i(function(t){return q(r,this,arguments)},"RuntimeError")});var Bv=O,Uv=Bv(1 .valueOf),kv=rr,Kv=er,zv=Q,Wv=RangeError,qv=i(function(e){var t=Kv(zv(this)),n="",o=kv(e);if(o<0||o==1/0)throw Wv("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))o&1&&(n+=t);return n},"repeat"),Xv=Math.log,Hv=Math.LOG10E,Yv=Math.log10||i(function(e){return Xv(e)*Hv},"log10"),Vv=P,Et=O,Jv=rr,Zv=Uv,Qv=qv,rf=Yv,Vr=E,ef=RangeError,Rn=String,tf=isFinite,nf=Math.abs,af=Math.floor,Pn=Math.pow,of=Math.round,z=Et(1 .toExponential),cf=Et(Qv),Cn=Et("".slice),Va=z(-69e-12,4)==="-6.9000e-11"&&z(1.255,2)==="1.25e+0"&&z(12345,3)==="1.235e+4"&&z(25,0)==="3e+1",sf=Vr(function(){z(1,1/0)})&&Vr(function(){z(1,-1/0)}),lf=!Vr(function(){z(1/0,1/0)})&&!Vr(function(){z(NaN,1/0)}),uf=!Va||!sf||!lf;Vv({target:"Number",proto:!0,forced:uf},{toExponential:i(function(e){var t=Zv(this);if(e===void 0)return z(t);var n=Jv(e);if(!tf(t))return String(t);if(n<0||n>20)throw ef("Incorrect fraction digits");if(Va)return z(t,n);var o="",s="",v=0,l="",a="";if(t<0&&(o="-",t=-t),t===0)v=0,s=cf("0",n+1);else{var c=rf(t);v=af(c);var u=0,f=Pn(10,v-n);u=of(t/f),2*t>=(2*u+1)*f&&(u+=1),u>=Pn(10,n+1)&&(u/=10,v+=1),s=Rn(u)}return n!==0&&(s=Cn(s,0,1)+"."+Cn(s,1)),v===0?(l="+",a="0"):(l=v>0?"+":"-",a=Rn(nf(v))),s+="e"+l+a,o+s},"toExponential")});var vf=P,ff=F;vf({target:"Object",stat:!0},{hasOwn:ff});var Ot={},_n=Rr,pf=i(function(r){var e,t;this.promise=new r(function(n,o){if(e!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");e=n,t=o}),this.resolve=_n(e),this.reject=_n(t)},"PromiseCapability");Ot.f=function(r){return new pf(r)};var df=i(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$1"),gf=P,yf=L,$f=Rr,hf=V,mf=Ot,xf=df,bf=Ba,An="No one promise resolved";gf({target:"Promise",stat:!0},{any:i(function(e){var t=this,n=hf("AggregateError"),o=mf.f(t),s=o.resolve,v=o.reject,l=xf(function(){var a=$f(t.resolve),c=[],u=0,f=1,p=!1;bf(e,function(d){var g=u++,$=!1;f++,yf(a,t,d).then(function(b){$||p||(p=!0,s(b))},function(b){$||p||($=!0,c[g]=b,--f||v(new n(c,An)))})}),--f||v(new n(c,An))});return l.error&&v(l.value),o.promise},"any")});var Ef=A,Of=Ef.Promise,Sf=O,wf=E,Ja=T,If=ht,Tf=V,Rf=lt,Za=i(function(){},"noop"),Pf=[],Qa=Tf("Reflect","construct"),St=/^\s*(?:class|function)\b/,Cf=Sf(St.exec),_f=!St.exec(Za),hr=i(function(e){if(!Ja(e))return!1;try{return Qa(Za,Pf,e),!0}catch{return!1}},"isConstructor"),ro=i(function(e){if(!Ja(e))return!1;switch(If(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _f||!!Cf(St,Rf(e))}catch{return!0}},"isConstructor");ro.sham=!0;var Af=!Qa||wf(function(){var r;return hr(hr.call)||!hr(Object)||!hr(function(){r=!0})||r})?ro:hr,jf=Af,Nf=Tr,Lf=TypeError,Df=i(function(r){if(jf(r))return r;throw Lf(Nf(r)+" is not a constructor")},"aConstructor$1"),jn=N,Mf=Df,Ff=j,Gf=Ff("species"),eo=i(function(r,e){var t=jn(r).constructor,n;return t===void 0||(n=jn(t)[Gf])==null?e:Mf(n)},"speciesConstructor$2"),Bf=N,Uf=Y,kf=Ot,Kf=i(function(r,e){if(Bf(r),Uf(e)&&e.constructor===r)return e;var t=kf.f(r),n=t.resolve;return n(e),t.promise},"promiseResolve$1"),zf=P,Jr=Of,Wf=E,to=V,no=T,qf=eo,Nn=Kf,Xf=Pr,Ve=Jr&&Jr.prototype,Hf=!!Jr&&Wf(function(){Ve.finally.call({then:function(){}},function(){})});zf({target:"Promise",proto:!0,real:!0,forced:Hf},{finally:function(r){var e=qf(this,to("Promise")),t=no(r);return this.then(t?function(n){return Nn(e,r()).then(function(){return n})}:r,t?function(n){return Nn(e,r()).then(function(){throw n})}:r)}});if(no(Jr)){var Ln=to("Promise").prototype.finally;Ve.finally!==Ln&&Xf(Ve,"finally",Ln,{unsafe:!0})}var Yf=J.f,Vf=F,Jf=j,Dn=Jf("toStringTag"),ao=i(function(r,e,t){r&&!t&&(r=r.prototype),r&&!Vf(r,Dn)&&Yf(r,Dn,{configurable:!0,value:e})},"setToStringTag$2"),Zf=P,Qf=A,rp=ao;Zf({global:!0},{Reflect:{}});rp(Qf.Reflect,"Reflect",!0);var Mn=ct.exports,ep=J,tp=i(function(r,e,t){return t.get&&Mn(t.get,e,{getter:!0}),t.set&&Mn(t.set,e,{setter:!0}),ep.f(r,e,t)},"defineBuiltInAccessor$1"),np=N,wt=i(function(){var r=np(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),ap=A,op=W,ip=tp,cp=wt,sp=E,oo=ap.RegExp,io=oo.prototype,lp=op&&sp(function(){var r=!0;try{oo(".","d")}catch{r=!1}var e={},t="",n=r?"dgimsy":"gimsy",o=i(function(a,c){Object.defineProperty(e,a,{get:function(){return t+=c,!0}})},"addGetter"),s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(s.hasIndices="d");for(var v in s)o(v,s[v]);var l=Object.getOwnPropertyDescriptor(io,"flags").get.call(e);return l!==n||t!==n});lp&&ip(io,"flags",{configurable:!0,get:cp});var up=P,vp=O,fp=Q,pp=rr,dp=er,gp=E,yp=vp("".charAt),$p=gp(function(){return"\u{20BB7}".at(-2)!=="\uD842"});up({target:"String",proto:!0,forced:$p},{at:i(function(e){var t=dp(fp(this)),n=t.length,o=pp(e),s=o>=0?o:n+o;return s<0||s>=n?void 0:yp(t,s)},"at")});var hp=E,mp=T,Fn=Pa,xp=Pr,bp=j,Je=bp("iterator"),co=!1,or,Te,Re;[].keys&&(Re=[].keys(),"next"in Re?(Te=Fn(Fn(Re)),Te!==Object.prototype&&(or=Te)):co=!0);var Ep=or==null||hp(function(){var r={};return or[Je].call(r)!==r});Ep&&(or={});mp(or[Je])||xp(or,Je,function(){return this});var Op={IteratorPrototype:or,BUGGY_SAFARI_ITERATORS:co},Sp=Op.IteratorPrototype,wp=ae,Ip=Sr,Tp=ao,Rp=$t,Pp=i(function(){return this},"returnThis"),Cp=i(function(r,e,t,n){var o=e+" Iterator";return r.prototype=wp(Sp,{next:Ip(+!n,t)}),Tp(r,o,!1),Rp[o]=Pp,r},"createIteratorConstructor$1"),_p=Y,Ap=wr,jp=j,Np=jp("match"),so=i(function(r){var e;return _p(r)&&((e=r[Np])!==void 0?!!e:Ap(r)=="RegExp")},"isRegexp"),Lp=L,Dp=F,Mp=Ir,Fp=wt,Gn=RegExp.prototype,lo=i(function(r){var e=r.flags;return e===void 0&&!("flags"in Gn)&&!Dp(r,"flags")&&Mp(Gn,r)?Lp(Fp,r):e},"regexpGetFlags"),It=O,Gp=rr,Bp=er,Up=Q,kp=It("".charAt),Bn=It("".charCodeAt),Kp=It("".slice),Un=i(function(r){return function(e,t){var n=Bp(Up(e)),o=Gp(t),s=n.length,v,l;return o<0||o>=s?r?"":void 0:(v=Bn(n,o),v<55296||v>56319||o+1===s||(l=Bn(n,o+1))<56320||l>57343?r?kp(n,o):v:r?Kp(n,o,o+2):(v-55296<<10)+(l-56320)+65536)}},"createMethod"),zp={codeAt:Un(!1),charAt:Un(!0)},Wp=zp.charAt,uo=i(function(r,e,t){return e+(t?Wp(r,e).length:1)},"advanceStringIndex$2"),Tt=E,qp=A,Rt=qp.RegExp,Pt=Tt(function(){var r=Rt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),Xp=Pt||Tt(function(){return!Rt("a","y").sticky}),Hp=Pt||Tt(function(){var r=Rt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),Yp={BROKEN_CARET:Hp,MISSED_STICKY:Xp,UNSUPPORTED_Y:Pt},Vp=E,Jp=A,Zp=Jp.RegExp,Qp=Vp(function(){var r=Zp(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),rd=E,ed=A,td=ed.RegExp,nd=rd(function(){var r=td("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),vr=L,ie=O,ad=er,od=wt,id=Yp,cd=ne.exports,sd=ae,ld=ft.get,ud=Qp,vd=nd,fd=cd("native-string-replace",String.prototype.replace),Zr=RegExp.prototype.exec,Ze=Zr,pd=ie("".charAt),dd=ie("".indexOf),gd=ie("".replace),Pe=ie("".slice),Qe=function(){var r=/a/,e=/b*/g;return vr(Zr,r,"a"),vr(Zr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),vo=id.BROKEN_CARET,rt=/()??/.exec("")[1]!==void 0,yd=Qe||rt||vo||ud||vd;yd&&(Ze=i(function(e){var t=this,n=ld(t),o=ad(e),s=n.raw,v,l,a,c,u,f,p;if(s)return s.lastIndex=t.lastIndex,v=vr(Ze,s,o),t.lastIndex=s.lastIndex,v;var d=n.groups,g=vo&&t.sticky,$=vr(od,t),b=t.source,w=0,x=o;if(g&&($=gd($,"y",""),dd($,"g")===-1&&($+="g"),x=Pe(o,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&pd(o,t.lastIndex-1)!==`
`)&&(b="(?: "+b+")",x=" "+x,w++),l=new RegExp("^(?:"+b+")",$)),rt&&(l=new RegExp("^"+b+"$(?!\\s)",$)),Qe&&(a=t.lastIndex),c=vr(Zr,g?l:t,x),g?c?(c.input=Pe(c.input,w),c[0]=Pe(c[0],w),c.index=t.lastIndex,t.lastIndex+=c[0].length):t.lastIndex=0:Qe&&c&&(t.lastIndex=t.global?c.index+c[0].length:a),rt&&c&&c.length>1&&vr(fd,c[0],l,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(c[u]=void 0)}),c&&d)for(c.groups=f=sd(null),u=0;u<d.length;u++)p=d[u],f[p[0]]=c[p[1]];return c},"exec"));var Ct=Ze,kn=L,$d=N,hd=T,md=wr,xd=Ct,bd=TypeError,fo=i(function(r,e){var t=r.exec;if(hd(t)){var n=kn(t,r,e);return n!==null&&$d(n),n}if(md(r)==="RegExp")return kn(xd,r,e);throw bd("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),Ed=P,Od=L,po=O,Sd=Cp,Kn=Q,go=pt,Er=er,wd=N,Id=wr,Td=so,yo=lo,Rd=fr,Pd=Pr,Cd=E,_d=j,Ad=eo,jd=uo,Nd=fo,$o=ft,Ld=hi,Qr=_d("matchAll"),ho="RegExp String",mo=ho+" Iterator",Dd=$o.set,Md=$o.getterFor(mo),zn=RegExp.prototype,Fd=TypeError,et=po("".indexOf),re=po("".matchAll),Ce=!!re&&!Cd(function(){re("a",/./)}),Gd=Sd(i(function(e,t,n,o){Dd(this,{type:mo,regexp:e,string:t,global:n,unicode:o,done:!1})},"RegExpStringIterator"),ho,i(function(){var e=Md(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=Nd(t,n);return o===null?{value:void 0,done:e.done=!0}:e.global?(Er(o[0])===""&&(t.lastIndex=jd(n,go(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})},"next")),xo=i(function(r){var e=wd(this),t=Er(r),n=Ad(e,RegExp),o=Er(yo(e)),s,v,l;return s=new n(n===RegExp?e.source:e,o),v=!!~et(o,"g"),l=!!~et(o,"u"),s.lastIndex=go(e.lastIndex),new Gd(s,t,v,l)},"$matchAll");Ed({target:"String",proto:!0,forced:Ce},{matchAll:i(function(e){var t=Kn(this),n,o,s,v;if(e!=null){if(Td(e)&&(n=Er(Kn(yo(e))),!~et(n,"g")))throw Fd("`.matchAll` does not allow non-global regexes");if(Ce)return re(t,e);if(s=Rd(e,Qr),s===void 0&&Ld&&Id(e)=="RegExp"&&(s=xo),s)return Od(s,e,t)}else if(Ce)return re(t,e);return o=Er(t),v=new RegExp(e,"g"),v[Qr](o)},"matchAll")});Qr in zn||Pd(zn,Qr,xo);var Bd=P,Wn=Ct;Bd({target:"RegExp",proto:!0,forced:/./.exec!==Wn},{exec:Wn});var qn=O,Xn=Pr,Ud=Ct,Hn=E,bo=j,kd=pr,Kd=bo("species"),_e=RegExp.prototype,zd=i(function(r,e,t,n){var o=bo(r),s=!Hn(function(){var c={};return c[o]=function(){return 7},""[r](c)!=7}),v=s&&!Hn(function(){var c=!1,u=/a/;return r==="split"&&(u={},u.constructor={},u.constructor[Kd]=function(){return u},u.flags="",u[o]=/./[o]),u.exec=function(){return c=!0,null},u[o](""),!c});if(!s||!v||t){var l=qn(/./[o]),a=e(o,""[r],function(c,u,f,p,d){var g=qn(c),$=u.exec;return $===Ud||$===_e.exec?s&&!d?{done:!0,value:l(u,f,p)}:{done:!0,value:g(f,u,p)}:{done:!1}});Xn(String.prototype,r,a[0]),Xn(_e,o,a[1])}n&&kd(_e[o],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),_t=O,Wd=ir,qd=Math.floor,Ae=_t("".charAt),Xd=_t("".replace),je=_t("".slice),Hd=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Yd=/\$([$&'`]|\d{1,2})/g,Eo=i(function(r,e,t,n,o,s){var v=t+r.length,l=n.length,a=Yd;return o!==void 0&&(o=Wd(o),a=Hd),Xd(s,a,function(c,u){var f;switch(Ae(u,0)){case"$":return"$";case"&":return r;case"`":return je(e,0,t);case"'":return je(e,v);case"<":f=o[je(u,1,-1)];break;default:var p=+u;if(p===0)return c;if(p>l){var d=qd(p/10);return d===0?c:d<=l?n[d-1]===void 0?Ae(u,1):n[d-1]+Ae(u,1):c}f=n[p-1]}return f===void 0?"":f})},"getSubstitution$2"),Vd=mt,Yn=L,ce=O,Jd=zd,Zd=E,Qd=N,rg=T,eg=rr,tg=pt,ur=er,ng=Q,ag=uo,og=fr,ig=Eo,cg=fo,sg=j,tt=sg("replace"),lg=Math.max,ug=Math.min,vg=ce([].concat),Ne=ce([].push),Vn=ce("".indexOf),Jn=ce("".slice),fg=i(function(r){return r===void 0?r:String(r)},"maybeToString"),pg=function(){return"a".replace(/./,"$0")==="$0"}(),Zn=function(){return/./[tt]?/./[tt]("a","$0")==="":!1}(),dg=!Zd(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Jd("replace",function(r,e,t){var n=Zn?"$":"$0";return[i(function(s,v){var l=ng(this),a=s==null?void 0:og(s,tt);return a?Yn(a,s,l,v):Yn(e,ur(l),s,v)},"replace"),function(o,s){var v=Qd(this),l=ur(o);if(typeof s=="string"&&Vn(s,n)===-1&&Vn(s,"$<")===-1){var a=t(e,v,l,s);if(a.done)return a.value}var c=rg(s);c||(s=ur(s));var u=v.global;if(u){var f=v.unicode;v.lastIndex=0}for(var p=[];;){var d=cg(v,l);if(d===null||(Ne(p,d),!u))break;var g=ur(d[0]);g===""&&(v.lastIndex=ag(l,tg(v.lastIndex),f))}for(var $="",b=0,w=0;w<p.length;w++){d=p[w];for(var x=ur(d[0]),G=lg(ug(eg(d.index),l.length),0),h=[],m=1;m<d.length;m++)Ne(h,fg(d[m]));var R=d.groups;if(c){var I=vg([x],h,G,l);R!==void 0&&Ne(I,R);var S=ur(Vd(s,void 0,I))}else S=ig(x,l,G,h,R,s);G>=b&&($+=Jn(l,b,G)+S,b=G+x.length)}return $+Jn(l,b)}]},!dg||!pg||Zn);var gg=P,yg=L,At=O,Qn=Q,$g=T,hg=so,mr=er,mg=fr,xg=lo,bg=Eo,Eg=j,Og=Eg("replace"),Sg=TypeError,Oo=At("".indexOf);At("".replace);var ra=At("".slice),wg=Math.max,ea=i(function(r,e,t){return t>r.length?-1:e===""?t:Oo(r,e,t)},"stringIndexOf");gg({target:"String",proto:!0},{replaceAll:i(function(e,t){var n=Qn(this),o,s,v,l,a,c,u,f,p,d=0,g=0,$="";if(e!=null){if(o=hg(e),o&&(s=mr(Qn(xg(e))),!~Oo(s,"g")))throw Sg("`.replaceAll` does not allow non-global regexes");if(v=mg(e,Og),v)return yg(v,e,n,t)}for(l=mr(n),a=mr(e),c=$g(t),c||(t=mr(t)),u=a.length,f=wg(1,u),d=ea(l,a,0);d!==-1;)p=c?mr(t(a,d,l)):bg(a,l,d,[],void 0,t),$+=ra(l,g,d)+p,g=d+u,d=ea(l,a,d+f);return g<l.length&&($+=ra(l,g)),$},"replaceAll")});var Fr,Ig=new Uint8Array(16);function Tg(){if(!Fr&&(Fr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Fr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fr(Ig)}i(Tg,"rng");const Rg=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Pg(r){return typeof r=="string"&&Rg.test(r)}i(Pg,"validate");var C=[];for(var Le=0;Le<256;++Le)C.push((Le+256).toString(16).substr(1));function Cg(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(C[r[e+0]]+C[r[e+1]]+C[r[e+2]]+C[r[e+3]]+"-"+C[r[e+4]]+C[r[e+5]]+"-"+C[r[e+6]]+C[r[e+7]]+"-"+C[r[e+8]]+C[r[e+9]]+"-"+C[r[e+10]]+C[r[e+11]]+C[r[e+12]]+C[r[e+13]]+C[r[e+14]]+C[r[e+15]]).toLowerCase();if(!Pg(t))throw TypeError("Stringified UUID is invalid");return t}i(Cg,"stringify");function _g(r,e,t){r=r||{};var n=r.random||(r.rng||Tg)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=n[o];return e}return Cg(n)}i(_g,"v4");const Ag=i(r=>(Object.assign(r,{appendTo(e){r.element,e.append(r.element)},dispose(){r.dispose?r.dispose():(r.element,r.element.remove())}}),r),"Component"),jg=i((r,e)=>{const t={clear(){return e.transform.baseVal.clear(),t},translate(n,o){const s=r.createSVGTransform();return s.setTranslate(n,o),e.transform.baseVal.appendItem(s),t},scale(n,o=n){const s=r.createSVGTransform();return s.setScale(n,o),e.transform.baseVal.appendItem(s),t},rotate(n,o=0,s=0){console.log(n);const v=r.createSVGTransform();return v.setRotate(n,o,s),e.transform.baseVal.appendItem(v),t}};return t},"Transform"),gr=i(r=>(Ag(r),Object.assign(r,{appendDefTo(e){r.element,e.append(r.element)},transformWith(e){return r.element,jg(e,r.element)}}),r),"SvgComponent"),U=i((r,...e)=>{const t=[],n={};for(let v=0;v<r.length-1;v++){t.push(r[v]);const l=e[v];if(l.element instanceof Element){const a=`__placeholder__${v}`;n[a]=l.element,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Element){const a=`__placeholder__${v}`;n[a]=l,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(l instanceof Array)for(const[a,c]of l.entries()){const u=`__placeholder__${v}_${a}`;if(c.element instanceof Element)n[u]=c.element;else if(c instanceof Element)n[u]=c;else throw new Error(`expected element but got ${c}`);t.push(`<placeholder-element id="${u}"></placeholder-element>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElement("template");o.insertAdjacentHTML("beforeend",t.join(""));const s=o.firstElementChild;for(const[v,l]of Object.entries(n)){const a=s.querySelector(`placeholder-element#${v}`);a.parentNode.replaceChild(l,a)}return s},"html"),_=i((r,...e)=>{const t=[],n={};for(let v=0;v<r.length-1;v++){t.push(r[v]);const l=e[v];if(l.element instanceof Element){const a=`__placeholder__${v}`;n[a]=l.element,t.push(`<g id="${a}"></g>`)}else if(l instanceof Element){const a=`__placeholder__${v}`;n[a]=l,t.push(`<g id="${a}"></g>`)}else if(l instanceof Array)for(const[a,c]of l.entries()){const u=`__placeholder__${v}_${a}`;if(c.element instanceof Element)n[u]=c.element;else if(c instanceof Element)n[u]=c;else throw new Error(`expected element but got ${c}`);t.push(`<g id="${u}"></g>`)}else t.push(l)}t.push(r.at(-1));const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.insertAdjacentHTML("beforeend",t.join(""));const s=o.firstElementChild;for(const[v,l]of Object.entries(n)){const a=s.querySelector(`g#${v}`);a.parentNode.replaceChild(l,a)}return s},"svg"),So=Symbol("celly"),y=Math.sqrt(3)/2,wo=i(()=>{const r=_`<path
		d="
    m ${-y} -0.5
    l  ${y} -0.5
    l  ${y}  0.5
    l 0                   1
    l ${-y}  0.5
    l ${-y} -0.5
    z
  "
	/>`;return gr({element:r})},"Hexagon"),Ng=i(()=>{const r=document.createElementNS("http://www.w3.org/2000/svg","g");return gr({element:r})},"G"),Lg=i(r=>r[So],"isCell"),Dg=i((r,e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","g");for(const l of Object.values(e)){Object.assign(l.element,{[So]:!0,cell:l});const a=Ng(),{coordinate:{q:c,r:u}}=l,f=2*y*c+y*u,p=3/2*u;a.transformWith(r).translate(f,p),l.appendTo(a.element),a.appendTo(n)}let o;const s=1,v=2;return n.addEventListener("contextmenu",l=>l.preventDefault()),n.addEventListener("pointerdown",l=>{o=l.buttons}),n.addEventListener("pointerup",l=>{if(![s,v].includes(o))return;const a=o===s?"clockwise":"counter-clockwise";for(const c of l.composedPath())if(Lg(c))return t(c.cell,a)}),gr({element:n,cells:e})},"Grid"),Mg=i(([r,e])=>{const t=_`<svg
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
	</svg>`;return gr({element:t})},"Main"),ta=[0,60,120,180,240,300];function na(r){if(!ta.includes(r))throw new Error(`expected one of Orientation [${ta.join(", ")}] but got ${r}`)}i(na,"assertOrientation");const Fg=i((r,e)=>{switch(e){case 32:{const t=wo();return t.transformWith(r).scale(.25),t.element.classList.add("end"),_`<g>
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
			</g>`;default:throw new Error(`unhandled connection ${e.toString(2)}`)}},"EdgeElement"),Gg=i((r,e)=>{const t=Fg(r,e);return gr({element:t})},"Edge"),De={},Bg=i((r,e,t,n)=>{if(!De[n]){const s=Gg(r,n);De[n]=_`<g class="cell">${wo()}${s}</g>`}const o=De[n].cloneNode(!0);return o.classList.add(`rotate${t}`),gr({element:o,orientation:t,connection:n,valid:!1,coordinate:e,rotateClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateClockwise${t}`),o.classList.remove(`rotateCounterClockwise${t}`);let s=t;return s+=60,s%=360,na(s),t=s,o.classList.add(`rotate${t}`),o.classList.add(`rotateClockwise${t}`),t},rotateCounterClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateClockwise${t}`),o.classList.remove(`rotateCounterClockwise${t}`);let s=t;return s===0?s=300:(s-=60,s%=360),na(s),t=s,o.classList.add(`rotate${t}`),o.classList.add(`rotateCounterClockwise${t}`),t}})},"Cell");var Io={exports:{}};(function(r){(function(e,t,n){function o(a){var c=this,u=l();c.next=function(){var f=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=f|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(a),c.s0<0&&(c.s0+=1),c.s1-=u(a),c.s1<0&&(c.s1+=1),c.s2-=u(a),c.s2<0&&(c.s2+=1),u=null}i(o,"Alea");function s(a,c){return c.c=a.c,c.s0=a.s0,c.s1=a.s1,c.s2=a.s2,c}i(s,"copy");function v(a,c){var u=new o(a),f=c&&c.state,p=u.next;return p.int32=function(){return u.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,f&&(typeof f=="object"&&s(f,u),p.state=function(){return s(u,{})}),p}i(v,"impl");function l(){var a=4022871197,c=i(function(u){u=String(u);for(var f=0;f<u.length;f++){a+=u.charCodeAt(f);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26},"mash");return c}i(l,"Mash"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.alea=v})(H,r,!1)})(Io);var To={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,c="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var f=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^f^f>>>8},l===(l|0)?a.x=l:c+=l;for(var u=0;u<c.length+64;u++)a.x^=c.charCodeAt(u)|0,a.next()}i(o,"XorGen");function s(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a}i(s,"copy");function v(l,a){var c=new o(l),u=a&&a.state,f=i(function(){return(c.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=c.next()>>>11,d=(c.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},f.int32=c.next,f.quick=f,u&&(typeof u=="object"&&s(u,c),f.state=function(){return s(c,{})}),f}i(v,"impl"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.xor128=v})(H,r,!1)})(To);var Ro={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,c="";a.next=function(){var f=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(f^f<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,l===(l|0)?a.x=l:c+=l;for(var u=0;u<c.length+64;u++)a.x^=c.charCodeAt(u)|0,u==c.length&&(a.d=a.x<<10^a.x>>>4),a.next()}i(o,"XorGen");function s(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a.v=l.v,a.d=l.d,a}i(s,"copy");function v(l,a){var c=new o(l),u=a&&a.state,f=i(function(){return(c.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=c.next()>>>11,d=(c.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},f.int32=c.next,f.quick=f,u&&(typeof u=="object"&&s(u,c),f.state=function(){return s(c,{})}),f}i(v,"impl"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.xorwow=v})(H,r,!1)})(Ro);var Po={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var u=a.x,f=a.i,p,d;return p=u[f],p^=p>>>7,d=p^p<<24,p=u[f+1&7],d^=p^p>>>10,p=u[f+3&7],d^=p^p>>>3,p=u[f+4&7],d^=p^p<<7,p=u[f+7&7],p=p^p<<13,d^=p^p<<9,u[f]=d,a.i=f+1&7,d};function c(u,f){var p,d=[];if(f===(f|0))d[0]=f;else for(f=""+f,p=0;p<f.length;++p)d[p&7]=d[p&7]<<15^f.charCodeAt(p)+d[p+1&7]<<13;for(;d.length<8;)d.push(0);for(p=0;p<8&&d[p]===0;++p);for(p==8?d[7]=-1:d[p],u.x=d,u.i=0,p=256;p>0;--p)u.next()}i(c,"init"),c(a,l)}i(o,"XorGen");function s(l,a){return a.x=l.x.slice(),a.i=l.i,a}i(s,"copy");function v(l,a){l==null&&(l=+new Date);var c=new o(l),u=a&&a.state,f=i(function(){return(c.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=c.next()>>>11,d=(c.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},f.int32=c.next,f.quick=f,u&&(u.x&&s(u,c),f.state=function(){return s(c,{})}),f}i(v,"impl"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.xorshift7=v})(H,r,!1)})(Po);var Co={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this;a.next=function(){var u=a.w,f=a.X,p=a.i,d,g;return a.w=u=u+1640531527|0,g=f[p+34&127],d=f[p=p+1&127],g^=g<<13,d^=d<<17,g^=g>>>15,d^=d>>>12,g=f[p]=g^d,a.i=p,g+(u^u>>>16)|0};function c(u,f){var p,d,g,$,b,w=[],x=128;for(f===(f|0)?(d=f,f=null):(f=f+"\0",d=0,x=Math.max(x,f.length)),g=0,$=-32;$<x;++$)f&&(d^=f.charCodeAt(($+32)%f.length)),$===0&&(b=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,$>=0&&(b=b+1640531527|0,p=w[$&127]^=d+b,g=p==0?g+1:0);for(g>=128&&(w[(f&&f.length||0)&127]=-1),g=127,$=4*128;$>0;--$)d=w[g+34&127],p=w[g=g+1&127],d^=d<<13,p^=p<<17,d^=d>>>15,p^=p>>>12,w[g]=d^p;u.w=b,u.X=w,u.i=g}i(c,"init"),c(a,l)}i(o,"XorGen");function s(l,a){return a.i=l.i,a.w=l.w,a.X=l.X.slice(),a}i(s,"copy");function v(l,a){l==null&&(l=+new Date);var c=new o(l),u=a&&a.state,f=i(function(){return(c.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=c.next()>>>11,d=(c.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},f.int32=c.next,f.quick=f,u&&(u.X&&s(u,c),f.state=function(){return s(c,{})}),f}i(v,"impl"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.xor4096=v})(H,r,!1)})(Co);var _o={exports:{}};(function(r){(function(e,t,n){function o(l){var a=this,c="";a.next=function(){var f=a.b,p=a.c,d=a.d,g=a.a;return f=f<<25^f>>>7^p,p=p-d|0,d=d<<24^d>>>8^g,g=g-f|0,a.b=f=f<<20^f>>>12^p,a.c=p=p-d|0,a.d=d<<16^p>>>16^g,a.a=g-f|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,l===Math.floor(l)?(a.a=l/4294967296|0,a.b=l|0):c+=l;for(var u=0;u<c.length+20;u++)a.b^=c.charCodeAt(u)|0,a.next()}i(o,"XorGen");function s(l,a){return a.a=l.a,a.b=l.b,a.c=l.c,a.d=l.d,a}i(s,"copy");function v(l,a){var c=new o(l),u=a&&a.state,f=i(function(){return(c.next()>>>0)/4294967296},"prng");return f.double=function(){do var p=c.next()>>>11,d=(c.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},f.int32=c.next,f.quick=f,u&&(typeof u=="object"&&s(u,c),f.state=function(){return s(c,{})}),f}i(v,"impl"),t&&t.exports?t.exports=v:n&&n.amd?n(function(){return v}):this.tychei=v})(H,r,!1)})(_o);var Ao={exports:{}};const Ug={},kg=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),Kg=Lo(kg);(function(r){(function(e,t,n){var o=256,s=6,v=52,l="random",a=n.pow(o,s),c=n.pow(2,v),u=c*2,f=o-1,p;function d(h,m,R){var I=[];m=m==!0?{entropy:!0}:m||{};var S=w(b(m.entropy?[h,G(t)]:h==null?x():h,3),I),D=new g(I),B=i(function(){for(var M=D.g(s),X=a,K=0;M<c;)M=(M+K)*o,X*=o,K=D.g(1);for(;M>=u;)M/=2,X/=2,K>>>=1;return(M+K)/X},"prng");return B.int32=function(){return D.g(4)|0},B.quick=function(){return D.g(4)/4294967296},B.double=B,w(G(D.S),t),(m.pass||R||function(M,X,K,Z){return Z&&(Z.S&&$(Z,D),M.state=function(){return $(D,{})}),K?(n[l]=M,X):M})(B,S,"global"in m?m.global:this==n,m.state)}i(d,"seedrandom");function g(h){var m,R=h.length,I=this,S=0,D=I.i=I.j=0,B=I.S=[];for(R||(h=[R++]);S<o;)B[S]=S++;for(S=0;S<o;S++)B[S]=B[D=f&D+h[S%R]+(m=B[S])],B[D]=m;(I.g=function(M){for(var X,K=0,Z=I.i,_r=I.j,$r=I.S;M--;)X=$r[Z=f&Z+1],K=K*o+$r[f&($r[Z]=$r[_r=f&_r+X])+($r[_r]=X)];return I.i=Z,I.j=_r,K})(o)}i(g,"ARC4");function $(h,m){return m.i=h.i,m.j=h.j,m.S=h.S.slice(),m}i($,"copy");function b(h,m){var R=[],I=typeof h,S;if(m&&I=="object")for(S in h)try{R.push(b(h[S],m-1))}catch{}return R.length?R:I=="string"?h:h+"\0"}i(b,"flatten");function w(h,m){for(var R=h+"",I,S=0;S<R.length;)m[f&S]=f&(I^=m[f&S]*19)+R.charCodeAt(S++);return G(m)}i(w,"mixkey");function x(){try{var h;return p&&(h=p.randomBytes)?h=h(o):(h=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(h)),G(h)}catch{var m=e.navigator,R=m&&m.plugins;return[+new Date,e,R,e.screen,G(t)]}}i(x,"autoseed");function G(h){return String.fromCharCode.apply(0,h)}if(i(G,"tostring"),w(n.random(),t),r.exports){r.exports=d;try{p=Kg}catch{}}else n["seed"+l]=d})(typeof self<"u"?self:H,[],Math)})(Ao);var zg=Io.exports,Wg=To.exports,qg=Ro.exports,Xg=Po.exports,Hg=Co.exports,Yg=_o.exports,yr=Ao.exports;yr.alea=zg;yr.xor128=Wg;yr.xorwow=qg;yr.xorshift7=Xg;yr.xor4096=Hg;yr.tychei=Yg;const Vg=["prims","wilsons"],Jg=i(r=>Vg.includes(r),"validMode"),Zg=i(()=>{const r=new Worker("/hexpanse/assets/worker.4219743c.js",{type:"module"}),e=i(n=>{r.postMessage(n)},"message"),t={restore(n){e({type:"restore",config:n})},updateCell(n,o){e({type:"update cell",coordinate:n,orientation:o})},onRestored(){throw new Error("missing onRestored")},onColoring(){throw new Error("missing onColoring")},onGameOver(){throw new Error("missing onGameOver")}};return r.onmessage=({data:n})=>{switch(n.type){case"restored":return t.onRestored(n.config,n.state);case"coloring":return t.onColoring(n.colors);case"game over":return t.onGameOver()}},t},"SaveWorker"),Or=Zg(),jt=1e3,nt=jt*y,nr=Mg([jt,nt]);nr.element.onclick=r=>{r.preventDefault()};let Kr;const aa={};let Me=Date.now();Or.onRestored=({size:r,mode:e},t)=>{let n=0;for(const[c,{coordinate:u,orientation:f,connection:p}]of Object.entries(t))aa[c]=Bg(nr.element,u,f,p),[56,44,52,42].includes(p)&&(n+=1),[60,46,54].includes(p)&&(n+=2),[62].includes(p)&&(n+=3),[63].includes(p)&&(n+=4);const o=U`<p>Generated ${Math.ceil(Date.now()-Me)}ms</p>`;Me=Date.now(),Kr=Dg(nr.element,aa,(c,u)=>{if(jo)return;const f=u==="clockwise"?c.rotateClockwise():c.rotateCounterClockwise();Or.updateCell(c.coordinate,f)}),Kr.transformWith(nr.element).translate(jt/2,nt/2).scale(nt/(r*3+2)),Kr.appendTo(nr.element),document.body.append(U`<main>${nr}</main>`);const s=U`<p>Rendered ${Math.ceil(Date.now()-Me)}ms</p>`,v=U`<button>New game</button>`;v.onclick=c=>{c.preventDefault();const u=document.getElementById("new-game-form"),{size:f,mode:p}=Object.fromEntries(new FormData(u).entries()),d=`./?${new URLSearchParams({size:f,mode:p}).toString()}`;console.log(d),window.location.href=d},document.body.append(U`<h2>Game settings</h2>`,U`<form id="new-game-form">
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
			${v}
		</form>`,U`<h2>About</h2>`,o,s,U`<p>${n} branches</p>`,U`<p>
			Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a>
		</p>`,U`<p>
			Source code:
			<a href="https://github.com/Pyrolistical/hexpanse"
				>https://github.com/Pyrolistical/hexpanse</a
			>
		</p>`,U`<p>
			Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
		</p>`);const l=document.querySelector(`#new-game-form input[name="size"][value="${r}"]`);l.checked=!0;const a=document.querySelector(`#new-game-form input[name="mode"][value="${e}"]`);a.checked=!0};Or.onColoring=r=>{for(const[e,t]of Object.entries(r))for(const n of t)Kr.cells[n].element.dataset.color=e};let jo=!1;Or.onGameOver=()=>{jo=!0,nr.element.classList.add("game-over")};const Qg=i(()=>{var s,v;window.location.hash===""&&history.replaceState(void 0,"","#");const r=new URLSearchParams(window.location.search),e=(s=r.get("seed"))!=null?s:_g(),t=Number.parseInt((v=r.get("size"))!=null?v:"5"),n=r.get("mode"),o={seed:e,size:t,mode:Jg(n)?n:"wilsons"};return history.replaceState(void 0,"",`?${new URLSearchParams({...o,size:String(t)}).toString()}`),o},"loadConfig"),ry=Qg();Or.restore(ry);
