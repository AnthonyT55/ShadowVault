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
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/10 md:to-background/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 md:to-background/50 z-10" />
          <img 
            src={heroImage}
            alt="Anime Figure Collection"
            className="w-full h-full object-contain md:object-cover opacity-80 md:opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <div className="space-y-6 md:space-y-8">
              <div 
                className="inline-block animate-in fade-in slide-in-from-left duration-1000 fill-mode-both"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-primary" />
                  <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Premium Imports</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-8">
                  {["Step", "into", "the", "Vault"].map((word, i) => (
                    <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                      {word === "Vault" ? (
                        <span className="text-primary italic">{word}</span>
                      ) : word}
                    </span>
                  ))}
                </h1>
                <div 
                  className="animate-in fade-in slide-in-from-bottom duration-1000 fill-mode-both"
                  style={{ animationDelay: "1.2s" }}
                >
                  <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light tracking-wide">
                    Limited drops of hand selected, premium quality, and authentic anime action figures for the collector with darker tastes. Skip the wait. Skip the stress. Improve your anime figure collection this week, without having to pay for shipping.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/shop">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-16 text-lg tracking-[0.2em] uppercase font-black w-full sm:w-auto cursor-pointer border-2 border-primary transition-all hover:scale-105">
                        Step into the shadows
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/30 z-20">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 relative z-10 bg-background/60 backdrop-blur-xl border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-3">Featured</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase leading-tight">
                <span className="text-primary italic">Collection</span>
              </h2>
            </div>
            <Link href="/shop">
              <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group">
                Shop Collection <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => ["Grandista Trafalgar Law", "Satoru Gojo", "Battle Record Collection Shanks"].includes(p.name))
              .map((product, index) => (
              <Link href="/shop" key={product.id}>
                <div className="group cursor-pointer animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative aspect-square overflow-hidden bg-card/40 backdrop-blur-sm border border-white/5 mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/80 backdrop-blur-sm text-white text-[9px] px-1.5 py-0.5 uppercase tracking-tighter border border-white/10">Available</span>
                    </div>
                  </div>
                  <h3 className="text-white font-heading font-bold uppercase tracking-wider text-[11px] mb-0.5 truncate">{product.name}</h3>
                </div>
              </Link>
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
