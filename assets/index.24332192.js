var mn=Object.defineProperty;var Ct=Object.getOwnPropertySymbols;var hn=Object.prototype.hasOwnProperty,vn=Object.prototype.propertyIsEnumerable;var Ft=(e,t,n)=>t in e?mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ie=(e,t)=>{for(var n in t||(t={}))hn.call(t,n)&&Ft(e,n,t[n]);if(Ct)for(var n of Ct(t))vn.call(t,n)&&Ft(e,n,t[n]);return e};const gn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};gn();function se(){}function bn(e,t){for(const n in t)e[n]=t[n];return e}function Yt(e){return e()}function St(){return Object.create(null)}function je(e){e.forEach(Yt)}function yn(e){return typeof e=="function"}function de(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function kn(e){return Object.keys(e).length===0}function wn(e,...t){if(e==null)return se;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Pe(e,t,n){e.$$.on_destroy.push(wn(t,n))}function Zt(e,t,n,l){if(e){const s=xt(e,t,n,l);return e[0](s)}}function xt(e,t,n,l){return e[1]&&l?bn(n.ctx.slice(),e[1](l(t))):n.ctx}function en(e,t,n,l){if(e[2]&&l){const s=e[2](l(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(t.dirty.length,s.length);for(let r=0;r<i;r+=1)o[r]=t.dirty[r]|s[r];return o}return t.dirty|s}return t.dirty}function tn(e,t,n,l,s,o){if(s){const i=xt(t,n,l,o);e.p(i,s)}}function nn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function Tt(e){return e==null?"":e}function It(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function Ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function v(){return A(" ")}function ln(){return A("")}function J(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e){return e===""?null:+e}function $n(e){return Array.from(e.childNodes)}function _e(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t){e.value=t==null?"":t}function Mt(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function We(e,t,n){e.classList[n?"add":"remove"](t)}let Ne;function He(e){Ne=e}function sn(){if(!Ne)throw new Error("Function called outside component initialization");return Ne}function jn(e){sn().$$.on_mount.push(e)}function at(e){sn().$$.on_destroy.push(e)}const Ae=[],ue=[],Ue=[],nt=[],Cn=Promise.resolve();let lt=!1;function Fn(){lt||(lt=!0,Cn.then(rn))}function st(e){Ue.push(e)}function pe(e){nt.push(e)}const et=new Set;let Qe=0;function rn(){const e=Ne;do{for(;Qe<Ae.length;){const t=Ae[Qe];Qe++,He(t),Sn(t.$$)}for(He(null),Ae.length=0,Qe=0;ue.length;)ue.pop()();for(let t=0;t<Ue.length;t+=1){const n=Ue[t];et.has(n)||(et.add(n),n())}Ue.length=0}while(Ae.length);for(;nt.length;)nt.pop()();lt=!1,et.clear(),He(e)}function Sn(e){if(e.fragment!==null){e.update(),je(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(st)}}const Ve=new Set;let $e;function ct(){$e={r:0,c:[],p:$e}}function ft(){$e.r||je($e.c),$e=$e.p}function E(e,t){e&&e.i&&(Ve.delete(e),e.i(t))}function q(e,t,n,l){if(e&&e.o){if(Ve.has(e))return;Ve.add(e),$e.c.push(()=>{Ve.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function me(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function ae(e){e&&e.c()}function ne(e,t,n,l){const{fragment:s,on_mount:o,on_destroy:i,after_update:r}=e.$$;s&&s.m(t,n),l||st(()=>{const c=o.map(Yt).filter(yn);i?i.push(...c):je(c),e.$$.on_mount=[]}),r.forEach(st)}function le(e,t){const n=e.$$;n.fragment!==null&&(je(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Tn(e,t){e.$$.dirty[0]===-1&&(Ae.push(e),Fn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,l,s,o,i,r=[-1]){const c=Ne;He(e);const a=e.$$={fragment:null,ctx:null,props:o,update:se,not_equal:s,bound:St(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:St(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};i&&i(a.root);let f=!1;if(a.ctx=n?n(e,t.props||{},(h,w,...$)=>{const m=$.length?$[0]:w;return a.ctx&&s(a.ctx[h],a.ctx[h]=m)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](m),f&&Tn(e,h)),w}):[],a.update(),f=!0,je(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const h=$n(t.target);a.fragment&&a.fragment.l(h),h.forEach(S)}else a.fragment&&a.fragment.c();t.intro&&E(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),rn()}He(c)}class ve{$destroy(){le(this,1),this.$destroy=se}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!kn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function In(e){let t,n,l,s,o,i;const r=e[2].default,c=Zt(r,e,e[1],null);return{c(){t=_("details"),n=_("summary"),l=A(e[0]),s=v(),o=_("div"),c&&c.c(),d(n,"class","svelte-prfamu"),d(o,"class","content svelte-prfamu"),d(t,"class","svelte-prfamu")},m(a,f){I(a,t,f),u(t,n),u(n,l),u(t,s),u(t,o),c&&c.m(o,null),i=!0},p(a,[f]){(!i||f&1)&&_e(l,a[0]),c&&c.p&&(!i||f&2)&&tn(c,r,a,a[1],i?en(r,a[1],f,null):nn(a[1]),null)},i(a){i||(E(c,a),i=!0)},o(a){q(c,a),i=!1},d(a){a&&S(t),c&&c.d(a)}}}function Mn(e,t,n){let{$$slots:l={},$$scope:s}=t,{label:o="PLACEHOLDER"}=t;return e.$$set=i=>{"label"in i&&n(0,o=i.label),"$$scope"in i&&n(1,s=i.$$scope)},[o,s,l]}class Pn extends ve{constructor(t){super(),he(this,t,Mn,In,de,{label:0})}}const Me=[];function En(e,t=se){let n;const l=new Set;function s(r){if(de(e,r)&&(e=r,n)){const c=!Me.length;for(const a of l)a[1](),Me.push(a,e);if(c){for(let a=0;a<Me.length;a+=2)Me[a][0](Me[a+1]);Me.length=0}}}function o(r){s(r(e))}function i(r,c=se){const a=[r,c];return l.add(a),l.size===1&&(n=t(s)||se),r(e),()=>{l.delete(a),l.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:i}}const tt="app-data";var on=(e=>(e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday",e))(on||{});const An=Object.values(on),rt=["Monday","Tuesday","Wednesday","Thursday","Friday"],_t=e=>{e=e.trim();const t=(r,c,a)=>{r=r.toLowerCase();for(const f of c)if(r.endsWith(f)){const h=r.substring(0,r.length-f.length);a(h);break}return r};let n=!0,l=!1;t(e,["pm","p"],r=>{e=r,n=!1,l=!0}),t(e,["am","a"],r=>{e=r,l=!0});let s=0,o=0;if(e=e.trimEnd(),e.includes(":")){const[r,c]=e.split(":").map(a=>a.trim());if(r==""||c=="")return null;s=parseInt(r),o=parseInt(c)}else s=parseInt(e);let i=s*60+o;return l&&s==12&&n&&(i-=12*60),l&&!n&&i<12*60&&(i+=12*60),isNaN(s)||isNaN(o)||s>23||o>59?null:i},Pt=(e,t=!0)=>{let n=Math.floor(e/60),l=Math.floor(e%60);n==0&&(n=12);let s="AM";e>=12*60&&(s="PM",n-=12);const o=n.toString().padStart(2,"0"),i=l.toString().padStart(2,"0");return`${o}:${i} ${s}`},un=e=>e/60,Le=(e,t)=>un(t-e),On=(e,{lunch_minutes:t})=>{if(!ot(e))return 0;const n=e.end-e.start-t;return n<0?0:n},Xe=(e,t)=>un(On(e,t)),an=e=>e.start!==null,cn=e=>e.end!==null,fn=(e,t,n)=>an(e)==t&&cn(e)==n,ot=e=>an(e)&&cn(e),Oe=[(e,t)=>e+t,0],_n=()=>{const e=new Date,t=e.getHours();return e.getMinutes()+t*60},Hn=({clock:e,enabled:t})=>!t||e.start!=null&&e.end!=null,dt=(e,{lunch_minutes:t})=>{const{clock:n}=e;if(!e.enabled||!n.start&&n.end||fn(n,!1,!0)||!n.start&&!n.end)return 0;let l=0;if(Hn(e))l=Le(n.start,n.end);else if(n.start&&!n.end){if(!dn(e))return 0;const s=_n();l=Le(n.start,s)}return l-=t/60,l},dn=e=>{const t=new Date,n=An[t.getDay()];return e.weekday===n},pt=e=>e.start!=null&&e.end!=null,Ln=(e,t,{lunch_minutes:n,usual_start_time:l})=>{let s=Ie({},e),o=l!=null?l:_t("8a");if(!s.start&&!s.end&&(s.start=o),pt(s)&&(s.end=null),s.end){if(!s.start){let r=s.end-t*60-n;s.start=Math.max(0,r)}}else{let r=s.start+t*60+n;s.end=Math.min(23*60,r)}return s},Nn=(e,t)=>{const{usual_start_time:n,target_week_hours:l,lunch_minutes:s}=t;e.forEach(f=>{f.pre_clock=Ie({},f.clock)});const o=e.map(({pre_clock:f})=>Xe(f,t)).reduce((f,h)=>f+h,0),i=l-o;if(i>l)return;const c=e.filter(({enabled:f})=>f).filter(f=>!pt(f.pre_clock));if(c.length==0)return;const a=i/c.length;for(const f of c)f.pre_clock=Ln(f.pre_clock,a,t);for(let f=0;f<e.length;f++)e[f]=Ie({},e[f])},it={usual_start_time:_t("8:00"),lunch_minutes:40,target_week_hours:40,overtime_hours:40,hourly_pay_rate:21.28,overtime_pay_rate:1.5,show_pay:!0,twelve_hour_time:!0,week_predictions:!0,show_whole_week:!1,skipped_days_count:!1,minimal_mode:!1,tax_rate:.2},R=En(it);function Et(e){let t;return{c(){t=_("span"),t.textContent="Are you sure?",d(t,"class","confirmation svelte-iw824q")},m(n,l){I(n,t,l)},d(n){n&&S(t)}}}function qn(e){let t,n,l,s,o,i;const r=e[4].default,c=Zt(r,e,e[3],null);let a=e[0]&&Et();return{c(){t=_("button"),n=_("span"),c&&c.c(),l=v(),a&&a.c(),d(n,"class","svelte-iw824q"),We(n,"hidden",e[0]),d(t,"class","svelte-iw824q")},m(f,h){I(f,t,h),u(t,n),c&&c.m(n,null),u(t,l),a&&a.m(t,null),s=!0,o||(i=J(t,"click",e[1]),o=!0)},p(f,[h]){c&&c.p&&(!s||h&8)&&tn(c,r,f,f[3],s?en(r,f[3],h,null):nn(f[3]),null),h&1&&We(n,"hidden",f[0]),f[0]?a||(a=Et(),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(f){s||(E(c,f),s=!0)},o(f){q(c,f),s=!1},d(f){f&&S(t),c&&c.d(f),a&&a.d(),o=!1,i()}}}function Dn(e,t,n){let{$$slots:l={},$$scope:s}=t,o=!1,{on_confirm:i=()=>{}}=t,r=null;const c=()=>{if(!o){n(0,o=!0),r=setTimeout(()=>n(0,o=!1),2e3);return}clearTimeout(r),i(),n(0,o=!1)};return e.$$set=a=>{"on_confirm"in a&&n(2,i=a.on_confirm),"$$scope"in a&&n(3,s=a.$$scope)},[o,c,i,s,l]}class mt extends ve{constructor(t){super(),he(this,t,Dn,qn,de,{on_confirm:2})}}function At(e){let t,n,l,s;n=new mt({props:{on_confirm:e[1],$$slots:{default:[Bn]},$$scope:{ctx:e}}});let o=e[0].week_predictions&&Ot(e);return{c(){t=_("div"),ae(n.$$.fragment),l=v(),o&&o.c(),d(t,"class","container svelte-2y0uf9")},m(i,r){I(i,t,r),ne(n,t,null),u(t,l),o&&o.m(t,null),s=!0},p(i,r){const c={};r&16&&(c.$$scope={dirty:r,ctx:i}),n.$set(c),i[0].week_predictions?o?(o.p(i,r),r&1&&E(o,1)):(o=Ot(i),o.c(),E(o,1),o.m(t,null)):o&&(ct(),q(o,1,1,()=>{o=null}),ft())},i(i){s||(E(n.$$.fragment,i),E(o),s=!0)},o(i){q(n.$$.fragment,i),q(o),s=!1},d(i){i&&S(t),le(n),o&&o.d()}}}function Bn(e){let t;return{c(){t=A("Clear All")},m(n,l){I(n,t,l)},d(n){n&&S(t)}}}function Ot(e){let t,n;return t=new mt({props:{on_confirm:e[2],$$slots:{default:[zn]},$$scope:{ctx:e}}}),{c(){ae(t.$$.fragment)},m(l,s){ne(t,l,s),n=!0},p(l,s){const o={};s&16&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){n||(E(t.$$.fragment,l),n=!0)},o(l){q(t.$$.fragment,l),n=!1},d(l){le(t,l)}}}function zn(e){let t;return{c(){t=A("Take All Suggestions")},m(n,l){I(n,t,l)},d(n){n&&S(t)}}}function Rn(e){let t,n,l=!e[0].minimal_mode&&At(e);return{c(){l&&l.c(),t=ln()},m(s,o){l&&l.m(s,o),I(s,t,o),n=!0},p(s,[o]){s[0].minimal_mode?l&&(ct(),q(l,1,1,()=>{l=null}),ft()):l?(l.p(s,o),o&1&&E(l,1)):(l=At(s),l.c(),E(l,1),l.m(t.parentNode,t))},i(s){n||(E(l),n=!0)},o(s){q(l),n=!1},d(s){l&&l.d(s),s&&S(t)}}}function Jn(e,t,n){let l;Pe(e,R,r=>n(0,l=r));let{days:s}=t;const o=()=>{n(3,s=rt.map(r=>({weekday:r,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0})))},i=()=>{s.forEach(r=>{r.clock=r.pre_clock}),n(3,s)};return e.$$set=r=>{"days"in r&&n(3,s=r.days)},[l,o,i,s]}class Kn extends ve{constructor(t){super(),he(this,t,Jn,Rn,de,{days:3})}}function Gn(e){let t,n,l,s,o,i;return{c(){t=_("input"),n=v(),l=_("button"),s=A("x"),d(t,"type","text"),d(t,"placeholder",e[1]),t.disabled=e[0],d(t,"class","svelte-1yb21j9"),We(t,"green",Ht=="passed"),We(t,"yellow",Ht=="inprogress"),l.disabled=e[0]},m(r,c){I(r,t,c),e[11](t),x(t,e[3]),I(r,n,c),I(r,l,c),u(l,s),o||(i=[J(t,"input",e[12]),J(t,"focusout",e[4]),J(t,"keyup",e[5]),J(t,"focus",e[6]),J(l,"click",e[7])],o=!0)},p(r,[c]){c&2&&d(t,"placeholder",r[1]),c&1&&(t.disabled=r[0]),c&8&&t.value!==r[3]&&x(t,r[3]),c&1&&(l.disabled=r[0])},i:se,o:se,d(r){r&&S(t),e[11](null),r&&S(n),r&&S(l),o=!1,je(i)}}}let Ht="future";function Qn(e,t,n){let{value:l=null}=t,{disabled:s=!1}=t,{shadow_time:o=null}=t,{show_shadow:i=!0}=t,r="";const c=()=>{const g=_t(m);a(g),n(8,l=g)},a=g=>{if(g===null){n(3,m="");return}const L=Pt(g);n(3,m=L)},f=g=>{g.code==="Enter"&&c()},h=()=>{$.select()},w=()=>{n(8,l=null)};let $,m;function p(g){ue[g?"unshift":"push"](()=>{$=g,n(2,$)})}function y(){m=this.value,n(3,m)}return e.$$set=g=>{"value"in g&&n(8,l=g.value),"disabled"in g&&n(0,s=g.disabled),"shadow_time"in g&&n(9,o=g.shadow_time),"show_shadow"in g&&n(10,i=g.show_shadow)},e.$$.update=()=>{e.$$.dirty&1536&&n(1,r=o==null||!i?"-- : --":Pt(o)),e.$$.dirty&256&&a(l)},[s,r,$,m,c,f,h,w,l,o,i,p,y]}class ut extends ve{constructor(t){super(),he(this,t,Qn,Gn,de,{value:8,disabled:0,shadow_time:9,show_shadow:10})}}function Lt(e){let t,n,l=Xe(e[0].pre_clock,e[1]).toFixed(2)+"",s,o;return{c(){t=_("span"),n=A("("),s=A(l),o=A(")"),d(t,"class","hours-prediction svelte-16ii6u0")},m(i,r){I(i,t,r),u(t,n),u(t,s),u(t,o)},p(i,r){r&3&&l!==(l=Xe(i[0].pre_clock,i[1]).toFixed(2)+"")&&_e(s,l)},d(i){i&&S(t)}}}function Nt(e){let t,n,l,s,o,i,r=e[1].week_predictions&&qt(e);return{c(){t=_("td"),n=_("div"),r&&r.c(),l=v(),s=_("button"),s.textContent="Clear",d(n,"class","actions svelte-16ii6u0")},m(c,a){I(c,t,a),u(t,n),r&&r.m(n,null),u(n,l),u(n,s),o||(i=J(s,"click",e[3]),o=!0)},p(c,a){c[1].week_predictions?r?r.p(c,a):(r=qt(c),r.c(),r.m(n,l)):r&&(r.d(1),r=null)},d(c){c&&S(t),r&&r.d(),o=!1,i()}}}function qt(e){let t,n,l;return{c(){t=_("button"),t.textContent="Take Suggestion"},m(s,o){I(s,t,o),n||(l=J(t,"click",e[4]),n=!0)},p:se,d(s){s&&S(t),n=!1,l()}}}function Un(e){let t,n,l=e[0].weekday+"",s,o,i,r,c,a,f,h,w,$,m,p,y,g,L,D,B=e[2].toFixed(2)+"",re,W,X=!ot(e[0].clock)&&e[1].week_predictions,ee,K,M,oe;function Y(k){e[6](k)}function Z(k){e[7](k)}let Q={show_shadow:e[1].week_predictions,disabled:!e[0].enabled};e[0].clock.start!==void 0&&(Q.value=e[0].clock.start),e[0].pre_clock.start!==void 0&&(Q.shadow_time=e[0].pre_clock.start),f=new ut({props:Q}),ue.push(()=>me(f,"value",Y)),ue.push(()=>me(f,"shadow_time",Z));function ce(k){e[8](k)}function T(k){e[9](k)}let G={show_shadow:e[1].week_predictions,disabled:!e[0].enabled};e[0].clock.end!==void 0&&(G.value=e[0].clock.end),e[0].pre_clock.end!==void 0&&(G.shadow_time=e[0].pre_clock.end),p=new ut({props:G}),ue.push(()=>me(p,"value",ce)),ue.push(()=>me(p,"shadow_time",T));let O=X&&Lt(e),H=!e[1].minimal_mode&&Nt(e);return{c(){t=_("tr"),n=_("td"),s=A(l),o=v(),i=_("td"),r=_("input"),c=v(),a=_("td"),ae(f.$$.fragment),$=v(),m=_("td"),ae(p.$$.fragment),L=v(),D=_("td"),re=A(B),W=v(),O&&O.c(),ee=v(),H&&H.c(),d(n,"class","weekday svelte-16ii6u0"),d(r,"type","checkbox"),d(r,"class","svelte-16ii6u0"),d(a,"class","clock-time svelte-16ii6u0"),d(m,"class","clock-time svelte-16ii6u0"),d(D,"class","hours svelte-16ii6u0"),d(t,"class","container svelte-16ii6u0")},m(k,P){I(k,t,P),u(t,n),u(n,s),u(t,o),u(t,i),u(i,r),r.checked=e[0].enabled,u(t,c),u(t,a),ne(f,a,null),u(t,$),u(t,m),ne(p,m,null),u(t,L),u(t,D),u(D,re),u(D,W),O&&O.m(D,null),u(t,ee),H&&H.m(t,null),K=!0,M||(oe=J(r,"change",e[5]),M=!0)},p(k,[P]){(!K||P&1)&&l!==(l=k[0].weekday+"")&&_e(s,l),P&1&&(r.checked=k[0].enabled);const C={};P&2&&(C.show_shadow=k[1].week_predictions),P&1&&(C.disabled=!k[0].enabled),!h&&P&1&&(h=!0,C.value=k[0].clock.start,pe(()=>h=!1)),!w&&P&1&&(w=!0,C.shadow_time=k[0].pre_clock.start,pe(()=>w=!1)),f.$set(C);const U={};P&2&&(U.show_shadow=k[1].week_predictions),P&1&&(U.disabled=!k[0].enabled),!y&&P&1&&(y=!0,U.value=k[0].clock.end,pe(()=>y=!1)),!g&&P&1&&(g=!0,U.shadow_time=k[0].pre_clock.end,pe(()=>g=!1)),p.$set(U),(!K||P&4)&&B!==(B=k[2].toFixed(2)+"")&&_e(re,B),P&3&&(X=!ot(k[0].clock)&&k[1].week_predictions),X?O?O.p(k,P):(O=Lt(k),O.c(),O.m(D,null)):O&&(O.d(1),O=null),k[1].minimal_mode?H&&(H.d(1),H=null):H?H.p(k,P):(H=Nt(k),H.c(),H.m(t,null))},i(k){K||(E(f.$$.fragment,k),E(p.$$.fragment,k),K=!0)},o(k){q(f.$$.fragment,k),q(p.$$.fragment,k),K=!1},d(k){k&&S(t),le(f),le(p),O&&O.d(),H&&H.d(),M=!1,oe()}}}function Vn(e,t,n){let l;Pe(e,R,p=>n(1,l=p));let{day:s}=t,o=0;const i=()=>{n(2,o=dt(s,l))},r=()=>{n(0,s.clock={start:null,end:null},s)},c=()=>{n(0,s.clock=s.pre_clock,s)},a=setInterval(i,5e3);at(()=>clearInterval(a));function f(){s.enabled=this.checked,n(0,s)}function h(p){e.$$.not_equal(s.clock.start,p)&&(s.clock.start=p,n(0,s))}function w(p){e.$$.not_equal(s.pre_clock.start,p)&&(s.pre_clock.start=p,n(0,s))}function $(p){e.$$.not_equal(s.clock.end,p)&&(s.clock.end=p,n(0,s))}function m(p){e.$$.not_equal(s.pre_clock.end,p)&&(s.pre_clock.end=p,n(0,s))}return e.$$set=p=>{"day"in p&&n(0,s=p.day)},e.$$.update=()=>{e.$$.dirty&3&&(l.lunch_minutes,i())},[s,l,o,r,c,f,h,w,$,m]}class Wn extends ve{constructor(t){super(),he(this,t,Vn,Un,de,{day:0})}}function Dt(e,t,n){const l=e.slice();return l[4]=t[n],l}function Bt(e){let t,n;return{c(){t=_("div"),d(t,"class",n=Tt(e[4].classes+" bar")+" svelte-1e65z40"),Mt(t,"width",`${e[4].percent}%`,!1)},m(l,s){I(l,t,s)},p(l,s){s&1&&n!==(n=Tt(l[4].classes+" bar")+" svelte-1e65z40")&&d(t,"class",n),s&1&&Mt(t,"width",`${l[4].percent}%`,!1)},d(l){l&&S(t)}}}function Xn(e){let t,n,l=e[0],s=[];for(let o=0;o<l.length;o+=1)s[o]=Bt(Dt(e,l,o));return{c(){t=_("div"),n=_("div");for(let o=0;o<s.length;o+=1)s[o].c();d(n,"class","full-bar svelte-1e65z40"),d(t,"class","container svelte-1e65z40")},m(o,i){I(o,t,i),u(t,n);for(let r=0;r<s.length;r+=1)s[r].m(n,null)},p(o,[i]){if(i&1){l=o[0];let r;for(r=0;r<l.length;r+=1){const c=Dt(o,l,r);s[r]?s[r].p(c,i):(s[r]=Bt(c),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=l.length}},i:se,o:se,d(o){o&&S(t),Ye(s,o)}}}function Yn(e,t,n){let l;Pe(e,R,r=>n(2,l=r));let{days:s}=t,o=[{classes:"red",percent:50,label:"test"},{classes:"green",percent:20,label:"test"}];const i=()=>{const{target_week_hours:r}=l;n(0,o=[]);const a=s.map(f=>dt(f,l)).reduce(...Oe)/r*100;o.push({classes:"blue",percent:a,label:"Complete"})};return e.$$set=r=>{"days"in r&&n(1,s=r.days)},e.$$.update=()=>{e.$$.dirty&2&&i()},[o,s]}class Zn extends ve{constructor(t){super(),he(this,t,Yn,Xn,de,{days:1})}}function zt(e,t,n){const l=e.slice();return l[5]=t[n],l}function Rt(e,t,n){const l=e.slice();return l[8]=t[n],l}function Jt(e){let t,n,l=e[5][0].pre_value+"",s,o;return{c(){t=_("span"),n=A("("),s=A(l),o=A(")"),d(t,"class","pre-value svelte-ihro0a")},m(i,r){I(i,t,r),u(t,n),u(t,s),u(t,o)},p(i,r){r&1&&l!==(l=i[5][0].pre_value+"")&&_e(s,l)},d(i){i&&S(t)}}}function Kt(e){let t,n=e[5].slice(1),l=[];for(let s=0;s<n.length;s+=1)l[s]=Qt(Rt(e,n,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ln()},m(s,o){for(let i=0;i<l.length;i+=1)l[i].m(s,o);I(s,t,o)},p(s,o){if(o&3){n=s[5].slice(1);let i;for(i=0;i<n.length;i+=1){const r=Rt(s,n,i);l[i]?l[i].p(r,o):(l[i]=Qt(r),l[i].c(),l[i].m(t.parentNode,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(s){Ye(l,s),s&&S(t)}}}function Gt(e){let t,n,l=e[8].pre_value+"",s,o;return{c(){t=_("span"),n=A("("),s=A(l),o=A(")"),d(t,"class","pre-value svelte-ihro0a")},m(i,r){I(i,t,r),u(t,n),u(t,s),u(t,o)},p(i,r){r&1&&l!==(l=i[8].pre_value+"")&&_e(s,l)},d(i){i&&S(t)}}}function Qt(e){let t,n,l,s,o=e[8].label+"",i,r,c,a,f=e[8].value+"",h,w,$,m=e[1].week_predictions&&Gt(e);return{c(){t=_("tr"),n=_("td"),l=v(),s=_("td"),i=A(o),r=A(":"),c=v(),a=_("td"),h=A(f),w=v(),m&&m.c(),$=v(),d(n,"class","blank svelte-ihro0a"),d(s,"class","label svelte-ihro0a"),d(t,"class","svelte-ihro0a")},m(p,y){I(p,t,y),u(t,n),u(t,l),u(t,s),u(s,i),u(s,r),u(t,c),u(t,a),u(a,h),u(a,w),m&&m.m(a,null),u(t,$)},p(p,y){y&1&&o!==(o=p[8].label+"")&&_e(i,o),y&1&&f!==(f=p[8].value+"")&&_e(h,f),p[1].week_predictions?m?m.p(p,y):(m=Gt(p),m.c(),m.m(a,null)):m&&(m.d(1),m=null)},d(p){p&&S(t),m&&m.d()}}}function Ut(e){let t,n,l,s=e[5][0].label+"",o,i,r,c,a,f=e[5][0].value+"",h,w,$,m,p=e[1].week_predictions&&Jt(e),y=!e[1].minimal_mode&&Kt(e);return{c(){t=_("table"),n=_("tr"),l=_("td"),o=A(s),i=A(":"),c=v(),a=_("td"),h=A(f),w=v(),p&&p.c(),$=v(),y&&y.c(),m=v(),d(l,"colspan",r=2),d(l,"class","label svelte-ihro0a"),d(a,"class","value"),d(n,"class","svelte-ihro0a"),d(t,"class","stat-box")},m(g,L){I(g,t,L),u(t,n),u(n,l),u(l,o),u(l,i),u(n,c),u(n,a),u(a,h),u(a,w),p&&p.m(a,null),u(t,$),y&&y.m(t,null),u(t,m)},p(g,L){L&1&&s!==(s=g[5][0].label+"")&&_e(o,s),L&1&&f!==(f=g[5][0].value+"")&&_e(h,f),g[1].week_predictions?p?p.p(g,L):(p=Jt(g),p.c(),p.m(a,null)):p&&(p.d(1),p=null),g[1].minimal_mode?y&&(y.d(1),y=null):y?y.p(g,L):(y=Kt(g),y.c(),y.m(t,m))},d(g){g&&S(t),p&&p.d(),y&&y.d()}}}function xn(e){let t,n=e[0],l=[];for(let s=0;s<n.length;s+=1)l[s]=Ut(zt(e,n,s));return{c(){t=_("div");for(let s=0;s<l.length;s+=1)l[s].c();d(t,"class","container svelte-ihro0a")},m(s,o){I(s,t,o);for(let i=0;i<l.length;i+=1)l[i].m(t,null)},p(s,[o]){if(o&3){n=s[0];let i;for(i=0;i<n.length;i+=1){const r=zt(s,n,i);l[i]?l[i].p(r,o):(l[i]=Ut(r),l[i].c(),l[i].m(t,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},i:se,o:se,d(s){s&&S(t),Ye(l,s)}}}function el(e,t,n){let l;Pe(e,R,c=>n(1,l=c));let{days:s}=t,o=[[{label:"Paid Hours",value:"1",pre_value:""},{label:"Paid Hours",value:"2",pre_value:""},{label:"Paid Hours",value:"3",pre_value:""}],[{label:"Paid Hours",value:"1",pre_value:""},{label:"Paid Hours",value:"2",pre_value:""},{label:"Paid Hours",value:"3",pre_value:""}]];const i=()=>{const{overtime_hours:c,hourly_pay_rate:a,overtime_pay_rate:f,tax_rate:h,show_pay:w}=l;n(0,o=[]);const $=s.filter(({enabled:T})=>T),m=s.map(T=>dt(T,l)).reduce(...Oe),p=$.map(T=>Xe(T.pre_clock,l)).reduce(...Oe),y=Math.min(c,m),g=Math.min(c,p),L=m>c?m-c:0,D=p>c?p-c:0,B=$.map(T=>{const{clock:G}=T;return pt(G)?Le(G.start,G.end):fn(G,!0,!1)&&dn(T)?Le(G.start,_n()):0}).reduce(...Oe),re=$.map(({pre_clock:T})=>Le(T.start,T.end)).reduce(...Oe),W=[{label:"Hours",value:m.toFixed(2),pre_value:p.toFixed(2)},{label:"Base",value:y.toFixed(2),pre_value:g.toFixed(2)},{label:"Overtime",value:L.toFixed(2),pre_value:D.toFixed(2)},{label:"Total Hours",value:B.toFixed(2),pre_value:re.toFixed(2)}];if(o.push(W),!w)return;const X=y*a,ee=g*a,K=L*a*f,M=D*a*f,oe=X+K,Y=ee+M,Z=oe*h,Q=Y*h,ce=[{label:"Pay",value:`${(oe-Z).toFixed(2)}$`,pre_value:`${(Y-Q).toFixed(2)}$`},{label:"Base",value:`${X.toFixed(2)}$`,pre_value:`${ee.toFixed(2)}$`},{label:"Overtime",value:`${K.toFixed(2)}$`,pre_value:`${M.toFixed(2)}$`},{label:"Taxes",value:`${Z.toFixed(2)}$`,pre_value:`${Q.toFixed(2)}$`}];o.push(ce)},r=setInterval(i,1e4);return at(()=>clearInterval(r)),e.$$set=c=>{"days"in c&&n(2,s=c.days)},e.$$.update=()=>{e.$$.dirty&4&&i()},[o,l,s]}class tl extends ve{constructor(t){super(),he(this,t,el,xn,de,{days:2})}}function nl(e){let t;return{c(){t=A("Delete all settings")},m(n,l){I(n,t,l)},d(n){n&&S(t)}}}function ll(e){let t,n,l,s,o,i,r,c,a,f,h,w,$,m,p,y,g,L,D,B,re,W,X,ee,K,M,oe,Y,Z,Q,ce,T,G,O,H,k,P,C,U,F,Ce,qe,ge,b,z,te,be,Ee,N,fe,ht,Fe,De,vt,Be,ye,gt,Se,ze,bt,Re,ke,yt,Te,Je,kt,Ke,we,Ge,Ze,wt;function pn(j){e[2](j)}let $t={};return e[1].usual_start_time!==void 0&&($t.value=e[1].usual_start_time),r=new ut({props:$t}),ue.push(()=>me(r,"value",pn)),we=new mt({props:{on_confirm:e[0],$$slots:{default:[nl]},$$scope:{ctx:e}}}),{c(){t=_("table"),n=_("tbody"),l=_("tr"),s=_("td"),s.textContent="Prefered Start Time:",o=v(),i=_("td"),ae(r.$$.fragment),a=v(),f=_("tr"),h=_("td"),h.textContent="Target Weekly Hours:",w=v(),$=_("td"),m=_("input"),p=v(),y=_("tr"),g=_("td"),g.textContent="Lunch Duration (minutes):",L=v(),D=_("td"),B=_("input"),re=v(),W=_("tr"),X=_("td"),X.textContent="Overtime Threshold (hours):",ee=v(),K=_("td"),M=_("input"),oe=v(),Y=_("tr"),Z=_("td"),Z.textContent="Hourly Pay ($):",Q=v(),ce=_("td"),T=_("input"),G=v(),O=_("tr"),H=_("td"),H.textContent="Tax Rate:",k=v(),P=_("td"),C=_("input"),U=v(),F=_("tr"),Ce=_("td"),Ce.textContent="Overtime Rate:",qe=v(),ge=_("td"),b=_("input"),z=v(),te=_("tr"),be=_("td"),be.textContent="Show Pay:",Ee=v(),N=_("td"),fe=_("input"),ht=v(),Fe=_("tr"),De=_("td"),De.textContent="Show Suggestions:",vt=v(),Be=_("td"),ye=_("input"),gt=v(),Se=_("tr"),ze=_("td"),ze.textContent="Minimal Mode:",bt=v(),Re=_("td"),ke=_("input"),yt=v(),Te=_("tr"),Je=_("td"),Je.textContent="Reset App:",kt=v(),Ke=_("td"),ae(we.$$.fragment),d(s,"class","svelte-m31vvj"),d(i,"class","svelte-m31vvj"),d(l,"class","svelte-m31vvj"),d(h,"class","svelte-m31vvj"),d(m,"class","input"),d(m,"type","number"),d($,"class","svelte-m31vvj"),d(f,"class","svelte-m31vvj"),d(g,"class","svelte-m31vvj"),d(B,"class","input"),d(B,"type","number"),d(D,"class","svelte-m31vvj"),d(y,"class","svelte-m31vvj"),d(X,"class","svelte-m31vvj"),d(M,"class","input"),d(M,"type","number"),d(K,"class","svelte-m31vvj"),d(W,"class","svelte-m31vvj"),d(Z,"class","svelte-m31vvj"),d(T,"class","input"),d(T,"type","number"),d(ce,"class","svelte-m31vvj"),d(Y,"class","svelte-m31vvj"),d(H,"class","svelte-m31vvj"),d(C,"class","input"),d(C,"type","number"),d(P,"class","svelte-m31vvj"),d(O,"class","svelte-m31vvj"),d(Ce,"class","svelte-m31vvj"),d(b,"class","input"),d(b,"type","number"),d(ge,"class","svelte-m31vvj"),d(F,"class","svelte-m31vvj"),d(be,"class","svelte-m31vvj"),d(fe,"class",""),d(fe,"type","checkbox"),d(N,"class","svelte-m31vvj"),d(te,"class","svelte-m31vvj"),d(De,"class","svelte-m31vvj"),d(ye,"class",""),d(ye,"type","checkbox"),d(Be,"class","svelte-m31vvj"),d(Fe,"class","svelte-m31vvj"),d(ze,"class","svelte-m31vvj"),d(ke,"class",""),d(ke,"type","checkbox"),d(Re,"class","svelte-m31vvj"),d(Se,"class","svelte-m31vvj"),d(Je,"class","svelte-m31vvj"),d(Ke,"class","svelte-m31vvj"),d(Te,"class","svelte-m31vvj")},m(j,V){I(j,t,V),u(t,n),u(n,l),u(l,s),u(l,o),u(l,i),ne(r,i,null),u(n,a),u(n,f),u(f,h),u(f,w),u(f,$),u($,m),x(m,e[1].target_week_hours),u(n,p),u(n,y),u(y,g),u(y,L),u(y,D),u(D,B),x(B,e[1].lunch_minutes),u(n,re),u(n,W),u(W,X),u(W,ee),u(W,K),u(K,M),x(M,e[1].overtime_hours),u(n,oe),u(n,Y),u(Y,Z),u(Y,Q),u(Y,ce),u(ce,T),x(T,e[1].hourly_pay_rate),u(n,G),u(n,O),u(O,H),u(O,k),u(O,P),u(P,C),x(C,e[1].tax_rate),u(n,U),u(n,F),u(F,Ce),u(F,qe),u(F,ge),u(ge,b),x(b,e[1].overtime_pay_rate),u(n,z),u(n,te),u(te,be),u(te,Ee),u(te,N),u(N,fe),fe.checked=e[1].show_pay,u(n,ht),u(n,Fe),u(Fe,De),u(Fe,vt),u(Fe,Be),u(Be,ye),ye.checked=e[1].week_predictions,u(n,gt),u(n,Se),u(Se,ze),u(Se,bt),u(Se,Re),u(Re,ke),ke.checked=e[1].minimal_mode,u(n,yt),u(n,Te),u(Te,Je),u(Te,kt),u(Te,Ke),ne(we,Ke,null),Ge=!0,Ze||(wt=[J(m,"input",e[3]),J(B,"input",e[4]),J(M,"input",e[5]),J(T,"input",e[6]),J(C,"input",e[7]),J(b,"input",e[8]),J(fe,"change",e[9]),J(ye,"change",e[10]),J(ke,"change",e[11])],Ze=!0)},p(j,V){const jt={};!c&&V&2&&(c=!0,jt.value=j[1].usual_start_time,pe(()=>c=!1)),r.$set(jt),V&2&&ie(m.value)!==j[1].target_week_hours&&x(m,j[1].target_week_hours),V&2&&ie(B.value)!==j[1].lunch_minutes&&x(B,j[1].lunch_minutes),V&2&&ie(M.value)!==j[1].overtime_hours&&x(M,j[1].overtime_hours),V&2&&ie(T.value)!==j[1].hourly_pay_rate&&x(T,j[1].hourly_pay_rate),V&2&&ie(C.value)!==j[1].tax_rate&&x(C,j[1].tax_rate),V&2&&ie(b.value)!==j[1].overtime_pay_rate&&x(b,j[1].overtime_pay_rate),V&2&&(fe.checked=j[1].show_pay),V&2&&(ye.checked=j[1].week_predictions),V&2&&(ke.checked=j[1].minimal_mode);const xe={};V&1&&(xe.on_confirm=j[0]),V&4096&&(xe.$$scope={dirty:V,ctx:j}),we.$set(xe)},i(j){Ge||(E(r.$$.fragment,j),E(we.$$.fragment,j),Ge=!0)},o(j){q(r.$$.fragment,j),q(we.$$.fragment,j),Ge=!1},d(j){j&&S(t),le(r),le(we),Ze=!1,je(wt)}}}function sl(e){let t,n;return t=new Pn({props:{label:"Preferences",$$slots:{default:[ll]},$$scope:{ctx:e}}}),{c(){ae(t.$$.fragment)},m(l,s){ne(t,l,s),n=!0},p(l,[s]){const o={};s&4099&&(o.$$scope={dirty:s,ctx:l}),t.$set(o)},i(l){n||(E(t.$$.fragment,l),n=!0)},o(l){q(t.$$.fragment,l),n=!1},d(l){le(t,l)}}}function rl(e,t,n){let l;Pe(e,R,p=>n(1,l=p));let{reset_app:s}=t;function o(p){e.$$.not_equal(l.usual_start_time,p)&&(l.usual_start_time=p,R.set(l))}function i(){l.target_week_hours=ie(this.value),R.set(l)}function r(){l.lunch_minutes=ie(this.value),R.set(l)}function c(){l.overtime_hours=ie(this.value),R.set(l)}function a(){l.hourly_pay_rate=ie(this.value),R.set(l)}function f(){l.tax_rate=ie(this.value),R.set(l)}function h(){l.overtime_pay_rate=ie(this.value),R.set(l)}function w(){l.show_pay=this.checked,R.set(l)}function $(){l.week_predictions=this.checked,R.set(l)}function m(){l.minimal_mode=this.checked,R.set(l)}return e.$$set=p=>{"reset_app"in p&&n(0,s=p.reset_app)},[s,l,o,i,r,c,a,f,h,w,$,m]}class ol extends ve{constructor(t){super(),he(this,t,rl,sl,de,{reset_app:0})}}function Vt(e,t,n){const l=e.slice();return l[11]=t[n],l[12]=t,l[13]=n,l}function Wt(e){let t;return{c(){t=_("th")},m(n,l){I(n,t,l)},d(n){n&&S(t)}}}function Xt(e){let t,n,l;function s(i){e[5](i,e[11],e[12],e[13])}let o={};return e[11]!==void 0&&(o.day=e[11]),t=new Wn({props:o}),ue.push(()=>me(t,"day",s)),{c(){ae(t.$$.fragment)},m(i,r){ne(t,i,r),l=!0},p(i,r){e=i;const c={};!n&&r&1&&(n=!0,c.day=e[11],pe(()=>n=!1)),t.$set(c)},i(i){l||(E(t.$$.fragment,i),l=!0)},o(i){q(t.$$.fragment,i),l=!1},d(i){le(t,i)}}}function il(e){let t,n,l,s,o,i,r,c,a,f,h,w,$,m,p,y,g,L,D,B,re,W,X,ee,K,M,oe,Y,Z,Q,ce,T,G;function O(b){e[3](b)}let H={};e[0]!==void 0&&(H.days=e[0]),s=new tl({props:H}),ue.push(()=>me(s,"days",O));function k(b){e[4](b)}let P={};e[0]!==void 0&&(P.days=e[0]),r=new Zn({props:P}),ue.push(()=>me(r,"days",k));let C=!e[1].minimal_mode&&Wt(),U=e[0],F=[];for(let b=0;b<U.length;b+=1)F[b]=Xt(Vt(e,U,b));const Ce=b=>q(F[b],1,1,()=>{F[b]=null});function qe(b){e[6](b)}let ge={};return e[0]!==void 0&&(ge.days=e[0]),M=new Kn({props:ge}),ue.push(()=>me(M,"days",qe)),Q=new ol({props:{reset_app:e[2]}}),{c(){t=_("div"),n=_("div"),n.innerHTML=`<h1 class="svelte-27ygun"><a href="https://github.com/Mjtlittle/time-card" class="secret svelte-27ygun">\u{1F570}\uFE0F Time Card</a></h1> 
    <span>Made by
      <a href="https://github.com/Mjtlittle" class="svelte-27ygun">Joshua Little</a></span>`,l=v(),ae(s.$$.fragment),i=v(),ae(r.$$.fragment),a=v(),f=_("div"),h=_("table"),w=_("thead"),$=_("th"),$.textContent="Weekday",m=v(),p=_("th"),y=v(),g=_("th"),g.textContent="Clock-in",L=v(),D=_("th"),D.textContent="Clock-out",B=v(),re=_("th"),re.textContent="Hours",W=v(),C&&C.c(),X=v(),ee=_("tbody");for(let b=0;b<F.length;b+=1)F[b].c();K=v(),ae(M.$$.fragment),Y=v(),Z=_("div"),ae(Q.$$.fragment),ce=v(),T=_("div"),d(n,"class","header svelte-27ygun"),d($,"class","weekday svelte-27ygun"),d(f,"class","table svelte-27ygun"),d(Z,"class","toggles svelte-27ygun"),d(T,"class","space svelte-27ygun"),d(t,"class","container svelte-27ygun")},m(b,z){I(b,t,z),u(t,n),u(t,l),ne(s,t,null),u(t,i),ne(r,t,null),u(t,a),u(t,f),u(f,h),u(h,w),u(w,$),u(w,m),u(w,p),u(w,y),u(w,g),u(w,L),u(w,D),u(w,B),u(w,re),u(w,W),C&&C.m(w,null),u(h,X),u(h,ee);for(let te=0;te<F.length;te+=1)F[te].m(ee,null);u(f,K),ne(M,f,null),u(t,Y),u(t,Z),ne(Q,Z,null),u(t,ce),u(t,T),G=!0},p(b,[z]){const te={};!o&&z&1&&(o=!0,te.days=b[0],pe(()=>o=!1)),s.$set(te);const be={};if(!c&&z&1&&(c=!0,be.days=b[0],pe(()=>c=!1)),r.$set(be),b[1].minimal_mode?C&&(C.d(1),C=null):C||(C=Wt(),C.c(),C.m(w,null)),z&1){U=b[0];let N;for(N=0;N<U.length;N+=1){const fe=Vt(b,U,N);F[N]?(F[N].p(fe,z),E(F[N],1)):(F[N]=Xt(fe),F[N].c(),E(F[N],1),F[N].m(ee,null))}for(ct(),N=U.length;N<F.length;N+=1)Ce(N);ft()}const Ee={};!oe&&z&1&&(oe=!0,Ee.days=b[0],pe(()=>oe=!1)),M.$set(Ee)},i(b){if(!G){E(s.$$.fragment,b),E(r.$$.fragment,b);for(let z=0;z<U.length;z+=1)E(F[z]);E(M.$$.fragment,b),E(Q.$$.fragment,b),G=!0}},o(b){q(s.$$.fragment,b),q(r.$$.fragment,b),F=F.filter(Boolean);for(let z=0;z<F.length;z+=1)q(F[z]);q(M.$$.fragment,b),q(Q.$$.fragment,b),G=!1},d(b){b&&S(t),le(s),le(r),C&&C.d(),Ye(F,b),le(M),le(Q)}}}function ul(e,t,n){let l;Pe(e,R,m=>n(1,l=m));let s=rt.map(m=>({weekday:m,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0}));const o=()=>{const m={days:s,settings:l};localStorage.setItem(tt,JSON.stringify(m))},i=()=>{It(R,l=it,l),n(0,s=rt.map(m=>({weekday:m,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0}))),o()};jn(()=>{const m=localStorage.getItem(tt);if(m==null){i();return}try{const p=JSON.parse(m);n(0,s=p.days),It(R,l=Ie(Ie({},it),p.settings),l),o()}catch{i()}});const c=setInterval(o,200);at(()=>clearInterval(c));const a=()=>{clearInterval(c),localStorage.setItem(tt,void 0),location.reload()};function f(m){s=m,n(0,s),n(1,l)}function h(m){s=m,n(0,s),n(1,l)}function w(m,p,y,g){y[g]=m,n(0,s),n(1,l)}function $(m){s=m,n(0,s),n(1,l)}return e.$$.update=()=>{e.$$.dirty&3&&(Nn(s,l),n(0,s=[...s]))},[s,l,a,f,h,w,$]}class al extends ve{constructor(t){super(),he(this,t,ul,il,de,{})}}new al({target:document.getElementById("app")});
