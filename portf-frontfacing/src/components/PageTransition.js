import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import '../PageTransition.css';

export const usePageTransition = () => {
    const location = useLocation();
    const [transitionClass, setTransitionClass] = useState('page-initial');
  
    useEffect(() => {
      setTransitionClass('page-enter');
      const timer = setTimeout(() => setTransitionClass('page-enter-active'), 50);
  
      return () => {
        clearTimeout(timer);
        setTransitionClass('page-exit-active');
      };
    }, [location]);
  
    return transitionClass;
  };