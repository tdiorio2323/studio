import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Layers, MapPin, Calendar, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = PlaceHolderImages.filter(p => ['signs', 'wraps', 'graphics'].includes(p.category));
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = PlaceHolderImages.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
 
  return {
    title: `${project.description} | Avid Visuals Project`,
    description: `Case study for ${project.description}, a ${project.category} project.`,
    openGraph: {
      images: [project.imageUrl],
    },
  }
}


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PlaceHolderImages.find((p) => p.id === params.slug);
  const galleryImages = PlaceHolderImages.filter(p => p.category === project?.category && p.id !== project?.id).slice(0, 4);

  if (!project) return notFound();

  const details = [
    { icon: Layers, label: "Category", value: project.category },
    { icon: Tag, label: "Sub-Category", value: project.subCategory },
    { icon: MapPin, label: "Location", value: "Staten Island, NY" },
    { icon: Calendar, label: "Completed", value: "2023" },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
                <p className="text-accent font-semibold uppercase tracking-wider">{project.category}</p>
                <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">{project.description}</h1>
            </div>

            {/* Main Image */}
            <Card className="overflow-hidden mb-12 shadow-lg">
                <div className="relative aspect-[16/9]">
                    <Image 
                        src={project.imageUrl} 
                        alt={project.description}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </Card>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {details.map(detail => (
                    detail.value && <div key={detail.label} className="flex items-start space-x-4">
                        <detail.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-muted-foreground">{detail.label}</p>
                            <p className="text-lg font-medium text-foreground capitalize">{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Project Write-up */}
            <div className="prose prose-lg max-w-none mx-auto text-foreground">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-4">The Project</h2>
                        <p className="text-muted-foreground">This project showcases our expertise in creating high-quality {project.category}. We worked closely with the client to bring their vision to life, resulting in a stunning visual that enhances their brand presence.</p>
                    </div>
                    <div>
                        <h2 className="font-headline text-2xl font-bold mb-4">Our Process</h2>
                        <p className="text-muted-foreground">From initial design concepts to final installation, our team managed every step of the process. We used top-tier materials and advanced fabrication techniques to ensure a durable and impressive final product that exceeds expectations.</p>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            {galleryImages.length > 0 && (
                <div className="mt-16">
                    <h2 className="font-headline text-3xl font-bold text-center mb-8">More {project.category} Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {galleryImages.map((img: ImagePlaceholder, idx: number) => (
                            <Card key={idx} className="overflow-hidden shadow-md">
                                <div className="relative aspect-video">
                                    <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
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
