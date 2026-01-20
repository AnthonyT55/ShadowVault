import { Layout } from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How much does shipping cost?",
      answer: "We offer free domestic shipping across the U.S. for all orders, no matter the size of the haul."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes. Every item in the Cursed Vault is a premium, licensed product imported directly from Japan. We do not sell bootlegs."
    },
    {
      question: "How long does shipping take?",
      answer: "Since we ship directly from our U.S. warehouse, most orders arrive within 3-5 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns on unopened items within 14 days of delivery. Due to the collectible nature of our products, opened items cannot be returned."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-2 uppercase tracking-widest text-glow">
          Frequency Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-muted-foreground mb-12">Everything you need to know about the Vault.</p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10 bg-card/50 px-6">
              <AccordionTrigger className="text-white hover:text-primary transition-colors font-display uppercase tracking-wider py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
}
