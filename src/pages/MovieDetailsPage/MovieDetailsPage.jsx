import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchMovies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInfo, InfoItem } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movieById, setMovieById] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const getMovieById = async () => {
      const movie = await fetchMovieById(movieId);
      setMovieById(movie);
    };
    getMovieById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>&#129044; Go back</Link>
      <MovieDetails movieById={movieById} />
      <AddInfo>
        <h4>Additional information</h4>
        <ul>
          <InfoItem>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </InfoItem>
          <InfoItem>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </InfoItem>
        </ul>
      </AddInfo>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
