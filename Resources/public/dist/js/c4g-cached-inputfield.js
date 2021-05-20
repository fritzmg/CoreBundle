class CachedInputfield{constructor(e,s,t){if(this.cacheKey=t,this.inputField=jQuery(e),this.inputField){this.suggestions=this.loadValues(),this.inputField.autocomplete({source:this.suggestions,delay:0});const i=this;s&&jQuery(this.inputField).on("change",function(){i.storeValue(jQuery(this).val())}),jQuery(this.inputField).on("input",function(){var e=i.loadValues();jQuery(this).autocomplete("option","source",e)})}else console.warn("The given CSS selector matches no DOM element...")}getCacheKey(){return this.cacheKey}storeValue(e){e&&!this.suggestions.includes(e)&&(this.suggestions.push(e),this.inputField.autocomplete("option","source",this.suggestions),this.serializeValues())}serializeValues(){window.localStorage.setItem(this.getCacheKey(),JSON.stringify(this.suggestions))}loadValues(){const e=window.localStorage;var s=e.getItem(this.getCacheKey());return s?(this.suggestions=JSON.parse(s),this.suggestions||(this.suggestions=[])):this.suggestions=[],this.suggestions}}export{CachedInputfield};