# React EmojiOne

## Usage

Install from npm

```bash
$ npm i -S react-emojione-menu emojione
```

### Basic Usage with png images

```javascript
import EmojiMenu from 'react-emojione-menu';

function sendEmoji(emoji) {
  send.emoji(emoji);
}

function MyComponent() {
  return (
    <EmojiMenu sendEmoji={sendEmoji} />
  );
}
```

See emojione's [documentation](http://git.emojione.com/demos/latest/jstoimage.html) for rendering emojis from strings.

### Advanced Usage with svg sprites

```javascript
import EmojiMenu from 'react-emojione-menu';
import emojione from 'emojione';

emojione.imageType = 'svg';
emojione.sprites = true;
emojione.imagePathSVGSprites = '/pathToSpriteSheet.svg';

function sendEmoji(emoji) {
  send.emoji(emoji);
}

function MyComponent() {
  return (
    <EmojiMenu
      sendEmoji={sendEmoji}
      svgSprites="/pathToSpriteSheet.svg"
    />
  );
}
```

See emojione's [documentation](http://git.emojione.com/demos/latest/sprites-svg.html) on using svg sprites and download link for the sprites.

The default color for active categories is `'#62B3EC'`, you can change this by passing your color as `activeColor` to `<EmojiMenu />`.

## Installation

### src

Install `node_modules` used in `./src`:

```
$ npm i
```

Compile `./src` with Babel:

```
$ npm run compile
```

### examples

Install `node_modules` used in `./examples`:

```
$ cd examples && npm i
```

## Development

### src

To watch for changes in `./src` run:

```
$ npm run watch
```

Babel will compile `./src` on changes.

### examples

To start the webpack server run:

```
$ cd examples && npm run start
```

Webpack wil compile on changes in `./examples/src`.

## Contributing

If you want to help with the development of this module and need to test your changes with the examples you can import `<EmojiMenu />` directly from `./dist`. Be sure to run `npm run compile` first.

```javascript
'./examples/src/app.js'

// Change this
import EmojiMenu from 'react-emojione-menu';

// to this
import EmojiMenu from '../../dist/index';
```

## License

This project is licensed under the terms of the [MIT license](https://github.com/anchorchat/react-emojione-menu/blob/master/LICENSE).
