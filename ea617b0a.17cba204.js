(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(9),o=(t(0),t(179)),i={id:"personal_sign",title:"Personal Sign",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Personal_Sign.md"},c={id:"portal/API_Reference/Signing_Data/personal_sign",title:"Personal Sign",description:"We introduced the `personal_sign` method in March 2017 with [this blog",source:"@site/docs/en/portal/API_Reference/Signing_Data/Personal_Sign.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/personal_sign",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Personal_Sign.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584529173},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We introduced the ",Object(o.b)("inlineCode",{parentName:"p"},"personal_sign")," method in March 2017 with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/metamask/the-new-secure-way-to-sign-data-in-your-browser-6af9dd2a1527"}),"this blog\npost"),". "),Object(o.b)("p",null,"It was designed to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/go-ethereum/pull/2940"}),"alleviate security\nconcerns")," from\n",Object(o.b)("inlineCode",{parentName:"p"},"[cfx_sign](/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/cfx_sign)"),", by only allowing the signing of a hash prefixed by\na pre-defined string (",Object(o.b)("inlineCode",{parentName:"p"},'"\\x19Conflux Signed Message:\\n"'),").  "),Object(o.b)("p",null,"The method signature is ",Object(o.b)("inlineCode",{parentName:"p"},"personal_sign(hash, address)"),"."),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MetaMask/eth-sig-util/blob/master/index.js#L193-L199"}),"read our implementation\nhere"),",\nor read ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/danfinlay/js-eth-personal-sign-examples/blob/master/index.js#L103-L161"}),"a working client-side\nexample"),"\nhere, or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.ricmoo.com/verifying-messages-in-solidity-50a94f82b2ca"}),"read a guide to verifying these signatures in\nsolidity"),". "))}p.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(f,c({ref:n},l,{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);