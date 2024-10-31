# Toast

Use a toast notification to give users timely, useful information they can understand at a glance.

## How to use

    <body>
      <ad-toast id="toast"></ad-toast>
      ...
      <script type="module">
        import { toast } from "https://busy-dog-44.deno.dev/melhosseiny/aurora/main/src/toast/toast.js";
      </script>
    </body>

## Component methods

<table>
  <thead>
    <th>name</th>
    <th></th>
  </thead>
  <tbody>
    <tr>
      <td><code>display(message, delay)</code></td>
      <td>display a toast for [delay] ms<td>
    </tr>
    <tr>
      <td><code>hide()</code></td>
      <td>hide a toast<td>
    </tr>
  <tbody>
</table>

## Demo

<button onclick="showToast()">Show toast</button>

    <button onclick="showToast()">Show toast</button>

    window.showToast = () => {
      document.querySelector('#toast').component.display("Hey there.");
    }
