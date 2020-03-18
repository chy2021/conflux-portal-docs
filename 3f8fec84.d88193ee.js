(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{147:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),a=(t(0),t(179)),s={id:"quick_start",title:"Quick Start",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Quick_Start/Low_Level_CFX_Transfer.md"},c={id:"portal/Examples/quick_start",title:"Quick Start",description:"Do you prefer to just copy and paste some working code? Here is a simple but",source:"@site/docs/en/portal/Examples/Low_Level_CFX_Transfer.md",permalink:"/conflux-portal-docs/docs/portal/Examples/quick_start",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/Quick_Start/Low_Level_CFX_Transfer.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584529173},i=[],l={rightToc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Do you prefer to just copy and paste some working code? Here is a simple but\ncomplete working Conflux Portal tipping application. "),Object(a.b)("p",null,"Below the code snippet, we'll include some links to some related valuable\nresources. "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Let's imagine you want to receive an cfx tip\nconst yourAddress = '0x0c54FcCd2e384b4BB6f2E405Bf5Cbc15a017AaFb'\nconst value = '0xde0b6b3a7640000' // an ether has 18 decimals, here in hex.\nconst desiredNetwork = '1' // '1' is the Conflux main network ID.\n\n// Detect whether the current browser is conflux-compatible,\n// and handle the case where it isn't:\nif (typeof window.conflux === 'undefined') {\n  alert('Looks like you need a Dapp browser to get started.')\n  alert('Consider installing Conflux Portal!')\n\n} else {\n\n  // In the case the user has Conflux Portal installed, you can easily\n  // ask them to sign in and reveal their accounts:\n  conflux.enable()\n\n  // Remember to handle the case they reject the request:\n  .catch(function (reason) {\n    if (reason === 'User rejected provider access') {\n      // The user didn't want to sign in!\n    } else {\n      // This shouldn't happen, so you might want to log this...\n      alert('There was an issue signing you in.')\n    }\n  })\n\n  // In the case they approve the log-in request, you'll receive their accounts:\n  .then(function (accounts) {\n    // You also should verify the user is on the correct network:\n    if (conflux.networkVersion !== desiredNetwork) {\n      alert('This application requires the main network, please switch it in your Conflux Portal UI.')\n\n      // We plan to provide an API to make this request in the near future.\n      // https://github.com/MetaMask/metamask-extension/issues/3663\n    }\n\n    // Once you have a reference to user accounts,\n    // you can suggest transactions and signatures:\n    const account = accounts[0]\n    sendCFXFrom(account, function (err, transaction) {\n      if (err) {\n        return alert(`Sorry you weren't able to contribute!`)\n      }\n\n      alert('Thanks for your successful contribution!')\n    })\n\n  })\n}\n\nfunction sendCFXFrom (account, callback) {\n\n  // We're going to use the lowest-level API here, with simpler example links below\n  const method = 'cfx_sendTransaction'\n  const parameters = [{\n    from: account,\n    to: yourAddress,\n    value: value,\n  }]\n  const from = account\n\n  // Now putting it all together into an RPC request:\n  const payload = {\n    method: method,\n    params: parameters,\n    from: from,\n  }\n\n  // Methods that require user authorization like this one will prompt a user interaction.\n  // Other methods (like reading from the blockchain) may not.\n  conflux.sendAsync(payload, function (err, response) {\n    const rejected = 'User denied transaction signature.'\n    if (response.error && response.error.message.includes(rejected)) {\n      return alert(`We can't take your money without your permission.`)\n    }\n\n    if (err) {\n      return alert('There was an issue, please try again.')\n    }\n\n    if (response.result) {\n      // If there is a response.result, the call was successful.\n      // In the case of this method, it is a transaction hash.\n      const txHash = response.result\n      alert('Thank you for your generosity!')\n\n      // You can poll the blockchain to see when this transaction has been mined:\n      pollForCompletion(txHash, callback)\n    }\n  })\n}\n\nfunction pollForCompletion (txHash, callback) {\n  let calledBack = false\n\n  // Normal conflux blocks are approximately every 15 seconds.\n  // Here we'll poll every 2 seconds.\n  const checkInterval = setInterval(function () {\n\n    const notYet = 'response has no error or result'\n    conflux.sendAsync({\n      method: 'cfx_getTransactionByHash',\n      params: [ txHash ],\n    }, function (err, response) {\n      if (calledBack) return\n      if (err || response.error) {\n        if (err.message.includes(notYet)) {\n          return 'transaction is not yet mined'\n        }\n\n        callback(err || response.error)\n      }\n\n      // We have successfully verified the mined transaction.\n      // Mind you, we should do this server side, with our own blockchain connection.\n      // Client side we are trusting the user's connection to the blockchain.\n      const transaction = response.result\n      clearInterval(checkInterval)\n      calledBack = true\n      callback(null, transaction)\n    })\n  }, 2000)\n}\n")),Object(a.b)("p",null,"Now that was all very low level, but should show you how Conflux Portal works at\nits simplest, and lowest level! "),Object(a.b)("p",null,"Now you can read more about this ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/conflux-portal-docs/docs/portal/API_Reference/provider_api"}),"conflux\nAPI"),", or maybe get acquainted with a\nconvenience library so you don't have to interact with it directly:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"))))}u.isMDXComponent=!0},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?o.a.createElement(h,c({ref:n},l,{components:t})):o.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);