import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <main>

<Nav />

<header className="wrap" style={{ textAlign: "center" }}>
  <div className="marker" style={{ margin: "0 auto 1.4rem" }}><span>get in</span><span>touch</span></div>
  <h1 style={{ maxWidth: "20ch", margin: "0 auto" }}>Contact me.</h1>
  <p style={{ color: "var(--stone)", maxWidth: "44ch", margin: "1.4rem auto 0", fontSize: "1.06rem", lineHeight: 1.6 }}>
    For inquiries about speaking, events, or press opportunities, reach out below. If you're interested in 1:1 coaching or The True Love Society, you can see all of that on the <a className="link" href="/work" style={{ borderBottom: "1px solid var(--rule)" }}>Work with me</a> page.
  </p>
</header>

<section className="wrap contact-cards" style={{ paddingTop: "2rem" }}>
  <div className="offers">
    <div className="offer">
      <h3>Coaching inquiries</h3>
      <span className="spec">Individuals</span>
      <p>Curious which offer fits, or ready to book a session? Everything you need, including direct booking links, lives on the Work with me page.</p>
      <a className="link" href="/work">Explore coaching →</a>
    </div>
    <div className="offer">
      <h3>Brand & speaking inquiries</h3>
      <span className="spec">Organizations</span>
      <p>For consulting, facilitation, keynotes, and brand partnerships. Tell me about the room you're trying to build.</p>
      <a className="link" href="mailto:info@francescahogi.com?subject=Brand%20inquiry">Email me →</a>
    </div>
    <div className="offer">
      <h3>Press & media</h3>
      <span className="spec">Journalists & producers</span>
      <p>For interviews, commentary, and press kit requests. I read everything myself and try to respond within a few business days.</p>
      <a className="link" href="mailto:info@francescahogi.com?subject=Press%20inquiry">Email me →</a>
    </div>
  </div>
</section>

<section className="wrap" style={{ textAlign: "center", borderTop: "1px solid var(--rule)" }}>
  <span className="eyebrow">Find me</span>
  <div className="hero-cta" style={{ justifyContent: "center", marginTop: "1.4rem" }}>
    <a className="link" href="https://www.instagram.com/dearfranny/" target="_blank" rel="noopener">Instagram</a>
    <a className="link" href="https://www.linkedin.com/in/dearfranny/" target="_blank" rel="noopener">LinkedIn</a>
    <a className="link" href="https://franny.app" target="_blank" rel="noopener">franny.app</a>
  </div>
</section>

<Footer />
    </main>
  );
}
