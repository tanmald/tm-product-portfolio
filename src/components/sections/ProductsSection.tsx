import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";
import { products, Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";

const ProductDetailDialog = ({
  product,
  open,
  onOpenChange,
}: {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">{product.sector}</Badge>
            <Badge variant="secondary">{product.country}</Badge>
            <Badge variant="secondary">{product.platform}</Badge>
            <Badge variant="outline">{product.type}</Badge>
          </div>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription className="text-primary font-medium">
            {product.role}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <p className="text-muted-foreground leading-relaxed">
            {product.detailedDescription}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              What I Did
            </h4>
            <ul className="space-y-2">
              {product.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Impact
            </h4>
            <div className="grid gap-2">
              {product.impact.map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-2.5 text-sm text-foreground">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts = products.slice(0, 4);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5 text-foreground leading-tight font-serif">
              Things I've{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                built
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From enterprise automotive platforms to national-scale public health systems —
              products shaped across 6+ sectors and 5+ countries.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {featuredProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.08}>
              <div
                className="group py-8 border-t border-border/60 cursor-pointer transition-colors hover:bg-muted/30 -mx-6 px-6 rounded-lg"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <span className="text-sm font-medium text-primary">{product.role}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    <Badge variant="secondary" className="text-xs">{product.sector}</Badge>
                    <Badge variant="outline" className="text-xs">{product.type}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-[15px] max-w-3xl">
                  {product.description}
                </p>

                {/* Key impact — one-liner */}
                {product.impact[0] && (
                  <p className="mt-3 text-sm font-medium text-foreground/80">
                    ↗ {product.impact[0]}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border/60" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-4 transition-colors"
            >
              View all {products.length} projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ProductDetailDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsSection;
