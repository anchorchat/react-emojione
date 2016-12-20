import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'underscore';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';

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

    this.state = {
      tone: 'tone0'
    };

    this.changeTone = this.changeTone.bind(this);
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  render() {
    const { tone } = this.state;
    const { sendEmoji } = this.props;

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
                sendEmoji={sendEmoji}
              />
            );
          })}
        </section>
      </section>
    );
  }
}

export default EmojiMenu;
