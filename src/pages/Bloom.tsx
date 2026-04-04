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
  Building2,
  Layers,
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
              I'm a Senior Product Manager with 7.5 years across consulting and
              product ownership — building B2C self-service apps for telecoms,
              scaling a B2B2C platform across 73 countries in a regulated industry,
              and accumulating a biology degree, a nursing year, and a deep personal
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
              What Bloom has built is{" "}
              <span className="text-primary">remarkable.</span>
              <br />
              Here's what I'd do next.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bloom already covers five distinct life stages — fertility,
              pregnancy, postpartum, menopause, and pelvic conditions — with an
              AI clinical system that retains context, surfaces emerging signals,
              and engages proactively. That's a genuinely hard product to build.
              Most digital health platforms still treat each condition in
              isolation. Bloom doesn't, and that's a competitive moat worth
              protecting.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Where I'd push next:
            </p>
          </ScrollReveal>

          <div className="space-y-8 mb-8">
            <ScrollReveal delay={0.25}>
              <div className="border-l-2 border-primary/40 pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  Clinical memory across the full life arc
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A woman who joins Bloom for pelvic health in her 30s will
                  likely move through pregnancy, postpartum, and perimenopause
                  as a member. The longitudinal relationship is already possible
                  — but there's a gap between storing context and actively using
                  it to surface signals earlier, connect patterns across
                  transitions, and make the product materially smarter the longer
                  someone is a member.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l-2 border-primary/40 pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  Body literacy as a differentiator, not a feature
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biomarker integration exists. But closing the gap between data
                  collection and genuine body literacy — for irregular cycles,
                  PCOS, perimenopause — is still unsolved in most digital health
                  products. I know this territory from the inside. It's not a
                  feature request; it's a product philosophy that either defines
                  a platform or gets bolted on later.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="border-l-2 border-primary/40 pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  Outcome-based roadmap prioritisation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bloom's pricing model — 50% at activation, 50% at clinical
                  outcome — creates a direct line between product decisions and
                  whether an outcome is reached. That means prioritisation isn't
                  just about engagement metrics; it's about clinical efficacy. I'd
                  build that line explicitly into how the team debates and decides
                  on the roadmap.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sword Health has the clinical credibility, the AI infrastructure,
              and the outcome data to make this defensible at scale. The
              opportunity is to go deeper — not broader.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  B2B2C MODEL                                                 */}
      {/* ============================================================ */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Understanding the model
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-10 text-foreground font-serif">
              Building for{" "}
              <span className="text-primary">two users</span> at once
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bloom isn't a consumer app. It's sold to employers, health plans,
              and unions — who pay based on member outcomes. The Head of Product
              holds two products simultaneously: the clinical experience women
              interact with daily, and the ROI story that keeps employers
              renewing at outcome-based pricing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex gap-4 items-start mb-8">
              <Building2 className="w-5 h-5 text-primary shrink-0 mt-1" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                I've worked in this model before. ONE Sales Workplace is sold to
                BMW Group brands — BMW, MINI, Motorrad, Rolls-Royce — who pay
                for it and care about adoption and ROI. Dealership agents are
                the users who need it to not slow them down. For four years, I
                built for both sides. The tension between what the payer measures
                and what the user experiences is familiar territory.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex gap-4 items-start">
              <Layers className="w-5 h-5 text-primary shrink-0 mt-1" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                The difference with Bloom is the stakes are higher on both sides.
                For members: the product has clinical consequences. For employers:
                the ROI is measured in real health outcomes — $3,082 annual
                savings per member, 2.9:1 gross ROI. Those numbers don't come
                from shipping features. They come from product decisions that
                actually change health behaviour. I'd hold both sides of that
                equation in every roadmap conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RELEVANT EXPERIENCE                                         */}
      {/* ============================================================ */}
      <section className="py-32 px-6">
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Head of Product means multiplying impact through others. Here's
              where I've already started.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              I don't have three years of formal PM line management. What I have
              is 1.5 years of building PM culture from scratch — in an
              environment where there wasn't one. Product Talks, the mentoring
              programme, growing Beatriz from shadowing to autonomous delivery —
              these weren't inherited structures. They were built. I'd argue
              that's harder, and more directly transferable to a team that's
              still defining how it works.
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
      {/*  HONEST GAPS                                                 */}
      {/* ============================================================ */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              Honest gaps
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal mt-3 mb-10 text-foreground font-serif">
              What I'm{" "}
              <span className="text-primary">not</span> — and why I'd still
              bet on me
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="border-l-2 border-muted pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  I haven't worked in US healthcare
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My experience is European. But I've scaled a platform across
                  73 countries, navigated market-by-market regulatory constraints
                  in automotive, and built for employer/payer dynamics in a B2B2C
                  model. Platform scaling is platform scaling. Clinical domain
                  knowledge doesn't change at the Atlantic.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-2 border-muted pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  My B2C work is earlier in my career
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Deloitte, I shipped a B2C mobile self-service app for NOS
                  (inception to go-live in 10 months) and led infrastructure for
                  Unitel, Angola's largest telecom, serving millions of
                  subscribers. My recent years have been B2B2C at BMW. The
                  consumer instincts are there — and I've been deliberately
                  building them back through BookVault and PlateCheck.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l-2 border-muted pl-6 py-1">
                <h3 className="text-foreground font-semibold mb-2">
                  Regulated industry, different domain
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automotive is heavily regulated — safety standards, data
                  privacy, cross-market compliance. I haven't navigated HIPAA or
                  FDA directly, but I understand what it means to ship in an
                  environment where getting it wrong has real consequences, where
                  legal and compliance are active stakeholders, and where you
                  build defensibility into the product from the start.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-32 px-6">
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
