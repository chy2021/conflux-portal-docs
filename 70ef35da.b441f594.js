(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(179)),i={id:"sign_typed_data_v1",title:"Sign Typed Data v1",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Sign_Typed_Data_v1.md"},c={id:"portal/API_Reference/Signing_Data/sign_typed_data_v1",title:"Sign Typed Data v1",description:"This early version of the spec lacked some later security improvements, and",source:"@site/docs/en/portal/API_Reference/Signing_Data/Sign_Typed_Data_v1.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v1",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Sign_Typed_Data_v1.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584528184},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This early version of the spec lacked some later security improvements, and\nshould generally be neglected in favor of\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v3"}),"signTypedData_v3"),". "),Object(o.b)("p",null,"Also known as ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData"),", originally premiered October 2017 in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"}),"this blog\npost"),",\nthis method was the original state-channel-centric signing method. "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData")," familiy has a few major design considerations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cheap to verify on chain"),Object(o.b)("li",{parentName:"ul"},"Still somewhat human readable"),Object(o.b)("li",{parentName:"ul"},"Hard to phish signatures")),Object(o.b)("p",null,"If on-chain verifiability cost is a high priority for you, you might want to\nconsider it. "))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,c({ref:t},p,{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);