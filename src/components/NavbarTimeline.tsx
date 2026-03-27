import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Case Studies", id: "ai" },
  { label: "Skills", id: "skills" },
  { label: "GitHub", id: "github" },
];

const NavbarTimeline = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const allSections = ["home", ...navItems.map((i) => i.id)];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = allSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(allSections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(allSections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 right-0 z-40 h-screen flex flex-col justify-center pr-8 pointer-events-none">
      <div className="pointer-events-auto space-y-6">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-3 text-right group"
            >
              <motion.span
                className={cn(
                  "text-xs font-medium transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2",
                  isActive
                    ? "text-primary opacity-100"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </motion.span>
              <motion.div
                className={cn(
                  "relative w-2 h-2 rounded-full transition-all",
                  isActive
                    ? "bg-primary w-3 h-3"
                    : "bg-border hover:bg-muted-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="timeline-pulse"
                    className="absolute inset-0 rounded-full border border-primary"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarTimeline;
