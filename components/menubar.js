import { html, state, web_component, define_component } from "sourdough";

const template = (data) => html`
  <nav id="menubar">
    <h1 class="type--body">
      <span class="logo">
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="90" height="90" fill="white"/>
          <mask id="mask0_126_10" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="90">
          <rect width="90" height="90" fill="white"/>
          </mask>
          <g mask="url(#mask0_126_10)">
          <path d="M45 42L391.41 0H-301.41L45 42Z" fill="#00FFFF"/>
          <path d="M45 48L356.769 90H-266.769L45 48Z" fill="#00FFFF"/>
          </g>
        </svg>
      </span>
      <a class="base" href="/">Aurora Design</a>
    </h1>
    <nav class="menuitem">Components
      <menu>
        <li><a class="button" href="/button">Button</a></li>
        <li><a class="button" href="/toast">Toast</a></li>
        <li><a class="button" href="/dialog">Dialog</a></li>
        <li><a class="button" href="/card">Card</a></li>
        <li><a class="button" href="/carousel">Carousel</a></li>
        <li><a class="button" href="/media_grid">Media Grid</a></li>
      </menu>
    </nav>
    <nav class="menuitem">Stylesheets
      <menu>
        <li><a class="button" href="/typography">Type</a></li>
        <li><a class="button" href="/rhythm">Rhythm</a></li>
      </menu>
    </nav>
    <!--nav class="menuitem">Edit
      <menu>
        <li><button onclick="copy()">Copy</button></li>
        <li><button onclick="cut()">Cut</button></li>
        <li><button onclick="paste()">Paste</button></li>
      </menu>
    </nav-->
  </nav>
`

const style = `
  :host {
    display: block;
  }

  a.base:visited {
    color: rgb(var(--background-color));
  }

  h1 {
    display: flex;
    align-items: center;
  }

  h1 .base {
    font-weight: bold;
    color: rgb(var(--background-color));
  }

  .logo {
    display: block;
    width: var(--line-height-body);
    height: var(--line-height-body);
    margin-right: 8px;
  }

  #menubar {
    display: flex;
    gap: 4px;
    padding: 4px 1em;
    align-items: center;
  }

  #menubar h1 {
    margin-bottom: 0;
  }

  .menuitem {
    position: relative;
    padding-left: 13px;
    padding-right: 13px;
    height: var(--line-height-body);
    cursor: pointer;
  }

  .menuitem:hover {
    background-color: rgb(var(--background-color));
    color: rgb(var(--text-color));
  }

  menu {
    display: none;
    flex-direction: column;
    background-color: rgb(var(--text-color));
    position: absolute;
    top: 5px;
    left: 0;
    list-style: none;
    padding: 4px;
  }

  .menuitem:hover menu {
    display: flex;
  }

  li {
    flex-grow: 1;
  }

  menu button, menu a.button, menu a.button:not(:link) {
    --opacity-enabled: transparent;
    color: rgb(var(--background-color));
    justify-content: start;
    display: flex;
    width: 100%;
  }

  menu button:hover, menu a.button:hover {
    transition: none;
  }
`

export function menubar(spec) {
  let { _root } = spec;
  const _web_component = web_component(spec);
  const _state = state(spec);

  const init = () => {
  }

  return Object.freeze({
    ..._web_component,
    init
  })
}

define_component({
  name: "ad-menubar",
  component: menubar,
  template,
  style
});

