import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'underscore';
import emojiList from './emoji';

class EmojiMenu extends Component {
  static createMarkup(emoji) {
    return {
      __html: emojione.toImage(emoji)
    };
  }

  static propTypes = {
    svgSprites: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    emojione.imageType = 'svg';
    emojione.sprites = true;
    emojione.imagePathSVGSprites = props.svgSprites;

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

    const modifiers = _.where(emojiList, { category: 'modifier' });

    const style = {
      modifierTone0: {
        backgroundColor: '#ffdd67',
        borderRadius: '50%'
      }
    };

    return (
      <section>
        <header className="emoji-container modifiers">
          <div
            style={style.modifierTone0}
            className="emojione modifier"
            onClick={() => this.changeTone('tone0')}
          />
          {_.map(modifiers, modifier => (
            <div
              className="emojione modifier"
              dangerouslySetInnerHTML={EmojiMenu.createMarkup(modifier.shortname)}
              key={`emoji-${modifier.shortname}`}
              onClick={() => this.changeTone(modifier.title)}
            />
          ))}
        </header>
        {_.map(categories, (category) => {
          const categoryEmoji = _.chain(emojiList).where({ category }).filter((emoji) => {
            if (emoji.title.includes('tone')) {
              return emoji.title.includes(tone);
            }

            return true;
          }).value();
          return (
            <article key={category}>
              <h1>{category}</h1>
              <section className="emoji-container">
                {_.map(categoryEmoji, emoji => (
                  <div
                    className={`emojione ${category}`}
                    dangerouslySetInnerHTML={EmojiMenu.createMarkup(emoji.shortname)}
                    key={`emoji-${emoji.shortname}`}
                  />
                ))}
              </section>
            </article>
          );
        })}
      </section>
    );
  }
}

export default EmojiMenu;
