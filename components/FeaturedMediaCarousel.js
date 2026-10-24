"use client";

import { useRef } from "react";

export default function FeaturedMediaCarousel({ children }) {
  const trackRef = useRef(null);

  const animateScroll = (element, target, duration = 750) => {
    const start = element.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    const easeInOut = (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      element.scrollLeft =
        start + distance * easeInOut(progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

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

    const isMobile = window.matchMedia(
      "(max-width: 860px)"
    ).matches;

    const cardsPerScroll = isMobile ? 1 : 3;
    const scrollAmount = cardStep * cardsPerScroll;

    const maxScroll =
      track.scrollWidth - track.clientWidth;

    const tolerance = 8;

    let target;

    if (direction === "next") {
      target =
        track.scrollLeft >= maxScroll - tolerance
          ? 0
          : Math.min(
              track.scrollLeft + scrollAmount,
              maxScroll
            );
    } else {
      target =
        track.scrollLeft <= tolerance
          ? maxScroll
          : Math.max(
              track.scrollLeft - scrollAmount,
              0
            );
    }

    animateScroll(track, target);
  };

  return (
    <>
      <div
        className="featured-media-track"
        ref={trackRef}
      >
        {children}
      </div>

      <div className="featured-media-controls">
        <button
          className="featured-media-arrow"
          type="button"
          onClick={() =>
            scrollFeatured("previous")
          }
          aria-label="View previous featured media"
        >
          ←
        </button>

        <button
          className="featured-media-arrow"
          type="button"
          onClick={() =>
            scrollFeatured("next")
          }
          aria-label="View next featured media"
        >
          →
        </button>
      </div>
    </>
  );
}
