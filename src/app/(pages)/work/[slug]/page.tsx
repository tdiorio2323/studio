import { getProjectBySlug, getAllProjects } from '@/lib/firestore';
import type { Project } from '@/types/project';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Calendar, MapPin, Layers } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 60; // Revalidate data every 60 seconds

type Props = {
  params: { slug: string }
}

// Statically generate routes at build time
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `${project.title} | Avid Visuals Project`,
    description: project.outcome,
    openGraph: {
      images: [project.gallery[0], ...previousImages],
    },
  }
}


export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) return notFound();

  const details = [
    { icon: Layers, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Timeline", value: project.timeline },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
                <p className="text-accent font-semibold uppercase tracking-wider">{project.category}</p>
                <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">{project.title}</h1>
            </div>

            {/* Main Image */}
            <Card className="overflow-hidden mb-12 shadow-lg">
                <div className="relative aspect-[16/9]">
                    <Image 
                        src={project.gallery[0]} 
                        alt={project.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </Card>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {details.map(detail => (
                    <div key={detail.label} className="flex items-start space-x-4">
                        <detail.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-muted-foreground">{detail.label}</p>
                            <p className="text-lg font-medium text-foreground">{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Project Write-up */}
            <div className="prose prose-lg max-w-none mx-auto text-foreground">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-4">The Challenge</h2>
                        <p className="text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-4">The Outcome</h2>
                        <p className="text-muted-foreground">{project.outcome}</p>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 1 && (
                <div className="mt-16">
                    <h2 className="font-headline text-3xl font-bold text-center mb-8">Project Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.gallery.map((img: string, idx: number) => (
                            <Card key={idx} className="overflow-hidden shadow-md">
                                <div className="relative aspect-video">
                                    <Image src={img} alt={`${project.title} gallery image ${idx + 1}`} fill className="object-cover" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
