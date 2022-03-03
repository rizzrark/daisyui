import{S as R,i as S,s as V,w as T,k as h,x as E,m as v,y as x,g,q as N,o as P,B as U,d as c,J as H,e as $,t as B,c as f,a as _,h as y,b as r,H as p,a1 as O,P as q}from"../../chunks/vendor-df54b326.js";import{C as J,a as k,r as D}from"../../chunks/actions-3c65db6c.js";import{p as j}from"../../chunks/PrefixEdit-657e5948.js";import"../../chunks/preload-helper-ec9aa979.js";function z(d){let t,s,o,a,l,u,e,n,m;return{c(){t=$("div"),s=$("button"),o=B("Button"),a=h(),l=$("button"),u=B("Button"),e=h(),n=$("button"),m=B("Button"),this.h()},l(i){t=f(i,"DIV",{class:!0});var b=_(t);s=f(b,"BUTTON",{class:!0});var w=_(s);o=y(w,"Button"),w.forEach(c),a=v(b),l=f(b,"BUTTON",{class:!0});var I=_(l);u=y(I,"Button"),I.forEach(c),e=v(b),n=f(b,"BUTTON",{class:!0});var C=_(n);m=y(C,"Button"),C.forEach(c),b.forEach(c),this.h()},h(){r(s,"class","btn btn-active"),r(l,"class","btn"),r(n,"class","btn"),r(t,"class","btn-group")},m(i,b){g(i,t,b),p(t,s),p(s,o),p(t,a),p(t,l),p(l,u),p(t,e),p(t,n),p(n,m)},d(i){i&&c(t)}}}function A(d){let t,s=`<div class="$$btn-group">
  <button class="$$btn $$btn-active">Button</button>
  <button class="$$btn">Button</button>
  <button class="$$btn">Button</button>
</div>`,o,a,l,u;return{c(){t=$("pre"),o=B(s),this.h()},l(e){t=f(e,"PRE",{slot:!0});var n=_(t);o=y(n,s),n.forEach(c),this.h()},h(){r(t,"slot","html")},m(e,n){g(e,t,n),p(t,o),l||(u=O(a=D.call(null,t,{to:d[0]})),l=!0)},p(e,n){a&&q(a.update)&&n&1&&a.update.call(null,{to:e[0]})},d(e){e&&c(t),l=!1,u()}}}function F(d){let t,s,o,a,l,u,e,n;return{c(){t=$("div"),s=$("input"),o=h(),a=$("input"),l=h(),u=$("input"),e=h(),n=$("input"),this.h()},l(m){t=f(m,"DIV",{class:!0});var i=_(t);s=f(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),o=v(i),a=f(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),l=v(i),u=f(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),e=v(i),n=f(i,"INPUT",{type:!0,name:!0,"data-title":!0,class:!0}),i.forEach(c),this.h()},h(){r(s,"type","radio"),r(s,"name","options"),r(s,"data-title","1"),r(s,"class","btn"),r(a,"type","radio"),r(a,"name","options"),r(a,"data-title","2"),a.checked="checked",r(a,"class","btn"),r(u,"type","radio"),r(u,"name","options"),r(u,"data-title","3"),r(u,"class","btn"),r(n,"type","radio"),r(n,"name","options"),r(n,"data-title","4"),r(n,"class","btn"),r(t,"class","btn-group")},m(m,i){g(m,t,i),p(t,s),p(t,o),p(t,a),p(t,l),p(t,u),p(t,e),p(t,n)},d(m){m&&c(t)}}}function G(d){let t,s=`<div class="$$btn-group">
  <input type="radio" name="options" data-title="1" class="$$btn">
  <input type="radio" name="options" data-title="2" class="$$btn" checked>
  <input type="radio" name="options" data-title="3" class="$$btn">
  <input type="radio" name="options" data-title="4" class="$$btn">
</div>`,o,a,l,u;return{c(){t=$("pre"),o=B(s),this.h()},l(e){t=f(e,"PRE",{slot:!0});var n=_(t);o=y(n,s),n.forEach(c),this.h()},h(){r(t,"slot","html")},m(e,n){g(e,t,n),p(t,o),l||(u=O(a=D.call(null,t,{to:d[0]})),l=!0)},p(e,n){a&&q(a.update)&&n&1&&a.update.call(null,{to:e[0]})},d(e){e&&c(t),l=!1,u()}}}function K(d){let t,s,o,a,l,u;return t=new J({props:{data:[{type:"component",class:"btn-group",desc:"Container for grouping multiple buttons"}]}}),o=new k({props:{title:"Button group",$$slots:{html:[A],default:[z]},$$scope:{ctx:d}}}),l=new k({props:{title:"Button group with radio buttons",$$slots:{html:[G],default:[F]},$$scope:{ctx:d}}}),{c(){T(t.$$.fragment),s=h(),T(o.$$.fragment),a=h(),T(l.$$.fragment)},l(e){E(t.$$.fragment,e),s=v(e),E(o.$$.fragment,e),a=v(e),E(l.$$.fragment,e)},m(e,n){x(t,e,n),g(e,s,n),x(o,e,n),g(e,a,n),x(l,e,n),u=!0},p(e,[n]){const m={};n&3&&(m.$$scope={dirty:n,ctx:e}),o.$set(m);const i={};n&3&&(i.$$scope={dirty:n,ctx:e}),l.$set(i)},i(e){u||(N(t.$$.fragment,e),N(o.$$.fragment,e),N(l.$$.fragment,e),u=!0)},o(e){P(t.$$.fragment,e),P(o.$$.fragment,e),P(l.$$.fragment,e),u=!1},d(e){U(t,e),e&&c(s),U(o,e),e&&c(a),U(l,e)}}}const Y={title:"Button group",desc:"Button group shows buttons next to each other.",published:!0};function L(d,t,s){let o;return H(d,j,a=>s(0,o=a)),[o]}class Z extends R{constructor(t){super();S(this,t,L,K,V,{})}}export{Z as default,Y as metadata};
