import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from './index.module.css'

const Loader = () => {
  const progressRef = useRef(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(count + 1), 35);
      return () => clearTimeout(timer);
    }
  }, [count]);
  useEffect(() => {

    gsap.fromTo(progressRef.current, { width: '0%', duration: 1 }, { width: '100%', duration: 5 });
  }, []);


  return (
    <div className="container m-auto">
      <div className={styles.loaderBody}>
      <div className={styles.loaderContent}>
      <h1 className={styles.countText}>{count}%</h1>
     
        <div className={styles.progressBody}>
          <div ref={progressRef} className={styles.progressBar}></div>
        </div>
      </div>
        <div className={styles.info}><p>By</p><p>Abdul-Rehman | Saad Bin Khalid</p></div>
      </div>
    
    </div>
  );
};


export default Loader