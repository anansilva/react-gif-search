import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    this.renderList = () => {
      return this.props.gifs.map((gif) => <Gif id={gif.id} key={gif.id} updateSelectedGif={this.props.updateSelectedGif} />);
    };

    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
