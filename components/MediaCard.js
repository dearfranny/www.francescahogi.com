export default function MediaCard({ item }) {
  const formattedDate =
    item.displayDate ||
    new Date(`${item.date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const groupedLinks = item.links.reduce((groups, link) => {
    if (!groups[link.action]) {
      groups[link.action] = [];
    }

    groups[link.action].push(link);
    return groups;
  }, {});

  return (
    <article className="media-card">
      <a
        className="media-image"
        href={item.mainUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
        />
      </a>

      <div className="media-meta">
        <span className="spec">{item.type}</span>
        <span className="media-date">{formattedDate}</span>
      </div>

      <div className="media-outlet">{item.outlet}</div>

      <h3>
        <a
          href={item.mainUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      </h3>

      <p className="media-blurb">{item.blurb}</p>

      <div className="media-links">
        {Object.entries(groupedLinks).map(([action, links]) => (
          <div className="media-link-row" key={action}>
            <strong>{action}:</strong>{" "}
            {links.map((link, index) => (
              <span key={link.url}>
                {index > 0 && " | "}
                <a
                  className="link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}
