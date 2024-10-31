# Dialog

Use a dialog to helps users do a task that's closely related to what they are doing.

## How to use

    <body>
      <ad-dialog id="dialog"></ad-dialog>
      ...
      <script type="module">
        import { dialog } from "https://busy-dog-44.deno.dev/melhosseiny/aurora/main/src/dialog/dialog.js";
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
      <td><code>show()</code></td>
      <td>display a dialog<td>
    </tr>
    <tr>
      <td><code>close()</code></td>
      <td>hide a dialog<td>
    </tr>
  <tbody>
</table>

## Demo

<button onclick="showDialog()">Show dialog</button>

    <button onclick="showDialog()">Show dialog</button>

    window.showDialog = () => {
      console.log(document.querySelector('#dialog').component.show());
    }
