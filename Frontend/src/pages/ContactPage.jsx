import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "../components/shared.jsx";

function ContactIcon({ type }) {
  const icons = {
    email: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="contact-method__icon">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m2 7 10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="contact-method__icon">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="contact-method__icon">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    researchgate: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="contact-method__icon">
        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.56 12.56 0 0 0-.354 2.083 20.47 20.47 0 0 0-.038 1.63 20.08 20.08 0 0 0 .07 1.643c.096.829.322 1.527.683 2.095.36.566.878.959 1.552 1.179.675.219 1.33.219 1.967 0 .638-.22 1.14-.612 1.509-1.179.368-.567.591-1.265.669-2.095a19.73 19.73 0 0 0 .07-1.643 19.5 19.5 0 0 0-.038-1.63 12.56 12.56 0 0 0-.354-2.083C21.797 1.7 21.39 1.14 20.826.565 20.26.19 19.572 0 18.754 0h.832zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1.172 4.344c-.975 0-1.734.26-2.277.78-.543.52-.813 1.26-.813 2.218 0 .959.27 1.699.813 2.219.543.52 1.302.78 2.277.78.976 0 1.734-.26 2.277-.78.544-.52.814-1.26.814-2.219 0-.958-.27-1.698-.814-2.219-.543-.52-1.301-.78-2.277-.78zm0 1.312c.56 0 .993.166 1.3.497.307.332.46.808.46 1.43 0 .62-.153 1.098-.46 1.43-.307.33-.74.496-1.3.496-.562 0-.995-.165-1.3-.496-.307-.332-.46-.81-.46-1.43 0-.622.153-1.098.46-1.43.305-.33.738-.497 1.3-.497zm4.055 4.11v5.577h1.42v-2.165h1.172c.76 0 1.359-.21 1.797-.631.438-.422.656-.998.656-1.73 0-.732-.218-1.308-.656-1.73-.438-.42-1.037-.631-1.797-.631h-2.592zm1.42 1.188h1.055c.389 0 .688.1.9.299.21.199.316.49.316.874 0 .383-.106.675-.317.874-.211.2-.51.299-.899.299h-1.055v-2.346zm-6.258 1.68H7.5v4.388h2.498c.814 0 1.449-.223 1.904-.67.455-.448.683-1.08.683-1.9 0-.82-.228-1.453-.683-1.9-.455-.447-1.09-.67-1.904-.67h-.952v.752zm.952.752c.47 0 .836.133 1.1.398.264.265.396.643.396 1.136 0 .492-.132.87-.396 1.135-.264.265-.63.397-1.1.397H8.953v-3.066h1.044z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="contact-method__icon">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    huggingface: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="contact-method__icon">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8ZM9 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8 11.5a.5.5 0 0 0-.5.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5a.5.5 0 0 0-.5-.5h-8Zm.54 1h6.92c-.25 1.44-1.52 2.5-3.46 2.5S8.79 13.94 8.54 12.5Z" />
      </svg>
    ),
    beecrowd: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="contact-method__icon">
        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  };
  return icons[type] ?? null;
}

const contactMethods = [
  {
    label: "Email",
    value: "kushalahsan@gmail.com",
    href: "mailto:kushalahsan@gmail.com",
    detail: "For introductions, ideas, and longer notes",
    icon: "email",
  },
  {
    label: "Phone",
    value: "01712211284",
    href: "tel:+8801712211284",
    detail: "Bangladesh · direct contact",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/h-m-ahsan-habib-kushal-0263731a1/",
    detail: "Academic and professional conversations",
    icon: "linkedin",
  },
  {
    label: "ResearchGate",
    value: "View my research profile",
    href: "https://www.researchgate.net/profile/H-M-Kushal?ev=hdr_xprf",
    detail: "Research interests and academic work",
    icon: "researchgate",
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/AhsanCS64",
    detail: "Projects, experiments, and source",
    icon: "github",
  },
  {
    label: "Hugging Face",
    value: "Archmage64",
    href: "https://huggingface.co/Archmage64",
    detail: "Models, datasets, and ML experiments",
    icon: "huggingface",
  },
  {
    label: "Beecrowd",
    value: "AhsanHabib.NCS-12",
    href: "https://judge.beecrowd.com/en/profile/790377",
    detail: "Algorithm practice and problem-solving progress",
    icon: "beecrowd",
  },
];

const conversationTopics = [
  {
    number: "01",
    title: "Research & graduate study",
    copy: "Research questions, supervision, and academic opportunities.",
    value: "Research & graduate study",
  },
  {
    number: "02",
    title: "Software & product work",
    copy: "Thoughtful web applications, engineering, and collaboration.",
    value: "Software & product work",
  },
  {
    number: "03",
    title: "AI / machine learning",
    copy: "Model experiments, intelligent systems, and Bangla NLP.",
    value: "AI / machine learning",
  },
];

const topicOptions = [
  ...conversationTopics.map(({ value }) => value),
  "Something else",
];

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [selectedTopic, setSelectedTopic] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const topic = formData.get("topic");
    const message = formData.get("message");
    const subject = `Portfolio inquiry — ${topic}`;
    const body = [
      `Hi Ahsan,`,
      "",
      message,
      "",
      `Name: ${name}`,
      `Reply to: ${email}`,
      `Topic: ${topic}`,
    ].join("\n");

    window.location.href = `mailto:kushalahsan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormMessage("Your email app should open with a draft. If it doesn't, email kushalahsan@gmail.com directly.");
  }

  function chooseTopic(topic) {
    setSelectedTopic(topic);
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__grain" aria-hidden="true" />
        <div className="page-wrap contact-hero__inner">
          <motion.div
            className="contact-hero__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><span className="contact-hero__status" />08 / OPEN CHANNEL · DHAKA, BD</p>
            <h1>Start with<br /><em>a good question.</em></h1>
            <p className="contact-hero__lead">
              Have an idea, research question, or project in mind? I’m glad to
              hear from people working at the intersection of software,
              intelligent systems, and research.
            </p>
            <a className="contact-hero__email" href="mailto:kushalahsan@gmail.com">
              <span>
                <small>DIRECT EMAIL</small>
                <strong>kushalahsan@gmail.com</strong>
              </span>
              <span className="contact-hero__email-action">Write a note <ArrowIcon diagonal /></span>
            </a>
            <a className="contact-hero__scroll" href="#contact-options">
              Find a way to connect <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="contact-field"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Abstract communication network illustration"
          >
            <div className="contact-field__topline">
              <span>FIELD NOTE / 05</span>
              <span>CONNECTION STUDY</span>
            </div>
            <svg className="contact-field__diagram" viewBox="0 0 520 420" fill="none" aria-hidden="true">
              <defs>
                <pattern id="contact-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M28 0H0V28" stroke="#C2D8B5" strokeOpacity=".12" strokeWidth=".7" />
                </pattern>
                <radialGradient id="contact-core">
                  <stop stopColor="#D8E9BB" stopOpacity=".5" />
                  <stop offset="1" stopColor="#D8E9BB" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path d="M0 0h520v420H0z" fill="url(#contact-grid)" />
              <circle cx="268" cy="209" r="118" stroke="#C2D8B5" strokeOpacity=".15" />
              <circle cx="268" cy="209" r="83" stroke="#C2D8B5" strokeOpacity=".24" strokeDasharray="2 8" />
              <circle cx="268" cy="209" r="49" fill="url(#contact-core)" />
              <path d="m88 295 91-25 89-61 93-83 72 26M92 120l87 37 89 52 93 47 71 52M177 351l2-81m89-61-4-126m97 43 41 143" stroke="#C2D8B5" strokeOpacity=".5" strokeWidth="1" />
              <path d="m88 295 91-25 89-61 93-83 72 26M92 120l87 37 89 52 93 47 71 52" stroke="#D7B876" strokeOpacity=".55" strokeDasharray="3 9" />
              <circle cx="88" cy="295" r="5" fill="#C2D8B5" />
              <circle cx="92" cy="120" r="4" fill="#D7B876" />
              <circle cx="179" cy="270" r="7" fill="#83B88B" />
              <circle cx="268" cy="209" r="13" fill="#DCEFAE" />
              <circle cx="361" cy="126" r="6" fill="#D7B876" />
              <circle cx="433" cy="152" r="8" fill="#C2D8B5" />
              <circle cx="432" cy="308" r="5" fill="#83B88B" />
              <circle cx="177" cy="351" r="4" fill="#D7B876" />
              <circle cx="264" cy="83" r="4" fill="#C2D8B5" />
              <text x="54" y="326">IDEA</text>
              <text x="238" y="241">EXCHANGE</text>
              <text x="388" y="104">NEXT STEP</text>
            </svg>
            <div className="contact-field__caption">
              <span>01 — ASK</span><i /><span>02 — EXCHANGE</span><i /><span>03 — EXPLORE</span>
            </div>
            <span className="contact-field__annotation contact-field__annotation--north">23.8103° N</span>
            <span className="contact-field__annotation contact-field__annotation--south">THOUGHTS IN / POSSIBILITIES OUT</span>
          </motion.div>
        </div>
      </section>

      <section className="contact-hub page-wrap" id="contact-options">
        <div className="contact-hub__heading">
          <div>
            <p className="eyebrow">A few ways to reach me</p>
            <h2>Choose your<br /><em>starting point.</em></h2>
          </div>
          <p>Use whichever channel works best. For a detailed inquiry, the message builder opens a draft in your email app.</p>
        </div>

        <div className="contact-hub__grid">
          <div className="contact-methods" aria-label="Direct contact methods">
            {contactMethods.map((method, index) => (
              <motion.a
                className="contact-method"
                href={method.href}
                key={method.label}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
              >
                <span className={`contact-method__mark contact-method__mark--${method.icon}`} aria-hidden="true">
                  <ContactIcon type={method.icon} />
                </span>
                <span className="contact-method__copy">
                  <small>{method.label}</small>
                  <strong>{method.value}</strong>
                  <span>{method.detail}</span>
                </span>
                <ArrowIcon diagonal />
              </motion.a>
            ))}
            <div className="contact-methods__foot">
              <span className="contact-methods__pulse" aria-hidden="true" />
              <span>Based in Dhaka, Bangladesh</span>
              <span>UTC +06:00</span>
            </div>
          </div>

          <motion.form
            className="contact-form"
            id="contact-form"
            onSubmit={handleSubmit}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55 }}
          >
            <div className="contact-form__heading">
              <div>
                <p className="eyebrow">MESSAGE BUILDER / 01</p>
                <h3>Tell me a little<br /><em>about it.</em></h3>
              </div>
              <span className="contact-form__stamp" aria-hidden="true">AH<br />↗</span>
            </div>
            <p className="contact-form__note">This form creates an email draft on your device. It doesn’t store or send your information from this website.</p>
            <div className="contact-form__row">
              <label>
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="How should I address you?" required />
              </label>
              <label>
                <span>Your email</span>
                <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
              </label>
            </div>
            <label>
              <span>What’s on your mind?</span>
              <select
                name="topic"
                onChange={(event) => setSelectedTopic(event.target.value)}
                required
                value={selectedTopic}
              >
                <option disabled value="">Choose a conversation</option>
                {topicOptions.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
              </select>
            </label>
            <label>
              <span>A few details</span>
              <textarea name="message" placeholder="Share a little context, a question, or what you have in mind..." required rows="4" />
            </label>
            <div className="contact-form__submit-row">
              <button type="submit">Prepare email <ArrowIcon diagonal /></button>
              <span>Opens your default email app</span>
            </div>
            <p className="contact-form__status" role="status" aria-live="polite">{formMessage}</p>
          </motion.form>
        </div>
      </section>

      <section className="contact-topics">
        <div className="page-wrap">
          <div className="contact-topics__heading">
            <p className="eyebrow">A few possible threads</p>
            <h2>There’s room for<br /><em>the unexpected, too.</em></h2>
          </div>
          <div className="contact-topics__grid">
            {conversationTopics.map((topic) => (
              <article className="contact-topic" key={topic.number}>
                <span className="contact-topic__number">{topic.number} / TOPIC</span>
                <h3>{topic.title}</h3>
                <p>{topic.copy}</p>
                <button type="button" onClick={() => chooseTopic(topic.value)}>
                  Start here <ArrowIcon />
                </button>
              </article>
            ))}
          </div>
          <p className="contact-topics__aside">Not sure where your idea fits? Choose “Something else” in the message builder.</p>
        </div>
      </section>
    </div>
  );
}
