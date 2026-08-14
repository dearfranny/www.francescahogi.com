"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav>
      <Link className="mark" href="/" onClick={close}><b>Francesca</b> Hogi</Link>

      <div className="navlinks">
        <Link href="/about">About</Link>
        <Link href="/book">Book</Link>
        <Link href="/work">Work with me</Link>
        <Link href="/for-brands">For brands</Link>
        <Link href="/for-men">For men</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-mobile${open ? " is-open" : ""}`}>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/book" onClick={close}>Book</Link>
        <Link href="/work" onClick={close}>Work with me</Link>
        <Link href="/for-brands" onClick={close}>For brands</Link>
        <Link href="/for-men" onClick={close}>For men</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
      </div>
    </nav>
  );
}
