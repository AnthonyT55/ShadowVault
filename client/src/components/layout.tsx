import { Link } from "wouter";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-primary">
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-heading font-bold tracking-widest uppercase hover:text-primary transition-colors duration-300 cursor-pointer">
              Cursed<span className="text-primary">Vault</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/">
              <div className="text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] cursor-pointer">Home</div>
            </Link>
            <Link href="/shop">
              <div className="text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] cursor-pointer">Enter the Vault</div>
            </Link>
            <Link href="/early-access">
              <div className="text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] cursor-pointer">Early Access</div>
            </Link>
            <Link href="/about">
              <div className="text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] cursor-pointer">About</div>
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex text-muted-foreground hover:text-primary hover:bg-transparent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full animate-pulse" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-10 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-primary">CursedVault</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Forged in darkness. We curate the finest anime action figures for the discerning collector.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-white text-xs">Collections</h4>
            <ul className="space-y-2 text-[11px] text-muted-foreground">
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">New Arrivals</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">Best Sellers</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">Limited Editions</span></Link></li>
              <li><Link href="/reviews"><span className="hover:text-primary transition-colors cursor-pointer">Collector Reviews</span></Link></li>
              <li><Link href="/early-access"><span className="hover:text-primary transition-colors cursor-pointer text-primary font-bold">Early Access</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-white text-xs">Support</h4>
            <ul className="space-y-2 text-[11px] text-muted-foreground">
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Shipping Policy</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Returns & Exchanges</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">FAQ</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-white text-xs">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 px-3 py-1.5 text-xs w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="default" className="rounded-none bg-primary hover:bg-primary/90 text-[10px] px-3 h-8">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Cursed Vault Store.
        </div>
      </footer>
    </div>
  );
}
