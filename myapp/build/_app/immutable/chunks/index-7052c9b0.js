function y(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(U)}function F(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Bt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Ft(t,e,n,i){if(t){const s=W(t,e,n,i);return t[0](s)}}function W(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],o=Math.max(e.dirty.length,s.length);for(let r=0;r<o;r+=1)u[r]=e.dirty[r]|s[r];return u}return e.dirty|s}return e.dirty}function It(t,e,n,i,s,u){if(s){const o=W(e,n,i,u);t.p(o,s)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window<"u";let dt=V?()=>window.performance.now():()=>Date.now(),H=V?t=>requestAnimationFrame(t):y;const $=new Set;function X(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&H(X)}function ht(t){let e;return $.size===0&&H(X),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function mt(){O=!0}function pt(){O=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=c?s+1:yt(1,s,h=>e[n[h]].claim_order,c))-1;i[l]=n[_]+1;const a=_+1;n[a]=l,s=Math.max(a,s)}const u=[],o=[];let r=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);r>=l;r--)o.push(e[r]);r--}for(;r>=0;r--)o.push(e[r]);u.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<u.length&&o[l].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(o[l],_)}}function bt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=tt("style");return $t(Y(t),e),e.sheet}function $t(t,e){return bt(t.head||t,e),e.sheet}function wt(t,e){if(O){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){O&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Kt(){return I(" ")}function Qt(){return I("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,s=!1){Nt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(e(r)){const l=n(r);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),r}}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(e(r)){const l=n(r);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,r}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,s=>s.nodeName===e,s=>{const u=[];for(let o=0;o<s.attributes.length;o++){const r=s.attributes[o];n[r.name]||u.push(r.name)}u.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Xt(t,e,n){return nt(t,e,n,tt)}function Yt(t,e,n){return nt(t,e,n,Et)}function St(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Zt(t){return St(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ne(t,e){return new t(e)}const q=new Map;let P=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:xt(e),rules:{}};return q.set(t,n),n}function J(t,e,n,i,s,u,o,r=0){const l=16.666/i;let c=`{
`;for(let g=0;g<=1;g+=l){const b=e+(n-e)*u(g);c+=g*100+`%{${o(b,1-b)}}
`}const _=c+`100% {${o(n,1-n)}}
}`,a=`__svelte_${kt(_)}_${r}`,h=Y(t),{stylesheet:f,rules:d}=q.get(h)||Ct(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,P+=1,a}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Mt())}function Mt(){H(()=>{P||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),q.clear())})}let S;function N(t){S=t}function it(){if(!S)throw new Error("Function called outside component initialization");return S}function ie(t){it().$$.on_mount.push(t)}function re(t){it().$$.after_update.push(t)}function se(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],K=[],j=[],Q=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(ot))}function oe(){return st(),rt}function z(t){j.push(t)}const T=new Set;let C=0;function ot(){const t=S;do{for(;C<v.length;){const e=v[C];C++,N(e),qt(e.$$)}for(N(null),v.length=0,C=0;K.length;)K.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];T.has(n)||(T.add(n),n())}j.length=0}while(v.length);for(;Q.length;)Q.pop()();L=!1,T.clear(),N(t)}function qt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let E;function Pt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function B(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function ce(){p={r:0,c:[],p}}function le(){p.r||w(p.c),p=p.p}function zt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function ae(t,e,n,i){const s={direction:"both"};let u=e(t,n,s),o=i?0:1,r=null,l=null,c=null;function _(){c&&jt(t,c)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=lt,tick:b=y,css:D}=u||Ot,R={start:dt()+d,b:f};f||(R.group=p,p.r+=1),r||l?l=R:(D&&(_(),c=J(t,o,f,m,d,g,D)),f&&b(0,1),r=a(R,m),z(()=>B(t,f,"start")),ht(A=>{if(l&&A>l.start&&(r=a(l,m),l=null,B(t,r.b,"start"),D&&(_(),c=J(t,o,r.b,r.duration,0,g,u.css))),r){if(A>=r.end)b(o=r.b,1-o),B(t,r.b,"end"),l||(r.b?_():--r.group.r||w(r.group.c)),r=null;else if(A>=r.start){const ct=A-r.start;o=r.a+r.d*g(ct/r.duration),b(o,1-o)}}return!!(r||l)}))}return{run(f){F(u)?Pt().then(()=>{u=u(s),h(f)}):h(f)},end(){_(),r=l=null}}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||z(()=>{const o=t.$$.on_mount.map(U).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...o):w(o),t.$$.on_mount=[]}),u.forEach(z)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(v.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,s,u,o,r=[-1]){const l=S;N(t);const c=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:r,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return c.ctx&&s(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),_&&Tt(t,a)),h}):[],c.update(),_=!0,w(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){mt();const a=vt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Z)}else c.fragment&&c.fragment.c();e.intro&&zt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),pt(),ot()}N(l)}class he{$destroy(){Rt(this,1),this.$destroy=y}$on(e,n){if(!F(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function me(t,e=y){let n;const i=new Set;function s(r){if(at(t,r)&&(t=r,n)){const l=!x.length;for(const c of i)c[1](),x.push(c,t);if(l){for(let c=0;c<x.length;c+=2)x[c][0](x[c+1]);x.length=0}}}function u(r){s(r(t))}function o(r,l=y){const c=[r,l];return i.add(c),i.size===1&&(n=e(s)||y),r(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:o}}export{oe as A,me as B,lt as C,Ft as D,wt as E,Ut as F,Wt as G,It as H,Gt as I,Ht as J,z as K,ae as L,w as M,se as N,Lt as O,y as P,K as Q,Et as R,he as S,Yt as T,Bt as U,Kt as a,Jt as b,Zt as c,le as d,Qt as e,zt as f,ce as g,Z as h,de as i,re as j,tt as k,Xt as l,vt as m,Vt as n,ie as o,ee as p,I as q,St as r,at as s,ue as t,te as u,ne as v,fe as w,_e as x,Dt as y,Rt as z};