"use client";
import React, { createContext, useState, useContext } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const incrementProgress = (points) => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + points;
      if (newProgress >= 100) {
        setProgress(0);
        setLevel((prevLevel) => prevLevel + 1);
      } else {
        setProgress(newProgress);
      }
      return newProgress;
    });
  };

  const markLessonComplete = (lessonId) => {
    setCompletedLessons((prevLessons) => new Set(prevLessons).add(lessonId));
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        level,
        incrementProgress,
        completedLessons,
        markLessonComplete,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
