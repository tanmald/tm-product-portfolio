import { ExternalLink } from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-primary font-medium text-sm tracking-wide">Portfolio</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold mt-2 mb-4 text-foreground">
            Things I've <span className="italic">built</span> ✦
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of products I've shaped from zero-to-one or scaled to millions. 
            Each one taught me something new about users, teams, and craft.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-primary">{product.role}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
