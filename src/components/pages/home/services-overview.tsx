import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Custom Signs',
    description: 'Interior and exterior signage solutions that build your brand identity and attract customers.',
    href: '/signs',
    imageId: 'service-signs',
  },
  {
    title: 'Vehicle Wraps',
    description: 'Turn your company vehicles into mobile billboards with our high-quality, durable wraps.',
    href: '/vehicle-wraps',
    imageId: 'service-wraps',
  },
  {
    title: 'Large Format Graphics',
    description: 'Make a big impact with wall murals, window graphics, banners, and more.',
    href: '/large-format-graphics',
    imageId: 'service-graphics',
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
          {services.map((service) => {
            const image = PlaceHolderImages.find(img => img.id === service.imageId);
            return (
              <Link href={service.href} key={service.title} className="group">
                <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                  {image && (
                    <div className="relative aspect-video">
                        <Image 
                            src={image.imageUrl}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
