import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Case Studies", id: "ai" },
  { label: "Skills", id: "skills" },
  { label: "GitHub", id: "github" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const allSections = ["home", ...navItems.map((i) => i.id)];

    const handleScroll = () => {
      setVisible(window.scrollY > 120);

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
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 32, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
