function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var a,i,o,r,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,o=i;return a=i=void 0,l=t,r=e.apply(o,n)}function T(e){return l=e,u=setTimeout(w,t),c?b(e):r}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(x(e))return j(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function j(e){return u=void 0,p&&a?b(e):(a=i=void 0,r)}function O(){var e=v(),n=x(e);if(a=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),r}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,a=f=i=u=void 0},O.flush=function(){return void 0===u?r:j(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||r.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:a,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),T={emailInput:b.querySelector('input[name="email"]'),messageTextarea:b.querySelector('textarea[name="message"]')};b.addEventListener("input",e(t)((()=>{const e={email:T.emailInput.value,message:T.messageTextarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);T.emailInput.value=t.email,T.messageTextarea.value=t.message}})),b.addEventListener("submit",(e=>{e.preventDefault();const t={email:T.emailInput.value,message:T.messageTextarea.value};console.log(t),localStorage.removeItem("feedback-form-state"),T.emailInput.value="",T.messageTextarea.value=""}));
//# sourceMappingURL=03-feedback.4435e570.js.map
