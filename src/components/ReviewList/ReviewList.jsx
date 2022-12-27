import PropTypes from 'prop-types';

export const ReviewList = ({ movieReview }) => {
  return (
    <>
      {movieReview?.length > 0 ? (
        <ul>
          {movieReview.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{`Author: ${author}`}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> We don't have any reviews for this movie</p>
      )}
    </>
  );
};

ReviewList.propTypes = {
  movieById: PropTypes.object,
};
