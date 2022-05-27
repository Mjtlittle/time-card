var bn=Object.defineProperty;var Ct=Object.getOwnPropertySymbols;var yn=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable;var Tt=(e,t,n)=>t in e?bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))yn.call(t,n)&&Tt(e,n,t[n]);if(Ct)for(var n of Ct(t))kn.call(t,n)&&Tt(e,n,t[n]);return e};const wn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};wn();function ne(){}function $n(e,t){for(const n in t)e[n]=t[n];return e}function tn(e){return e()}function Pt(){return Object.create(null)}function Ce(e){e.forEach(tn)}function jn(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Mn(e){return Object.keys(e).length===0}function Cn(e,...t){if(e==null)return ne;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Te(e,t,n){e.$$.on_destroy.push(Cn(t,n))}function nn(e,t,n,l){if(e){const s=ln(e,t,n,l);return e[0](s)}}function ln(e,t,n,l){return e[1]&&l?$n(n.ctx.slice(),e[1](l(t))):n.ctx}function sn(e,t,n,l){if(e[2]&&l){const s=e[2](l(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(t.dirty.length,s.length);for(let o=0;o<r;o+=1)i[o]=t.dirty[o]|s[o];return i}return t.dirty|s}return t.dirty}function rn(e,t,n,l,s,i){if(s){const r=ln(t,n,l,i);e.p(r,s)}}function on(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function St(e){return e==null?"":e}function Ft(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function Ze(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function h(){return L(" ")}function ct(){return L("")}function U(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return e===""?null:+e}function Tn(e){return Array.from(e.childNodes)}function pe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ee(e,t){e.value=t==null?"":t}function It(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function Xe(e,t,n){e.classList[n?"add":"remove"](t)}let qe;function ze(e){qe=e}function un(){if(!qe)throw new Error("Function called outside component initialization");return qe}function Pn(e){un().$$.on_mount.push(e)}function ft(e){un().$$.on_destroy.push(e)}const Le=[],ue=[],Ve=[],lt=[],Sn=Promise.resolve();let st=!1;function Fn(){st||(st=!0,Sn.then(an))}function rt(e){Ve.push(e)}function be(e){lt.push(e)}const tt=new Set;let Ge=0;function an(){const e=qe;do{for(;Ge<Le.length;){const t=Le[Ge];Ge++,ze(t),In(t.$$)}for(ze(null),Le.length=0,Ge=0;ue.length;)ue.pop()();for(let t=0;t<Ve.length;t+=1){const n=Ve[t];tt.has(n)||(tt.add(n),n())}Ve.length=0}while(Le.length);for(;lt.length;)lt.pop()();st=!1,tt.clear(),ze(e)}function In(e){if(e.fragment!==null){e.update(),Ce(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(rt)}}const Qe=new Set;let Me;function _t(){Me={r:0,c:[],p:Me}}function dt(){Me.r||Ce(Me.c),Me=Me.p}function E(e,t){e&&e.i&&(Qe.delete(e),e.i(t))}function z(e,t,n,l){if(e&&e.o){if(Qe.has(e))return;Qe.add(e),Me.c.push(()=>{Qe.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function ye(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function te(e){e&&e.c()}function Y(e,t,n,l){const{fragment:s,on_mount:i,on_destroy:r,after_update:o}=e.$$;s&&s.m(t,n),l||rt(()=>{const a=i.map(tn).filter(jn);r?r.push(...a):Ce(a),e.$$.on_mount=[]}),o.forEach(rt)}function Z(e,t){const n=e.$$;n.fragment!==null&&(Ce(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function An(e,t){e.$$.dirty[0]===-1&&(Le.push(e),Fn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,l,s,i,r,o=[-1]){const a=qe;ze(e);const c=e.$$={fragment:null,ctx:null,props:i,update:ne,not_equal:s,bound:Pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Pt(),dirty:o,skip_bound:!1,root:t.target||a.$$.root};r&&r(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(g,M,...C)=>{const m=C.length?C[0]:M;return c.ctx&&s(c.ctx[g],c.ctx[g]=m)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](m),d&&An(e,g)),M}):[],c.update(),d=!0,Ce(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const g=Tn(t.target);c.fragment&&c.fragment.l(g),g.forEach(k)}else c.fragment&&c.fragment.c();t.intro&&E(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),an()}ze(a)}class he{$destroy(){Z(this,1),this.$destroy=ne}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!Mn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function En(e){let t,n,l,s,i,r;const o=e[2].default,a=nn(o,e,e[1],null);return{c(){t=f("details"),n=f("summary"),l=L(e[0]),s=h(),i=f("div"),a&&a.c(),p(n,"class","svelte-prfamu"),p(i,"class","content svelte-prfamu"),p(t,"class","svelte-prfamu")},m(c,d){w(c,t,d),u(t,n),u(n,l),u(t,s),u(t,i),a&&a.m(i,null),r=!0},p(c,[d]){(!r||d&1)&&pe(l,c[0]),a&&a.p&&(!r||d&2)&&rn(a,o,c,c[1],r?sn(o,c[1],d,null):on(c[1]),null)},i(c){r||(E(a,c),r=!0)},o(c){z(a,c),r=!1},d(c){c&&k(t),a&&a.d(c)}}}function Hn(e,t,n){let{$$slots:l={},$$scope:s}=t,{label:i="PLACEHOLDER"}=t;return e.$$set=r=>{"label"in r&&n(0,i=r.label),"$$scope"in r&&n(1,s=r.$$scope)},[i,s,l]}class cn extends he{constructor(t){super(),me(this,t,Hn,En,fe,{label:0})}}function Ln(e){let t,n,l,s,i,r,o,a,c,d,g,M,C,m,_,$,T,j,N;return{c(){t=f("h2"),t.textContent="Using the App",n=h(),l=f("p"),l.textContent=`For each day enter the time you clock-in and clock-out. The app will show
    how many paid hours you have completed for each day. The required lunch
    duration is automatically subtracted from these values. Valid entry formats
    include...`,s=h(),i=f("ul"),i.innerHTML=`<li>5:30 PM =&gt; 5:30 PM</li> 
    <li>5:30PM =&gt; 5:30 PM</li> 
    <li>5:30p =&gt; 5:30 PM</li> 
    <li>17:30 =&gt; 5:30 PM</li> 
    <li>5 =&gt; 5:00 AM</li> 
    <li>5a =&gt; 5:00 AM</li> 
    <li>5am =&gt; 5:00 AM</li>`,r=h(),o=f("p"),o.textContent=`After typing the value, click the enter key or leave the field to change the
    value. At the moment any 12 hour times not specifing AM or PM will default
    to AM.`,a=h(),c=f("p"),c.innerHTML=`If you have the <strong>Suggestions</strong> feature on, gray time
    suggestions will appear near each value. These suggestions are trying to
    satisfy the
    <strong>Target Weekly Hours</strong> you have set in the preferences.`,d=h(),g=f("p"),g.textContent=`Toggling the checkmark next to each day removes it from the suggestions
    calculation. However, the weekly target time will still try to be hit; the
    disabled day will distribute its hours among the remaining enabled days.`,M=h(),C=f("h2"),C.textContent="Background",m=h(),_=f("p"),_.innerHTML=`As an Intern at BMW, this project started as a replacement for a simple
    Excel spreadsheet time-card. My site had a few more features and a slightly
    better user interface. However, I had forgotten about another spreadsheet
    created by <span title="my sworn enemy in the great time-card war">another intern, Karl S</span>. This one had many features that were not present in the first iteration
    of this app. So to claim a hold on the BMW time-card market, I recreated
    this site with most of the features and a much cleaner interface.`,$=h(),T=f("h2"),T.textContent="Going Forward",j=h(),N=f("p"),N.innerHTML=`This was just a fun side project I&#39;ve been passively working on. If you
    notice any bugs or have a feature request, open an issue <a href="https://github.com/Mjtlittle/time-card/issues">here</a> or message me.`},m(v,S){w(v,t,S),w(v,n,S),w(v,l,S),w(v,s,S),w(v,i,S),w(v,r,S),w(v,o,S),w(v,a,S),w(v,c,S),w(v,d,S),w(v,g,S),w(v,M,S),w(v,C,S),w(v,m,S),w(v,_,S),w(v,$,S),w(v,T,S),w(v,j,S),w(v,N,S)},p:ne,d(v){v&&k(t),v&&k(n),v&&k(l),v&&k(s),v&&k(i),v&&k(r),v&&k(o),v&&k(a),v&&k(c),v&&k(d),v&&k(g),v&&k(M),v&&k(C),v&&k(m),v&&k(_),v&&k($),v&&k(T),v&&k(j),v&&k(N)}}}function On(e){let t,n;return t=new cn({props:{label:"About",$$slots:{default:[Ln]},$$scope:{ctx:e}}}),{c(){te(t.$$.fragment)},m(l,s){Y(t,l,s),n=!0},p(l,[s]){const i={};s&1&&(i.$$scope={dirty:s,ctx:l}),t.$set(i)},i(l){n||(E(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){Z(t,l)}}}class zn extends he{constructor(t){super(),me(this,t,null,On,fe,{})}}const Ee=[];function Nn(e,t=ne){let n;const l=new Set;function s(o){if(fe(e,o)&&(e=o,n)){const a=!Ee.length;for(const c of l)c[1](),Ee.push(c,e);if(a){for(let c=0;c<Ee.length;c+=2)Ee[c][0](Ee[c+1]);Ee.length=0}}}function i(o){s(o(e))}function r(o,a=ne){const c=[o,a];return l.add(c),l.size===1&&(n=t(s)||ne),o(e),()=>{l.delete(c),l.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:r}}const nt="app-data";var fn=(e=>(e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday",e))(fn||{});const qn=Object.values(fn),it=["Monday","Tuesday","Wednesday","Thursday","Friday"],pt=e=>{e=e.trim();const t=(o,a,c)=>{o=o.toLowerCase();for(const d of a)if(o.endsWith(d)){const g=o.substring(0,o.length-d.length);c(g);break}return o};let n=!0,l=!1;t(e,["pm","p"],o=>{e=o,n=!1,l=!0}),t(e,["am","a"],o=>{e=o,l=!0});let s=0,i=0;if(e=e.trimEnd(),e.includes(":")){const[o,a]=e.split(":").map(c=>c.trim());if(o==""||a=="")return null;s=parseInt(o),i=parseInt(a)}else s=parseInt(e);let r=s*60+i;return l&&s==12&&n&&(r-=12*60),l&&!n&&r<12*60&&(r+=12*60),isNaN(s)||isNaN(i)||s>23||i>59?null:r},At=(e,t=!0)=>{let n=Math.floor(e/60),l=Math.floor(e%60);n==0&&(n=12);let s="AM";e>=12*60&&(s="PM",n-=12);const i=n.toString().padStart(2,"0"),r=l.toString().padStart(2,"0");return`${i}:${r} ${s}`},_n=e=>e/60,Ne=(e,t)=>_n(t-e),Bn=(e,{lunch_minutes:t})=>{if(!ot(e))return 0;const n=e.end-e.start-t;return n<0?0:n},Ye=(e,t)=>_n(Bn(e,t)),dn=e=>e.start!==null,pn=e=>e.end!==null,mn=(e,t,n)=>dn(e)==t&&pn(e)==n,ot=e=>dn(e)&&pn(e),Oe=[(e,t)=>e+t,0],hn=()=>{const e=new Date,t=e.getHours();return e.getMinutes()+t*60},Dn=({clock:e,enabled:t})=>!t||e.start!=null&&e.end!=null,mt=(e,{lunch_minutes:t})=>{const{clock:n}=e;if(!e.enabled||!n.start&&n.end||mn(n,!1,!0)||!n.start&&!n.end)return 0;let l=0;if(Dn(e))l=Ne(n.start,n.end);else if(n.start&&!n.end){if(!vn(e))return 0;const s=hn();l=Ne(n.start,s)}return l-=t/60,l<0?0:l},vn=e=>{const t=new Date,n=qn[t.getDay()];return e.weekday===n},ht=e=>e.start!=null&&e.end!=null,Rn=(e,t,{lunch_minutes:n,usual_start_time:l})=>{let s=Ae({},e),i=l!=null?l:pt("8a");if(!s.start&&!s.end&&(s.start=i),ht(s)&&(s.end=null),s.end){if(!s.start){let o=s.end-t*60-n;s.start=Math.max(0,o)}}else{let o=s.start+t*60+n;s.end=Math.min(23*60,o)}return s},Jn=(e,t)=>{const{usual_start_time:n,target_week_hours:l,lunch_minutes:s}=t;e.forEach(d=>{d.pre_clock=Ae({},d.clock)});const i=e.map(({pre_clock:d})=>Ye(d,t)).reduce((d,g)=>d+g,0),r=l-i;if(r>l)return;const a=e.filter(({enabled:d})=>d).filter(d=>!ht(d.pre_clock));if(a.length==0)return;const c=r/a.length;for(const d of a)d.pre_clock=Rn(d.pre_clock,c,t);for(let d=0;d<e.length;d++)e[d]=Ae({},e[d])},ut={usual_start_time:pt("8:00"),lunch_minutes:40,target_week_hours:40,overtime_hours:40,hourly_pay_rate:21.28,overtime_pay_rate:1.5,show_pay:!0,twelve_hour_time:!0,week_predictions:!0,show_whole_week:!1,skipped_days_count:!1,minimal_mode:!1,tax_rate:.2},R=Nn(ut);function Et(e){let t;return{c(){t=f("span"),t.textContent="Are you sure?",p(t,"class","confirmation svelte-iw824q")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function Wn(e){let t,n,l,s,i,r;const o=e[4].default,a=nn(o,e,e[3],null);let c=e[0]&&Et();return{c(){t=f("button"),n=f("span"),a&&a.c(),l=h(),c&&c.c(),p(n,"class","svelte-iw824q"),Xe(n,"hidden",e[0]),p(t,"class","svelte-iw824q")},m(d,g){w(d,t,g),u(t,n),a&&a.m(n,null),u(t,l),c&&c.m(t,null),s=!0,i||(r=U(t,"click",e[1]),i=!0)},p(d,[g]){a&&a.p&&(!s||g&8)&&rn(a,o,d,d[3],s?sn(o,d[3],g,null):on(d[3]),null),g&1&&Xe(n,"hidden",d[0]),d[0]?c||(c=Et(),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i(d){s||(E(a,d),s=!0)},o(d){z(a,d),s=!1},d(d){d&&k(t),a&&a.d(d),c&&c.d(),i=!1,r()}}}function Kn(e,t,n){let{$$slots:l={},$$scope:s}=t,i=!1,{on_confirm:r=()=>{}}=t,o=null;const a=()=>{if(!i){n(0,i=!0),o=setTimeout(()=>n(0,i=!1),2e3);return}clearTimeout(o),r(),n(0,i=!1)};return e.$$set=c=>{"on_confirm"in c&&n(2,r=c.on_confirm),"$$scope"in c&&n(3,s=c.$$scope)},[i,a,r,s,l]}class vt extends he{constructor(t){super(),me(this,t,Kn,Wn,fe,{on_confirm:2})}}function Ht(e){let t,n,l,s;n=new vt({props:{on_confirm:e[1],$$slots:{default:[Un]},$$scope:{ctx:e}}});let i=e[0].week_predictions&&Lt(e);return{c(){t=f("div"),te(n.$$.fragment),l=h(),i&&i.c(),p(t,"class","container svelte-2y0uf9")},m(r,o){w(r,t,o),Y(n,t,null),u(t,l),i&&i.m(t,null),s=!0},p(r,o){const a={};o&16&&(a.$$scope={dirty:o,ctx:r}),n.$set(a),r[0].week_predictions?i?(i.p(r,o),o&1&&E(i,1)):(i=Lt(r),i.c(),E(i,1),i.m(t,null)):i&&(_t(),z(i,1,1,()=>{i=null}),dt())},i(r){s||(E(n.$$.fragment,r),E(i),s=!0)},o(r){z(n.$$.fragment,r),z(i),s=!1},d(r){r&&k(t),Z(n),i&&i.d()}}}function Un(e){let t;return{c(){t=L("Clear All")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function Lt(e){let t,n;return t=new vt({props:{on_confirm:e[2],$$slots:{default:[Gn]},$$scope:{ctx:e}}}),{c(){te(t.$$.fragment)},m(l,s){Y(t,l,s),n=!0},p(l,s){const i={};s&16&&(i.$$scope={dirty:s,ctx:l}),t.$set(i)},i(l){n||(E(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){Z(t,l)}}}function Gn(e){let t;return{c(){t=L("Take All Suggestions")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function Vn(e){let t,n,l=!e[0].minimal_mode&&Ht(e);return{c(){l&&l.c(),t=ct()},m(s,i){l&&l.m(s,i),w(s,t,i),n=!0},p(s,[i]){s[0].minimal_mode?l&&(_t(),z(l,1,1,()=>{l=null}),dt()):l?(l.p(s,i),i&1&&E(l,1)):(l=Ht(s),l.c(),E(l,1),l.m(t.parentNode,t))},i(s){n||(E(l),n=!0)},o(s){z(l),n=!1},d(s){l&&l.d(s),s&&k(t)}}}function Qn(e,t,n){let l;Te(e,R,o=>n(0,l=o));let{days:s}=t;const i=()=>{n(3,s=it.map(o=>({weekday:o,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0})))},r=()=>{s.forEach(o=>{o.clock=o.pre_clock}),n(3,s)};return e.$$set=o=>{"days"in o&&n(3,s=o.days)},[l,i,r,s]}class Xn extends he{constructor(t){super(),me(this,t,Qn,Vn,fe,{days:3})}}function Ot(e){let t,n,l,s;return{c(){t=f("button"),n=L("x"),t.disabled=e[0]},m(i,r){w(i,t,r),u(t,n),l||(s=U(t,"click",e[8]),l=!0)},p(i,r){r&1&&(t.disabled=i[0])},d(i){i&&k(t),l=!1,s()}}}function Yn(e){let t,n,l,s,i,r=!e[4].minimal_mode&&Ot(e);return{c(){t=f("input"),n=h(),r&&r.c(),l=ct(),p(t,"type","text"),p(t,"placeholder",e[1]),t.disabled=e[0],p(t,"class","svelte-1yb21j9"),Xe(t,"green",zt=="passed"),Xe(t,"yellow",zt=="inprogress")},m(o,a){w(o,t,a),e[12](t),ee(t,e[3]),w(o,n,a),r&&r.m(o,a),w(o,l,a),s||(i=[U(t,"input",e[13]),U(t,"focusout",e[5]),U(t,"keyup",e[6]),U(t,"focus",e[7])],s=!0)},p(o,[a]){a&2&&p(t,"placeholder",o[1]),a&1&&(t.disabled=o[0]),a&8&&t.value!==o[3]&&ee(t,o[3]),o[4].minimal_mode?r&&(r.d(1),r=null):r?r.p(o,a):(r=Ot(o),r.c(),r.m(l.parentNode,l))},i:ne,o:ne,d(o){o&&k(t),e[12](null),o&&k(n),r&&r.d(o),o&&k(l),s=!1,Ce(i)}}}let zt="future";function Zn(e,t,n){let l;Te(e,R,j=>n(4,l=j));let{value:s=null}=t,{disabled:i=!1}=t,{shadow_time:r=null}=t,{show_shadow:o=!0}=t,a="";const c=()=>{const j=pt(_);d(j),n(9,s=j)},d=j=>{if(j===null){n(3,_="");return}const N=At(j);n(3,_=N)},g=j=>{j.code==="Enter"&&c()},M=()=>{m.select()},C=()=>{n(9,s=null)};let m,_;function $(j){ue[j?"unshift":"push"](()=>{m=j,n(2,m)})}function T(){_=this.value,n(3,_)}return e.$$set=j=>{"value"in j&&n(9,s=j.value),"disabled"in j&&n(0,i=j.disabled),"shadow_time"in j&&n(10,r=j.shadow_time),"show_shadow"in j&&n(11,o=j.show_shadow)},e.$$.update=()=>{e.$$.dirty&3072&&n(1,a=r==null||!o?"-- : --":At(r)),e.$$.dirty&512&&d(s)},[i,a,m,_,l,c,g,M,C,s,r,o,$,T]}class at extends he{constructor(t){super(),me(this,t,Zn,Yn,fe,{value:9,disabled:0,shadow_time:10,show_shadow:11})}}function Nt(e){let t,n,l,s;return{c(){t=f("td"),n=f("input"),p(n,"type","checkbox"),p(n,"class","svelte-1x3zoum")},m(i,r){w(i,t,r),u(t,n),n.checked=e[0].enabled,l||(s=U(n,"change",e[5]),l=!0)},p(i,r){r&1&&(n.checked=i[0].enabled)},d(i){i&&k(t),l=!1,s()}}}function qt(e){let t,n,l=Ye(e[0].pre_clock,e[1]).toFixed(2)+"",s,i;return{c(){t=f("span"),n=L("("),s=L(l),i=L(")"),p(t,"class","hours-prediction svelte-1x3zoum")},m(r,o){w(r,t,o),u(t,n),u(t,s),u(t,i)},p(r,o){o&3&&l!==(l=Ye(r[0].pre_clock,r[1]).toFixed(2)+"")&&pe(s,l)},d(r){r&&k(t)}}}function Bt(e){let t,n,l,s,i,r,o=e[1].week_predictions&&Dt(e);return{c(){t=f("td"),n=f("div"),o&&o.c(),l=h(),s=f("button"),s.textContent="Clear",p(n,"class","actions svelte-1x3zoum")},m(a,c){w(a,t,c),u(t,n),o&&o.m(n,null),u(n,l),u(n,s),i||(r=U(s,"click",e[3]),i=!0)},p(a,c){a[1].week_predictions?o?o.p(a,c):(o=Dt(a),o.c(),o.m(n,l)):o&&(o.d(1),o=null)},d(a){a&&k(t),o&&o.d(),i=!1,r()}}}function Dt(e){let t,n,l;return{c(){t=f("button"),t.textContent="Take Suggestion"},m(s,i){w(s,t,i),n||(l=U(t,"click",e[4]),n=!0)},p:ne,d(s){s&&k(t),n=!1,l()}}}function xn(e){let t,n,l=e[0].weekday+"",s,i,r,o,a,c,d,g,M,C,m,_,$,T,j=e[2].toFixed(2)+"",N,v,S=!ot(e[0].clock)&&e[1].week_predictions,x,D,O=!e[1].minimal_mode&&Nt(e);function J(b){e[6](b)}function G(b){e[7](b)}let le={show_shadow:e[1].week_predictions,disabled:!e[0].enabled};e[0].clock.start!==void 0&&(le.value=e[0].clock.start),e[0].pre_clock.start!==void 0&&(le.shadow_time=e[0].pre_clock.start),a=new at({props:le}),ue.push(()=>ye(a,"value",J)),ue.push(()=>ye(a,"shadow_time",G));function W(b){e[8](b)}function V(b){e[9](b)}let se={show_shadow:e[1].week_predictions,disabled:!e[0].enabled};e[0].clock.end!==void 0&&(se.value=e[0].clock.end),e[0].pre_clock.end!==void 0&&(se.shadow_time=e[0].pre_clock.end),C=new at({props:se}),ue.push(()=>ye(C,"value",W)),ue.push(()=>ye(C,"shadow_time",V));let I=S&&qt(e),P=!e[1].minimal_mode&&Bt(e);return{c(){t=f("tr"),n=f("td"),s=L(l),i=h(),O&&O.c(),r=h(),o=f("td"),te(a.$$.fragment),g=h(),M=f("td"),te(C.$$.fragment),$=h(),T=f("td"),N=L(j),v=h(),I&&I.c(),x=h(),P&&P.c(),p(n,"class","weekday svelte-1x3zoum"),p(o,"class","clock-time svelte-1x3zoum"),p(M,"class","clock-time svelte-1x3zoum"),p(T,"class","hours svelte-1x3zoum"),p(t,"class","container svelte-1x3zoum")},m(b,A){w(b,t,A),u(t,n),u(n,s),u(t,i),O&&O.m(t,null),u(t,r),u(t,o),Y(a,o,null),u(t,g),u(t,M),Y(C,M,null),u(t,$),u(t,T),u(T,N),u(T,v),I&&I.m(T,null),u(t,x),P&&P.m(t,null),D=!0},p(b,[A]){(!D||A&1)&&l!==(l=b[0].weekday+"")&&pe(s,l),b[1].minimal_mode?O&&(O.d(1),O=null):O?O.p(b,A):(O=Nt(b),O.c(),O.m(t,r));const re={};A&2&&(re.show_shadow=b[1].week_predictions),A&1&&(re.disabled=!b[0].enabled),!c&&A&1&&(c=!0,re.value=b[0].clock.start,be(()=>c=!1)),!d&&A&1&&(d=!0,re.shadow_time=b[0].pre_clock.start,be(()=>d=!1)),a.$set(re);const ae={};A&2&&(ae.show_shadow=b[1].week_predictions),A&1&&(ae.disabled=!b[0].enabled),!m&&A&1&&(m=!0,ae.value=b[0].clock.end,be(()=>m=!1)),!_&&A&1&&(_=!0,ae.shadow_time=b[0].pre_clock.end,be(()=>_=!1)),C.$set(ae),(!D||A&4)&&j!==(j=b[2].toFixed(2)+"")&&pe(N,j),A&3&&(S=!ot(b[0].clock)&&b[1].week_predictions),S?I?I.p(b,A):(I=qt(b),I.c(),I.m(T,null)):I&&(I.d(1),I=null),b[1].minimal_mode?P&&(P.d(1),P=null):P?P.p(b,A):(P=Bt(b),P.c(),P.m(t,null))},i(b){D||(E(a.$$.fragment,b),E(C.$$.fragment,b),D=!0)},o(b){z(a.$$.fragment,b),z(C.$$.fragment,b),D=!1},d(b){b&&k(t),O&&O.d(),Z(a),Z(C),I&&I.d(),P&&P.d()}}}function el(e,t,n){let l;Te(e,R,_=>n(1,l=_));let{day:s}=t,i=0;const r=()=>{n(2,i=mt(s,l))},o=()=>{n(0,s.clock={start:null,end:null},s)},a=()=>{n(0,s.clock=s.pre_clock,s)},c=setInterval(r,5e3);ft(()=>clearInterval(c));function d(){s.enabled=this.checked,n(0,s)}function g(_){e.$$.not_equal(s.clock.start,_)&&(s.clock.start=_,n(0,s))}function M(_){e.$$.not_equal(s.pre_clock.start,_)&&(s.pre_clock.start=_,n(0,s))}function C(_){e.$$.not_equal(s.clock.end,_)&&(s.clock.end=_,n(0,s))}function m(_){e.$$.not_equal(s.pre_clock.end,_)&&(s.pre_clock.end=_,n(0,s))}return e.$$set=_=>{"day"in _&&n(0,s=_.day)},e.$$.update=()=>{e.$$.dirty&3&&(l.lunch_minutes,r())},[s,l,i,o,a,d,g,M,C,m]}class tl extends he{constructor(t){super(),me(this,t,el,xn,fe,{day:0})}}function Rt(e,t,n){const l=e.slice();return l[4]=t[n],l}function Jt(e){let t,n;return{c(){t=f("div"),p(t,"class",n=St(e[4].classes+" bar")+" svelte-1e65z40"),It(t,"width",`${e[4].percent}%`,!1)},m(l,s){w(l,t,s)},p(l,s){s&1&&n!==(n=St(l[4].classes+" bar")+" svelte-1e65z40")&&p(t,"class",n),s&1&&It(t,"width",`${l[4].percent}%`,!1)},d(l){l&&k(t)}}}function nl(e){let t,n,l=e[0],s=[];for(let i=0;i<l.length;i+=1)s[i]=Jt(Rt(e,l,i));return{c(){t=f("div"),n=f("div");for(let i=0;i<s.length;i+=1)s[i].c();p(n,"class","full-bar svelte-1e65z40"),p(t,"class","container svelte-1e65z40")},m(i,r){w(i,t,r),u(t,n);for(let o=0;o<s.length;o+=1)s[o].m(n,null)},p(i,[r]){if(r&1){l=i[0];let o;for(o=0;o<l.length;o+=1){const a=Rt(i,l,o);s[o]?s[o].p(a,r):(s[o]=Jt(a),s[o].c(),s[o].m(n,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},i:ne,o:ne,d(i){i&&k(t),Ze(s,i)}}}function ll(e,t,n){let l;Te(e,R,o=>n(2,l=o));let{days:s}=t,i=[{classes:"red",percent:50,label:"test"},{classes:"green",percent:20,label:"test"}];const r=()=>{const{target_week_hours:o}=l;n(0,i=[]);const c=s.map(d=>mt(d,l)).reduce(...Oe)/o*100;i.push({classes:"blue",percent:c,label:"Complete"})};return e.$$set=o=>{"days"in o&&n(1,s=o.days)},e.$$.update=()=>{e.$$.dirty&2&&r()},[i,s]}class sl extends he{constructor(t){super(),me(this,t,ll,nl,fe,{days:1})}}function Wt(e,t,n){const l=e.slice();return l[5]=t[n],l}function Kt(e,t,n){const l=e.slice();return l[8]=t[n],l}function Ut(e){let t,n,l=e[5][0].pre_value+"",s,i;return{c(){t=f("span"),n=L("("),s=L(l),i=L(")"),p(t,"class","pre-value svelte-ihro0a")},m(r,o){w(r,t,o),u(t,n),u(t,s),u(t,i)},p(r,o){o&1&&l!==(l=r[5][0].pre_value+"")&&pe(s,l)},d(r){r&&k(t)}}}function Gt(e){let t,n=e[5].slice(1),l=[];for(let s=0;s<n.length;s+=1)l[s]=Qt(Kt(e,n,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ct()},m(s,i){for(let r=0;r<l.length;r+=1)l[r].m(s,i);w(s,t,i)},p(s,i){if(i&3){n=s[5].slice(1);let r;for(r=0;r<n.length;r+=1){const o=Kt(s,n,r);l[r]?l[r].p(o,i):(l[r]=Qt(o),l[r].c(),l[r].m(t.parentNode,t))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(s){Ze(l,s),s&&k(t)}}}function Vt(e){let t,n,l=e[8].pre_value+"",s,i;return{c(){t=f("span"),n=L("("),s=L(l),i=L(")"),p(t,"class","pre-value svelte-ihro0a")},m(r,o){w(r,t,o),u(t,n),u(t,s),u(t,i)},p(r,o){o&1&&l!==(l=r[8].pre_value+"")&&pe(s,l)},d(r){r&&k(t)}}}function Qt(e){let t,n,l,s,i=e[8].label+"",r,o,a,c,d=e[8].value+"",g,M,C,m=e[1].week_predictions&&Vt(e);return{c(){t=f("tr"),n=f("td"),l=h(),s=f("td"),r=L(i),o=L(":"),a=h(),c=f("td"),g=L(d),M=h(),m&&m.c(),C=h(),p(n,"class","blank svelte-ihro0a"),p(s,"class","label svelte-ihro0a"),p(t,"class","svelte-ihro0a")},m(_,$){w(_,t,$),u(t,n),u(t,l),u(t,s),u(s,r),u(s,o),u(t,a),u(t,c),u(c,g),u(c,M),m&&m.m(c,null),u(t,C)},p(_,$){$&1&&i!==(i=_[8].label+"")&&pe(r,i),$&1&&d!==(d=_[8].value+"")&&pe(g,d),_[1].week_predictions?m?m.p(_,$):(m=Vt(_),m.c(),m.m(c,null)):m&&(m.d(1),m=null)},d(_){_&&k(t),m&&m.d()}}}function Xt(e){let t,n,l,s=e[5][0].label+"",i,r,o,a,c,d=e[5][0].value+"",g,M,C,m,_=e[1].week_predictions&&Ut(e),$=!e[1].minimal_mode&&Gt(e);return{c(){t=f("table"),n=f("tr"),l=f("td"),i=L(s),r=L(":"),a=h(),c=f("td"),g=L(d),M=h(),_&&_.c(),C=h(),$&&$.c(),m=h(),p(l,"colspan",o=2),p(l,"class","label svelte-ihro0a"),p(c,"class","value"),p(n,"class","svelte-ihro0a"),p(t,"class","stat-box")},m(T,j){w(T,t,j),u(t,n),u(n,l),u(l,i),u(l,r),u(n,a),u(n,c),u(c,g),u(c,M),_&&_.m(c,null),u(t,C),$&&$.m(t,null),u(t,m)},p(T,j){j&1&&s!==(s=T[5][0].label+"")&&pe(i,s),j&1&&d!==(d=T[5][0].value+"")&&pe(g,d),T[1].week_predictions?_?_.p(T,j):(_=Ut(T),_.c(),_.m(c,null)):_&&(_.d(1),_=null),T[1].minimal_mode?$&&($.d(1),$=null):$?$.p(T,j):($=Gt(T),$.c(),$.m(t,m))},d(T){T&&k(t),_&&_.d(),$&&$.d()}}}function rl(e){let t,n=e[0],l=[];for(let s=0;s<n.length;s+=1)l[s]=Xt(Wt(e,n,s));return{c(){t=f("div");for(let s=0;s<l.length;s+=1)l[s].c();p(t,"class","container svelte-ihro0a")},m(s,i){w(s,t,i);for(let r=0;r<l.length;r+=1)l[r].m(t,null)},p(s,[i]){if(i&3){n=s[0];let r;for(r=0;r<n.length;r+=1){const o=Wt(s,n,r);l[r]?l[r].p(o,i):(l[r]=Xt(o),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},i:ne,o:ne,d(s){s&&k(t),Ze(l,s)}}}function il(e,t,n){let l;Te(e,R,a=>n(1,l=a));let{days:s}=t,i=[[{label:"Paid Hours",value:"1",pre_value:""},{label:"Paid Hours",value:"2",pre_value:""},{label:"Paid Hours",value:"3",pre_value:""}],[{label:"Paid Hours",value:"1",pre_value:""},{label:"Paid Hours",value:"2",pre_value:""},{label:"Paid Hours",value:"3",pre_value:""}]];const r=()=>{const{overtime_hours:a,hourly_pay_rate:c,overtime_pay_rate:d,tax_rate:g,show_pay:M}=l;n(0,i=[]);const C=s.filter(({enabled:P})=>P),m=s.map(P=>mt(P,l)).reduce(...Oe),_=C.map(P=>Ye(P.pre_clock,l)).reduce(...Oe),$=Math.min(a,m),T=Math.min(a,_),j=m>a?m-a:0,N=_>a?_-a:0,v=C.map(P=>{const{clock:b}=P;return ht(b)?Ne(b.start,b.end):mn(b,!0,!1)&&vn(P)?Ne(b.start,hn()):0}).reduce(...Oe),S=C.map(({pre_clock:P})=>Ne(P.start,P.end)).reduce(...Oe),x=[{label:"Paid Hours",value:m.toFixed(2),pre_value:_.toFixed(2)},{label:"Base",value:$.toFixed(2),pre_value:T.toFixed(2)},{label:"Overtime",value:j.toFixed(2),pre_value:N.toFixed(2)},{label:"Total Hours",value:v.toFixed(2),pre_value:S.toFixed(2)}];if(i.push(x),!M)return;const D=$*c,O=T*c,J=j*c*d,G=N*c*d,le=D+J,W=O+G,V=le*g,se=W*g,I=[{label:"Pay",value:`${(le-V).toFixed(2)}$`,pre_value:`${(W-se).toFixed(2)}$`},{label:"Base",value:`${D.toFixed(2)}$`,pre_value:`${O.toFixed(2)}$`},{label:"Overtime",value:`${J.toFixed(2)}$`,pre_value:`${G.toFixed(2)}$`},{label:"Taxes",value:`${V.toFixed(2)}$`,pre_value:`${se.toFixed(2)}$`}];i.push(I)},o=setInterval(r,1e4);return ft(()=>clearInterval(o)),e.$$set=a=>{"days"in a&&n(2,s=a.days)},e.$$.update=()=>{e.$$.dirty&4&&r()},[i,l,s]}class ol extends he{constructor(t){super(),me(this,t,il,rl,fe,{days:2})}}function ul(e){let t;return{c(){t=L("Delete Everything")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function al(e){let t,n,l,s,i,r,o,a,c,d,g,M,C,m,_,$,T,j,N,v,S,x,D,O,J,G,le,W,V,se,I,P,b,A,re,ae,Pe,ce,Q,q,ie,H,Se,_e,He,y,B,ve,ke,de,K,ge,Be,gt,De,we,bt,Fe,Re,yt,Je,$e,kt,Ie,We,wt,Ke,je,Ue,xe,$t;function gn(F){e[2](F)}let jt={};return e[1].usual_start_time!==void 0&&(jt.value=e[1].usual_start_time),o=new at({props:jt}),ue.push(()=>ye(o,"value",gn)),je=new vt({props:{on_confirm:e[0],$$slots:{default:[ul]},$$scope:{ctx:e}}}),{c(){t=f("table"),n=f("tbody"),l=f("tr"),s=f("td"),s.textContent="Prefered Start Time:",i=h(),r=f("td"),te(o.$$.fragment),c=h(),d=f("tr"),g=f("td"),g.textContent="Target Weekly Hours:",M=h(),C=f("td"),m=f("input"),_=h(),$=f("tr"),T=f("td"),T.textContent="Lunch Duration (minutes):",j=h(),N=f("td"),v=f("input"),S=h(),x=f("tr"),D=f("td"),D.textContent="Overtime Threshold (hours):",O=h(),J=f("td"),G=f("input"),le=h(),W=f("tr"),V=f("td"),V.textContent="Hourly Pay ($):",se=h(),I=f("td"),P=f("input"),b=h(),A=f("tr"),re=f("td"),re.textContent="Tax Rate:",ae=h(),Pe=f("td"),ce=f("input"),Q=h(),q=f("tr"),ie=f("td"),ie.textContent="Overtime Rate:",H=h(),Se=f("td"),_e=f("input"),He=h(),y=f("tr"),B=f("td"),B.textContent="Show Pay:",ve=h(),ke=f("td"),de=f("input"),K=h(),ge=f("tr"),Be=f("td"),Be.textContent="Show Suggestions:",gt=h(),De=f("td"),we=f("input"),bt=h(),Fe=f("tr"),Re=f("td"),Re.textContent="Minimal Mode:",yt=h(),Je=f("td"),$e=f("input"),kt=h(),Ie=f("tr"),We=f("td"),We.textContent="Reset App:",wt=h(),Ke=f("td"),te(je.$$.fragment),p(s,"class","svelte-m31vvj"),p(r,"class","svelte-m31vvj"),p(l,"class","svelte-m31vvj"),p(g,"class","svelte-m31vvj"),p(m,"class","input"),p(m,"type","number"),p(C,"class","svelte-m31vvj"),p(d,"class","svelte-m31vvj"),p(T,"class","svelte-m31vvj"),p(v,"class","input"),p(v,"type","number"),p(N,"class","svelte-m31vvj"),p($,"class","svelte-m31vvj"),p(D,"class","svelte-m31vvj"),p(G,"class","input"),p(G,"type","number"),p(J,"class","svelte-m31vvj"),p(x,"class","svelte-m31vvj"),p(V,"class","svelte-m31vvj"),p(P,"class","input"),p(P,"type","number"),p(I,"class","svelte-m31vvj"),p(W,"class","svelte-m31vvj"),p(re,"class","svelte-m31vvj"),p(ce,"class","input"),p(ce,"type","number"),p(Pe,"class","svelte-m31vvj"),p(A,"class","svelte-m31vvj"),p(ie,"class","svelte-m31vvj"),p(_e,"class","input"),p(_e,"type","number"),p(Se,"class","svelte-m31vvj"),p(q,"class","svelte-m31vvj"),p(B,"class","svelte-m31vvj"),p(de,"class",""),p(de,"type","checkbox"),p(ke,"class","svelte-m31vvj"),p(y,"class","svelte-m31vvj"),p(Be,"class","svelte-m31vvj"),p(we,"class",""),p(we,"type","checkbox"),p(De,"class","svelte-m31vvj"),p(ge,"class","svelte-m31vvj"),p(Re,"class","svelte-m31vvj"),p($e,"class",""),p($e,"type","checkbox"),p(Je,"class","svelte-m31vvj"),p(Fe,"class","svelte-m31vvj"),p(We,"class","svelte-m31vvj"),p(Ke,"class","svelte-m31vvj"),p(Ie,"class","svelte-m31vvj")},m(F,X){w(F,t,X),u(t,n),u(n,l),u(l,s),u(l,i),u(l,r),Y(o,r,null),u(n,c),u(n,d),u(d,g),u(d,M),u(d,C),u(C,m),ee(m,e[1].target_week_hours),u(n,_),u(n,$),u($,T),u($,j),u($,N),u(N,v),ee(v,e[1].lunch_minutes),u(n,S),u(n,x),u(x,D),u(x,O),u(x,J),u(J,G),ee(G,e[1].overtime_hours),u(n,le),u(n,W),u(W,V),u(W,se),u(W,I),u(I,P),ee(P,e[1].hourly_pay_rate),u(n,b),u(n,A),u(A,re),u(A,ae),u(A,Pe),u(Pe,ce),ee(ce,e[1].tax_rate),u(n,Q),u(n,q),u(q,ie),u(q,H),u(q,Se),u(Se,_e),ee(_e,e[1].overtime_pay_rate),u(n,He),u(n,y),u(y,B),u(y,ve),u(y,ke),u(ke,de),de.checked=e[1].show_pay,u(n,K),u(n,ge),u(ge,Be),u(ge,gt),u(ge,De),u(De,we),we.checked=e[1].week_predictions,u(n,bt),u(n,Fe),u(Fe,Re),u(Fe,yt),u(Fe,Je),u(Je,$e),$e.checked=e[1].minimal_mode,u(n,kt),u(n,Ie),u(Ie,We),u(Ie,wt),u(Ie,Ke),Y(je,Ke,null),Ue=!0,xe||($t=[U(m,"input",e[3]),U(v,"input",e[4]),U(G,"input",e[5]),U(P,"input",e[6]),U(ce,"input",e[7]),U(_e,"input",e[8]),U(de,"change",e[9]),U(we,"change",e[10]),U($e,"change",e[11])],xe=!0)},p(F,X){const Mt={};!a&&X&2&&(a=!0,Mt.value=F[1].usual_start_time,be(()=>a=!1)),o.$set(Mt),X&2&&oe(m.value)!==F[1].target_week_hours&&ee(m,F[1].target_week_hours),X&2&&oe(v.value)!==F[1].lunch_minutes&&ee(v,F[1].lunch_minutes),X&2&&oe(G.value)!==F[1].overtime_hours&&ee(G,F[1].overtime_hours),X&2&&oe(P.value)!==F[1].hourly_pay_rate&&ee(P,F[1].hourly_pay_rate),X&2&&oe(ce.value)!==F[1].tax_rate&&ee(ce,F[1].tax_rate),X&2&&oe(_e.value)!==F[1].overtime_pay_rate&&ee(_e,F[1].overtime_pay_rate),X&2&&(de.checked=F[1].show_pay),X&2&&(we.checked=F[1].week_predictions),X&2&&($e.checked=F[1].minimal_mode);const et={};X&1&&(et.on_confirm=F[0]),X&4096&&(et.$$scope={dirty:X,ctx:F}),je.$set(et)},i(F){Ue||(E(o.$$.fragment,F),E(je.$$.fragment,F),Ue=!0)},o(F){z(o.$$.fragment,F),z(je.$$.fragment,F),Ue=!1},d(F){F&&k(t),Z(o),Z(je),xe=!1,Ce($t)}}}function cl(e){let t,n;return t=new cn({props:{label:"Preferences",$$slots:{default:[al]},$$scope:{ctx:e}}}),{c(){te(t.$$.fragment)},m(l,s){Y(t,l,s),n=!0},p(l,[s]){const i={};s&4099&&(i.$$scope={dirty:s,ctx:l}),t.$set(i)},i(l){n||(E(t.$$.fragment,l),n=!0)},o(l){z(t.$$.fragment,l),n=!1},d(l){Z(t,l)}}}function fl(e,t,n){let l;Te(e,R,_=>n(1,l=_));let{reset_app:s}=t;function i(_){e.$$.not_equal(l.usual_start_time,_)&&(l.usual_start_time=_,R.set(l))}function r(){l.target_week_hours=oe(this.value),R.set(l)}function o(){l.lunch_minutes=oe(this.value),R.set(l)}function a(){l.overtime_hours=oe(this.value),R.set(l)}function c(){l.hourly_pay_rate=oe(this.value),R.set(l)}function d(){l.tax_rate=oe(this.value),R.set(l)}function g(){l.overtime_pay_rate=oe(this.value),R.set(l)}function M(){l.show_pay=this.checked,R.set(l)}function C(){l.week_predictions=this.checked,R.set(l)}function m(){l.minimal_mode=this.checked,R.set(l)}return e.$$set=_=>{"reset_app"in _&&n(0,s=_.reset_app)},[s,l,i,r,o,a,c,d,g,M,C,m]}class _l extends he{constructor(t){super(),me(this,t,fl,cl,fe,{reset_app:0})}}function Yt(e,t,n){const l=e.slice();return l[11]=t[n],l[12]=t,l[13]=n,l}function Zt(e){let t;return{c(){t=f("th")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function xt(e){let t;return{c(){t=f("th")},m(n,l){w(n,t,l)},d(n){n&&k(t)}}}function en(e){let t,n,l;function s(r){e[5](r,e[11],e[12],e[13])}let i={};return e[11]!==void 0&&(i.day=e[11]),t=new tl({props:i}),ue.push(()=>ye(t,"day",s)),{c(){te(t.$$.fragment)},m(r,o){Y(t,r,o),l=!0},p(r,o){e=r;const a={};!n&&o&1&&(n=!0,a.day=e[11],be(()=>n=!1)),t.$set(a)},i(r){l||(E(t.$$.fragment,r),l=!0)},o(r){z(t.$$.fragment,r),l=!1},d(r){Z(t,r)}}}function dl(e){let t,n,l,s,i,r,o,a,c,d,g,M,C,m,_,$,T,j,N,v,S,x,D,O,J,G,le,W,V,se,I,P,b,A;function re(y){e[3](y)}let ae={};e[0]!==void 0&&(ae.days=e[0]),s=new ol({props:ae}),ue.push(()=>ye(s,"days",re));function Pe(y){e[4](y)}let ce={};e[0]!==void 0&&(ce.days=e[0]),o=new sl({props:ce}),ue.push(()=>ye(o,"days",Pe));let Q=!e[1].minimal_mode&&Zt(),q=!e[1].minimal_mode&&xt(),ie=e[0],H=[];for(let y=0;y<ie.length;y+=1)H[y]=en(Yt(e,ie,y));const Se=y=>z(H[y],1,1,()=>{H[y]=null});function _e(y){e[6](y)}let He={};return e[0]!==void 0&&(He.days=e[0]),J=new Xn({props:He}),ue.push(()=>ye(J,"days",_e)),V=new _l({props:{reset_app:e[2]}}),I=new zn({}),{c(){t=f("div"),n=f("div"),n.innerHTML=`<h1 class="svelte-27ygun"><a href="https://github.com/Mjtlittle/time-card" class="secret svelte-27ygun">\u{1F570}\uFE0F Time Card</a></h1> 
    <span>Made by
      <a href="https://github.com/Mjtlittle" class="svelte-27ygun">Joshua Little</a></span>`,l=h(),te(s.$$.fragment),r=h(),te(o.$$.fragment),c=h(),d=f("div"),g=f("table"),M=f("thead"),C=f("th"),C.textContent="Weekday",m=h(),Q&&Q.c(),_=h(),$=f("th"),$.textContent="Clock-in",T=h(),j=f("th"),j.textContent="Clock-out",N=h(),v=f("th"),v.textContent="Hours",S=h(),q&&q.c(),x=h(),D=f("tbody");for(let y=0;y<H.length;y+=1)H[y].c();O=h(),te(J.$$.fragment),le=h(),W=f("div"),te(V.$$.fragment),se=h(),te(I.$$.fragment),P=h(),b=f("div"),p(n,"class","header svelte-27ygun"),p(C,"class","weekday svelte-27ygun"),p(d,"class","table svelte-27ygun"),p(W,"class","toggles svelte-27ygun"),p(b,"class","space svelte-27ygun"),p(t,"class","container svelte-27ygun")},m(y,B){w(y,t,B),u(t,n),u(t,l),Y(s,t,null),u(t,r),Y(o,t,null),u(t,c),u(t,d),u(d,g),u(g,M),u(M,C),u(M,m),Q&&Q.m(M,null),u(M,_),u(M,$),u(M,T),u(M,j),u(M,N),u(M,v),u(M,S),q&&q.m(M,null),u(g,x),u(g,D);for(let ve=0;ve<H.length;ve+=1)H[ve].m(D,null);u(d,O),Y(J,d,null),u(t,le),u(t,W),Y(V,W,null),u(W,se),Y(I,W,null),u(t,P),u(t,b),A=!0},p(y,[B]){const ve={};!i&&B&1&&(i=!0,ve.days=y[0],be(()=>i=!1)),s.$set(ve);const ke={};if(!a&&B&1&&(a=!0,ke.days=y[0],be(()=>a=!1)),o.$set(ke),y[1].minimal_mode?Q&&(Q.d(1),Q=null):Q||(Q=Zt(),Q.c(),Q.m(M,_)),y[1].minimal_mode?q&&(q.d(1),q=null):q||(q=xt(),q.c(),q.m(M,null)),B&1){ie=y[0];let K;for(K=0;K<ie.length;K+=1){const ge=Yt(y,ie,K);H[K]?(H[K].p(ge,B),E(H[K],1)):(H[K]=en(ge),H[K].c(),E(H[K],1),H[K].m(D,null))}for(_t(),K=ie.length;K<H.length;K+=1)Se(K);dt()}const de={};!G&&B&1&&(G=!0,de.days=y[0],be(()=>G=!1)),J.$set(de)},i(y){if(!A){E(s.$$.fragment,y),E(o.$$.fragment,y);for(let B=0;B<ie.length;B+=1)E(H[B]);E(J.$$.fragment,y),E(V.$$.fragment,y),E(I.$$.fragment,y),A=!0}},o(y){z(s.$$.fragment,y),z(o.$$.fragment,y),H=H.filter(Boolean);for(let B=0;B<H.length;B+=1)z(H[B]);z(J.$$.fragment,y),z(V.$$.fragment,y),z(I.$$.fragment,y),A=!1},d(y){y&&k(t),Z(s),Z(o),Q&&Q.d(),q&&q.d(),Ze(H,y),Z(J),Z(V),Z(I)}}}function pl(e,t,n){let l;Te(e,R,m=>n(1,l=m));let s=it.map(m=>({weekday:m,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0}));const i=()=>{const m={days:s,settings:l};localStorage.setItem(nt,JSON.stringify(m))},r=()=>{console.warn("RESTORED DEFAULTS"),Ft(R,l=ut,l),n(0,s=it.map(m=>({weekday:m,clock:{start:null,end:null},pre_clock:{start:null,end:null},enabled:!0}))),i()};Pn(()=>{const m=localStorage.getItem(nt);if(m==null){r();return}try{const _=JSON.parse(m);n(0,s=_.days),Ft(R,l=Ae(Ae({},ut),_.settings),l),i()}catch{r()}try{s.map(_=>[_.clock.start,_.clock.end,_.pre_clock.start,_.pre_clock.end,_.enabled,_.weekday]).reduce((_,$)=>[..._,...$],[]).some(_=>_===void 0)&&r()}catch{r()}});const a=setInterval(i,200);ft(()=>clearInterval(a));const c=()=>{clearInterval(a),localStorage.setItem(nt,void 0),location.reload()};function d(m){s=m,n(0,s),n(1,l)}function g(m){s=m,n(0,s),n(1,l)}function M(m,_,$,T){$[T]=m,n(0,s),n(1,l)}function C(m){s=m,n(0,s),n(1,l)}return e.$$.update=()=>{e.$$.dirty&3&&(Jn(s,l),n(0,s=[...s]))},[s,l,c,d,g,M,C]}class ml extends he{constructor(t){super(),me(this,t,pl,dl,fe,{})}}new ml({target:document.getElementById("app")});
