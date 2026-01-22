import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import heroImage from "@assets/generated_images/dark_anime_swordsman_hero_background.png";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section - LANDING ONLY */}
      <section className="relative min-h-[90vh] py-20 w-full overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src={heroImage} 
            alt="Dark Anime Swordsman" 
            className="w-full h-full object-cover object-[center_20%] opacity-100 contrast-125 brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
          <div className="max-w-4xl animate-in slide-in-from-left duration-1000 fade-in">
            <span className="inline-block py-1 px-3 border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              New Collection Drop
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8 text-glow uppercase tracking-tighter">
              Where <span className="text-primary italic">side</span> characters <br/>
              become <span className="text-primary italic">centerpieces</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light tracking-wide">
              Curated anime figures inspired by darker, overlooked legends. Imported from Japan and shipped free from the U.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-16 text-lg tracking-[0.2em] uppercase font-black w-full sm:w-auto cursor-pointer border-2 border-primary transition-all hover:scale-105">
                  Step into the shadows
                </Button>
              </Link>
              <Link href="/reviews">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white rounded-none px-8 h-16 text-lg tracking-[0.2em] uppercase bg-transparent backdrop-blur-md w-full sm:w-auto cursor-pointer border-2 transition-all hover:scale-105">
                  Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/30">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto" />
        </div>
      </section>

      {/* Previous Drop Section */}
      <section className="py-20 relative z-10 bg-background/60 backdrop-blur-xl border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-3">Archive</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase leading-tight">
                <span className="text-primary italic">Last Drop</span>
              </h2>
            </div>
            <Link href="/shop">
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group">
                Shop Collection <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <div key={product.id} className="group cursor-pointer animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative aspect-square overflow-hidden bg-card/40 backdrop-blur-sm border border-white/5 mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-black/80 backdrop-blur-sm text-white text-[9px] px-1.5 py-0.5 uppercase tracking-tighter border border-white/10">Sold Out</span>
                  </div>
                </div>
                <h3 className="text-white font-heading font-bold uppercase tracking-wider text-[11px] mb-0.5 truncate">{product.name}</h3>
                <p className="text-primary font-display text-xs">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-secondary/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-base uppercase tracking-wider">Fast, Free Shipping</h3>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-xs mx-auto">
                Free domestic shipping across the U.S. on all orders. Secured and tracked from our warehouse to your vault.
              </p>
            </div>
            
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider">Authentic Imports</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium action figures sourced directly from Japan. 100% authentic licensed products only.
              </p>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider">Reserve Access</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pre-orders available exclusively to Vault Reserve members. Secure your legends before they drop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
