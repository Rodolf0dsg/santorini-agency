import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-background">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A192F]/85 z-10"></div>
        <Image
          alt="Maritime Operations"
          fill
          priority
          className="w-full h-full object-cover select-none pointer-events-none"
          src="https://ik.imagekit.io/santorini/cover-image.jpg" 
        />
      </div>

      <div className="relative z-20 max-w-container-max mx-auto px-5 md:px-10 w-full py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-6">
            Global Maritime Solutions
          </span>
          
          <h1 className="font-headline-xl text-headline-xl md:text-6xl text-on-surface mb-6 leading-[1.15] tracking-tight">
            Our Port &amp; Maritime <span className="text-secondary">Capabilities</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Santorini Agency provides an elite tier of maritime support, bridging the gap between complex port
            operations and seamless industrial supply. From full-scale husbandry and specialized technical repairs to
            premium marine bunkering, we ensure your fleet maintains peak operational readiness in any international
            waters.
          </p>
          
          {/* <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-secondary text-on-secondary-fixed rounded-full font-label-md text-label-md font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-secondary/10 cursor-pointer">
              REQUEST CAPABILITY STATEMENT
            </button>
            <button className="px-8 py-4 bg-transparent border border-secondary/40 text-secondary rounded-full font-label-md text-label-md font-bold hover:bg-secondary/10 transition-all duration-300 cursor-pointer">
              VIEW GLOBAL PORTS
            </button>
          </div> */}
        </div>
      </div>

    </section>
  )
}