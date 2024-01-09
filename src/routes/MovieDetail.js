import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";
import Detail from "../components/Detail.js";
import TopBar from "../components/TopBar.js";
import Footer from "../components/Footer.js";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3e9182edc9db5309c9808658e8b64cca";

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [providers, setProviders] = useState([]);
  const [similars, setSimilars] = useState([]);
  const { id } = useParams();

  const [jsonMovie, setjsonMovie] = useState(false);
  const [jsonProviders, setjsonProviders] = useState(false);
  const [jsonSimilars, setjsonSimilars] = useState(false);

  useEffect(() => {
    fetch(`${baseURL}movie/${id}?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((json) => {
        setMovie([...movie, { json }]);
        setjsonMovie(true);
      });

    fetch(`${baseURL}movie/${id}/watch/providers?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setProviders((prevProviders) => [...prevProviders, json]);
        setjsonProviders(true);
      });

    fetch(`${baseURL}movie/${id}/similar?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((json) => {
        setSimilars(json.results);
        setjsonSimilars(true);
      });
  }, []);

  return (
    <div>
      {!(jsonMovie && jsonProviders && jsonSimilars) ? (
        <h1 className={styles.loading_text}>LOADING</h1>
      ) : (
        <div>
          <TopBar />
          <div>
            <Detail
              id={id}
              type={`movie`}
              adult={movie[0].json.adult}
              backdrop_image={movie[0].json.backdrop_path}
              title={movie[0].json.title}
              original_title={movie[0].json.original_title}
              vote_average={movie[0].json.vote_average}
              release_date={movie[0].json.release_date}
              genres={movie[0].json.genres?.map((g) => g.name)}
              runtime={movie[0].json.runtime}
              poster_image={movie[0].json.poster_path}
              tagline={movie[0].json.tagline ? movie[0].json.tagline : ""}
              overview={movie[0].json.overview ? movie[0].json.overview : ""}
              similars={similars}
              providers={providers}
            />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
