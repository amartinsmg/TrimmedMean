(()=>{"use strict";var e={636:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trimmedMean=void 0,t.trimmedMean=function(e,t){const r=Math.round(e.length*t/100),n=e.sort(((e,t)=>e-t));if(r>=n.length)throw new Error(`The number of elements to be trimmed (${r}) is greater than or equal to the length of the array (${n.length}).`);return function(e){if(0==e.length)throw new Error("Insert an array with at least one number.");return e.reduce(((e,t)=>e+t),0)/e.length}(n.slice(r,n.length-r))}},698:(e,t,r)=>{r.r(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{r(698);const e=r(636);window.addEventListener("load",(function(){const t=document.querySelector("#input-form"),r=document.querySelector("#numbers-input"),n=document.querySelector("#percentage-input"),o=document.querySelector("#out");t.addEventListener("submit",(t=>{t.preventDefault();const a=r.value.split(/\s*,\s*/).map((e=>parseFloat(e))).filter((e=>!isNaN(e))),u=parseFloat(n.value);try{const t=(0,e.trimmedMean)(a,u);o.textContent=1e6*t%0?t.toFixed():t.toFixed(6)}catch(e){o.textContent=e instanceof Error?e.message:String(e)}}))}))})()})();