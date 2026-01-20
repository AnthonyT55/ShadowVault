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
                  Step into the shadows
                </Button>
              </Link>
              <Link href="/reviews">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:text-white rounded-none px-8 h-14 text-base tracking-widest uppercase bg-transparent backdrop-blur-sm w-full sm:w-auto cursor-pointer">
                  Reviews
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

    </Layout>
  );
}
