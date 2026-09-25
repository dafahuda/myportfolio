import { useState } from "react";
import Icon from "../components/Icon";

const SOCIALS = [
  {
    href: "mailto:dafahudarifai147@gmail.com",
    label: "Email",
    value: "dafahudarifai147@gmail.com",
    icon: "envelope",
  },
  {
    href: "https://www.linkedin.com/in/dafa-huda-rifa-i",
    label: "LinkedIn",
    value: "in/dafa-huda-rifa-i",
    icon: "linkedin",
  },
  {
    href: "https://github.com/dafahuda",
    label: "GitHub",
    value: "@dafahuda",
    icon: "github",
  },
  {
    href: "https://www.instagram.com/dafa.h.r",
    label: "Instagram",
    value: "@dafa.h.r",
    icon: "instagram",
  },
];

const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="kontak" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5" data-reveal>
            <span className="section-label">Kontak</span>
            <h2 className="section-title">Mari bicara.</h2>
            <p className="lead mb-8">
              Terbuka untuk peluang kerja full-time dan diskusi teknis. Balasan
              tercepat lewat email atau LinkedIn.
            </p>
            <ul className="space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-3 border-b border-[var(--color-line)]"
                  >
                    <Icon
                      icon={s.icon}
                      className="text-[var(--color-muted)] text-lg group-hover:text-[var(--color-accent)] transition-colors"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                        {s.label}
                      </p>
                      <p className="text-[15px] truncate group-hover:text-[var(--color-accent)] transition-colors">
                        {s.value}
                      </p>
                    </div>
                    <Icon
                      icon="arrow-up-right"
                      className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <form
              action="https://formsubmit.co/dafahudarifai147@gmail.com"
              method="POST"
              onSubmit={onSubmit}
              className="card p-6 md:p-8 space-y-5"
              noValidate
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="c-nama" className="block text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  id="c-nama"
                  name="nama"
                  type="text"
                  required
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-md px-4 py-3 text-[15px] focus:border-[var(--color-ink)] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-md px-4 py-3 text-[15px] focus:border-[var(--color-ink)] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="c-pesan" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="c-pesan"
                  name="pesan"
                  rows="5"
                  required
                  className="w-full bg-[var(--color-bg)] border border-[var(--color-line)] rounded-md px-4 py-3 text-[15px] focus:border-[var(--color-ink)] focus:outline-none resize-none"
                />
              </div>

              <div aria-live="polite" className="min-h-[1.25rem] text-sm">
                {status === "ok" && (
                  <span className="text-[var(--color-accent)]">
                    Pesan terkirim. Saya akan balas segera.
                  </span>
                )}
                {status === "err" && (
                  <span className="text-red-600">
                    Gagal mengirim. Coba lagi atau langsung email.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary w-full sm:w-auto"
              >
                {status === "sending" ? "Mengirim..." : "Kirim pesan"}
                {status !== "sending" && <Icon icon="send" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
