import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "../components/shared.jsx";

const contactMethods = [
  {
    label: "Email",
    value: "kushalahsan@gmail.com",
    href: "mailto:kushalahsan@gmail.com",
    detail: "For introductions, ideas, and longer notes",
    mark: "@",
  },
  {
    label: "Phone",
    value: "01712211284",
    href: "tel:+8801712211284",
    detail: "Bangladesh · direct contact",
    mark: "+",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/h-m-ahsan-habib-kushal-0263731a1/",
    detail: "Academic and professional conversations",
    mark: "in",
  },
  {
    label: "ResearchGate",
    value: "View my research profile",
    href: "https://www.researchgate.net/profile/H-M-Kushal?ev=hdr_xprf",
    detail: "Research interests and academic work",
    mark: "RG",
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/AhsanCS64",
    detail: "Projects, experiments, and source",
    mark: "<>",
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
            <p className="eyebrow"><span className="contact-hero__status" />05 / OPEN CHANNEL · DHAKA, BD</p>
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
                <span className="contact-method__mark" aria-hidden="true">{method.mark}</span>
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
