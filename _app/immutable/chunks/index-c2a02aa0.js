function O(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function S(){return Object.create(null)}function p(t){t.forEach(T)}function F(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function lt(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|c[o];return u}return n.dirty|c}return n.dirty}function st(t,n,e,i,c,u){if(c){const l=L(n,e,i,u);t.p(l,c)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function at(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function _t(t){const n={};for(const e in t)n[e]=!0;return n}let $=!1;function I(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:J(1,c,y=>n[e[y]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const u=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<u.length&&l[r].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[r],a)}}function Q(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function mt(){return k(" ")}function pt(){return k("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function V(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function xt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:V(t,i,n[i])}function W(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){X(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Y(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function $t(t){return Z(t," ")}function wt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n){t.value=n==null?"":n}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n,e){t.classList[e?"add":"remove"](n)}let m;function h(t){m=t}function j(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){j().$$.on_mount.push(t)}function At(t){j().$$.after_update.push(t)}function Nt(t,n){return j().$$.context.set(t,n),n}function St(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],C=[],x=[],M=[],B=Promise.resolve();let v=!1;function D(){v||(v=!0,B.then(q))}function Ct(){return D(),B}function E(t){x.push(t)}const w=new Set;let g=0;function q(){const t=m;do{for(;g<d.length;){const n=d[g];g++,h(n),tt(n.$$)}for(h(null),d.length=0,g=0;C.length;)C.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];w.has(e)||(w.add(e),e())}x.length=0}while(d.length);for(;M.length;)M.pop()();v=!1,w.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const b=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[u]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||E(()=>{const r=u.map(T).filter(F);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(E)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,i,c,u,l,o=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:O,not_equal:c,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,y,...A)=>{const N=A.length?A[0]:y;return s.ctx&&c(s.ctx[f],s.ctx[f]=N)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](N),a&&rt(t,f)),y}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){I();const f=W(n.target);s.fragment&&s.fragment.l(f),f.forEach(R)}else s.fragment&&s.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),G(),q()}h(r)}class zt{$destroy(){it(this,1),this.$destroy=O}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Lt as A,Pt as B,it as C,z as D,Ct as E,lt as F,kt as G,xt as H,Q as I,yt as J,st as K,ut as L,ot as M,at as N,_t as O,ft as P,St as Q,vt as R,zt as S,gt as T,p as U,ht as V,mt as a,dt as b,$t as c,Ot as d,pt as e,nt as f,Mt as g,R as h,qt as i,Nt as j,At as k,U as l,bt as m,O as n,jt as o,W as p,V as q,Et as r,ct as s,Tt as t,k as u,Z as v,wt as w,Bt as x,Dt as y,et as z};
