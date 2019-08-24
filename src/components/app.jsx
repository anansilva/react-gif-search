import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import SearchBar from './search-bar';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "YAlhwn67KT76E"
    };
   
    this.search('homer thinking');
  }

  search = (query) => {
    giphy('jzYLHWUgya3TkdvfKbP4IisK0zX6vwB9').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  updateSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
