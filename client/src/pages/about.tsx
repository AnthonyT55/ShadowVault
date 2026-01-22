import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Globe, Truck, Calendar, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-widest text-glow">
              Our <span className="text-primary italic">Origin</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cursed Vault was founded by collectors, for collectors. We bridge the gap between Japan and the U.S.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wider">The Hassle Ends Here</h2>
              <p className="text-muted-foreground leading-relaxed">
                We source our products directly from Japan so you don't have to go through the hassle of converting USD to Yen. 
                No more confusing exchange rates or international transaction fees.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike other stores, <span className="text-white font-bold italic">we are not dropshippers</span>. We maintain a physical stock in our U.S. facility, ensuring that every figure is hand-inspected and shipped directly to you with no international delays.
              </p>
              <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20">
                <Globe className="w-8 h-8 text-primary shrink-0" />
                <span className="text-white font-display uppercase text-sm tracking-wider">Direct Japanese Sourcing</span>
              </div>
            </div>
            <div className="aspect-square bg-card border border-white/5 flex items-center justify-center p-12">
               <div className="text-center">
                 <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
                 <h3 className="text-white font-heading text-xl uppercase mb-2">Domestic Shipping</h3>
                 <p className="text-sm text-muted-foreground">Skip the long and expensive international shipping wait times.</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
             <div className="aspect-square bg-card border border-white/5 flex items-center justify-center p-12 md:order-2">
               <div className="text-center">
                 <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                 <h3 className="text-white font-heading text-xl uppercase mb-2">Priority Access</h3>
                 <p className="text-sm text-muted-foreground">Place pre-orders and requests for future drops with ease.</p>
               </div>
            </div>
            <div className="space-y-6 md:order-1">
              <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wider">The Vault Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                Beyond just selling figures, we offer a curated experience for the discerning collector. 
                From secure packaging to exclusive Reserve access, every detail is handled with the respect your collection deserves.
              </p>
              <Link href="/shop">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-widest font-bold">
                  Explore the Vault
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
