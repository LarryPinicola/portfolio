import React, { useEffect, useRef, useState } from "react";
import "./dynamicNumber.css";

const DynamicNumber = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let startValue = 0;
          const duration = 100;
          const increment = targetValue / duration;

          const updateCounter = () => {
            if (startValue < targetValue) {
              setCurrentValue(Math.ceil(startValue));
              startValue += increment;
              requestAnimationFrame(updateCounter);
            } else {
              setCurrentValue(targetValue);
            }
          };
          updateCounter();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue]);

  return (
    <div className="dynum" ref={counterRef}>
      {currentValue}
    </div>
  );
};

export default DynamicNumber;
