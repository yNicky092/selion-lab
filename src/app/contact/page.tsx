"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Just saying hello / General");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErr: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) nextErr.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErr.email = "Please enter a valid email address.";
    }
    if (message.trim().length < 10) {
      nextErr.message = "Write a short message (10+ characters).";
    }
    setErrors(nextErr);
    if (Object.keys(nextErr).length === 0) {
      setSubmitted(true);
    }
  };

  const mailtoHref = `mailto:contact@selionlab.com?subject=${encodeURIComponent(
    `[${topic}] from ${name.trim()}`
  )}&body=${encodeURIComponent(message.trim())}`;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          {/* Open Left Editorial Column */}
          <div>
            <p className="eyebrow">Say Hello</p>
            <h1 className={styles.title}>We’d love to hear from you.</h1>
            <p className={styles.lead}>
              Questions about Silicon Emergence, thoughts on our simulated architectures, Virtual Fab curiosity, or press inquiries: write directly to our team.
            </p>

            <div className={styles.directBlock}>
              <p className={styles.directLabel}>Direct studio email</p>
              <a
                href="mailto:contact@selionlab.com"
                className={styles.directEmail}
              >
                contact@selionlab.com
              </a>
              <p className={styles.directNote}>
                No automated support queues. Every note reaches us directly.
              </p>
            </div>
          </div>

          {/* Right VisionOS Optical Glass Form Card */}
          <div className={`optical-glass ${styles.formGlass}`}>
            {!submitted ? (
              <>
                <h2 className={styles.formTitle}>Send a note</h2>
                <form onSubmit={handleSubmit} noValidate className={styles.form}>
                  <div className={styles.row2}>
                    <div>
                      <label htmlFor="c-name" className={styles.label}>
                        Your Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        className={styles.input}
                      />
                      {errors.name && (
                        <p className={styles.error}>{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="c-email" className={styles.label}>
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className={styles.input}
                      />
                      {errors.email && (
                        <p className={styles.error}>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-topic" className={styles.label}>
                      What’s on your mind?
                    </label>
                    <select
                      id="c-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className={styles.input}
                    >
                      <option>Just saying hello / General</option>
                      <option>Silicon Emergence</option>
                      <option>Virtual Fab &amp; Simulated Architectures</option>
                      <option>Press, Creators &amp; Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-msg" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what caught your interest..."
                      className={styles.input}
                    />
                    {errors.message && (
                      <p className={styles.error}>{errors.message}</p>
                    )}
                  </div>

                  <div>
                    <button type="submit" className="btn-primary">
                      Prepare Email
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className={styles.doneBox}>
                <p className="eyebrow">Ready to send</p>
                <h2 className={styles.formTitle} style={{ marginBottom: 0 }}>
                  Thanks for writing!
                </h2>
                <p className={styles.directNote}>
                  Topic: {topic} · From: {name} ({email})
                </p>
                <div className={styles.doneActions}>
                  <a href={mailtoHref} className="btn-primary">
                    Open in Mail Client →
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="btn-glass"
                  >
                    Write Another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
