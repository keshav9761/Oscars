import{N as qe,j as K,Q as Be,_ as R,U as Qe,V as Ze,d as l,e as U,W as Je,w as et,v as ge,X as tt,Y as ot,Z as $e,t as nt,$ as rt,K as Z,a0 as st,g as Oe,a as ke,s as Q,a1 as it,b as at,u as je,x as Le,a2 as J,f as me,z as lt,h as ze,y as ct,l as ut,a3 as ft}from"./index-BeBUro9B.js";function pt({styles:e,themeId:t,defaultTheme:o={}}){const v=qe(o),b=typeof e=="function"?e(t&&v[t]||v):e;return K.jsx(Be,{styles:b})}var i={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),re=Symbol.for("react.context"),dt=Symbol.for("react.server_context"),se=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),mt=Symbol.for("react.offscreen"),He;He=Symbol.for("react.module.reference");function D(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ye:switch(e=e.type,e){case ee:case oe:case te:case ie:case ae:return e;default:switch(e=e&&e.$$typeof,e){case dt:case re:case se:case ce:case le:case ne:return e;default:return t}}case Pe:return t}}}i.ContextConsumer=re;i.ContextProvider=ne;i.Element=ye;i.ForwardRef=se;i.Fragment=ee;i.Lazy=ce;i.Memo=le;i.Portal=Pe;i.Profiler=oe;i.StrictMode=te;i.Suspense=ie;i.SuspenseList=ae;i.isAsyncMode=function(){return!1};i.isConcurrentMode=function(){return!1};i.isContextConsumer=function(e){return D(e)===re};i.isContextProvider=function(e){return D(e)===ne};i.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ye};i.isForwardRef=function(e){return D(e)===se};i.isFragment=function(e){return D(e)===ee};i.isLazy=function(e){return D(e)===ce};i.isMemo=function(e){return D(e)===le};i.isPortal=function(e){return D(e)===Pe};i.isProfiler=function(e){return D(e)===oe};i.isStrictMode=function(e){return D(e)===te};i.isSuspense=function(e){return D(e)===ie};i.isSuspenseList=function(e){return D(e)===ae};i.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ee||e===oe||e===te||e===ie||e===ae||e===mt||typeof e=="object"&&e!==null&&(e.$$typeof===ce||e.$$typeof===le||e.$$typeof===ne||e.$$typeof===re||e.$$typeof===se||e.$$typeof===He||e.getModuleId!==void 0)};i.typeOf=D;function kt(e){return K.jsx(pt,R({},e,{defaultTheme:Qe,themeId:Ze}))}const ht=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function he(e){return`scale(${e}, ${e**2})`}const gt={entering:{opacity:1,transform:he(1)},entered:{opacity:1,transform:"none"}},fe=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ae=l.forwardRef(function(t,o){const{addEndListener:v,appear:b=!0,children:E,easing:d,in:m,onEnter:f,onEntered:x,onEntering:F,onExit:S,onExited:W,onExiting:w,style:H,timeout:M="auto",TransitionComponent:h=tt}=t,a=U(t,ht),A=Je(),n=l.useRef(),s=et(),u=l.useRef(null),g=ge(u,E.ref,o),r=c=>C=>{if(c){const $=u.current;C===void 0?c($):c($,C)}},_=r(F),k=r((c,C)=>{ot(c);const{duration:$,delay:y,easing:P}=$e({style:H,timeout:M,easing:d},{mode:"enter"});let G;M==="auto"?(G=s.transitions.getAutoHeightDuration(c.clientHeight),n.current=G):G=$,c.style.transition=[s.transitions.create("opacity",{duration:G,delay:y}),s.transitions.create("transform",{duration:fe?G:G*.666,delay:y,easing:P})].join(","),f&&f(c,C)}),j=r(x),q=r(w),I=r(c=>{const{duration:C,delay:$,easing:y}=$e({style:H,timeout:M,easing:d},{mode:"exit"});let P;M==="auto"?(P=s.transitions.getAutoHeightDuration(c.clientHeight),n.current=P):P=C,c.style.transition=[s.transitions.create("opacity",{duration:P,delay:$}),s.transitions.create("transform",{duration:fe?P:P*.666,delay:fe?$:$||P*.333,easing:y})].join(","),c.style.opacity=0,c.style.transform=he(.75),S&&S(c)}),z=r(W),V=c=>{M==="auto"&&A.start(n.current||0,c),v&&v(u.current,c)};return K.jsx(h,R({appear:b,in:m,nodeRef:u,onEnter:k,onEntered:j,onEntering:_,onExit:I,onExited:z,onExiting:q,addEndListener:V,timeout:M==="auto"?null:M},a,{children:(c,C)=>l.cloneElement(E,R({style:R({opacity:0,transform:he(.75),visibility:c==="exited"&&!m?"hidden":void 0},gt[c],H,E.props.style),ref:g},C))}))});Ae.muiSupportAuto=!0;const yt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function pe(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function De(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Ne(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function B(e,t,o,v,b,E){let d=!1,m=b(e,t,t?o:!1);for(;m;){if(m===e.firstChild){if(d)return!1;d=!0}const f=v?!1:m.disabled||m.getAttribute("aria-disabled")==="true";if(!m.hasAttribute("tabindex")||!Ne(m,E)||f)m=b(e,m,o);else return m.focus(),!0}return!1}const Pt=l.forwardRef(function(t,o){const{actions:v,autoFocus:b=!1,autoFocusItem:E=!1,children:d,className:m,disabledItemsFocusable:f=!1,disableListWrap:x=!1,onKeyDown:F,variant:S="selectedMenu"}=t,W=U(t,yt),w=l.useRef(null),H=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});nt(()=>{b&&w.current.focus()},[b]),l.useImperativeHandle(v,()=>({adjustStyleForScrollbar:(n,{direction:s})=>{const u=!w.current.style.width;if(n.clientHeight<w.current.clientHeight&&u){const g=`${rt(Z(n))}px`;w.current.style[s==="rtl"?"paddingLeft":"paddingRight"]=g,w.current.style.width=`calc(100% + ${g})`}return w.current}}),[]);const M=n=>{const s=w.current,u=n.key,g=Z(s).activeElement;if(u==="ArrowDown")n.preventDefault(),B(s,g,x,f,pe);else if(u==="ArrowUp")n.preventDefault(),B(s,g,x,f,De);else if(u==="Home")n.preventDefault(),B(s,null,x,f,pe);else if(u==="End")n.preventDefault(),B(s,null,x,f,De);else if(u.length===1){const r=H.current,_=u.toLowerCase(),k=performance.now();r.keys.length>0&&(k-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&_!==r.keys[0]&&(r.repeating=!1)),r.lastTime=k,r.keys.push(_);const j=g&&!r.repeating&&Ne(g,r);r.previousKeyMatched&&(j||B(s,g,!1,f,pe,r))?n.preventDefault():r.previousKeyMatched=!1}F&&F(n)},h=ge(w,o);let a=-1;l.Children.forEach(d,(n,s)=>{if(!l.isValidElement(n)){a===s&&(a+=1,a>=d.length&&(a=-1));return}n.props.disabled||(S==="selectedMenu"&&n.props.selected||a===-1)&&(a=s),a===s&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(a+=1,a>=d.length&&(a=-1))});const A=l.Children.map(d,(n,s)=>{if(s===a){const u={};return E&&(u.autoFocus=!0),n.props.tabIndex===void 0&&S==="selectedMenu"&&(u.tabIndex=0),l.cloneElement(n,u)}return n});return K.jsx(st,R({role:"menu",ref:h,className:m,onKeyDown:M,tabIndex:b?0:-1},W,{children:A}))});function vt(e){return Oe("MuiPopover",e)}ke("MuiPopover",["root","paper"]);const bt=["onEntering"],xt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Et=["slotProps"];function Fe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function _e(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Ie(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function de(e){return typeof e=="function"?e():e}const St=e=>{const{classes:t}=e;return ze({root:["root"],paper:["paper"]},vt,t)},wt=Q(it,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ke=Q(at,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Mt=l.forwardRef(function(t,o){var v,b,E;const d=je({props:t,name:"MuiPopover"}),{action:m,anchorEl:f,anchorOrigin:x={vertical:"top",horizontal:"left"},anchorPosition:F,anchorReference:S="anchorEl",children:W,className:w,container:H,elevation:M=8,marginThreshold:h=16,open:a,PaperProps:A={},slots:n,slotProps:s,transformOrigin:u={vertical:"top",horizontal:"left"},TransitionComponent:g=Ae,transitionDuration:r="auto",TransitionProps:{onEntering:_}={},disableScrollLock:k=!1}=d,j=U(d.TransitionProps,bt),q=U(d,xt),I=(v=s==null?void 0:s.paper)!=null?v:A,z=l.useRef(),V=ge(z,I.ref),c=R({},d,{anchorOrigin:x,anchorReference:S,elevation:M,marginThreshold:h,externalPaperSlotProps:I,transformOrigin:u,TransitionComponent:g,transitionDuration:r,TransitionProps:j}),C=St(c),$=l.useCallback(()=>{if(S==="anchorPosition")return F;const p=de(f),L=(p&&p.nodeType===1?p:Z(z.current).body).getBoundingClientRect();return{top:L.top+Fe(L,x.vertical),left:L.left+_e(L,x.horizontal)}},[f,x.horizontal,x.vertical,F,S]),y=l.useCallback(p=>({vertical:Fe(p,u.vertical),horizontal:_e(p,u.horizontal)}),[u.horizontal,u.vertical]),P=l.useCallback(p=>{const T={width:p.offsetWidth,height:p.offsetHeight},L=y(T);if(S==="none")return{top:null,left:null,transformOrigin:Ie(L)};const Se=$();let X=Se.top-L.vertical,Y=Se.left-L.horizontal;const we=X+T.height,Me=Y+T.width,Te=Le(de(f)),Re=Te.innerHeight-h,Ce=Te.innerWidth-h;if(h!==null&&X<h){const O=X-h;X-=O,L.vertical+=O}else if(h!==null&&we>Re){const O=we-Re;X-=O,L.vertical+=O}if(h!==null&&Y<h){const O=Y-h;Y-=O,L.horizontal+=O}else if(Me>Ce){const O=Me-Ce;Y-=O,L.horizontal+=O}return{top:`${Math.round(X)}px`,left:`${Math.round(Y)}px`,transformOrigin:Ie(L)}},[f,S,$,y,h]),[G,ve]=l.useState(a),N=l.useCallback(()=>{const p=z.current;if(!p)return;const T=P(p);T.top!==null&&(p.style.top=T.top),T.left!==null&&(p.style.left=T.left),p.style.transformOrigin=T.transformOrigin,ve(!0)},[P]);l.useEffect(()=>(k&&window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)),[f,k,N]);const We=(p,T)=>{_&&_(p,T),N()},Ge=()=>{ve(!1)};l.useEffect(()=>{a&&N()}),l.useImperativeHandle(m,()=>a?{updatePosition:()=>{N()}}:null,[a,N]),l.useEffect(()=>{if(!a)return;const p=ct(()=>{N()}),T=Le(f);return T.addEventListener("resize",p),()=>{p.clear(),T.removeEventListener("resize",p)}},[f,a,N]);let be=r;r==="auto"&&!g.muiSupportAuto&&(be=void 0);const Ue=H||(f?Z(de(f)).body:void 0),ue=(b=n==null?void 0:n.root)!=null?b:wt,xe=(E=n==null?void 0:n.paper)!=null?E:Ke,Ve=J({elementType:xe,externalSlotProps:R({},I,{style:G?I.style:R({},I.style,{opacity:0})}),additionalProps:{elevation:M,ref:V},ownerState:c,className:me(C.paper,I==null?void 0:I.className)}),Ee=J({elementType:ue,externalSlotProps:(s==null?void 0:s.root)||{},externalForwardedProps:q,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Ue,open:a},ownerState:c,className:me(C.root,w)}),{slotProps:Xe}=Ee,Ye=U(Ee,Et);return K.jsx(ue,R({},Ye,!lt(ue)&&{slotProps:Xe,disableScrollLock:k},{children:K.jsx(g,R({appear:!0,in:a,onEntering:We,onExited:Ge,timeout:be},j,{children:K.jsx(xe,R({},Ve,{children:W}))}))}))});function Tt(e){return Oe("MuiMenu",e)}ke("MuiMenu",["root","paper","list"]);const Rt=["onEntering"],Ct=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],$t={vertical:"top",horizontal:"right"},Lt={vertical:"top",horizontal:"left"},Dt=e=>{const{classes:t}=e;return ze({root:["root"],paper:["paper"],list:["list"]},Tt,t)},Ft=Q(Mt,{shouldForwardProp:e=>ut(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),_t=Q(Ke,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),It=Q(Pt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),jt=l.forwardRef(function(t,o){var v,b;const E=je({props:t,name:"MuiMenu"}),{autoFocus:d=!0,children:m,className:f,disableAutoFocusItem:x=!1,MenuListProps:F={},onClose:S,open:W,PaperProps:w={},PopoverClasses:H,transitionDuration:M="auto",TransitionProps:{onEntering:h}={},variant:a="selectedMenu",slots:A={},slotProps:n={}}=E,s=U(E.TransitionProps,Rt),u=U(E,Ct),g=ft(),r=R({},E,{autoFocus:d,disableAutoFocusItem:x,MenuListProps:F,onEntering:h,PaperProps:w,transitionDuration:M,TransitionProps:s,variant:a}),_=Dt(r),k=d&&!x&&W,j=l.useRef(null),q=(y,P)=>{j.current&&j.current.adjustStyleForScrollbar(y,{direction:g?"rtl":"ltr"}),h&&h(y,P)},I=y=>{y.key==="Tab"&&(y.preventDefault(),S&&S(y,"tabKeyDown"))};let z=-1;l.Children.map(m,(y,P)=>{l.isValidElement(y)&&(y.props.disabled||(a==="selectedMenu"&&y.props.selected||z===-1)&&(z=P))});const V=(v=A.paper)!=null?v:_t,c=(b=n.paper)!=null?b:w,C=J({elementType:A.root,externalSlotProps:n.root,ownerState:r,className:[_.root,f]}),$=J({elementType:V,externalSlotProps:c,ownerState:r,className:_.paper});return K.jsx(Ft,R({onClose:S,anchorOrigin:{vertical:"bottom",horizontal:g?"right":"left"},transformOrigin:g?$t:Lt,slots:{paper:V,root:A.root},slotProps:{root:C,paper:$},open:W,ref:o,transitionDuration:M,TransitionProps:R({onEntering:q},s),ownerState:r},u,{classes:H,children:K.jsx(It,R({onKeyDown:I,actions:j,autoFocus:d&&(z===-1||x),autoFocusItem:k,variant:a},F,{className:me(_.list,F.className),children:m}))}))});export{kt as G,jt as M};
