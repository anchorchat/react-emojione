import React, { Component } from 'react';
import emojione from 'emojione';
import EmojiMenu from '../../dist/index';
import './app.css';

emojione.imageType = 'svg';
emojione.sprites = true;
emojione.imagePathSVGSprites = '/emojione.svg';

class App extends Component {
  static createMarkup(shortname) {
    return {
      __html: emojione.toImage(shortname)
    };
  }

  constructor() {
    super();

    this.state = {
      emoji: ''
    };

    this.sendEmoji = this.sendEmoji.bind(this);
  }

  sendEmoji(emoji) {
    this.setState({
      emoji: emoji.shortname
    });
  }

  render() {
    return (
      <section className="demo">
        <h1>
          <a
            href="https://github.com/anchorchat/react-emojione"
            target="_blank"
            rel="noopener noreferrer"
          >
            React EmojiOne
          </a>
        </h1>
        <div dangerouslySetInnerHTML={App.createMarkup(this.state.emoji)} />
        <EmojiMenu svgSprites="/emojione.svg" sendEmoji={this.sendEmoji} activeColor="#62B3EC" />
      </section>
    );
  }
}

export default App;
