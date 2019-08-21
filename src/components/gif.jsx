import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const giphyMedia = `https://media.giphy.com/media/${this.props.id}/source.gif`;
    
    return (
      <img src={giphyMedia} alt="" className="gif" /> 
    );
  }
}

export default Gif;
