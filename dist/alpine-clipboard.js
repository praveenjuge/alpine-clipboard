const e={start(){if(!window.Alpine)throw new Error("Alpine is required for `alpine-clipboard` to work.");Alpine.addMagicProperty("clipboard",()=>function(e){let n=e;if("function"==typeof n)n=n();else if("string"!=typeof n)try{n=JSON.stringify(n)}catch(e){console.warn(e)}const t=document.createElement("textarea");if(t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(t),navigator.userAgent&&navigator.userAgent.match(/ipad|ipod|iphone/i)){t.contentEditable=!0,t.readOnly=!0;const e=document.createRange();e.selectNodeContents(t);const n=window.getSelection();n.removeAllRanges(),n.addRange(e),t.setSelectionRange(0,999999)}else t.select();try{document.execCommand("copy")}catch(e){console.warn(err)}document.body.removeChild(t)})}},n=window.deferLoadingAlpine||(e=>e());window.deferLoadingAlpine=function(t){e.start(),n(t)},module.exports=e;
//# sourceMappingURL=alpine-clipboard.js.map
