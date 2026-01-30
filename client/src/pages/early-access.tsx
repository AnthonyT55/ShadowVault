import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Mail } from "lucide-react";
import { Link } from "wouter";

export default function EarlyAccess() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Exclusive Membership
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-widest text-glow">
            Vault <span className="text-primary">Reserve</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            The most sought-after legends are secured before they ever reach the public. 
            To gain early access, you must first place an order and sign up for the Reserve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-display font-bold uppercase mb-2">Early Access</h3>
              <p className="text-sm text-muted-foreground">Get first rights to buy limited edition runs 48 hours before general release.</p>
            </div>
            <div className="p-8 bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-display font-bold uppercase mb-2">Priority Drops</h3>
              <p className="text-sm text-muted-foreground">Guaranteed pre-order capability on all upcoming Japanese imports.</p>
            </div>
            <div className="p-8 bg-card border border-white/5 hover:border-primary/30 transition-colors">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-white font-display font-bold uppercase mb-2">The Dispatch</h3>
              <p className="text-sm text-muted-foreground">Our optional newsletter showcasing high-resolution previews of upcoming drops.</p>
            </div>
          </div>

          <div className="p-12 bg-primary/5 border border-primary/20 inline-block">
            <h2 className="text-2xl font-heading font-bold text-white mb-4 uppercase">How to Join</h2>
            <ul className="text-left text-muted-foreground space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">01.</span>
                <span>Place any order from our current collection to verify your collector status.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">02.</span>
                <span>Opt-in to the "Vault Reserve" during checkout or in your account settings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">03.</span>
                <span>Receive your digital key and start accessing restricted collection drops.</span>
              </li>
            </ul>
            <a href="https://shop.undergroundvault.store">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 py-6 uppercase tracking-widest font-bold cursor-pointer">
                Shop to Qualify
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
