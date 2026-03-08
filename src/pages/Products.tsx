import { useState } from "react";
import { ExternalLink, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { products, Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {product.detailedDescription}
          </p>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              What I Did
            </h4>
            <ul className="space-y-2">
              {product.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Impact
            </h4>
            <div className="grid gap-2">
              {product.impact.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-2.5 text-sm text-foreground"
                >
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

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-primary font-medium text-sm tracking-wide">Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-2 mb-4 text-foreground">
            Things I've{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              built
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of products I've shaped across automotive, telecom, and consulting.
            Each one taught me something new about users, teams, and craft.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group block rounded-2xl border border-border/50 bg-card overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[3/2] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-primary">{product.role}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="secondary">{product.sector}</Badge>
                  <Badge variant="secondary">{product.country}</Badge>
                  <Badge variant="secondary">{product.platform}</Badge>
                  <Badge variant="outline">{product.type}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 text-primary hover:text-primary/80 px-0 gap-1.5"
                  onClick={() => setSelectedProduct(product)}
                >
                  See more
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductDetailDialog
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
