'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"


const testimonials = [
  {
    name: 'John S. - Local Cafe Owner',
    avatar: 'JS',
    image: 'https://picsum.photos/seed/avatar1/100/100',
    text: "Avid Visuals transformed our storefront. The new sign is incredible and has brought in so much new business. The team was professional, and the quality is top-notch. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Maria G. - Fleet Manager',
    avatar: 'MG',
    image: 'https://picsum.photos/seed/avatar2/100/100',
    text: "We had our entire fleet of 20 vans wrapped by Avid. The process was seamless, and the result is a consistent, professional look that makes our brand stand out all over the tri-state area.",
    rating: 5,
  },
  {
    name: 'David L. - Corporate Office',
    avatar: 'DL',
    image: 'https://picsum.photos/seed/avatar3/100/100',
    text: "The large wall mural in our lobby is a work of art. It completely changed the atmosphere of our office. The installation was quick and clean. Fantastic job!",
    rating: 5,
  },
    {
    name: 'Samantha P. - Retail Boutique',
    avatar: 'SP',
    image: 'https://picsum.photos/seed/avatar4/100/100',
    text: "From the window graphics to our interior signs, everything was perfect. They understood our brand aesthetic and delivered beyond our expectations. A pleasure to work with.",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're proud to have happy clients across the tri-state area.
          </p>
        </div>
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
            ]}
            className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-lg italic text-foreground mb-6">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 text-left">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
