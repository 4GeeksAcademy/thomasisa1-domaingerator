/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our", "my"];
let adjectives = ["great", "big", "little"];
let nouns = ["jogger", "racoon", "fox", "bear"];
let extensions = [".com", ".net", ".org"];

// Function to generate domain names
function generateDomains(pronouns, adjectives, nouns, extensions) {
  let domains = [];
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let ext = 0; ext < extensions.length; ext++) {
          let domain = pronouns[i] + adjectives[j] + nouns[k] + extensions[ext];
          domains.push(domain);
        }
      }
    }
  }
  return domains;
}

let domains = generateDomains(pronouns, adjectives, nouns, extensions);
window.onload = function() {
  for (let i = 0; i < domains.length; i++) {
    console.log(domains[i]);
  }
};
