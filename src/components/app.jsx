import React from 'react';

import Gif from './gif';
import SearchBar from './search-bar';
import GifList from './gif-list';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="YAlhwn67KT76E" />
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
