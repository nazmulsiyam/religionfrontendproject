var Vn=Array.isArray,on=Array.prototype.indexOf,Gn=Array.from,Kn=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,fn=Object.getOwnPropertyDescriptors,$n=Object.prototype,Zn=Array.prototype,_n=Object.getPrototypeOf;function zn(t){return typeof t=="function"}const Jn=()=>{};function Wn(t){return t()}function Dt(t){for(var n=0;n<t.length;n++)t[n]()}const d=2,Rt=4,G=8,ht=16,I=32,K=64,z=128,N=256,J=512,p=1024,x=2048,b=4096,L=8192,M=16384,cn=32768,St=65536,vn=1<<17,pn=1<<19,Ot=1<<20,At=Symbol("$state"),Xn=Symbol("legacy props"),Qn=Symbol("");function Ct(t){return t===this.v}function hn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Nt(t){return!hn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function En(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function wn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function tr(){throw new Error("https://svelte.dev/e/hydration_failed")}function nr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function rr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function er(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function mn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let rt=!1;function ar(){rt=!0}const lr=1,sr=2,ur=4,or=8,ir=16,fr=1,_r=2,cr=4,vr=8,pr=16,hr=1,dr=2,gn="[",An="[!",kn="]",bt={},Er=Symbol();function dt(t,n){var r={f:0,v:t,reactions:null,equals:Ct,rv:0,wv:0};return r}function yr(t){return qt(dt(t))}function In(t,n=!1){var e;const r=dt(t);return n||(r.equals=Nt),rt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function wr(t,n=!1){return qt(In(t,n))}function qt(t){return u!==null&&!k&&u.f&d&&(g===null?Pn([t]):g.push(t)),t}function Tr(t,n){return Et(t,ot(()=>ut(t))),n}function Et(t,n){return u!==null&&!k&&et()&&u.f&(d|ht)&&(g===null||!g.includes(t))&&mn(),it(t,n)}function it(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=nn(),Pt(t,x),et()&&f!==null&&f.f&p&&!(f.f&(I|K))&&(A===null?Fn([t]):A.push(t))),n}function Pt(t,n){var r=t.reactions;if(r!==null)for(var e=et(),a=r.length,l=0;l<a;l++){var s=r[l],o=s.f;o&x||!e&&s===f||(w(s,n),o&(p|N)&&(o&d?Pt(s,b):st(s)))}}function Ft(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function mr(t){O=t}let T;function j(t){if(t===null)throw Ft(),bt;return T=t}function gr(){return j(q(T))}function Ar(t){if(O){if(q(T)!==null)throw Ft(),bt;T=t}}function kr(t=1){if(O){for(var n=t,r=T;n--;)r=q(r);T=r}}function Ir(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===kn){if(t===0)return n;t-=1}else(r===gn||r===An)&&(t+=1)}var e=q(n);n.remove(),n=e}}var kt,Lt,Mt;function xr(){if(kt===void 0){kt=window;var t=Element.prototype,n=Node.prototype;Lt=gt(n,"firstChild").get,Mt=gt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ft(t=""){return document.createTextNode(t)}function _t(t){return Lt.call(t)}function q(t){return Mt.call(t)}function Dr(t,n){if(!O)return _t(t);var r=_t(T);if(r===null)r=T.appendChild(ft());else if(n&&r.nodeType!==3){var e=ft();return r==null||r.before(e),j(e),e}return j(r),r}function Rr(t,n){if(!O){var r=_t(t);return r instanceof Comment&&r.data===""?q(r):r}return T}function Sr(t,n=1,r=!1){let e=O?T:t;for(var a;n--;)a=e,e=q(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=ft();return e===null?a==null||a.after(s):e.before(s),j(s),s}return j(e),e}function Or(t){t.textContent=""}function Yt(t){var n=d|x;f===null?n|=N:f.f|=Ot;var r=u!==null&&u.f&d?u:null;const e={children:null,ctx:i,deps:null,equals:Ct,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function Cr(t){const n=Yt(t);return n.equals=Nt,n}function Ht(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&d?yt(e):C(e)}}}function xn(t){for(var n=t.parent;n!==null;){if(!(n.f&d))return n;n=n.parent}return null}function jt(t){var n,r=f;tt(xn(t));try{Ht(t),n=en(t)}finally{tt(r)}return n}function Bt(t){var n=jt(t),r=(S||t.f&N)&&t.deps!==null?b:p;w(t,r),t.equals(n)||(t.v=n,t.wv=nn())}function yt(t){Ht(t),V(t,0),w(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ut(t){f===null&&u===null&&yn(),u!==null&&u.f&N&&En(),Tt&&dn()}function Dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var a=(t&K)!==0,l=f,s={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=P;try{It(!0),lt(s),s.f|=cn}catch(m){throw C(s),m}finally{It(o)}}else n!==null&&st(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ot|z))===0;if(!_&&!a&&e&&(l!==null&&Dn(s,l),u!==null&&u.f&d)){var c=u;(c.children??(c.children=[])).push(s)}return s}function Nr(t){const n=Y(G,null,!1);return w(n,p),n.teardown=t,n}function br(t){Ut();var n=f!==null&&(f.f&I)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Vt(t);return e}}function qr(t){return Ut(),wt(t)}function Pr(t){const n=Y(K,t,!0);return(r={})=>new Promise(e=>{r.outro?On(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Vt(t){return Y(Rt,t,!1)}function Fr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=wt(()=>{t(),!e.ran&&(e.ran=!0,Et(r.l.r2,!0),ot(n))})}function Lr(){var t=i;wt(()=>{if(ut(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,b),H(r)&&lt(r),n.ran=!1}t.l.r2.v=!1}})}function wt(t){return Y(G,t,!0)}function Mr(t,n=[],r=Yt){const e=n.map(r);return Rn(()=>t(...e.map(ut)))}function Rn(t,n=0){return Y(G|ht|n,t,!0)}function Yr(t,n=!0){return Y(G|I,t,!0,n)}function Gt(t){var n=t.teardown;if(n!==null){const r=Tt,e=u;xt(!0),Q(null);try{n.call(null)}finally{xt(r),Q(e)}}}function Kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)yt(n[r])}}function $t(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function Sn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&I||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&pn)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:q(e);e.remove(),e=l}r=!0}$t(t,n&&!r),Kt(t),V(t,0),w(t,M);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Gt(t);var o=t.parent;o!==null&&o.first!==null&&Zt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Zt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function On(t,n){var r=[];zt(t,r,!0),Cn(r,()=>{C(t),n&&n()})}function Cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function zt(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&St)!==0||(e.f&I)!==0;zt(e,n,l?r:!1),e=a}}}function Hr(t){Jt(t,!0)}function Jt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),H(t)&&(w(t,x),st(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&St)!==0||(r.f&I)!==0;Jt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Nn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let W=!1,X=!1,ct=[],vt=[];function Wt(){W=!1;const t=ct.slice();ct=[],Dt(t)}function Xt(){X=!1;const t=vt.slice();vt=[],Dt(t)}function jr(t){W||(W=!0,queueMicrotask(Wt)),ct.push(t)}function Br(t){X||(X=!0,Nn(Xt)),vt.push(t)}function bn(){W&&Wt(),X&&Xt()}const Qt=0,qn=1;let $=!1,Z=Qt,B=!1,U=null,P=!1,Tt=!1;function It(t){P=t}function xt(t){Tt=t}let R=[],F=0;let u=null,k=!1;function Q(t){u=t}let f=null;function tt(t){f=t}let g=null;function Pn(t){g=t}let h=null,y=0,A=null;function Fn(t){A=t}let tn=1,nt=0,S=!1,D=null,i=null;function nn(){return++tn}function et(){return!rt||i!==null&&i.l===null}function H(t){var c;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&N)!==0;if(r!==null){var a,l,s=(n&J)!==0,o=e&&f!==null&&!S,_=r.length;if(s||o){for(a=0;a<_;a++)l=r[a],(s||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);s&&(t.f^=J)}for(a=0;a<_;a++)if(l=r[a],H(l)&&Bt(l),l.wv>t.wv)return!0}(!e||f!==null&&!S)&&w(t,p)}return!1}function Ln(t,n){for(var r=n;r!==null;){if(r.f&z)try{r.fn(t);return}catch{r.f^=z}r=r.parent}throw $=!1,t}function Mn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&z)===0)}function at(t,n,r,e){if($){if(r===null&&($=!1),Mn(n))throw t;return}r!==null&&($=!0);{Ln(t,n);return}}function rn(t,n,r=0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&d?rn(l,n,r+1):n===l&&(r===0?w(l,x):l.f&p&&w(l,b),st(l))}}function en(t){var mt;var n=h,r=y,e=A,a=u,l=S,s=g,o=i,_=k,c=t.f;h=null,y=0,A=null,u=c&(I|K)?null:t,S=!P&&(c&N)!==0,g=null,i=t.ctx,k=!1,nt++;try{var m=(0,t.fn)(),v=t.deps;if(h!==null){var E;if(V(t,y),v!==null&&y>0)for(v.length=y+h.length,E=0;E<h.length;E++)v[y+E]=h[E];else t.deps=v=h;if(!S)for(E=y;E<v.length;E++)((mt=v[E]).reactions??(mt.reactions=[])).push(t)}else v!==null&&y<v.length&&(V(t,y),v.length=y);if(et()&&A!==null&&!(t.f&(d|b|x)))for(E=0;E<A.length;E++)rn(A[E],t);return a!==null&&nt++,m}finally{h=n,y=r,A=e,u=a,S=l,g=s,i=o,k=_}}function Yn(t,n){let r=n.reactions;if(r!==null){var e=on.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&d&&(h===null||!h.includes(n))&&(w(n,b),n.f&(N|J)||(n.f^=J),V(n,0))}function V(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Yn(t,r[e])}function lt(t){var n=t.f;if(!(n&M)){w(t,p);var r=f,e=i;f=t;try{n&ht?Sn(t):$t(t),Kt(t),Gt(t);var a=en(t);t.teardown=typeof a=="function"?a:null,t.wv=tn;var l=t.deps,s}catch(o){at(o,t,r,e||t.ctx)}finally{f=r}}}function an(){if(F>1e3){F=0;try{wn()}catch(t){if(U!==null)at(t,U,null);else throw t}}F++}function ln(t){var n=t.length;if(n!==0){an();var r=P;P=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var l=[];sn(a,l),Hn(l)}}finally{P=r}}}function Hn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|L)))try{H(e)&&(lt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Zt(e):e.fn=null))}catch(a){at(a,e,null,e.ctx)}}}function jn(){if(B=!1,F>1001)return;const t=R;R=[],ln(t),B||(F=0,U=null)}function st(t){Z===Qt&&(B||(B=!0,queueMicrotask(jn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|I)){if(!(r&p))return;n.f^=p}}R.push(n)}function sn(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,l=(a&I)!==0,s=l&&(a&p)!==0,o=r.next;if(!s&&!(a&L))if(a&G){if(l)r.f^=p;else try{H(r)&&lt(r)}catch(v){at(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else a&Rt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var m=0;m<e.length;m++)_=e[m],n.push(_),sn(_,n)}function un(t){var n=Z,r=R;try{an();const a=[];Z=qn,R=a,B=!1,ln(r);var e=t==null?void 0:t();return bn(),(R.length>0||a.length>0)&&un(),F=0,U=null,e}finally{Z=n,R=r}}async function Ur(){await Promise.resolve(),un()}function ut(t){var m;var n=t.f,r=(n&d)!==0;if(r&&n&M){var e=jt(t);return yt(t),e}if(D!==null&&D.add(t),u!==null&&!k){g!==null&&g.includes(t)&&Tn();var a=u.deps;t.rv<nt&&(t.rv=nt,h===null&&a!==null&&a[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var l=t,s=l.parent,o=l;s!==null;)if(s.f&d){var _=s;o=_,s=_.parent}else{var c=s;(m=c.deriveds)!=null&&m.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(l=t,H(l)&&Bt(l)),t.v}function Bn(t){var n=D;D=new Set;var r=D,e;try{if(ot(t),n!==null)for(e of D)n.add(e)}finally{D=n}return r}function Vr(t){var n=Bn(()=>ot(t));for(var r of n)if(r.f&vn)for(const e of r.deps||[])e.f&d||it(e,e.v);else it(r,r.v)}function ot(t){var n=k;try{return k=!0,t()}finally{k=n}}const Un=-7169;function w(t,n){t.f=t.f&Un|n}function Gr(t,n=1){var r=ut(t),e=n===1?r++:r--;return Et(t,r),e}function Kr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},rt&&!n&&(i.l={s:null,u:null,r1:[],r2:dt(!1)})}function $r(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];tt(l.effect),Q(l.reaction),Vt(l.fn)}}finally{tt(r),Q(e)}}i=n.p,n.m=!0}return{}}function Zr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(At in t)pt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&At in r&&pt(r)}}}function pt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{pt(t[e],n)}catch{}const r=_n(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=fn(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{kn as $,ft as A,_t as B,f as C,dr as D,St as E,gr as F,j as G,Vt as H,Fr as I,Lr as J,kr as K,Et as L,wr as M,Vr as N,Or as O,jr as P,Q,tt as R,u as S,hr as T,Nr as U,Kn as V,xr as W,gn as X,q as Y,bt as Z,mr as _,br as a,Ft as a0,tr as a1,Gn as a2,Pr as a3,Xn as a4,un as a5,In as a6,Ur as a7,yr as a8,At as a9,zn as aA,Tr as aB,L as aC,it as aD,zt as aE,Cn as aF,sr as aG,ur as aH,lr as aI,ir as aJ,or as aK,Br as aL,Qn as aM,fn as aN,et as aO,$n as aa,Zn as ab,dt as ac,rr as ad,gt as ae,Er as af,er as ag,_n as ah,An as ai,Ir as aj,Hr as ak,On as al,wt as am,nr as an,vn as ao,cr as ap,Nt as aq,I as ar,K as as,fr as at,_r as au,vr as av,Cr as aw,pr as ax,D as ay,Gr as az,ot as b,i as c,Dt as d,Zr as e,Yt as f,ut as g,ar as h,Rn as i,Yr as j,C as k,O as l,T as m,Jn as n,Rr as o,Kr as p,$r as q,Wn as r,Dr as s,Mr as t,qr as u,Ar as v,Sr as w,hn as x,rt as y,Vn as z};
