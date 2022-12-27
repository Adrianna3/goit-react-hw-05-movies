import PropTypes from 'prop-types';

export const CastList = ({ movieCast }) => {
  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://nowywilczak.pl/wp-content/uploads/2016/04/default-placeholder.png'
                }
                alt="unavailable"
                width="185"
              />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

CastList.propTypes ={
  movieCast: PropTypes.array.isRequired,
}