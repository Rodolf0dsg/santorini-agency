import Image from "next/image"

export const QuoteSection = () => {
  return (
    <section className="py-32 relative flex items-center justify-center bg-surface min-h-[70vh]">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Background" 
          className="w-full h-full object-cover"
          width={1080}
          height={720}
          src="https://ik.imagekit.io/santorini/barco-noche-1.jpg?" 
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xs"></div>
      </div>
      <div className="max-w-4xl px-container-padding-mobile text-center reveal active relative z-10">
        <div className="mb-8">
          <span className="material-symbols-outlined text-secondary text-6xl">format_quote</span>
        </div>
        <h3
          className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-snug mb-10">
          "In an industry defined by precision, we provide the steady hand and the expert eye that ensures every journey
          reaches its pinnacle."
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="hidden sm:block h-px w-12 bg-secondary/50"></div>
          <div className="text-center sm:text-left">
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-1">The Executive Board</p>
            <p className="font-body-md text-sm text-on-surface-variant">Santorini Ships Solutions</p>
          </div>
          <div className="hidden sm:block h-px w-12 bg-secondary/50"></div>
        </div>
      </div>
    </section>
  )
}
