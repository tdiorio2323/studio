import { ServicePageLayout } from "@/components/pages/service-page-layout";



export const metadata = {
    title: 'Vehicle Wraps in Staten Island | Avid Visuals',
    description: 'Turn your vehicles into mobile billboards with high-quality, custom vehicle wraps. Serving the tri-state area with wraps for cars, trucks, vans, and full fleets.'
};
const features = [
    "Full & Partial Commercial Wraps",
    "Color Change & Personalization Wraps",
    "Commercial Fleet Branding",
    "Food Truck & Trailer Wraps",
    "High-Quality 3M & Avery Dennison Vinyl",
    "Expert, Bubble-Free Installation",
];

export default function VehicleWrapsPage() {
    return (
        <ServicePageLayout
            title="Vehicle Wraps"
            description="Maximize your brand's visibility on the road. We design, print, and install stunning, durable vehicle wraps that make a lasting impression wherever you go."
            features={features}
            category="wraps"
            heroImageId="wrap-hero" />
    );
}
