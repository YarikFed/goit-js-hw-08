!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=g();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?y(e):(i=o=void 0,u)}function T(){var e=g(),n=w(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),w=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]'),h="feedback-form-state",T=function(){var e={email:w.value,message:O.value};localStorage.setItem(h,JSON.stringify(e))};w.addEventListener("input",e(t)(T,500)),O.addEventListener("input",e(t)(T,500)),window.addEventListener("load",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);w.value=t.email,O.value=t.message}})),j.addEventListener("submit",(function(e){e.preventDefault();var t={email:w.value,message:O.value};console.log("Submitted Form Data:",t),localStorage.removeItem(h),w.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.4a55da52.js.map
