(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},512:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(414)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,u=n(7273).Z,a=o(n(7294)),i=n(6273),l=n(2725),c=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,b=e.children,m=e.prefetch,g=e.passHref,_=e.replace,x=e.shallow,C=e.scroll,T=e.locale,w=e.onClick,L=e.onMouseEnter,j=e.onTouchStart,M=e.legacyBehavior,E=void 0===M?!0!==Boolean(!1):M,O=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!E||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var R=!1!==m,k=a.default.useContext(c.RouterContext),P=a.default.useContext(f.AppRouterContext);P&&(k=P);var N,A=a.default.useMemo((function(){var e=r(i.resolveHref(k,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?i.resolveHref(k,y):n||t}}),[k,o,y]),B=A.href,I=A.as,S=a.default.useRef(B),U=a.default.useRef(I);E&&(N=a.default.Children.only(n));var D=E?N&&"object"===typeof N&&N.ref:t,H=r(s.useIntersection({rootMargin:"200px"}),3),K=H[0],Z=H[1],G=H[2],X=a.default.useCallback((function(e){U.current===I&&S.current===B||(G(),U.current=I,S.current=B),K(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[I,D,B,G,K]);a.default.useEffect((function(){var e=Z&&R&&i.isLocalURL(B),t="undefined"!==typeof T?T:k&&k.locale,n=v[B+"%"+I+(t?"%"+t:"")];e&&!n&&h(k,B,I,{locale:t})}),[I,B,Z,T,R,k]);var q={ref:X,onClick:function(e){E||"function"!==typeof w||w(e),E&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:l}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?a.default.startTransition(d):d()}}(e,k,B,I,_,x,C,T,Boolean(P),R)},onMouseEnter:function(e){E||"function"!==typeof L||L(e),E&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!R&&P||i.isLocalURL(B)&&h(k,B,I,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof j||j(e),E&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!R&&P||i.isLocalURL(B)&&h(k,B,I,{priority:!0})}};if(!E||g||"a"===N.type&&!("href"in N.props)){var z="undefined"!==typeof T?T:k&&k.locale,J=k&&k.isLocaleDomain&&d.getDomainLocale(I,z,k.locales,k.domainLocales);q.href=J||p.addBasePath(l.addLocale(I,z,k&&k.defaultLocale))}return E?a.default.cloneElement(N,q):a.default.createElement("a",Object.assign({},O,q),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],h=p[1];o.useEffect((function(){if(a){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},l.push(n),i.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(r)}}}),[v,c,n,t,s]);var y=o.useCallback((function(){d(!1)}),[]);return[h,s,y]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver,i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var i=r.default.createContext(null);t.TemplateContext=i},414:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(1664),u=n.n(o),a=n(3454);function i(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"About Jacky Baltes"}),(0,r.jsxs)("div",{children:["Back to"," ",(0,r.jsx)(u(),{href:"/",as:a.env.BACKEND_URL+"/",children:(0,r.jsx)("a",{children:"Home"})})]})]})}},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var i,l=[],c=!1,f=-1;function s(){c&&i&&(c=!1,i.length?l=i.concat(l):f=-1,l.length&&d())}function d(){if(!c){var e=a(s);c=!0;for(var t=l.length;t;){for(i=l,l=[];++f<t;)i&&i[f].run();f=-1,t=l.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}},a=!0;try{t[e](u,u.exports,r),a=!1}finally{a&&delete n[e]}return u.exports}r.ab="//";var o=r(229);e.exports=o}()},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=512,e(e.s=t);var t}));var t=e.O();_N_E=t}]);