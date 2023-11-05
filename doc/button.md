# Button

Normalize `button`, `a.button` and `input[type="button"]` buttons.

## How to use


    <link rel="stylesheet" href="https://busy-dog-44.deno.dev/melhosseiny/aurora/main/src/button/button.css" crossorigin="anonymous">

## Props

<table>
  <thead>
    <th>name</th>
    <th>default value</th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td><code>--button-color</code></td>
      <td><code>--accent-color</code></td>
      <td>button color<td>
    </tr>
    <tr>
      <td><code>--opacity-enabled</code></td>
      <td>1</td>
      <td>alpha value for enabled button<td>
    </tr>
    <tr>
      <td><code>--opacity-disabled</code></td>
      <td>0.32</td>
      <td>alpha value for disabled buttton<td>
    </tr>
    <tr>
      <td><code>--opacity-hover</code></td>
      <td>0.76</td>
      <td>alpha value on button hover<td>
    </tr>
    <tr>
      <td><code>--opacity-active</code></td>
      <td>0.38</td>
      <td>alpha value on click and hold<td>
    </tr>
  <tbody>
</table>

## Demo

<button>Button</button>
<a class="button" href="#">Button</a>
<input type="button" value="Button"> and not a button

<button disabled>Button</button>
<a class="button">Button</a>
<input disabled type="button" value="Button">

```
<button>Button</button>
<a class="button" href="#">Button</a>
<input type="button" value="Button"> and not a button

<button disabled>Button</button>
<a class="button">Button</a>
<input disabled type="button" value="Button">
```
