export const FilmListItem = ({
  image,
  title,
  id,
  // deleteFilm,
  openModal,
  watched,
  toggleWatchedFilms,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        onClick={() => {
          openModal(image);
        }}
      />
      <span onClick={() => toggleWatchedFilms(id)}>
        Watched: {watched ? "yes" : "no"}
      </span>
      {/* <button onClick={() => deleteFilm(id)}>Delete</button> */}
    </>
  );
};
