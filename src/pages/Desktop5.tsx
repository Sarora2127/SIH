import { FunctionComponent } from "react";
import styles from "./Desktop5.module.css";

const Desktop5: FunctionComponent = () => {
  return (
    <div className={styles.desktop5}>
      <img
        className={styles.background1Icon}
        alt=""
        src="/background-11@2x.png"
      />
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
      <img className={styles.dfawdaIcon} alt="" src="/1dfawda1@2x.png" />
    </div>
  );
};

export default Desktop5;
