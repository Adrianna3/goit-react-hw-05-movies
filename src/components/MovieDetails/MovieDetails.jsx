import PropTypes from 'prop-types';
import { PictureWrapper } from './MovieDetails.styled';

export const MovieDetails = ({ movieById }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } = movieById;

  return (
    <PictureWrapper>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="No display"
        />
      </div>
      <div>
        <h2>{`${title} (${release_date && release_date.slice(0, 4)})`}</h2>
        <p>{`User score: ${(vote_average * 10).toFixed(0)}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </div>
    </PictureWrapper>
  );
};

MovieDetails.propTypes = {
  movieById: PropTypes.object
}
