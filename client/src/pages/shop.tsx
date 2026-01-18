import { Layout } from "@/components/layout";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Shop() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-20 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                    New Arrival
                  </div>
                )}
                
                {/* Image Container */}
                <div className="aspect-[3/4] overflow-hidden relative bg-black/50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase tracking-wider text-xs h-10">
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">{product.category}</p>
                  <h3 className="text-white font-display text-lg font-medium leading-tight mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-white font-bold">${product.price}</span>
                    <div className="flex text-primary/60 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </Layout>
  );
}
