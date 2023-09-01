"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8479],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={slug:"axios\u2014_prj",title:"Axios\u9879\u76ee\u5c01\u88c5",tags:["Axios","\u7f51\u7edc\u901a\u4fe1","Ajax"]},i="\u4f7f\u7528Axios\u5c01\u88c5\u96c6\u4e2d\u5f0f\u7f51\u7edc\u8bf7\u6c42\u5e93",s={unversionedId:"FrontEnd/Node-Weak/NetCommunicate/Axios\u7684\u9879\u76ee\u5c01\u88c5",id:"FrontEnd/Node-Weak/NetCommunicate/Axios\u7684\u9879\u76ee\u5c01\u88c5",title:"Axios\u9879\u76ee\u5c01\u88c5",description:"\u7b2c\u4e00\u90e8\u5206\uff1a\u7406\u8bba\u4ecb\u7ecd",source:"@site/docs/FrontEnd/Node-Weak/NetCommunicate/03-Axios\u7684\u9879\u76ee\u5c01\u88c5.md",sourceDirName:"FrontEnd/Node-Weak/NetCommunicate",slug:"/FrontEnd/Node-Weak/NetCommunicate/axios\u2014_prj",permalink:"/docs/FrontEnd/Node-Weak/NetCommunicate/axios\u2014_prj",draft:!1,editUrl:"https://github.com/hfLiu15709732/docs/FrontEnd/Node-Weak/NetCommunicate/03-Axios\u7684\u9879\u76ee\u5c01\u88c5.md",tags:[{label:"Axios",permalink:"/docs/tags/axios"},{label:"\u7f51\u7edc\u901a\u4fe1",permalink:"/docs/tags/\u7f51\u7edc\u901a\u4fe1"},{label:"Ajax",permalink:"/docs/tags/ajax"}],version:"current",sidebarPosition:3,frontMatter:{slug:"axios\u2014_prj",title:"Axios\u9879\u76ee\u5c01\u88c5",tags:["Axios","\u7f51\u7edc\u901a\u4fe1","Ajax"]},sidebar:"frontSidebar",previous:{title:"Axios\u4f7f\u7528",permalink:"/docs/FrontEnd/Node-Weak/NetCommunicate/Axios\u4f7f\u7528"},next:{title:"Fetch\u57fa\u7840\u4e0e\u9879\u76ee\u5c01\u88c5",permalink:"/docs/FrontEnd/Node-Weak/NetCommunicate/Fetch"}},l={},c=[{value:"\u7b2c\u4e00\u90e8\u5206\uff1a\u7406\u8bba\u4ecb\u7ecd",id:"\u7b2c\u4e00\u90e8\u5206\u7406\u8bba\u4ecb\u7ecd",level:2},{value:"1.1\u4f5c\u7528\uff08\u4e3a\u4ec0\u4e48\uff09\uff1a",id:"11\u4f5c\u7528\u4e3a\u4ec0\u4e48",level:3},{value:"1.2 \u9700\u8981\u5b8c\u6210\u7684\u6b65\u9aa4\uff1a",id:"12-\u9700\u8981\u5b8c\u6210\u7684\u6b65\u9aa4",level:3},{value:"\u7b2c\u4e8c\u90e8\u5206\uff1a\u4f7f\u7528Axios\u6784\u5efa",id:"\u7b2c\u4e8c\u90e8\u5206\u4f7f\u7528axios\u6784\u5efa",level:2},{value:"2.1 \u6784\u5efa\u8bf7\u6c42\u5c01\u88c5\u6587\u4ef6",id:"21-\u6784\u5efa\u8bf7\u6c42\u5c01\u88c5\u6587\u4ef6",level:3},{value:"2.2 \u6784\u5efaURL\u7edf\u4e00\u7ba1\u7406",id:"22-\u6784\u5efaurl\u7edf\u4e00\u7ba1\u7406",level:3},{value:"2.3 \u6784\u5efa\u4e1a\u52a1\u903b\u8f91\u7684\u7edf\u4e00\u7ba1\u7406",id:"23-\u6784\u5efa\u4e1a\u52a1\u903b\u8f91\u7684\u7edf\u4e00\u7ba1\u7406",level:3},{value:"2.4 \u5b9e\u9645\u7ec4\u4ef6\u8c03\u7528",id:"24-\u5b9e\u9645\u7ec4\u4ef6\u8c03\u7528",level:3}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528axios\u5c01\u88c5\u96c6\u4e2d\u5f0f\u7f51\u7edc\u8bf7\u6c42\u5e93"},"\u4f7f\u7528Axios\u5c01\u88c5\u96c6\u4e2d\u5f0f\u7f51\u7edc\u8bf7\u6c42\u5e93"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u90e8\u5206\u7406\u8bba\u4ecb\u7ecd"},"\u7b2c\u4e00\u90e8\u5206\uff1a\u7406\u8bba\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"11\u4f5c\u7528\u4e3a\u4ec0\u4e48"},"1.1\u4f5c\u7528\uff08\u4e3a\u4ec0\u4e48\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u7b80\u6d01\u6613\u61c2\uff1a"),"\u901a\u8fc7\u96c6\u4e2d\u5f0f\u7ba1\u7406\u7f51\u7edc\u8bf7\u6c42\uff0c\u53ef\u4ee5\u51cf\u5c11\u91cd\u590d\u7684\u4ee3\u7801\u548c\u903b\u8f91\uff0c\u4f7f\u4ee3\u7801\u66f4\u52a0\u7b80\u6d01\u6613\u61c2\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7ef4\u62a4\u65b9\u4fbf\uff1a"),"\u6240\u6709\u7684\u7f51\u7edc\u8bf7\u6c42\u90fd\u653e\u5728\u540c\u4e00\u4e2a\u5730\u65b9\u8fdb\u884c\u7ba1\u7406\uff0c\u65b9\u4fbf\u7ef4\u62a4\u548c\u4fee\u6539\uff0c\u4e5f\u53ef\u4ee5\u7edf\u4e00\u5904\u7406\u5f02\u5e38\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5f3a\u5927\uff1a"),"Axios\u652f\u6301\u591a\u79cdHTTP\u8bf7\u6c42\u65b9\u5f0f\uff0c\u5982GET\u3001POST\u3001PUT\u548cDELETE\u7b49\uff0c\u8fd8\u80fd\u8bbe\u7f6e\u8bf7\u6c42\u5934\u3001\u54cd\u5e94\u62e6\u622a\u5668\u7b49\u529f\u80fd\uff0c\u4f7f\u5f97\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5b9a\u5236\u8bf7\u6c42\u53c2\u6570\u548c\u5904\u7406\u54cd\u5e94\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u53ef\u6269\u5c55\u6027\u5f3a\uff1a"),"\u901a\u8fc7\u5c01\u88c5Axios\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5b9e\u73b0\u5bf9\u4e8e\u4e0d\u540cAPI\u63a5\u53e3\u7684\u8c03\u7528\uff0c\u540c\u65f6\u4e5f\u65b9\u4fbf\u5730\u6269\u5c55\u5176\u4ed6\u7f51\u7edc\u8bf7\u6c42\u5e93\uff0c\u5982fetch\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u63d0\u9ad8\u6548\u7387\uff1a"),"\u901a\u8fc7\u96c6\u4e2d\u5f0f\u7ba1\u7406\u7f51\u7edc\u8bf7\u6c42\uff0c\u53ef\u4ee5\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u907f\u514d\u56e0\u4e3a\u7f51\u7edc\u8bf7\u6c42\u7684\u6563\u4e71\u800c\u5bfc\u81f4\u5f00\u53d1\u6548\u7387\u964d\u4f4e\u3002")),(0,a.kt)("h3",{id:"12-\u9700\u8981\u5b8c\u6210\u7684\u6b65\u9aa4"},"1.2 \u9700\u8981\u5b8c\u6210\u7684\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u8bf7\u6c42\u7684\u7edf\u4e00\u62e6\u622a\u5668\uff1a"),"\u9700\u8981\u5bf9\u8bf7\u6c42\u7528\u6237\u8fdb\u884c\u7b2c\u4e00\u5c42\u9274\u6743\uff08token\u662f\u5426\u6709/\u8fc7\u671f\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u76f8\u5e94\u7684\u7edf\u4e00\u62e6\u622a\u5668\uff1a"),"\u5bf9\u76f8\u5e94\u7684\u4fe1\u606f\u8fdb\u884c\u7b2c\u4e00\u5c42\u5904\u7406\u4e0e\u9519\u8bef\u8bf7\u6c42\u7684\u62e6\u622a"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5c01\u88c5\u57fa\u672c\u65b9\u6cd5\u7684\u51fd\u6570\uff1a"),"\uff08get/post\u65b9\u6cd5\u7b49\u7b49\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa\u7edf\u4e00\u7684\u8bf7\u6c42\u5bf9\u8c61\uff1a"),"\uff08\u521b\u5efaHTTP\u5bf9\u8c61\u5e76\u5c06\u6240\u5c01\u88c5\u7684\u65b9\u6cd5\u5305\u542b\u5728\u5185\uff0c\u5e76\u5c06HTTP\u66b4\u9732\u51fa\u53bb\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u6784\u5efaURL\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u57fa\u5730\u5740\u7684\u914d\u7f6e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u8bbe\u8ba1\u6bcf\u4e2a\u8bf7\u6c42\u7684\u5bf9\u5e94\u65b9\u6cd5\uff1a"),"\u5b9e\u9645\u7684\u4e1a\u52a1\u9700\u6c42\u7684\u51fd\u6570\uff0c\u8bf7\u6c42\u76f4\u63a5\u4f7f\u7528HTTP\u5bf9\u8c61\uff0cURL\u76f4\u63a5\u627e5\u6240\u521b\u5efa\u7684\u5730\u65b9"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4e1a\u52a1\u51fd\u6570\u66b4\u9732\uff1a"),"\u5c06\u6240\u6709\u4e1a\u52a1\u51fd\u6570\u6784\u5efa\u6210\u6574\u4f53\u7684\u4e1a\u52a1\u8bf7\u6c42\u5bf9\u8c61\uff0c\u5e76\u5c06\u4e1a\u52a1\u8bf7\u6c42\u5bf9\u8c61\u66b4\u9732\u51fa\u53bb\uff0c\u4f9b\u7ec4\u4ef6\u8c03\u7528")),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u90e8\u5206\u4f7f\u7528axios\u6784\u5efa"},"\u7b2c\u4e8c\u90e8\u5206\uff1a\u4f7f\u7528Axios\u6784\u5efa"),(0,a.kt)("h3",{id:"21-\u6784\u5efa\u8bf7\u6c42\u5c01\u88c5\u6587\u4ef6"},"2.1 \u6784\u5efa\u8bf7\u6c42\u5c01\u88c5\u6587\u4ef6"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\uff1a",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5176\u4e2d\u7b2c\u4e00\u90e8\u5230\u7b2c\u56db\u90e8\u5747\u53ef\u4ee5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u6784\u5efa,\u521b\u5efarequestPackageing.jsx\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u5176\u4e2d\u7b2c\u4e00\u90e8\u5230\u7b2c\u56db\u90e8\u5747\u53ef\u4ee5\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u6784\u5efa\n//\u521b\u5efarequestPackageing.jsx\u6587\u4ef6\nimport axios from "axios";\nimport msag from "./Response";\nimport { Notification } from "@douyinfe/semi-ui";\nimport ConstantTab from "./Constant";\n\n\n\n\naxios.defaults.timeout = 100000;//\u8bbe\u7f6e\u8d85\u65f6\u4fe1\u606f\naxios.defaults.baseURL = "127.0.0.1:7001/admin";//\u8bbe\u7f6e\u8bf7\u6c42\u57fa\u5730\u5740\n\n\n//\u57fa\u672c\u4e0a\u90fd\u662faxios\u7684\u5c01\u88c5\u4e0e\u914d\u7f6e\n//\u4f46\u672c\u9879\u76ee\u662f\u5bf9axios\u5305\u88c5\u4e86\u4e24\u5c42\uff08\u4e00\u5c42\u662faxios\u7684api\uff0c\u4e00\u5c42\u662f\u7edf\u4e00\u5904\u7406\u4e00\u7ea7\u5c01\u88c5\u51fd\u6570\uff09\uff1b\u7559\u51fa\u66f4\u591a\u5904\u7406\u6570\u636e\u7684\u7a7a\u95f4\uff0c\u4e5f\u76f8\u5bf9\u66f4\u89c4\u8303\u4e9b\n//\u6700\u7ec8\u662f\u5c06\u96c6\u4e2d\u5904\u7406\u7684\u51fd\u6570\u9ed8\u8ba4\u66b4\u9732\u51fa\u53bb\uff0c\u76f4\u63a5\u5728requestUse\u7684\u96c6\u4e2d\u8bf7\u6c42\u6587\u4ef6\u4e2d\u8c03\u7528\u4ed6\u5373\u53ef\n//\u6ca1\u4e86\u89e3\u8fc7\u53ef\u4ee5\u770baxios\u7684\u4e2d\u6587\u6587\u6863\uff1ahttps://www.axios-http.cn/\n\n/**\n * \u7b2c\u4e00\u6b65\uff1a   http \u8bf7\u6c42\u7684\u7edf\u4e00\u62e6\u622a\u5668\n */\naxios.interceptors.request.use(\n  (config) => {\n    const tokenJson = localStorage.getItem(\'token\');\n    if(tokenJson){\n      //\u672c\u9879\u76ee\u7684\u7528\u6237\u4fe1\u606f\u5b58\u50a8\u5230localStorage\u91cc\u9762\u4e86 \u4e5f\u53ef\u4ee5\u7528store\uff0c\u56e0\u4e3a\u4e00\u822c\u767b\u5f55\u540e\u8fd8\u662f\u4f1a\u5c06\u767b\u5f55\u4fe1\u606f\u5b58\u5230redux\u91cc\u9762\u4e00\u4efd\uff0c\n      //\u4f46\u4e0d\u5b58\u5230localsStorage\u7684\u8bdd\uff0c\u5f53\u524d\u9875\u9762\u5237\u65b0\u65f6\uff0credux\u4e2d\u7684\u5185\u5bb9\u4f1a\u6d88\u5931\u3002\n      const tokenStr=JSON.stringify(tokenJson);\n      const {token,openID}=tokenStr;\n      if(token&&Date.now()-openID<=3600000*2){\n          config.headers.jwt_token = token //\u8bf7\u6c42\u5934\u52a0\u4e0atoken\u4fe1\u606f\n      }\n      //\u68c0\u9a8ctoken\u662f\u5426\u5b58\u5728\uff0c\u548copenID\u662f\u5426\u8fc7\u671f\uff08\u8fd9\u91cc\u8bbe\u7684\u662f2\u5929\uff0c\u81ea\u5df1\u6839\u636e\u81ea\u5df1\u7684\u9879\u76ee\u6539\u65f6\u95f4\u6233\u5c31\u884c\uff09\n      else{\n        Notification.error(ConstantTab.TokenExpireNotify)\n      }\n    }\n    else{\n      Notification.error(ConstantTab.TokenDisNotify)\n    }\n\n    return config\n  },\n  (error) => {\n    \n    //token\u6ca1\u6709\u6216\u8005\u5df2\u7ecf\u8fc7\u671f\u4e86;\u8fd9\u91cc\u505a\u51fa\u5904\u7406(\u8fd4\u56de\u767b\u5f55\u9875\u5e76\u6e05\u9664token\u4fe1\u606f)\n    return Promise.reject(error);\n  }\n);\n\n\n\n\n\n\n/**\n * \u7b2c\u4e8c\u6b65\uff1a  http \u54cd\u5e94\u7684\u62e6\u622a\u5668\n */\naxios.interceptors.response.use(\n  (response) => {\n    //\u76f8\u5e94\u72b6\u6001\u7801\u57282XX\u4ee5\u5185\u4f1a\u89e6\u53d1\n    if (response.data.errCode === 2) {\n      console.log("\u8fc7\u671f");\n    }\n    return response;\n  },\n  (error) => {\n    //\u54cd\u5e94\u72b6\u6001\u7801\u8d85\u51fa2XX\u4f1a\u89e6\u53d1\u8fd9\u91cc\uff0c\u59823XX 4XX 5XX;\n    console.log("\u8bf7\u6c42\u51fa\u9519\uff1a", error);\n  }\n);\n\n\n//\u7b2c\u4e09\u90e8\uff1a   \u5c01\u88c5\u8bf7\u6c42\u65b9\u6cd5\n\n/**\n * \u5c01\u88c5get\u65b9\u6cd5\n * @param url  \u8bf7\u6c42url\n * @param params  \u8bf7\u6c42\u53c2\u6570\n * @returns {Promise}\n * \n * \u6ce8\u610f axios--get\u7684\u53c2\u6570\u8981\u4e48\u63a5\u5728url\u540e\u9762\uff0c\u8981\u4e48\u5305\u4e00\u4e2a\u5bf9\u8c61\u653e\u540e\u9762\n */\nexport function get(url, params = {}) {\n  return new Promise((resolve, reject) => {\n    axios.get(url, {params: params}).then(\n        (response) => {\n        resolve(response.data);\n      })\n      .catch((error) => {\n        reject(error);\n      });\n  });\n}\n\n/**\n * \u5c01\u88c5post\u8bf7\u6c42\n * @param url\n * @param data\n * @returns {Promise}\n */\n\nexport function post(url, data) {\n  return new Promise((resolve, reject) => {\n    axios.post(url, data).then(\n      (response) => {\n        resolve(response.data);\n      },\n      (err) => {\n        reject(err);\n      }\n    );\n  });\n}\n\n\n\n\n\n//\u7b2c\u56db\u6b65\uff1a\u6784\u5efa\u7edf\u4e00\u7684HTTP\u8bf7\u6c42\u5bf9\u8c61\n\n//\u7edf\u4e00\u63a5\u53e3\u5904\u7406\uff0c\u8fd4\u56de\u6570\u636e\n/**\n * @param fetch \u8bf7\u6c42\u7c7b\u578b(get/post/put/patch)\n * @param url   \u8bf7\u6c42\u8def\u5f84\uff08\u76f8\u5bf9\u8def\u5f84\uff0c\u57fa\u51c6\u8def\u5f84\u5728baseUrl\u5df2\u7ecf\u8bbe\u8fc7\n * @param data  \u6570\u636e\u4f53\n * @returns {Promise}\n */\nexport default function (fecth, url, param) {\n  let _data = "";\n  return new Promise((resolve, reject) => {\n    switch (fecth) {\n\n\n      case "get":\n        console.log("begin a get request,and url:", url);\n        get(url, param)\n          .then(function (response) {\n            resolve(response);\n          })\n          .catch(function (error) {\n            console.log("get request GET failed.", error);\n            reject(error);\n          });\n        break;\n\n\n      case "post":\n        post(url, param)\n          .then(function (response) {\n            resolve(response);\n          })\n          .catch(function (error) {\n            console.log("get request POST failed.", error);\n            reject(error);\n          });\n        break;\n\n\n      default:\n        break;\n    }\n  });\n}\n\n\n')),(0,a.kt)("h3",{id:"22-\u6784\u5efaurl\u7edf\u4e00\u7ba1\u7406"},"2.2 \u6784\u5efaURL\u7edf\u4e00\u7ba1\u7406"),(0,a.kt)("p",null,"::tip \u6ce8\u610f\uff1a\n\u7136\u540e\u521b\u5efa\u4e00\u4e2aapiurl.jsx,\u7528\u4e8e\u6574\u8bf7\u6c42URL\u7684\u7ba1\u7406\n:::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// let baseURL={\n//     local:\"http://localhost:7001/admin/\",\n//     online:\"/api/admin/\",\n// }\n\n// let ipUrl=baseURL.local;\n\n\n//baseUrl\u5df2\u7ecf\u5728packaging.jsx\u4e2d\u914d\u7f6e\u8fc7\u4e86\uff0c\u8fd9\u91cc\u4e0d\u9700\u8981\u4e86\n\nlet servicePath = {\n\n    getArticleList:'/article/home/index',\n    \n    registerByUserName:'/register/username',\n\n    registerByEmail:'/register/email',\n\n    loginByUserName:'/login/username',\n\n    loginByEmail:'/login/email',\n\n    getTableForCPU_R23:'/login/email',\n\n    getTableForMobile_AVG_CPU:'/table/mobile/avgcpu',\n\n    getTableFilter:'/table/mobile/filter',\n\n    getLineChart:'/chart/linechart',\n\n    getPaiChart:'/chart/paichart',\n\n    getColumnChart:'/table/chart/column',\n\n    getCardData:'/card/data',\n\n}\n\nexport default servicePath;\n")),(0,a.kt)("h3",{id:"23-\u6784\u5efa\u4e1a\u52a1\u903b\u8f91\u7684\u7edf\u4e00\u7ba1\u7406"},"2.3 \u6784\u5efa\u4e1a\u52a1\u903b\u8f91\u7684\u7edf\u4e00\u7ba1\u7406"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\uff1a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u4e00\u4e2arequestUsing.jsx,\u7528\u4e8e\u5199\u5b9e\u9645\u4e1a\u52a1\u8bf7\u6c42\u51fd\u6570\u7684\u4f4d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import http from "./requestPackaging";//\u5f15\u5165axios\u7684\u5c01\u88c5\u6587\u4ef6\nimport { Notification} from \'@douyinfe/semi-ui\';\nimport servicePath from "./apiUrls";  //\u5f15\u5165\u8bf7\u6c42\u8def\u5f84\u5e93\n\n\n\n\n/**\n * \u83b7\u53d6\u9996\u9875\u5217\u8868\n */\nconst getArticleList=()=>{\n  return new Promise((resolve, reject) => {\n    http("get",servicePath.getArticleList).then(res => {\n      resolve (res);\n    },error => {\n      console.log("\u7f51\u7edc\u5f02\u5e38~",error);\n      reject(error)\n    })\n  }) \n}\n\nconst getTableForCPU_R23=()=>{\n  return new Promise((resolve, reject) => {\n    http("get",servicePath.getTableForCPU_R23).then(res => {\n      resolve (res);\n    },error => {\n      console.log("\u7f51\u7edc\u5f02\u5e38~",error);\n      reject(error)\n    })\n  }) \n}//\u83b7\u53d6\u8868\u683c\uff08\u5173\u4e8ecpu_r23\uff09\u7684\u6570\u636e\n\n\n\n\n\n\n\n\nexport {\n   getArticleList,\n   getTableForCPU_R23,\n}\n')),(0,a.kt)("h3",{id:"24-\u5b9e\u9645\u7ec4\u4ef6\u8c03\u7528"},"2.4 \u5b9e\u9645\u7ec4\u4ef6\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { getTableForCPU_R23} from \'../../config/requestUse\';\n\n\n\n\n      const handleTabsChange=(val)=>{\n            switch (val) {\n                  case "6":\n                    changeMainData(data.slice(11,17))\n                    break;\n                  case "7":\n                    changeMainData(data.slice(5,17))\n                    break;\n                  case "8":\n                    changeMainData(data.slice(11,16))\n                    break;\n\n                  default:\n                    break;\n                }//mock\u865a\u62df\u6570\u636e\n\n\n             getTableForMobile_AVG_CPU().then(\n                   (val)=>{\n                         mainData=val.mainData;\n                   },\n                   ()=>{}\n             )\n            // \u540e\u7aef\u6709\u6570\u636e\u4e4b\u540e\u5c31\u628a\u8fd9\u91cc\u5f00\u542f\u5c31\u53ef\n      }\n\n')))}u.isMDXComponent=!0}}]);