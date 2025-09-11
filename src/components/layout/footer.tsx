import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const navLinks = [
    { href: '/signs', label: 'Signs' },
    { href: '/vehicle-wraps', label: 'Vehicle Wraps' },
    { href: '/large-format-graphics', label: 'Large Format' },
    { href: '/gallery', label: 'Our Work' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Your trusted partner for signs, vehicle wraps, and large format graphics in Staten Island and the tri-state area.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map(link => (
                <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navLinks.slice(3).map(link => (
                <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
                {socialLinks.map(social => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                        <Link href={social.href} aria-label={social.name}>
                            <social.icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
            <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Avid Visuals. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
