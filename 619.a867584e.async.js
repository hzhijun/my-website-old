(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[619],{8212:function(oe,P,r){"use strict";r.d(P,{Z:function(){return g}});var d=r(28991),t=r(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},w=x,p=r(27029),c=function(G,J){return t.createElement(p.Z,(0,d.Z)((0,d.Z)({},G),{},{ref:J,icon:w}))};c.displayName="EditOutlined";var g=t.forwardRef(c)},70347:function(){},47828:function(){},91894:function(oe,P,r){"use strict";r.d(P,{Z:function(){return Xe}});var d=r(96156),t=r(22122),x=r(94184),w=r.n(x),p=r(98423),c=r(67294),g=r(53124),T=r(97647),G=r(90860),J=r(63885),de=function(i,E){var b={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&E.indexOf(u)<0&&(b[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,u=Object.getOwnPropertySymbols(i);y<u.length;y++)E.indexOf(u[y])<0&&Object.prototype.propertyIsEnumerable.call(i,u[y])&&(b[u[y]]=i[u[y]]);return b},te=function(E){var b=E.prefixCls,u=E.className,y=E.hoverable,me=y===void 0?!0:y,ye=de(E,["prefixCls","className","hoverable"]);return c.createElement(g.C,null,function(ie){var ge=ie.getPrefixCls,Ee=ge("card",b),Q=w()("".concat(Ee,"-grid"),u,(0,d.Z)({},"".concat(Ee,"-grid-hoverable"),me));return c.createElement("div",(0,t.Z)({},ye,{className:Q}))})},S=te,fe=function(i,E){var b={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&E.indexOf(u)<0&&(b[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,u=Object.getOwnPropertySymbols(i);y<u.length;y++)E.indexOf(u[y])<0&&Object.prototype.propertyIsEnumerable.call(i,u[y])&&(b[u[y]]=i[u[y]]);return b};function ve(i){var E=i.map(function(b,u){return c.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(u)},c.createElement("span",null,b))});return E}var j=c.forwardRef(function(i,E){var b,u,y=c.useContext(g.E_),me=y.getPrefixCls,ye=y.direction,ie=c.useContext(T.Z),ge=function(ae){var ce;(ce=i.onTabChange)===null||ce===void 0||ce.call(i,ae)},Ee=function(){var ae;return c.Children.forEach(i.children,function(ce){ce&&ce.type&&ce.type===S&&(ae=!0)}),ae},Q=i.prefixCls,ke=i.className,se=i.extra,Pe=i.headStyle,Ae=Pe===void 0?{}:Pe,$e=i.bodyStyle,vt=$e===void 0?{}:$e,Ke=i.title,He=i.loading,Ye=i.bordered,qe=Ye===void 0?!0:Ye,pt=i.size,Re=i.type,Ge=i.cover,Te=i.actions,Ce=i.tabList,et=i.children,tt=i.activeTabKey,mt=i.defaultActiveTabKey,yt=i.tabBarExtraContent,gt=i.hoverable,at=i.tabProps,ze=at===void 0?{}:at,nt=fe(i,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),R=me("card",Q),Et=c.createElement(G.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},et),Me=tt!==void 0,Ct=(0,t.Z)((0,t.Z)({},ze),(b={},(0,d.Z)(b,Me?"activeKey":"defaultActiveKey",Me?tt:mt),(0,d.Z)(b,"tabBarExtraContent",yt),b)),rt,lt=Ce&&Ce.length?c.createElement(J.Z,(0,t.Z)({size:"large"},Ct,{className:"".concat(R,"-head-tabs"),onChange:ge,items:Ce.map(function(we){var ae;return{label:we.tab,key:we.key,disabled:(ae=we.disabled)!==null&&ae!==void 0?ae:!1}})})):null;(Ke||se||lt)&&(rt=c.createElement("div",{className:"".concat(R,"-head"),style:Ae},c.createElement("div",{className:"".concat(R,"-head-wrapper")},Ke&&c.createElement("div",{className:"".concat(R,"-head-title")},Ke),se&&c.createElement("div",{className:"".concat(R,"-extra")},se)),lt));var bt=Ge?c.createElement("div",{className:"".concat(R,"-cover")},Ge):null,ht=c.createElement("div",{className:"".concat(R,"-body"),style:vt},He?Et:et),xt=Te&&Te.length?c.createElement("ul",{className:"".concat(R,"-actions")},ve(Te)):null,St=(0,p.Z)(nt,["onTabChange"]),ot=pt||ie,Ot=w()(R,(u={},(0,d.Z)(u,"".concat(R,"-loading"),He),(0,d.Z)(u,"".concat(R,"-bordered"),qe),(0,d.Z)(u,"".concat(R,"-hoverable"),gt),(0,d.Z)(u,"".concat(R,"-contain-grid"),Ee()),(0,d.Z)(u,"".concat(R,"-contain-tabs"),Ce&&Ce.length),(0,d.Z)(u,"".concat(R,"-").concat(ot),ot),(0,d.Z)(u,"".concat(R,"-type-").concat(Re),!!Re),(0,d.Z)(u,"".concat(R,"-rtl"),ye==="rtl"),u),ke);return c.createElement("div",(0,t.Z)({ref:E},St,{className:Ot}),rt,bt,ht,xt)}),pe=j,Je=function(i,E){var b={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&E.indexOf(u)<0&&(b[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,u=Object.getOwnPropertySymbols(i);y<u.length;y++)E.indexOf(u[y])<0&&Object.prototype.propertyIsEnumerable.call(i,u[y])&&(b[u[y]]=i[u[y]]);return b},Qe=function(E){return c.createElement(g.C,null,function(b){var u=b.getPrefixCls,y=E.prefixCls,me=E.className,ye=E.avatar,ie=E.title,ge=E.description,Ee=Je(E,["prefixCls","className","avatar","title","description"]),Q=u("card",y),ke=w()("".concat(Q,"-meta"),me),se=ye?c.createElement("div",{className:"".concat(Q,"-meta-avatar")},ye):null,Pe=ie?c.createElement("div",{className:"".concat(Q,"-meta-title")},ie):null,Ae=ge?c.createElement("div",{className:"".concat(Q,"-meta-description")},ge):null,$e=Pe||Ae?c.createElement("div",{className:"".concat(Q,"-meta-detail")},Pe,Ae):null;return c.createElement("div",(0,t.Z)({},Ee,{className:ke}),se,$e)})},ft=Qe,Ie=pe;Ie.Grid=S,Ie.Meta=ft;var Xe=Ie},58024:function(oe,P,r){"use strict";var d=r(38663),t=r.n(d),x=r(70347),w=r.n(x),p=r(18446),c=r(18106)},97272:function(oe,P,r){"use strict";r.d(P,{Z:function(){return _t}});var d=r(22122),t=r(67294),x=r(96156),w=r(90484),p=r(28481),c=r(79508),g=r(99165),T=r(8212),G=r(94184),J=r.n(G),de=r(20640),te=r.n(de),S=r(48717),fe=r(50344),ve=r(8410),j=r(21770),pe=r(98423),Je=r(42550),Qe=r(53124),ft=r(42051),Ie=r(34952),Xe=r(79370),i=r(45777),E=r(28991),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},u=b,y=r(27029),me=function(n,l){return t.createElement(y.Z,(0,E.Z)((0,E.Z)({},n),{},{ref:l,icon:u}))};me.displayName="EnterOutlined";var ye=t.forwardRef(me),ie=r(15105),ge=r(94418),Ee=r(96159),Q=function(n){var l=n.prefixCls,a=n["aria-label"],o=n.className,m=n.style,A=n.direction,$=n.maxLength,N=n.autoSize,B=N===void 0?!0:N,C=n.value,X=n.onSave,U=n.onCancel,z=n.onEnd,W=n.component,k=n.enterIcon,be=k===void 0?t.createElement(ye,null):k,ne=t.useRef(null),D=t.useRef(!1),re=t.useRef(),Y=t.useState(C),ue=(0,p.Z)(Y,2),le=ue[0],I=ue[1];t.useEffect(function(){I(C)},[C]),t.useEffect(function(){if(ne.current&&ne.current.resizableTextArea){var O=ne.current.resizableTextArea.textArea;O.focus();var Z=O.value.length;O.setSelectionRange(Z,Z)}},[]);var je=function(Z){var L=Z.target;I(L.value.replace(/[\n\r]/g,""))},he=function(){D.current=!0},V=function(){D.current=!1},_=function(Z){var L=Z.keyCode;D.current||(re.current=L)},h=function(){X(le.trim())},Be=function(Z){var L=Z.keyCode,Ue=Z.ctrlKey,_e=Z.altKey,De=Z.metaKey,Se=Z.shiftKey;re.current===L&&!D.current&&!Ue&&!_e&&!De&&!Se&&(L===ie.Z.ENTER?(h(),z==null||z()):L===ie.Z.ESC&&U())},xe=function(){h()},Ne=W?"".concat(l,"-").concat(W):"",H=J()(l,"".concat(l,"-edit-content"),(0,x.Z)({},"".concat(l,"-rtl"),A==="rtl"),o,Ne);return t.createElement("div",{className:H,style:m},t.createElement(ge.Z,{ref:ne,maxLength:$,value:le,onChange:je,onKeyDown:_,onKeyUp:Be,onCompositionStart:he,onCompositionEnd:V,onBlur:xe,"aria-label":a,rows:1,autoSize:B}),be!==null?(0,Ee.Tm)(be,{className:"".concat(l,"-edit-content-confirm")}):null)},ke=Q;function se(e,n){return t.useMemo(function(){var l=!!e;return[l,(0,d.Z)((0,d.Z)({},n),l&&(0,w.Z)(e)==="object"?e:null)]},[e])}var Pe=function(n,l){var a=t.useRef(!1);t.useEffect(function(){a.current?n():a.current=!0},l)},Ae=Pe,$e=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},vt=t.forwardRef(function(e,n){var l=e.prefixCls,a=e.component,o=a===void 0?"article":a,m=e.className,A=e.setContentRef,$=e.children,N=e.direction,B=$e(e,["prefixCls","component","className","setContentRef","children","direction"]),C=t.useContext(Qe.E_),X=C.getPrefixCls,U=C.direction,z=N!=null?N:U,W=n;A&&(W=(0,Je.sQ)(n,A));var k=X("typography",l),be=J()(k,(0,x.Z)({},"".concat(k,"-rtl"),z==="rtl"),m);return t.createElement(o,(0,d.Z)({className:be,ref:W},B),$)}),Ke=vt;function He(e){var n=(0,w.Z)(e);return n==="string"||n==="number"}function Ye(e){var n=0;return e.forEach(function(l){He(l)?n+=String(l).length:n+=1}),n}function qe(e,n){for(var l=0,a=[],o=0;o<e.length;o+=1){if(l===n)return a;var m=e[o],A=He(m),$=A?String(m).length:1,N=l+$;if(N>n){var B=n-l;return a.push(String(m).slice(0,B)),a}a.push(m),l=N}return e}var pt=0,Re=1,Ge=2,Te=3,Ce=4,et=function(n){var l=n.enabledMeasure,a=n.children,o=n.text,m=n.width,A=n.fontSize,$=n.rows,N=n.onEllipsis,B=t.useState([0,0,0]),C=(0,p.Z)(B,2),X=(0,p.Z)(C[0],3),U=X[0],z=X[1],W=X[2],k=C[1],be=t.useState(pt),ne=(0,p.Z)(be,2),D=ne[0],re=ne[1],Y=t.useState(0),ue=(0,p.Z)(Y,2),le=ue[0],I=ue[1],je=t.useRef(null),he=t.useRef(null),V=t.useMemo(function(){return(0,fe.Z)(o)},[o]),_=t.useMemo(function(){return Ye(V)},[V]),h=t.useMemo(function(){return!l||D!==Te?a(V,!1):a(qe(V,z),z<_)},[l,D,a,V,z,_]);(0,ve.Z)(function(){l&&m&&A&&_&&(re(Re),k([0,Math.ceil(_/2),_]))},[l,m,A,o,_,$]),(0,ve.Z)(function(){var H;D===Re&&I(((H=je.current)===null||H===void 0?void 0:H.offsetHeight)||0)},[D]),(0,ve.Z)(function(){var H,O;if(le){if(D===Re){var Z=((H=he.current)===null||H===void 0?void 0:H.offsetHeight)||0,L=$*le;Z<=L?(re(Ce),N(!1)):re(Ge)}else if(D===Ge)if(U!==W){var Ue=((O=he.current)===null||O===void 0?void 0:O.offsetHeight)||0,_e=$*le,De=U,Se=W;U===W-1?Se=U:Ue<=_e?De=z:Se=z;var it=Math.ceil((De+Se)/2);k([De,it,Se])}else re(Te),N(!0)}},[D,U,W,$,le]);var Be={width:m,whiteSpace:"normal",margin:0,padding:0},xe=function(O,Z,L){return t.createElement("span",{"aria-hidden":!0,ref:Z,style:(0,d.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(A/2)*2},L)},O)},Ne=function(O,Z){var L=qe(V,O);return xe(a(L,!0),Z,Be)};return t.createElement(t.Fragment,null,h,l&&D!==Te&&D!==Ce&&t.createElement(t.Fragment,null,xe("lg",je,{wordBreak:"keep-all",whiteSpace:"nowrap"}),D===Re?xe(a(V,!1),he,Be):Ne(z,he)))},tt=et,mt=function(n){var l=n.enabledEllipsis,a=n.isEllipsis,o=n.children,m=n.tooltipProps;return!(m==null?void 0:m.title)||!l?o:t.createElement(i.Z,(0,d.Z)({open:a?void 0:!1},m),o)},yt=mt,gt=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l};function at(e,n){var l=e.mark,a=e.code,o=e.underline,m=e.delete,A=e.strong,$=e.keyboard,N=e.italic,B=n;function C(X,U){!X||(B=t.createElement(U,{},B))}return C(A,"strong"),C(o,"u"),C(m,"del"),C(a,"code"),C(l,"mark"),C($,"kbd"),C(N,"i"),B}function ze(e,n,l){return e===!0||e===void 0?n:e||l&&n}function nt(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var R="...",Et=t.forwardRef(function(e,n){var l,a,o,m=e.prefixCls,A=e.className,$=e.style,N=e.type,B=e.disabled,C=e.children,X=e.ellipsis,U=e.editable,z=e.copyable,W=e.component,k=e.title,be=gt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),ne=t.useContext(Qe.E_),D=ne.getPrefixCls,re=ne.direction,Y=(0,ft.E)("Text")[0],ue=t.useRef(null),le=t.useRef(null),I=D("typography",m),je=(0,pe.Z)(be,["mark","code","delete","underline","strong","keyboard","italic"]),he=se(U),V=(0,p.Z)(he,2),_=V[0],h=V[1],Be=(0,j.Z)(!1,{value:h.editing}),xe=(0,p.Z)(Be,2),Ne=xe[0],H=xe[1],O=h.triggerType,Z=O===void 0?["icon"]:O,L=function(s){var v;s&&((v=h.onStart)===null||v===void 0||v.call(h)),H(s)};Ae(function(){var f;Ne||(f=le.current)===null||f===void 0||f.focus()},[Ne]);var Ue=function(s){s==null||s.preventDefault(),L(!0)},_e=function(s){var v;(v=h.onChange)===null||v===void 0||v.call(h,s),L(!1)},De=function(){var s;(s=h.onCancel)===null||s===void 0||s.call(h),L(!1)},Se=se(z),it=(0,p.Z)(Se,2),Zt=it[0],Le=it[1],Ft=t.useState(!1),Pt=(0,p.Z)(Ft,2),st=Pt[0],Rt=Pt[1],Tt=t.useRef(),Mt={};Le.format&&(Mt.format=Le.format);var wt=function(){window.clearTimeout(Tt.current)},Jt=function(s){var v;s==null||s.preventDefault(),s==null||s.stopPropagation(),te()(Le.text||String(C)||"",Mt),Rt(!0),wt(),Tt.current=window.setTimeout(function(){Rt(!1)},3e3),(v=Le.onCopy)===null||v===void 0||v.call(Le,s)};t.useEffect(function(){return wt},[]);var Qt=t.useState(!1),Nt=(0,p.Z)(Qt,2),Dt=Nt[0],Xt=Nt[1],Yt=t.useState(!1),Lt=(0,p.Z)(Yt,2),It=Lt[0],qt=Lt[1],ea=t.useState(!1),At=(0,p.Z)(ea,2),ta=At[0],aa=At[1],na=t.useState(!1),$t=(0,p.Z)(na,2),Kt=$t[0],ra=$t[1],la=t.useState(!1),zt=(0,p.Z)(la,2),jt=zt[0],oa=zt[1],ia=t.useState(!0),Bt=(0,p.Z)(ia,2),sa=Bt[0],ca=Bt[1],ua=se(X,{expandable:!1}),Ut=(0,p.Z)(ua,2),Oe=Ut[0],M=Ut[1],q=Oe&&!ta,Wt=M.rows,We=Wt===void 0?1:Wt,ct=t.useMemo(function(){return!q||M.suffix!==void 0||M.onEllipsis||M.expandable||_||Zt},[q,M,_,Zt]);(0,ve.Z)(function(){Oe&&!ct&&(Xt((0,Xe.G)("webkitLineClamp")),qt((0,Xe.G)("textOverflow")))},[ct,Oe]);var ee=t.useMemo(function(){return ct?!1:We===1?It:Dt},[ct,It,Dt]),kt=q&&(ee?jt:Kt),da=q&&We===1&&ee,ut=q&&We>1&&ee,fa=function(s){var v;aa(!0),(v=M.onExpand)===null||v===void 0||v.call(M,s)},va=t.useState(0),Ht=(0,p.Z)(va,2),pa=Ht[0],ma=Ht[1],ya=t.useState(0),Gt=(0,p.Z)(ya,2),ga=Gt[0],Ea=Gt[1],Ca=function(s,v){var K=s.offsetWidth,F;ma(K),Ea(parseInt((F=window.getComputedStyle)===null||F===void 0?void 0:F.call(window,v).fontSize,10)||0)},ba=function(s){var v;ra(s),Kt!==s&&((v=M.onEllipsis)===null||v===void 0||v.call(M,s))};t.useEffect(function(){var f=ue.current;if(Oe&&ee&&f){var s=ut?f.offsetHeight<f.scrollHeight:f.offsetWidth<f.scrollWidth;jt!==s&&oa(s)}},[Oe,ee,C,ut,sa]),t.useEffect(function(){var f=ue.current;if(!(typeof IntersectionObserver=="undefined"||!f||!ee||!q)){var s=new IntersectionObserver(function(){ca(!!f.offsetParent)});return s.observe(f),function(){s.disconnect()}}},[ee,q]);var Ze={};M.tooltip===!0?Ze={title:(l=h.text)!==null&&l!==void 0?l:C}:t.isValidElement(M.tooltip)?Ze={title:M.tooltip}:(0,w.Z)(M.tooltip)==="object"?Ze=(0,d.Z)({title:(a=h.text)!==null&&a!==void 0?a:C},M.tooltip):Ze={title:M.tooltip};var dt=t.useMemo(function(){var f=function(v){return["string","number"].includes((0,w.Z)(v))};if(!(!Oe||ee)){if(f(h.text))return h.text;if(f(C))return C;if(f(k))return k;if(f(Ze.title))return Ze.title}},[Oe,ee,k,Ze.title,kt]);if(Ne)return t.createElement(ke,{value:(o=h.text)!==null&&o!==void 0?o:typeof C=="string"?C:"",onSave:_e,onCancel:De,onEnd:h.onEnd,prefixCls:I,className:A,style:$,direction:re,component:W,maxLength:h.maxLength,autoSize:h.autoSize,enterIcon:h.enterIcon});var ha=function(){var s=M.expandable,v=M.symbol;if(!s)return null;var K;return v?K=v:K=Y.expand,t.createElement("a",{key:"expand",className:"".concat(I,"-expand"),onClick:fa,"aria-label":Y.expand},K)},xa=function(){if(!!_){var s=h.icon,v=h.tooltip,K=(0,fe.Z)(v)[0]||Y.edit,F=typeof K=="string"?K:"";return Z.includes("icon")?t.createElement(i.Z,{key:"edit",title:v===!1?"":K},t.createElement(Ie.Z,{ref:le,className:"".concat(I,"-edit"),onClick:Ue,"aria-label":F},s||t.createElement(T.Z,{role:"button"}))):null}},Sa=function(){if(!!Zt){var s=Le.tooltips,v=Le.icon,K=nt(s),F=nt(v),Fe=st?ze(K[1],Y.copied):ze(K[0],Y.copy),Pa=st?Y.copied:Y.copy,Ra=typeof Fe=="string"?Fe:Pa;return t.createElement(i.Z,{key:"copy",title:Fe},t.createElement(Ie.Z,{className:J()("".concat(I,"-copy"),st&&"".concat(I,"-copy-success")),onClick:Jt,"aria-label":Ra},st?ze(F[1],t.createElement(c.Z,null),!0):ze(F[0],t.createElement(g.Z,null),!0)))}},Oa=function(s){return[s&&ha(),xa(),Sa()]},Za=function(s){return[s&&t.createElement("span",{"aria-hidden":!0,key:"ellipsis"},R),M.suffix,Oa(s)]};return t.createElement(S.Z,{onResize:Ca,disabled:!q||ee},function(f){var s;return t.createElement(yt,{tooltipProps:Ze,enabledEllipsis:q,isEllipsis:kt},t.createElement(Ke,(0,d.Z)({className:J()((s={},(0,x.Z)(s,"".concat(I,"-").concat(N),N),(0,x.Z)(s,"".concat(I,"-disabled"),B),(0,x.Z)(s,"".concat(I,"-ellipsis"),Oe),(0,x.Z)(s,"".concat(I,"-single-line"),q&&We===1),(0,x.Z)(s,"".concat(I,"-ellipsis-single-line"),da),(0,x.Z)(s,"".concat(I,"-ellipsis-multiple-line"),ut),s),A),prefixCls:m,style:(0,d.Z)((0,d.Z)({},$),{WebkitLineClamp:ut?We:void 0}),component:W,ref:(0,Je.sQ)(f,ue,n),direction:re,onClick:Z.includes("text")?Ue:void 0,"aria-label":dt==null?void 0:dt.toString(),title:k},je),t.createElement(tt,{enabledMeasure:q&&!ee,text:C,rows:We,width:pa,fontSize:ga,onEllipsis:ba},function(v,K){var F=v;v.length&&K&&dt&&(F=t.createElement("span",{key:"show-content","aria-hidden":!0},F));var Fe=at(e,t.createElement(t.Fragment,null,F,Za(K)));return Fe})))})}),Me=Et,Ct=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},rt=t.forwardRef(function(e,n){var l=e.ellipsis,a=e.rel,o=Ct(e,["ellipsis","rel"]),m=(0,d.Z)((0,d.Z)({},o),{rel:a===void 0&&o.target==="_blank"?"noopener noreferrer":a});return delete m.navigate,t.createElement(Me,(0,d.Z)({},m,{ref:n,ellipsis:!!l,component:"a"}))}),lt=rt,bt=t.forwardRef(function(e,n){return t.createElement(Me,(0,d.Z)({ref:n},e,{component:"div"}))}),ht=bt,xt=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},St=function(n,l){var a=n.ellipsis,o=xt(n,["ellipsis"]),m=t.useMemo(function(){return a&&(0,w.Z)(a)==="object"?(0,pe.Z)(a,["expandable","rows"]):a},[a]);return t.createElement(Me,(0,d.Z)({ref:l},o,{ellipsis:m,component:"span"}))},ot=t.forwardRef(St),Ot=r(93355),we=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(l[a[o]]=e[a[o]]);return l},ae=(0,Ot.a)(1,2,3,4,5),ce=t.forwardRef(function(e,n){var l=e.level,a=l===void 0?1:l,o=we(e,["level"]),m;return ae.includes(a)?m="h".concat(a):m="h1",t.createElement(Me,(0,d.Z)({ref:n},o,{component:m}))}),Vt=ce,Ve=Ke;Ve.Text=ot,Ve.Link=lt,Ve.Title=Vt,Ve.Paragraph=ht;var _t=Ve},402:function(oe,P,r){"use strict";var d=r(38663),t=r.n(d),x=r(47828),w=r.n(x),p=r(47673),c=r(22385)},20640:function(oe,P,r){"use strict";var d=r(11742),t={"text/plain":"Text","text/html":"Url",default:"Text"},x="Copy to clipboard: #{key}, Enter";function w(c){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return c.replace(/#{\s*key\s*}/g,g)}function p(c,g){var T,G,J,de,te,S,fe=!1;g||(g={}),T=g.debug||!1;try{J=d(),de=document.createRange(),te=document.getSelection(),S=document.createElement("span"),S.textContent=c,S.ariaHidden="true",S.style.all="unset",S.style.position="fixed",S.style.top=0,S.style.clip="rect(0, 0, 0, 0)",S.style.whiteSpace="pre",S.style.webkitUserSelect="text",S.style.MozUserSelect="text",S.style.msUserSelect="text",S.style.userSelect="text",S.addEventListener("copy",function(j){if(j.stopPropagation(),g.format)if(j.preventDefault(),typeof j.clipboardData=="undefined"){T&&console.warn("unable to use e.clipboardData"),T&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var pe=t[g.format]||t.default;window.clipboardData.setData(pe,c)}else j.clipboardData.clearData(),j.clipboardData.setData(g.format,c);g.onCopy&&(j.preventDefault(),g.onCopy(j.clipboardData))}),document.body.appendChild(S),de.selectNodeContents(S),te.addRange(de);var ve=document.execCommand("copy");if(!ve)throw new Error("copy command was unsuccessful");fe=!0}catch(j){T&&console.error("unable to copy using execCommand: ",j),T&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",c),g.onCopy&&g.onCopy(window.clipboardData),fe=!0}catch(pe){T&&console.error("unable to copy using clipboardData: ",pe),T&&console.error("falling back to prompt"),G=w("message"in g?g.message:x),window.prompt(G,c)}}finally{te&&(typeof te.removeRange=="function"?te.removeRange(de):te.removeAllRanges()),S&&document.body.removeChild(S),J()}return fe}oe.exports=p},79370:function(oe,P,r){"use strict";r.d(P,{G:function(){return w}});var d=r(98924),t=function(c){if((0,d.Z)()&&window.document.documentElement){var g=Array.isArray(c)?c:[c],T=window.document.documentElement;return g.some(function(G){return G in T.style})}return!1},x=function(c,g){if(!t(c))return!1;var T=document.createElement("div"),G=T.style[c];return T.style[c]=g,T.style[c]!==G};function w(p,c){return!Array.isArray(p)&&c!==void 0?x(p,c):t(p)}},11742:function(oe){oe.exports=function(){var P=document.getSelection();if(!P.rangeCount)return function(){};for(var r=document.activeElement,d=[],t=0;t<P.rangeCount;t++)d.push(P.getRangeAt(t));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return P.removeAllRanges(),function(){P.type==="Caret"&&P.removeAllRanges(),P.rangeCount||d.forEach(function(x){P.addRange(x)}),r&&r.focus()}}}}]);
