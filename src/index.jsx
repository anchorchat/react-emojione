import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'underscore';
import emojis from './emoji';
import EmojiCategory from './components/emoji-category';
import EmojiModifiers from './components/emoji-modifiers';
import EmojiCategories from './components/emoji-categories';
import Storage from './storage';

const storage = new Storage();

class EmojiMenu extends Component {
  static propTypes = {
    svgSprites: PropTypes.string,
    activeColor: PropTypes.string,
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
      storedEmojis: storedEmojis || [],
      category: 'people'
    };

    this.changeTone = this.changeTone.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  changeCategory(category) {
    this.setState({
      category
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
    const { tone, storedEmojis, category } = this.state;
    const { activeColor } = this.props;

    const color = activeColor || '#62B3EC';

    const modifiers = _.where(emojis, { category: 'modifier' });

    const filteredEmoji = _.chain(emojis).where({ category }).filter((emoji) => {
      if (emoji.title.includes('tone')) {
        return emoji.title.includes(tone);
      }

      return true;
    }).value();

    return (
      <section className="emoji-menu">
        <EmojiModifiers modifiers={modifiers} changeTone={this.changeTone} tone={tone} />
        <section className="emoji-categories">
          {
            storedEmojis.length > 0 && category === 'recent'
            ? <EmojiCategory
              emojis={storedEmojis}
              category="recent"
              sendEmoji={this.sendEmoji}
            />
            : null
          }
          {
            category !== 'recent'
            ? <EmojiCategory
              emojis={filteredEmoji}
              category={category}
              sendEmoji={this.sendEmoji}
            />
            : null
          }
        </section>
        <EmojiCategories
          changeCategory={this.changeCategory}
          category={category}
          activeColor={color}
        />
      </section>
    );
  }
}

export default EmojiMenu;
