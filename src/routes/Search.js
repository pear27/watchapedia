import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Info from "../components/Info.js";
import TopBar from "../components/TopBar.js";
import MainSlideButton from "../components/Button.js";
import styles from "../styles/Home.module.css";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3e9182edc9db5309c9808658e8b64cca";

function Search() {
  const { title } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedTVs, setSearchedTVs] = useState([]);

  useEffect(() => {
    fetch(
      `${baseURL}search/movie?api_key=${API_KEY}&query=${title}&language=ko-KR&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        setSearchedMovies(json.results);
      });

    fetch(
      `${baseURL}search/tv?api_key=${API_KEY}&query=${title}&language=ko-KR&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        setSearchedTVs(json.results);
      });
  }, []);
  return (
    <div>
      <TopBar />
      <div className={styles.movie_list_total}>
        <h3>"{title}"의 검색결과</h3>
        <div>
          <h2 className={styles.movie_list_title}>영화</h2>

          {searchedMovies.length === 0 ? (
            <h4>검색 결과가 없습니다.</h4>
          ) : (
            <div>
              {/* Searched Movie List */}
              <div className={styles.movie_list}>
                {searchedMovies.map((movie) => (
                  <Info
                    key={movie.id}
                    id={movie.id}
                    type={`movie`}
                    posterImg={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    voteAverage={movie.vote_average}
                  />
                ))}
              </div>
              <MainSlideButton />
            </div>
          )}

          <h2 className={styles.movie_list_title}>TV 프로그램</h2>

          {searchedTVs.length === 0 ? (
            <h4>검색 결과가 없습니다.</h4>
          ) : (
            <div>
              {/* Searched TV List */}
              <div className={styles.movie_list}>
                {searchedTVs.map((tv) => (
                  <Info
                    key={tv.id}
                    id={tv.id}
                    type={`tv`}
                    posterImg={tv.poster_path}
                    title={tv.name}
                    releaseDate={tv.first_air_date}
                    voteAverage={tv.vote_average}
                  />
                ))}
              </div>
              <MainSlideButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
