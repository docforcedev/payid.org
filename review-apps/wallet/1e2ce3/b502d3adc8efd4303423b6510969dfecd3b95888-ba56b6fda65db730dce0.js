(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/8Fb":function(e,t,n){var r=n("XKFU"),o=n("UExd")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6rFf":function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M0 0H20V2H0V0ZM0 6H20V8H0V6ZM0 12H20V14H0V12Z",fill:"currentColor"}))}o.defaultProps={width:"20",height:"14",viewBox:"0 0 20 14",fill:"none"},e.exports=o,o.default=o},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"9Dj+":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("SC9r"),i=n("pBiw"),c=function(){var e=Object(r.useState)("undefined"!=typeof window&&null!==window.localStorage.getItem("dismissedCookies")),t=e[0],n=e[1];return t?o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"fixed bottom-0 z-20 flex items-center justify-between w-full p-4 px-6 text-sm text-white lg:px-18 bg-blue-dark-900"},o.a.createElement("span",null,"We use cookies to understand how you use our site and to improve your experience. By continuing to use our site, you accept our use of cookies and"," ",o.a.createElement("a",{href:"/privacy.pdf",target:"_blank",rel:"noreferrer",className:"text-orange-500 focus:underline hover:underline"},"Privacy Policy"),"."),o.a.createElement(i.a,{onClick:function(){n(!0),"undefined"!=typeof window&&window.localStorage.setItem("dismissedCookies","true")},size:"xs",variant:"secondary",label:"Dismiss",className:"ml-8"}))},l=n("Wbzz"),s=n("mxmt"),u=n.n(s),f=function(){var e=[{text:"Vision",location:"/our-vision-to-simplify-payments"},{text:"Docs",location:Object(a.d)()},{text:"Use Cases",location:"/use-cases"},{text:"Companies",location:"/about-us"},{text:"Compliance",location:"/compliance-and-regulations"},{text:"FAQ",location:"/universal-payment-identifier-faqs"},{text:"Press Kit",location:"https://www.dropbox.com/sh/ghyjfo40zmhgl98/AABZTCuNjevhuk_6P3vg4jdXa?dl=0"},{text:"Contact Us",location:"/contact"}];return o.a.createElement("footer",{className:"flex justify-center px-6 text-white bg-blue-dark-900 lg:px-18"},o.a.createElement("div",{className:"container py-4"},o.a.createElement("div",{className:"flex flex-col xl:items-center xl:flex-row"},o.a.createElement("div",{className:"h-10-5"},o.a.createElement(l.Link,{to:"/",className:"inline-block"},o.a.createElement(u.a,{className:"h-10-5"}),o.a.createElement("span",{className:"sr-only"},"Home"))),o.a.createElement("div",{className:"grid grid-flow-col grid-rows-4 row-gap-8 col-gap-4 mt-12 md:mt-10 xl:mt-0 sm:grid-rows-2 lg:grid-rows-1 lg:col-gap-12 xl:col-gap-14 xl:ml-14"},e.map((function(e){return"Docs"!==e.text&&"Press Kit"!==e.text?o.a.createElement(l.Link,{key:e.text,to:e.location,className:"focus:text-orange-500 hover:text-orange-500"},e.text):o.a.createElement("a",{key:e.text,href:e.location,className:"focus:text-orange-500 hover:text-orange-500"},e.text)})))),o.a.createElement("div",{className:"flex flex-col mt-12 mb-12 text-xs font-semibold md:mb-4 md:mt-10 md:flex-row"},o.a.createElement("div",null,"This site is operated by Ripple on behalf of the PayID community"),o.a.createElement("a",{href:"/terms.pdf",target:"_blank",rel:"noreferrer",className:"block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"},"Terms"),o.a.createElement("a",{href:"/privacy.pdf",target:"_blank",rel:"noreferrer",className:"block mt-8 md:mt-0 md:ml-5 focus:text-orange-500 hover:text-orange-500 md:inline-block"},"Privacy"))))},p=(n("0mN4"),n("TSYQ")),d=n.n(p),m=n("6rFf"),y=n.n(m),h=function(){var e=Object(r.useState)({x:"undefined"!=typeof window?window.scrollX:0,y:"undefined"!=typeof window?window.scrollY:0,direction:void 0}),t=e[0],n=e[1],o=function(e){var t,n;return"undefined"==typeof window||null!==(t=e.y===window.scrollY)&&void 0!==t&&t?e.direction:null!==(n=e.y>window.scrollY)&&void 0!==n&&n?"up":"down"},a=function(){"undefined"!=typeof window&&n((function(e){var t,n;return{x:null!==(t=window.scrollX)&&void 0!==t?t:0,y:null!==(n=window.scrollY)&&void 0!==n?n:0,direction:o(e)}}))};return Object(r.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),t},g=function(e){var t=[{text:"Vision",location:"/our-vision-to-simplify-payments"},{text:"Docs",location:Object(a.d)()},{text:"Use Cases",location:"/use-cases"},{text:"Wallets",location:"/wallets-and-exchanges"},{text:"Companies",location:"/about-us"},{text:"Compliance",location:"/compliance-and-regulations"},{text:"FAQ",location:"/universal-payment-identifier-faqs"},{text:"Blog",location:"https://blog.payid.org/"},{text:"Contact Us",location:"/contact"}],n=Object(r.useState)(!1),c=n[0],s=n[1],f=h(),p=f.y,m=f.direction,g=function(){return!("undefined"!=typeof window&&!e.fixed&&!c)||!(!m||"up"!==m||!(window.outerHeight>=1024&&p>=48||window.outerHeight<1024&&p>0))},b=Object(r.useCallback)((function(e){27===e.keyCode&&s(!1)}),[]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",b,!1),function(){document.removeEventListener("keydown",b,!1)}}),[]),o.a.createElement("nav",{className:d()("top-0 w-full text-white",{"fixed bg-blue-dark-900 z-20":g(),"absolute bg-transparent":!g()})},o.a.createElement("div",{className:d()("flex w-full justify-center px-6 lg:px-12",{"lg:mt-12":!g()})},o.a.createElement("div",{className:"container py-4"},o.a.createElement("div",{className:"flex items-center justify-between"},o.a.createElement(l.Link,{to:"/"},o.a.createElement(u.a,{className:"h-10-5",role:"img","aria-label":"PayID: Unifying payments through a universal payment identifier to simplify sending and receiving payments"}),o.a.createElement("span",{className:"sr-only"},"Home")),o.a.createElement("div",{className:"hidden lg:block"},t.map((function(e){return"Docs"!==e.text?o.a.createElement(l.Link,{key:e.text,to:e.location,className:"inline-block mr-4 xl:mr-12 focus:text-orange-500 hover:text-orange-500 last:mr-0",activeClassName:"border-b-2 border-orange-500",partiallyActive:!0},e.text):o.a.createElement("a",{key:e.text,href:e.location,className:"inline-block mr-4 xl:mr-12 focus:text-orange-500 hover:text-orange-500 last:mr-0"},e.text)})),o.a.createElement(i.a,{to:Object(a.b)()+"/sandbox",label:"Sign In",className:"inline-block"})),o.a.createElement("button",{"aria-haspopup":!0,"aria-expanded":c,"aria-label":"Navigation Menu",onClick:function(){return s(!c)},className:d()("cursor-pointer lg:hidden hover:text-orange-500 focus:text-orange-500",{"text-orange-500":c})},o.a.createElement(y.a,null))),c&&o.a.createElement("ul",{role:"menu","aria-label":"navigation",className:"pt-4 mb-6 lg:hidden"},t.map((function(e){return"Docs"!==e.text?o.a.createElement("li",{role:"none",key:e.text,className:"mb-6"},o.a.createElement(l.Link,{role:"menuitem",to:e.location,className:"focus:text-orange-500 hover:text-orange-500",activeClassName:"border-b-2 border-orange-500",partiallyActive:!0},e.text)):o.a.createElement("li",{role:"none",key:e.text,className:"mb-6"},o.a.createElement("a",{role:"menuitem",href:e.location,className:"focus:text-orange-500 hover:text-orange-500"},e.text))})),o.a.createElement(i.a,{role:"menuitem",to:Object(a.b)()+"/sandbox",label:"Sign In",className:"inline-block"})))))},b=n("cq81"),v=n("qhky"),w=function(e){var t=b.data.site,n=e.description||t.siteMetadata.description;return o.a.createElement(v.a,{htmlAttributes:{lang:e.lang},title:e.title,titleTemplate:"%s | "+t.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:image",content:Object(a.b)()+"/ogp.png"},{property:"og:title",content:e.title},{property:"og:description",content:n},{property:"og:type",content:"website"},{property:"og:url",content:e.url},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.siteMetadata.social.twitter},{name:"twitter:title",content:e.title},{name:"twitter:description",content:n}].concat(e.meta||[])})};t.a=function(e){return o.a.createElement("div",{className:"flex flex-col min-h-screen"},o.a.createElement(c,null),o.a.createElement(g,{fixed:e.fixedNav}),o.a.createElement("main",{className:"flex flex-col flex-grow"},o.a.createElement(w,{title:e.title,url:Object(a.b)()+"/"+e.path,description:e.description,lang:"en"}),e.children),o.a.createElement(f,null))}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),a=n("vhPU"),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),s=r.RegExp,u=s,f=s.prototype,p=/a/g,d=/a/g,m=new s(p)!==p;if(n("nh4g")&&(!m||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),a=void 0===t;return!n&&r&&e.constructor===s&&a?e:o(m?new u(r&&!a?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&a?l.call(e):t),n?this:f,s)};for(var y=function(e){e in s||a(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=i(u),g=0;h.length>g;)y(h[g++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},SC9r:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb");var r=function(){switch({}.GATSBY_RELEASE_ENV){case"dev":return"https://dev.docs.payid.org";case"stage":return"https://stage.docs.payid.org";case"prod":return"https://docs.payid.org";default:return"http://localhost:3000"}},o=function(){switch({}.GATSBY_RELEASE_ENV){case"dev":return"https://dev.payid.org";case"stage":return"https://stage.payid.org";case"prod":return"https://payid.org";default:return"http://localhost:8000"}},a=function(){switch({}.GATSBY_RELEASE_ENV){case"dev":return"https://dev.wallet.xpring.io/donation";case"stage":return"https://stage.xpring.io/portal/donation";case"prod":return"https://xpring.io/portal/donation";default:return"http://localhost:4000/donation"}},i=function(e){var t=[];return Object.entries(e).forEach((function(e){var n=e[0],r=e[1];"string"!=typeof r&&"boolean"!=typeof r&&"number"!=typeof r||t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))})),t.join("&")}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UExd:function(e,t,n){var r=n("nh4g"),o=n("DVgA"),a=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=a(t),l=o(c),s=l.length,u=0,f=[];s>u;)n=l[u++],r&&!i.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],n[s[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},cq81:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"PayID","description":"The Universial Payment Identifier. A better way for your users to send and receive payments.","social":{"twitter":"payid_org"}}}}}')},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},mxmt:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,[r.createElement("path",{d:"M45.5989 11.1926H54.1309C59.5546 11.1926 61.9969 14.2028 61.9969 18.3046C61.9969 22.4065 59.5546 25.4272 54.1309 25.4272H49.6904V32.1576H45.5989V11.1926ZM54.1943 21.6433C56.9115 21.6433 57.8419 20.2337 57.8419 18.3046C57.8419 16.3756 56.9115 15.0083 54.1943 15.0083H49.6904V21.6433H54.1943Z",fill:"currentColor",key:0}),r.createElement("path",{d:"M63.0544 24.3992C63.0544 19.3646 66.5751 15.8987 71.5865 15.8987C76.545 15.8987 79.9916 19.2586 79.9916 24.3568V32.1365H76.5133V29.031C75.5512 31.3734 73.4155 32.5605 70.931 32.5605C67.0932 32.5711 63.0544 29.8153 63.0544 24.3992ZM76.2067 24.2508C76.2067 21.4526 74.3459 19.4706 71.5548 19.4706C68.7636 19.4706 66.9028 21.4526 66.9028 24.2508C66.9028 27.0489 68.7848 29.031 71.5548 29.031C74.3248 29.031 76.2067 27.0277 76.2067 24.2508Z",fill:"currentColor",key:1}),r.createElement("path",{d:"M83.1743 33.8958H86.9804C87.6253 35.3691 88.8729 36.0368 90.7865 36.0368C93.3768 36.0368 94.8464 34.7967 94.8464 31.7124V29.7198C93.8843 31.4474 92.2244 32.3801 90.1522 32.3801C86.5046 32.3801 83.058 30.0059 83.058 24.3672V16.3225H86.8535V24.3672C86.8535 27.3774 88.45 28.8188 90.85 28.8188C93.1865 28.8188 94.8464 27.3138 94.8464 24.3672V16.3225H98.6525V31.617C98.6525 37.1285 95.1636 39.3438 90.7865 39.3438C87.1073 39.3332 84.0624 37.6267 83.1743 33.8958Z",fill:"currentColor",key:2}),r.createElement("path",{d:"M103.008 11.1926H107.11V32.1576H103.008V11.1926Z",fill:"currentColor",key:3}),r.createElement("path",{d:"M111.414 11.1926H118.835C126.152 11.1926 130 15.3899 130 21.6751C130 27.9604 126.162 32.1576 118.835 32.1576H111.414V11.1926ZM118.835 28.3738C123.667 28.3738 125.834 25.7452 125.834 21.6751C125.834 17.6051 123.667 15.0083 118.835 15.0083H115.516V28.3844L118.835 28.3738Z",fill:"currentColor",key:4}),r.createElement("path",{d:"M22.2181 33.0207C25.0237 32.6479 27.6221 31.3415 29.5948 29.312L41.08 17.5401C40.3489 17.4202 39.6087 17.3648 38.8679 17.3743C36.85 17.3865 34.865 17.8855 33.0812 18.8289C31.9564 19.4297 30.9312 20.2007 30.0419 21.1146L25.8058 25.4546C25.7808 25.4822 25.7532 25.5099 25.7256 25.5388C24.3942 26.904 22.5781 27.6892 20.6714 27.7239C18.7648 27.7586 16.9213 27.0401 15.5411 25.7242L19.9652 30.0405C20.8627 30.9141 21.6224 31.919 22.2181 33.0207Z",fill:"url(#logo-paint0_linear)",key:5}),r.createElement("path",{d:"M11.7676 29.591L23.5409 41.0762C23.9899 38.3169 23.5253 35.4865 22.2178 33.0156C21.6223 31.9149 20.8631 30.911 19.9663 30.0381L15.5421 25.7218C14.8478 25.061 14.2915 24.2689 13.9056 23.3915C13.5197 22.5141 13.3118 21.5689 13.2939 20.6105C13.2761 19.6521 13.4486 18.6998 13.8016 17.8086C14.1545 16.9174 14.6809 16.1052 15.3501 15.4189L11.0364 19.8418C10.1474 20.7557 9.12211 21.5263 7.99711 22.1262C8.36718 24.9713 9.69737 27.6047 11.7676 29.591Z",fill:"url(#logo-paint1_linear)",key:6}),r.createElement("path",{d:"M-9.91821e-05 23.4228C0.730669 23.5415 1.47037 23.5965 2.21067 23.5872C4.22853 23.574 6.21349 23.0746 7.99732 22.1313C9.12232 21.5314 10.1476 20.7608 11.0366 19.8469L15.3543 15.4214C16.0182 14.7396 16.81 14.1953 17.6844 13.8197C18.5587 13.444 19.4986 13.2444 20.4502 13.2322C21.4017 13.22 22.3464 13.3954 23.2302 13.7485C24.1139 14.1016 24.9194 14.6254 25.6006 15.2899L21.2356 11.0314C20.3046 10.1265 19.5221 9.08035 18.917 7.93164C16.0922 8.2957 13.474 9.60573 11.489 11.6483L-9.91821e-05 23.4228Z",fill:"url(#logo-paint2_linear)",key:7}),r.createElement("path",{d:"M25.8071 25.4573L30.0432 21.1173C30.9325 20.2034 31.9577 19.4324 33.0825 18.8316C32.7206 16.0442 31.4363 13.4581 29.4343 11.4852L17.6598 0C17.5403 0.730684 17.4853 1.47045 17.4954 2.21077C17.508 4.20485 17.9954 6.16726 18.917 7.93561C19.5222 9.08431 20.3047 10.1304 21.2357 11.0354L25.6006 15.2939C26.9621 16.6218 27.7469 18.4318 27.7855 20.3333C27.8241 22.2348 27.1135 24.0752 25.8071 25.4573Z",fill:"url(#logo-paint3_linear)",key:8}),r.createElement("defs",{key:9},[r.createElement("linearGradient",{id:"logo-paint0_linear",x1:"42.2341",y1:"12.4112",x2:"22.5505",y2:"25.781",gradientUnits:"userSpaceOnUse",key:0},[r.createElement("stop",{stopColor:"#C906F9",key:0}),r.createElement("stop",{offset:"0.448312",stopColor:"#A803FC",key:1}),r.createElement("stop",{offset:"0.862484",stopColor:"#8700FF",key:2})]),r.createElement("linearGradient",{id:"logo-paint1_linear",x1:"10.5569",y1:"20.2095",x2:"5.77082",y2:"38.2556",gradientUnits:"userSpaceOnUse",key:1},[r.createElement("stop",{stopColor:"#0044FF",key:0}),r.createElement("stop",{offset:"0.489583",stopColor:"#0087FF",key:1}),r.createElement("stop",{offset:"1",stopColor:"#00CAFF",key:2})]),r.createElement("linearGradient",{id:"logo-paint2_linear",x1:"-0.0447044",y1:"23.9803",x2:"9.75159",y2:"26.9571",gradientUnits:"userSpaceOnUse",key:2},[r.createElement("stop",{stopColor:"#B0FF33",key:0}),r.createElement("stop",{offset:"0.494792",stopColor:"#55DF20",key:1}),r.createElement("stop",{offset:"1",stopColor:"#0AC222",key:2})]),r.createElement("linearGradient",{id:"logo-paint3_linear",x1:"17.5422",y1:"25.3108",x2:"34.1105",y2:"21.3758",gradientUnits:"userSpaceOnUse",key:3},[r.createElement("stop",{stopColor:"#FF8100",key:0}),r.createElement("stop",{offset:"0.0001",stopColor:"#FF8100",key:1}),r.createElement("stop",{offset:"0.5",stopColor:"#FF5D00",key:2}),r.createElement("stop",{offset:"1",stopColor:"#FF3600",key:3})])])])}o.defaultProps={viewBox:"0 0 130 42",fill:"none"},e.exports=o,o.default=o},pBiw:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("TSYQ"),o=n.n(r),a=n("Wbzz"),i=n("q1tI"),c=n.n(i);t.a=function(e){var t=e.label,n=e.theme,r=void 0===n?"orange":n,i=e.size,l=void 0===i?"md":i,s=e.variant,u=void 0===s?"primary":s,f=(e.to,function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["label","theme","size","variant","to"])),p=[e.className,"inline-block font-bold focus:outline-none rounded whitespace-no-wrap text-center"];return e.disabled&&p.push("cursor-not-allowed"),"primary"===u?(p.push("text-white"),e.disabled?p.push("bg-gray-200"):p.push({"bg-gradient-r-orange hover:bg-gradient-r-orange-dark focus:bg-gradient-r-orange-dark":"orange"===r,"bg-gradient-r-purple hover:bg-gradient-r-purple-dark focus:bg-gradient-r-purple-dark":"purple"===r,"bg-gradient-r-green hover:bg-gradient-r-green-dark focus:bg-gradient-r-green-dark":"green"===r,"bg-gradient-r-blue hover:bg-gradient-r-blue-dark focus:bg-gradient-r-blue-dark":"blue"===r})):e.disabled?p.push("text-gray-200"):p.push({"text-orange-500 hover:bg-orange-50 focus:bg-orange-50":"orange"===r,"text-purple-500 hover:bg-purple-50 focus:bg-purple-50":"purple"===r,"text-green-500 hover:bg-green-50 focus:bg-green-50":"green"===r,"text-blue-500 hover:bg-blue-50 focus:bg-blue-50":"blue"===r}),"secondary"===u&&(p.push("border"),e.disabled?p.push("border-gray-200"):p.push({"border-orange-500":"orange"===r,"border-purple-500":"purple"===r,"border-green-500":"green"===r,"border-blue-500":"blue"===r})),"ghost"===u&&p.push("bg-white"),"lg"===l&&p.push("text-base px-8 py-4 leading-tightest h-12-5"),"md"===l&&p.push("text-sm px-6 py-3 leading-tighter h-10"),"sm"===l&&p.push("text-sm px-6 py-2 leading-tighter h-8"),"xs"===l&&p.push("text-xs px-4 py-1 leading-snug h-6"),e.to&&!e.disabled?c.a.createElement(a.Link,{to:e.to,role:f.role,className:o()(p)},t):c.a.createElement("button",Object.assign({},f,{className:o()(p)}),t)}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),y=n("MgzW"),h=n.n(y),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),C="cssText",E="href",T="http-equiv",k="innerHTML",O="itemprop",A="name",S="property",j="rel",N="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},F="defaultTitle",I="defer",M="encodeSpecialCharacters",H="onChangeClientState",V="titleTemplate",U=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),_=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=Q(e,w.TITLE),n=Q(e,V);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,F);return t||r||void 0},G=function(e){return Q(e,H)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==k&&c!==C&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),ce(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,a),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===k||n===C){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===C)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(b,o,r),link:pe(w.LINK,a,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:X([E,L],e),bodyAttributes:W(g,e),defer:Q(e,I),encode:Q(e,M),htmlAttributes:W(b,e),linkTags:J(w.LINK,[j,E],e),metaTags:J(w.META,[A,x,T,S,O],e),noscriptTags:J(w.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:J(w.SCRIPT,[N,k],e),styleTags:J(w.STYLE,[C],e),title:z(e),titleAttributes:W(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ye=(o=me,i=a=function(e){function t(){return R(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return B({},o,((t={})[r.type]=i,t.titleAttributes=B({},a),t));case w.BODY:return B({},o,{bodyAttributes:B({},a)});case w.HTML:return B({},o,{htmlAttributes:B({},a)})}return B({},o,((n={})[r.type]=B({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=b502d3adc8efd4303423b6510969dfecd3b95888-ba56b6fda65db730dce0.js.map