import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import createMarkup from './create-markup';

class EmojiModifiers extends Component {
  static propTypes = {
    modifiers: PropTypes.arrayOf(
      PropTypes.shape({
        shortname: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    changeTone: PropTypes.func.isRequired,
    tone: PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const { modifiers, changeTone, tone } = this.props;

    return (
      <header className="emoji-container modifiers">
        <div
          className={tone === 'tone0' ? 'modifier active' : 'modifier'}
          onClick={() => changeTone('tone0')}
        >
          <svg width="50px" height="50px" viewBox="0 0 50 50" className="emojione">
            <circle id="circle" fill="#FFDD67" cx="25" cy="25" r="25" />
          </svg>
        </div>
        {_.map(modifiers, modifier => (
          <div
            className={modifier.title === tone ? 'modifier active' : 'modifier'}
            dangerouslySetInnerHTML={createMarkup(modifier.shortname)}
            key={`emoji-${modifier.shortname}`}
            onClick={() => changeTone(modifier.title)}
          />
        ))}
      </header>
    );
  }
}

export default EmojiModifiers;
