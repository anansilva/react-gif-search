import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.updateSelectedGif(this.props.id);
  }

  render() {
    const giphyMedia = `https://media.giphy.com/media/${this.props.id}/source.gif`;
    
    return (
      <img src={giphyMedia} alt="" className="gif"
        onClick={this.handleClick}
      /> 
    );
  }
}

export default Gif;
