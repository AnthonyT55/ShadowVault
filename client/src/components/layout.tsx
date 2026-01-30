import { Link } from "wouter";
import { ShoppingCart, Search, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCrows, setShowCrows] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setShowCrows(true);
    const timer = setTimeout(() => setShowCrows(false), 8000);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "https://shop.undergroundvault.store", label: "Enter the Vault" },
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
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary/40">
                <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z" className="hidden" />
                <path d="M22,12 C22,12 19,10 15,10 C11,10 8,13 8,13 L4,11 L2,13 L7,16 L8,20 L10,18 L12,22 L14,18 L16,20 L17,16 L22,13 L22,12 Z" />
              </svg>
            </div>
          ))}
        </>
      )}
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo - Controlled by scroll state */}
          <Link href="/">
            <div className="text-2xl font-heading font-bold tracking-widest uppercase hover:text-primary transition-all duration-300 cursor-pointer text-white">
              Underground<span className="text-primary">Vault</span>
            </div>
          </Link>

          {/* Icons & Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-white/10 p-10 flex flex-col justify-center">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div 
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-heading font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors cursor-pointer"
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
      <footer className="border-t border-white/5 bg-black py-10 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-primary">UndergroundVault</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Forged in darkness. We curate the finest anime action figures for the discerning collector.
            </p>
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
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Underground Vault Store.
        </div>
      </footer>
    </div>
  );
}
