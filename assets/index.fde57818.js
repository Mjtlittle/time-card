var ke=Object.defineProperty;var ne=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var se=(t,e,n)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,le=(t,e)=>{for(var n in e||(e={}))we.call(e,n)&&se(t,n,e[n]);if(ne)for(var n of ne(e))Ce.call(e,n)&&se(t,n,e[n]);return t};const $e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};$e();function Y(){}function Me(t,e){for(const n in e)t[n]=e[n];return t}function _e(t){return t()}function re(){return Object.create(null)}function ut(t){t.forEach(_e)}function Ie(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Se(t){return Object.keys(t).length===0}function de(t,...e){if(t==null)return Y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t){let e;return de(t,n=>e=n)(),e}function q(t,e,n){t.$$.on_destroy.push(de(e,n))}function Te(t,e,n,l){if(t){const s=pe(t,e,n,l);return t[0](s)}}function pe(t,e,n,l){return t[1]&&l?Me(n.ctx.slice(),t[1](l(e))):n.ctx}function Fe(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let i=0;i<o;i+=1)r[i]=e.dirty[i]|s[i];return r}return e.dirty|s}return e.dirty}function Oe(t,e,n,l,s,r){if(s){const o=pe(e,n,l,r);t.p(o,s)}}function je(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function at(t,e,n){return t.set(n),e}function a(t,e){t.appendChild(e)}function M(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function Ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function k(){return P(" ")}function Le(){return P("")}function Q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return t===""?null:+t}function Pe(t){return Array.from(t.childNodes)}function mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function tt(t,e){t.value=e==null?"":e}function _t(t,e,n){t.classList[n?"add":"remove"](e)}let Ct;function wt(t){Ct=t}function me(){if(!Ct)throw new Error("Function called outside component initialization");return Ct}function Ae(t){me().$$.on_mount.push(t)}function he(t){me().$$.on_destroy.push(t)}const vt=[],rt=[],Pt=[],Rt=[],Ne=Promise.resolve();let Jt=!1;function ze(){Jt||(Jt=!0,Ne.then(ge))}function Kt(t){Pt.push(t)}function $t(t){Rt.push(t)}const Ht=new Set;let Lt=0;function ge(){const t=Ct;do{for(;Lt<vt.length;){const e=vt[Lt];Lt++,wt(e),De(e.$$)}for(wt(null),vt.length=0,Lt=0;rt.length;)rt.pop()();for(let e=0;e<Pt.length;e+=1){const n=Pt[e];Ht.has(n)||(Ht.add(n),n())}Pt.length=0}while(vt.length);for(;Rt.length;)Rt.pop()();Jt=!1,Ht.clear(),wt(t)}function De(t){if(t.fragment!==null){t.update(),ut(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Kt)}}const At=new Set;let lt;function qe(){lt={r:0,c:[],p:lt}}function Be(){lt.r||ut(lt.c),lt=lt.p}function J(t,e){t&&t.i&&(At.delete(t),t.i(e))}function U(t,e,n,l){if(t&&t.o){if(At.has(t))return;At.add(t),lt.c.push(()=>{At.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function Mt(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function Z(t){t&&t.c()}function V(t,e,n,l){const{fragment:s,on_mount:r,on_destroy:o,after_update:i}=t.$$;s&&s.m(e,n),l||Kt(()=>{const c=r.map(_e).filter(Ie);o?o.push(...c):ut(c),t.$$.on_mount=[]}),i.forEach(Kt)}function X(t,e){const n=t.$$;n.fragment!==null&&(ut(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function He(t,e){t.$$.dirty[0]===-1&&(vt.push(t),ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(t,e,n,l,s,r,o,i=[-1]){const c=Ct;wt(t);const u=t.$$={fragment:null,ctx:null,props:r,update:Y,not_equal:s,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:re(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,C,...h)=>{const v=h.length?h[0]:C;return u.ctx&&s(u.ctx[d],u.ctx[d]=v)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](v),f&&He(t,d)),C}):[],u.update(),f=!0,ut(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const d=Pe(e.target);u.fragment&&u.fragment.l(d),d.forEach($)}else u.fragment&&u.fragment.c();e.intro&&J(t.$$.fragment),V(t,e.target,e.anchor,e.customElement),ge()}wt(c)}class gt{$destroy(){X(this,1),this.$destroy=Y}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ue(t){let e;return{c(){e=_("span"),e.textContent="Are you sure?",m(e,"class","confirmation svelte-khyzpg")},m(n,l){M(n,e,l)},d(n){n&&$(e)}}}function We(t){let e,n,l,s,r,o;const i=t[4].default,c=Te(i,t,t[3],null);let u=t[0]&&ue();return{c(){e=_("button"),n=_("span"),c&&c.c(),l=k(),u&&u.c(),m(n,"class","svelte-khyzpg"),_t(n,"hidden",t[0]),m(e,"class","svelte-khyzpg")},m(f,d){M(f,e,d),a(e,n),c&&c.m(n,null),a(e,l),u&&u.m(e,null),s=!0,r||(o=Q(e,"click",t[1]),r=!0)},p(f,[d]){c&&c.p&&(!s||d&8)&&Oe(c,i,f,f[3],s?Fe(i,f[3],d,null):je(f[3]),null),d&1&&_t(n,"hidden",f[0]),f[0]?u||(u=ue(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(f){s||(J(c,f),s=!0)},o(f){U(c,f),s=!1},d(f){f&&$(e),c&&c.d(f),u&&u.d(),r=!1,o()}}}function Re(t,e,n){let{$$slots:l={},$$scope:s}=e,r=!1,{on_confirm:o=()=>{}}=e,i=null;const c=()=>{if(!r){n(0,r=!0),i=setTimeout(()=>n(0,r=!1),2e3);return}clearTimeout(i),o(),n(0,r=!1)};return t.$$set=u=>{"on_confirm"in u&&n(2,o=u.on_confirm),"$$scope"in u&&n(3,s=u.$$scope)},[r,c,o,s,l]}class Ut extends gt{constructor(e){super(),ht(this,e,Re,We,ot,{on_confirm:2})}}const ct=[];function yt(t,e=Y){let n;const l=new Set;function s(i){if(ot(t,i)&&(t=i,n)){const c=!ct.length;for(const u of l)u[1](),ct.push(u,t);if(c){for(let u=0;u<ct.length;u+=2)ct[u][0](ct[u+1]);ct.length=0}}}function r(i){s(i(t))}function o(i,c=Y){const u=[i,c];return l.add(u),l.size===1&&(n=e(s)||Y),i(t),()=>{l.delete(u),l.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const pt=yt([8,0]),x=yt(40),It=yt(40),Nt=yt(21.28),zt=yt(1.5),Dt=yt(!0),Wt="app-data",St=t=>t[0]+t[1]/60,Gt=t=>[Math.floor(t),Math.round((t-Math.floor(t))*60)],Qt=(t,e)=>St(e)-St(t),Je=()=>{const t=new Date,e=t.getHours(),n=t.getMinutes();return[e,n]},Ke=t=>{if(!dt(t))return 0;let e=Qt(t.start,t.end);return e-=kt(x)/60,e},ye=t=>{if(!t.start&&!t.end)return 0;let e=0;if(dt(t))e=Qt(t.start,t.end);else if(!t.end){const n=Je();e=Qt(t.start,n)}return e-=kt(x)/60,e},dt=t=>!!(t.start&&t.end),be=(t,e)=>{const n=le({},t);if(!n.start&&!n.end&&(n.start=kt(pt)),dt(n)&&(n.end=null),n.end){if(!n.start){let s=St(n.end)-e-kt(x)/60;s=Math.max(0,s),n.start=Gt(s)}}else{let s=St(n.start)+e+kt(x)/60;s=Math.min(23,s),n.end=Gt(s)}return n},Ue=(t,e=15)=>{const[n,l]=t,s=[Math.floor(n),Math.round(l/e)*e];return s[1]>=60&&(s[0]+=1,s[1]-=60),s},Ge=(t,e)=>{const n=St(t)+e;return n>=24?t:Gt(n)};function Qe(t){let e,n,l;return{c(){e=_("input"),m(e,"class","input svelte-1j005ez"),m(e,"type","time"),e.value=t[0]},m(s,r){M(s,e,r),n||(l=Q(e,"change",t[1]),n=!0)},p(s,[r]){r&1&&e.value!==s[0]&&(e.value=s[0])},i:Y,o:Y,d(s){s&&$(e),n=!1,l()}}}function Ve(t,e,n){let{value:l=void 0}=e,s;const r=([i,c])=>{const u=String(i).padStart(2,"0"),f=String(c).padStart(2,"0");return`${u}:${f}`},o=i=>{n(0,s=i.target.value),s==""?n(2,l=null):n(2,l=s.split(":").map(c=>parseInt(c)))};return t.$$set=i=>{"value"in i&&n(2,l=i.value)},t.$$.update=()=>{t.$$.dirty&4&&(l!=null?n(0,s=r(l)):n(0,s=""))},[s,o,l]}class Vt extends gt{constructor(e){super(),ht(this,e,Ve,Qe,ot,{value:2})}}function Xe(t){let e;return{c(){e=P("-.--")},m(n,l){M(n,e,l)},p:Y,d(n){n&&$(e)}}}function Ye(t){let e=t[2].toFixed(2)+"",n;return{c(){n=P(e)},m(l,s){M(l,n,s)},p(l,s){s&4&&e!==(e=l[2].toFixed(2)+"")&&mt(n,e)},d(l){l&&$(n)}}}function Ze(t){let e,n,l,s,r,o,i,c,u,f,d,C,h,v,O,b,N,A,B,j,H,g,E;function W(y){t[7](y)}let I={};t[0].start!==void 0&&(I.value=t[0].start),o=new Vt({props:I}),rt.push(()=>Mt(o,"value",W));function L(y){t[8](y)}let K={};t[0].end!==void 0&&(K.value=t[0].end),f=new Vt({props:K}),rt.push(()=>Mt(f,"value",L));function w(y,p){return y[0].start?Ye:Xe}let z=w(t),D=z(t);return{c(){e=_("tr"),n=_("td"),l=P(t[1]),s=k(),r=_("td"),Z(o.$$.fragment),c=k(),u=_("td"),Z(f.$$.fragment),C=k(),h=_("td"),D.c(),v=k(),O=_("td"),b=_("button"),b.textContent="Make 8hrs",N=k(),A=_("button"),A.textContent="+ 15min",B=k(),j=_("button"),j.textContent="Clear",m(n,"class","weekday svelte-1jnvlf0"),m(r,"class","svelte-1jnvlf0"),m(u,"class","svelte-1jnvlf0"),m(h,"class","hours svelte-1jnvlf0"),m(b,"class","button is-info is-light"),m(A,"class","button is-success is-light"),m(j,"class","button is-danger is-light"),m(O,"class","svelte-1jnvlf0"),m(e,"class","svelte-1jnvlf0"),_t(e,"yellow",t[0].start&&!t[0].end),_t(e,"green",t[0].start&&t[0].end)},m(y,p){M(y,e,p),a(e,n),a(n,l),a(e,s),a(e,r),V(o,r,null),a(e,c),a(e,u),V(f,u,null),a(e,C),a(e,h),D.m(h,null),a(e,v),a(e,O),a(O,b),a(O,N),a(O,A),a(O,B),a(O,j),H=!0,g||(E=[Q(b,"click",t[3]),Q(A,"click",t[4]),Q(j,"click",t[5])],g=!0)},p(y,[p]){(!H||p&2)&&mt(l,y[1]);const S={};!i&&p&1&&(i=!0,S.value=y[0].start,$t(()=>i=!1)),o.$set(S);const R={};!d&&p&1&&(d=!0,R.value=y[0].end,$t(()=>d=!1)),f.$set(R),z===(z=w(y))&&D?D.p(y,p):(D.d(1),D=z(y),D&&(D.c(),D.m(h,null))),p&1&&_t(e,"yellow",y[0].start&&!y[0].end),p&1&&_t(e,"green",y[0].start&&y[0].end)},i(y){H||(J(o.$$.fragment,y),J(f.$$.fragment,y),H=!0)},o(y){U(o.$$.fragment,y),U(f.$$.fragment,y),H=!1},d(y){y&&$(e),X(o),X(f),D.d(),g=!1,ut(E)}}}function xe(t,e,n){let l;q(t,x,v=>n(6,l=v));let{day:s}=e,{weekday:r="Unknown"}=e,o=0;const i=()=>{n(2,o=ye(s))},c=setInterval(i,5e3);he(()=>clearInterval(c));const u=()=>{n(0,s=be(s,8))},f=()=>{!s.end||n(0,s.end=Ge(s.end,15/60),s)},d=()=>{n(0,s.start=void 0,s),n(0,s.end=void 0,s)};function C(v){t.$$.not_equal(s.start,v)&&(s.start=v,n(0,s))}function h(v){t.$$.not_equal(s.end,v)&&(s.end=v,n(0,s))}return t.$$set=v=>{"day"in v&&n(0,s=v.day),"weekday"in v&&n(1,r=v.weekday)},t.$$.update=()=>{t.$$.dirty&65&&i()},[s,r,o,u,f,d,l,C,h]}class tn extends gt{constructor(e){super(),ht(this,e,xe,Ze,ot,{day:0,weekday:1})}}function en(t){let e;return{c(){e=P("Round Leaving Time (15 min)")},m(n,l){M(n,e,l)},d(n){n&&$(e)}}}function nn(t){let e;return{c(){e=P("Clear All Times")},m(n,l){M(n,e,l)},d(n){n&&$(e)}}}function sn(t){let e,n,l,s,r,o,i,c,u;return s=new Ut({props:{on_confirm:t[1],$$slots:{default:[en]},$$scope:{ctx:t}}}),o=new Ut({props:{on_confirm:t[2],$$slots:{default:[nn]},$$scope:{ctx:t}}}),{c(){e=_("div"),n=_("button"),n.textContent="Fill Week",l=k(),Z(s.$$.fragment),r=k(),Z(o.$$.fragment)},m(f,d){M(f,e,d),a(e,n),a(e,l),V(s,e,null),a(e,r),V(o,e,null),i=!0,c||(u=Q(n,"click",t[0]),c=!0)},p(f,[d]){const C={};d&64&&(C.$$scope={dirty:d,ctx:f}),s.$set(C);const h={};d&64&&(h.$$scope={dirty:d,ctx:f}),o.$set(h)},i(f){i||(J(s.$$.fragment,f),J(o.$$.fragment,f),i=!0)},o(f){U(s.$$.fragment,f),U(o.$$.fragment,f),i=!1},d(f){f&&$(e),X(s),X(o),c=!1,u()}}}function ln(t,e,n){let l,s;q(t,It,u=>n(4,l=u)),q(t,pt,u=>n(5,s=u));let{days:r}=e;const o=()=>{r.forEach(h=>{h.end&&!h.start&&(h.start=s)}),n(3,r=[...r]);const u=r.map(Ke).reduce((h,v)=>h+v),f=l-u;if(f>l)return;const d=r.map(dt).filter(h=>h===!1).length;if(d==0)return;const C=f/d;n(3,r=r.map(h=>dt(h)?h:be(h,C)))},i=()=>{n(3,r=r.map(u=>(dt(u)&&(u.end=Ue(u.end)),u)))},c=()=>{n(3,r=r.map(()=>({})))};return t.$$set=u=>{"days"in u&&n(3,r=u.days)},[o,i,c,r]}class rn extends gt{constructor(e){super(),ht(this,e,ln,sn,ot,{days:3})}}function un(t){let e;return{c(){e=P("Delete all settings")},m(n,l){M(n,e,l)},d(n){n&&$(e)}}}function on(t){let e,n,l,s,r,o,i,c,u,f,d,C,h,v,O,b,N,A,B,j,H,g,E,W,I,L,K,w,z,D,y,p,S,R,T,bt,it,Tt,Xt,Ft,nt,Yt,ft,Ot,Zt,jt,st,Et,qt,xt;function ve(F){t[7](F)}let te={};return t[1]!==void 0&&(te.value=t[1]),f=new Vt({props:te}),rt.push(()=>Mt(f,"value",ve)),st=new Ut({props:{on_confirm:t[0],$$slots:{default:[un]},$$scope:{ctx:t}}}),{c(){e=_("details"),n=_("summary"),n.textContent="Preferences",l=k(),s=_("table"),r=_("tbody"),o=_("tr"),i=_("td"),i.textContent="Prefered Start Time:",c=k(),u=_("td"),Z(f.$$.fragment),C=k(),h=_("tr"),v=_("td"),v.textContent="Lunch Duration (minutes):",O=k(),b=_("td"),N=_("input"),A=k(),B=_("tr"),j=_("td"),j.textContent="Target Weekly Hours:",H=k(),g=_("td"),E=_("input"),W=k(),I=_("tr"),L=_("td"),L.textContent="Hourly Pay ($):",K=k(),w=_("td"),z=_("input"),D=k(),y=_("tr"),p=_("td"),p.textContent="Overtime Rate:",S=k(),R=_("td"),T=_("input"),bt=k(),it=_("tr"),Tt=_("td"),Tt.textContent="Show Pay:",Xt=k(),Ft=_("td"),nt=_("input"),Yt=k(),ft=_("tr"),Ot=_("td"),Ot.textContent="Reset App:",Zt=k(),jt=_("td"),Z(st.$$.fragment),m(n,"class","svelte-1l12xsf"),m(i,"class","svelte-1l12xsf"),m(u,"class","svelte-1l12xsf"),m(o,"class","svelte-1l12xsf"),m(v,"class","svelte-1l12xsf"),m(N,"class","input"),m(N,"type","number"),m(b,"class","svelte-1l12xsf"),m(h,"class","svelte-1l12xsf"),m(j,"class","svelte-1l12xsf"),m(E,"class","input"),m(E,"type","number"),m(g,"class","svelte-1l12xsf"),m(B,"class","svelte-1l12xsf"),m(L,"class","svelte-1l12xsf"),m(z,"class","input"),m(z,"type","number"),m(w,"class","svelte-1l12xsf"),m(I,"class","svelte-1l12xsf"),m(p,"class","svelte-1l12xsf"),m(T,"class","input"),m(T,"type","number"),m(R,"class","svelte-1l12xsf"),m(y,"class","svelte-1l12xsf"),m(Tt,"class","svelte-1l12xsf"),m(nt,"class",""),m(nt,"type","checkbox"),m(Ft,"class","svelte-1l12xsf"),m(it,"class","svelte-1l12xsf"),m(Ot,"class","svelte-1l12xsf"),m(jt,"class","svelte-1l12xsf"),m(ft,"class","svelte-1l12xsf"),m(s,"class","svelte-1l12xsf")},m(F,G){M(F,e,G),a(e,n),a(e,l),a(e,s),a(s,r),a(r,o),a(o,i),a(o,c),a(o,u),V(f,u,null),a(r,C),a(r,h),a(h,v),a(h,O),a(h,b),a(b,N),tt(N,t[2]),a(r,A),a(r,B),a(B,j),a(B,H),a(B,g),a(g,E),tt(E,t[3]),a(r,W),a(r,I),a(I,L),a(I,K),a(I,w),a(w,z),tt(z,t[4]),a(r,D),a(r,y),a(y,p),a(y,S),a(y,R),a(R,T),tt(T,t[5]),a(r,bt),a(r,it),a(it,Tt),a(it,Xt),a(it,Ft),a(Ft,nt),nt.checked=t[6],a(r,Yt),a(r,ft),a(ft,Ot),a(ft,Zt),a(ft,jt),V(st,jt,null),Et=!0,qt||(xt=[Q(N,"input",t[8]),Q(E,"input",t[9]),Q(z,"input",t[10]),Q(T,"input",t[11]),Q(nt,"change",t[12])],qt=!0)},p(F,[G]){const ee={};!d&&G&2&&(d=!0,ee.value=F[1],$t(()=>d=!1)),f.$set(ee),G&4&&et(N.value)!==F[2]&&tt(N,F[2]),G&8&&et(E.value)!==F[3]&&tt(E,F[3]),G&16&&et(z.value)!==F[4]&&tt(z,F[4]),G&32&&et(T.value)!==F[5]&&tt(T,F[5]),G&64&&(nt.checked=F[6]);const Bt={};G&1&&(Bt.on_confirm=F[0]),G&8192&&(Bt.$$scope={dirty:G,ctx:F}),st.$set(Bt)},i(F){Et||(J(f.$$.fragment,F),J(st.$$.fragment,F),Et=!0)},o(F){U(f.$$.fragment,F),U(st.$$.fragment,F),Et=!1},d(F){F&&$(e),X(f),X(st),qt=!1,ut(xt)}}}function fn(t,e,n){let l,s,r,o,i,c;q(t,pt,b=>n(1,l=b)),q(t,x,b=>n(2,s=b)),q(t,It,b=>n(3,r=b)),q(t,Nt,b=>n(4,o=b)),q(t,zt,b=>n(5,i=b)),q(t,Dt,b=>n(6,c=b));let{reset_app:u}=e;function f(b){l=b,pt.set(l)}function d(){s=et(this.value),x.set(s)}function C(){r=et(this.value),It.set(r)}function h(){o=et(this.value),Nt.set(o)}function v(){i=et(this.value),zt.set(i)}function O(){c=this.checked,Dt.set(c)}return t.$$set=b=>{"reset_app"in b&&n(0,u=b.reset_app)},[u,l,s,r,o,i,c,f,d,C,h,v,O]}class an extends gt{constructor(e){super(),ht(this,e,fn,on,ot,{reset_app:0})}}function oe(t,e,n){const l=t.slice();return l[19]=e[n],l[20]=e,l[21]=n,l}function ie(t){let e,n,l,s,r=(t[2]+t[3]).toFixed(2)+"",o;return{c(){e=_("br"),n=k(),l=_("strong"),l.textContent="Total Pay:",s=P(" $"),o=P(r)},m(i,c){M(i,e,c),M(i,n,c),M(i,l,c),M(i,s,c),M(i,o,c)},p(i,c){c&12&&r!==(r=(i[2]+i[3]).toFixed(2)+"")&&mt(o,r)},d(i){i&&$(e),i&&$(n),i&&$(l),i&&$(s),i&&$(o)}}}function fe(t){let e,n,l,s,r=(t[1]-t[5]).toFixed(2)+"",o,i,c,u=t[4]&&ae(t);return{c(){e=_("br"),n=k(),l=_("strong"),l.textContent="Overtime:",s=k(),o=P(r),i=P(` hours
        `),u&&u.c(),c=Le()},m(f,d){M(f,e,d),M(f,n,d),M(f,l,d),M(f,s,d),M(f,o,d),M(f,i,d),u&&u.m(f,d),M(f,c,d)},p(f,d){d&34&&r!==(r=(f[1]-f[5]).toFixed(2)+"")&&mt(o,r),f[4]?u?u.p(f,d):(u=ae(f),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},d(f){f&&$(e),f&&$(n),f&&$(l),f&&$(s),f&&$(o),f&&$(i),u&&u.d(f),f&&$(c)}}}function ae(t){let e,n=t[3].toFixed(2)+"",l,s;return{c(){e=P("($"),l=P(n),s=P(")")},m(r,o){M(r,e,o),M(r,l,o),M(r,s,o)},p(r,o){o&8&&n!==(n=r[3].toFixed(2)+"")&&mt(l,n)},d(r){r&&$(e),r&&$(l),r&&$(s)}}}function ce(t){let e,n,l;function s(o){t[11](o,t[19],t[20],t[21])}let r={weekday:t[6][t[21]]};return t[19]!==void 0&&(r.day=t[19]),e=new tn({props:r}),rt.push(()=>Mt(e,"day",s)),{c(){Z(e.$$.fragment)},m(o,i){V(e,o,i),l=!0},p(o,i){t=o;const c={};!n&&i&1&&(n=!0,c.day=t[19],$t(()=>n=!1)),e.$set(c)},i(o){l||(J(e.$$.fragment,o),l=!0)},o(o){U(e.$$.fragment,o),l=!1},d(o){X(e,o)}}}function cn(t){let e,n,l,s,r,o=t[1].toFixed(2)+"",i,c,u,f=Math.floor(t[3])>0,d,C,h,v,O,b,N,A,B,j,H,g,E,W,I=t[4]&&ie(t),L=f&&fe(t),K=t[0],w=[];for(let p=0;p<K.length;p+=1)w[p]=ce(oe(t,K,p));const z=p=>U(w[p],1,1,()=>{w[p]=null});function D(p){t[12](p)}let y={};return t[0]!==void 0&&(y.days=t[0]),j=new rn({props:y}),rt.push(()=>Mt(j,"days",D)),E=new an({props:{reset_app:t[7]}}),{c(){e=_("div"),n=_("div"),l=_("div"),s=_("strong"),s.textContent="Payed Time:",r=k(),i=P(o),c=P(` hours
      `),I&&I.c(),u=k(),L&&L.c(),d=k(),C=_("progress"),h=k(),v=_("div"),O=_("table"),b=_("thead"),b.innerHTML=`<th>Weekday</th> 
        <th>Clock-In</th> 
        <th>Clock-Out</th> 
        <th>Hours</th> 
        <th>Operations</th>`,N=k(),A=_("tbody");for(let p=0;p<w.length;p+=1)w[p].c();B=k(),Z(j.$$.fragment),g=k(),Z(E.$$.fragment),C.value=t[1],m(C,"max",t[5]),m(C,"class","svelte-1s99fvk"),m(b,"class","svelte-1s99fvk"),m(e,"class","container svelte-1s99fvk")},m(p,S){M(p,e,S),a(e,n),a(n,l),a(l,s),a(l,r),a(l,i),a(l,c),I&&I.m(l,null),a(l,u),L&&L.m(l,null),a(n,d),a(n,C),a(e,h),a(e,v),a(v,O),a(O,b),a(O,N),a(O,A);for(let R=0;R<w.length;R+=1)w[R].m(A,null);a(e,B),V(j,e,null),a(e,g),V(E,e,null),W=!0},p(p,[S]){if((!W||S&2)&&o!==(o=p[1].toFixed(2)+"")&&mt(i,o),p[4]?I?I.p(p,S):(I=ie(p),I.c(),I.m(l,u)):I&&(I.d(1),I=null),S&8&&(f=Math.floor(p[3])>0),f?L?L.p(p,S):(L=fe(p),L.c(),L.m(l,null)):L&&(L.d(1),L=null),(!W||S&2)&&(C.value=p[1]),(!W||S&32)&&m(C,"max",p[5]),S&65){K=p[0];let T;for(T=0;T<K.length;T+=1){const bt=oe(p,K,T);w[T]?(w[T].p(bt,S),J(w[T],1)):(w[T]=ce(bt),w[T].c(),J(w[T],1),w[T].m(A,null))}for(qe(),T=K.length;T<w.length;T+=1)z(T);Be()}const R={};!H&&S&1&&(H=!0,R.days=p[0],$t(()=>H=!1)),j.$set(R)},i(p){if(!W){for(let S=0;S<K.length;S+=1)J(w[S]);J(j.$$.fragment,p),J(E.$$.fragment,p),W=!0}},o(p){w=w.filter(Boolean);for(let S=0;S<w.length;S+=1)U(w[S]);U(j.$$.fragment,p),U(E.$$.fragment,p),W=!1},d(p){p&&$(e),I&&I.d(),L&&L.d(),Ee(w,p),X(j),X(E)}}}function _n(t,e,n){let l,s,r,o,i,c;q(t,Dt,g=>n(4,l=g)),q(t,zt,g=>n(8,s=g)),q(t,Nt,g=>n(9,r=g)),q(t,pt,g=>n(13,o=g)),q(t,It,g=>n(5,i=g)),q(t,x,g=>n(10,c=g));let u=[{},{},{},{},{}];const f=["Monday","Tuesday","Wednesday","Thursday","Friday"];let d=0,C=0,h=0;const v=()=>{n(1,d=u.map(ye).reduce((g,E)=>g+E,0))},O=()=>{if(n(2,C=Math.min(i,d)*r),d<i){n(3,h=0);return}n(3,h=(d-i)*s*r)},b=()=>{const g={days:u,lunch_minutes:c,target_week_hours:i,usual_start_time:o,hourly_pay_rate:r,overtime_pay_rate:s,show_pay:l};localStorage.setItem(Wt,JSON.stringify(g))};Ae(()=>{const g=JSON.parse(localStorage.getItem(Wt));n(0,u=g.days),at(x,c=g.lunch_minutes,c),at(It,i=g.target_week_hours,i),at(pt,o=g.usual_start_time,o),at(Nt,r=g.hourly_pay_rate,r),at(zt,s=g.overtime_pay_rate,s),at(Dt,l=g.show_pay,l)});const A=setInterval(b,200);he(()=>clearInterval(A));const B=()=>{clearInterval(A),localStorage.setItem(Wt,void 0),location.reload()};function j(g,E,W,I){W[I]=g,n(0,u)}function H(g){u=g,n(0,u)}return t.$$.update=()=>{t.$$.dirty&1025&&v(),t.$$.dirty&770&&O()},[u,d,C,h,l,i,f,B,s,r,c,j,H]}class dn extends gt{constructor(e){super(),ht(this,e,_n,cn,ot,{})}}new dn({target:document.getElementById("app")});
