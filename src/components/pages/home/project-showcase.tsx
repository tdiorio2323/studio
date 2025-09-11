'use client';
import Image from 'next/image';
import Link from 'next/link';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

export function ProjectShowcase() {
  const showcaseImages = PlaceHolderImages.filter((img) => img.id.startsWith('showcase-'));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Our Signature Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the quality and creativity we bring to every job.
          </p>
        </div>
        <Carousel 
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                }),
              ]}
            className="w-full"
        >
          <CarouselContent>
            {showcaseImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="relative aspect-video p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-sm text-white font-semibold">{image.description}</p>
                        <span className="text-xs uppercase font-bold text-accent">{image.category}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/gallery">
                    Explore Full Gallery
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
