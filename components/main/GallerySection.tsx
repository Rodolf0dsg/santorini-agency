"use client";

import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
}

// Array base con las imágenes únicas de la galería
const GALLERY_IMAGES: GalleryItem[] = [
  {
    src: "https://ik.imagekit.io/santorini/boarding.jpg",
    alt: "Maritime boarding operations and crew assistance",
  },
  {
    src: "https://ik.imagekit.io/santorini/barco-noche-2.jpg",
    alt: "Commercial vessel port operations at night",
  },
  {
    src: "https://ik.imagekit.io/santorini/wide-vision-boat.jpg",
    alt: "Fleet management and industrial maritime logistics",
  },
];

// Duplicamos el array para asegurar el bucle perfecto en el infinite scroll
const INFINITE_GALLERY_DATA = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

export const GallerySection = () => {
  // Parámetro de ImageKit óptimo para el tamaño fijo de la galería (600px en desktop)
  const imageTransform = "?tr=w-600,f-webp,q-80";

  return (
    <section 
      className="relative py-24 md:py-32 bg-background text-on-surface overflow-hidden isolation-isolate z-10" 
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop mb-12">
        <div className="text-center reveal active">
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-4">
            Visual Portfolio
          </p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            The Santorini Standard
          </h2>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex animate-infinite-scroll w-max gap-4 md:gap-8 px-4">
          {INFINITE_GALLERY_DATA.map((image, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[600px] flex-none aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 bg-surface-container-low"
            >
              <Image
                alt={image.alt}
                width={600}
                height={600}
                className="w-full h-full object-cover select-none"
                src={`${image.src}${imageTransform}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};