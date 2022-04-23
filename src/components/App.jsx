import { useState, useEffect } from "react";
import mapper from "../utils/mapper";
import { FilmList } from "./FilmList/FilmList";
import * as API from "../services/api";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

import React from "react";

export const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    API.getFilms(page)
      .then((films) => {
        const mapperFilms = mapper(films);
        setFilms((prevFilms) => [...prevFilms, ...mapperFilms]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const toggleWatchedFilms = (id) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) => {
        if (film.id === id) {
          return {
            ...film,
            watched: !film.watched,
          };
        }
        return film;
      })
    );
  };

  const openModal = (image) => {
    setImage(image);
  };

  const closeModal = () => {
    setImage("");
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <FilmList
        films={films}
        openModal={openModal}
        // deleteFilm={this.deleteFilm}
        toggleWatchedFilms={toggleWatchedFilms}
      />
      {films.length > 0 && <Button loadMore={loadMore} />}
      {image && <Modal image={image} closeModal={closeModal} />}
    </>
  );
};

// export class App extends Component {
//   state = {
//     films: [],
//     isLoading: false,
//     page: 1,
//   };

//   componentDidMount() {
//     this.getFetchFilms(this.state.page);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.getFetchFilms(this.state.page);
//     }
//   }

//   getFetchFilms = async (page) => {
//     try {
//       this.setState({ isLoading: true });
// API.getFilms(page).then((films) => {
//   const mapperFilms = mapper(films);
//   this.setState((prevState) => {
//     return {
//       films: [...prevState.films, ...mapperFilms],
//       isLoading: false,
//     };
//   });
//       });
//     } catch (error) {
//       console.log(error);
//       this.setState({ isLoading: false });
//     }
//   };

// toggleWatchedFilms = (id) => {
//   this.setState((prevState) => {
//     return {
//       films: prevState.films.map((film) => {
//         if (film.id === id) {
//           return {
//             ...film,
//             watched: !film.watched,
//           };
//         }
//         return film;
//       }),
//     };
//   });
// };

//   loadMore = () => {
//     this.setState((prevState) => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };

// deleteFilm = (id) => {
//   this.setState((prevState) => {
//     return {
//       films: prevState.films.filter((item) => item.id !== id),
//     };
//   });
// };

// render() {
// return (
//   <>
//     <FilmList
//       films={this.state.films}
//       // deleteFilm={this.deleteFilm}
//       toggleWatchedFilms={this.toggleWatchedFilms}
//     />
//     {this.state.films.length > 0 && <Button loadMore={this.loadMore} />}
//   </>
// );
// }
// }
