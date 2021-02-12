import { useState, useEffect } from "react";


const usePageScroll = function (): { direction: string } {
  let lastScrollPos = 0;
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (lastScrollPos > window.scrollY || lastScrollPos === 0) {
      setDirection('up');
    } else if (lastScrollPos <= window.scrollY) {
      setDirection('down');
    }
    lastScrollPos = window.scrollY;
  }

  return { direction };
}

export default usePageScroll;
