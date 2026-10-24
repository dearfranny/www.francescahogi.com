"use client";

import { Children, useEffect, useState } from "react";

const FADE_DURATION = 400;

export default function FeaturedMediaCarousel({ children }) {
  const items = Children.toArray(children);

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 860px)");

    const updateItemsPerPage = () => {
      setItemsPerPage(mediaQuery.matches ? 1 : 3);
      setCurrentPage(0);
    };

    updateItemsPerPage();

    mediaQuery.addEventListener("change", updateItemsPerPage);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateItemsPerPage
      );
    };
  }, []);

  const totalPages = Math.ceil(
    items.length / itemsPerPage
  );

  const startIndex = currentPage * itemsPerPage;

  const visibleItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const changePage = (direction) => {
    if (totalPages <= 1 || isFading) return;

    setIsFading(true);

    setTimeout(() => {
      setCurrentPage((current) => {
        if (direction === "next") {
          return (current + 1) % totalPages;
        }

        return (
          (current - 1 + totalPages) %
          totalPages
        );
      });

      requestAnimationFrame(() => {
        setIsFading(false);
      });
    }, FADE_DURATION);
  };

  return (
    <>
      <div
        className={`featured-media-page ${
          isFading ? "is-fading" : ""
        }`}
      >
        {visibleItems}
      </div>

      {totalPages > 1 && (
        <div className="featured-media-controls">
          <button
            className="featured-media-arrow"
            type="button"
            onClick={() =>
              changePage("previous")
            }
            aria-label="View previous featured media"
          >
            ←
          </button>

          <button
            className="featured-media-arrow"
            type="button"
            onClick={() => changePage("next")}
            aria-label="View next featured media"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
