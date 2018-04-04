# minichalk

Minimal and tree-shake-able alternative to [chalk](https://github.com/chalk/chalk)
for coloring cli output.

## Installation

```bash
# npm
npm install --dev @marvinh/minichalk

# yarn
yarn add -D @marvinh/minichalk
```

## Usage

```js
import { red } from "@marvinh/minichalk";

console.log(red("Hello World"));
// logs (colorized in red on terminals that do support colors):
// -> "Hello World"
```

## License

`MIT`, see [LICENSE file](./LICENSE.md).
