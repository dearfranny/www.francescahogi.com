import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata = {
  metadataBase: new URL("https://www.francescahogi.com"),
  title: {
    default: "Francesca Hogi — Love, connection & belonging",
    template: "%s — Francesca Hogi",
  },
  description:
    "Francesca Hogi is a love and life coach, two-time TED speaker, and author of How to Find True Love. Coaching for individuals, and connection strategy for brands.",
  openGraph: {
    title: "Francesca Hogi",
    description:
      "Love, by design. Not by accident. Coaching, the FRANNY app, and connection strategy for brands.",
    url: "https://www.francescahogi.com",
    siteName: "Francesca Hogi",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#FFF8EC",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <AnnouncementBar /> */}
        {children}
      </body>
    </html>
  );
}
