(()=>{"use strict";console.log("background.js - Script Loaded");try{console.log("background.js - Adding Listener"),chrome.action.onClicked.addListener((o=>{console.log("background.js -  Inside chrome.action.onClicked"),chrome.scripting.executeScript({target:{tabId:o.id},files:["dist/client/betterMyEmailPlugin.js"]})}))}catch(o){console.error("Error: background.js- ",o)}let o={},e=chrome.runtime.getURL("config.json");fetch(e).then((o=>o.json())).then((e=>{o=e,chrome.storage.sync.set({config:o},(()=>{}))})).catch((o=>{console.error("background.js: Error Loading configuration- ",o)}))})();