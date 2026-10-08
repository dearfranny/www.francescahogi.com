import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <main>


<header className="hero">
  <Nav />
  <div className="hero-grid">
    <div className="hero-copy">
      <div className="marker"><span>love, connection</span><span>& belonging</span></div>
      <h1>Love, <em>by design.</em><br />Not by accident.</h1>
      <p>I help people authentically connect. With themselves, potential romantic partners, and in community.</p>
      <div className="hero-cta">
        <a className="btn" href="/work">Work with me</a>
        <a className="link" href="/about">Read my story</a>
      </div>
    </div>
    <div className="hero-photo">
      <img src="/images/hero-portrait.jpg" alt="Francesca Hogi, love and life coach, photographed against a plaster arch" />
    </div>
  </div>
</header>

<section className="creds" aria-label="Featured with">
  <div className="creds-track">
    <div className="creds-set">
      <span className="creds-label">As seen with</span>
      <img src="/images/logos/ted.png" alt="TED" /><span className="c-dot">•</span>
      <img src="/images/logos/netflix.png" alt="Netflix" /><span className="c-dot">•</span>
      <img src="/images/logos/amazon-studios.png" alt="Amazon Studios" /><span className="c-dot">•</span>
      <img src="/images/logos/mastercard.png" alt="Mastercard" /><span className="c-dot">•</span>
      <img src="/images/logos/bumble.png" alt="Bumble" /><span className="c-dot">•</span>
      <img src="/images/logos/match.png" alt="Match" /><span className="c-dot">•</span>
      <img src="/images/logos/fast-company.png" alt="Fast Company" /><span className="c-dot">•</span>
      <img src="/images/logos/soho-house.png" alt="Soho House" /><span className="c-dot">•</span>
      <img src="/images/logos/culture3.svg" alt="Culture3" style={{ height: "20px" }} /><span className="c-dot">•</span>
    </div>
    <div className="creds-set" aria-hidden="true">
      <span className="creds-label">As seen with</span>
      <img src="/images/logos/ted.png" alt="TED" /><span className="c-dot">•</span>
      <img src="/images/logos/netflix.png" alt="Netflix" /><span className="c-dot">•</span>
      <img src="/images/logos/amazon-studios.png" alt="Amazon Studios" /><span className="c-dot">•</span>
      <img src="/images/logos/mastercard.png" alt="Mastercard" /><span className="c-dot">•</span>
      <img src="/images/logos/bumble.png" alt="Bumble" /><span className="c-dot">•</span>
      <img src="/images/logos/match.png" alt="Match" /><span className="c-dot">•</span>
      <img src="/images/logos/fast-company.png" alt="Fast Company" /><span className="c-dot">•</span>
      <img src="/images/logos/soho-house.png" alt="Soho House" /><span className="c-dot">•</span>
      <img src="/images/logos/culture3.svg" alt="Culture3" style={{ height: "20px" }} /><span className="c-dot">•</span>
    </div>
  </div>
</section>

<section className="wrap two" id="story">
  <div className="prose">
    <span className="marker"><span>thirteen</span><span>years</span></span>
    <h2>I've had a front-row seat to thousands of love stories.</h2>
    <p className="lead">First as a matchmaker. Then as a coach, advisor, and author of <em>How to Find True Love</em> (Hachette). My app, Franny, puts my entire Core Love Codes framework in your pocket.</p>
    <p>My TED talks have reached over two million people. My book is the hands-on guide to the inside job of finding lasting love. And my coaching has helped people of every age and history create the love they'd almost stopped believing was possible.</p>
    <p>I'm also a two-time Survivor contestant, and I was voted off first both times. So I know something about resilience.</p>
    <p style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', alignItems: 'flex-start'}}>
      <a className="link" href="https://www.ted.com/talks/francesca_hogi_how_to_unlock_your_flirting_superpowers" target="_blank" rel="noopener">Watch my Flirting TED talk</a>
      <a className="link" href="https://www.ted.com/talks/francesca_hogi_true_love_and_the_myth_of_happily_ever_after" target="_blank" rel="noopener">Watch my True Love TED talk</a>
    </p>
  </div>
  <figure>
    <img src="/images/ted-wide.jpg" alt="Francesca Hogi on the TED stage in front of a full auditorium" />
    <figcaption>TED — 2.2M views across two talks</figcaption>
  </figure>
</section>

<section id="work">
  <div className="wrap" style={{paddingBottom: '2.5rem'}}>
    <span className="marker"><span>the</span><span>work</span></span>
    <h2 style={{marginTop: '1rem', maxWidth: '18ch'}}>Three ways in. Pick the one that matches where you actually are.</h2>
  </div>
  <div className="offers">
    <div className="offer">
      <span className="offer-num">1</span>
      <h3>Romantic Clarity Session</h3>
      <span className="spec">90 minutes · private</span>
      <p>One focused conversation to identify what's shaping your love life right now and what needs to shift. Most people start here.</p>
      <a className="link" href="/work">See what's involved</a>
    </div>
    <div className="offer">
      <span className="offer-num">2</span>
      <h3>The True Love Society</h3>
      <span className="spec">Monthly · membership</span>
      <p>A place to reimagine the future of dating. Stay in touch by joining my mailing list for updates.</p>
{/* ORIGINAL TLS CTA <a className="link" href="https://www.patreon.com/c/truelovesociety" target="_blank" rel="noopener">See what's involved</a> */}
{/* TEMPORARY TLS CTA */}<a className="link" href="#news">Stay connected</a>
    </div>
    <div className="offer">
      <span className="offer-num">3</span>
      <h3>Love Coaching Intensive</h3>
      <span className="spec">Three months · limited spots</span>
      <p>Private work for people serious about changing their romantic outcomes for good. We go all the way in.</p>
      <a className="link" href="/work">See what's involved</a>
    </div>
  </div>
</section>

<section className="wrap franny" id="franny">
  <div className="prose f-copy">
    <span className="what-is">What is Franny?</span>
    <h2 className="f-head"><em>Understand how you're<br />wired for love.</em></h2>
    <p>Most dating advice is generic. FRANNY is built around you: your Human Design aura type, your dating archetype, the way you're uniquely wired to give and receive love.</p>
    <p>Together they give you your Core Love Code, one of 180. Not a personality test. A living map of how you find love, and it evolves as you do.</p>
    <p style={{marginTop: '2rem'}}><a className="btn f-btn" href="https://www.franny.app/" target="_blank" rel="noopener">Get your Core Love Code</a></p>
  </div>

  <div className="f-cardwrap">
    <div className="f-phone">
      <span className="f-pill f-pill-tr">♥ 180 codes</span>
      <div className="f-screen">
        <div className="f-glow"></div>
        <span className="f-eyebrow">Your Core Love Code</span>
        <div className="f-code"><i>✦</i> PSA46 <i>✦</i></div>
        <div className="f-name">The Insightful Compass</div>
        <p className="f-desc">A far-seeing needle that knows where every relationship is heading before it starts.</p>
        <div className="f-meta">Projector <i>✦</i> Sailor <i>✦</i> 4/6</div>
        <div className="f-dots">
          <span className="f-rule"></span>
          <b className="d-empty"></b><b className="d-half"></b><b className="d-full"></b><b className="d-half"></b><b className="d-empty"></b>
          <span className="f-rule"></span>
        </div>
        <p className="f-quote">"You attract through presence, not pursuit. Your energy is your invitation. When you're lit up, the right people can't look away."</p>
      </div>
      <span className="f-pill f-pill-bl"><i>✦</i> HD × Archetypes</span>
    </div>
  </div>
</section>

<section className="wrap two" id="book">
  <figure>
    <img src="/images/signing.jpg" alt="Francesca Hogi signing copies of How to Find True Love" />
    <figcaption>How to Find True Love — Hachette, 2025</figcaption>
  </figure>
  <div className="prose">
    <span className="marker"><span>the</span><span>book</span></span>
    <h2>True love is an inside job.</h2>
    <p className="lead"><em>How to Find True Love: Unlock Your Romantic Flow and Create Lasting Relationships</em> (Hachette)</p>
    <p style={{marginTop: '2rem'}}><a className="btn" href="#">Get your copy</a></p>
  </div>
</section>

<section className="consult" id="consult">
  <div className="wrap c-open">
    <figure className="c-portrait">
      <img src="/images/for-brands-hero.jpg" alt="Francesca Hogi seated for a portrait" />
    </figure>
    <div className="prose c-intro">
      <span className="marker"><span>for</span><span>brands</span></span>
      <h2>Love, trust, and belonging are brand problems, too.</h2>
      <p className="lead">I help teams build products, campaigns and communities that actually connect.</p>
      <p>Thirteen years studying what makes people connect, put to work for the brands trying to earn it. Community can't be bought, but it can be built.</p>
    </div>
  </div>

  <div className="tiers">
    <div className="tier">
      <img src="/images/t1-keynote.jpg" alt="A TED discovery session table card reading Draw Together: pick a subject and draw it with a new friend" />
      <h3>I design the room</h3>
      <p>Formats built so strangers actually talk to each other. The part most people can't buy anywhere else.</p>
      <span className="where">TED discovery sessions · Culture3 · Soho House</span>
    </div>
    <div className="tier">
      <img src="/images/t2-moderate.jpg" alt="Francesca Hogi moderating a conversation between two speakers" />
      <h3>I run the conversation</h3>
      <p>Hosting and moderating, so the people you put on stage say the thing they came to say instead of their bio.</p>
      <span className="where">Mastercard · Amazon on Clubhouse · House of Beautiful Business</span>
    </div>
    <div className="tier">
      <img src="/images/t3-design.jpg" alt="Francesca Hogi delivering a keynote to a seated audience" />
      <h3>I speak</h3>
      <p>Keynotes on connection, on love, and on why the two are less separate than your org chart assumes.</p>
      <span className="where">Fast Company Innovation Festival · In Bloom · Hello Sunshine · Global Love Institute</span>
    </div>
  </div>

  <div className="wrap c-foot">
    {/* LOGO WALL PLACEHOLDER: Kiehl's, iHeart, Netflix, Amazon, Clubhouse, Match, Bumble, Soho House, Peoplehood, NOWATCH — awaiting logo files */}
    <div className="c-cta">
      <a className="btn" href="/contact">Start a conversation</a>
      <a className="link" href="/for-brands">For brand partnerships →</a>
    </div>
  </div>
</section>

<section className="wrap news" id="news">
  <div className="news-marker"><span>stay</span><span>close.</span></div>
  <p>Love insights, straight to your inbox. Join 1,500+ readers thinking differently about love. No spam, no fluff, and I'll never sell your email.</p>
  <EmailCapture source="newsletter" />
</section>

<Footer />
    </main>
  );
}
