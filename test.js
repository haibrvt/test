// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://ipv4.webshare.io/*
// @downloadURL  https://raw.githubusercontent.com/haibrvt/test/main/test.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = "https://ipv4.webshare.io";
    var ipcheck=0;
    fetch(url)
        .then(function(response) {
        response.text().then(function(text) {
            ipcheck = text;
            getacc();
        });
    });
    function getacc() {
        //ip > mail > btc > eth > doge > ltc > bnb
        var vi = [
            ["a","b","b"],
            ["c","d","b"],
        ]
        //ip > acc
        var acc = [
            ["a","b"],
            ["c","d"],
        ]
        if (ipcheck == '115.73.10.42')
            alert(acc[0][1])
    }

    // Your code here...
})();
