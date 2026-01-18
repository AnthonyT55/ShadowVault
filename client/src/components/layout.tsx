import React from "react";
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
            <a className="text-2xl font-heading font-bold tracking-widest uppercase hover:text-primary transition-colors duration-300">
              Cursed<span className="text-primary">Vault</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Home</a>
            </Link>
            <Link href="/shop">
              <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Shop</a>
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
      <footer className="border-t border-white/5 bg-black py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-primary">CursedVault</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Forged in darkness. We curate the finest anime action figures for the discerning collector.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-6 text-white">Collections</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pre-orders</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider mb-6 text-white">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="default" className="rounded-none bg-primary hover:bg-primary/90">
                Join
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Subscribe to get notified about limited drops.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cursed Vault Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
