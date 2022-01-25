import Button from "../UI/Button/Button";
import styles from "./ErrorModals.module.css";

const ErrorModals = (props) => {
  const closeModal = () => {
    props.onCloseModal(false);
  };
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.errorMessage}</div>
        <div className={styles.actions}>
          <Button>
            <span onClick={closeModal}>Okay </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModals;
