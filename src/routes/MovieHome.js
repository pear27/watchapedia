import { useEffect, useState } from "react";

import Info from "../components/Info.js";
import MainSlideButton from "../components/Button.js";
import TopBar from "../components/TopBar.js";
import Footer from "../components/Footer.js";
import styles from "../styles/Home.module.css";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

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
    const fetchMovies = async () => {
      try {
        // Now Playing Movie List
        const nowPlayingResponse = await fetch(
          `${baseURL}movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
        );
        setNowPlaying((await nowPlayingResponse.json()).results);
        setjsonNowPlaying(true);

        // Netflix Movie List
        const netflixResponse = await fetch(
          `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=8`
        );
        setNetflixMovies((await netflixResponse.json()).results);
        setjsonNetflixMovies(true);

        // Disney Plus Movie List
        const disneyPlusResponse = await fetch(
          `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=337`
        );
        setDisneyPlusMovies((await disneyPlusResponse.json()).results);
        setjsonDisneyPlusMovies(true);

        // Watcha Movie List
        const watchaResponse = await fetch(
          `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=97`
        );
        setWatchaMovies((await watchaResponse.json()).results);
        setjsonWatchaMovies(true);

        // Wavve Movie List
        const wavveResponse = await fetch(
          `${baseURL}discover/movie?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=356`
        );
        setWavveMovies((await wavveResponse.json()).results);
        setjsonWavveMovies(true);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
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
                {nowPlaying && nowPlaying.length > 0 ? (
                  nowPlaying.map((movie) => (
                    <Info
                      key={movie.id}
                      id={movie.id}
                      type={`movie`}
                      posterImg={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  ))
                ) : (
                  <p>영화 목록을 불러오는 중입니다...</p>
                )}
              </div>
              <MainSlideButton />
            </div>

            <div>
              {" "}
              {/* Netflix Movie List */}
              <h2 className={styles.movie_list_title}>넷플릭스 인기 영화</h2>
              <div className={styles.movie_list}>
                {NetflixMovies && NetflixMovies.length > 0 ? (
                  NetflixMovies.map((movie) => (
                    <Info
                      key={movie.id}
                      id={movie.id}
                      type={`movie`}
                      posterImg={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  ))
                ) : (
                  <p>영화 목록을 불러오는 중입니다...</p>
                )}
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
                {DisneyPlusMovies && DisneyPlusMovies.length > 0 ? (
                  DisneyPlusMovies.map((movie) => (
                    <Info
                      key={movie.id}
                      id={movie.id}
                      type={`movie`}
                      posterImg={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  ))
                ) : (
                  <p>영화 목록을 불러오는 중입니다...</p>
                )}
              </div>
              <MainSlideButton />
            </div>

            <div>
              {" "}
              {/* Watcha Movie List */}
              <h2 className={styles.movie_list_title}>왓챠 인기 영화</h2>
              <div className={styles.movie_list}>
                {WatchaMovies && WatchaMovies.length > 0 ? (
                  WatchaMovies.map((movie) => (
                    <Info
                      key={movie.id}
                      id={movie.id}
                      type={`movie`}
                      posterImg={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  ))
                ) : (
                  <p>영화 목록을 불러오는 중입니다...</p>
                )}
              </div>
              <MainSlideButton />
            </div>

            <div>
              {" "}
              {/* Wavve Movie List */}
              <h2 className={styles.movie_list_title}>웨이브 인기 영화</h2>
              <div className={styles.movie_list}>
                {WavveMovies && WavveMovies.length > 0 ? (
                  WavveMovies.map((movie) => (
                    <Info
                      key={movie.id}
                      id={movie.id}
                      type={`movie`}
                      posterImg={movie.poster_path}
                      title={movie.title}
                      releaseDate={movie.release_date}
                      voteAverage={movie.vote_average}
                    />
                  ))
                ) : (
                  <p>영화 목록을 불러오는 중입니다...</p>
                )}
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
