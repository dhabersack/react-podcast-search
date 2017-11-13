import React from 'react';
import styled, { css } from 'styled-components';

const StyledPodcast = styled.article`
  background: #fff;
  align-items: center;
  border-radius: 0.4em;
  box-shadow: 0 0 0.4em #aaa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props => props.isFavorite && css`
    position: relative;

    &::before {
      background:  linear-gradient(45deg, #ff4136, #0074d9 50%, #aaa 51%, #aaa);
      border-width: 1.2em;
      border-radius: 0 0.4em 0 0.4em;
      box-shadow: -0.1em 0.1em 0.1em #aaa;
      content: '';
      display: block;
      height: 30px;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
    }
  `}
`;

const FavoriteButton = styled.button`
  background: linear-gradient(45deg, #ff4136, #0074d9);
  border: 0;
  border-radius: 0 0 0.25em 0.25em; /* 0 0 4px 4px */
  color: #fff;
  cursor: pointer;
  padding: 0.75em 0; /* 12px 0 */
  width: 100%;

  ${props => props.isInvisible && css`
    visibility: hidden;
  `}
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0.3em 0.5em 0.3em; /* 6px 10px 6px */
  text-align: center;
`;

const Artwork = styled.img`
  margin-bottom: 0.6em;
  width: 50%;
`;

class Podcast extends React.Component {
  addToFavorites() {
    this.props.onFavorite(this.props.podcast);
  }

  render() {
    return (
      <StyledPodcast isFavorite={this.props.isFavorite}>
        <Title>{this.props.podcast.collectionName}</Title>

        <Artwork alt={this.props.podcast.collectionName} src={this.props.podcast.artworkUrl600} />

        <FavoriteButton isInvisible={this.props.isFavorite} onClick={this.addToFavorites.bind(this)}>Favorite</FavoriteButton>
      </StyledPodcast>
    );
  }
}

export default Podcast;
