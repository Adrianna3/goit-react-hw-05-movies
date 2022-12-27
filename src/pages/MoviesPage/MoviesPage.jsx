import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/fetchMovies';
import { Input, SearchBtn } from './MoviePage.styled';

const MoviesPage = () => {
  const location = useLocation();
  const [querySearch, setQuerySearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovieByQuery, setSearchMovieByQuery] = useState([]);

  const querySearchValue = e => {
    setQuerySearch(e.target.value);
  };

  const submitQueryValue = e => {
    e.preventDefault();
    querySearch ? setSearchParams({ query: querySearch }) : setSearchParams('');
    setQuerySearch('');
  };

  useEffect(() => {
    if (searchParams === '') return;

    const getMovieByQuery = async () => {
      const searchMovie = searchParams.get('query');
      if (searchMovie) {
        const movieByQuery = await fetchMoviesByQuery(searchMovie);
        setSearchMovieByQuery(movieByQuery);
      }
    };
    getMovieByQuery();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={submitQueryValue}>
        <Input type="text" value={querySearch} onChange={querySearchValue} />
        <SearchBtn>Search</SearchBtn>
      </form>

      <main>
        {searchMovieByQuery.map(movie => (
          <ul key={movie.id}>
            <li>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <h4>{movie.title}</h4>
              </Link>
            </li>
          </ul>
        ))}
      </main>
    </div>
  );
};

export default MoviesPage;
