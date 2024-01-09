import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import styles from "../styles/Detail.module.css";
import TopBar from "../components/TopBar.js";
import Footer from "../components/Footer.js";
import Detail from "../components/Detail.js";

const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "3e9182edc9db5309c9808658e8b64cca";

function TVDetail() {
  const [tv, setTV] = useState([]);
  const [similars, setSimilars] = useState([]);
  const [providers, setProviders] = useState([]);
  const { id } = useParams();

  const [jsonTV, setjsonTV] = useState(false);
  const [jsonProviders, setjsonProviders] = useState(false);
  const [jsonSimilars, setjsonSimilars] = useState(false);

  useEffect(() => {
    fetch(`${baseURL}tv/${id}?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((json) => {
        setTV([...tv, { json }]);
        setjsonTV(true);
      });

    fetch(`${baseURL}tv/${id}/watch/providers?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        setProviders((prevProviders) => [...prevProviders, json]);
        setjsonProviders(true);
      });

    fetch(`${baseURL}tv/${id}/similar?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((json) => {
        setSimilars(json.results);
        setjsonSimilars(true);
      });
  }, []);

  return (
    <div>
      {!(jsonTV && jsonProviders && jsonSimilars) ? (
        <h1 className={styles.loading_text}>LOADING</h1>
      ) : (
        <div>
          <TopBar />
          <div>
            <Detail
              id={id}
              type={`tv`}
              adult={tv[0].json.adult}
              backdrop_image={tv[0].json.backdrop_path}
              title={tv[0].json.name}
              original_title={tv[0].json.original_name}
              vote_average={tv[0].json.vote_average}
              release_date={tv[0].json.first_air_date}
              genres={tv[0].json.genres?.map((g) => g.name)}
              runtime={null}
              poster_image={tv[0].json.poster_path}
              tagline={tv[0].json.tagline ? tv[0].json.tagline : ""}
              overview={tv[0].json.overview ? tv[0].json.overview : ""}
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

export default TVDetail;
