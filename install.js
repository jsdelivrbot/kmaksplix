// ==UserScript==
// @name         Splix.io Mod By KMak
// @description  It's lit bro
// @version      99.9.999
// @author       kmak
// @match        http://splix.io
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      splix.io
// @namespace 	 http://splix.io
// ==/UserScript==

var sc = document.createElement("SCRIPT");
sc.src = "https://rawgit.com/bobmcdouble3/kmaksplix/master/kmaksplix.js";
document.documentElement.appendChild(sc);