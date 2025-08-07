// navigation.js

// Dynamically create and insert the site's navigation menu
const header = document.getElementById("top");

const nav = document.createElement("nav");
nav.innerHTML = `
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="links.html">Links</a></li>
    <li><a href="glossary.html">Glossary</a></li>
    <li><a href="survey.html">Survey</a></li>
  </ul>
`;

header.appendChild(nav);
