/************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 *************************************************************************
 */
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
