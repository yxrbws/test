(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({"cart~category~home~login~product~user":"cart~category~home~login~product~user",cart:"cart",category:"category",home:"home",login:"login",product:"product",user:"user","product-list":"product-list"}[e]||e)+"."+{"cart~category~home~login~product~user":"9646277f",cart:"7e24dc6e",category:"a0a4674f",home:"8c9d20dd",login:"6f78ed5c",product:"b11e542f",user:"56066e35","product-list":"195843c4"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={cart:1,category:1,home:1,login:1,product:1,user:1,"product-list":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({"cart~category~home~login~product~user":"cart~category~home~login~product~user",cart:"cart",category:"category",home:"home",login:"login",product:"product",user:"user","product-list":"product-list"}[e]||e)+"."+{"cart~category~home~login~product~user":"31d6cfe0",cart:"ad968062",category:"e51eeb99",home:"d62e8805",login:"a5b55053",product:"5dbc3ec8",user:"b5b9edd9","product-list":"bca31493"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===n||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3ea3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2ca0");var n=r("7a23"),o={id:"app"};function a(e,t,r,a,c,u){var i=Object(n["G"])("router-view");return Object(n["y"])(),Object(n["f"])("div",o,[Object(n["i"])(i,null,{default:Object(n["P"])((function(t){var r=t.Component;return[Object(n["i"])(n["c"],{name:e.transitionName},{default:Object(n["P"])((function(){return[(Object(n["y"])(),Object(n["f"])(Object(n["H"])(r)))]})),_:2},1032,["name"])]})),_:1})])}var c=r("5530"),u=r("6c02"),i={setup:function(){var e=Object(u["d"])(),t=Object(n["C"])({transitionName:"slide-left"});return e.beforeEach((function(e,r){e.meta.index>r.meta.index?t.transitionName="slide-left":e.meta.index<r.meta.index?t.transitionName="slide-right":t.transitionName=""})),console.log(e),Object(c["a"])({},Object(n["K"])(t))}};r("93a9");i.render=a;var s=i,d=r("a18c"),l=r("5502"),p={cartCount:0},f={addCart:function(e,t){e.cartCount=t.count,console.log("payload",t),console.log("count",e.cartCount)}},m=r("1da1"),g=(r("96cf"),r("da71")),h={updateCart:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["c"])();case 2:r=t.sent,n=r.data,console.log("store",n),e.commit("addCart",{count:n.length||0});case 6:case"end":return t.stop()}}),t)})))()}},b=Object(l["a"])({state:p,mutations:f,actions:h,modules:{}}),y=r("ad06"),v=r("5596"),j=r("2bb1"),O=r("c36e"),w=r("7d5e"),P=r("565f"),C=r("b650"),x=r("772a"),k=r("20fb"),_=r("417e"),E=r("3acc"),N=r("efa0"),S=r("2bdd"),T=r("0b33"),L=r("5e46"),A=r("a792"),M=r("a3f9"),R=r("d3d4"),q=r("58e6"),B=(r("499a"),r("157a"),Object(n["e"])(s));B.config.globalProperties.$filters={prefix:function(e){return e&&e.startsWith("http")||(e="http://backend-api-01.newbee.ltd".concat(e)),e}},B.use(d["a"]),B.use(b),B.use(y["a"]).use(v["a"]).use(j["a"]).use(O["a"]).use(w["a"]).use(P["a"]).use(C["a"]).use(x["a"]).use(k["a"]).use(_["a"]).use(E["a"]).use(N["a"]).use(S["a"]).use(T["a"]).use(L["a"]).use(A["a"]).use(M["a"]).use(R["a"]).use(q["a"]),B.mount("#app")},"93a9":function(e,t,r){"use strict";r("3ea3")},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0");var n=r("6c02"),o=Object(n["a"])({history:Object(n["b"])(),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([r.e("cart~category~home~login~product~user"),r.e("home")]).then(r.bind(null,"4570"))}},{path:"/login",name:"login",component:function(){return Promise.all([r.e("cart~category~home~login~product~user"),r.e("login")]).then(r.bind(null,"4009"))}},{path:"/category",name:"category",component:function(){return Promise.all([r.e("cart~category~home~login~product~user"),r.e("category")]).then(r.bind(null,"d48b"))}},{path:"/cart",name:"cart",component:function(){return Promise.all([r.e("cart~category~home~login~product~user"),r.e("cart")]).then(r.bind(null,"12e2"))},meta:{index:1}},{path:"/user",name:"user",component:Promise.all([r.e("cart~category~home~login~product~user"),r.e("user")]).then(r.bind(null,"7aca"))},{path:"/product/:id",name:"product",component:function(){return Promise.all([r.e("cart~category~home~login~product~user"),r.e("product")]).then(r.bind(null,"dcf8"))},meta:{index:3}},{path:"/product-list",name:"product-list",component:function(){return r.e("product-list").then(r.bind(null,"4ddc"))},meta:{index:2}}]});t["a"]=o},da71:function(e,t,r){"use strict";r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return l})),r.d(t,"k",(function(){return p})),r.d(t,"a",(function(){return f})),r.d(t,"i",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return y})),r.d(t,"j",(function(){return v}));var n=r("53ca"),o=(r("d3b7"),r("bc3a")),a=r.n(o),c=r("626a"),u=r("a18c");a.a.defaults.baseURL="http://backend-api-01.newbee.ltd/api/v1",a.a.defaults.withCredentials=!0,a.a.defaults.headers["X-Requested-With"]="XMLHttpRequest",a.a.defaults.headers["token"]=localStorage.getItem("token")||"",a.a.defaults.headers.post["Content-Type"]="application/json",a.a.interceptors.response.use((function(e){return"object"!==Object(n["a"])(e.data)?(c["a"].fail("服务端异常!"),Promise.reject(e)):200!=e.data.resultCode?(e.data.message&&c["a"].fail(e.data.message),416==e.data.resultCode&&u["a"].push({path:"/login"}),Promise.reject(e.data)):e.data}));var i=a.a;function s(){return i.get("/index-infos")}function d(){return i.get("/categories")}function l(e){return i.get("/goods/detail/".concat(e))}function p(e){return i.get("/search",{params:e})}function f(e){return i.post("/shop-cart",e)}function m(e){return i.put("/shop-cart",e)}function g(e){return i.get("/shop-cart",{params:e})}function h(e){return i.delete("/shop-cart/".concat(e))}function b(){return i.get("/user/info")}function y(e){return i.post("/user/login",e)}function v(e){return i.post("/user/register",e)}}});
//# sourceMappingURL=app.87f0bc04.js.map