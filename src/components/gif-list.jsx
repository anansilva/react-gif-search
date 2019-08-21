import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    const giphyMock = [
      "XeSUAqI8uGTxL145ut",
      "10hzvF9FTulLxK",
      "14v2j9FG5lXpMA"
    ];

    this.renderList = () => {
      return giphyMock.map((id) => {
        return <Gif id={id} key={id} />;
      });
    };

    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
