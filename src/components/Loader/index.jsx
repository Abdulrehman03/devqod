import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from './index.module.css'

const Loader = () => {
  // gsap.fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
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
        <h1 className={styles.countText}>{count}%</h1>
        <div className={styles.progressBody}>
          <div ref={progressRef} className={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
};


export default Loader