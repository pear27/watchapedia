import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import no_image_movie from "../icons/no-image-movie.jpg";
import no_image_tv from "../icons/no-image-tv.jpg";

function Info({ id, type, posterImg, title, releaseDate, voteAverage }) {
  return (
    <a href={`/${type}/${id}`}>
      <div className={styles.movie}>
        {posterImg ? (
          <img
            className={styles.movie_img}
            src={`https://image.tmdb.org/t/p/original/${posterImg}`}
            alt={title}
          />
        ) : (
          <img
            className={styles.movie_img}
            src={type === "movie" ? no_image_movie : no_image_tv}
            alt={title}
          />
        )}
        <h4 className={styles.movie_title}>{title}</h4>
        <p className={styles.movie_release_date}>
          {(releaseDate || "").split("-", 1)}
        </p>
        <p className={styles.movie_vote_average}>★{voteAverage.toFixed(1)}</p>
      </div>
    </a>
  );
}

Info.propTypes = {
  id: PropTypes.number.isRequired,
  backdropImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Info;
