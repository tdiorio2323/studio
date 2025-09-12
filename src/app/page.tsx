import { Hero } from '@/components/pages/home/hero';
import { ServicesOverview } from '@/components/pages/home/services-overview';
import { ProjectShowcase } from '@/components/pages/home/project-showcase';
import { TestimonialsCarousel } from '@/components/pages/home/testimonials-carousel';
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProjectShowcase />
      <TestimonialsCarousel />
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl md:text-4xl">Ready to Start Your Project?</CardTitle>
              <p className="text-muted-foreground pt-2">
                Fill out the form below and one of our experts will be in touch shortly.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
