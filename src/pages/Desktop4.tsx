import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop4.module.css";

const Desktop4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCTAContainerClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <img
        className={styles.background1Icon}
        alt=""
        src="/background-1@2x.png"
      />
      <img className={styles.dfawdaIcon} alt="" src="/1dfawda@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.header}>
        <div className={styles.justicepals}>
          <span>JUSTICE</span>
          <span className={styles.pals}>PALS</span>
        </div>
        <div className={styles.menu}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.home}>HOME</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.profile}>PROFILE</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <div className={styles.work}>WORK</div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.groupItem} />
              <div className={styles.contactUs}>CONTACT US</div>
            </div>
          </div>
        </div>
        <div className={styles.ctaButton}>
          <div className={styles.button}>
            <div className={styles.profile1}>PROFILE</div>
            <div className={styles.icon}>
              <img
                className={styles.iconoutlinearrowRight}
                alt=""
                src="/iconoutlinearrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cta} onClick={onCTAContainerClick}>
        <b className={styles.startHere}>Start here</b>
      </div>
    </div>
  );
};

export default Desktop4;
