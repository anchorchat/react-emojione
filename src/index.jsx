import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'underscore';
import emojis from './emoji';
import createMarkup from './create-markup';
import EmojiCategory from './emoji-category';

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
        <header className="emoji-container modifiers">
          <div className="modifier" onClick={() => this.changeTone('tone0')}>
            <svg width="50px" height="50px" viewBox="0 0 50 50" className="emojione">
              <circle id="circle" fill="#FFDD67" cx="25" cy="25" r="25" />
            </svg>
          </div>
          {_.map(modifiers, modifier => (
            <div
              className="modifier"
              dangerouslySetInnerHTML={createMarkup(modifier.shortname)}
              key={`emoji-${modifier.shortname}`}
              onClick={() => this.changeTone(modifier.title)}
            />
          ))}
        </header>
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
