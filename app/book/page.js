import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = { title: "The Book" };

export default function Book() {
  return (
    <main>


<Nav />

<header className="book-hero">
  <div>
    <div className="marker"><span>the</span><span>book</span></div>
    <h1>True love is an inside job.</h1>
    <p className="title"><em>How to Find True Love: Unlock Your Romantic Flow and Create Lasting Relationships</em> · Hachette, 2025</p>
    <p className="desc"><em>How to Find True Love</em> is a holistic, empowering, and practical guide to finding lasting love in the midst of a broken dating culture. It will inspire you to transform your dating journey and discover your hidden power to have the love you want.</p>
    <p className="tagline">An Amazon bestseller · Narrated by the author</p>
    <div className="buy">
      {/* alt Amazon link: https://a.co/d/c0oQyNp */}
      <a className="primary" href="https://www.amazon.com/How-Find-True-Love-Relationships/dp/1538769573" target="_blank" rel="noopener">Amazon</a>
      <a className="ghost" href="https://www.audible.com/pd/How-to-Find-True-Love-Audiobook/B0DD8GV1SP?source_code=ASSGB149080119000H&share_location=pdp" target="_blank" rel="noopener">Audible</a>
      <a className="ghost" href="https://bookshop.org/p/books/how-to-find-true-love-unlock-your-romantic-flow-and-create-lasting-relationships-francesca-hogi/17dadf91d4eea886?ean=9781538769577&bkshp-astro=t" target="_blank" rel="noopener">Bookshop</a>
      <a className="ghost" href="https://www.barnesandnoble.com/w/how-to-find-true-love-francesca-hogi/1146281085?ean=9781538769577" target="_blank" rel="noopener">Barnes & Noble</a>
    </div>
  </div>
  <div className="cover-wrap">
    <div className="cover"><img src="/images/book-cover.jpg" alt="How to Find True Love by Francesca Hogi, book cover" /></div>
  </div>
</header>

<section className="excerpt">
  <div className="inner">
    <div className="marker"><span>from the</span><span>introduction</span></div>
    <blockquote>
      <p>If you feel disempowered, skeptical, or at a loss as to whether true love even exists, much less whether you have the power to make it real in your life, who could blame you? True love can appear to be dependent on nothing but random luck and good timing.</p>
      <p>Despite outer appearances to the contrary, you can connect to love so deeply you make true love inevitable. Why? Because true love is an inside job.</p>
    </blockquote>
    <p className="attr">From the Introduction</p>
  </div>
</section>

<section className="inside">
  <div className="marker one"><span>what's inside</span></div>
  <h2>Four dimensions of love.</h2>
  <div className="dims">
    <div className="dim"><h3>Mindset</h3><p>Change how you think about love.</p></div>
    <div className="dim"><h3>Heartset</h3><p>Feel better about love, and yourself.</p></div>
    <div className="dim"><h3>Soulset</h3><p>Connect with a higher love.</p></div>
    <div className="dim"><h3>Skillset</h3><p>Date in alignment with love.</p></div>
  </div>
</section>

<section className="audio">
  <h2>Listen to an excerpt</h2>
  <p>I narrated the audiobook myself. Have a listen.</p>
  <a className="player" href="https://soundcloud.com/hachetteaudio/how-to-find-true-love-by-francesca-hogi-audiobook-excerpt" style={{textDecoration: 'none'}}>
    <span className="play">▶</span>
    <span className="ptext">How to Find True Love — Audiobook Excerpt<small>Hachette Audio · narrated by Francesca Hogi</small></span>
  </a>
</section>

<section className="praise">
  <div className="marker"><span>early</span><span>praise</span></div>
  <h2>What people are saying.</h2>
  <div className="praise-grid">
    <div className="quote"><p>"When I first met Francesca, I really loved her perspective on love and relationships. I later learned that my friends were sharing her episode on my podcast with their friends to help them better navigate their dating lives. And it worked! I'm grateful all those pearls of wisdom are now in this book!"</p><div className="who-row"><img className="avatar" src="/images/av-sinek.png" alt="Simon Sinek" /><div className="who"><b>Simon Sinek</b><br />Optimist, NYT-bestselling author of <em>The Infinite Game</em>, host of A Bit of Optimism</div></div></div>
<div className="quote"><p>"We're led to assume our relationships will just work out. Franny has created a thoughtful, tangible user manual for finding and embracing love in every relationship. An important reminder that true love is an active practice."</p><div className="who-row"><img className="avatar" src="/images/av-rice.png" alt="Julie Rice" /><div className="who"><b>Julie Rice</b><br />Co-founder, SoulCycle and Peoplehood</div></div></div>
<div className="quote"><p>"This isn't just a book about finding love, it's a book about finding yourself first, which is the foundation for everything else. Franny's approach is rooted in self-awareness, self-advocacy, and deep respect for the journey each person must take. A must-read for anyone ready to cultivate authentic, lasting love."</p><div className="who-row"><img className="avatar" src="/images/av-brunson.png" alt="Paul C. Brunson" /><div className="who"><b>Paul C. Brunson</b><br />Matchmaker and relationship expert</div></div></div>
<div className="quote"><p>"If you're single then you need this book in your life! It's like my love bible! Read it, devour it, sleep next to it in bed every night! Thank me later!"</p><div className="who-row"><img className="avatar" src="/images/av-hughes.png" alt="London Hughes" /><div className="who"><b>London Hughes</b><br />Comedian, actor, screenwriter, author of <em>Living My Best Life, Hun</em></div></div></div>
  </div>
  <div className="praise-more">
    <div className="quote"><p>"Francesca has written YOUR guide to finding TRUE LOVE! This book is inspirational yet practical. If you desire a loving, respectful relationship this book will give you the tools to secure your TRUE LOVE!"</p><div className="who-row"><img className="avatar" src="/images/av-smith.png" alt="Bevy Smith" /><div className="who"><b>Bevy Smith</b><br />Author of <em>Bevelations</em>, host of SiriusXM's Bevelations</div></div></div>
<div className="quote"><p>"Francesca Hogi is a gold-standard love coach. Her methods are heart-centered, practical, and rooted in authenticity, and <em>How to Find True Love</em> captures her essence beautifully."</p><div className="who-row"><img className="avatar" src="/images/av-hoffman.png" alt="Damona Hoffman" /><div className="who"><b>Damona Hoffman</b><br />Author of <em>F the Fairy Tale</em>, relationship expert of The Drew Barrymore Show</div></div></div>
<div className="quote"><p>"How to Find True Love invites you on an enlightening journey that blends mindset, heartset, soulset, and skillset to help you cultivate the deep, fulfilling relationships you are looking for."</p><div className="who-row"><img className="avatar" src="/images/av-nasser.png" alt="Sara Nasserzadeh, PhD" /><div className="who"><b>Sara Nasserzadeh, PhD</b><br />Author of <em>Love by Design</em></div></div></div>
<div className="quote"><p>"A standout. It is a guide to cultivate a relationship first and foremost with yourself, and to bringing more love and joy into your life, regardless of relationship status."</p><div className="who-row"><img className="avatar" src="/images/av-ducharme.png" alt="Robin Ducharme" /><div className="who"><b>Robin Ducharme</b><br />Author of <em>Real Love Ready: A Guide to Relational Literacy</em>, CEO and founder of Real Love Ready, host of Let's Talk Love</div></div></div>
<div className="quote"><p>"Franny's book beautifully captures the essence of true love: taking responsibility for yourself and all your parts to build meaningful connections that bring joy and enrich your life."</p><div className="who-row"><img className="avatar" src="/images/av-brown.png" alt="Aycee Brown" /><div className="who"><b>Aycee Brown</b><br />Spiritual teacher, author of <em>Embody Your Magic: Create the Life of Your Dreams</em>, host of Is My Aura On Straight?</div></div></div>
  </div>
</section>

<section className="excerpt" style={{background: 'var(--cream)', borderTop: '1px solid var(--rule)'}}>
  <div className="inner" style={{textAlign: 'center'}}>
    <h2 style={{marginBottom: '1.6rem'}}>Get your copy.</h2>
    <div className="buy" style={{justifyContent: 'center'}}>
      <a className="primary" href="https://www.amazon.com/How-Find-True-Love-Relationships/dp/1538769573" target="_blank" rel="noopener">Amazon</a>
      <a className="ghost" href="https://www.audible.com/pd/How-to-Find-True-Love-Audiobook/B0DD8GV1SP?source_code=ASSGB149080119000H&share_location=pdp" target="_blank" rel="noopener">Audible</a>
      <a className="ghost" href="https://bookshop.org/p/books/how-to-find-true-love-unlock-your-romantic-flow-and-create-lasting-relationships-francesca-hogi/17dadf91d4eea886?ean=9781538769577&bkshp-astro=t" target="_blank" rel="noopener">Bookshop</a>
      <a className="ghost" href="https://www.barnesandnoble.com/w/how-to-find-true-love-francesca-hogi/1146281085?ean=9781538769577" target="_blank" rel="noopener">Barnes & Noble</a>
    </div>
  </div>
</section>

<Footer />
    </main>
  );
}
