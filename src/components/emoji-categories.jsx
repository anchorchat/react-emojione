import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import IconRecent from './icons/icon-recent';
import IconPeople from './icons/icon-people';
import IconNature from './icons/icon-nature';
import IconFood from './icons/icon-food';
import IconActivity from './icons/icon-activity';
import IconTravel from './icons/icon-travel';
import IconObjects from './icons/icon-objects';
import IconSymbols from './icons/icon-symbols';

class EmojiCategories extends Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps);
  }

  render() {
    const { changeCategory, category, activeColor } = this.props;

    return (
      <footer className="emoji-category-menu">
        <span onClick={() => changeCategory('recent')}>
          <IconRecent color={category === 'recent' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('people')}>
          <IconPeople color={category === 'people' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('nature')}>
          <IconNature color={category === 'nature' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('food')}>
          <IconFood color={category === 'food' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('activity')}>
          <IconActivity color={category === 'activity' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('travel')}>
          <IconTravel color={category === 'travel' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('objects')}>
          <IconObjects color={category === 'objects' ? activeColor : null} />
        </span>
        <span onClick={() => changeCategory('symbols')}>
          <IconSymbols color={category === 'symbols' ? activeColor : null} />
        </span>
      </footer>
    );
  }
}

EmojiCategories.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired
};

export default EmojiCategories;
