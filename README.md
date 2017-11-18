Babel plugin to enable importing CSS files as emotion style declarations.

_Very, very alpha!_

Idea is that given:

```css
/* style.css */

p {
	line-height: 1.5;
}
.red {
	color: red;
}
```
you could import it like this:
```js
// index.js

import './styles.css';

```
which is then transformed to:

```js
// index.js

import { css, injectGlobal } from 'emotion';
injectGlobal`
    p {
        color: blue;
    }
`;
const red = css`
    color: red;
`;

```

It uses https://github.com/brikou/CSS-in-JS-generator to make the transformation.
