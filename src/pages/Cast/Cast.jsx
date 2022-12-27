import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieAdd } from 'api/fetchMovies';
import { CastList } from '../../components/CastList/CastList';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      const cast = await fetchMovieAdd(movieId, 'credits');
      setMovieCast(cast);
    };
    getMovieCast();
  }, [movieId]);

  return <div>{movieCast.cast && <CastList movieCast={movieCast.cast} />}</div>;
};

export default Cast;
