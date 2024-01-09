import { useState } from "react";

import styles from "../styles/Home.module.css";
import watcha_pedia_logo from "../icons/WATCHA_PEDIA_Logo_Main1.png";

function TopBar() {
  const [movieTitle, setMovieTitle] = useState("");
  const onChange = (event) => setMovieTitle(event.target.value);
  const onSubmit = (event) => {
    if (movieTitle === "") {
      return;
    }
  };

  return (
    <div className={styles.top_bar}>
      <a href="/">
        <img src={watcha_pedia_logo} alt="main_logo" className={styles.logo} />
      </a>
      <div className={styles.top_navigation}>
        <a href="/">
          <h5 className={styles.top_navigation_movie}>MOVIE</h5>
        </a>
        <a href="/tv">
          <h5 className={styles.top_navigation_tv}>TV</h5>
        </a>
      </div>
      <form
        action={`/search/${movieTitle}`}
        onSubmit={onSubmit}
        className={styles.search_bar}
      >
        <input
          onChange={onChange}
          value={movieTitle}
          type="text"
          placeholder={"영화 및 TV 프로그램을 검색해보세요."}
          className={styles.search_input}
        />
      </form>
    </div>
  );
}

export default TopBar;
