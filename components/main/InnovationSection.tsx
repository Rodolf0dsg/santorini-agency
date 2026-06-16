"use client";

export const InnovationSection = () => {
  
  const sectionBgImage = "https://ik.imagekit.io/santorini/wide-vision-boat.jpg";

  return (
    <section className="relative py-24 md:py-32 text-on-surface overflow-hidden" id="about">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 md:bg-fixed"
        style={{ backgroundImage: `url('${sectionBgImage}')` }}
      />
      
      <div className="absolute inset-0 bg-surface-container-low/95 z-1" />

      <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop relative z-10">
        <div className="reveal active">
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6">Global Vision</p>
          <h2 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-8 max-w-4xl">
            Innovation Worldwide
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-16">
            We bridge the gap between traditional maritime values and future-focused technology. Our global footprint
            ensures that no matter where your fleet sails, our standards of excellence follow.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            <div className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-colors duration-500 bg-surface/30 backdrop-blur-md border border-white/5">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 bg-secondary/10 p-4 rounded-full w-max block">
                verified_user
              </span>
              <h4 className="font-headline-lg-mobile text-lg font-bold mb-2">Safe Working</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Prioritizing human life and safety protocols in every operations.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-colors duration-500 bg-surface/30 backdrop-blur-md border border-white/5">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 bg-secondary/10 p-4 rounded-full w-max block">
                factory
              </span>
              <h4 className="font-headline-lg-mobile text-lg font-bold mb-2">Responsible</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sustainable practices and conscious maritime logistics management.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-colors duration-500 bg-surface/30 backdrop-blur-md border border-white/5">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 bg-secondary/10 p-4 rounded-full w-max block">
                shield_lock
              </span>
              <h4 className="font-headline-lg-mobile text-lg font-bold mb-2">Reliability</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Consistent precision in time-critical technical deliveries.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-colors duration-500 bg-surface/30 backdrop-blur-md border border-white/5">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 bg-secondary/10 p-4 rounded-full w-max block">
                diversity_3
              </span>
              <h4 className="font-headline-lg-mobile text-lg font-bold mb-2">Human Talent</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Investing in the world's most elite maritime professionals.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};