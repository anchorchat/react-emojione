import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import createMarkup from '../create-markup';

class EmojiCategory extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    emojis: PropTypes.arrayOf(
      PropTypes.shape({
        shortname: PropTypes.string.isRequired
      })
    ).isRequired,
    sendEmoji: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const { category, emojis, sendEmoji } = this.props;

    return (
      <article>
        <h1>{category}</h1>
        <section className="emoji-container">
          {_.map(emojis, emoji => (
            <div
              className={category}
              dangerouslySetInnerHTML={createMarkup(emoji.shortname)}
              key={`emoji-${emoji.shortname}`}
              onClick={() => sendEmoji(emoji)}
            />
          ))}
        </section>
      </article>
    );
  }
}

export default EmojiCategory;
