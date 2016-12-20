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
              dangerouslySetInnerHTML={EmojiMenu.createMarkup(modifier.shortname)}
              key={`emoji-${modifier.shortname}`}
              onClick={() => this.changeTone(modifier.title)}
            />
          ))}
        </header>
        <section className="emoji-categories">
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
                      className={category}
                      dangerouslySetInnerHTML={EmojiMenu.createMarkup(emoji.shortname)}
                      key={`emoji-${emoji.shortname}`}
                    />
                  ))}
                </section>
              </article>
            );
          })}
        </section>
      </section>
    );
  }
}

export default EmojiMenu;
