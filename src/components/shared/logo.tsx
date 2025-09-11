import Link from 'next/link';
import { Layers } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Avid Visuals Home">
      <div className="p-2 bg-primary rounded-lg group-hover:bg-accent transition-colors">
        <Layers className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-foreground font-headline tracking-tighter">
        Avid Visuals
      </span>
    </Link>
  );
}
