
import { ContactForm } from '@/components/shared/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Avid Visuals | Get a Quote for Signs & Wraps',
  description: 'Contact Avid Visuals in Staten Island for a free quote on custom signs, vehicle wraps, or large format graphics. Reach out to our experts today!',
};

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Location',
    info: '1374-1382 Richmond Terrace, Staten Island, NY 10310',
    href: 'https://share.google/YLY3VWLRoy1CcC2qa'
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '(718) 447-2843',
    href: 'tel:7184472843'
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'quotes@avidvisuals.com',
    href: 'mailto:quotes@avidvisuals.com'
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have a question or ready to start a project? We're here to help. Reach out to us through any of the methods below, or fill out the form and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail) => (
            <a key={detail.title} href={detail.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full text-center hover:bg-card transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary text-primary-foreground rounded-full group-hover:bg-accent transition-colors">
                      <detail.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <CardTitle className="font-headline text-2xl">{detail.title}</CardTitle>
                  <p className="text-muted-foreground pt-2 text-primary group-hover:text-accent transition-colors">{detail.info}</p>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
