import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MediaCard from "@/components/MediaCard";
import { mediaItems } from "@/data/media";

export const metadata = {
  title: "Media",
};

export default function Media() {
  const sortedMedia = [...mediaItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const featuredMedia = sortedMedia.filter(
    (item) => item.featured
  );

  const archiveMedia = sortedMedia.filter(
    (item) => !item.featured
  );

  return (
    <main>
      <Nav />

      <header
        className="wrap"
        style={{ textAlign: "center" }}
      >
        <div
          className="marker"
          style={{ margin: "0 auto 1.4rem" }}
        >
          <span>press &</span>
          <span>media</span>
        </div>

        <h1
          style={{
            maxWidth: "20ch",
            margin: "0 auto",
          }}
        >
          Francesca Hogi in the media.
        </h1>
      </header>

      {featuredMedia.length > 0 && (
        <section className="media-featured">
          <div className="wrap media-section-heading">
            <span className="eyebrow">Featured</span>
          </div>

          <div className="featured-media-track">
            {featuredMedia.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>
      )}

      {archiveMedia.length > 0 && (
        <section className="wrap">
          <div className="media-section-heading">
            <span className="eyebrow">
              More media
            </span>
          </div>

          <div className="media-grid">
            {archiveMedia.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
