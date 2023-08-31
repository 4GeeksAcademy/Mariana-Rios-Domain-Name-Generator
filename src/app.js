/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];
  let domainList = "";
  pronoun.forEach(function(pnoun) {
    adj.forEach(function(adjective) {
      noun.forEach(function(Noun) {
        extensions.forEach(function(ext) {
          domainList = `${domainList}${pnoun}${adjective}${Noun}${ext} <br>`;
        });
      });
    });
  });
  document.getElementById("domains").innerHTML = domainList;
};
