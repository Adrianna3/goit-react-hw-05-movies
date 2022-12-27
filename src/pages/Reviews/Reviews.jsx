import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieAdd } from 'api/fetchMovies';
import { ReviewList } from '../../components/ReviewList/ReviewList';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      const reviews = await fetchMovieAdd(movieId, 'reviews');
      setMovieReview(reviews);
    };
    getMovieReview();
  }, [movieId]);

  return (
    <div>
      <ReviewList movieReview={movieReview.results} />
    </div>
  );
};

export default Reviews;
