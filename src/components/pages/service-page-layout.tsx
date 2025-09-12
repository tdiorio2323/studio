import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  features: string[];
  category: 'signs' | 'wraps' | 'graphics';
}

export function ServicePageLayout({ title, description, features, category }: ServicePageLayoutProps) {
  const images = PlaceHolderImages.filter((img) => img.category === category);
  const heroImage = images.find(img => !img.id.startsWith('new-')) || images[0];
  
  // Prioritize showing new images in the capabilities section
  const newImages = images.filter(img => img.id.startsWith('new-'));
  const otherImages = images.filter(img => !img.id.startsWith('new-') && img.id !== heroImage?.id);
  const capabilitiesImages = [...newImages, ...otherImages].slice(0, 4);

  return (
    <>
      <section className="relative py-20 md:py-32 bg-card">
        {heroImage && (
            <Image 
                src={heroImage.imageUrl}
                alt={title}
                fill
                className="object-cover opacity-20"
            />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold mb-6">Our Capabilities</h2>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {capabilitiesImages.map((image, index) => (
                        <Card key={image.id} className={`overflow-hidden shadow-md ${index === 0 && capabilitiesImages.length > 1 ? 'col-span-2' : ''}`}>
                             <div className="relative aspect-video">
                                <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint}/>
                             </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              Project Gallery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how we've helped businesses like yours with our {title.toLowerCase()}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden group w-full">
                <CardContent className="relative aspect-video p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <p className="text-white font-semibold text-sm">{image.description}</p>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Ready to Make a Statement?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
                Let's discuss how our {title.toLowerCase()} can elevate your brand. Get a free, no-obligation quote today.
            </p>
            <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
