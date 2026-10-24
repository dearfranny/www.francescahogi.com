import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MediaCard from "@/components/MediaCard";
import FeaturedMediaCarousel from "@/components/FeaturedMediaCarousel";
import MediaPagination from "@/components/MediaPagination";
import { mediaItems } from "@/data/media";

export const metadata = {
  title: "Media",
};

export default async function Media({ searchParams }) {
  const params = await searchParams;

  const sortedMedia = [...mediaItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const featuredMedia = sortedMedia.filter(
    (item) => item.featured
  );

  const archiveMedia = sortedMedia.filter(
    (item) => !item.featured
  );

  const itemsPerPage = 9;

  const totalPages = Math.max(
    1,
    Math.ceil(archiveMedia.length / itemsPerPage)
  );

  const requestedPage = Number(params?.page || 1);

  const currentPage =
    Number.isFinite(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedMedia = archiveMedia.slice(
    startIndex,
    startIndex + itemsPerPage
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
            <span className="eyebrow">
              Featured
            </span>
          </div>

          <FeaturedMediaCarousel>
            {featuredMedia.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
              />
            ))}
          </FeaturedMediaCarousel>
        </section>
      )}

      {archiveMedia.length > 0 && (
        <section
          className="wrap"
          id="media-archive"
        >
          <div className="media-section-heading">
            <span className="eyebrow">
              More media
            </span>
          </div>

          <div className="media-grid">
            {paginatedMedia.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <MediaPagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </section>
      )}

      <Footer />
    </main>
  );
}
