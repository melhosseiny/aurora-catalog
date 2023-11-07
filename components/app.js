import { installRouter } from "https://busy-dog-44.deno.dev/melhosseiny/sourdough/main/router.js";

const toTitleCase = function(s) {
  return s.replace(/-/g, ' ')[0].toUpperCase() +
    s.replace(/-/g, ' ').substr(1).toLowerCase();
}

const handleNavigation = function(location) {
  const path = decodeURIComponent(location.pathname);
  const page = path === '/' ? 'index' : path.slice(1);
  loadPage(page);
};

const index_tmpl = `<article>
  <h1 class='tagline'>
    Aurora design is a web component design system.
  </h1>
</article>`

const loadPage = async function(page) {
  switch(page) {
    case "index":
      document.title = "Aurora Design";
      document.querySelector("#main").innerHTML = index_tmpl;
      break;
    default:
      const doc = await import("/components/doc.js");
      document.title = `${toTitleCase(page)} - Aurora Design`;
      document.querySelector("#main").innerHTML = `<ac-doc id="${ page }"></ac-doc>`;
  }
}

installRouter((location) => handleNavigation(location));
