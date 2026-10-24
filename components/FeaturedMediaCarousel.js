"use client";

import { useRef } from "react";

export default function FeaturedMediaCarousel({ children }) {
  const trackRef = useRef(null);

  const scrollFeatured = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".media-card");

    if (!cards.length) return;

    const firstCard = cards[0];
    const secondCard = cards[1];

    const cardStep = secondCard
      ? secondCard.offsetLeft - firstCard.offsetLeft
      : firstCard.offsetWidth;

    const isMobile = window.matchMedia("(max-width: 860px)").matches;
    const cardsPerScroll = isMobile ? 1 : 3;

    const scrollAmount = cardStep * cardsPerScroll;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const tolerance = 8;

    if (direction === "next") {
      if (track.scrollLeft >= maxScroll - tolerance) {
        track.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        track.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }

    if (direction === "previous") {
      if (track.scrollLeft <= tolerance) {
        track.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        track.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <div className="featured-media-track" ref={trackRef}>
        {children}
      </div>

      <div className="featured-media-controls">
        <button
          className="featured-media-arrow"
          type="button"
          onClick={() => scrollFeatured("previous")}
          aria-label="View previous featured media"
        >
          ←
        </button>

        <button
          className="featured-media-arrow"
          type="button"
          onClick={() => scrollFeatured("next")}
          aria-label="View next featured media"
        >
          →
        </button>
      </div>
    </>
  );
}
