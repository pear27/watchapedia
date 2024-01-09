import full_star_icon from "../icons/full-star-icon.png";
import half_star_icon from "../icons/half-star-icon.png";
import empty_star_icon from "../icons/empty-star-icon.png";

import styles from "../styles/Star.module.css";

function FullStar() {
  return <img src={full_star_icon} className={styles.star_size}></img>;
}

function HalfStar() {
  return <img src={half_star_icon} className={styles.star_size}></img>;
}

function EmptyStar() {
  return <img src={empty_star_icon} className={styles.star_size}></img>;
}

function Star(vote_average) {
  if (vote_average.vote_average < 1) {
    return (
      <div>
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 2) {
    return (
      <div>
        <HalfStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 3) {
    return (
      <div>
        <FullStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 4) {
    return (
      <div>
        <FullStar />
        <HalfStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 5) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 6) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <HalfStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 7) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <FullStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 8) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <FullStar />
        <HalfStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 9) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <EmptyStar />
      </div>
    );
  } else if (vote_average.vote_average < 10) {
    return (
      <div>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <HalfStar />
      </div>
    );
  } else {
    return (
      <div>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
      </div>
    );
  }
}

export default Star;
