var Ce=Object.defineProperty;var oe=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ie=(r,e,t)=>e in r?Ce(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Q=(r,e)=>{for(var t in e||(e={}))De.call(e,t)&&ie(r,t,e[t]);if(oe)for(var t of oe(e))Ie.call(e,t)&&ie(r,t,e[t]);return r};import{_ as Ve}from"./preload-helper-ec9aa979.js";import{S as Le,i as ke,s as Te,e as E,t as x,k as P,c as L,a as p,h as N,d as u,m as A,b as i,g as Z,H as o,j as G,a2 as ne,U as le,V as se,W as ae,q as z,o as R,v as J,w as W,x as ye,y as Y,I as X,n as $,B as ee,p as te,Q as Be,R as re,F as j,G as O,K as ce,O as Me,J as Pe}from"./vendor-df54b326.js";import{P as Ae,p as He}from"./PrefixEdit-657e5948.js";const Se=r=>({}),fe=r=>({}),xe=r=>({}),de=r=>({});function ue(r){let e,t,s,l,a,v,d;return{c(){e=E("div"),t=E("a"),s=x("#"),a=P(),v=E("span"),d=x(r[0]),this.h()},l(f){e=L(f,"DIV",{class:!0});var m=p(e);t=L(m,"A",{class:!0,href:!0});var y=p(t);s=N(y,"#"),y.forEach(u),a=A(m),v=L(m,"SPAN",{class:!0});var C=p(v);d=N(C,r[0]),C.forEach(u),m.forEach(u),this.h()},h(){i(t,"class","opacity-20 hover:opacity-60"),i(t,"href",l=`#${r[10]}`),i(v,"class","component-preview-title"),i(e,"class","pb-2 text-sm font-bold")},m(f,m){Z(f,e,m),o(e,t),o(t,s),o(e,a),o(e,v),o(v,d)},p(f,m){m&1024&&l!==(l=`#${f[10]}`)&&i(t,"href",l),m&1&&G(d,f[0])},d(f){f&&u(e)}}}function he(r){let e,t;return{c(){e=E("div"),t=x(r[1]),this.h()},l(s){e=L(s,"DIV",{class:!0});var l=p(e);t=N(l,r[1]),l.forEach(u),this.h()},h(){i(e,"class","pb-2 text-xs opacity-70")},m(s,l){Z(s,e,l),o(e,t)},p(s,l){l&2&&G(t,s[1])},d(s){s&&u(e)}}}function _e(r){let e,t,s,l,a;const v=r[13].default,d=re(v,r,r[19],null);return{c(){e=E("div"),t=E("div"),d&&d.c(),this.h()},l(f){e=L(f,"DIV",{class:!0});var m=p(e);t=L(m,"DIV",{class:!0,style:!0});var y=p(t);d&&d.l(y),y.forEach(u),m.forEach(u),this.h()},h(){i(t,"class",s="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[20rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 "+r[3]),i(t,"style",l=r[2]?`background-image: url(${r[2]})`:"background-size: 5px 5px"),ne(t,"resize-x",r[4]),i(e,"class","bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto")},m(f,m){Z(f,e,m),o(e,t),d&&d.m(t,null),a=!0},p(f,m){d&&d.p&&(!a||m&524288)&&le(d,v,f,f[19],a?ae(v,f[19],m,null):se(f[19]),null),(!a||m&8&&s!==(s="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[20rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 "+f[3]))&&i(t,"class",s),(!a||m&4&&l!==(l=f[2]?`background-image: url(${f[2]})`:"background-size: 5px 5px"))&&i(t,"style",l),m&24&&ne(t,"resize-x",f[4])},i(f){a||(z(d,f),a=!0)},o(f){R(d,f),a=!1},d(f){f&&u(e),d&&d.d(f)}}}function ve(r){let e,t,s,l,a,v,d,f,m,y,C,D,M;const I=r[13].html,b=re(I,r,r[19],de);var g=r[5];function k(n){return{props:{language:"html",$$slots:{default:[Ne]},$$scope:{ctx:n}}}}g&&(a=new g(k(r)));function V(n,c){return n[9]?ze:Ze}let T=V(r),w=T(r);return{c(){e=E("div"),t=E("div"),b&&b.c(),s=P(),l=E("div"),a&&W(a.$$.fragment),v=P(),d=E("div"),f=E("div"),m=E("button"),w.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var c=p(e);t=L(c,"DIV",{class:!0});var h=p(t);b&&b.l(h),h.forEach(u),s=A(c),l=L(c,"DIV",{class:!0});var _=p(l);a&&ye(a.$$.fragment,_),_.forEach(u),v=A(c),d=L(c,"DIV",{class:!0});var B=p(d);f=L(B,"DIV",{"data-tip":!0,class:!0});var H=p(f);m=L(H,"BUTTON",{class:!0});var S=p(m);w.l(S),S.forEach(u),H.forEach(u),B.forEach(u),c.forEach(u),this.h()},h(){i(t,"class","hidden"),i(l,"class","code-wrapper col-start-1 row-start-1"),i(m,"class","btn btn-square btn-sm"),i(f,"data-tip",y=r[9]?"copied":"copy"),i(f,"class","tooltip tooltip-left tooltip-accent"),i(d,"class","col-start-1 row-start-1 flex items-start justify-end p-2"),i(e,"class","grid")},m(n,c){Z(n,e,c),o(e,t),b&&b.m(t,null),r[16](t),o(e,s),o(e,l),a&&Y(a,l,null),o(e,v),o(e,d),o(d,f),o(f,m),w.m(m,null),C=!0,D||(M=X(m,"click",r[17]),D=!0)},p(n,c){b&&b.p&&(!C||c&524288)&&le(b,I,n,n[19],C?ae(I,n[19],c,xe):se(n[19]),de);const h={};if(c&524288&&(h.$$scope={dirty:c,ctx:n}),g!==(g=n[5])){if(a){$();const _=a;R(_.$$.fragment,1,0,()=>{ee(_,1)}),te()}g?(a=new g(k(n)),W(a.$$.fragment),z(a.$$.fragment,1),Y(a,l,null)):a=null}else g&&a.$set(h);T!==(T=V(n))&&(w.d(1),w=T(n),w&&(w.c(),w.m(m,null))),(!C||c&512&&y!==(y=n[9]?"copied":"copy"))&&i(f,"data-tip",y)},i(n){C||(z(b,n),a&&z(a.$$.fragment,n),C=!0)},o(n){R(b,n),a&&R(a.$$.fragment,n),C=!1},d(n){n&&u(e),b&&b.d(n),r[16](null),a&&ee(a),w.d(),D=!1,M()}}}function Ne(r){let e;const t=r[13].html,s=re(t,r,r[19],fe);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,a){s&&s.m(l,a),e=!0},p(l,a){s&&s.p&&(!e||a&524288)&&le(s,t,l,l[19],e?ae(t,l[19],a,Se):se(l[19]),fe)},i(l){e||(z(s,l),e=!0)},o(l){R(s,l),e=!1},d(l){s&&s.d(l)}}}function Ze(r){let e,t;return{c(){e=j("svg"),t=j("path"),this.h()},l(s){e=O(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var l=p(e);t=O(l,"path",{d:!0}),p(t).forEach(u),l.forEach(u),this.h()},h(){i(t,"d","M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"),i(e,"class","w-5 h-5 fill-current"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox","0 0 32 32")},m(s,l){Z(s,e,l),o(e,t)},d(s){s&&u(e)}}}function ze(r){let e,t;return{c(){e=j("svg"),t=j("path"),this.h()},l(s){e=O(s,"svg",{class:!0,xmlns:!0,viewBox:!0});var l=p(e);t=O(l,"path",{d:!0}),p(t).forEach(u),l.forEach(u),this.h()},h(){i(t,"d","M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"),i(e,"class","h-5 w-5 fill-current"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox","0 0 32 32")},m(s,l){Z(s,e,l),o(e,t)},d(s){s&&u(e)}}}function Re(r){let e,t,s,l,a,v,d,f,m,y,C,D,M,I,b,g,k,V,T,w=r[0]&&ue(r),n=r[1]&&he(r),c=r[7]=="preview"&&_e(r),h=J&&r[7]=="html"&&ve(r);return{c(){e=E("div"),w&&w.c(),t=P(),n&&n.c(),s=P(),l=E("div"),a=E("div"),v=E("button"),d=x("Preview"),m=P(),y=E("button"),C=x("HTML"),M=P(),I=E("div"),b=P(),c&&c.c(),g=P(),h&&h.c(),this.h()},l(_){e=L(_,"DIV",{class:!0,id:!0});var B=p(e);w&&w.l(B),t=A(B),n&&n.l(B),s=A(B),l=L(B,"DIV",{class:!0});var H=p(l);a=L(H,"DIV",{class:!0});var S=p(a);v=L(S,"BUTTON",{class:!0});var U=p(v);d=N(U,"Preview"),U.forEach(u),m=A(S),y=L(S,"BUTTON",{class:!0});var q=p(y);C=N(q,"HTML"),q.forEach(u),M=A(S),I=L(S,"DIV",{class:!0}),p(I).forEach(u),S.forEach(u),b=A(H),c&&c.l(H),g=A(H),h&&h.l(H),H.forEach(u),B.forEach(u),this.h()},h(){i(v,"class",f=`tab tab-lifted ${r[7]=="preview"?"tab-active [--tab-bg:hsl(var(--b2))]":"[--tab-border-color:transparent]"}`),i(y,"class",D=`tab tab-lifted ${r[7]=="html"?"tab-active [--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]":""}`),i(I,"class","tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]"),i(a,"class","tabs z-10 -mb-px"),i(l,"class","grid"),i(e,"class","component-preview not-prose text-base-content my-4 max-w-4xl"),i(e,"id",r[10])},m(_,B){Z(_,e,B),w&&w.m(e,null),o(e,t),n&&n.m(e,null),o(e,s),o(e,l),o(l,a),o(a,v),o(v,d),o(a,m),o(a,y),o(y,C),o(a,M),o(a,I),o(l,b),c&&c.m(l,null),o(l,g),h&&h.m(l,null),r[18](e),k=!0,V||(T=[X(v,"click",r[14]),X(y,"click",r[15])],V=!0)},p(_,[B]){_[0]?w?w.p(_,B):(w=ue(_),w.c(),w.m(e,t)):w&&(w.d(1),w=null),_[1]?n?n.p(_,B):(n=he(_),n.c(),n.m(e,s)):n&&(n.d(1),n=null),(!k||B&128&&f!==(f=`tab tab-lifted ${_[7]=="preview"?"tab-active [--tab-bg:hsl(var(--b2))]":"[--tab-border-color:transparent]"}`))&&i(v,"class",f),(!k||B&128&&D!==(D=`tab tab-lifted ${_[7]=="html"?"tab-active [--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]":""}`))&&i(y,"class",D),_[7]=="preview"?c?(c.p(_,B),B&128&&z(c,1)):(c=_e(_),c.c(),z(c,1),c.m(l,g)):c&&($(),R(c,1,1,()=>{c=null}),te()),J&&_[7]=="html"?h?(h.p(_,B),B&128&&z(h,1)):(h=ve(_),h.c(),z(h,1),h.m(l,null)):h&&($(),R(h,1,1,()=>{h=null}),te()),(!k||B&1024)&&i(e,"id",_[10])},i(_){k||(z(c),z(h),k=!0)},o(_){R(c),R(h),k=!1},d(_){_&&u(e),w&&w.d(),n&&n.d(),c&&c.d(),h&&h.d(),r[18](null),V=!1,Be(T)}}}function je(r,e,t){let s,{$$slots:l={},$$scope:a}=e,v;J(async()=>{t(5,v=(await Ve(()=>import("./Prism-6ac632ac.js"),["chunks/Prism-6ac632ac.js","chunks/vendor-df54b326.js","assets/vendor-faf725f4.css"])).default)});let{title:d}=e,{desc:f}=e,{bg:m}=e,{classes:y}=e,{responsive:C=!1}=e,D,M="preview",I,b=!1;const g=h=>{navigator.clipboard.writeText(h),t(9,b=!0),setTimeout(()=>{t(9,b=!1)},2e3)},k=h=>{var _=document.createElement("textarea");return _.innerHTML=h,_.value};J(()=>{document.getElementById(location.hash.slice(1))&&location.hash.slice(1)==s&&document.getElementById(location.hash.slice(1)).click()});const V=()=>t(7,M="preview"),T=()=>t(7,M="html");function w(h){ce[h?"unshift":"push"](()=>{I=h,t(8,I)})}const n=()=>g(k(I.firstChild.innerHTML));function c(h){ce[h?"unshift":"push"](()=>{D=h,t(6,D)})}return r.$$set=h=>{"title"in h&&t(0,d=h.title),"desc"in h&&t(1,f=h.desc),"bg"in h&&t(2,m=h.bg),"classes"in h&&t(3,y=h.classes),"responsive"in h&&t(4,C=h.responsive),"$$scope"in h&&t(19,a=h.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&t(10,s=d?d.replace(/[ ]/g,"-").replace(/[^A-Za-z0-9-]/g,"").toLowerCase():"")},[d,f,m,y,C,v,D,M,I,b,s,g,k,l,V,T,w,n,c,a]}class Ke extends Le{constructor(e){super();ke(this,e,je,Re,Te,{title:0,desc:1,bg:2,classes:3,responsive:4})}}function pe(r,e,t){const s=r.slice();return s[2]=e[t],s[4]=t,s}function me(r){let e,t,s,l,a,v,d,f,m,y,C,D,M;return{c(){e=E("tr"),t=E("td"),s=E("div"),l=j("svg"),a=j("polygon"),v=P(),d=j("svg"),f=j("path"),m=P(),y=E("div"),C=x("To use a custom prefix, "),D=E("a"),M=x("add your prefix string to config"),this.h()},l(I){e=L(I,"TR",{});var b=p(e);t=L(b,"TD",{colspan:!0,class:!0});var g=p(t);s=L(g,"DIV",{class:!0});var k=p(s);l=O(k,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var V=p(l);a=O(V,"polygon",{points:!0}),p(a).forEach(u),V.forEach(u),v=A(k),d=O(k,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var T=p(d);f=O(T,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),p(f).forEach(u),T.forEach(u),m=A(k),y=L(k,"DIV",{class:!0});var w=p(y);C=N(w,"To use a custom prefix, "),D=L(w,"A",{class:!0,href:!0});var n=p(D);M=N(n,"add your prefix string to config"),n.forEach(u),w.forEach(u),k.forEach(u),g.forEach(u),b.forEach(u),this.h()},h(){i(a,"points","256 32 20 464 492 464 256 32"),i(l,"class","fill-info absolute -top-1.5 left-8 scale-x-150"),i(l,"xmlns","http://www.w3.org/2000/svg"),i(l,"width","8"),i(l,"height","8"),i(l,"viewBox","0 0 512 512"),i(f,"stroke-linecap","round"),i(f,"stroke-linejoin","round"),i(f,"stroke-width","2"),i(f,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),i(d,"xmlns","http://www.w3.org/2000/svg"),i(d,"fill","none"),i(d,"viewBox","0 0 24 24"),i(d,"class","stroke-info-content h-4 w-4 flex-shrink-0"),i(D,"class","link"),i(D,"href","/docs/config/"),i(y,"class","text-xs"),i(s,"class","text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3"),i(t,"colspan","3"),i(t,"class","!px-0")},m(I,b){Z(I,e,b),o(e,t),o(t,s),o(s,l),o(l,a),o(s,v),o(s,d),o(d,f),o(s,m),o(s,y),o(y,C),o(y,D),o(D,M)},d(I){I&&u(e)}}}function be(r){let e,t;return{c(){e=E("span"),t=x("Component"),this.h()},l(s){e=L(s,"SPAN",{class:!0});var l=p(e);t=N(l,"Component"),l.forEach(u),this.h()},h(){i(e,"class","badge badge-sm badge-ghost w-20")},m(s,l){Z(s,e,l),o(e,t)},d(s){s&&u(e)}}}function ge(r){let e,t,s;return{c(){e=E("div"),t=E("span"),s=x("Modifier"),this.h()},l(l){e=L(l,"DIV",{class:!0,"data-tip":!0});var a=p(e);t=L(a,"SPAN",{class:!0});var v=p(t);s=N(v,"Modifier"),v.forEach(u),a.forEach(u),this.h()},h(){i(t,"class","badge badge-sm badge-outline w-20"),i(e,"class","tooltip tooltip-right cursor-help"),i(e,"data-tip","Changes the style of a component")},m(l,a){Z(l,e,a),o(e,t),o(t,s)},d(l){l&&u(e)}}}function we(r){let e,t,s;return{c(){e=E("div"),t=E("span"),s=x("Responsive"),this.h()},l(l){e=L(l,"DIV",{class:!0,"data-tip":!0});var a=p(e);t=L(a,"SPAN",{class:!0});var v=p(t);s=N(v,"Responsive"),v.forEach(u),a.forEach(u),this.h()},h(){i(t,"class","badge badge-sm badge-success w-20"),i(e,"class","tooltip tooltip-right cursor-help"),i(e,"data-tip","Supports responsive prefixes (sm:, lg:, \u2026)")},m(l,a){Z(l,e,a),o(e,t),o(t,s)},d(l){l&&u(e)}}}function Ee(r){let e,t,s,l=`${r[1]}${r[2].class}`,a,v,d,f,m,y,C,D=r[2].desc+"",M,I,b=r[2].type=="component"&&be(),g=r[2].type=="modifier"&&ge(),k=r[2].type=="responsive"&&we();return{c(){e=E("tr"),t=E("th"),s=E("span"),a=x(l),v=P(),d=E("td"),b&&b.c(),f=P(),g&&g.c(),m=P(),k&&k.c(),y=P(),C=E("td"),M=x(D),I=P(),this.h()},l(V){e=L(V,"TR",{});var T=p(e);t=L(T,"TH",{class:!0});var w=p(t);s=L(w,"SPAN",{class:!0});var n=p(s);a=N(n,l),n.forEach(u),w.forEach(u),v=A(T),d=L(T,"TD",{});var c=p(d);b&&b.l(c),f=A(c),g&&g.l(c),m=A(c),k&&k.l(c),c.forEach(u),y=A(T),C=L(T,"TD",{});var h=p(C);M=N(h,D),h.forEach(u),I=A(T),T.forEach(u),this.h()},h(){i(s,"class","font-mono lowercase"),i(t,"class","font-normal")},m(V,T){Z(V,e,T),o(e,t),o(t,s),o(s,a),o(e,v),o(e,d),b&&b.m(d,null),o(d,f),g&&g.m(d,null),o(d,m),k&&k.m(d,null),o(e,y),o(e,C),o(C,M),o(e,I)},p(V,T){T&3&&l!==(l=`${V[1]}${V[2].class}`)&&G(a,l),V[2].type=="component"?b||(b=be(),b.c(),b.m(d,f)):b&&(b.d(1),b=null),V[2].type=="modifier"?g||(g=ge(),g.c(),g.m(d,m)):g&&(g.d(1),g=null),V[2].type=="responsive"?k||(k=we(),k.c(),k.m(d,null)):k&&(k.d(1),k=null),T&1&&D!==(D=V[2].desc+"")&&G(M,D)},d(V){V&&u(e),b&&b.d(),g&&g.d(),k&&k.d()}}}function Oe(r){let e,t,s,l,a,v,d,f,m,y,C,D,M,I,b,g,k,V;v=new Ae({});let T=r[1]&&me(),w=r[0],n=[];for(let c=0;c<w.length;c+=1)n[c]=Ee(pe(r,w,c));return{c(){e=E("div"),t=E("table"),s=E("thead"),l=E("tr"),a=E("th"),W(v.$$.fragment),d=P(),f=E("span"),m=x("Class name"),y=P(),C=E("th"),D=x("Type"),M=P(),I=E("th"),b=P(),g=E("tbody"),T&&T.c(),k=P();for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=L(c,"DIV",{class:!0});var h=p(e);t=L(h,"TABLE",{class:!0});var _=p(t);s=L(_,"THEAD",{});var B=p(s);l=L(B,"TR",{});var H=p(l);a=L(H,"TH",{class:!0});var S=p(a);ye(v.$$.fragment,S),d=A(S),f=L(S,"SPAN",{});var U=p(f);m=N(U,"Class name"),U.forEach(u),S.forEach(u),y=A(H),C=L(H,"TH",{class:!0});var q=p(C);D=N(q,"Type"),q.forEach(u),M=A(H),I=L(H,"TH",{}),p(I).forEach(u),H.forEach(u),B.forEach(u),b=A(_),g=L(_,"TBODY",{});var F=p(g);T&&T.l(F),k=A(F);for(let K=0;K<n.length;K+=1)n[K].l(F);F.forEach(u),_.forEach(u),h.forEach(u),this.h()},h(){i(a,"class","flex items-center gap-2 normal-case"),i(C,"class","normal-case"),i(t,"class","table-compact table w-full"),i(e,"class","not-prose mt-6 mb-10 overflow-x-auto")},m(c,h){Z(c,e,h),o(e,t),o(t,s),o(s,l),o(l,a),Y(v,a,null),o(a,d),o(a,f),o(f,m),o(l,y),o(l,C),o(C,D),o(l,M),o(l,I),o(t,b),o(t,g),T&&T.m(g,null),o(g,k);for(let _=0;_<n.length;_+=1)n[_].m(g,null);V=!0},p(c,[h]){if(c[1]?T||(T=me(),T.c(),T.m(g,k)):T&&(T.d(1),T=null),h&3){w=c[0];let _;for(_=0;_<w.length;_+=1){const B=pe(c,w,_);n[_]?n[_].p(B,h):(n[_]=Ee(B),n[_].c(),n[_].m(g,null))}for(;_<n.length;_+=1)n[_].d(1);n.length=w.length}},i(c){V||(z(v.$$.fragment,c),V=!0)},o(c){R(v.$$.fragment,c),V=!1},d(c){c&&u(e),ee(v),T&&T.d(),Me(n,c)}}}function Ue(r,e,t){let s;Pe(r,He,a=>t(1,s=a));let{data:l}=e;return r.$$set=a=>{"data"in a&&t(0,l=a.data)},[l,s]}class Qe extends Le{constructor(e){super();ke(this,e,Ue,Oe,Te,{data:0})}}function We(r,e={}){var a;const t=(a=r.textContent)!=null?a:"",s={search:"$$",to:""};function l(v){const{search:d,to:f}=Q(Q({},s),v);r.textContent=t.replaceAll(d,f)}return l(e),{update:l}}export{Qe as C,Ke as a,We as r};
