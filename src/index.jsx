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
  }

  render() {
    const categories = _.chain(emojiList).pluck('category').uniq().value();

    return (
      <section>
        {categories.map((category) => {
          const categoryEmoji = _.where(emojiList, { category });
          return (
            <article key={category}>
              <h1>{category}</h1>
              <section className="emoji-container">
                {categoryEmoji.map(emoji => (
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
