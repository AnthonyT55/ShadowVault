import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import FAQ from "@/pages/faq";
import Reviews from "@/pages/reviews";
import EarlyAccess from "@/pages/early-access";
import About from "@/pages/about";
import { useHashLocation } from "wouter/use-hash-location";

function Router_() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/faq" component={FAQ} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/early-access" component={EarlyAccess} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router_ />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
