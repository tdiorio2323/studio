
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
  
export const metadata = {
    title: 'Frequently Asked Questions | Avid Visuals',
    description: 'Find answers to common questions about our signs, vehicle wraps, and large format graphics services. Contact us for more information.',
};

const faqs = [
    {
        question: 'What types of signs do you make?',
        answer: 'We design, fabricate, and install a wide range of signs, including illuminated channel letters, lobby signs, monument signs, pylon signs, ADA-compliant signage, and more. If you can imagine it, we can likely create it.',
    },
    {
        question: 'How long does it take to get a vehicle wrap?',
        answer: 'The timeline for a vehicle wrap depends on the complexity of the design and the size of the vehicle. Typically, from design approval to installation, it can take anywhere from 5 to 10 business days.',
    },
    {
        question: 'What areas do you serve?',
        answer: 'We are based in Staten Island and serve the entire tri-state area, including all five boroughs of New York City, New Jersey, and Long Island.',
    },
    {
        question: 'Can you help with design?',
        answer: 'Absolutely! Our in-house design team can work with you to create a custom design from scratch or refine your existing brand assets to fit your project perfectly.',
    },
    {
        question: 'Do you handle permits for exterior signs?',
        answer: 'Yes, we can manage the sign permitting process for you. We understand the local regulations and will ensure your signage is fully compliant before installation.',
    },
    {
        question: 'What materials do you use for wraps?',
        answer: 'We exclusively use high-quality vinyl from industry-leading brands like 3M and Avery Dennison to ensure your wrap is durable, vibrant, and long-lasting.',
    },
];

export default function FaqsPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Have a question? We've got answers. If you don't find what you're looking for, feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
