'use client';

import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

type FilterableGalleryProps = {
  images: ImagePlaceholder[];
};

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'signs', label: 'Signs' },
  { value: 'wraps', label: 'Vehicle Wraps' },
  { value: 'graphics', label: 'Large Format Graphics' },
];

export function FilterableGallery({ images }: FilterableGalleryProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredImages = useMemo(() => {
    if (activeTab === 'all') {
      return images;
    }
    return images.filter((image) => image.category === activeTab);
  }, [activeTab, images]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
        {categories.map((category) => (
          <TabsTrigger key={category.value} value={category.value} className="py-2">
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group w-full">
              <CardContent className="relative aspect-video p-0">
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white font-semibold text-sm">{image.description}</p>
                 </div>
              </CardContent>
            </Card>
        ))}
      </div>
      {filteredImages.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
            <p>No projects found in this category.</p>
        </div>
      )}
    </Tabs>
  );
}
