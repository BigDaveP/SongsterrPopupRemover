// ==UserScript==
// @name         Songsterr popup remover
// @namespace    http://tampermonkey.net/
// @version      2024-12-18
// @description  Remove the popups that appear on the music tab when playing it
// @author       David Pigeon
// @match        https://www.songsterr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=songsterr.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function removePopup() {
    const classNames = ["Cip2pk", "rq25k", "Cto1rx", "D5an6"];
    classNames.forEach((className) => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach((el) => el.remove());
    });
  }

  const observer = new MutationObserver(() => {
    console.log("Removing popup..."); // For debug purpose
    removePopup();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  removePopup();
})();
