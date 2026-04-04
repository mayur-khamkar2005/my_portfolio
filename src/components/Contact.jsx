import { useState } from "react";
import useRevealAnimation from "../hooks/useRevealAnimation";
import { isSafeHref } from "../lib/url";

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function Contact({ contactMethods, resumeUrl, primaryEmailHref }) {
  const sectionRef = useRevealAnimation({ y: 30, stagger: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return setStatus("All fields are required");
    }

    try {
      setLoading(true);
      setStatus("");

      // 🔥 backend connect yaha karega future me
      console.log("Form Data:", formData);

      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const methods = Array.isArray(contactMethods)
    ? contactMethods.filter(
        (item) =>
          typeof item?.label === "string" &&
          typeof item?.value === "string" &&
          typeof item?.description === "string" &&
          typeof item?.actionLabel === "string",
      )
    : [];

  const hasResume = typeof resumeUrl === "string" && resumeUrl.trim().length > 0;
  const hasPrimaryEmail =
    typeof primaryEmailHref === "string" && primaryEmailHref.trim().length > 0;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-shell scroll-mt-28 py-16 sm:py-24"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        
        {/* LEFT SIDE SAME */}
        <div className="surface-card-strong relative overflow-hidden p-7 sm:p-8">
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-accent-soft blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-4 max-w-lg">
              Open to work, freelance, and good conversations.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              If you&apos;re hiring, building something new, or just want to connect,
              feel free to reach out.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {hasPrimaryEmail ? (
                <a href={primaryEmailHref} className="primary-link">
                  Email Mayur <ArrowUpRightIcon />
                </a>
              ) : (
                <span>Email Available On Request</span>
              )}

              {hasResume ? (
                <a href={resumeUrl} className="ghost-link">
                  Download Resume
                </a>
              ) : (
                <span>Resume Available</span>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {/* 🔥 NEW CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="surface-card p-6 space-y-4"
          >
            <h3 className="font-display text-lg font-medium">
              Send me a message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className="primary-link w-full justify-center"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-text-muted">{status}</p>
            )}
          </form>

          {/* EXISTING METHODS (UNCHANGED) */}
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {methods.length ? (
              methods.map((item) => {
                const href =
                  isSafeHref(item?.href) ? item.href.trim() : "";

                return (
                  <article
                    key={item.label}
                    className="surface-card p-5"
                  >
                    <p>{item.label}</p>
                    <p>{item.value}</p>

                    {href && (
                      <a href={href} className="ghost-link">
                        {item.actionLabel}
                        <ArrowUpRightIcon />
                      </a>
                    )}
                  </article>
                );
              })
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;