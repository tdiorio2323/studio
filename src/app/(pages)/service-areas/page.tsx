
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: 'Service Areas | Avid Visuals',
  description: 'We serve Staten Island, all 5 boroughs of NYC (Brooklyn, Manhattan, Queens, Bronx), New Jersey, and Long Island. Get professional signs, wraps, and graphics.',
};

const primaryAreas = [
    "Staten Island (Our Home Base)",
    "Brooklyn",
    "Manhattan",
    "Queens",
    "The Bronx",
    "Long Island (Nassau & Suffolk)",
    "New Jersey (Northern & Central)",
];

const areaDetails = [
    {
        name: "Staten Island",
        description: "As a Staten Island–based shop, we offer fast turnarounds for all types of signage, vehicle wraps, and window graphics throughout the island — from Tottenville to St. George."
    },
    {
        name: "Brooklyn",
        description: "We've wrapped fleets and installed storefront signs across Brooklyn — including Williamsburg, Flatbush, Bay Ridge, and more."
    },
    {
        name: "Manhattan",
        description: "From retail graphics in SoHo to event installs in Midtown, we handle Manhattan signage projects with precision and speed."
    },
    {
        name: "New Jersey",
        description: "Serving North and Central NJ — including Newark, Jersey City, Hoboken, and Edison. Mobile installs, banners, and vehicle graphics available."
    },
    {
        name: "Long Island",
        description: "Interior and exterior signs across Nassau and Suffolk Counties — including Hempstead, Huntington, and beyond."
    },
    {
        name: "The Other Boroughs",
        description: "Our services extend to Queens and The Bronx, providing comprehensive visual solutions for businesses in every corner of NYC."
    }
]

export default function ServiceAreasPage() {
  return (
    <>
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Serving the Tri-State Area
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We proudly provide expert sign fabrication, vehicle wraps, and large-format graphics across the region. From our home base in Staten Island to bustling Manhattan and the suburbs of New Jersey, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg">
                <CardContent className="p-6">
                    <h2 className="font-headline text-2xl font-bold mb-4">Primary Service Regions</h2>
                    <ul className="space-y-3">
                        {primaryAreas.map(area => (
                            <li key={area} className="flex items-center">
                                <MapPin className="h-5 w-5 mr-3 text-primary" />
                                <span className="text-muted-foreground">{area}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <h3 className="font-headline text-2xl font-bold mb-2">Not Sure If We Serve Your Area?</h3>
                    <p className="mb-6 text-primary-foreground/80">
                        We're flexible. If you're in or near the Tri-State area, there's a good chance we can help. Reach out and let's talk about your project.
                    </p>
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/contact">Request a Quote</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>

        <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Local Expertise, Regional Reach</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We understand the unique character and regulations of each area we serve.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {areaDetails.map(area => (
                    <Card key={area.name}>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">{area.name}</h3>
                            <p className="text-muted-foreground">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
