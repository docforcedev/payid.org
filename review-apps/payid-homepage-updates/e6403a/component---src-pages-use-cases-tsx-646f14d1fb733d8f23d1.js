(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4VWn":function(e,t,a){"use strict";var n,r=a("TSYQ"),l=a.n(r),s=a("q1tI"),i=a.n(s),c=a("djOb"),m=a.n(c),o=a("SC9r"),d=a("pBiw"),u=a("eMrp"),b=a("79Sd");!function(e){e[e.email=0]="email",e[e.role=1]="role",e[e.first_name=2]="first_name",e[e.last_name=3]="last_name"}(n||(n={}));t.a=function(e){var t=e.direction,a=void 0===t?"rtl":t,r=e.title,c=void 0===r?"Join the PayID Community":r,p=e.description,v=void 0===p?"Sign up to access the PayID newsletter and hear about hackathons and speaker events":p,f=e.orangeButton,g=void 0!==f&&f,x=e.enabledFields,h=Object(s.useState)(!1),w=h[0],y=h[1],E=Object(s.useState)("DEFAULT"),N=E[0],k=E[1],j=Object(s.useState)(),P=j[0],S=j[1],C=Object(s.useState)(),I=C[0],D=C[1],O=Object(s.useState)(),T=O[0],q=O[1],L=Object(s.useState)(!1),A=L[0],F=L[1],M=Object(s.useMemo)((function(){if(!x||!Array.isArray(x)||0===x.length){var e=Object.values(n);return e.splice(e.length/2),e.map((function(e){return e.toLowerCase()}))}return x}),[x]),_=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,K=function(e){return!(!e||!_.test(e))};Object(s.useEffect)((function(){var e=!0;!M.includes("role")||N&&"DEFAULT"!==N||(e=!1),M.includes("first_name")&&(!P||P.length<=0)&&(e=!1),!M.includes("email")||T&&K(T)||(e=!1),y(e)}),[N,P,T,M]);return i.a.createElement(b.a,{background:"orange",direction:a,wave:"blue",spacing:"lg",className:"flex items-center justify-center"},!A&&i.a.createElement("div",null,i.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},c),i.a.createElement("div",{className:"mt-8 text-xl text-center"},v),i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),w){var t={role:M.includes("role")?N:void 0,"first-name":M.includes("first_name")?P:void 0,"last-name":M.includes("last_name")&&""!==I?I:void 0,email:M.includes("email")?T:void 0};"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",t),void 0!==window.gtag&&(window.gtag("event","conversion",{send_to:"AW-877332159/jdvuCLLdpdQBEL-NrKID"}),window.gtag("event","conversion",{send_to:"AW-616173950/7ehtCOKFvNYBEP6i6KUC"})));var a=Object(o.a)(t);fetch("https://go.ripple.com/l/105572/2020-06-15/cspx4n",{mode:"no-cors",method:"POST",body:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).catch((function(e){Sentry.captureException(e)})),fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+a,{mode:"no-cors"}).catch((function(){})),F(!0)}},className:"mt-16 md:mt-30"},M.includes("role")&&i.a.createElement("div",{className:"relative px-6 mb-6 border-2 border-white rounded"},i.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return k(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return i.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),i.a.createElement(m.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),i.a.createElement("label",{htmlFor:"role",className:l()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none text-white left-4 bg-orange-500 px-2",{"-top-3":"DEFAULT"!==N,"top-4":"DEFAULT"===N})},"Role")),(M.includes("first_name")||M.includes("last_name"))&&i.a.createElement("div",{className:"flex"},M.includes("first_name")&&i.a.createElement(u.a,{theme:"orange",id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return S(e.currentTarget.value)}}),M.includes("last_name")&&i.a.createElement(u.a,{theme:"orange",id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return D(e.currentTarget.value)}})),M.includes("email")&&i.a.createElement(u.a,{theme:"orange",id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:K,invalidText:"Invalid email address",onChange:function(e){K(e.currentTarget.value)?q(e.currentTarget.value):q(void 0)}}),i.a.createElement(d.a,{disabled:!w,label:"Submit",variant:"secondary",className:"mt-8 bg-white sm:hidden"}),i.a.createElement(d.a,{disabled:!w,variant:"secondary",label:"Submit",size:"lg",className:l()("hidden mx-auto mt-16 sm:block bg-white",{"text-orange-500":!!g})}))),A&&i.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},"Thank you for subscribing!"))}},"79Sd":function(e,t,a){"use strict";var n=a("TSYQ"),r=a.n(n),l=a("q1tI"),s=a.n(l),i=a("Kk5M"),c=a.n(i),m=a("bahM"),o=a.n(m),d=function(e){var t=r()("bg-transparent",{"text-white":"white"===e.wave,"text-gray-50":"gray"===e.wave,"text-blue-dark-900":"blue"===e.wave,"text-orange-500":"orange"===e.wave,"text-blue-dark-800":"light-blue"===e.wave});return s.a.createElement("div",{className:r()("wave-vector",e.className)},"ltr"===e.direction&&s.a.createElement(c.a,{className:t}),"rtl"===e.direction&&s.a.createElement(o.a,{className:t}))};t.a=function(e){var t=e.wave,a=void 0===t?"white":t,n=e.background,l=void 0===n?"blue":n,i=e.direction,c=void 0===i?"ltr":i,m=e.spacing,o=void 0===m?"md":m,u="";"sm"===o?u="xl:-mt-20 lg:-mt-18 md:-mt-10 sm:-mt-8":"md"===o?u="xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10":"lg"===o&&(u="xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28"),u=r()(u,e.waveVectorClassNames);var b=r()(e.waveClassNames,"wave",{"bg-white text-blue-dark-900":"white"===l,"bg-gray-50 text-blue-dark-900":"gray"===l,"bg-blue-dark-900 text-white":"blue"===l,"bg-orange-500 text-white":"orange"===l,"bg-blue-dark-800 text-white":"light-blue"===l}),p=r()("flex justify-center",{"px-6 lg:px-18":!e["no-spacing"]}),v=r()("wave-content",{"lg:px-17":!e["no-gutter"]},{container:!e["no-spacing"]},{"w-full":e["no-spacing"]},e.className);return s.a.createElement("div",{className:b,style:e.style},s.a.createElement("div",{className:p},s.a.createElement("div",{className:v},e.children)),s.a.createElement(d,{wave:a,direction:c,className:u}))}},Kk5M:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M119.603 106.85C27.6811 82.8743 3.1337 32.6632 0 0V230H375C375 98.0089 247.198 128.693 151.462 113.105C143.158 111.753 128.221 109.098 119.603 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},XZtC:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),s=a("SC9r"),i=a("79Sd");t.a=function(e){var t=[{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/developers.svg")+")"},title:"Getting Started for Developers",link:Object(s.d)()},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/whitepaper.svg")+")"},title:"PayID Technical White Paper",link:"/whitepaper.pdf"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/api-reference.svg")+")"},title:"API Reference",link:"https://api.payid.org/?version=latest"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/standards.svg")+")"},title:"PayID Standards",link:"https://github.com/payid-org/rfcs"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/security.svg")+")"},title:"Security and Privacy",link:"https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/travel-rule.svg")+")"},title:"Travel Rule and Compliance",link:"https://trisa.io/"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/checkout.svg")+")"},title:"Checkout",link:"https://ripplex.io/portal/wallet/xrp/testnet"},{bgStyle:{backgroundImage:"url("+Object(n.withPrefix)("/assets/learn/xpring-sdk.svg")+")"},title:"RippleX SDK for PayID",link:Object(s.d)()+"/ripplex-dev-kit-payid"}];return l.a.createElement(i.a,{background:e.background,direction:e.direction,wave:"orange","no-gutter":!0},l.a.createElement("div",{className:"flex flex-col items-center sm:justify-center mb-14 md:mb-25"},l.a.createElement("h2",{className:"text-3xl font-bold sm:text-5xl sm:text-center "},"Learn More"),l.a.createElement("p",{className:"max-w-xl mt-6 text-xl sm:mt-8 sm:text-center"},"Discover everything you need to know about the free, open source PayID protocol")),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"},t.map((function(e){return l.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",key:e.title,className:"transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable",style:e.bgStyle},l.a.createElement("h3",{className:"font-bold text-white learnable-title mx-13"},e.title))})))))}},bahM:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M255.397 106.85C347.319 82.8743 371.866 32.6632 375 0V230H0C0 98.0089 127.802 128.693 223.538 113.105C231.842 111.753 246.779 109.098 255.397 106.85Z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=r,r.default=r},djOb:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M1 1L4 4L7 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}r.defaultProps={viewBox:"0 0 8 5",fill:"none"},e.exports=r,r.default=r},eMrp:function(e,t,a){"use strict";var n=a("zLVn"),r=a("TSYQ"),l=a.n(r),s=a("q1tI"),i=a.n(s);t.a=function(e){e.label,e.invalidText,e.requiredText,e.validate;var t,a=e.theme,r=void 0===a?"blue":a,c=e.className,m=e.onChange,o=Object(n.a)(e,["label","invalidText","requiredText","validate","theme","className","onChange"]),d=Object(s.useRef)(null),u=Object(s.useState)(!1),b=u[0],p=u[1],v=Object(s.useState)(),f=v[0],g=v[1],x=function(){d.current&&(d.current.value.length>0||document.activeElement&&document.activeElement.id===d.current.id)?p(!0):p(!1)},h=!(void 0===f||!f);return i.a.createElement("div",{className:l()(c,"relative w-full mb-6")},i.a.createElement("input",Object.assign({onChange:function(t){return m&&m(t),x(),e.required&&0===t.currentTarget.value.length?e.requiredText?void g(e.requiredText):void g(!0):e.validate&&!e.validate(t.currentTarget.value)?e.invalidText?void g(e.invalidText):void g(!0):void g(!1)},onFocus:x,onBlur:x,ref:d},o,{className:l()("w-full px-6 py-4 placeholder-white bg-transparent rounded border-2 appearance-none focus:outline-none",{"border-green-600":b&&!h&&"blue"===r,"border-white":!b&&!h||"orange"===r,"border-orange-600":h&&"blue"===r})})),i.a.createElement("label",{htmlFor:e.id,className:l()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 px-2 rounded",{"top-4":!b&&!h,"-top-3":b||h,"text-green-600":b&&!h&&"blue"===r,"text-orange-600":h&&"blue"===r,"text-white":"orange"===r||!b&&!h,"bg-blue-dark-900":"blue"===r,"bg-orange-500":"orange"===r})},null!==(t=e.label)&&void 0!==t?t:e.name," "),"string"==typeof f&&i.a.createElement("div",{className:l()("flex pt-1 text-sm",{"text-orange-600":"blue"===r,"text-white":"orange"===r})},i.a.createElement("div",null,f)))}},mJXV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("4VWn"),s=a("XZtC"),i=a("9Dj+"),c=a("Wbzz"),m=a("79Sd"),o={boxShadow:"0px 0px 118.944px #001B66"},d=function(){return r.a.createElement(m.a,{waveClassNames:"vision-bg",spacing:"sm"},r.a.createElement("div",{className:"max-w-4xl pt-16 lg:pt-70"},r.a.createElement("h1",{className:"text-4xl font-bold md:text-h1 md:leading-tighter"},"PayID is used in apps across a variety of payment use cases")),r.a.createElement("div",{className:"flex flex-col-reverse items-center justify-center mt-32 md:flex-row md:mt-64"},r.a.createElement("div",{className:"w-full md:mr-18"},r.a.createElement("h2",{className:"mb-6 text-3xl font-bold md:text-5xl"},"Peer to Peer Payment"),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"P2P app users can send and receive payments from people on other payment networks and in any currency by simply sharing their unique PayID address."),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Key benefit: PayID reduces friction in the payment experience, increasing conversion, and helping the company reach new users across a broader more connected network.")),r.a.createElement("div",{className:"w-full"},r.a.createElement("img",{src:Object(c.withPrefix)("/assets/use-cases/p2p.png"),className:"object-contain"}))),r.a.createElement("div",{className:"flex flex-col items-center justify-center mt-32 md:flex-row md:mt-64"},r.a.createElement("div",{className:"w-full md:mr-18"},r.a.createElement("img",{src:Object(c.withPrefix)("/assets/use-cases/checkout.png"),className:"transform md:-ml-16 md:scale-125",style:o})),r.a.createElement("div",{className:"w-full mt-10 md:mt-0"},r.a.createElement("h2",{className:"mb-6 text-3xl font-bold md:text-5xl"},"E-Commerce Checkout"),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"E-commerce customers can use any digital wallet to complete their purchases when PayID is offered as a payment method."),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Key benefit: PayID helps shoppers check out faster and enhances transaction security."))),r.a.createElement("div",{className:"flex flex-col-reverse items-center justify-center mt-32 md:flex-row md:mt-64"},r.a.createElement("div",{className:"w-full md:mr-18"},r.a.createElement("h2",{className:"mb-6 text-3xl font-bold md:text-5xl"},"Subscription Payment"),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Companies can use PayID to request recurring payments from their subscribers’ digital and crypto wallets."),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Key benefit: PayID offers customers a much easier, simple way to renew their subscriptions, using any currency or wallet.")),r.a.createElement("div",{className:"w-full"},r.a.createElement("img",{src:Object(c.withPrefix)("/assets/use-cases/subscription.png"),className:"object-contain"}))),r.a.createElement("div",{className:"flex flex-col items-center justify-center mt-32 md:flex-row md:mt-64"},r.a.createElement("div",{className:"w-full md:mr-18"},r.a.createElement("img",{src:Object(c.withPrefix)("/assets/use-cases/invoice.png"),className:"transform md:-ml-16 md:scale-125",style:o})),r.a.createElement("div",{className:"w-full mt-10 md:mt-0"},r.a.createElement("h2",{className:"mb-6 text-3xl font-bold md:text-5xl"},"Invoice Payment"),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Services can use PayID to send invoice requests directly to a customer's PayID, and the payment transaction can be completed in just a few clicks."),r.a.createElement("p",{className:"mt-4 md:mt-6 md:text-xl"},"Key benefit: Streamlined experience for both client and provider that works for any payment method and any wallet that supports PayID."))))};t.default=function(){return r.a.createElement(i.a,{path:"use-cases",title:"Use Cases",description:"PayID has a plethora of use cases. Learn more about how PayID can improve your applications user experience."},r.a.createElement(d,null),r.a.createElement(s.a,{background:"white"}),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-use-cases-tsx-646f14d1fb733d8f23d1.js.map