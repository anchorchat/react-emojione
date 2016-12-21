import React from 'react';
import IconRecent from './icons/icon-recent';
import IconPeople from './icons/icon-people';
import IconNature from './icons/icon-nature';
import IconFood from './icons/icon-food';
import IconActivity from './icons/icon-activity';
import IconTravel from './icons/icon-travel';
import IconObjects from './icons/icon-objects';
import IconSymbols from './icons/icon-symbols';

function EmojiCategories() {
  return (
    <footer className="emoji-category-menu">
      <IconRecent />
      <IconPeople />
      <IconNature />
      <IconFood />
      <IconActivity />
      <IconTravel />
      <IconObjects />
      <IconSymbols />
    </footer>
  );
}

export default EmojiCategories;
