import { useState, useEffect, useRef } from "react";

// Custom hook to use IntersectionObserver
const useIntersectionObserver = () => {
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

  // useEffect to observe the divRef
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });

    const currentDivRef = divRef.current;

    // If the divRef exists, observe it
    if (currentDivRef) {
      observer.observe(currentDivRef);
    }

    return () => {
      if (currentDivRef) {
        observer.unobserve(currentDivRef);
      }
    };
  }, []);

  return [divRef, isInView];
};

export default useIntersectionObserver;
