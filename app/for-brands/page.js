import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata = { title: "For brands" };

export default function ForBrands() {
  return (
    <main>

<Nav />

<header className="about-hero">
  <div>
    <div className="marker"><span>for</span><span>brands</span></div>
    <h1>Love, trust, and belonging are brand problems, too.</h1>
    <p className="intro">I help teams build products, campaigns and communities that actually connect. Attention is easy to buy. Community can't be bought, but it can be built.</p>
  </div>
  <div className="a-photo"><img src="/images/for-brands-hero.jpg" alt="Francesca Hogi seated for a portrait" /></div>
</header>

<section className="wrap" style={{ maxWidth: "52rem", margin: "0 auto", paddingTop: "1rem" }}>
  <p style={{ fontSize: "1.08rem", lineHeight: 1.68, color: "var(--ink)" }}>
    Thirteen years studying what makes people connect, put to work for the brands trying to earn it. The same thing that decides whether someone believes they're worth loving decides whether a room full of strangers trusts each other enough to actually connect. Brands run into that exact problem constantly: they can buy attention, they can't buy trust.
  </p>

  <div className="press-callout" style={{ marginTop: "2.4rem" }}>
    <p>Forbes' CMO Network profiled this idea in July 2026, in a piece by culture strategist Dr. Marcus Collins exploring what a love coach's thinking about worth and respect means for how we experience work.</p>
    <a className="link" href="https://www.forbes.com/sites/marcuscollins/2026/07/17/a-love-coach-argues-our-love-for-our-job-is-costing-us-and-shes-right/" target="_blank" rel="noopener">Read the Forbes feature →</a>
  </div>

  <div className="press-callout" style={{ marginTop: "1.6rem" }}>
    <p>I'm a KUKĀI Culture Maker, part of a curated network of speakers and thinkers helping brands understand culture, connection, and what actually moves people.</p>
    <a className="link" href="https://kukai.agency/" target="_blank" rel="noopener">See KUKĀI Partners →</a>
  </div>
</section>

<section className="consult" id="how-i-work" style={{ marginTop: "clamp(3.5rem,6vw,5rem)" }}>
  <div className="wrap" style={{ paddingBottom: "2.5rem" }}>
    <span className="marker"><span>how</span><span>i work</span></span>
    <h2 style={{ maxWidth: "20ch" }}>Three ways to bring me in, depending on how deep you want to go.</h2>
  </div>

  <div className="tiers">
    <div className="tier">
      <img src="/images/t1-keynote.jpg" alt="A TED discovery session table card reading Draw Together: pick a subject and draw it with a new friend" />
      <h3>I design the room</h3>
      <p>Connection formats built so strangers actually talk to each other, not past each other. This is the part most people can't buy anywhere else, and it's the part that leads.</p>
      <span className="where">TED discovery sessions · Culture3 · Soho House</span>
    </div>
    <div className="tier">
      <img src="/images/t2-moderate.jpg" alt="Francesca Hogi moderating a conversation between two speakers" />
      <h3>I run the conversation</h3>
      <p>Hosting and moderating, so the people you put on stage say the thing they came to say instead of their bio, and the room stays with them the whole time.</p>
      <span className="where">Mastercard · Amazon on Clubhouse · House of Beautiful Business</span>
    </div>
    <div className="tier">
      <img src="/images/t3-design.jpg" alt="Francesca Hogi delivering a keynote to a seated audience" />
      <h3>I speak</h3>
      <p>Keynotes on connection, on love, and on why the two are less separate than your org chart assumes. Built for the room they're actually walking into.</p>
      <span className="where">Fast Company Innovation Festival · In Bloom · Hello Sunshine · Global Love Institute</span>
    </div>
  </div>
</section>

<section className="creds-block">
  <div className="creds-row">
    <span className="rlabel">Brands & collaborators</span>
    <div className="logo-wall">
      <img src="/images/logos/netflix.png" alt="Netflix" />
      <img src="/images/logos/match.png" alt="Match" />
      <img src="/images/logos/bumble.png" alt="Bumble" />
      <img src="/images/logos/iheartradio.png" alt="iHeartRadio" />
      <img src="/images/logos/amazon-studios.png" alt="Amazon Studios" />
      <span className="txt">Foria</span>
      <img src="/images/logos/kiehls.png" alt="Kiehl's" />
      <span className="txt">NOWATCH</span>
      <img src="/images/logos/soho-house.png" alt="Soho House" />
    </div>
  </div>
  <div className="creds-row">
    <span className="rlabel">Featured in</span>
    <div className="marks">
      <span>Forbes</span><span>The New York Times</span><span>The Washington Post</span><span>Harper's Bazaar</span><span>Marie Claire</span><span>Essence</span><span>NPR</span><span>The Today Show</span>
    </div>
  </div>
  <div className="creds-row">
    <span className="rlabel">Stages</span>
    <div className="logo-wall">
      <img src="/images/logos/ted.png" alt="TED" />
      <img src="/images/logos/fast-company.png" alt="Fast Company" />
      <span className="txt">Culture3</span><span className="txt">House of Beautiful Business</span><span className="txt">In Bloom</span><span className="txt">Cannes Lions</span><span className="txt">Black Love</span><span className="txt">Sistas in Sales</span><span className="txt">Global Love Institute</span><span className="txt">Hello Sunshine</span>
    </div>
  </div>
</section>

<section className="wrap" style={{ textAlign: "center", borderTop: "1px solid var(--rule)" }}>
  <div className="marker" style={{ margin: "0 auto 1.2rem" }}><span>let's</span><span>talk</span></div>
  <h2 style={{ maxWidth: "22ch", margin: "0 auto" }}>Tell me about the room you're trying to build.</h2>
  <div className="hero-cta" style={{ justifyContent: "center", marginTop: "2rem" }}>
    <a className="btn" href="/contact">Start a conversation</a>
  </div>

  <div style={{ marginTop: "2.6rem" }}>
    <p style={{ color: "#4E463C", marginBottom: "1rem" }}>Want the free Serendipity Playbook first? Drop your email and it's yours.</p>
    <EmailCapture
      source="serendipity-playbook"
      buttonLabel="Get the playbook"
      successMessage="Thanks! Your playbook is ready:"
      downloadUrl="https://thetruelovesociety.s3.us-west-1.amazonaws.com/THE+SERENDIPITY+PLAYBOOK+by+Francesca+Hogi+www.francescahogi.com.pdf"
      downloadLabel="Download the Serendipity Playbook"
      align="center"
    />
  </div>
</section>

<Footer />
    </main>
  );
}
