import{S as P,i as q,s as R,w as b,k as H,x as v,m as C,y as w,g as p,q as x,o as g,B as k,d as i,J as S,e as d,t as _,c as u,a as m,h,b as f,H as $,a1 as D,P as I}from"../../chunks/vendor-df54b326.js";import{C as W,a as j,r as V}from"../../chunks/actions-3c65db6c.js";import{p as B}from"../../chunks/PrefixEdit-657e5948.js";import"../../chunks/preload-helper-ec9aa979.js";function J(c){let e,a,o;return{c(){e=d("div"),a=d("div"),o=_("Hello!"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=m(e);a=u(l,"DIV",{class:!0});var n=m(a);o=h(n,"Hello!"),n.forEach(i),l.forEach(i),this.h()},h(){f(a,"class","flex justify-center px-4 py-16 border-t border-base-300"),f(e,"class","border mockup-window border-base-300 w-full")},m(s,l){p(s,e,l),$(e,a),$(a,o)},d(s){s&&i(e)}}}function M(c){let e,a=`<div class="$$mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,o,s,l,n;return{c(){e=d("pre"),o=_(a),this.h()},l(t){e=u(t,"PRE",{slot:!0});var r=m(e);o=h(r,a),r.forEach(i),this.h()},h(){f(e,"slot","html")},m(t,r){p(t,e,r),$(e,o),l||(n=D(s=V.call(null,e,{to:c[0]})),l=!0)},p(t,r){s&&I(s.update)&&r&1&&s.update.call(null,{to:t[0]})},d(t){t&&i(e),l=!1,n()}}}function T(c){let e,a,o;return{c(){e=d("div"),a=d("div"),o=_("Hello!"),this.h()},l(s){e=u(s,"DIV",{class:!0});var l=m(e);a=u(l,"DIV",{class:!0});var n=m(a);o=h(n,"Hello!"),n.forEach(i),l.forEach(i),this.h()},h(){f(a,"class","flex justify-center px-4 py-16 bg-base-200"),f(e,"class","border mockup-window bg-base-300 w-full")},m(s,l){p(s,e,l),$(e,a),$(a,o)},d(s){s&&i(e)}}}function z(c){let e,a=`<div class="$$mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,o,s,l,n;return{c(){e=d("pre"),o=_(a),this.h()},l(t){e=u(t,"PRE",{slot:!0});var r=m(e);o=h(r,a),r.forEach(i),this.h()},h(){f(e,"slot","html")},m(t,r){p(t,e,r),$(e,o),l||(n=D(s=V.call(null,e,{to:c[0]})),l=!0)},p(t,r){s&&I(s.update)&&r&1&&s.update.call(null,{to:t[0]})},d(t){t&&i(e),l=!1,n()}}}function A(c){let e,a,o,s,l,n;return e=new W({props:{data:[{type:"component",class:"mockup-window",desc:"Container element"}]}}),o=new j({props:{title:"window mockup with border",$$slots:{html:[M],default:[J]},$$scope:{ctx:c}}}),l=new j({props:{title:"window mockup with background color",$$slots:{html:[z],default:[T]},$$scope:{ctx:c}}}),{c(){b(e.$$.fragment),a=H(),b(o.$$.fragment),s=H(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),a=C(t),v(o.$$.fragment,t),s=C(t),v(l.$$.fragment,t)},m(t,r){w(e,t,r),p(t,a,r),w(o,t,r),p(t,s,r),w(l,t,r),n=!0},p(t,[r]){const y={};r&3&&(y.$$scope={dirty:r,ctx:t}),o.$set(y);const E={};r&3&&(E.$$scope={dirty:r,ctx:t}),l.$set(E)},i(t){n||(x(e.$$.fragment,t),x(o.$$.fragment,t),x(l.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),g(o.$$.fragment,t),g(l.$$.fragment,t),n=!1},d(t){k(e,t),t&&i(a),k(o,t),t&&i(s),k(l,t)}}}const O={title:"Window mockup",desc:"Window mockup shows a box that looks like an operating system window.",published:!0};function F(c,e,a){let o;return S(c,B,s=>a(0,o=s)),[o]}class Q extends P{constructor(e){super();q(this,e,F,A,R,{})}}export{Q as default,O as metadata};
