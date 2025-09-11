import { FilterableGallery } from '@/components/pages/gallery/filterable-gallery';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export const metadata = {
  title: 'Project Gallery | Avid Visuals',
  description: 'Browse our gallery of past projects, including custom signs, vehicle wraps, and large format graphics for businesses in Staten Island and the tri-state area.',
};

export default function GalleryPage() {
  const images: ImagePlaceholder[] = PlaceHolderImages.filter(
    (img) => ['signs', 'wraps', 'graphics'].includes(img.category)
  );

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our portfolio of completed projects. Filter by category to see the breadth and quality of our work.
          </p>
        </div>
        <FilterableGallery images={images} />
      </div>
    </div>
  );
}
