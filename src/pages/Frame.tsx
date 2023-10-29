import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <b className={styles.letsLearnTheContainer}>
        <p className={styles.letsLearnTheLaw}>
          <span>{`Let’s learn the `}</span>
          <span className={styles.law}>LAW</span>
          <span>{`, `}</span>
        </p>
        <p className={styles.letsLearnTheLaw}>
          <span>{`but in a `}</span>
          <span className={styles.gamified}>Gamified</span>
          <span className={styles.way}> way</span>
        </p>
      </b>
    </div>
  );
};

export default Frame;
