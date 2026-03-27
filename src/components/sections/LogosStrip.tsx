import ScrollReveal from "@/components/ScrollReveal";

const companies = [
  {
    name: "BMW Group",
    label: (
      <span className="text-[22px] font-bold tracking-tight leading-none">
        BMW <span className="font-light">Group</span>
      </span>
    ),
  },
  {
    name: "Critical TechWorks",
    label: (
      <span className="text-[22px] font-bold tracking-tight leading-none">
        Critical <span className="font-light">TechWorks</span>
      </span>
    ),
  },
  {
    name: "Deloitte",
    label: (
      <span className="text-[22px] font-bold tracking-tight leading-none inline-flex items-end gap-[2px]">
        Deloitte
        <span className="inline-block w-[5px] h-[5px] rounded-full bg-[#86BC25] mb-[2px] shrink-0" />
      </span>
    ),
  },
];

const LogosStrip = () => {
  return (
    <section className="py-12 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs font-medium text-muted-foreground/40 tracking-[0.2em] uppercase text-center mb-8">
            Experience
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            {companies.map((company) => (
              <div
                key={company.name}
                className="text-foreground/25 hover:text-foreground/45 transition-colors duration-300"
              >
                {company.label}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LogosStrip;
