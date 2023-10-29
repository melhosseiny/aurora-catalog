# Typography

This component applies practical elements from [Web Typography](https://book.webtypography.net) by *Richard Rutter*. 

## Use a basic reset to ensure consistency

    html, body, section, nav, article, aside, h1, h2, h3,
    h4, h5, h6, hgroup, header, footer, address, p, hr, pre,
    blockquote, ol, ul, li, dl, dt, dd, figure, figcaption,
    div, table, caption, form, fieldset {
      vertical-align: baseline;
      margin: 0;
      padding: 0;
    }

This removes margins and paddings from all block-level elements. I find this is more flexible than using [Eric Meyer's reset css](https://meyerweb.com/eric/tools/css/reset/).

## Turn on common ligatures, old-style numerals and kerning

    body {
      font-variant-ligatures: common-ligatures;
      font-variant-numeric: oldstyle-nums;
      font-kerning: normal;
    }

    h1, h2, h3, h4, h5, h6 {
      font-variant-numeric: lining-nums;
    }

Ligatures prevent unsightly clashes between adjacent letters,

<div style="font-family: 'Premiera'">
  <p style="color: green;">fight office flight piffle fjord</p>
  <p style="color: red; font-variant-ligatures: no-common-ligatures;">fight office flight piffle fjord</p>
</div>

while kerning adjusts space between them to improve readability.

<div style="font-family: 'Premiera'">
  <p>Alicia Vikander played <span style="color: green;">Ava</span> in Ex Machina.</p>
  <p style="font-kerning: none;">Alicia Vikander played <span style="color: red;">Ava</span> in Ex Machina.</p>
</div>

Both are usually turned on by default, but it's a good idea to explicitly turn them on in body text.

I use old-style numerals (lowercase numbers) to make sure numbers don't stand out in body text,

<div style="font-family: 'Premiera'">
  <p style="color: green;">Edvard Munch painted The Scream in 1938.</p>
  <p style="color: red; font-variant-numeric: lining-nums;">Edvard Munch painted The Scream in 1938.</p>
</div>

while lining numerals (uppercase numbers) sit more naturally in headings.

<div style="font-family: 'Premiera'">
  <h2 style="color: green; font-family: inherit">1994 Winter Olympics<h2>
  <h2 style="color: red; font-family: inherit; font-variant-numeric: oldstyle-nums;">1994 Winter Olympics</h2>
</div>

## Use proper subscripts `sub` and superscripts `sup`

    sub, sup { vertical-align: inherit; font-size: inherit; }
    sub { font-variant-position: sub; }
    sup { font-variant-position: super; }

<div style="font-family: 'Premiera'">
  <p style="color: green;">Caffeine<sup>1</sup> is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></p>
  <p style="color: red;">Water<sup style="vertical-align: super; font-size: smaller; font-variant-position: normal;">1</sup> is H<sub style="vertical-align: sub; font-size: smaller; font-variant-position: normal;">2</sub>O</p>
</div>

## Use real small caps for abbreviations `abbr`

    abbr {
      font-variant-caps: all-small-caps;
    }

<div style="font-family: 'Premiera'">
  <p style="color: green;"><abbr>EUR</abbr> is the currency of the <abbr>EU</abbr></p>
  <p style="color: red;"><abbr style="text-transform: none; font-variant-caps: normal; font-size: smaller;">EUR</abbr> is the currency of the  <abbr style="text-transform: none; font-variant-caps: normal; font-size: smaller;">EU</abbr></p>
</div>

## Set a comfortable reading measure (`38em`) for paragraphs `p` and blockquotes `blockquote`

    p, blockquote {
      max-width: 38em;
    }

### Turn on automatic hyphenation for `p`

    p {
      hyphens: auto;
      hyphenate-limit-zone: 8%;
      hyphenate-limit-last: always;
    }
    
`hyphenate-limit-zone` sets the maximum amount of space between the last word of a line and the edge of a paragraph to 8%, and `hyphenate-limit-last` set to `always` avoids hyphenating the last word of a paragraph.

<div style="font-family: 'Premiera'; display: flex; gap: 1em;">
  <p style="color: green;">On the whole art comes from one human being’s compulsion to communicate to another &mdash; All means are equally appropriate. In Painting as in literature one often confuses the means with the goal. Nature is the means not the goal. If one can achieve something by changing nature, then one must do so.</p>
  <p style="hyphens: none; color: red;">On the whole art comes from one human being’s compulsion to communicate to another &mdash; All means are equally appropriate. In Painting as in literature one often confuses the means with the goal. Nature is the means not the goal. If one can achieve something by changing nature, then one must do so.</p>
</div>

#### Limit hyphenation for the english language

    p:lang(en) {
      hyphenate-limit-lines: 2;
      hyphenate-limit-chars: 6 3 2;
    }

`hyphenate-limit-lines` limits the number of consecutive hyphenated lines to 2, and `hyphenate-limit-chars` sets the minimum character limit for a word to be hyphenated to 6, the minimum number of characters before the break to 3, and the minimum number of characters after the break to 2. 

<div style="font-family: 'Premiera'; display: flex; gap: 1em;">
  <p style="color: green;">In an intense state of mind, a landscape will make a certain impression on one. By depicting this landscape one will arrive at an image of one’s own mood. It is this mood that is the main thing. Nature is merely the means. Whether the picture resembles nature is irrelevant.</p>
  <p style="hyphenate-limit-chars: 5 2 2; color: red;">In an intense state of mind, a landscape will make a certain impression on one. By depicting this landscape one will arrive at an image of one’s own mood. It is this mood that is the main thing. Nature is merely the means. Whether the picture resembles nature is irrelevant.</p>
</div>

### Indent and italicize text in `blockquote`

    blockquote {
      margin-left: 1em;
    }

    blockquote p {
      font-style: italic;
    }

<blockquote style="font-family: Premiera;">
  <p style="color: green;">To explain a picture is impossible. It is precisely because one cannot explain it in any other way than it has been painted &mdash; One can only give a little hint of what one was aiming at.</p>
</blockquote>

<blockquote style="font-family: Premiera; margin-left: 0;">
  <p style="color: red; font-style: normal;">To explain a picture is impossible. It is precisely because one cannot explain it in any other way than it has been painted &mdash; One can only give a little hint of what one was aiming at.</p>
</blockquote>

#### Hang punctuation using `.quoted` class

    .quoted p {
      quotes: '“' '”' '‘' '’';
    }

    .quoted p:before {
      content: open-quote;
      margin-left: -0.83ch; /* adjust */
    }

    .quoted p:after {
      content: close-quote;
    }

<blockquote style="font-family: Premiera;" class="quoted">
  <p style="color: green;">I was walking along the road with two friends when the sun went down. The sky suddenly turned to blood and I felt a great scream in nature.</p>
  <footer>&mdash; Edvard Munch, in <cite>The Tree of Knowledge and Evil. Sketchbook.</cite>, 1930&mdash;1935</footer>
</blockquote>

<blockquote style="font-family: Premiera;">
  <p style="color: red;">“I was walking along the road with two friends when the sun went down. The sky suddenly turned to blood and I felt a great scream in nature.”</p>
  <footer>&mdash; Edvard Munch, in <cite>The Tree of Knowledge and Evil. Sketchbook.</cite>, 1930&mdash;1935</footer>
</blockquote>

## Treat lists as part of the text

    ul, ol { margin-bottom: 1em; }
    p:has(+ul), p:has(+ol), ul:has(+p), ol:has(+p) { margin-bottom: 0.5em; }
    li ul, li ol { margin-bottom: 0; }
    ul { padding-left: 1em; }
    ol { padding-left: revert; }

<div style="font-family: 'Premiera'; display: flex; gap: 1em;">
  <div style="color: green;">
    <p>First-year students will require</p>
    <ul>
      <li>Uniform
        <ol start="100">
          <li>Three sets of plain work robes (black)</li>
          <li>One plain pointed hat (black) for day wear</li>
          <li>One pair of protective gloves (dragon hide or similar)</li>
          <li>One winter cloak (black, silver fastenings)</li>
        </ol>
      </li>
      <li>Other Equipment
        <ul>
          <li>1 wand</li>
          <li>1 cauldron (pewter, standard size 2)</li>
          <li>1 set glass or crystal phials</li>
          <li>1 telescope</li>
          <li>1 set brass scales</li>
        </ul>
      </li>
    </ul>
    <p>Please note that all pupils’ clothes should carry name tags</p>
  </div>
  <div style="color: red;">
    <p>First-year students will require</p>
    <ul style="padding-left: 40px; margin-top: 1em; margin-bottom: 1em;">
      <li>Uniform
        <ol start="100" class="reset">
          <li>Three sets of plain work robes (black)</li>
          <li>One plain pointed hat (black) for day wear</li>
          <li>One pair of protective gloves (dragon hide or similar)</li>
          <li>One winter cloak (black, silver fastenings)</li>
        </ol>
      </li>
      <li>Other Equipment
        <ul style="padding-left: 40px;">
          <li>1 wand</li>
          <li>1 cauldron (pewter, standard size 2)</li>
          <li>1 set glass or crystal phials</li>
          <li>1 telescope</li>
          <li>1 set brass scales</li>
        </ul>
      </li>
    </ul>
    <p>Please note that all pupils’ clothes should carry name tags</p>
  </div>
</div>

## Remove underline from links except when they're hovered or active and skip descenders

    a, a:link, a:visited, a:hover, a:active {
      text-decoration: none;
    }

    a:hover, a:active {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }

<a href="#" style="color: green;">Bergen<a>

<a href="#" style="color: red; text-decoration: underline; text-decoration-skip-ink: none;">Bergen<a>
