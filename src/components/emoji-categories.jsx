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
      <a href="#recent">
        <IconRecent />
      </a>
      <a href="#people">
        <IconPeople />
      </a>
      <a href="#nature">
        <IconNature />
      </a>
      <a href="#food">
        <IconFood />
      </a>
      <a href="#activity">
        <IconActivity />
      </a>
      <a href="#travel">
        <IconTravel />
      </a>
      <a href="#objects">
        <IconObjects />
      </a>
      <a href="#symbols">
        <IconSymbols />
      </a>
    </footer>
  );
}

export default EmojiCategories;
