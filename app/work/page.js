import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata = { title: "Work with me" };

export default function Work() {
  return (
    <main>

<Nav />

<header className="about-hero">
  <div>
    <div className="marker"><span>work</span><span>with me</span></div>
    <h1 style={{ maxWidth: "18ch" }}>Ready to change your love life? Here's where we start.</h1>
    <p className="intro">Whether you're newly curious or you've been doing this work for years, there's a clear next step for you below. Real support. Real strategy. Real empathy.</p>
  </div>
  <div className="a-photo"><img src="/images/work-hero.jpg" alt="Francesca Hogi smiling, seated for a portrait" /></div>
</header>

<section className="wrap" style={{ paddingTop: "1rem" }}>

  {/* 1 — Romantic Clarity Session */}
  <div className="offer-block">
    <span className="offer-num">1</span>
    <h2>The Romantic Clarity Session</h2>
    <span className="price">$1.5K</span>
    <span className="spec" style={{ marginTop: 0 }}>90 transformative minutes</span>
    <p className="prose" style={{ marginTop: "1.4rem", maxWidth: "56ch", color: "var(--ink)", fontSize: "1.06rem", lineHeight: 1.6 }}>
      You know something needs to shift. You just can't quite see what it is. This is one focused, honest conversation that changes how you see your entire love life.
    </p>
    <p style={{ marginTop: "1rem", maxWidth: "56ch", color: "var(--stone)", lineHeight: 1.6 }}>
      We'll zero in on one specific challenge, the thing that keeps tripping you up, and I'll help you see what's actually driving it. The pattern underneath the pattern. The blindspot you can't find on your own because you're standing inside it. You'll leave with a new perspective, a clear understanding of what's been holding you back, and a concrete plan to move forward.
    </p>
    <ul className="who-for">
      <li>You're feeling stuck, confused, or just tired of figuring this out alone</li>
      <li>You want clarity fast, not a months-long commitment</li>
      <li>You're ready for one honest conversation that actually moves the needle</li>
    </ul>
    <a className="btn" href="https://calendly.com/dearfranny/romantic-clarity-session" target="_blank" rel="noopener">Book your Clarity Session</a>

    <div className="offer-testimonials">
      <div className="quote">
        <p>"Come to a session with Francesca ready to be open and honest with where you are in your journey. Don't be afraid to dream bigger than you currently imagine. Francesca finds a way to help you make out of reach dreams feel attainable. It's a very empowering experience."</p>
        <div className="who-row">
          <img className="avatar" src="/images/av-lisha.jpg" alt="Lisha" />
          <span className="who">Lisha</span>
        </div>
      </div>
      <div className="quote">
        <p>"Franny really helped me to see what I am capable of and to focus on abundance and opportunity. Since working with her, there have been so many times when I have met new people in everyday places. It is such a superpower I didn't know I had!"</p>
        <div className="who-row">
          <img className="avatar" src="/images/av-nina.jpg" alt="Nina" />
          <span className="who">Nina</span>
        </div>
      </div>
    </div>
  </div>

  {/* 2 — The True Love Society TEMPORARILY COMMENTED OUT
  <div className="offer-block">
    <span className="offer-num">2</span>
    <h2>The True Love Society</h2>
    <span className="price">$47<span style={{ fontSize: "1.1rem" }}>/mo</span></span>
    <span className="spec" style={{ marginTop: 0 }}>or join free</span>
    <p className="prose" style={{ marginTop: "1.4rem", maxWidth: "56ch", color: "var(--ink)", fontSize: "1.06rem", lineHeight: 1.6 }}>
      The most accessible way to be coached by me. Not ready for 1:1? Come build with us.
    </p>
    <p style={{ marginTop: "1rem", maxWidth: "56ch", color: "#4E463C", lineHeight: 1.6 }}>
      The True Love Society is a community of people who want to love their lives regardless of where they are on their dating or relationship journeys. Founded in 2020, we have a free monthly discussion for our community members on living your best life from a spiritual perspective, called Manifestation Monday.
    </p>
    <p style={{ marginTop: "1rem", maxWidth: "56ch", color: "#4E463C", lineHeight: 1.6 }}>
      Paid members get monthly group coaching with me, as well as monthly masterclasses, all for $47 monthly.
    </p>
    <a className="btn" href="https://www.patreon.com/c/truelovesociety" target="_blank" rel="noopener">Join The True Love Society</a>

    <div className="offer-testimonials" style={{ gridTemplateColumns: "1fr" }}>
      <div className="quote">
        <p>"I was skeptical about how coaching would help me meet my person. I thought I would learn about dating and it would be a more enjoyable experience. But Franny helped me open myself up to meeting the amazing man I'm now in a relationship with."</p>
        <div className="who">Liz, 46</div>
      </div>
    </div>
  </div> */}

  {/* 3 — Love Coaching Intensive */}
  <div className="offer-block">
    <span className="offer-num">2</span>
    <h2>The Love Coaching Intensive</h2>
    <span className="price">$15,000</span>
    <span className="spec" style={{ marginTop: 0 }}>3 months · limited spots</span>
    <p className="prose" style={{ marginTop: "1.4rem", maxWidth: "56ch", color: "var(--ink)", fontSize: "1.06rem", lineHeight: 1.6 }}>
      You've done the work. You know yourself. Now let's build the love life that actually reflects that.
    </p>
    <p style={{ marginTop: "1rem", maxWidth: "56ch", color: "var(--stone)", lineHeight: 1.6 }}>
      Real change takes intention, practice, accountability, and someone in your corner as you navigate the genuine complexity of modern dating. This is a dynamic, ongoing coaching relationship built entirely around you. Why do you keep showing up differently than you intend to? Why does momentum stall right when things get real? This is where we work on all of it, together, over time.
    </p>
    <p style={{ marginTop: "1rem", maxWidth: "56ch", color: "var(--stone)", lineHeight: 1.6 }}>
      We begin with a deep-dive session to establish direction. From there we meet regularly across three months, tracking your growth and refining your approach. Between sessions, you have support when you need it most.
    </p>
    <ul className="who-for">
      <li>You're self-aware, but insight alone hasn't changed your results</li>
      <li>You want sustained support and real accountability, not a one-time fix</li>
      <li>You're actively dating or preparing to be, and you want someone experienced in your corner</li>
    </ul>
    <p style={{ color: "var(--stone)", fontStyle: "italic", marginBottom: "1.4rem" }}>Limited spots. We start with a conversation to make sure it's the right fit.</p>
    <a className="btn" href="https://calendly.com/dearfranny/discoverysession" target="_blank" rel="noopener">Let's talk</a>

    <div className="offer-testimonials">
      <div className="quote">
        <p>"I consider Franny more than a love coach. What she teaches and embodies is beyond romantic connection. It's broader love, and love for ourselves. To anyone considering coaching with Franny, you definitely need this for your life. Dating or not!"</p>
        <div className="who-row">
          <img className="avatar" src="/images/av-ayako.jpg" alt="Ayako" />
          <span className="who">Ayako</span>
        </div>
      </div>
      <div className="quote">
        <p>"Francesca provided a safe place to really talk things out and point me in the right direction. I felt so validated and clear on how to move forward after my divorce. I was really surprised by how much progress I made after just one session."</p>
        <div className="who">Anna</div>
      </div>
      <div className="quote">
        <p>"Working with Francesca has literally changed my life. Because of our work together, I'm in the best relationship of my life. I've found true love!"</p>
        <div className="who">Anthony, 55</div>
      </div>
      <div className="quote">
        <p>"It's hard to remember how much I struggled with confidence and dating before I met you. Dating is fun now, I'm not wasting my time anymore and the voice in my head is so much nicer. I'm now dating nicer people as a result!"</p>
        <div className="who">Taylor, 33</div>
      </div>
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
