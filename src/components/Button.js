import styles from "../styles/Home.module.css";
import left_icon from "../icons/left-icon.png"
import right_icon from "../icons/right-icon.png"

function ScrollLeft(event) {
  const list = event.target.parentElement.previousSibling;
  list.scrollBy({
    top: 0,
    left: -1155,
    behavior: "smooth",
  });
}

function ScrollRight(event) {
  const list = event.target.parentElement.previousSibling;
  list.scrollBy({
    top: 0,
    left: 1155,
    behavior: "smooth",
  });
}

function MainSlideButton() {
  return (
    <div className={styles.slide_btn_box}>
      <img
        onClick={ScrollLeft}
        className={styles.slide_btn_prev}
        src={left_icon}
      ></img>
      <img
        onClick={ScrollRight}
        className={styles.slide_btn_next}
        src={right_icon}
      ></img>
    </div>
  );
}

export default MainSlideButton;
