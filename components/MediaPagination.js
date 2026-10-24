import Link from "next/link";

export default function MediaPagination({
  currentPage,
  totalPages,
}) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page) => {
    if (page === 1) {
      return "/media#media-archive";
    }

    return `/media?page=${page}#media-archive`;
  };

  return (
    <nav
      className="media-pagination"
      aria-label="Media pagination"
    >
      {currentPage > 1 ? (
        <Link
          className="media-pagination-nav"
          href={createPageUrl(currentPage - 1)}
        >
          ← Previous
        </Link>
      ) : (
        <span className="media-pagination-nav disabled">
          ← Previous
        </span>
      )}

      <div className="media-pagination-pages">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <Link
              key={page}
              href={createPageUrl(page)}
              className={`media-page-number ${
                page === currentPage ? "active" : ""
              }`}
              aria-current={
                page === currentPage ? "page" : undefined
              }
            >
              {page}
            </Link>
          );
        })}
      </div>

      {currentPage < totalPages ? (
        <Link
          className="media-pagination-nav"
          href={createPageUrl(currentPage + 1)}
        >
          Next →
        </Link>
      ) : (
        <span className="media-pagination-nav disabled">
          Next →
        </span>
      )}
    </nav>
  );
}
