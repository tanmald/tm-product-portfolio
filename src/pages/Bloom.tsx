import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Heart,
  Microscope,
  Users,
  Target,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — curated cases for Bloom pitch                              */
/* ------------------------------------------------------------------ */

const relevantCases = [
  {
    title: "4 Years Owning a Platform Across 73 Countries",
    context: "ONE Sales Workplace — BMW Group",
    summary:
      "Grew from executing a business-defined strategy to defining ~80% of product direction over 4 years. Pushed back on requirements, reframed problems based on user research, and coordinated rollout across 30+ markets. Built trust through presence, questions, and results — not title.",
    signal: "Strategic ownership earned, not assigned",
    icon: Target,
  },
  {
    title: "Refusing the Prescribed Solution",
    context: "Notification Engagement — BMW Group",
    summary:
      "A senior stakeholder visited dealerships, heard agents weren't seeing notifications, and came back with a demand: make the icon bigger, animated, a different colour. Instead of shipping the cosmetic fix, I investigated. The 91% read rate was a vanity metric — actual reach was 18.5 readers per notification. The real problem was targeting and timing, not the icon.",
    signal: "Diagnosed before prescribing",
    icon: Microscope,
  },
  {
    title: "700+ Users Told Us What Was Wrong",
    context: "Customer Context Discovery — BMW Group",
    summary:
      "Co-designed and deployed a survey across Italy, Poland, and Sweden. 700+ dealership agents surfaced a consistent pain: customer data didn't flow between products, forcing repeated lookups. Triangulated survey data with UX research and business input. Secured management buy-in for a phased approach, then pivoted to a back-end-first strategy when other teams couldn't commit capacity.",
    signal: "Discovery-led product direction",
    icon: MessageSquare,
  },
  {
    title: "Two Failed Deployments — and What I Changed",
    context: "Email Notifications — BMW Group",
    summary:
      "As PM, I was accountable when an email feature failed in production twice. Both times we had tested, but integration scenarios with external apps only surfaced after go-live. After the second failure, I restructured the go/no-go process: documented happy-path and edge-case scenarios, required sign-off from all parties, and added a dedicated pre-prod round. When a stakeholder later pushed to re-enable the feature without adequate testing, I held the position — backed by data and earned credibility from owning the failures.",
    signal: "Accountability builds authority",
    icon: ShieldCheck,
  },
];

const leadershipItems = [
  {
    title: "Product Talks",
    description:
      "Recurring sessions every 3 weeks with 6 PMs in my department. Started by running a pain-point workshop, clustered themes, voted on priorities, and now we work through them systematically. One outcome: Epic Refinement — a practice from my product — is now being adopted across 3 other teams.",
  },
  {
    title: "Growing a Junior PM",
    description:
      "Took Beatriz on as a direct report for 6 months on ONE. Designed a structured growth programme: shadowing first, then progressive task delegation, building toward autonomous decision-making. Decisions passed through me because she was very junior — but the goal was always to make that unnecessary.",
  },
  {
    title: "PM Mentoring",
    description:
      "Ongoing mentoring with PMs across the department — supporting them on discovery, stakeholder management, and building confidence in their product judgment.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

const Bloom = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---- Minimal header ---- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground tracking-wide">
            Tânia Maldonado
          </span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Head of Product — Bloom
          </span>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-3xl w-full text-center space-y-8">
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
              Why Bloom. Why me. Why now.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl sm:text-7xl font-normal leading-[0.95] tracking-tight text-foreground font-serif">
              Women's health
              <br />
              <em className="not-italic text-primary">deserves better products.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex justify-center">
              <span className="block w-16 h-px bg-primary" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.38}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              I'm a Senior Product Manager with 4 years of platform ownership at
              BMW Group, a biology degree, a year of nursing, and a deep personal
              connection to reproductive health. Bloom's mission isn't just a job
              I want — it's a problem I've lived.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.46}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              My conviction: too many health products mistake feature delivery
              for product strategy. In women's health especially, the cost of
              the wrong direction isn't just wasted sprints — it's misinformation
              that reaches millions of women. Good product management here means
              having the domain depth to know what's right, and the metrics to
              make that case unavoidable.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          className="mt-16 mb-12 text-primary/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  WHY THIS MATTERS TO ME                                      */}
      {/* ============================================================ */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              The personal why
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-10 text-foreground font-serif">
              This isn't <span className="text-primary">abstract</span> to me
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4 items-start">
                <Heart className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Watching a family member navigate the consequences of obstetric
                  negligence — including uterine prolapse — made this personal
                  long before it became professional. I saw what happens when
                  women's health is treated as secondary. Bloom's work on pelvic
                  floor rehabilitation isn't just a product category to me — it's
                  care that could have changed someone I love's life.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-4 items-start">
                <Microscope className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Living with PCOS, I've experienced firsthand the gap between
                  what health apps promise and what bodies actually tell us.
                  Most cycle-tracking apps still assume ovulation happens on day
                  14. They don't track cervical indicators. They can't
                  distinguish prediction from confirmation — which requires three
                  consecutive days of sustained temperature rise. This isn't
                  nitpicking. It's misinformation dressed as health guidance, and
                  millions of women rely on it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-4 items-start">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My biology degree and nursing year gave me the clinical
                  foundations. But what kept me learning — fertility awareness
                  methods, the science of cervical mucus patterns, endocrine
                  disruption in reproductive health — was the realisation that
                  body literacy is still a privilege, not a baseline. That's a
                  product problem, not just a medical one.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRODUCT VISION FOR BLOOM                                    */}
      {/* ============================================================ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Product vision
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-10 text-foreground font-serif">
              From pelvic physio to{" "}
              <span className="text-primary">a beacon</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bloom is already doing important work in pelvic floor
              rehabilitation. But the opportunity is larger than a single
              condition. Women's reproductive health is fragmented across
              disconnected apps, outdated clinical assumptions, and products that
              treat symptoms instead of the whole person.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I believe Bloom should position itself as a{" "}
              <strong className="text-foreground">
                beacon of women's reproductive health
              </strong>{" "}
              — starting where it is strong (pelvic floor, post-partum
              recovery), and expanding into the territory where women are
              underserved: cycle literacy, fertility awareness grounded in real
              biomarkers, perimenopause support, and evidence-based guidance that
              respects what bodies actually signal.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sword Health already has the clinical credibility, the AI
              infrastructure, and the momentum. Bloom has the mission. What it
              needs is a product leader who understands the domain deeply enough
              to expand without diluting — and who has the platform experience to
              scale it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RELEVANT EXPERIENCE                                         */}
      {/* ============================================================ */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Track record
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-5 text-foreground font-serif">
              What I <span className="text-primary">bring</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Four cases that show how I work — not everything I've done, but
              what's most relevant for leading Bloom.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {relevantCases.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollReveal key={c.title} delay={i * 0.1}>
                  <div className="border-l-2 border-primary pl-6 py-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs text-muted-foreground tracking-wide uppercase">
                        {c.context}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {c.summary}
                    </p>
                    <span className="text-sm font-medium text-primary">
                      {c.signal}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LEADERSHIP                                                  */}
      {/* ============================================================ */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Leading people
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-5 text-foreground font-serif">
              Growing PMs, not just <span className="text-primary">products</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Head of Product means multiplying impact through others. Here's
              where I've already started.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {leadershipItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <Users className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl font-normal text-foreground mb-6 font-serif">
              Let's talk about{" "}
              <span className="text-primary">Bloom</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              I'd love to share more about my vision for where Bloom can go —
              and how my experience, domain knowledge, and product instincts
              would serve the team.
            </p>
            <a
              href="mailto:tanmald@hotmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-base shadow-soft hover:shadow-soft-lg hover:bg-primary/85 hover:scale-[1.02] transition-all"
            >
              Get in touch
            </a>
          </ScrollReveal>

          <div className="mt-20">
            <div className="flex items-center justify-center gap-3 text-muted-foreground/40">
              <span className="w-12 h-px bg-primary/20" />
              <span className="text-xs tracking-widest uppercase">
                Tânia Maldonado · 2026
              </span>
              <span className="w-12 h-px bg-primary/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bloom;
