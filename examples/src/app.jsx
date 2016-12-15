import React from 'react';
import EmojiMenu from '../../dist/index';
import './app.css';

function App() {
  return (
    <section className="demo">
      <h1>
        <a
          href="https://github.com/anchorchat/react-emojione"
          target="_blank"
          rel="noopener noreferrer"
        >
          React EmojiOne
        </a>
      </h1>
      <EmojiMenu />
    </section>
  );
}

export default App;
