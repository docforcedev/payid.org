(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4VWn":function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l),o=a("djOb"),s=a.n(o),c=a("SC9r"),u=a("pBiw"),d=a("eMrp"),m=a("79Sd");t.a=function(e){var t=e.direction,a=void 0===t?"rtl":t,n=e.title,o=void 0===n?"Join the PayID Community":n,g=e.description,p=void 0===g?"Sign up to access the PayID newsletter and hear about hackathons and speaker events":g,b=e.orangeButton,v=void 0!==b&&b,f=Object(l.useState)(!1),h=f[0],y=f[1],x=Object(l.useState)("DEFAULT"),w=x[0],E=x[1],k=Object(l.useState)(),I=k[0],N=k[1],D=Object(l.useState)(),P=D[0],S=D[1],T=Object(l.useState)(),C=T[0],j=T[1],O=Object(l.useState)(!1),F=O[0],q=O[1],L=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,A=function(e){return!(!e||!L.test(e))};Object(l.useEffect)((function(){w&&"DEFAULT"!==w&&I&&I.length>0&&C&&A(C)?y(!0):y(!1)}),[w,I,C]);return i.a.createElement(m.a,{background:"orange",direction:a,wave:"blue",spacing:"lg",className:"flex items-center justify-center"},!F&&i.a.createElement("div",null,i.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},o),i.a.createElement("div",{className:"mt-8 text-xl text-center"},p),i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),h){var t={role:w,"first-name":I,"last-name":""!==P?P:void 0,email:C};"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",t),void 0!==window.gtag&&(window.gtag("event","conversion",{send_to:"AW-877332159/jdvuCLLdpdQBEL-NrKID"}),window.gtag("event","conversion",{send_to:"AW-616173950/7ehtCOKFvNYBEP6i6KUC"})));var a=Object(c.a)(t);fetch("https://go.ripple.com/l/105572/2020-06-15/cspx4n",{mode:"no-cors",method:"POST",body:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).catch((function(e){Sentry.captureException(e)})),fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+a,{mode:"no-cors"}).catch((function(){})),q(!0)}},className:"mt-16 md:mt-30"},i.a.createElement("div",{className:"relative px-6 mb-6 border-2 border-white rounded"},i.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return E(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return i.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),i.a.createElement(s.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),i.a.createElement("label",{htmlFor:"role",className:r()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none text-white left-4 bg-orange-500 px-2",{"-top-3":"DEFAULT"!==w,"top-4":"DEFAULT"===w})},"Role")),i.a.createElement("div",{className:"flex"},i.a.createElement(d.a,{theme:"orange",id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return N(e.currentTarget.value)}}),i.a.createElement(d.a,{theme:"orange",id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return S(e.currentTarget.value)}})),i.a.createElement(d.a,{theme:"orange",id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:A,invalidText:"Invalid email address",onChange:function(e){A(e.currentTarget.value)?j(e.currentTarget.value):j(void 0)}}),i.a.createElement(u.a,{disabled:!h,label:"Submit",variant:"secondary",className:"mt-8 bg-white sm:hidden"}),i.a.createElement(u.a,{disabled:!h,variant:"secondary",label:"Submit",size:"lg",className:"hidden mx-auto mt-16 sm:block bg-white "+(v?" text-orange-500":"")}))),F&&i.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},"Thank you for subscribing!"))}},"79Sd":function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l),o=a("Kk5M"),s=a.n(o),c=a("bahM"),u=a.n(c),d=function(e){var t=r()("bg-transparent",{"text-white":"white"===e.wave,"text-gray-50":"gray"===e.wave,"text-blue-dark-900":"blue"===e.wave,"text-orange-500":"orange"===e.wave,"text-blue-dark-800":"light-blue"===e.wave});return i.a.createElement("div",{className:r()("wave-vector",e.className)},"ltr"===e.direction&&i.a.createElement(s.a,{className:t}),"rtl"===e.direction&&i.a.createElement(u.a,{className:t}))};t.a=function(e){var t=e.wave,a=void 0===t?"white":t,n=e.background,l=void 0===n?"blue":n,o=e.direction,s=void 0===o?"ltr":o,c=e.spacing,u=void 0===c?"md":c,m="";"sm"===u?m="xl:-mt-20 lg:-mt-18 md:-mt-10 sm:-mt-8":"md"===u?m="xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10":"lg"===u&&(m="xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28");var g=r()(e.waveClassNames,"wave",{"bg-white text-blue-dark-900":"white"===l,"bg-gray-50 text-blue-dark-900":"gray"===l,"bg-blue-dark-900 text-white":"blue"===l,"bg-orange-500 text-white":"orange"===l,"bg-blue-dark-800 text-white":"light-blue"===l}),p=r()("flex justify-center",{"px-6 lg:px-18":!e["no-spacing"]}),b=r()("wave-content",{"lg:px-17":!e["no-gutter"]},{container:!e["no-spacing"]},{"w-full":e["no-spacing"]},e.className);return i.a.createElement("div",{className:g,style:e.style},i.a.createElement("div",{className:p},i.a.createElement("div",{className:b},e.children)),i.a.createElement(d,{wave:a,direction:s,className:m}))}},Kk5M:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M119.603 106.85C27.6811 82.8743 3.1337 32.6632 0 0V230H375C375 98.0089 247.198 128.693 151.462 113.105C143.158 111.753 128.221 109.098 119.603 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},XZtC:function(e,t,a){"use strict";a("tUrg");var n=a("q1tI"),r=a.n(n),l=a("SC9r"),i=a("79Sd");t.a=function(e){var t=[{bgStyle:{backgroundImage:"url(/assets/learn/developers.svg)"},title:"Getting Started for Developers",link:Object(l.d)()},{bgStyle:{backgroundImage:"url(/assets/learn/whitepaper.svg)"},title:"PayID Technical Whitepaper",link:"/whitepaper.pdf"},{bgStyle:{backgroundImage:"url(/assets/learn/api-reference.svg)"},title:"API Reference",link:"https://api.payid.org/?version=latest"},{bgStyle:{backgroundImage:"url(/assets/learn/standards.svg)"},title:"PayID Open Standards",link:"https://github.com/payid-org/rfcs"},{bgStyle:{backgroundImage:"url(/assets/learn/security.svg)"},title:"Security and Privacy",link:"https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt"},{bgStyle:{backgroundImage:"url(/assets/learn/travel-rule.svg)"},title:"Travel Rule and Compliance",link:"https://trisa.io/"},{bgStyle:{backgroundImage:"url(/assets/learn/checkout.svg)"},title:"PayID Test Wallet",link:"https://xpring.io/portal/wallet/xrp/testnet"},{bgStyle:{backgroundImage:"url(/assets/learn/xpring-sdk.svg)"},title:"Xpring SDK Integration",link:Object(l.d)()+"/xpring-sdk-payid"}];return r.a.createElement(i.a,{background:e.background,direction:e.direction,wave:"orange","no-gutter":!0},r.a.createElement("div",{className:"flex flex-col items-center sm:justify-center mb-14 md:mb-25"},r.a.createElement("h2",{className:"text-3xl font-bold sm:text-5xl sm:text-center "},"Want to Learn More?"),r.a.createElement("p",{className:"max-w-xl mt-6 text-xl sm:mt-8 sm:text-center"},"Discover everything you need to know about the free, open source PayID protocol")),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"},t.map((function(e){return r.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",key:e.title,className:"transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable",style:e.bgStyle},r.a.createElement("h3",{className:"font-bold text-white learnable-title mx-13"},e.title))})))))}},bahM:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M255.397 106.85C347.319 82.8743 371.866 32.6632 375 0V230H0C0 98.0089 127.802 128.693 223.538 113.105C231.842 111.753 246.779 109.098 255.397 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},djOb:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M1 1L4 4L7 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}r.defaultProps={viewBox:"0 0 8 5",fill:"none"},e.exports=r,r.default=r},eMrp:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("f3/d"),a("91GP");var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),i=a.n(l);t.a=function(e){e.label,e.invalidText,e.requiredText,e.validate;var t,a=e.theme,n=void 0===a?"blue":a,o=e.className,s=e.onChange,c=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["label","invalidText","requiredText","validate","theme","className","onChange"]),u=Object(l.useRef)(null),d=Object(l.useState)(!1),m=d[0],g=d[1],p=Object(l.useState)(),b=p[0],v=p[1],f=function(){u.current&&(u.current.value.length>0||document.activeElement&&document.activeElement.id===u.current.id)?g(!0):g(!1)},h=!(void 0===b||!b);return i.a.createElement("div",{className:r()(o,"relative w-full mb-6")},i.a.createElement("input",Object.assign({onChange:function(t){return s&&s(t),f(),e.required&&0===t.currentTarget.value.length?e.requiredText?void v(e.requiredText):void v(!0):e.validate&&!e.validate(t.currentTarget.value)?e.invalidText?void v(e.invalidText):void v(!0):void v(!1)},onFocus:f,onBlur:f,ref:u},c,{className:r()("w-full px-6 py-4 placeholder-white bg-transparent rounded border-2 appearance-none focus:outline-none",{"border-green-600":m&&!h&&"blue"===n,"border-white":!m&&!h||"orange"===n,"border-orange-600":h&&"blue"===n})})),i.a.createElement("label",{htmlFor:e.id,className:r()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 px-2 rounded",{"top-4":!m&&!h,"-top-3":m||h,"text-green-600":m&&!h&&"blue"===n,"text-orange-600":h&&"blue"===n,"text-white":"orange"===n||!m&&!h,"bg-blue-dark-900":"blue"===n,"bg-orange-500":"orange"===n})},null!==(t=e.label)&&void 0!==t?t:e.name," "),"string"==typeof b&&i.a.createElement("div",{className:r()("flex pt-1 text-sm",{"text-orange-600":"blue"===n,"text-white":"orange"===n})},i.a.createElement("div",null,b)))}},mIpM:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.76766 0.306022C1.36328 -0.102007 0.707659 -0.102007 0.303283 0.306022C-0.101094 0.714051 -0.101094 1.3756 0.303282 1.78362L2.50026 4.00045L0.304215 6.21633C-0.100161 6.62436 -0.100161 7.28591 0.304216 7.69393C0.708592 8.10196 1.36422 8.10196 1.76859 7.69394L4.69735 4.73873C5.10172 4.3307 5.10172 3.66915 4.69735 3.26112C4.68804 3.25173 4.6786 3.24255 4.66903 3.23359L1.76766 0.306022Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 5 8"},e.exports=r,r.default=r},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},y6FU:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("4VWn"),i=a("XZtC"),o=a("9Dj+"),s=a("TSYQ"),c=a.n(s),u=a("Wbzz"),d=a("mIpM"),m=a.n(d),g=a("SC9r"),p=a("79Sd"),b=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],l=Object(n.useState)(),i=l[0],o=l[1],s=[{topic:"PayID Basics",contents:[{title:"What is PayID?",description:"PayID is an open universal payment identifier that makes it easier for people to send and receive money in any currency across any payment network."},{title:"Who uses PayID?",description:r.a.createElement(r.a.Fragment,null,"Any business that sends and receives money can use PayID to give each of their customers a simple and human-readable ID that works across any payment network and makes payments easier with greater network reach. PayID is an open standard, so anyone can build implementations and extensions on top of PayID.",r.a.createElement(u.Link,{to:"/about-us",className:"block mt-6 text-orange-500 focus:underline hover:underline"},"See companies that use PayID"))},{title:"How is PayID compliant with international payment regulations?",description:r.a.createElement(r.a.Fragment,null,"Rather than prescribing a single solution, PayID is flexible and composable by design, which empowers transaction participants to implement their own policies. PayID provides a simple extension that helps businesses satisfy Travel Rule record-keeping required in jurisdictions globally, including both current FinCEN rules and FATF guidance, via native integration with the TRISA protocol. PayID can also be used to improve other compliance solutions for both users and services.",r.a.createElement(u.Link,{to:"/compliance-and-regulations",className:"block mt-6 text-orange-500 focus:underline hover:underline"},"Learn more about PayID and TRISA for Travel Rule"))},{title:"How can I get started with PayID?",description:r.a.createElement(r.a.Fragment,null,"PayID is open source and easy to set up with just a few lines of code. You can explore"," ",r.a.createElement("a",{href:Object(g.d)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"the documentation")," ","and"," ",r.a.createElement("a",{href:"https://github.com/payid-org/payid",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"GitHub repository"),".")},{title:"Who developed this website?",description:"The content on this website content was developed by Ripple, an early adopter of PayID, in collaboration with the Open Payments Coalition."}]},{topic:"Development and Implementation",contents:[{title:"How do I implement PayID?",description:r.a.createElement(r.a.Fragment,null,"PayID is a free-to-use, fully open standard with an open source implementation. Any company can start using PayID by integrating a PayID server into their existing infrastructure using the reference implementation on GitHub. The"," ",r.a.createElement("a",{href:Object(g.d)()+"/xpring-sdk-payid",className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Xpring SDK")," ","is the easiest way to enable “send to PayID” on your app.")},{title:"What tech is PayID built on?",description:"PayID is a web-based protocol built on a simple HTTP API secured by the standard web security stack, including TLS."},{title:"How does PayID handle security?",description:"PayID leverages tried-and-true security technologies that secure all internet services, including e-commerce and digital banking services. Additionally, PayID messages include cryptographic certificates and signatures that ensure participants in PayID transactions do not need to trust any counterparty."},{title:"How do I deploy a PayID server?",description:"PayID is designed by devs for devs. You can deploy a PayID server with just a few commands with existing web infrastructure, and then integrate it into an application or account system in just a few lines of code."},{title:"Where can I learn more about building with PayID?",description:r.a.createElement(r.a.Fragment,null,"For other questions on PayID development and deployment, visit"," ",r.a.createElement("a",{href:Object(g.d)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"the docs page"),".")}]}];return r.a.createElement(p.a,{spacing:"sm",waveClassNames:"faq-bg"},r.a.createElement("div",{className:"max-w-3xl pt-16 lg:pt-70"},r.a.createElement("h1",{className:"text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter"},"Understanding and Using PayID")),r.a.createElement("div",{className:"flex mt-20 sm:mt-30"},r.a.createElement("div",{className:"hidden mr-8 sm:block sm:w-56 md:w-72 md:mr-32 lg:-ml-16"},r.a.createElement("div",{className:"sticky top-20"},s.map((function(e,n){return r.a.createElement("div",{className:"mb-6",key:n},r.a.createElement("button",{className:c()("text-xs font-semibold hover:text-orange-500 focus:text-orange-500 focus:outline-none align-middle text-left",{"text-orange-500":t===n,"text-gray-200":t!==n}),disabled:t===n,onClick:function(){a(n),o(void 0)}},e.topic,r.a.createElement(m.a,{className:c()("h-2 ml-4 duration-500 transform inline-block",{"rotate-90":t===n,"-rotate-90":t!==n})})),t===n&&r.a.createElement("div",{className:"block mt-2 ml-4"},e.contents.map((function(e,t){return r.a.createElement("a",{key:t,className:c()("block mb-2 text-xs font-semibold hover:text-orange-500 focus:text-orange-500 outline-none",{"text-orange-500":t===i,"text-gray-200":t!==i}),href:"#"+e.title,onClick:function(){return o(t)}},e.title)}))))})))),r.a.createElement("div",{className:"w-full md:max-w-md"},s.map((function(e,t){return r.a.createElement("div",{className:"mt-20 sm:mt-30 first:mt-0",key:t},r.a.createElement("h2",{className:"mb-10 text-3xl font-bold sm:text-4xl sm:mb-14"},e.topic),e.contents.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",{className:"mt-10 text-2xl font-bold sm:mt-12",id:e.title},e.title),r.a.createElement("p",{className:"mt-4"},e.description))})))})))))};t.default=function(){return r.a.createElement(o.a,{path:"universal-payment-identifier-faqs",title:"Understanding, Deploying, and Using PayID",description:"Get familiar with PayID through our development FAQs. You'll learn about who PayID is for, how to use it, and how to get started with your business today."},r.a.createElement(b,null),r.a.createElement(i.a,{background:"white"}),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-universal-payment-identifier-faqs-tsx-e2f30a2e204245f77d39.js.map