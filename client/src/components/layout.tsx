import { Link } from "wouter";
import { ShoppingCart, Search, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCrows, setShowCrows] = useState(false);

  useEffect(() => {
    setShowCrows(true);
    const timer = setTimeout(() => setShowCrows(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Enter the Vault" },
    { href: "/early-access", label: "Early Access" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {showCrows && (
        <>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="crow-animation"
              style={{
                animationDelay: `${i * 0.8}s`,
                bottom: `${-50 - (i * 20)}px`,
                left: `${-50 - (i * 30)}px`
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z" className="hidden" />
                <path d="M22,12 C22,12 19,10 15,10 C11,10 8,13 8,13 L4,11 L2,13 L7,16 L8,20 L10,18 L12,22 L14,18 L16,20 L17,16 L22,13 L22,12 Z" />
              </svg>
            </div>
          ))}
        </>
      )}
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-black/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-heading font-bold tracking-widest uppercase hover:text-primary transition-colors duration-300 cursor-pointer text-black">
              Cursed<span className="text-primary">Vault</span>
            </div>
          </Link>

          {/* Icons & Menu Toggle */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-black hover:text-primary hover:bg-transparent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex text-black hover:text-primary hover:bg-transparent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-black hover:text-primary hover:bg-transparent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full animate-pulse" />
            </Button>

            {/* Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black hover:text-primary hover:bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-black/10 p-10 flex flex-col justify-center">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div 
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-heading font-bold uppercase tracking-[0.2em] text-black hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-gray-50 py-10 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-primary">CursedVault</h3>
            <p className="text-black/60 text-xs leading-relaxed max-w-xs">
              Forged in darkness. We curate the finest anime action figures for the discerning collector.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-black text-xs">Collections</h4>
            <ul className="space-y-2 text-[11px] text-black/60">
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">New Arrivals</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">Best Sellers</span></Link></li>
              <li><Link href="/shop"><span className="hover:text-primary transition-colors cursor-pointer">Limited Editions</span></Link></li>
              <li><Link href="/reviews"><span className="hover:text-primary transition-colors cursor-pointer">Collector Reviews</span></Link></li>
              <li><Link href="/early-access"><span className="hover:text-primary transition-colors cursor-pointer text-primary font-bold">Early Access</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-black text-xs">Support</h4>
            <ul className="space-y-2 text-[11px] text-black/60">
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Shipping Policy</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Returns & Exchanges</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">FAQ</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-4 text-black text-xs">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-black/5 border border-black/10 px-3 py-1.5 text-xs w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="default" className="rounded-none bg-primary hover:bg-primary/90 text-[10px] px-3 h-8">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-black/5 text-center text-[10px] text-black/40">
          © {new Date().getFullYear()} Cursed Vault Store.
        </div>
      </footer>
    </div>
  );
}
