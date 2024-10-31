import { html, state, web_component, define_component } from "sourdough";

const template = (data) => html`
  <div class="grid">
    <a class="teaser" href="/button">
      <ad-card title-label="Button" subtitle-label="Normalize button, link button, and input button.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-button&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/toast">
      <ad-card title-label="Toast" subtitle-label="Give timely, useful info at a glance.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-toast&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/dialog">
      <ad-card title-label="Dialog" subtitle-label="Do a task related to what you are doing.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-dialog&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/card">
      <ad-card title-label="Card" subtitle-label="Display content and actions on a single topic.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-card&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/carousel">
      <ad-card title-label="Carousel" subtitle-label="Display a scrollable collection of items.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-carousel&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/media_grid">
      <ad-card title-label="Media grid" subtitle-label="VSCO-like masonry grid.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">&lt;ad-media-grid&gt;</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/typography">
      <ad-card title-label="Typography" subtitle-label="Apply practical web typography.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">type.css</div>
        </div>
      </ad-card>
    </a>
    <a class="teaser" href="/rhythm">
      <ad-card title-label="Rhythm" subtitle-label="Establish a vertical rhythm.">
        <div class="fake-picture" slot="media">
          <div class="fake-img">rhythm.css</div>
        </div>
      </ad-card>
    </a>
  </div>
`

const style = `
  :host {
    display: block;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: dense;
    grid-gap: 30px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 60em) {
    .grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  /* cards */
  a.teaser, a.teaser:link, a.teaser:visited, a.teaser:hover, a.teaser:active {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  ad-card {
    display: block;
    width: 100%;
  }

  ad-card::part(title) {
    font-family: var(--type-display);
    font-weight: bold;
    white-space: normal;
  }

  ad-card::part(text) {
    font-weight: 300;
  }

  .fake-picture {
    border: 1px solid black;
  }

  .fake-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: var(--type-mono);
    font-weight: bold;
    font-size: 36px;
    aspect-ratio: 16 / 9;
    color: black;
    border-radius: calc(2 * var(--border-radius));
    transition: transform 400ms cubic-bezier(0.4, 0, 0.25, 1) 0ms, opacity 1s cubic-bezier(0.4, 0, 0.25, 1) 0ms;
  }

  a.teaser:hover ad-card img {
    transform: scale(1.03);
  }
  a.teaser:hover ad-card .fake-img {
    transform: scale(1.1);
  }
`

export function catalog(spec) {
  let { _root } = spec;
  const _web_component = web_component(spec);

  const init = () => {
  }

  return Object.freeze({
    ..._web_component,
    init
  })
}

define_component({
  name: "ac-catalog",
  component: catalog,
  template,
  style
});

