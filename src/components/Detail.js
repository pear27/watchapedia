// import PropTypes from "prop-types";
import styles from "../styles/Detail.module.css";
import Star from "../components/Star.js";
import MainSlideButton from "../components/Button.js";
import Info from "../components/Info.js";

function Detail({
  id,
  type,
  adult,
  backdrop_image,
  title,
  original_title,
  release_date,
  vote_average,
  genres,
  runtime,
  poster_image,
  tagline,
  overview,
  similars,
  providers,
}) {
  return (
    <div>
      <div className={styles.movie_info_total}>
        <img
          className={styles.movie_detail_backdrop}
          src={`https://image.tmdb.org/t/p/original/${backdrop_image}`}
          alt={title}
        />
        <div className={styles.movie_info}>
          <h2 className={styles.movie_info_title}>{title}</h2>
          <h6 className={styles.movie_info_original_title}>{original_title}</h6>
          <div className={styles.year_genres}>
            <p className={styles.year}>{(release_date || "").split("-", 1)}</p>
            {genres?.map((g) => (
              <p className={styles.genres} key={g}>
                ·{g}{" "}
              </p>
            ))}
          </div>{" "}
          <div className={styles.time_adult}>
            {type === "movie" ? (
              <p className={styles.time}>
                {Math.floor(runtime / 60)}시간 {runtime % 60}분
              </p>
            ) : null}
            {adult ? <p className={styles.adult}>·청불</p> : null}
          </div>
        </div>
      </div>
      <div className={styles.detail_total}>
        <img
          className={styles.movie_img}
          src={`https://image.tmdb.org/t/p/original/${poster_image}`}
          alt={title}
        />
        <div className={styles.vote_detail}>
          <div className={styles.vote}>
            <Star vote_average={vote_average} />
            <p className={styles.movie_vote_average}>
              {vote_average.toFixed(1)}
            </p>
          </div>
          <h4 className={styles.tagline}>{tagline}</h4>
          <p className={styles.overview}>{overview}</p>

          {providers[0]?.results?.KR?.flatrate ? (
            <div>
              {providers[0].results.KR.flatrate.map((prov) => (
                <img
                  className={styles.provider_logo}
                  src={`https://image.tmdb.org/t/p/original/${prov.logo_path}`}
                  alt={prov.provider_name}
                />
              ))}
            </div>
          ) : (
            <h4>제공사 없음</h4>
          )}
        </div>
      </div>

      {similars ? (
        <div>
          <h2 className={styles.similars_title}>비슷한 작품</h2>
          <div className={styles.similars}>
            {type === "movie"
              ? similars.map((similar) => (
                  <Info
                    key={similar.id}
                    id={similar.id}
                    type={`movie`}
                    posterImg={similar.poster_path}
                    title={similar.title}
                    releaseDate={similar.release_date}
                    voteAverage={similar.vote_average}
                  />
                ))
              : similars.map((similar) => (
                  <Info
                    key={similar.id}
                    id={similar.id}
                    type={`tv`}
                    posterImg={similar.poster_path}
                    title={similar.name}
                    releaseDate={similar.first_air_date}
                    voteAverage={similar.vote_average}
                  />
                ))}
          </div>
          <MainSlideButton />
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
