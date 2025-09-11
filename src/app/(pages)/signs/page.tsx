import { ServicePageLayout } from "@/components/pages/service-page-layout";

export const metadata = {
    title: 'Custom Signs in Staten Island | Avid Visuals',
    description: 'Expert design, fabrication, and installation of custom interior and exterior signs for businesses in the tri-state area. From lobby signs to large pylons.'
};

const features = [
    "Illuminated Channel Letters & Box Signs",
    "3D Lobby & Reception Signs",
    "Monument & Pylon Signs",
    "ADA & Wayfinding Signage",
    "Real Estate & Development Signs",
    "Professional Installation & Permitting",
];

export default function SignsPage() {
    return (
        <ServicePageLayout
            title="Custom Signs"
            description="We create high-impact interior and exterior signs that capture attention, communicate your brand, and guide your customers. From design to installation, our expert team handles every detail."
            features={features}
            category="signs"
        />
    );
}
