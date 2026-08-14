"use client";
import { useState } from "react";

export default function EmailCapture({
  source,
  placeholder = "Email address",
  buttonLabel = "Sign up",
  successMessage = "Thanks — you're on the list!",
  downloadUrl,
  downloadLabel = "Get your download",
  align = "center",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="capture-success" style={{ textAlign: align }}>
        {successMessage}
        {downloadUrl && (
          <>
            {" "}
            <a className="link" href={downloadUrl} target="_blank" rel="noopener">
              {downloadLabel}
            </a>
          </>
        )}
      </p>
    );
  }

  return (
    <form
      className="field"
      onSubmit={handleSubmit}
      style={{ justifyContent: align === "left" ? "flex-start" : "center", margin: align === "left" ? "0" : "0 auto" }}
    >
      <input
        type="email"
        required
        placeholder={placeholder}
        aria-label={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
      />
      <button type="submit" className="btn" disabled={status === "loading"}>
        {status === "loading" ? "…" : buttonLabel}
      </button>
      {status === "error" && (
        <span className="capture-error">
          Something went wrong. Try again, or email{" "}
          <a href="mailto:info@francescahogi.com">info@francescahogi.com</a>.
        </span>
      )}
    </form>
  );
}
