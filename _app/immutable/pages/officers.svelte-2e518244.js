import{S as B,i as D,s as J,l as y,u as p,a as w,m as P,p as A,v as d,h as u,c as S,q as L,b as _,J as k,w as q,n as M,e as O,f as z,d as N,t as C,U as F,D as I,x as G,y as K,z as T,A as W,B as Y,C as x,g as $}from"../chunks/index-673014d1.js";function ee(n){let e,r,h,a,i,t=n[6][n[3]]+"",s,o,m,v,c,g,R,U,b,Q,Z,j;return{c(){e=y("h1"),r=p(n[0]),h=p(", "),a=p(n[2]),i=p(" - "),s=p(t),o=w(),m=y("h3"),v=p(n[1]),c=w(),g=y("p"),R=p(n[4]),U=w(),b=y("div"),Z=w(),j=y("hr"),this.h()},l(l){e=P(l,"H1",{class:!0});var f=A(e);r=d(f,n[0]),h=d(f,", "),a=d(f,n[2]),i=d(f," - "),s=d(f,t),f.forEach(u),o=S(l),m=P(l,"H3",{class:!0});var E=A(m);v=d(E,n[1]),E.forEach(u),c=S(l),g=P(l,"P",{class:!0});var H=A(g);R=d(H,n[4]),H.forEach(u),U=S(l),b=P(l,"DIV",{class:!0,style:!0}),A(b).forEach(u),Z=S(l),j=P(l,"HR",{}),this.h()},h(){L(e,"class","main-title svelte-1l4rm4z"),L(m,"class","short-phrase svelte-1l4rm4z"),L(g,"class","blurb"),L(b,"class","photo-container svelte-1l4rm4z"),L(b,"style",Q=`background-image: url(${n[5]})`)},m(l,f){_(l,e,f),k(e,r),k(e,h),k(e,a),k(e,i),k(e,s),_(l,o,f),_(l,m,f),k(m,v),_(l,c,f),_(l,g,f),k(g,R),_(l,U,f),_(l,b,f),_(l,Z,f),_(l,j,f)},p(l,[f]){f&1&&q(r,l[0]),f&4&&q(a,l[2]),f&8&&t!==(t=l[6][l[3]]+"")&&q(s,t),f&2&&q(v,l[1]),f&16&&q(R,l[4]),f&32&&Q!==(Q=`background-image: url(${l[5]})`)&&L(b,"style",Q)},i:M,o:M,d(l){l&&u(e),l&&u(o),l&&u(m),l&&u(c),l&&u(g),l&&u(U),l&&u(b),l&&u(Z),l&&u(j)}}}function te(n,e,r){let{name:h}=e,{shortPhrase:a}=e,{title:i}=e,{grade:t}=e,{blurb:s}=e,{photoURL:o}=e,{photoLeft:m}=e;const v={9:"Freshman",10:"Sophomore",11:"Junior",12:"Senior"};return console.log(h),n.$$set=c=>{"name"in c&&r(0,h=c.name),"shortPhrase"in c&&r(1,a=c.shortPhrase),"title"in c&&r(2,i=c.title),"grade"in c&&r(3,t=c.grade),"blurb"in c&&r(4,s=c.blurb),"photoURL"in c&&r(5,o=c.photoURL),"photoLeft"in c&&r(7,m=c.photoLeft)},[h,a,i,t,s,o,v,m]}class le extends B{constructor(e){super(),D(this,e,te,ee,J,{name:0,shortPhrase:1,title:2,grade:3,blurb:4,photoURL:5,photoLeft:7})}}function V(n,e,r){const h=n.slice();return h[1]=e[r],h}function X(n){let e,r;const h=[n[1]];let a={};for(let i=0;i<h.length;i+=1)a=I(a,h[i]);return e=new le({props:a}),{c(){G(e.$$.fragment)},l(i){K(e.$$.fragment,i)},m(i,t){T(e,i,t),r=!0},p(i,t){const s=t&1?W(h,[Y(i[1])]):{};e.$set(s)},i(i){r||(z(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){x(e,i)}}}function ae(n){let e,r,h=n[0],a=[];for(let t=0;t<h.length;t+=1)a[t]=X(V(n,h,t));const i=t=>C(a[t],1,1,()=>{a[t]=null});return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=O()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);e=O()},m(t,s){for(let o=0;o<a.length;o+=1)a[o].m(t,s);_(t,e,s),r=!0},p(t,[s]){if(s&1){h=t[0];let o;for(o=0;o<h.length;o+=1){const m=V(t,h,o);a[o]?(a[o].p(m,s),z(a[o],1)):(a[o]=X(m),a[o].c(),z(a[o],1),a[o].m(e.parentNode,e))}for($(),o=h.length;o<a.length;o+=1)i(o);N()}},i(t){if(!r){for(let s=0;s<h.length;s+=1)z(a[s]);r=!0}},o(t){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)C(a[s]);r=!1},d(t){F(a,t),t&&u(e)}}}function se(n){return[[{name:"Anish Lakkapragada",shortPhrase:"smh bruh lmao",title:"Co-VP",grade:11,blurb:"Anish is a memelord who likes to code blah blah blah blah",photoURL:"https://i.imgur.com/XqQZQZq.jpg"},{name:"Marc Melyikan",shortPhrase:"enjoyer of ",title:"Co-VP",grade:11,blurb:"Marc is a memelord who likes to code blah blah blah blah",photoURL:"https://i.imgur.com/XqQZQZq.jpg"},{name:"Agnik",shortPhrase:"yeat he dont have one",title:"Secretary",grade:12,blurb:"Agnik is a memelord who likes to code blah blah blah blah",photoURL:"https://i.imgur.com/XqQZQZq.jpg"}]]}class re extends B{constructor(e){super(),D(this,e,se,ae,J,{})}}export{re as default};
