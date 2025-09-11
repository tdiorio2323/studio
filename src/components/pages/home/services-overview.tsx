import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Signpost, Car, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Signpost,
    title: 'Custom Signs',
    description: 'Interior and exterior signage solutions that build your brand identity and attract customers.',
    href: '/signs',
  },
  {
    icon: Car,
    title: 'Vehicle Wraps',
    description: 'Turn your company vehicles into mobile billboards with our high-quality, durable wraps.',
    href: '/vehicle-wraps',
  },
  {
    icon: Layers,
    title: 'Large Format Graphics',
    description: 'Make a big impact with wall murals, window graphics, banners, and more.',
    href: '/large-format-graphics',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a full range of visual solutions to elevate your brand's presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="group">
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  <CardDescription className="pt-2">{service.description}</CardDescription>
                  <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
