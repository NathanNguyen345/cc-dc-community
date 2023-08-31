import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = () => {
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

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
