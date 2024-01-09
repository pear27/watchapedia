import { useEffect, useState } from "react";

import MainSlideButton from "../components/Button.js";
import TopBar from "../components/TopBar.js";
import Info from "../components/Info.js";
import styles from "../styles/Home.module.css";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3e9182edc9db5309c9808658e8b64cca";

function TVHome() {
  const [KoreaPopular, setKoreaPopular] = useState([]);
  const [NetflixTVs, setNetflixTVs] = useState([]);
  const [DisneyPlusTVs, setDisneyPlusTVs] = useState([]);
  const [WatchaTVs, setWatchaTVs] = useState([]);
  const [WavveTVs, setWavveTVs] = useState([]);

  const [jsonKoreaPopular, setjsonKoreaPopular] = useState(false);
  const [jsonNetflixTVs, setjsonNetflixTVs] = useState(false);
  const [jsonDisneyPlusTVs, setjsonDisneyPlusTVs] = useState(false);
  const [jsonWatchaTVs, setjsonWatchaTVs] = useState(false);
  const [jsonWavveTVs, setjsonWavveTVs] = useState(false);

  useEffect(() => {
    fetch(
      // Korea Popular TV List
      `${baseURL}discover/tv?api_key=${API_KEY}&language=ko-KR&page=1&sort_by=popularity.desc&region=KR&with_origin_country=KR`
    )
      .then((response) => response.json())
      .then((json) => {
        setKoreaPopular(json.results);
        setjsonKoreaPopular(true);
      });

    fetch(
      // Netflix TV List
      `${baseURL}discover/tv?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=8`
    )
      .then((response) => response.json())
      .then((json) => {
        setNetflixTVs(json.results);
        setjsonNetflixTVs(true);
      });

    fetch(
      // Disney Plus TV List
      `${baseURL}discover/tv?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=337`
    )
      .then((response) => response.json())
      .then((json) => {
        setDisneyPlusTVs(json.results);
        setjsonDisneyPlusTVs(true);
      });

    fetch(
      // Watcha TV List
      `${baseURL}/discover/tv?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=97`
    )
      .then((response) => response.json())
      .then((json) => {
        setWatchaTVs(json.results);
        setjsonWatchaTVs(true);
      });

    fetch(
      // Wavve tv List
      `${baseURL}discover/tv?api_key=${API_KEY}&language=ko-KR&watch_region=KR&page=1&sort_by=popularity.desc&with_watch_providers=356`
    )
      .then((response) => response.json())
      .then((json) => {
        setWavveTVs(json.results);
        setjsonWavveTVs(true);
      });
  }, []);
  return (
    <div>
      {!(
        jsonKoreaPopular &&
        jsonNetflixTVs &&
        jsonDisneyPlusTVs &&
        jsonWatchaTVs &&
        jsonWavveTVs
      ) ? (
        <h1 className={styles.loading_text}>LOADING</h1>
      ) : (
        <div>
          <TopBar />
          <div className={styles.movie_list_total}>
            <div>
              {" "}
              {/* Now Playing TV List */}
              <h2 className={styles.movie_list_title}>
                한국 TV 프로그램 인기 순위
              </h2>
              <div className={styles.movie_list}>
                {KoreaPopular.map((tv) => (
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

            <div>
              {" "}
              {/* Netflix Movie List */}
              <h2 className={styles.movie_list_title}>
                넷플릭스 인기 TV 프로그램
              </h2>
              <div className={styles.movie_list}>
                {NetflixTVs.map((tv) => (
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

            <div>
              {" "}
              {/* Disney Plus Movie List */}
              <h2 className={styles.movie_list_title}>
                디즈니플러스 인기 TV 프로그램
              </h2>
              <div className={styles.movie_list}>
                {DisneyPlusTVs.map((tv) => (
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

            <div>
              {" "}
              {/* Watcha Movie List */}
              <h2 className={styles.movie_list_title}>왓챠 인기 TV 프로그램</h2>
              <div className={styles.movie_list}>
                {WatchaTVs.map((tv) => (
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

            <div>
              {" "}
              {/* Wavve Movie List */}
              <h2 className={styles.movie_list_title}>
                웨이브 인기 TV 프로그램
              </h2>
              <div className={styles.movie_list}>
                {WavveTVs.map((tv) => (
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
          </div>
        </div>
      )}
    </div>
  );
}

export default TVHome;
