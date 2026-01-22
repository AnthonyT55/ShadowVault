import { Layout } from "@/components/layout";
import { products, type Product } from "@/lib/products";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function Shop() {
  const [sortBy, setSortBy] = useState<string>("featured");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case "price-low":
        return list.sort((a, b) => a.price - b.price);
      case "price-high":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        // Mocking date sort with ID for now as products don't have dates
        return list.sort((a, b) => b.id - a.id);
      default:
        return list;
    }
  }, [sortBy]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-4xl font-heading font-bold text-white uppercase tracking-widest text-glow">The <span className="text-primary italic">Vault</span></h1>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground whitespace-nowrap">Sort By:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px] rounded-none bg-card border-white/10 text-white focus:ring-primary uppercase text-[10px] tracking-widest h-10">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/10 text-white rounded-none">
                <SelectItem value="featured" className="uppercase text-[10px] tracking-widest focus:bg-primary focus:text-white cursor-pointer">Featured</SelectItem>
                <SelectItem value="price-low" className="uppercase text-[10px] tracking-widest focus:bg-primary focus:text-white cursor-pointer">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="uppercase text-[10px] tracking-widest focus:bg-primary focus:text-white cursor-pointer">Price: High to Low</SelectItem>
                <SelectItem value="newest" className="uppercase text-[10px] tracking-widest focus:bg-primary focus:text-white cursor-pointer">Newest Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </Layout>
  );
}
