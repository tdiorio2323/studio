import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';

export const metadata = {
  title: 'About Avid Visuals | Staten Island Sign & Wrap Experts',
  description: 'Learn about Avid Visuals, our history of excellence in signs and vehicle wraps, and our commitment to serving the tri-state area from our Staten Island headquarters.',
};

const values = [
    {
        icon: Award,
        title: "Uncompromising Quality",
        description: "We use only the highest-grade materials and cutting-edge technology to ensure your project is durable, vibrant, and long-lasting."
    },
    {
        icon: Users,
        title: "Customer Collaboration",
        description: "Your vision is our blueprint. We work closely with you from concept to completion to ensure we exceed your expectations."
    },
    {
        icon: Target,
        title: "Local Expertise",
        description: "As a Staten Island-based company, we have a deep understanding of the tri-state market and what it takes for local businesses to stand out."
    }
];

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find((img) => img.id === 'about-team');

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Crafting Visual Experiences Since 2010
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Avid Visuals was born from a passion for design and a commitment to helping businesses make a powerful first impression. Based in the heart of Staten Island, we've grown into a leading provider of custom signs, vehicle wraps, and large-format graphics for the entire tri-state area.
            </p>
          </div>
        </div>
      </section>

      {teamImage && (
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-10">
          <Card className="overflow-hidden shadow-xl">
            <div className="relative aspect-[16/8]">
              <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                data-ai-hint={teamImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </section>
      )}

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide every project we undertake.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map(value => (
                    <div key={value.title} className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-primary text-primary-foreground rounded-full">
                                <value.icon className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="font-headline text-2xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
