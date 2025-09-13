'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'showcase-3');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full text-white">
      {heroImage && (
        <div className="absolute inset-0">
          <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              priority
              className="object-cover"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="relative container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 animate-fade-in-up">
            Avid Signs & Wraps
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up animation-delay-300">
            We bring your brand to life with stunning visuals, from custom signs to eye-catching vehicle wraps. Serving Staten Island and the tri-state area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button size="lg" asChild>
                <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/gallery">View Our Work</Link>
            </Button>
            </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
