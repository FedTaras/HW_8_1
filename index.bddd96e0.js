var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("UDlvM"),s=n("eaDgj"),a=n("l5ICX"),i=n("c1Bmg");document.querySelector(".js_search");const l=document.querySelector(".js_list");var c;const d=null!==(c=JSON.parse(localStorage.getItem(r.common.FAVORITE_KEY)))&&void 0!==c?c:[];var u;const f=null!==(u=JSON.parse(localStorage.getItem(r.common.BASKET_KEY)))&&void 0!==u?u:[];function g(e){const t=Number(e.closest(".js_card").dataset.id);return i.instruments.find((({id:e})=>e===t))}(0,s.createMurkup)(i.instruments,l),l.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js_info")){const t=g(e.target);(0,a.createModal)(t),console.log(t)}if(e.target.classList.contains("js_favorite")){const t=g(e.target);if(d.some((({id:e})=>e===t.id)))return;d.push(t),localStorage.setItem(r.common.FAVORITE_KEY,JSON.stringify(d)),console.log(d)}if(e.target.classList.contains("js_basket")){const t=g(e.target);f.push(t),localStorage.setItem(r.common.BASKET_KEY,JSON.stringify(f))}}));
//# sourceMappingURL=index.bddd96e0.js.map
