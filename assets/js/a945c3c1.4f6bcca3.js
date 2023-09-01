"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"vuex",title:"5. Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406",tags:["VueX","pinia","Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406"]},s=void 0,i={unversionedId:"FrontEnd/vue/vueX",id:"FrontEnd/vue/vueX",title:"5. Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406",description:"1. Vuex \u7684\u96c6\u4e2d\u5f0f\u7ba1\u63a7",source:"@site/docs/FrontEnd/vue/05-vueX.md",sourceDirName:"FrontEnd/vue",slug:"/FrontEnd/vue/vuex",permalink:"/test/docs/FrontEnd/vue/vuex",draft:!1,editUrl:"https://github.com/hfLiu15709732/docs/FrontEnd/vue/05-vueX.md",tags:[{label:"VueX",permalink:"/test/docs/tags/vue-x"},{label:"pinia",permalink:"/test/docs/tags/pinia"},{label:"Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406",permalink:"/test/docs/tags/vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406"}],version:"current",sidebarPosition:5,frontMatter:{slug:"vuex",title:"5. Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406",tags:["VueX","pinia","Vue\u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406"]},sidebar:"frontSidebar",previous:{title:"4. Vue-router \u8def\u7531\u7ba1\u7406",permalink:"/test/docs/FrontEnd/vue/vue-router"},next:{title:"1. Nuxt3\u57fa\u7840\u5b66\u4e60",permalink:"/test/docs/FrontEnd/SSR/nuxt"}},p={},l=[{value:"1. Vuex \u7684\u96c6\u4e2d\u5f0f\u7ba1\u63a7",id:"1-vuex-\u7684\u96c6\u4e2d\u5f0f\u7ba1\u63a7",level:2},{value:"1.1.\u57fa\u7840\u914d\u7f6e",id:"11\u57fa\u7840\u914d\u7f6e",level:3},{value:"1.2. \u5feb\u901f\u5f00\u59cb",id:"12-\u5feb\u901f\u5f00\u59cb",level:3},{value:"1.3 getters \u5c5e\u6027",id:"13-getters-\u5c5e\u6027",level:3},{value:"1.4 Mutation \u5c5e\u6027",id:"14-mutation-\u5c5e\u6027",level:3},{value:"1.5 Action \u5c5e\u6027",id:"15-action-\u5c5e\u6027",level:3},{value:"2. Pinia--\u66f4\u73b0\u4ee3\u5316\u7684\u72b6\u6001\u7ba1\u7406\u5e93",id:"2-pinia--\u66f4\u73b0\u4ee3\u5316\u7684\u72b6\u6001\u7ba1\u7406\u5e93",level:2},{value:"2.1.\u57fa\u7840\u914d\u7f6e",id:"21\u57fa\u7840\u914d\u7f6e",level:3},{value:"2.2. \u57fa\u7840\u4f7f\u7528",id:"22-\u57fa\u7840\u4f7f\u7528",level:3},{value:"2.3.Getters \u5c5e\u6027",id:"23getters-\u5c5e\u6027",level:3},{value:"2.4.Actions \u5c5e\u6027",id:"24actions-\u5c5e\u6027",level:3},{value:"2.5 \u6301\u4e45\u5316\u5b58\u50a8",id:"25-\u6301\u4e45\u5316\u5b58\u50a8",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-vuex-\u7684\u96c6\u4e2d\u5f0f\u7ba1\u63a7"},"1. Vuex \u7684\u96c6\u4e2d\u5f0f\u7ba1\u63a7"),(0,a.kt)("h3",{id:"11\u57fa\u7840\u914d\u7f6e"},"1.1.\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save vuex\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d VueX \u5b9e\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import store from "./store";\napp.use(store);\n')),(0,a.kt)("h3",{id:"12-\u5feb\u901f\u5f00\u59cb"},"1.2. \u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199\u4ed3\u5e93\u7684\u4e3b\u5165\u53e3\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import Vue from "vue";\nimport Vuex from "vuex";\nimport user from "./modules/user"; //\u7528\u6237\u4fe1\u606f\u4ed3\u5e93\nimport setting from "./modules/setting"; //\u8bbe\u7f6e\u4fe1\u606f\u4ed3\u5e93\n\nconst store = new Vuex.Store({\n    modules: {\n        user,\n        setting,\n    }, //\u6a21\u5757\u5316\u4ed3\u5e93\n}); //\u521b\u5efa\u4e3b\u4ed3\u5e93\u5165\u53e3\n\nexport default store; //\u5bfc\u51fa\u4e3b\u4ed3\u5e93\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199\u5206\u652f\u4ed3\u5e93\u6587\u4ef6\uff08user \u4e3a\u4f8b\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TOKEN_NAME } from "@/config/global";\n\nconst InitUserInfo = {\n    roles: [],\n};\n\n// \u5b9a\u4e49\u7684state\u521d\u59cb\u503c\nconst state = {\n    userInfo: InitUserInfo,\n};\n\nconst mutations = {\n    setUserInfo(state, userInfo) {\n        state.userInfo = userInfo;\n    },\n};\n\nconst getters = {\n    token: (state) => state.token,\n    roles: (state) => state.userInfo?.roles,\n};\n\nconst actions = {\n    async logout({ commit }) {\n        commit("removeToken");\n        commit("setUserInfo", InitUserInfo);\n    },\n};\n\nexport default {\n    namespaced: true,\n    state,\n    mutations,\n    actions,\n    getters,\n}; //\u4f9d\u6b21\u5bfc\u51fa\u6bcf\u4e2a\u6570\u636e\u9879\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u83b7\u53d6\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useStore } from "vuex";\nconst { userInfo } = this.$store.state.user; //vue2\n//\u6216\u8005\nconst store = useStore();\nconst userinfo = computed(() => store.state.user.userInfo); //vue3\n')),(0,a.kt)("h3",{id:"13-getters-\u5c5e\u6027"},"1.3 getters \u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa getters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const state = () => ({\n    cartList: [\n        { name: "\u4e52\u4e53\u7403", price: 5 },\n        { name: "\u6392\u7403", price: 120 },\n        { name: "\u8fd0\u52a8\u996e\u6599", price: 10 },\n        { name: "\u8fd0\u52a8\u978b", price: 200 },\n        { name: "\u7eb8\u5dfe", price: 20 },\n    ],\n});\n\nconst getters = {\n    getList: (state) => state.cartList,\n    getListLow: (state) => (num) => {\n        return state.cartList.filter((item) => item.price < num);\n    },\n};\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 getters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const cartList = computed(() => store.getters["user/getList"]);\n//\u6216\u8005\nconst cartList = computed(() => store.getters["user/getList"](50)); //\u4f20\u53c2\u6570\n')),(0,a.kt)("h3",{id:"14-mutation-\u5c5e\u6027"},"1.4 Mutation \u5c5e\u6027"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 Vuex \u4e2d\uff0cmutation \u90fd\u662f\u540c\u6b65\u4e8b\u52a1\uff0c\u8981\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u9700\u8981\u4f7f\u7528\u5230 Action\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa Mutation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const mutations = {\n    increment(state) {\n        state.num++;\n    },\n}; //\u6ca1\u6709payload\u7684\n\nconst mutations = {\n    increment(state, payload) {\n        state.count += payload.amount;\n    },\n}; //\u5177\u6709payload\u7684\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Mutation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'store.commit("increment");\n//\u6216\u8005\nstore.commit("increment", {\n    amount: 10,\n}); //\u5177\u6709payload\u7684\n')),(0,a.kt)("h3",{id:"15-action-\u5c5e\u6027"},"1.5 Action \u5c5e\u6027"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 Vuex \u4e2d\uff0cmutation \u90fd\u662f\u540c\u6b65\u4e8b\u52a1\uff0c\u8981\u5904\u7406\u5f02\u6b65\u64cd\u4f5c\u9700\u8981\u4f7f\u7528\u5230 Action\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa Action")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const actions = {\n    increment(context) {\n        // context.commit('increment');\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                context.commit(\"increment\");\n                resolve();\n            }, 500);\n        });\n    },\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Action")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  store.dispatch('count/increment'{a: 123}).then(() => {\n    console.log('-----\u6267\u884c\u5b8caction');\n    // \u8fd9\u91cc\u5199\u4e00\u4e9b\u903b\u8f91\n  });\n  //\u4e5f\u53ef\u4ee5\u4e0d\u8fd4\u56depromise \u5728\u51fd\u6570\u91cc\u9762\u76f4\u63a5\u5904\u7406\u5373\u53ef\n")),(0,a.kt)("h2",{id:"2-pinia--\u66f4\u73b0\u4ee3\u5316\u7684\u72b6\u6001\u7ba1\u7406\u5e93"},"2. Pinia--\u66f4\u73b0\u4ee3\u5316\u7684\u72b6\u6001\u7ba1\u7406\u5e93"),(0,a.kt)("h3",{id:"21\u57fa\u7840\u914d\u7f6e"},"2.1.\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add pinia\n# \u6216\u8005\u4f7f\u7528 npm\nnpm install pinia\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d VueX \u5b9e\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createApp } from "vue";\nimport App from "./App.vue";\nimport { createPinia } from "pinia";\nimport "../src/assets/main.css";\n\nconst app = createApp(App);\napp.use(createPinia());\napp.mount("#app");\n')),(0,a.kt)("h3",{id:"22-\u57fa\u7840\u4f7f\u7528"},"2.2. \u57fa\u7840\u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199\u4e00\u4e2a Store")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import Vue from "vue";\nimport Vuex from "vuex";\nimport user from "./modules/user"; //\u7528\u6237\u4fe1\u606f\u4ed3\u5e93\nimport setting from "./modules/setting"; //\u8bbe\u7f6e\u4fe1\u606f\u4ed3\u5e93\n\nconst store = new Vuex.Store({\n    modules: {\n        user,\n        setting,\n    }, //\u6a21\u5757\u5316\u4ed3\u5e93\n}); //\u521b\u5efa\u4e3b\u4ed3\u5e93\u5165\u53e3\n\nexport default store; //\u5bfc\u51fa\u4e3b\u4ed3\u5e93\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199\u5206\u652f\u4ed3\u5e93\u6587\u4ef6\uff08user \u4e3a\u4f8b\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { defineStore } from "pinia";\n\nconst chatStore = defineStore("chat", {\n    state: () => {\n        return {\n            cartNum: 100,\n            totalPrice: 120043,\n        };\n    },\n});\n\nexport default chatStore;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u83b7\u53d6\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'\n<script setup>\n\nimport useChatStore from "../store/chat"\n\nconst chatStore=useChatStore();\n\n\n<\/script>\n\n<template>\n  <h1>\u5546\u54c1\u6570\u91cf:{{ chatStore.cartNum }}</h1>\n  <h1>\u5546\u54c1\u603b\u4ef7:{{ chatStore.totalPrice }}</h1>\n\n</template>\n\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u72b6\u6001\u66f4\u65b0")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4ec5\u4ec5\u5728\u4e00\u4e2a\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u6570\u636e\u66f4\u65b0\uff0c\u4ed3\u5e93\u4f1a\u81ea\u52a8\u540c\u6b65\u66f4\u65b0\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script setup>\n\nimport useChatStore from "../store/chat"\n\nlet chatStore=useChatStore();\n\n\n\nconst handleAdding=()=>{\n  chatStore.cartNum++;\n}\n\n\n<\/script>\n\n<template>\n  <h1>\u5546\u54c1\u6570\u91cf:{{ chatStore.cartNum }}</h1>\n  <h1>\u5546\u54c1\u603b\u4ef7:{{chatStore.totalPrice }}</h1>\n  <button @click="handleAdding">\u52a01</button>\n\n</template>\n\n<style scoped>\n')),(0,a.kt)("h3",{id:"23getters-\u5c5e\u6027"},"2.3.Getters \u5c5e\u6027"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Getter \u662f defineStore \u53c2\u6570\u914d\u7f6e\u9879\uff08State\u3001Getter\u3001Action\uff09\u91cc\u9762\u7684\u4e00\u4e2a\u5c5e\u6027\u3002Getter \u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u91cc\u9762\u662f\u5404\u79cd\u65b9\u6cd5\u3002\u6211\u4eec\u53ef\u4ee5\u628a Getter \u770b\u6210 Vue \u4e2d\u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ed3\u679c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u4ed3\u5e93 Getters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { defineStore } from "pinia";\n\nconst chatStore = defineStore("chat", {\n    state: () => {\n        return {\n            cartNum: 100,\n            totalPrice: 120043,\n            courseList: [\n                { name: "\u524d\u7aef\u5f00\u53d1", person: 300 },\n                { name: "Java\u5f00\u53d1", person: 500 },\n                { name: "golong", person: 120 },\n                { name: "CPP", person: 390 },\n                { name: "Python", person: 220 },\n                { name: "ios", person: 320 },\n            ],\n        };\n    },\n    getters: {\n        getHotCourse: (state) => {\n            let newList = state.courseList.filter((item) => {\n                return item.person >= 300;\n            });\n            return newList;\n        },\n    },\n});\n\nexport default chatStore;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u8c03\u7528 Getters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script setup>\n\nimport useChatStore from "../store/chat"\n\nlet chatStore=useChatStore();\nconst newList=chatStore.getHotCourse\n\n\n\n<\/script>\n\n<template>\n  <hr/>\n  <h1>\u70ed\u95e8\u8bfe\u7a0b</h1>\n  <ul>\n    <li v-for="(item,index) in newList">{{ item.name }}\u6709{{ item.person }}\u4eba</li>\n  </ul>\n  <hr/>\n\n</template>\n\n')),(0,a.kt)("h3",{id:"24actions-\u5c5e\u6027"},"2.4.Actions \u5c5e\u6027"),(0,a.kt)("admonition",{title:"\u7b80\u8981\u4e86\u89e3",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u524d\u9762\u63d0\u5230\u7684 State \u548c Getter \u5c5e\u6027\u90fd\u4e3b\u8981\u662f \u6570\u636e\u5c42\u9762\u7684\uff0c\u5e76\u6ca1\u6709\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\uff0c\u5b83\u4eec\u4e24\u4e2a\u5c31\u548c\u6211\u4eec\u7ec4\u4ef6\u4ee3\u7801\u4e2d\u7684 data \u6570\u636e\u548c computed \u8ba1\u7b97\u5c5e\u6027\u4e00\u6837\u3002\u5982\u679c\u6211\u4eec\u6709 \u4e1a\u52a1\u4ee3\u7801 \u7684\u8bdd\uff0c\u6700\u597d\u5199\u5728 Actions \u4e2d\uff0c\u8be5\u5c5e\u6027\u5c31\u548c\u6211\u4eec\u7ec4\u4ef6\u4ee3\u7801\u4e2d\u7684 methods \u76f8\u4f3c\uff0c\u7528\u6765\u653e\u7f6e\u4e00\u4e9b\u5904\u7406\u4e1a\u52a1\u903b\u8f91\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5f02\u6b65\u548c\u540c\u6b65\u7684\u903b\u8f91\u90fd\u53ef\u4ee5\u653e\u5230 Action \u4e2d")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u5199 Actions \u903b\u8f91")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import axios from "axios";\nimport { defineStore } from "pinia";\n\nconst chatStore = defineStore("chat", {\n    state: () => {\n        return {\n            orderList: [],\n        };\n    },\n    actions: {\n        getOrderList: async function (value) {\n            console.log(value); //\u83b7\u53d6\u7ec4\u4ef6\u7684\u4f20\u9012\u7684\u53c2\u6570\n            let data = await axios.get(\n                "https://mock.presstime.cn/mock/64a92865ace0545a9f40face/weapp/portroyal"\n            );\n            this.$state.orderList = data.data.listData;\n        },\n    },\n});\n\nexport default chatStore;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u4f7f\u7528")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script setup>\n\nimport useChatStore from "../store/chat"\n\nlet chatStore=useChatStore();\n\n\nconst handleGet=()=>{\n  chatStore.getOrderList("\u7b2c\u4e00\u7ec4\u4ef6\u70b9\u51fb\u4e86")\n}\n\n<\/script>\n\n<template>\n\n\n  <button @click="handleGet">\u83b7\u53d6orderlist\u7684\u6570\u636e</button>\n\n  <hr/>\n  <h1 >\u6570\u636e\u6570\u636e</h1>\n  <ul>\n    <li v-for="(item,index) in chatStore.orderList">{{ item.Title }}\u662f{{ item.Score }}\u5206 \uff0c\u6392{{ index+1 }}\u540d</li>\n  </ul>\n  <hr/>\n\n</template>\n')),(0,a.kt)("h3",{id:"25-\u6301\u4e45\u5316\u5b58\u50a8"},"2.5 \u6301\u4e45\u5316\u5b58\u50a8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add pinia-plugin-persistedstate\nor\nnpm i  pinia-plugin-persistedstate\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u5b9e\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createPinia } from "pinia";\nimport piniaPluginPersistedstate from "pinia-plugin-persistedstate";\nimport { createApp } from "vue";\nimport "../src/assets/main.css";\nimport App from "./App.vue";\n\nconst app = createApp(App);\nconst pinia = createPinia();\npinia.use(piniaPluginPersistedstate);\napp.use(pinia);\napp.mount("#app");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ed3\u5e93\u8fdb\u884c\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import axios from "axios";\nimport { defineStore } from "pinia";\n\nconst chatStore = defineStore("chat", {\n    //persist: true, //\u5168\u90e8\u6570\u636e\u5f00\u542f\u6301\u4e45\u5316\u5b58\u50a8\n\n    persist: {\n        key: "chatssss", //\u5b58\u50a8\u952e\u503c\u5bf9\u7684\u952e\u540d\u79f0\n        storage: window.localStorage, //\u5b58\u50a8\u65b9\u5f0f\n        paths: ["data2", "picData"], //\u9700\u8981\u5b58\u50a8\u7684\u6570\u636e(\u6309\u9700\u5b58\u50a8)\n    }, //\u90e8\u5206\u6570\u636e\u5f00\u542f\u6301\u4e45\u5316\u5b58\u50a8\n    state: () => {\n        return {\n            orderList: [],\n            data1: "2228",\n            data2: "866666335",\n            data3: "8765",\n            picData: 2222222,\n        };\n    },\n    actions: {\n        getOrderList: async function (value) {\n            console.log(value); //\u83b7\u53d6\u7ec4\u4ef6\u7684\u4f20\u9012\u7684\u53c2\u6570\n            let data = await axios.get(\n                "https://mock.presstime.cn/mock/64a92865ace0545a9f40face/weapp/portroyal"\n            );\n            this.$state.orderList = data.data.listData;\n        },\n    },\n});\n\nexport default chatStore;\n')))}m.isMDXComponent=!0}}]);