import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

export default function Reviews() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <MessageSquarePlus className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-white mb-6 uppercase tracking-widest text-glow">
            Collector <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            The Vault has just opened. Be the first to leave your mark on our history.
          </p>
          <div className="p-12 border border-dashed border-white/10 bg-white/5 relative overflow-hidden group">
             <div className="relative z-10">
               <h3 className="text-white font-display text-lg mb-4">No reviews yet</h3>
               <p className="text-muted-foreground mb-8">Have you received a cursed treasure? Share your experience with the community.</p>
               <Button className="bg-primary hover:bg-primary/90 rounded-none px-8 py-6 uppercase tracking-widest font-bold">
                 Write a Review
               </Button>
             </div>
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45 group-hover:bg-primary/10 transition-colors" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
