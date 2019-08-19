import React from 'react';

import Gif from './gif';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene" />
    </div>
  );
};

export default App;
