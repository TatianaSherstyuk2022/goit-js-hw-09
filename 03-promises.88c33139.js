!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){var t={position:e,delay:n},o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e(t):r(t)}),n)}))}document.querySelector(".js-form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.target.elements.delay.value),t=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value),a=1;a<=o;a+=1)i(a,n).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t," ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t," ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.88c33139.js.map