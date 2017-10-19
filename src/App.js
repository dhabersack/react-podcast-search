import React from 'react';
import { debounce } from 'underscore';
import './App.css';
import Podcast from './Podcast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      podcasts: []
    };

    this.findPodcasts = debounce(this.findPodcasts, 250);
  }

  addPodcastToFavorites(podcast) {
    this.setState({
      favorites: this.state.favorites.concat(podcast.trackId)
    });
  }

  findPodcasts(query) {
    fetch(`https://itunes.apple.com/search?term=${query}&media=podcast`)
      .then((response) => response.json())
      .then((results) => this.setState({
        podcasts: results.results
      }));
  }

  isPodcastFavorite(podcast) {
    return this.state.favorites.includes(podcast.trackId);
  }

  onQueryChange(event) {
    this.findPodcasts(event.target.value);
  }

  render() {
    return (
      <main>
        <h1>Podcast Search</h1>

        <input type="search" onChange={this.onQueryChange.bind(this)} />

        <section>
          {this.state.podcasts.map((podcast) => (
            <Podcast podcast={podcast} isFavorite={this.isPodcastFavorite(podcast)} onFavorite={this.addPodcastToFavorites.bind(this)} key={podcast.trackId} />
          ))}
        </section>
      </main>
    );
  }
}

export default App;
