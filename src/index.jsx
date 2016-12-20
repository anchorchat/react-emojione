import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'underscore';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';
import Storage from './storage';

const storage = new Storage();

class EmojiMenu extends Component {
  static propTypes = {
    svgSprites: PropTypes.string,
    sendEmoji: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    if (props.svgSprites) {
      emojione.imageType = 'svg';
      emojione.sprites = true;
      emojione.imagePathSVGSprites = props.svgSprites;
    }

    const storedEmojis = storage.getEmojis();

    this.state = {
      tone: 'tone0',
      storedEmojis: storedEmojis || []
    };

    this.changeTone = this.changeTone.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  sendEmoji(emoji) {
    const { sendEmoji } = this.props;

    storage.storeEmoji(emoji);
    sendEmoji(emoji);

    const storedEmojis = storage.getEmojis();

    this.setState({
      storedEmojis: storedEmojis || []
    });
  }

  render() {
    const { tone, storedEmojis } = this.state;

    const categories = [
      'people',
      'nature',
      'food',
      'activity',
      'travel',
      'objects',
      'flags',
      'symbols'
    ];

    const modifiers = _.where(emojis, { category: 'modifier' });

    return (
      <section className="emoji-menu">
        <EmojiModifiers modifiers={modifiers} changeTone={this.changeTone} tone={tone} />
        <section className="emoji-categories">
          {
            storedEmojis.length > 0
            ? <EmojiCategory
              emojis={storedEmojis}
              category="recent"
              sendEmoji={this.sendEmoji}
            />
            : null
          }
          {_.map(categories, (category) => {
            const filteredEmoji = _.chain(emojis).where({ category }).filter((emoji) => {
              if (emoji.title.includes('tone')) {
                return emoji.title.includes(tone);
              }

              return true;
            }).value();

            return (
              <EmojiCategory
                key={category}
                emojis={filteredEmoji}
                category={category}
                sendEmoji={this.sendEmoji}
              />
            );
          })}
        </section>
      </section>
    );
  }
}

export default EmojiMenu;
