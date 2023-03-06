import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from './index.module.css'

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      duration: 0.5,
      scale: 0.5,
      opacity: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseMove = (event) => {
    gsap.to(cursorRef.current, {
      duration: 0.5,
      x: event.clientX,
      y: event.clientY,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursor+' pointer'} ref={cursorRef}>
      {/* Loading */}
    </div>
  );
};


export default Cursor