import { useEffect, useState } from "react";

import Info from "../components/Info.js";
import MainSlideButton from "../components/Button.js";
import TopBar from "../components/TopBar.js";
import Footer from "../components/Footer.js";
import styles from "../styles/Home.module.css";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3e9182edc9db5309c9808658e8b64cca";

function MovieHome() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [NetflixMovies, setNetflixMovies] = useState([]);
  const [DisneyPlusMovies, setDisneyPlusMovies] = useState([]);
  const [WatchaMovies, setWatchaMovies] = useState([]);
  const [WavveMovies, setWavveMovies] = useState([]);

  const [jsonnowPlaying, setjsonNowPlaying] = useState(false);
  const [jsonNetflixMovies, setjsonNetflixMovies] = useState(false);
  const [jsonDisneyPlusMovies, setjsonDisneyPlusMovies] = useState(false);
  const [jsonWatchaMovies, setjsonWatchaMovies] = useState(false);
  const [jsonWavveMovies, setjsonWavveMovies] = useState(false);

  useEffect(() => {
    fetch(
      // Now Playing Movie List
      `${baseURL}movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
    )
      .then((response) => response.json())
      .then((json) => {
        setNowPlaying(json.results);
        setjsonNowPlaying(true);
      });

    fetch(
      // Netflix Movie List
      `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=8`
    )
      .then((response) => response.json())
      .then((json) => {
        setNetflixMovies(json.results);
        setjsonNetflixMovies(true);
      });

    fetch(
      // Disney Plus Movie List
      `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=337`
    )
      .then((response) => response.json())
      .then((json) => {
        setDisneyPlusMovies(json.results);
        setjsonDisneyPlusMovies(true);
      });

    fetch(
      // Watcha Movie List
      `${baseURL}/discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=97`
    )
      .then((response) => response.json())
      .then((json) => {
        setWatchaMovies(json.results);
        setjsonWatchaMovies(true);
      });

    fetch(
      // Wavve Movie List
      `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=356`
    )
      .then((response) => response.json())
      .then((json) => {
        setWavveMovies(json.results);
        setjsonWavveMovies(true);
      });
  }, []);
  return (
    <div>
      {!(
        jsonnowPlaying &&
        jsonNetflixMovies &&
        jsonDisneyPlusMovies &&
        jsonWatchaMovies &&
        jsonWavveMovies
      ) ? (
        <h1 className={styles.loading_text}>LOADING</h1>
      ) : (
        <div>
          <TopBar />
          <div className={styles.movie_list_total}>
            <div>
              {" "}
              {/* Now Playing Movie List */}
              <h2 className={styles.movie_list_title}>지금 상영하는 영화</h2>
              <div className={styles.movie_list}>
                {nowPlaying.map((movie) => (
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

            <div>
              {" "}
              {/* Netflix Movie List */}
              <h2 className={styles.movie_list_title}>넷플릭스 인기 영화</h2>
              <div className={styles.movie_list}>
                {NetflixMovies.map((movie) => (
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

            <div>
              {" "}
              {/* Disney Plus Movie List */}
              <h2 className={styles.movie_list_title}>
                디즈니플러스 인기 영화
              </h2>
              <div className={styles.movie_list}>
                {DisneyPlusMovies.map((movie) => (
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

            <div>
              {" "}
              {/* Watcha Movie List */}
              <h2 className={styles.movie_list_title}>왓챠 인기 영화</h2>
              <div className={styles.movie_list}>
                {WatchaMovies.map((movie) => (
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

            <div>
              {" "}
              {/* Wavve Movie List */}
              <h2 className={styles.movie_list_title}>웨이브 인기 영화</h2>
              <div className={styles.movie_list}>
                {WavveMovies.map((movie) => (
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
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MovieHome;
