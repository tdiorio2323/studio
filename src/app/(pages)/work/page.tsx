import { getAllProjects } from '@/lib/firestore';
import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const revalidate = 60; // Revalidate data every 60 seconds

export const metadata = {
    title: 'Our Work | Avid Visuals',
    description: 'Explore our portfolio of custom signs, vehicle wraps, and large format graphics.'
}

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Our Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
                Browse our completed projects to see the quality and creativity we bring to every client.
            </p>
        </div>

        {projects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group">
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                    <div className="relative aspect-video">
                        <Image
                            src={project.gallery[0] || 'https://picsum.photos/seed/placeholder/600/400'}
                            alt={project.title}
                            fill
                            className="object-cover w-full transition-transform group-hover:scale-105"
                        />
                    </div>
                    <CardContent className="p-4">
                        <p className="text-sm uppercase font-bold text-accent">{project.category}</p>
                        <h2 className="font-headline text-xl font-semibold mt-1 group-hover:text-primary transition-colors">{project.title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
                    </CardContent>
                </Card>
              </Link>
            ))}
            </div>
        ) : (
            <div className="text-center py-16 text-muted-foreground">
                <p>No projects have been added yet. Please check back soon!</p>
            </div>
        )}
      </div>
    </div>
  );
}
