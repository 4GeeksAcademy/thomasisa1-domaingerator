/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "our", "my"];
const adjectives = ["great", "big", "little"];
const nouns = ["jogger", "racoon", "fox", "bear"];
const extensions = [".com", ".net", ".org"];

// Function to generate domain names
function generateDomains() {
  let domains = [];
  //Creating Domain Names
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let domain = pronoun + adjective + noun + extension;
          domains.push(domain);
        }
      }
    }
  }
  return domains;
}

let domains = generateDomains();
window.onload = function() {
  for (let domain of domains) {
    console.log(domain);
  }
};
