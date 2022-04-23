import { FilmListItem } from "./FilmListItem/FilmListItem";
import { FilmListBlock } from "./FilmList.styled";

export const FilmList = ({ films, openModal, toggleWatchedFilms }) => {
  return (
    <FilmListBlock>
      {films.map(({ id, image, title, watched }) => {
        return (
          <li key={id}>
            <FilmListItem
              openModal={openModal}
              image={image}
              title={title}
              id={id}
              // deleteFilm={deleteFilm}
              watched={watched}
              toggleWatchedFilms={toggleWatchedFilms}
            />
          </li>
        );
      })}
    </FilmListBlock>
  );
};
