// ==UserScript==
// @name        Digitally Imported Userscript
// @namespace   LTKDIFMU
// @version     2016.1.31
// @author      LethaK Maas
// @description Removes afk popup and minimize ads if possible
// @include     http://www.di.fm*
// @include     http://www.di.fm/*
// @downloadURL https://github.com/lethak/digitally_imported_userscript/raw/master/DIU.user.js
// @updateURL   https://github.com/lethak/digitally_imported_userscript/raw/master/DIU.meta.js
// @icon        http://i.imgur.com/7yj2PGY.png
// @grant       none
// ==/UserScript==
(function () {

setInterval(function(){

// AFK MUTE
di.app.timedAlerts.stop();

// Ads
//AudioAddict.WP.AdManager.providers = {}
//AudioAddict.Ad.adswizz = {};
AudioAddict.WP.wp.adManager.stop();
AudioAddict.webplayer.adblocks.gracePeriodTimer_.finish_();
AudioAddict.webplayer.adblocks.gracePeriodTimer_.stop();
AudioAddict.webplayer.adblocks.adEnd_();
AudioAddict.webplayer.adblocks.adBlockEnd();


// Ads panel
jQuery('#panel-ad > div.panel-header > div.icon-cross3.panel-close.icon').trigger('click');

},2000);

}) ()
