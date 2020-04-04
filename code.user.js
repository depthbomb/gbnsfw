// ==UserScript==
// @name         Gamebanana NSFW Viewer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @icon         https://www.google.com/s2/favicons?domain=gamebanana.com
// @description  Autoviews NSFW content in Gamebanana submissions
// @author       depthbomb
// @match        *://gamebanana.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/depthbomb/gbnsfw/master/code.user.js
// @updateURL    https://raw.githubusercontent.com/depthbomb/gbnsfw/master/code.user.js
// ==/UserScript==

$.noConflict(true);

const unNsfw = () => {
    $("#NsfwWarningModule").slideUp();
    $("module.Invisible").removeClass("Invisible");
};

$(document).ready(unNsfw());
$(document).on("InitialPageReady PersistentNavReqComplete", function() {
    unNsfw();
});
