import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img
        className={styles.background2Icon}
        alt=""
        src="/background-2@2x.png"
      />
      <img className={styles.dfawda1Icon} alt="" src="/1dfawda-1@2x.png" />
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
      <div className={styles.child} />
      <b className={styles.letsLearnTheContainer}>
        <p className={styles.letsLearnTheLaw}>
          <span className={styles.letsLearnThe}>{`Let’s learn the `}</span>
          <span className={styles.law}>LAW</span>
          <span>{`, `}</span>
        </p>
        <p className={styles.letsLearnTheLaw}>but in a Gamified way</p>
      </b>
      <div className={styles.keepScrolling}>KEEP SCROLLING</div>
      <div className={styles.item} />
      <div className={styles.inner} />
    </div>
  );
};

export default Frame1;
