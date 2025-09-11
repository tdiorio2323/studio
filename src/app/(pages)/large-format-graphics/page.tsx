import { ServicePageLayout } from "@/components/pages/service-page-layout";

export const metadata = {
    title: 'Large Format Graphics & Vinyl Installs | Avid Visuals Staten Island',
    description: 'Make a big impression with large format graphics, including wall murals, window graphics, event banners, and floor decals. Expert installation in the tri-state area.'
};

const features = [
    "Custom Wall Murals & Coverings",
    "Retail Window & Storefront Graphics",
    "Privacy & Decorative Window Films",
    "Floor Graphics & Decals",
    "Event Banners & Signage",
    "Construction Site Hoarding Graphics",
];

export default function LargeFormatGraphicsPage() {
    return (
        <ServicePageLayout
            title="Large Format Graphics"
            description="Transform your space and make a bold statement. Our large format printing and installation services are perfect for creating immersive brand environments, promotions, and event visuals."
            features={features}
            category="graphics"
        />
    );
}
