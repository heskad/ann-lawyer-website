import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const services = [
  {
    title: "Basic Website",
    price: "$1,200",
    description: "A professional landing page to get you started.",
    features: [
      "1-3 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
    ],
    cta: "Choose Basic",
  },
  {
    title: "Business Pro",
    price: "$2,500",
    description: "A comprehensive solution for growing businesses.",
    features: [
      "Up to 10 Pages",
      "Custom Design",
      "Content Management System",
      "Advanced SEO",
      "1 month of support",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    title: "E-Commerce",
    price: "$4,800+",
    description: "A full-featured online store to sell your products.",
    features: [
      "Unlimited Products",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Accounts",
      "3 months of support",
    ],
    cta: "Choose E-Commerce",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary/50 py-20 sm:py-32">
      <div className="container">
        <AnimatedSection className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Services & Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose a plan that works for you. I offer flexible and transparent pricing to fit your needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <Card className={`flex flex-col h-full ${service.popular ? 'border-primary shadow-xl' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-6">{service.price}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} >
                    <a href="#contact">{service.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
