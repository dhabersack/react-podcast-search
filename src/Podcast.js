import React from 'react';
import './Podcast.css';

class Podcast extends React.Component {
  addToFavorites() {
    this.props.onFavorite(this.props.podcast);
  }

  render() {
    return (
      <article className={this.props.isFavorite ? 'is-favorite' : ''}>
        <h2>{this.props.podcast.collectionName}</h2>

        <img alt={this.props.podcast.collectionName} src={this.props.podcast.artworkUrl600} />

        <button onClick={this.addToFavorites.bind(this)}>Favorite</button>
      </article>
    );
  }
}

export default Podcast;
