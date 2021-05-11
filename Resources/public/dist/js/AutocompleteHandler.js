class AutocompleteHandler{constructor(e,t={},s,o={},n={}){this.inputField=e,this.objFunctions=t,this.cssId=s,this.objSettings=o,this.containerAddresses=n}setCenter(e){this.objSettings.center=e}handleInput(){const o=this;this.inputField.autocomplete({source:this.containerAddresses.arrNames});let t=function(t,s){if(s=s||o,13===t.keyCode)s.objFunctions.submitFunction(t.currentTarget,t.currentTarget.classList[0]);else if(!(8===t.keyCode||37<=t.keyCode&&t.keyCode<=40||9===t.keyCode))if(0!=$(t.currentTarget).val().length||t.keyCode){var e=Math.floor(Date.now());s.counter=e,setTimeout(function(){s.counter&&s.counter+400<Math.floor(Date.now())&&(delete s.counter,s.autocompleteAddress($(t.currentTarget).val(),"."+t.currentTarget.classList[0]))},500)}else{s.objFunctions.deleteFunction(t.currentTarget,t.currentTarget.classList[0]);let e=t.currentTarget.classList[0];-1!=e.indexOf("from")?(s.containerAddresses.arrFromPositions=[],s.containerAddresses.arrFromPositions=[]):-1!=e.indexOf("to")?(s.containerAddresses.arrToNames=[],s.containerAddresses.arrToPositions=[]):console.log("This is weird")}};this.inputField.on("keydown",e=>t(e,o)),this.inputField.on("search",t),this.inputField.on("autocompleteselect",this.objFunctions.selectListener),this.inputField.on("change",this.objFunctions.changeListener)}autocompleteAddress(e,i){const a=this;let t;var s;a.objSettings.center?t="function"==typeof a.objSettings.center?(s=a.objSettings.center())[0]+","+s[1]:a.objSettings.center[0]+","+a.objSettings.center[1]:a.objSettings.bBox&&(t=(parseFloat(a.objSettings.bBox[0])+parseFloat(a.objSettings.bBox[2]))/2+","+(parseFloat(a.objSettings.bBox[1])+parseFloat(a.objSettings.bBox[3]))/2);let o;if(o=t?a.objSettings.proxyUrl+"autocomplete.php?format=json&key="+a.objSettings.keyAutocomplete+"&q="+e+"&center="+t:a.objSettings.proxyUrl+"autocomplete.php?format=json&key="+a.objSettings.keyAutocomplete+"&q="+e,this.objSettings.autoLength&&(o+="&limit="+this.objSettings.autoLength),this.objSettings.geosearchParams)for(var n in this.objSettings.geosearchParams)this.objSettings.geosearchParams.hasOwnProperty(n)&&(o+="&"+n+"="+this.objSettings.geosearchParams[n]);$.ajax({url:o}).done(function(t){let s;if(a.objSettings.center?s=a.objSettings.center:a.objSettings.bBox&&(s=[(parseFloat(a.objSettings.bBox[0])+parseFloat(a.objSettings.bBox[2]))/2,(parseFloat(a.objSettings.bBox[1])+parseFloat(a.objSettings.bBox[3]))/2]),0<t.length){if(t[0]&&t[0].display_name&&s){let e=[];for(var o in t)t.hasOwnProperty(o)&&a.objSettings.bBox&&a.objSettings.bBox[0]&&a.isInBoundingBox(t[o].lon,t[o].lat,a.objSettings.bBox)&&(o={dist:Math.sqrt((s[0]-t[o].lon)*(s[0]-t[o].lon)+(s[1]-t[o].lat)*(s[1]-t[o].lat)),pos:[t[o].lat,t[o].lon],name:t[o].display_name},e.push(o));for(var n in e.sort((e,t)=>e.dist-t.dist),e)e.hasOwnProperty(n)&&(-1!=i.indexOf("from")?a.containerAddresses.arrFromNames.includes(e[n].name)||(a.containerAddresses.arrFromNames.push(e[n].name),a.containerAddresses.arrFromPositions.push(e[n].pos)):-1!=i.indexOf("to")?a.containerAddresses.arrToNames.includes(e[n].name)||(a.containerAddresses.arrToNames.push(e[n].name),a.containerAddresses.arrToPositions.push(e[n].pos)):console.log("This is weird"));var r=jQuery.Event("keydown",{keyCode:8});$(i).trigger(r)}for(var e in t)t.hasOwnProperty(e)&&(-1!=i.indexOf("from")?a.containerAddresses.arrFromNames.includes(t[e].display_name)||(a.containerAddresses.arrFromNames.push(t[e].display_name),a.containerAddresses.arrFromPositions.push([t[e].lat,t[e].lon])):-1!=i.indexOf("to")?a.containerAddresses.arrToNames.includes(t[e].display_name)||(a.containerAddresses.arrToNames.push(t[e].display_name),a.containerAddresses.arrToPositions.push([t[e].lat,t[e].lon])):console.log("This is weird"));r=jQuery.Event("keydown",{keyCode:8});$(i).trigger(r)}})}isInBoundingBox(e,t,s){return"string"==typeof e&&(e=parseFloat(e)),"string"==typeof t&&(t=parseFloat(t)),s[0]<e&&e<s[2]&&s[1]<t&&t<s[3]}}export{AutocompleteHandler};