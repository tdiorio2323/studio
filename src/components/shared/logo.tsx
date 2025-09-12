import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Avid Visuals Home">
      <div className="relative h-10 w-28">
        <Image 
          src="https://i.imgur.com/wSQVduC.png" 
          alt="Avid Visuals Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
