import { html, state, web_component, define_component } from "https://busy-dog-44.deno.dev/melhosseiny/sourdough/main/sourdough.js";

const template = (data) => html`
  <article ref="markup lang" class="${data.id}">
    ${ data.markup }
  </article>
`

const style = `
  article {
    max-width: 38em;
    padding: 1em;
    background-color: #fff;
    border-radius: 7px;
  }

  pre {
    margin-bottom: var(--line-height-body);
    background-color: #eee;
    padding: 0.5em;
    overflow: auto;
  }

  table {
    margin-bottom: var(--line-height-body);
  }
`

export function doc(spec) {
  let { _root } = spec;
  const _web_component = web_component(spec);
  const _state = _web_component.state;

  const fetch_doc = async () => {
    try {
      document.querySelector("#progress").component.show();

      const response = await fetch(`/doc/${spec.id}.html`);
      if (response.status === 404) { throw 'Page not found' }
      const note = await response.text();

      _state.markup = note;
    } catch (error) {
      console.log(error);
      document.title = `${error} - Aurora Design`;
    } finally {
      document.querySelector("#progress").component.hide();
    }
  }

  const init = () => {
    fetch_doc();
  }

  return Object.freeze({
    ..._web_component,
    init
  })
}

define_component({
  name: "ac-doc",
  component: doc,
  template,
  style,
  props: ["id"]
});
