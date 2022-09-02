var No=Object.defineProperty;var s=(r,e)=>No(r,"name",{value:e,configurable:!0});s(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}s(t,"getFetchOpts");function n(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}s(n,"processPreload")},"polyfill")();var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Lo(r){var e=r.default;if(typeof e=="function"){var t=s(function(){return e.apply(this,arguments)},"a");t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var o=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return r[n]}})}),t}s(Lo,"getAugmentedNamespace");var jr=s(function(r){return r&&r.Math==Math&&r},"check"),D=jr(typeof globalThis=="object"&&globalThis)||jr(typeof window=="object"&&window)||jr(typeof self=="object"&&self)||jr(typeof H=="object"&&H)||function(){return this}()||Function("return this")(),at={},O=s(function(r){try{return!!r()}catch{return!0}},"fails$p"),Do=O,z=!Do(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Mo=O,ee=!Mo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Fo=ee,Nr=Function.prototype.call,B=Fo?Nr.bind(Nr):function(){return Nr.apply(Nr,arguments)},oa={},ia={}.propertyIsEnumerable,sa=Object.getOwnPropertyDescriptor,Go=sa&&!ia.call({1:2},1);oa.f=Go?s(function(e){var t=sa(this,e);return!!t&&t.enumerable},"propertyIsEnumerable"):ia;var Sr=s(function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},"createPropertyDescriptor$5"),ca=ee,la=Function.prototype,Bo=la.bind,Fe=la.call,ko=ca&&Bo.bind(Fe,Fe),R=ca?function(r){return r&&ko(r)}:function(r){return r&&function(){return Fe.apply(r,arguments)}},ua=R,Uo=ua({}.toString),Ko=ua("".slice),Ir=s(function(r){return Ko(Uo(r),8,-1)},"classofRaw$1"),qo=R,Wo=O,zo=Ir,ce=Object,Xo=qo("".split),va=Wo(function(){return!ce("z").propertyIsEnumerable(0)})?function(r){return zo(r)=="String"?Xo(r,""):ce(r)}:ce,Ho=TypeError,Q=s(function(r){if(r==null)throw Ho("Can't call method on "+r);return r},"requireObjectCoercible$8"),Yo=va,Vo=Q,te=s(function(r){return Yo(Vo(r))},"toIndexedObject$4"),C=s(function(r){return typeof r=="function"},"isCallable$k"),Jo=C,Y=s(function(r){return typeof r=="object"?r!==null:Jo(r)},"isObject$9"),le=D,Zo=C,Qo=s(function(r){return Zo(r)?r:void 0},"aFunction"),V=s(function(r,e){return arguments.length<2?Qo(le[r]):le[r]&&le[r][e]},"getBuiltIn$9"),ri=R,Tr=ri({}.isPrototypeOf),ei=V,ti=ei("navigator","userAgent")||"",fa=D,ue=ti,Nt=fa.process,Lt=fa.Deno,Dt=Nt&&Nt.versions||Lt&&Lt.version,Mt=Dt&&Dt.v8,K,qr;Mt&&(K=Mt.split("."),qr=K[0]>0&&K[0]<4?1:+(K[0]+K[1]));!qr&&ue&&(K=ue.match(/Edge\/(\d+)/),(!K||K[1]>=74)&&(K=ue.match(/Chrome\/(\d+)/),K&&(qr=+K[1])));var ni=qr,Ft=ni,ai=O,pa=!!Object.getOwnPropertySymbols&&!ai(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Ft&&Ft<41}),oi=pa,da=oi&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ii=V,si=C,ci=Tr,li=da,ui=Object,ga=li?function(r){return typeof r=="symbol"}:function(r){var e=ii("Symbol");return si(e)&&ci(e.prototype,ui(r))},vi=String,Rr=s(function(r){try{return vi(r)}catch{return"Object"}},"tryToString$5"),fi=C,pi=Rr,di=TypeError,Pr=s(function(r){if(fi(r))return r;throw di(pi(r)+" is not a function")},"aCallable$5"),gi=Pr,fr=s(function(r,e){var t=r[e];return t==null?void 0:gi(t)},"getMethod$6"),ve=B,fe=C,pe=Y,yi=TypeError,$i=s(function(r,e){var t,n;if(e==="string"&&fe(t=r.toString)&&!pe(n=ve(t,r))||fe(t=r.valueOf)&&!pe(n=ve(t,r))||e!=="string"&&fe(t=r.toString)&&!pe(n=ve(t,r)))return n;throw yi("Can't convert object to primitive value")},"ordinaryToPrimitive$1"),ne={exports:{}},hi=!1,Gt=D,mi=Object.defineProperty,ot=s(function(r,e){try{mi(Gt,r,{value:e,configurable:!0,writable:!0})}catch{Gt[r]=e}return e},"defineGlobalProperty$3"),xi=D,bi=ot,Bt="__core-js_shared__",Ei=xi[Bt]||bi(Bt,{}),it=Ei,kt=it;(ne.exports=function(r,e){return kt[r]||(kt[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.24.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"});var wi=Q,Oi=Object,ir=s(function(r){return Oi(wi(r))},"toObject$7"),Si=R,Ii=ir,Ti=Si({}.hasOwnProperty),k=Object.hasOwn||s(function(e,t){return Ti(Ii(e),t)},"hasOwn"),Ri=R,Pi=0,Ci=Math.random(),_i=Ri(1 .toString),ya=s(function(r){return"Symbol("+(r===void 0?"":r)+")_"+_i(++Pi+Ci,36)},"uid$2"),Ai=D,ji=ne.exports,Ut=k,Ni=ya,Kt=pa,$a=da,cr=ji("wks"),ar=Ai.Symbol,qt=ar&&ar.for,Li=$a?ar:ar&&ar.withoutSetter||Ni,M=s(function(r){if(!Ut(cr,r)||!(Kt||typeof cr[r]=="string")){var e="Symbol."+r;Kt&&Ut(ar,r)?cr[r]=ar[r]:$a&&qt?cr[r]=qt(e):cr[r]=Li(e)}return cr[r]},"wellKnownSymbol$f"),Di=B,Wt=Y,zt=ga,Mi=fr,Fi=$i,Gi=M,Bi=TypeError,ki=Gi("toPrimitive"),Ui=s(function(r,e){if(!Wt(r)||zt(r))return r;var t=Mi(r,ki),n;if(t){if(e===void 0&&(e="default"),n=Di(t,r,e),!Wt(n)||zt(n))return n;throw Bi("Can't convert object to primitive value")}return e===void 0&&(e="number"),Fi(r,e)},"toPrimitive$1"),Ki=Ui,qi=ga,ha=s(function(r){var e=Ki(r,"string");return qi(e)?e:e+""},"toPropertyKey$2"),Wi=D,Xt=Y,Ge=Wi.document,zi=Xt(Ge)&&Xt(Ge.createElement),ma=s(function(r){return zi?Ge.createElement(r):{}},"documentCreateElement$1"),Xi=z,Hi=O,Yi=ma,xa=!Xi&&!Hi(function(){return Object.defineProperty(Yi("div"),"a",{get:function(){return 7}}).a!=7}),Vi=z,Ji=B,Zi=oa,Qi=Sr,rs=te,es=ha,ts=k,ns=xa,Ht=Object.getOwnPropertyDescriptor;at.f=Vi?Ht:s(function(e,t){if(e=rs(e),t=es(t),ns)try{return Ht(e,t)}catch{}if(ts(e,t))return Qi(!Ji(Zi.f,e,t),e[t])},"getOwnPropertyDescriptor");var J={},as=z,os=O,ba=as&&os(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),is=Y,ss=String,cs=TypeError,G=s(function(r){if(is(r))return r;throw cs(ss(r)+" is not an object")},"anObject$e"),ls=z,us=xa,vs=ba,Lr=G,Yt=ha,fs=TypeError,de=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,ge="enumerable",ye="configurable",$e="writable";J.f=ls?vs?s(function(e,t,n){if(Lr(e),t=Yt(t),Lr(n),typeof e=="function"&&t==="prototype"&&"value"in n&&$e in n&&!n[$e]){var o=ps(e,t);o&&o[$e]&&(e[t]=n.value,n={configurable:ye in n?n[ye]:o[ye],enumerable:ge in n?n[ge]:o[ge],writable:!1})}return de(e,t,n)},"defineProperty"):de:s(function(e,t,n){if(Lr(e),t=Yt(t),Lr(n),us)try{return de(e,t,n)}catch{}if("get"in n||"set"in n)throw fs("Accessors not supported");return"value"in n&&(e[t]=n.value),e},"defineProperty");var ds=z,gs=J,ys=Sr,pr=ds?function(r,e,t){return gs.f(r,e,ys(1,t))}:function(r,e,t){return r[e]=t,r},st={exports:{}},Be=z,$s=k,Ea=Function.prototype,hs=Be&&Object.getOwnPropertyDescriptor,ct=$s(Ea,"name"),ms=ct&&s(function(){},"something").name==="something",xs=ct&&(!Be||Be&&hs(Ea,"name").configurable),bs={EXISTS:ct,PROPER:ms,CONFIGURABLE:xs},Es=R,ws=C,ke=it,Os=Es(Function.toString);ws(ke.inspectSource)||(ke.inspectSource=function(r){return Os(r)});var lt=ke.inspectSource,Ss=D,Is=C,Ts=lt,Vt=Ss.WeakMap,Rs=Is(Vt)&&/native code/.test(Ts(Vt)),Ps=ne.exports,Cs=ya,Jt=Ps("keys"),ut=s(function(r){return Jt[r]||(Jt[r]=Cs(r))},"sharedKey$3"),vt={},_s=Rs,wa=D,he=R,As=Y,js=pr,me=k,xe=it,Ns=ut,Ls=vt,Zt="Object already initialized",Ue=wa.TypeError,Ds=wa.WeakMap,Wr,br,zr,Ms=s(function(r){return zr(r)?br(r):Wr(r,{})},"enforce"),Fs=s(function(r){return function(e){var t;if(!As(e)||(t=br(e)).type!==r)throw Ue("Incompatible receiver, "+r+" required");return t}},"getterFor");if(_s||xe.state){var tr=xe.state||(xe.state=new Ds),Gs=he(tr.get),Qt=he(tr.has),Bs=he(tr.set);Wr=s(function(r,e){if(Qt(tr,r))throw new Ue(Zt);return e.facade=r,Bs(tr,r,e),e},"set"),br=s(function(r){return Gs(tr,r)||{}},"get"),zr=s(function(r){return Qt(tr,r)},"has")}else{var lr=Ns("state");Ls[lr]=!0,Wr=s(function(r,e){if(me(r,lr))throw new Ue(Zt);return e.facade=r,js(r,lr,e),e},"set"),br=s(function(r){return me(r,lr)?r[lr]:{}},"get"),zr=s(function(r){return me(r,lr)},"has")}var ft={set:Wr,get:br,has:zr,enforce:Ms,getterFor:Fs},ks=O,Us=C,Dr=k,Ke=z,Ks=bs.CONFIGURABLE,qs=lt,Oa=ft,Ws=Oa.enforce,zs=Oa.get,Br=Object.defineProperty,Xs=Ke&&!ks(function(){return Br(function(){},"length",{value:8}).length!==8}),Hs=String(String).split("String"),Ys=st.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Dr(r,"name")||Ks&&r.name!==e)&&(Ke?Br(r,"name",{value:e,configurable:!0}):r.name=e),Xs&&t&&Dr(t,"arity")&&r.length!==t.arity&&Br(r,"length",{value:t.arity});try{t&&Dr(t,"constructor")&&t.constructor?Ke&&Br(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=Ws(r);return Dr(n,"source")||(n.source=Hs.join(typeof e=="string"?e:"")),r};Function.prototype.toString=Ys(s(function(){return Us(this)&&zs(this).source||qs(this)},"toString"),"toString");var Vs=C,Js=J,Zs=st.exports,Qs=ot,Cr=s(function(r,e,t,n){n||(n={});var o=n.enumerable,c=n.name!==void 0?n.name:e;if(Vs(t)&&Zs(t,c,n),n.global)o?r[e]=t:Qs(e,t);else{try{n.unsafe?r[e]&&(o=!0):delete r[e]}catch{}o?r[e]=t:Js.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},"defineBuiltIn$5"),Sa={},rc=Math.ceil,ec=Math.floor,tc=Math.trunc||s(function(e){var t=+e;return(t>0?ec:rc)(t)},"trunc"),nc=tc,rr=s(function(r){var e=+r;return e!==e||e===0?0:nc(e)},"toIntegerOrInfinity$8"),ac=rr,oc=Math.max,ic=Math.min,sc=s(function(r,e){var t=ac(r);return t<0?oc(t+e,0):ic(t,e)},"toAbsoluteIndex$1"),cc=rr,lc=Math.min,pt=s(function(r){return r>0?lc(cc(r),9007199254740991):0},"toLength$3"),uc=pt,dr=s(function(r){return uc(r.length)},"lengthOfArrayLike$6"),vc=te,fc=sc,pc=dr,rn=s(function(r){return function(e,t,n){var o=vc(e),c=pc(o),f=fc(n,c),i;if(r&&t!=t){for(;c>f;)if(i=o[f++],i!=i)return!0}else for(;c>f;f++)if((r||f in o)&&o[f]===t)return r||f||0;return!r&&-1}},"createMethod$2"),Ia={includes:rn(!0),indexOf:rn(!1)},dc=R,be=k,gc=te,yc=Ia.indexOf,$c=vt,en=dc([].push),Ta=s(function(r,e){var t=gc(r),n=0,o=[],c;for(c in t)!be($c,c)&&be(t,c)&&en(o,c);for(;e.length>n;)be(t,c=e[n++])&&(~yc(o,c)||en(o,c));return o},"objectKeysInternal"),dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hc=Ta,mc=dt,xc=mc.concat("length","prototype");Sa.f=Object.getOwnPropertyNames||s(function(e){return hc(e,xc)},"getOwnPropertyNames");var Ra={};Ra.f=Object.getOwnPropertySymbols;var bc=V,Ec=R,wc=Sa,Oc=Ra,Sc=G,Ic=Ec([].concat),Tc=bc("Reflect","ownKeys")||s(function(e){var t=wc.f(Sc(e)),n=Oc.f;return n?Ic(t,n(e)):t},"ownKeys"),tn=k,Rc=Tc,Pc=at,Cc=J,gt=s(function(r,e,t){for(var n=Rc(e),o=Cc.f,c=Pc.f,f=0;f<n.length;f++){var i=n[f];!tn(r,i)&&!(t&&tn(t,i))&&o(r,i,c(e,i))}},"copyConstructorProperties$3"),_c=O,Ac=C,jc=/#|\.prototype\./,_r=s(function(r,e){var t=Lc[Nc(r)];return t==Mc?!0:t==Dc?!1:Ac(e)?_c(e):!!e},"isForced$1"),Nc=_r.normalize=function(r){return String(r).replace(jc,".").toLowerCase()},Lc=_r.data={},Dc=_r.NATIVE="N",Mc=_r.POLYFILL="P",Fc=_r,Ee=D,Gc=at.f,Bc=pr,kc=Cr,Uc=ot,Kc=gt,qc=Fc,j=s(function(r,e){var t=r.target,n=r.global,o=r.stat,c,f,i,a,l,u;if(n?f=Ee:o?f=Ee[t]||Uc(t,{}):f=(Ee[t]||{}).prototype,f)for(i in e){if(l=e[i],r.dontCallGetSet?(u=Gc(f,i),a=u&&u.value):a=f[i],c=qc(n?i:t+(o?".":"#")+i,r.forced),!c&&a!==void 0){if(typeof l==typeof a)continue;Kc(l,a)}(r.sham||a&&a.sham)&&Bc(l,"sham",!0),kc(f,i,l,r)}},"_export"),Wc=O,zc=!Wc(function(){function r(){}return s(r,"F"),r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Xc=k,Hc=C,Yc=ir,Vc=ut,Jc=zc,nn=Vc("IE_PROTO"),qe=Object,Zc=qe.prototype,Pa=Jc?qe.getPrototypeOf:function(r){var e=Yc(r);if(Xc(e,nn))return e[nn];var t=e.constructor;return Hc(t)&&e instanceof t?t.prototype:e instanceof qe?Zc:null},Qc=C,rl=String,el=TypeError,tl=s(function(r){if(typeof r=="object"||Qc(r))return r;throw el("Can't set "+rl(r)+" as a prototype")},"aPossiblePrototype$1"),nl=R,al=G,ol=tl,yt=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=nl(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return s(function(o,c){return al(o),ol(c),r?t(o,c):o.__proto__=c,o},"setPrototypeOf")}():void 0),Ca={},il=Ta,sl=dt,cl=Object.keys||s(function(e){return il(e,sl)},"keys"),ll=z,ul=ba,vl=J,fl=G,pl=te,dl=cl;Ca.f=ll&&!ul?Object.defineProperties:s(function(e,t){fl(e);for(var n=pl(t),o=dl(t),c=o.length,f=0,i;c>f;)vl.f(e,i=o[f++],n[i]);return e},"defineProperties");var gl=V,yl=gl("document","documentElement"),$l=G,hl=Ca,an=dt,ml=vt,xl=yl,bl=ma,El=ut,on=">",sn="<",We="prototype",ze="script",_a=El("IE_PROTO"),we=s(function(){},"EmptyConstructor"),Aa=s(function(r){return sn+ze+on+r+sn+"/"+ze+on},"scriptTag"),cn=s(function(r){r.write(Aa("")),r.close();var e=r.parentWindow.Object;return r=null,e},"NullProtoObjectViaActiveX"),wl=s(function(){var r=bl("iframe"),e="java"+ze+":",t;return r.style.display="none",xl.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(Aa("document.F=Object")),t.close(),t.F},"NullProtoObjectViaIFrame"),Mr,kr=s(function(){try{Mr=new ActiveXObject("htmlfile")}catch{}kr=typeof document<"u"?document.domain&&Mr?cn(Mr):wl():cn(Mr);for(var r=an.length;r--;)delete kr[We][an[r]];return kr()},"NullProtoObject");ml[_a]=!0;var ae=Object.create||s(function(e,t){var n;return e!==null?(we[We]=$l(e),n=new we,we[We]=null,n[_a]=e):n=kr(),t===void 0?n:hl.f(n,t)},"create"),Ol=R,ja=Error,Sl=Ol("".replace),Il=function(r){return String(ja(r).stack)}("zxcasd"),Na=/\n\s*at [^:]*:[^\n]*/,Tl=Na.test(Il),La=s(function(r,e){if(Tl&&typeof r=="string"&&!ja.prepareStackTrace)for(;e--;)r=Sl(r,Na,"");return r},"clearErrorStack$2"),Rl=Y,Pl=pr,Da=s(function(r,e){Rl(e)&&"cause"in e&&Pl(r,"cause",e.cause)},"installErrorCause$2"),ln=R,Cl=Pr,_l=ee,Al=ln(ln.bind),Ma=s(function(r,e){return Cl(r),e===void 0?r:_l?Al(r,e):function(){return r.apply(e,arguments)}},"functionBindContext"),$t={},jl=M,Nl=$t,Ll=jl("iterator"),Dl=Array.prototype,Ml=s(function(r){return r!==void 0&&(Nl.Array===r||Dl[Ll]===r)},"isArrayIteratorMethod$1"),Fl=M,Gl=Fl("toStringTag"),Fa={};Fa[Gl]="z";var Bl=String(Fa)==="[object z]",kl=Bl,Ul=C,Ur=Ir,Kl=M,ql=Kl("toStringTag"),Wl=Object,zl=Ur(function(){return arguments}())=="Arguments",Xl=s(function(r,e){try{return r[e]}catch{}},"tryGet"),ht=kl?Ur:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=Xl(e=Wl(r),ql))=="string"?t:zl?Ur(e):(n=Ur(e))=="Object"&&Ul(e.callee)?"Arguments":n},Hl=ht,un=fr,Yl=$t,Vl=M,Jl=Vl("iterator"),Ga=s(function(r){if(r!=null)return un(r,Jl)||un(r,"@@iterator")||Yl[Hl(r)]},"getIteratorMethod$2"),Zl=B,Ql=Pr,ru=G,eu=Rr,tu=Ga,nu=TypeError,au=s(function(r,e){var t=arguments.length<2?tu(r):e;if(Ql(t))return ru(Zl(t,r));throw nu(eu(r)+" is not iterable")},"getIterator$1"),ou=B,vn=G,iu=fr,su=s(function(r,e,t){var n,o;vn(r);try{if(n=iu(r,"return"),!n){if(e==="throw")throw t;return t}n=ou(n,r)}catch(c){o=!0,n=c}if(e==="throw")throw t;if(o)throw n;return vn(n),t},"iteratorClose$1"),cu=Ma,lu=B,uu=G,vu=Rr,fu=Ml,pu=dr,fn=Tr,du=au,gu=Ga,pn=su,yu=TypeError,Kr=s(function(r,e){this.stopped=r,this.result=e},"Result"),dn=Kr.prototype,Ba=s(function(r,e,t){var n=t&&t.that,o=!!(t&&t.AS_ENTRIES),c=!!(t&&t.IS_RECORD),f=!!(t&&t.IS_ITERATOR),i=!!(t&&t.INTERRUPTED),a=cu(e,n),l,u,v,p,d,g,$,w=s(function(E){return l&&pn(l,"normal",E),new Kr(!0,E)},"stop"),S=s(function(E){return o?(uu(E),i?a(E[0],E[1],w):a(E[0],E[1])):i?a(E,w):a(E)},"callFn");if(c)l=r.iterator;else if(f)l=r;else{if(u=gu(r),!u)throw yu(vu(r)+" is not iterable");if(fu(u)){for(v=0,p=pu(r);p>v;v++)if(d=S(r[v]),d&&fn(dn,d))return d;return new Kr(!1)}l=du(r,u)}for(g=c?r.next:l.next;!($=lu(g,l)).done;){try{d=S($.value)}catch(E){pn(l,"throw",E)}if(typeof d=="object"&&d&&fn(dn,d))return d}return new Kr(!1)},"iterate$2"),$u=ht,hu=String,er=s(function(r){if($u(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return hu(r)},"toString$8"),mu=er,ka=s(function(r,e){return r===void 0?arguments.length<2?"":e:mu(r)},"normalizeStringArgument$2"),xu=O,bu=Sr,Ua=!xu(function(){var r=Error("a");return"stack"in r?(Object.defineProperty(r,"stack",bu(1,7)),r.stack!==7):!0}),Eu=j,wu=Tr,Ou=Pa,Xr=yt,Su=gt,Ka=ae,Fr=pr,Oe=Sr,Iu=La,Tu=Da,Ru=Ba,Pu=ka,Cu=M,_u=Ua,Au=Cu("toStringTag"),Hr=Error,ju=[].push,Er=s(function(e,t){var n=arguments.length>2?arguments[2]:void 0,o=wu(Se,this),c;Xr?c=Xr(new Hr,o?Ou(this):Se):(c=o?this:Ka(Se),Fr(c,Au,"Error")),t!==void 0&&Fr(c,"message",Pu(t)),_u&&Fr(c,"stack",Iu(c.stack,1)),Tu(c,n);var f=[];return Ru(e,ju,{that:f}),Fr(c,"errors",f),c},"AggregateError");Xr?Xr(Er,Hr):Su(Er,Hr,{name:!0});var Se=Er.prototype=Ka(Hr.prototype,{constructor:Oe(1,Er),message:Oe(1,""),name:Oe(1,"AggregateError")});Eu({global:!0,constructor:!0,arity:2},{AggregateError:Er});var Nu=ee,qa=Function.prototype,gn=qa.apply,yn=qa.call,mt=typeof Reflect=="object"&&Reflect.apply||(Nu?yn.bind(gn):function(){return yn.apply(gn,arguments)}),Lu=J.f,Du=s(function(r,e,t){t in r||Lu(r,t,{configurable:!0,get:function(){return e[t]},set:function(n){e[t]=n}})},"proxyAccessor$1"),Mu=C,Fu=Y,$n=yt,Gu=s(function(r,e,t){var n,o;return $n&&Mu(n=e.constructor)&&n!==t&&Fu(o=n.prototype)&&o!==t.prototype&&$n(r,o),r},"inheritIfRequired$1"),hn=V,Bu=k,Ie=pr,ku=Tr,mn=yt,xn=gt,bn=Du,Uu=Gu,Ku=ka,qu=Da,Wu=La,zu=Ua,Xu=z,Wa=s(function(r,e,t,n){var o="stackTraceLimit",c=n?2:1,f=r.split("."),i=f[f.length-1],a=hn.apply(null,f);if(!!a){var l=a.prototype;if(Bu(l,"cause")&&delete l.cause,!t)return a;var u=hn("Error"),v=e(function(p,d){var g=Ku(n?d:p,void 0),$=n?new a(p):new a;return g!==void 0&&Ie($,"message",g),zu&&Ie($,"stack",Wu($.stack,2)),this&&ku(l,this)&&Uu($,this,v),arguments.length>c&&qu($,arguments[c]),$});v.prototype=l,i!=="Error"?mn?mn(v,u):xn(v,u,{name:!0}):Xu&&o in a&&(bn(v,a,o),bn(v,a,"prepareStackTrace")),xn(v,a);try{l.name!==i&&Ie(l,"name",i),l.constructor=v}catch{}return v}},"wrapErrorConstructorWithCause$2"),Hu=j,Yu=V,Vu=mt,En=O,Ju=Wa,xt="AggregateError",wn=Yu(xt),On=!En(function(){return wn([1]).errors[0]!==1})&&En(function(){return wn([1],xt,{cause:7}).cause!==7});Hu({global:!0,constructor:!0,arity:2,forced:On},{AggregateError:Ju(xt,function(r){return s(function(t,n){return Vu(r,this,arguments)},"AggregateError")},On,!0)});var Zu=M,Qu=ae,rv=J.f,Xe=Zu("unscopables"),He=Array.prototype;He[Xe]==null&&rv(He,Xe,{configurable:!0,value:Qu(null)});var oe=s(function(r){He[Xe][r]=!0},"addToUnscopables$4"),ev=j,tv=ir,nv=dr,av=rr,ov=oe;ev({target:"Array",proto:!0},{at:s(function(e){var t=tv(this),n=nv(t),o=av(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:t[c]},"at")});ov("at");var iv=Ma,sv=va,cv=ir,lv=dr,Sn=s(function(r){var e=r==1;return function(t,n,o){for(var c=cv(t),f=sv(c),i=iv(n,o),a=lv(f),l,u;a-- >0;)if(l=f[a],u=i(l,a,c),u)switch(r){case 0:return l;case 1:return a}return e?-1:void 0}},"createMethod$1"),za={findLast:Sn(0),findLastIndex:Sn(1)},uv=j,vv=za.findLast,fv=oe;uv({target:"Array",proto:!0},{findLast:s(function(e){return vv(this,e,arguments.length>1?arguments[1]:void 0)},"findLast")});fv("findLast");var pv=j,dv=za.findLastIndex,gv=oe;pv({target:"Array",proto:!0},{findLastIndex:s(function(e){return dv(this,e,arguments.length>1?arguments[1]:void 0)},"findLastIndex")});gv("findLastIndex");var yv=j,$v=Ia.includes,hv=O,mv=oe,xv=hv(function(){return!Array(1).includes()});yv({target:"Array",proto:!0,forced:xv},{includes:s(function(e){return $v(this,e,arguments.length>1?arguments[1]:void 0)},"includes")});mv("includes");var bv=TypeError,Ev=9007199254740991,Xa=s(function(r){if(r>Ev)throw bv("Maximum allowed index exceeded");return r},"doesNotExceedSafeInteger$2"),wv=j,Ov=ir,Sv=dr,Iv=Xa,Tv=O,Rv=Tv(function(){return[].push.call({length:4294967296},1)!==4294967297}),Pv=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(r){return r instanceof TypeError}}();wv({target:"Array",proto:!0,arity:1,forced:Rv||Pv},{push:s(function(e){var t=Ov(this),n=Sv(t),o=arguments.length;Iv(n+o);for(var c=0;c<o;c++)t[n]=arguments[c],n++;return t.length=n,n},"push")});var In=Rr,Cv=TypeError,_v=s(function(r,e){if(!delete r[e])throw Cv("Cannot delete property "+In(e)+" of "+In(r))},"deletePropertyOrThrow$1"),Av=j,jv=ir,Nv=dr,Lv=_v,Dv=Xa,Mv=[].unshift(0)!==1,Fv=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(r){return r instanceof TypeError}}();Av({target:"Array",proto:!0,arity:1,forced:Mv||Fv},{unshift:s(function(e){var t=jv(this),n=Nv(t),o=arguments.length;if(o){Dv(n+o);for(var c=n;c--;){var f=c+o;c in t?t[f]=t[c]:Lv(t,f)}for(var i=0;i<o;i++)t[i]=arguments[i]}return t.length=n+o},"unshift")});var Ha=j,Gv=D,X=mt,Ya=Wa,Ye="WebAssembly",Tn=Gv[Ye],Yr=Error("e",{cause:7}).cause!==7,sr=s(function(r,e){var t={};t[r]=Ya(r,e,Yr),Ha({global:!0,constructor:!0,arity:1,forced:Yr},t)},"exportGlobalErrorCauseWrapper"),bt=s(function(r,e){if(Tn&&Tn[r]){var t={};t[r]=Ya(Ye+"."+r,e,Yr),Ha({target:Ye,stat:!0,constructor:!0,arity:1,forced:Yr},t)}},"exportWebAssemblyErrorCauseWrapper");sr("Error",function(r){return s(function(t){return X(r,this,arguments)},"Error")});sr("EvalError",function(r){return s(function(t){return X(r,this,arguments)},"EvalError")});sr("RangeError",function(r){return s(function(t){return X(r,this,arguments)},"RangeError")});sr("ReferenceError",function(r){return s(function(t){return X(r,this,arguments)},"ReferenceError")});sr("SyntaxError",function(r){return s(function(t){return X(r,this,arguments)},"SyntaxError")});sr("TypeError",function(r){return s(function(t){return X(r,this,arguments)},"TypeError")});sr("URIError",function(r){return s(function(t){return X(r,this,arguments)},"URIError")});bt("CompileError",function(r){return s(function(t){return X(r,this,arguments)},"CompileError")});bt("LinkError",function(r){return s(function(t){return X(r,this,arguments)},"LinkError")});bt("RuntimeError",function(r){return s(function(t){return X(r,this,arguments)},"RuntimeError")});var Bv=R,kv=Bv(1 .valueOf),Uv=rr,Kv=er,qv=Q,Wv=RangeError,zv=s(function(e){var t=Kv(qv(this)),n="",o=Uv(e);if(o<0||o==1/0)throw Wv("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))o&1&&(n+=t);return n},"repeat"),Xv=Math.log,Hv=Math.LOG10E,Yv=Math.log10||s(function(e){return Xv(e)*Hv},"log10"),Vv=j,Et=R,Jv=rr,Zv=kv,Qv=zv,rf=Yv,Vr=O,ef=RangeError,Rn=String,tf=isFinite,nf=Math.abs,af=Math.floor,Pn=Math.pow,of=Math.round,W=Et(1 .toExponential),sf=Et(Qv),Cn=Et("".slice),Va=W(-69e-12,4)==="-6.9000e-11"&&W(1.255,2)==="1.25e+0"&&W(12345,3)==="1.235e+4"&&W(25,0)==="3e+1",cf=Vr(function(){W(1,1/0)})&&Vr(function(){W(1,-1/0)}),lf=!Vr(function(){W(1/0,1/0)})&&!Vr(function(){W(NaN,1/0)}),uf=!Va||!cf||!lf;Vv({target:"Number",proto:!0,forced:uf},{toExponential:s(function(e){var t=Zv(this);if(e===void 0)return W(t);var n=Jv(e);if(!tf(t))return String(t);if(n<0||n>20)throw ef("Incorrect fraction digits");if(Va)return W(t,n);var o="",c="",f=0,i="",a="";if(t<0&&(o="-",t=-t),t===0)f=0,c=sf("0",n+1);else{var l=rf(t);f=af(l);var u=0,v=Pn(10,f-n);u=of(t/v),2*t>=(2*u+1)*v&&(u+=1),u>=Pn(10,n+1)&&(u/=10,f+=1),c=Rn(u)}return n!==0&&(c=Cn(c,0,1)+"."+Cn(c,1)),f===0?(i="+",a="0"):(i=f>0?"+":"-",a=Rn(nf(f))),c+="e"+i+a,o+c},"toExponential")});var vf=j,ff=k;vf({target:"Object",stat:!0},{hasOwn:ff});var wt={},_n=Pr,pf=s(function(r){var e,t;this.promise=new r(function(n,o){if(e!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");e=n,t=o}),this.resolve=_n(e),this.reject=_n(t)},"PromiseCapability");wt.f=function(r){return new pf(r)};var df=s(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$1"),gf=j,yf=B,$f=Pr,hf=V,mf=wt,xf=df,bf=Ba,An="No one promise resolved";gf({target:"Promise",stat:!0},{any:s(function(e){var t=this,n=hf("AggregateError"),o=mf.f(t),c=o.resolve,f=o.reject,i=xf(function(){var a=$f(t.resolve),l=[],u=0,v=1,p=!1;bf(e,function(d){var g=u++,$=!1;v++,yf(a,t,d).then(function(w){$||p||(p=!0,c(w))},function(w){$||p||($=!0,l[g]=w,--v||f(new n(l,An)))})}),--v||f(new n(l,An))});return i.error&&f(i.value),o.promise},"any")});var Ef=D,wf=Ef.Promise,Of=R,Sf=O,Ja=C,If=ht,Tf=V,Rf=lt,Za=s(function(){},"noop"),Pf=[],Qa=Tf("Reflect","construct"),Ot=/^\s*(?:class|function)\b/,Cf=Of(Ot.exec),_f=!Ot.exec(Za),hr=s(function(e){if(!Ja(e))return!1;try{return Qa(Za,Pf,e),!0}catch{return!1}},"isConstructor"),ro=s(function(e){if(!Ja(e))return!1;switch(If(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _f||!!Cf(Ot,Rf(e))}catch{return!0}},"isConstructor");ro.sham=!0;var Af=!Qa||Sf(function(){var r;return hr(hr.call)||!hr(Object)||!hr(function(){r=!0})||r})?ro:hr,jf=Af,Nf=Rr,Lf=TypeError,Df=s(function(r){if(jf(r))return r;throw Lf(Nf(r)+" is not a constructor")},"aConstructor$1"),jn=G,Mf=Df,Ff=M,Gf=Ff("species"),eo=s(function(r,e){var t=jn(r).constructor,n;return t===void 0||(n=jn(t)[Gf])==null?e:Mf(n)},"speciesConstructor$2"),Bf=G,kf=Y,Uf=wt,Kf=s(function(r,e){if(Bf(r),kf(e)&&e.constructor===r)return e;var t=Uf.f(r),n=t.resolve;return n(e),t.promise},"promiseResolve$1"),qf=j,Jr=wf,Wf=O,to=V,no=C,zf=eo,Nn=Kf,Xf=Cr,Ve=Jr&&Jr.prototype,Hf=!!Jr&&Wf(function(){Ve.finally.call({then:function(){}},function(){})});qf({target:"Promise",proto:!0,real:!0,forced:Hf},{finally:function(r){var e=zf(this,to("Promise")),t=no(r);return this.then(t?function(n){return Nn(e,r()).then(function(){return n})}:r,t?function(n){return Nn(e,r()).then(function(){throw n})}:r)}});if(no(Jr)){var Ln=to("Promise").prototype.finally;Ve.finally!==Ln&&Xf(Ve,"finally",Ln,{unsafe:!0})}var Yf=J.f,Vf=k,Jf=M,Dn=Jf("toStringTag"),ao=s(function(r,e,t){r&&!t&&(r=r.prototype),r&&!Vf(r,Dn)&&Yf(r,Dn,{configurable:!0,value:e})},"setToStringTag$2"),Zf=j,Qf=D,rp=ao;Zf({global:!0},{Reflect:{}});rp(Qf.Reflect,"Reflect",!0);var Mn=st.exports,ep=J,tp=s(function(r,e,t){return t.get&&Mn(t.get,e,{getter:!0}),t.set&&Mn(t.set,e,{setter:!0}),ep.f(r,e,t)},"defineBuiltInAccessor$1"),np=G,St=s(function(){var r=np(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),ap=D,op=z,ip=tp,sp=St,cp=O,oo=ap.RegExp,io=oo.prototype,lp=op&&cp(function(){var r=!0;try{oo(".","d")}catch{r=!1}var e={},t="",n=r?"dgimsy":"gimsy",o=s(function(a,l){Object.defineProperty(e,a,{get:function(){return t+=l,!0}})},"addGetter"),c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};r&&(c.hasIndices="d");for(var f in c)o(f,c[f]);var i=Object.getOwnPropertyDescriptor(io,"flags").get.call(e);return i!==n||t!==n});lp&&ip(io,"flags",{configurable:!0,get:sp});var up=j,vp=R,fp=Q,pp=rr,dp=er,gp=O,yp=vp("".charAt),$p=gp(function(){return"\u{20BB7}".at(-2)!=="\uD842"});up({target:"String",proto:!0,forced:$p},{at:s(function(e){var t=dp(fp(this)),n=t.length,o=pp(e),c=o>=0?o:n+o;return c<0||c>=n?void 0:yp(t,c)},"at")});var hp=O,mp=C,Fn=Pa,xp=Cr,bp=M,Je=bp("iterator"),so=!1,or,Te,Re;[].keys&&(Re=[].keys(),"next"in Re?(Te=Fn(Fn(Re)),Te!==Object.prototype&&(or=Te)):so=!0);var Ep=or==null||hp(function(){var r={};return or[Je].call(r)!==r});Ep&&(or={});mp(or[Je])||xp(or,Je,function(){return this});var wp={IteratorPrototype:or,BUGGY_SAFARI_ITERATORS:so},Op=wp.IteratorPrototype,Sp=ae,Ip=Sr,Tp=ao,Rp=$t,Pp=s(function(){return this},"returnThis"),Cp=s(function(r,e,t,n){var o=e+" Iterator";return r.prototype=Sp(Op,{next:Ip(+!n,t)}),Tp(r,o,!1),Rp[o]=Pp,r},"createIteratorConstructor$1"),_p=Y,Ap=Ir,jp=M,Np=jp("match"),co=s(function(r){var e;return _p(r)&&((e=r[Np])!==void 0?!!e:Ap(r)=="RegExp")},"isRegexp"),Lp=B,Dp=k,Mp=Tr,Fp=St,Gn=RegExp.prototype,lo=s(function(r){var e=r.flags;return e===void 0&&!("flags"in Gn)&&!Dp(r,"flags")&&Mp(Gn,r)?Lp(Fp,r):e},"regexpGetFlags"),It=R,Gp=rr,Bp=er,kp=Q,Up=It("".charAt),Bn=It("".charCodeAt),Kp=It("".slice),kn=s(function(r){return function(e,t){var n=Bp(kp(e)),o=Gp(t),c=n.length,f,i;return o<0||o>=c?r?"":void 0:(f=Bn(n,o),f<55296||f>56319||o+1===c||(i=Bn(n,o+1))<56320||i>57343?r?Up(n,o):f:r?Kp(n,o,o+2):(f-55296<<10)+(i-56320)+65536)}},"createMethod"),qp={codeAt:kn(!1),charAt:kn(!0)},Wp=qp.charAt,uo=s(function(r,e,t){return e+(t?Wp(r,e).length:1)},"advanceStringIndex$2"),Tt=O,zp=D,Rt=zp.RegExp,Pt=Tt(function(){var r=Rt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),Xp=Pt||Tt(function(){return!Rt("a","y").sticky}),Hp=Pt||Tt(function(){var r=Rt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),Yp={BROKEN_CARET:Hp,MISSED_STICKY:Xp,UNSUPPORTED_Y:Pt},Vp=O,Jp=D,Zp=Jp.RegExp,Qp=Vp(function(){var r=Zp(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),rd=O,ed=D,td=ed.RegExp,nd=rd(function(){var r=td("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),vr=B,ie=R,ad=er,od=St,id=Yp,sd=ne.exports,cd=ae,ld=ft.get,ud=Qp,vd=nd,fd=sd("native-string-replace",String.prototype.replace),Zr=RegExp.prototype.exec,Ze=Zr,pd=ie("".charAt),dd=ie("".indexOf),gd=ie("".replace),Pe=ie("".slice),Qe=function(){var r=/a/,e=/b*/g;return vr(Zr,r,"a"),vr(Zr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),vo=id.BROKEN_CARET,rt=/()??/.exec("")[1]!==void 0,yd=Qe||rt||vo||ud||vd;yd&&(Ze=s(function(e){var t=this,n=ld(t),o=ad(e),c=n.raw,f,i,a,l,u,v,p;if(c)return c.lastIndex=t.lastIndex,f=vr(Ze,c,o),t.lastIndex=c.lastIndex,f;var d=n.groups,g=vo&&t.sticky,$=vr(od,t),w=t.source,S=0,E=o;if(g&&($=gd($,"y",""),dd($,"g")===-1&&($+="g"),E=Pe(o,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&pd(o,t.lastIndex-1)!==`
`)&&(w="(?: "+w+")",E=" "+E,S++),i=new RegExp("^(?:"+w+")",$)),rt&&(i=new RegExp("^"+w+"$(?!\\s)",$)),Qe&&(a=t.lastIndex),l=vr(Zr,g?i:t,E),g?l?(l.input=Pe(l.input,S),l[0]=Pe(l[0],S),l.index=t.lastIndex,t.lastIndex+=l[0].length):t.lastIndex=0:Qe&&l&&(t.lastIndex=t.global?l.index+l[0].length:a),rt&&l&&l.length>1&&vr(fd,l[0],i,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(l[u]=void 0)}),l&&d)for(l.groups=v=cd(null),u=0;u<d.length;u++)p=d[u],v[p[0]]=l[p[1]];return l},"exec"));var Ct=Ze,Un=B,$d=G,hd=C,md=Ir,xd=Ct,bd=TypeError,fo=s(function(r,e){var t=r.exec;if(hd(t)){var n=Un(t,r,e);return n!==null&&$d(n),n}if(md(r)==="RegExp")return Un(xd,r,e);throw bd("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),Ed=j,wd=B,po=R,Od=Cp,Kn=Q,go=pt,wr=er,Sd=G,Id=Ir,Td=co,yo=lo,Rd=fr,Pd=Cr,Cd=O,_d=M,Ad=eo,jd=uo,Nd=fo,$o=ft,Ld=hi,Qr=_d("matchAll"),ho="RegExp String",mo=ho+" Iterator",Dd=$o.set,Md=$o.getterFor(mo),qn=RegExp.prototype,Fd=TypeError,et=po("".indexOf),re=po("".matchAll),Ce=!!re&&!Cd(function(){re("a",/./)}),Gd=Od(s(function(e,t,n,o){Dd(this,{type:mo,regexp:e,string:t,global:n,unicode:o,done:!1})},"RegExpStringIterator"),ho,s(function(){var e=Md(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=Nd(t,n);return o===null?{value:void 0,done:e.done=!0}:e.global?(wr(o[0])===""&&(t.lastIndex=jd(n,go(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})},"next")),xo=s(function(r){var e=Sd(this),t=wr(r),n=Ad(e,RegExp),o=wr(yo(e)),c,f,i;return c=new n(n===RegExp?e.source:e,o),f=!!~et(o,"g"),i=!!~et(o,"u"),c.lastIndex=go(e.lastIndex),new Gd(c,t,f,i)},"$matchAll");Ed({target:"String",proto:!0,forced:Ce},{matchAll:s(function(e){var t=Kn(this),n,o,c,f;if(e!=null){if(Td(e)&&(n=wr(Kn(yo(e))),!~et(n,"g")))throw Fd("`.matchAll` does not allow non-global regexes");if(Ce)return re(t,e);if(c=Rd(e,Qr),c===void 0&&Ld&&Id(e)=="RegExp"&&(c=xo),c)return wd(c,e,t)}else if(Ce)return re(t,e);return o=wr(t),f=new RegExp(e,"g"),f[Qr](o)},"matchAll")});Qr in qn||Pd(qn,Qr,xo);var Bd=j,Wn=Ct;Bd({target:"RegExp",proto:!0,forced:/./.exec!==Wn},{exec:Wn});var zn=R,Xn=Cr,kd=Ct,Hn=O,bo=M,Ud=pr,Kd=bo("species"),_e=RegExp.prototype,qd=s(function(r,e,t,n){var o=bo(r),c=!Hn(function(){var l={};return l[o]=function(){return 7},""[r](l)!=7}),f=c&&!Hn(function(){var l=!1,u=/a/;return r==="split"&&(u={},u.constructor={},u.constructor[Kd]=function(){return u},u.flags="",u[o]=/./[o]),u.exec=function(){return l=!0,null},u[o](""),!l});if(!c||!f||t){var i=zn(/./[o]),a=e(o,""[r],function(l,u,v,p,d){var g=zn(l),$=u.exec;return $===kd||$===_e.exec?c&&!d?{done:!0,value:i(u,v,p)}:{done:!0,value:g(v,u,p)}:{done:!1}});Xn(String.prototype,r,a[0]),Xn(_e,o,a[1])}n&&Ud(_e[o],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),_t=R,Wd=ir,zd=Math.floor,Ae=_t("".charAt),Xd=_t("".replace),je=_t("".slice),Hd=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Yd=/\$([$&'`]|\d{1,2})/g,Eo=s(function(r,e,t,n,o,c){var f=t+r.length,i=n.length,a=Yd;return o!==void 0&&(o=Wd(o),a=Hd),Xd(c,a,function(l,u){var v;switch(Ae(u,0)){case"$":return"$";case"&":return r;case"`":return je(e,0,t);case"'":return je(e,f);case"<":v=o[je(u,1,-1)];break;default:var p=+u;if(p===0)return l;if(p>i){var d=zd(p/10);return d===0?l:d<=i?n[d-1]===void 0?Ae(u,1):n[d-1]+Ae(u,1):l}v=n[p-1]}return v===void 0?"":v})},"getSubstitution$2"),Vd=mt,Yn=B,se=R,Jd=qd,Zd=O,Qd=G,rg=C,eg=rr,tg=pt,ur=er,ng=Q,ag=uo,og=fr,ig=Eo,sg=fo,cg=M,tt=cg("replace"),lg=Math.max,ug=Math.min,vg=se([].concat),Ne=se([].push),Vn=se("".indexOf),Jn=se("".slice),fg=s(function(r){return r===void 0?r:String(r)},"maybeToString"),pg=function(){return"a".replace(/./,"$0")==="$0"}(),Zn=function(){return/./[tt]?/./[tt]("a","$0")==="":!1}(),dg=!Zd(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Jd("replace",function(r,e,t){var n=Zn?"$":"$0";return[s(function(c,f){var i=ng(this),a=c==null?void 0:og(c,tt);return a?Yn(a,c,i,f):Yn(e,ur(i),c,f)},"replace"),function(o,c){var f=Qd(this),i=ur(o);if(typeof c=="string"&&Vn(c,n)===-1&&Vn(c,"$<")===-1){var a=t(e,f,i,c);if(a.done)return a.value}var l=rg(c);l||(c=ur(c));var u=f.global;if(u){var v=f.unicode;f.lastIndex=0}for(var p=[];;){var d=sg(f,i);if(d===null||(Ne(p,d),!u))break;var g=ur(d[0]);g===""&&(f.lastIndex=ag(i,tg(f.lastIndex),v))}for(var $="",w=0,S=0;S<p.length;S++){d=p[S];for(var E=ur(d[0]),F=lg(ug(eg(d.index),i.length),0),x=[],b=1;b<d.length;b++)Ne(x,fg(d[b]));var P=d.groups;if(l){var T=vg([E],x,F,i);P!==void 0&&Ne(T,P);var I=ur(Vd(c,void 0,T))}else I=ig(E,i,F,x,P,c);F>=w&&($+=Jn(i,w,F)+I,w=F+E.length)}return $+Jn(i,w)}]},!dg||!pg||Zn);var gg=j,yg=B,At=R,Qn=Q,$g=C,hg=co,mr=er,mg=fr,xg=lo,bg=Eo,Eg=M,wg=Eg("replace"),Og=TypeError,wo=At("".indexOf);At("".replace);var ra=At("".slice),Sg=Math.max,ea=s(function(r,e,t){return t>r.length?-1:e===""?t:wo(r,e,t)},"stringIndexOf");gg({target:"String",proto:!0},{replaceAll:s(function(e,t){var n=Qn(this),o,c,f,i,a,l,u,v,p,d=0,g=0,$="";if(e!=null){if(o=hg(e),o&&(c=mr(Qn(xg(e))),!~wo(c,"g")))throw Og("`.replaceAll` does not allow non-global regexes");if(f=mg(e,wg),f)return yg(f,e,n,t)}for(i=mr(n),a=mr(e),l=$g(t),l||(t=mr(t)),u=a.length,v=Sg(1,u),d=ea(i,a,0);d!==-1;)p=l?mr(t(a,d,i)):bg(a,i,d,[],void 0,t),$+=ra(i,g,d)+p,g=d+u,d=ea(i,a,d+v);return g<i.length&&($+=ra(i,g)),$},"replaceAll")});var Gr,Ig=new Uint8Array(16);function Tg(){if(!Gr&&(Gr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Gr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Gr(Ig)}s(Tg,"rng");const Rg=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Pg(r){return typeof r=="string"&&Rg.test(r)}s(Pg,"validate");var N=[];for(var Le=0;Le<256;++Le)N.push((Le+256).toString(16).substr(1));function Cg(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(N[r[e+0]]+N[r[e+1]]+N[r[e+2]]+N[r[e+3]]+"-"+N[r[e+4]]+N[r[e+5]]+"-"+N[r[e+6]]+N[r[e+7]]+"-"+N[r[e+8]]+N[r[e+9]]+"-"+N[r[e+10]]+N[r[e+11]]+N[r[e+12]]+N[r[e+13]]+N[r[e+14]]+N[r[e+15]]).toLowerCase();if(!Pg(t))throw TypeError("Stringified UUID is invalid");return t}s(Cg,"stringify");function _g(r,e,t){r=r||{};var n=r.random||(r.rng||Tg)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=n[o];return e}return Cg(n)}s(_g,"v4");const Ag=s(r=>(Object.assign(r,{appendTo(e){r.element,e.append(r.element)},dispose(){r.dispose?r.dispose():(r.element,r.element.remove())}}),r),"Component"),jg=s((r,e)=>{const t={clear(){return e.transform.baseVal.clear(),t},translate(n,o){const c=r.createSVGTransform();return c.setTranslate(n,o),e.transform.baseVal.appendItem(c),t},scale(n,o=n){const c=r.createSVGTransform();return c.setScale(n,o),e.transform.baseVal.appendItem(c),t},rotate(n,o=0,c=0){console.log(n);const f=r.createSVGTransform();return f.setRotate(n,o,c),e.transform.baseVal.appendItem(f),t}};return t},"Transform"),gr=s(r=>(Ag(r),Object.assign(r,{appendDefTo(e){r.element,e.append(r.element)},transformWith(e){return r.element,jg(e,r.element)}}),r),"SvgComponent"),U=s((r,...e)=>{const t=[],n={};for(let f=0;f<r.length-1;f++){t.push(r[f]);const i=e[f];if(i.element instanceof Element){const a=`__placeholder__${f}`;n[a]=i.element,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(i instanceof Element){const a=`__placeholder__${f}`;n[a]=i,t.push(`<placeholder-element id="${a}"></placeholder-element>`)}else if(i instanceof Array)for(const[a,l]of i.entries()){const u=`__placeholder__${f}_${a}`;if(l.element instanceof Element)n[u]=l.element;else if(l instanceof Element)n[u]=l;else throw new Error(`expected element but got ${l}`);t.push(`<placeholder-element id="${u}"></placeholder-element>`)}else t.push(i)}t.push(r.at(-1));const o=document.createElement("template");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[f,i]of Object.entries(n)){const a=c.querySelector(`placeholder-element#${f}`);a.parentNode.replaceChild(i,a)}return c},"html"),L=s((r,...e)=>{const t=[],n={};for(let f=0;f<r.length-1;f++){t.push(r[f]);const i=e[f];if(i.element instanceof Element){const a=`__placeholder__${f}`;n[a]=i.element,t.push(`<g id="${a}"></g>`)}else if(i instanceof Element){const a=`__placeholder__${f}`;n[a]=i,t.push(`<g id="${a}"></g>`)}else if(i instanceof Array)for(const[a,l]of i.entries()){const u=`__placeholder__${f}_${a}`;if(l.element instanceof Element)n[u]=l.element;else if(l instanceof Element)n[u]=l;else throw new Error(`expected element but got ${l}`);t.push(`<g id="${u}"></g>`)}else t.push(i)}t.push(r.at(-1));const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.insertAdjacentHTML("beforeend",t.join(""));const c=o.firstElementChild;for(const[f,i]of Object.entries(n)){const a=c.querySelector(`g#${f}`);a.parentNode.replaceChild(i,a)}return c},"svg"),Ng=s(({q:r,r:e,s:t})=>`${r} ${e} ${t}`,"asCoordinateKey"),Oo=Symbol("celly"),y=Math.sqrt(3)/2,So=s(()=>{const r=L`<path
		d="
    m ${-y} -0.5
    l  ${y} -0.5
    l  ${y}  0.5
    l 0                   1
    l ${-y}  0.5
    l ${-y} -0.5
    z
  "
	/>`;return gr({element:r})},"Hexagon"),Lg=s(()=>{const r=document.createElementNS("http://www.w3.org/2000/svg","g");return gr({element:r})},"G"),Dg=s(r=>r[Oo],"isCell"),Mg=s((r,e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","g");for(const i of Object.values(e)){Object.assign(i.element,{[Oo]:!0,cell:i});const a=Lg(),{coordinate:{q:l,r:u}}=i,v=2*y*l+y*u,p=3/2*u;a.transformWith(r).translate(v,p),i.appendTo(a.element),a.appendTo(n)}let o;const c=1,f=2;return n.addEventListener("contextmenu",i=>i.preventDefault()),n.addEventListener("pointerdown",i=>{o=i.buttons}),n.addEventListener("pointerup",i=>{if(![c,f].includes(o))return;const a=o===c?"clockwise":"counter-clockwise";for(const l of i.composedPath())if(Dg(l))return t(l.cell,a)}),gr({element:n,cells:e})},"Grid"),Fg=s(([r,e])=>{const t=L`<svg
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
		<g transform="rotate(60) translate(625, -743) scale(1.3)">
			<text x="0" y="0" font-size="150%" text-anchor="middle">Controls</text>
			<text x="0" y="30" font-size="100%" text-anchor="middle">
				Left mouse, x, space: ⟳
			</text>
			<text x="0" y="50" font-size="100%" text-anchor="middle">
				Right mouse, z: ⟲
			</text>
			<text x="0" y="70" font-size="100%" text-anchor="middle">
				Arrow keys: move
			</text>
		</g>
	</svg>`;return gr({element:t})},"Main"),ta=[0,60,120,180,240,300];function na(r){if(!ta.includes(r))throw new Error(`expected one of Orientation [${ta.join(", ")}] but got ${r}`)}s(na,"assertOrientation");const Gg=s((r,e)=>{switch(e){case 32:{const t=So();return t.transformWith(r).scale(.25),t.element.classList.add("end"),L`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				${t}
			</g>`}case 48:return L`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(60)"
				/>
			</g>`;case 40:return L`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(120)"
				/>
			</g>`;case 36:return L`<g>
				<line x1="0" y1="0" x2="${y}" y2="0" />
				<line
					x1="0"
					y1="0"
					x2="${y}"
					y2="0"
					transform="rotate(180)"
				/>
			</g>`;case 56:return L`<g>
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
			</g>`;case 44:return L`<g>
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
			</g>`;case 52:return L`<g>
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
			</g>`;case 42:return L`<g>
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
			</g>`;case 60:return L`<g>
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
			</g>`;case 46:return L`<g>
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
			</g>`;case 54:return L`<g>
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
			</g>`;case 62:return L`<g>
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
			</g>`;case 63:return L`<g>
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
			</g>`;default:throw new Error(`unhandled connection ${e.toString(2)}`)}},"EdgeElement"),Bg=s((r,e)=>{const t=Gg(r,e);return gr({element:t})},"Edge"),De={},kg=s((r,e,t,n)=>{if(!De[n]){const c=Bg(r,n);De[n]=L`<g class="cell">${So()}${c}</g>`}const o=De[n].cloneNode(!0);return o.classList.add(`rotate${t}`),gr({element:o,orientation:t,connection:n,valid:!1,coordinate:e,rotateClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateClockwise${t}`),o.classList.remove(`rotateCounterClockwise${t}`);let c=t;return c+=60,c%=360,na(c),t=c,o.classList.add(`rotate${t}`),o.classList.add(`rotateClockwise${t}`),t},rotateCounterClockwise(){o.classList.remove(`rotate${t}`),o.classList.remove(`rotateClockwise${t}`),o.classList.remove(`rotateCounterClockwise${t}`);let c=t;return c===0?c=300:(c-=60,c%=360),na(c),t=c,o.classList.add(`rotate${t}`),o.classList.add(`rotateCounterClockwise${t}`),t}})},"Cell");var Io={exports:{}};(function(r){(function(e,t,n){function o(a){var l=this,u=i();l.next=function(){var v=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=v-(l.c=v|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(a),l.s0<0&&(l.s0+=1),l.s1-=u(a),l.s1<0&&(l.s1+=1),l.s2-=u(a),l.s2<0&&(l.s2+=1),u=null}s(o,"Alea");function c(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}s(c,"copy");function f(a,l){var u=new o(a),v=l&&l.state,p=u.next;return p.int32=function(){return u.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,v&&(typeof v=="object"&&c(v,u),p.state=function(){return c(u,{})}),p}s(f,"impl");function i(){var a=4022871197,l=s(function(u){u=String(u);for(var v=0;v<u.length;v++){a+=u.charCodeAt(v);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26},"mash");return l}s(i,"Mash"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.alea=f})(H,r,!1)})(Io);var To={exports:{}};(function(r){(function(e,t,n){function o(i){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var v=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^v^v>>>8},i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,a.next()}s(o,"XorGen");function c(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a}s(c,"copy");function f(i,a){var l=new o(i),u=a&&a.state,v=s(function(){return(l.next()>>>0)/4294967296},"prng");return v.double=function(){do var p=l.next()>>>11,d=(l.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},v.int32=l.next,v.quick=v,u&&(typeof u=="object"&&c(u,l),v.state=function(){return c(l,{})}),v}s(f,"impl"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.xor128=f})(H,r,!1)})(To);var Ro={exports:{}};(function(r){(function(e,t,n){function o(i){var a=this,l="";a.next=function(){var v=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(v^v<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,u==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}s(o,"XorGen");function c(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a.v=i.v,a.d=i.d,a}s(c,"copy");function f(i,a){var l=new o(i),u=a&&a.state,v=s(function(){return(l.next()>>>0)/4294967296},"prng");return v.double=function(){do var p=l.next()>>>11,d=(l.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},v.int32=l.next,v.quick=v,u&&(typeof u=="object"&&c(u,l),v.state=function(){return c(l,{})}),v}s(f,"impl"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.xorwow=f})(H,r,!1)})(Ro);var Po={exports:{}};(function(r){(function(e,t,n){function o(i){var a=this;a.next=function(){var u=a.x,v=a.i,p,d;return p=u[v],p^=p>>>7,d=p^p<<24,p=u[v+1&7],d^=p^p>>>10,p=u[v+3&7],d^=p^p>>>3,p=u[v+4&7],d^=p^p<<7,p=u[v+7&7],p=p^p<<13,d^=p^p<<9,u[v]=d,a.i=v+1&7,d};function l(u,v){var p,d=[];if(v===(v|0))d[0]=v;else for(v=""+v,p=0;p<v.length;++p)d[p&7]=d[p&7]<<15^v.charCodeAt(p)+d[p+1&7]<<13;for(;d.length<8;)d.push(0);for(p=0;p<8&&d[p]===0;++p);for(p==8?d[7]=-1:d[p],u.x=d,u.i=0,p=256;p>0;--p)u.next()}s(l,"init"),l(a,i)}s(o,"XorGen");function c(i,a){return a.x=i.x.slice(),a.i=i.i,a}s(c,"copy");function f(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,v=s(function(){return(l.next()>>>0)/4294967296},"prng");return v.double=function(){do var p=l.next()>>>11,d=(l.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},v.int32=l.next,v.quick=v,u&&(u.x&&c(u,l),v.state=function(){return c(l,{})}),v}s(f,"impl"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.xorshift7=f})(H,r,!1)})(Po);var Co={exports:{}};(function(r){(function(e,t,n){function o(i){var a=this;a.next=function(){var u=a.w,v=a.X,p=a.i,d,g;return a.w=u=u+1640531527|0,g=v[p+34&127],d=v[p=p+1&127],g^=g<<13,d^=d<<17,g^=g>>>15,d^=d>>>12,g=v[p]=g^d,a.i=p,g+(u^u>>>16)|0};function l(u,v){var p,d,g,$,w,S=[],E=128;for(v===(v|0)?(d=v,v=null):(v=v+"\0",d=0,E=Math.max(E,v.length)),g=0,$=-32;$<E;++$)v&&(d^=v.charCodeAt(($+32)%v.length)),$===0&&(w=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,$>=0&&(w=w+1640531527|0,p=S[$&127]^=d+w,g=p==0?g+1:0);for(g>=128&&(S[(v&&v.length||0)&127]=-1),g=127,$=4*128;$>0;--$)d=S[g+34&127],p=S[g=g+1&127],d^=d<<13,p^=p<<17,d^=d>>>15,p^=p>>>12,S[g]=d^p;u.w=w,u.X=S,u.i=g}s(l,"init"),l(a,i)}s(o,"XorGen");function c(i,a){return a.i=i.i,a.w=i.w,a.X=i.X.slice(),a}s(c,"copy");function f(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,v=s(function(){return(l.next()>>>0)/4294967296},"prng");return v.double=function(){do var p=l.next()>>>11,d=(l.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},v.int32=l.next,v.quick=v,u&&(u.X&&c(u,l),v.state=function(){return c(l,{})}),v}s(f,"impl"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.xor4096=f})(H,r,!1)})(Co);var _o={exports:{}};(function(r){(function(e,t,n){function o(i){var a=this,l="";a.next=function(){var v=a.b,p=a.c,d=a.d,g=a.a;return v=v<<25^v>>>7^p,p=p-d|0,d=d<<24^d>>>8^g,g=g-v|0,a.b=v=v<<20^v>>>12^p,a.c=p=p-d|0,a.d=d<<16^p>>>16^g,a.a=g-v|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,i===Math.floor(i)?(a.a=i/4294967296|0,a.b=i|0):l+=i;for(var u=0;u<l.length+20;u++)a.b^=l.charCodeAt(u)|0,a.next()}s(o,"XorGen");function c(i,a){return a.a=i.a,a.b=i.b,a.c=i.c,a.d=i.d,a}s(c,"copy");function f(i,a){var l=new o(i),u=a&&a.state,v=s(function(){return(l.next()>>>0)/4294967296},"prng");return v.double=function(){do var p=l.next()>>>11,d=(l.next()>>>0)/4294967296,g=(p+d)/(1<<21);while(g===0);return g},v.int32=l.next,v.quick=v,u&&(typeof u=="object"&&c(u,l),v.state=function(){return c(l,{})}),v}s(f,"impl"),t&&t.exports?t.exports=f:n&&n.amd?n(function(){return f}):this.tychei=f})(H,r,!1)})(_o);var Ao={exports:{}};const Ug={},Kg=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),qg=Lo(Kg);(function(r){(function(e,t,n){var o=256,c=6,f=52,i="random",a=n.pow(o,c),l=n.pow(2,f),u=l*2,v=o-1,p;function d(x,b,P){var T=[];b=b==!0?{entropy:!0}:b||{};var I=S(w(b.entropy?[x,F(t)]:x==null?E():x,3),T),m=new g(T),h=s(function(){for(var _=m.g(c),A=a,q=0;_<l;)_=(_+q)*o,A*=o,q=m.g(1);for(;_>=u;)_/=2,A/=2,q>>>=1;return(_+q)/A},"prng");return h.int32=function(){return m.g(4)|0},h.quick=function(){return m.g(4)/4294967296},h.double=h,S(F(m.S),t),(b.pass||P||function(_,A,q,Z){return Z&&(Z.S&&$(Z,m),_.state=function(){return $(m,{})}),q?(n[i]=_,A):_})(h,I,"global"in b?b.global:this==n,b.state)}s(d,"seedrandom");function g(x){var b,P=x.length,T=this,I=0,m=T.i=T.j=0,h=T.S=[];for(P||(x=[P++]);I<o;)h[I]=I++;for(I=0;I<o;I++)h[I]=h[m=v&m+x[I%P]+(b=h[I])],h[m]=b;(T.g=function(_){for(var A,q=0,Z=T.i,Ar=T.j,$r=T.S;_--;)A=$r[Z=v&Z+1],q=q*o+$r[v&($r[Z]=$r[Ar=v&Ar+A])+($r[Ar]=A)];return T.i=Z,T.j=Ar,q})(o)}s(g,"ARC4");function $(x,b){return b.i=x.i,b.j=x.j,b.S=x.S.slice(),b}s($,"copy");function w(x,b){var P=[],T=typeof x,I;if(b&&T=="object")for(I in x)try{P.push(w(x[I],b-1))}catch{}return P.length?P:T=="string"?x:x+"\0"}s(w,"flatten");function S(x,b){for(var P=x+"",T,I=0;I<P.length;)b[v&I]=v&(T^=b[v&I]*19)+P.charCodeAt(I++);return F(b)}s(S,"mixkey");function E(){try{var x;return p&&(x=p.randomBytes)?x=x(o):(x=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(x)),F(x)}catch{var b=e.navigator,P=b&&b.plugins;return[+new Date,e,P,e.screen,F(t)]}}s(E,"autoseed");function F(x){return String.fromCharCode.apply(0,x)}if(s(F,"tostring"),S(n.random(),t),r.exports){r.exports=d;try{p=qg}catch{}}else n["seed"+i]=d})(typeof self<"u"?self:H,[],Math)})(Ao);var Wg=Io.exports,zg=To.exports,Xg=Ro.exports,Hg=Po.exports,Yg=Co.exports,Vg=_o.exports,yr=Ao.exports;yr.alea=Wg;yr.xor128=zg;yr.xorwow=Xg;yr.xorshift7=Hg;yr.xor4096=Yg;yr.tychei=Vg;const Jg=["prims","wilsons"],Zg=s(r=>Jg.includes(r),"validMode"),Qg=s(()=>{const r=new Worker("/hexpanse/assets/worker.4219743c.js",{type:"module"}),e=s(n=>{r.postMessage(n)},"message"),t={restore(n){e({type:"restore",config:n})},updateCell(n,o){e({type:"update cell",coordinate:n,orientation:o})},onRestored(){throw new Error("missing onRestored")},onColoring(){throw new Error("missing onColoring")},onGameOver(){throw new Error("missing onGameOver")}};return r.onmessage=({data:n})=>{switch(n.type){case"restored":return t.onRestored(n.config,n.state);case"coloring":return t.onColoring(n.colors);case"game over":return t.onGameOver()}},t},"SaveWorker"),Or=Qg(),jt=1e3,nt=jt*y,nr=Fg([jt,nt]);nr.element.onclick=r=>{r.preventDefault()};let xr;const aa={};let Me=Date.now();Or.onRestored=({size:r,mode:e},t)=>{let n=0;for(const[m,{coordinate:h,orientation:_,connection:A}]of Object.entries(t))aa[m]=kg(nr.element,h,_,A),[56,44,52,42].includes(A)&&(n+=1),[60,46,54].includes(A)&&(n+=2),[62].includes(A)&&(n+=3),[63].includes(A)&&(n+=4);const o=U`<p>Generated ${Math.ceil(Date.now()-Me)}ms</p>`;Me=Date.now();const c=s((m,h)=>{if(jo)return;const _=h==="clockwise"?m.rotateClockwise():m.rotateCounterClockwise();Or.updateCell(m.coordinate,_)},"rotateCell");xr=Mg(nr.element,aa,(m,h)=>{u(),c(m,h)}),xr.transformWith(nr.element).translate(jt/2,nt/2).scale(nt/(r*3+2)),xr.appendTo(nr.element);const f=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","z","x"," "];let i={q:0,r:0,s:0},a=!0;const l=s(()=>xr.cells[Ng(i)],"selectedCell"),u=s(()=>{l().element.classList.remove("selected")},"deselect"),v=s(()=>{l().element.classList.add("selected")},"select"),p=s(()=>{if(i.q===-r||i.s===r){if(i.q===-r&&i.r===0&&i.s===r)return;i.r>0?(u(),i.r-=1,i.s+=1,v()):(u(),i.q-=1,i.r+=1,v());return}u(),i.q-=1,i.s+=1,v()},"moveLeft"),d=s(()=>{if(i.q===r||i.s===-r){if(i.q===r&&i.r===0&&i.s===-r)return;i.r>0?(u(),i.q+=1,i.r-=1,v()):(u(),i.r+=1,i.s-=1,v());return}u(),i.q+=1,i.s-=1,v()},"moveRight"),g=s(()=>{const m=i.r===-r||i.s===r,h=i.q===r||i.r===-r;m&&h||(a&&!m||h?(u(),i.r-=1,i.s+=1,v(),a=!a):(u(),i.q+=1,i.r-=1,v(),a=!a))},"moveUp"),$=s(()=>{const m=i.q===-r||i.r===r,h=i.r===r||i.s===-r;m&&h||(a&&!m||h?(u(),i.q-=1,i.r+=1,v(),a=!a):(u(),i.r+=1,i.s-=1,v(),a=!a))},"moveDown"),w=s(()=>{v(),c(l(),"counter-clockwise")},"rotateCounterClockwise"),S=s(()=>{v(),c(l(),"clockwise")},"rotateClockwise");document.body.addEventListener("keydown",m=>{if(!!f.includes(m.key))switch(m.preventDefault(),m.key){case"ArrowLeft":return p();case"ArrowRight":return d();case"ArrowUp":return g();case"ArrowDown":return $();case"z":return w();case"x":case" ":return S()}});let E;const F={};window.addEventListener("gamepadconnected",()=>{E||(E=window.setInterval(()=>{const m=navigator.getGamepads().filter(h=>Boolean(h));if(m.length===0){clearInterval(E);return}for(const h of m)F[h.id]!==h.timestamp&&(h.buttons[0].pressed||h.buttons[4].pressed||h.buttons[6].pressed?w():h.buttons[1].pressed||h.buttons[5].pressed||h.buttons[7].pressed?S():h.buttons[9].pressed?P():h.buttons[12].pressed?g():h.buttons[13].pressed?$():h.buttons[14].pressed?p():h.buttons[15].pressed&&d(),F[h.id]=h.timestamp)},10))}),document.body.append(U`<main>${nr}</main>`);const x=U`<p>Rendered ${Math.ceil(Date.now()-Me)}ms</p>`,b=U`<button>New game</button>`,P=s(()=>{const m=document.getElementById("new-game-form"),{size:h,mode:_}=Object.fromEntries(new FormData(m).entries()),A=`./?${new URLSearchParams({size:h,mode:_}).toString()}`;console.log(A),window.location.href=A},"startNewGame");b.onclick=m=>{m.preventDefault(),P()},document.body.append(U`<h2>Game settings</h2>`,U`<form id="new-game-form">
			<fieldset>
				<legend>Size</legend>
				<label>
					<input type="radio" name="size" value="2" checked />
					Small
				</label>
				<label>
					<input type="radio" name="size" value="4" />
					Medium
				</label>
				<label>
					<input type="radio" name="size" value="8" />
					Large
				</label>
				<label>
					<input type="radio" name="size" value="16" />
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
			${b}
		</form>`,U`<h2>About</h2>`,o,x,U`<p>${n} branches</p>`,U`<p>
			Inspired by <a href="https://hexapipes.vercel.app/">Hexapipes</a>
		</p>`,U`<p>
			Source code:
			<a href="https://github.com/Pyrolistical/hexpanse"
				>https://github.com/Pyrolistical/hexpanse</a
			>
		</p>`,U`<p>
			Author: <a href="https://twitter.com/pyrolistical">@pyrolistical</a>
		</p>`);const T=document.querySelector(`#new-game-form input[name="size"][value="${r}"]`);T.checked=!0;const I=document.querySelector(`#new-game-form input[name="mode"][value="${e}"]`);I.checked=!0};Or.onColoring=r=>{for(const[e,t]of Object.entries(r))for(const n of t)xr.cells[n].element.dataset.color=e};let jo=!1;Or.onGameOver=()=>{jo=!0,nr.element.classList.add("game-over")};const ry=s(()=>{var c,f;window.location.hash===""&&history.replaceState(void 0,"","#");const r=new URLSearchParams(window.location.search),e=(c=r.get("seed"))!=null?c:_g(),t=Number.parseInt((f=r.get("size"))!=null?f:"2"),n=r.get("mode"),o={seed:e,size:t,mode:Zg(n)?n:"wilsons"};return history.replaceState(void 0,"",`?${new URLSearchParams({...o,size:String(t)}).toString()}`),o},"loadConfig"),ey=ry();Or.restore(ey);
