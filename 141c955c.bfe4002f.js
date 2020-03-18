(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(179)),i={id:"sign_typed_data_v3",title:"Sign Typed Data v3",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Sign_Typed_Data_v3.md"},c={id:"portal/API_Reference/Signing_Data/sign_typed_data_v3",title:"Sign Typed Data v3",description:"The method `signTypedData_v3` currently represents the latest version of the",source:"@site/docs/en/portal/API_Reference/Signing_Data/Sign_Typed_Data_v3.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v3",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/Sign_Typed_Data_v3.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584529345,sidebar:"docs",previous:{title:"Sign Typed Data v1",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v1"},next:{title:"Sign Typed Data v4",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v4"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The method ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData_v3")," currently represents the latest version of the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://eips.ethereum.org/EIPS/eip-712"}),"EIP 712 spec"),", making it the most secure\nmethod for signing cheap-to-verify data on-chain that we have yet. "),Object(o.b)("p",null,"This does not mean it is perfect, and does not mean we will not eventually have\na ",Object(o.b)("inlineCode",{parentName:"p"},"v4"),", but we do intend to protect this namespace and keep it compatible going\nforwards. "),Object(o.b)("p",null,"We have a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"}),"great introductory blog post to this method\nhere"),". "),Object(o.b)("p",null,"Hopefully soon we will also have good examples for parsing method input into\nstructs for verification on-chain (great contribution opportunity!) "))}s.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);