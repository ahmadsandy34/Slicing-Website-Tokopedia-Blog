import React, { useState, useEffect, useRef } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const topButtonRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          ref={topButtonRef}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-400 text-white px-4 py-2"
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
