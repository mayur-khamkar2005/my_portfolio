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
  const sectionRef = useRevealAnimation({ y: 26, stagger: 0.08 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ tone: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        tone: "error",
        message: "Please fill in your name, email, and message before sending.",
      });
      return;
    }

    const targetEmail =
      typeof primaryEmailHref === "string" && primaryEmailHref.startsWith("mailto:")
        ? primaryEmailHref.replace(/^mailto:/, "").split("?")[0]
        : "";

    if (!targetEmail) {
      setStatus({
        tone: "error",
        message: "The portfolio email link is missing right now. Please use the contact cards below instead.",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        "",
        formData.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    setStatus({
      tone: "success",
      message: "Opening your email app with the message filled in.",
    });
    setFormData({ name: "", email: "", message: "" });
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
  const inputClassName =
    "w-full rounded-2xl border border-line/80 bg-background/70 px-4 py-3 text-sm text-text-primary outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-text-muted focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/10";
  const statusClassName =
    status.tone === "success"
      ? "border-accent/20 bg-accent-soft text-text-primary"
      : "border-rose-500/20 bg-rose-500/10 text-text-primary";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-shell scroll-mt-28 py-16 sm:py-24"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <div className="surface-card-strong relative overflow-hidden p-7 sm:p-8 lg:p-10" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-70" />
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-accent-soft blur-[72px]" />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-4 max-w-lg">
              Open to jobs, internships, freelance work, and new connections.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
              If you want to discuss a role, project, or just connect, feel free to message me.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {hasPrimaryEmail ? (
                <a href={primaryEmailHref} className="primary-link w-full sm:w-auto">
                  Email Mayur <ArrowUpRightIcon />
                </a>
              ) : (
                <span>Email Available On Request</span>
              )}

              {hasResume ? (
                <a
                  href={resumeUrl}
                  download="Mayur_Khamkar_resume.pdf"
                  className="ghost-link w-full sm:w-auto"
                >
                  Download Resume
                </a>
              ) : (
                <span>Resume Available</span>
              )}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="surface-card p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Response Style</p>
                <p className="mt-2 text-sm font-medium text-text-primary">
                  Friendly, direct, and easy to reach.
                </p>
              </div>
              <div className="surface-card p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Work Setup</p>
                <p className="mt-2 text-sm font-medium text-text-primary">
                  Open to remote work, junior roles, and freelance projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="surface-card-strong space-y-5 p-6 sm:p-7" data-reveal>
            <div>
              <h3 className="font-display text-lg font-medium text-text-primary">
                Send me a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                This will open your email app with the message already filled in.
              </p>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text-primary">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={inputClassName}
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text-primary">Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClassName}
                autoComplete="email"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-text-primary">Message</span>
              <textarea
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClassName} min-h-32 resize-y`}
                rows={5}
              />
            </label>

            <button type="submit" className="primary-link w-full justify-center">
              Send Message
            </button>

            {status.message ? (
              <p className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${statusClassName}`}>
                {status.message}
              </p>
            ) : null}
          </form>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2" data-reveal>
            {methods.length
              ? methods.map((item) => {
                  const href = isSafeHref(item?.href) ? item.href.trim() : "";

                  return (
                    <article key={item.label} className="surface-card flex h-full flex-col p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                        {item.label}
                      </p>
                      <p className="mt-3 text-base font-medium text-text-primary">{item.value}</p>
                      <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>

                      {href ? (
                        <a href={href} className="ghost-link mt-5 w-full justify-center sm:w-auto">
                          {item.actionLabel}
                          <ArrowUpRightIcon />
                        </a>
                      ) : null}
                    </article>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
