import React, { PropTypes } from 'react';
import IconRecent from './icons/icon-recent';
import IconPeople from './icons/icon-people';
import IconNature from './icons/icon-nature';
import IconFood from './icons/icon-food';
import IconActivity from './icons/icon-activity';
import IconTravel from './icons/icon-travel';
import IconObjects from './icons/icon-objects';
import IconSymbols from './icons/icon-symbols';

function EmojiCategories({ changeCategory }) {
  return (
    <footer className="emoji-category-menu">
      <span onClick={() => changeCategory('recent')}>
        <IconRecent />
      </span>
      <span onClick={() => changeCategory('people')}>
        <IconPeople />
      </span>
      <span onClick={() => changeCategory('nature')}>
        <IconNature />
      </span>
      <span onClick={() => changeCategory('food')}>
        <IconFood />
      </span>
      <span onClick={() => changeCategory('activity')}>
        <IconActivity />
      </span>
      <span onClick={() => changeCategory('travel')}>
        <IconTravel />
      </span>
      <span onClick={() => changeCategory('objects')}>
        <IconObjects />
      </span>
      <span onClick={() => changeCategory('symbols')}>
        <IconSymbols />
      </span>
    </footer>
  );
}

EmojiCategories.propTypes = {
  changeCategory: PropTypes.func.isRequired
};

export default EmojiCategories;
