import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function About() {
  return (
    <main>


<Nav />

<header className="about-hero">
  <div>
    <div className="marker"><span>hi, I'm</span><span>Francesca</span></div>
    <h1>Most people call me Franny.</h1>
    <p className="intro">I've spent 13 years trying to understand why love is so hard for so many people, and more importantly, what to actually do about it.</p>
  </div>
  <div className="a-photo"><img src="/images/about-hero-2.jpg" alt="Francesca Hogi seated in a plaster archway, photographed by Grace Bukunmi" /></div>
</header>

<article className="about-body">
  <p>Not the surface stuff. The real stuff. Why smart, self-aware, genuinely wonderful people keep hitting the same walls. Why insight alone doesn't change outcomes. Why some people seem to attract love effortlessly while others, equally deserving, keep coming up short.</p>

  <p className="big">Here's what I've come to believe, after hundreds of clients and thousands of love journeys: most of it comes down to <span className="worth">worth</span>. Not whether you <em>have</em> it, you do, but whether you <em>live</em> like you do.</p>

  <p>The way you relate to your own worth quietly decides what you'll accept, what you'll ask for, and what you'll settle for. In love, and in every other room you walk into.</p>

  <p>That conviction is the through-line of everything I do.</p>

  <p>For individuals, it led me to build the Core Love Codes, a framework that combines Human Design with my proprietary dating archetype system to reveal exactly how you're wired to attract, connect, and love. 180 distinct codes. One is yours. You can find yours now at <a href="https://franny.app">franny.app</a>.</p>

  <p>I'm also the author of <em>How to Find True Love: Unlock Your Romantic Flow and Create Lasting Relationships</em> (Hachette, 2025), a hands-on guide to the inside job of finding lasting love. My two TED talks have reached over 2 million people. And The True Love Society, the community I founded, is the most accessible way to be coached by me: live group coaching, masterclasses, and a community doing the work alongside you.</p>

  <p>The same thinking led me to organizations. Because worth, trust, and belonging aren't only personal, they're the quiet architecture of how teams connect, how leaders show up, and whether the people in a room actually reach each other. I help organizations design that connection on purpose instead of leaving it to chance.</p>

  <p>Before all of this, I was a corporate attorney for over a decade, supervising thousands of lawyers across major litigations, investigations, and M&A transactions. That career taught me a lot about how people relate under pressure, how patterns show up in high-stakes environments, and how to see what others can't. I use all of it.</p>

  <p>Oh, and I competed on two seasons of Survivor and was voted off first both times. I genuinely believe those experiences taught me more about resilience, self-knowledge, and showing up as yourself under pressure than almost anything else. I'm proud of them.</p>

  <p>Whether you're here to understand how you're wired for love, or to bring more genuine connection to your organization, it starts the same way: with knowing your worth, and building from there.</p>

  <div className="about-cta">
    <a className="btn" href="/work">Work with me</a>
    <a className="link" href="https://www.franny.app/" target="_blank" rel="noopener">Get your Core Love Code</a>
  </div>
</article>

<section className="creds-block">
  <div className="creds-row">
    <span className="rlabel">Contributor to</span>
    <div className="marks">
      <a href="https://www.forbes.com/sites/francescahogi/" target="_blank" rel="noopener">Forbes</a>
      <a href="https://www.huffpost.com/author/francesca-886" target="_blank" rel="noopener">HuffPost</a>
      <a href="https://katiecouric.com/lifestyle/relationships/what-to-do-if-your-kids-dont-like-who-youre-dating/" target="_blank" rel="noopener">Katie Couric Media</a>
      <a href="https://www.mariashriverssundaypaper.com/finding-love-francesca-hogi/" target="_blank" rel="noopener">Maria Shriver's Sunday Paper</a>
    </div>
  </div>
  <div className="creds-row">
    <span className="rlabel">Featured in</span>
    <div className="marks">
      <span>Forbes</span><span>The New York Times</span><span>The Washington Post</span><span>Harper's Bazaar</span><span>Marie Claire</span><span>Essence</span><span>NPR</span><span>The Today Show</span>
    </div>
  </div>
  <div className="creds-row">
    <span className="rlabel">Stages & partners</span>
    <div className="marks">
      <span>TED</span><span>Netflix</span><span>Amazon</span><span>Mastercard</span><span>Bumble</span><span>Match</span><span>Fast Company</span><span>Soho House</span><span>Culture3</span><span>House of Beautiful Business</span>
    </div>
  </div>
  <a href="https://www.zoom.com/en/audiences/solopreneurs/" target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", textDecoration: "none" }}>
    <img src="/images/zoom-solopreneur-50.png" alt="Zoom Solopreneur 50, 2026 Honoree" style={{ width: "84px", height: "auto", borderRadius: ".35rem" }} />
    <p className="badge-note" style={{ marginTop: 0 }}>2026 Zoom Solopreneur 50 Honoree</p>
  </a>
</section>

<Footer />
    </main>
  );
}
