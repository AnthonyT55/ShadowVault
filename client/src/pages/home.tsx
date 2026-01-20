import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import heroImage from "@assets/generated_images/dark_anime_swordsman_hero_background.png";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - LANDING ONLY */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Dark Anime Swordsman" 
            className="w-full h-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl animate-in slide-in-from-left duration-1000 fade-in">
            <span className="inline-block py-1 px-3 border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              New Collection Drop
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 text-glow">
              Where <span className="text-primary">side</span> characters <br/>
              become <span className="text-primary">centerpieces</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
              Curated anime figures inspired by darker, overlooked legends. Imported from Japan and shipped free from the U.S.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-base tracking-widest uppercase font-semibold w-full sm:w-auto cursor-pointer">
                  Enter the Vault
                </Button>
              </Link>
              <Link href="/reviews">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:text-white rounded-none px-8 h-14 text-base tracking-widest uppercase bg-transparent backdrop-blur-sm w-full sm:w-auto cursor-pointer">
                  Collector Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto" />
        </div>
      </section>

      {/* Trust/Features Section */}
      <section className="py-20 border-t border-white/5 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4 py-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-2 uppercase">Authentic Guarantee</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">Every figure is verified authentic. No bootlegs, ever.</p>
            </div>
            <div className="px-4 py-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-2 uppercase">Secure Shipping</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">Reinforced packaging to ensure your collector's item arrives pristine.</p>
            </div>
            <div className="px-4 py-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-white font-heading font-bold text-lg mb-2 uppercase">Pre-order Priority</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">Get first access to limited runs and exclusive drops.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
