"use client";

import { useRef } from "react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  bgImage: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    icon: "anchor",
    title: "Full Agency",
    description: "End-to-end port attendance, managing customs clearances, berth booking, cargo manifests, and official documentation for streamlined vessel turnaround.",
    bgImage: "https://ik.imagekit.io/santorini/crew-1.jpg?f-webp,q-80",
  },
  {
    icon: "groups",
    title: "Husbandry",
    description: "Essential vessel and crew support including offshore medical coordination, port passes, secure crew changes, and delivery of ship stores.",
    bgImage: "https://ik.imagekit.io/santorini/boarding.jpg?tr=w-1920,f-webp,q-80",
  },
  {
    icon: "shield",
    title: "Protective Agency",
    description: "Independent supervisory services safeguarding shipowners' or charterers' interests, auditing port expenses, and monitoring local cargo operations.",
    bgImage: "https://ik.imagekit.io/santorini/security.jpg?f-webp,q-80",
  },
  {
    icon: "local_gas_station",
    title: "Bunker Call Agency",
    description: "Specialized port coordination for refueling operations, minimizing idle time, and handling logistics for smooth fuel and oil delivery.",
    bgImage: "https://ik.imagekit.io/santorini/ss-2.jpg?f-webp,q-80",
  },
  {
    icon: "explore",
    title: "Canal & Straits Transits",
    description: "Comprehensive transit management, including advance booking, funds clearance, and regulatory compliance for critical maritime passages.",
    bgImage: "https://ik.imagekit.io/santorini/canal-transit.webp",
  },
  {
    icon: "layers",
    title: "Tank & hold cleaning",
    description: "Supervision of industrial chemical washing, slop disposal compliance, and strict cargo hold preparations for sensitive product switches.",
    bgImage: "https://ik.imagekit.io/santorini/tank-cleaning.webp",
  },
  {
    icon: "cleaning_services",
    title: "Cleaning",
    description: "Industrial hull maintenance support, bio-fouling removal coordination, and specialized deck washdowns to meet international maritime standards.",    
    bgImage: "https://ik.imagekit.io/santorini/barco-laterial-1.jpg?f-webp,q-80",
  },
  {
    icon: "oil_barrel",
    title: "Fuels",
    description: "Sourcing and coordination of marine fuel oil (MFO), marine gas oil (MGO), and low-sulfur options compliant with IMO environmental regulations.",
    bgImage: "https://ik.imagekit.io/santorini/ss-4.jpg?f-webp,q-80",
  },
  {
    icon: "propane_tank",
    title: "Gas & cylinders",
    description: "Procurement, technical safety inspection, and delivery of industrial gases, refrigerants, and certified oxygen/acetylene cylinders for shipboard use.",
    bgImage: "https://ik.imagekit.io/santorini/cylinder-management.png?f-webp,q-80",
  },
  {
    icon: "lan",
    title: "Mooring",
    description: "Coordination of certified line-handling crews, tugboat assistance, and supply of high-tensile mooring ropes for secure berthing operations.",
    bgImage: "https://ik.imagekit.io/santorini/barco-1.jpg?f-webp,q-80",
  },
  {
    icon: "ac_unit",
    title: "Refrigeration",
    description: "Emergency provisions cooling repairs, technical maintenance of cargo reefer systems, and offshore HVAC troubleshooting by certified engineers.",
    bgImage: "https://ik.imagekit.io/santorini/refrigeration.webp",
  },
  {
    icon: "opacity",
    title: "Speciality marine lubricants",
    description: "Supply of high-performance marine engine oils, hydraulic fluids, and grease specifically engineered for heavy machinery and crosshead engines.",
    bgImage: "https://ik.imagekit.io/santorini/team-4.jpg?f-webp,q-80",
  },
  {
    icon: "water_drop",
    title: "Water",
    description: "Logistics for bulk fresh potable water supply, high-volume technical water delivery for boilers, and certified purity testing at port.",
    bgImage: "https://ik.imagekit.io/santorini/workers-3.jpg?f-webp,q-80",
  },
  {
    icon: "construction",
    title: "Welding & repair",
    description: "Arranging class-approved structural hot-work, emergency welding repairs, pipe fitting, and urgent mechanical machining directly at the anchorage or berth.",
    bgImage: "https://ik.imagekit.io/santorini/workers.jpg?f-webp,q-80",
  },
];

export const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 444;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const sectionBgImage = "https://ik.imagekit.io/santorini/cover-image.jpg"

  return (
    <section className="relative z-10 py-20 md:py-32 overflow-hidden [@supports(content-visibility:auto)]:content-visibility-auto contain-intrinsic-size-[1000px]" id="services">
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${sectionBgImage}')` }}
      />
      
      <div className="absolute inset-0 bg-surface/90 backdrop-blur-xs z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-2">
              Technical Capabilities
            </p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Comprehensive Fleet Management
            </h2>
          </div>
          <div className="flex gap-4 self-end">
            <button
              onClick={() => handleScroll("left")}
              className="p-4 border border-outline-variant hover:bg-primary-container hover:border-primary-container transition-all rounded-full text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-4 border border-outline-variant hover:bg-primary-container hover:border-primary-container transition-all rounded-full text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x scroll-smooth"
        >
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index} 
              className="flex-none w-[85vw] md:w-[420px] snap-center md:snap-start"
            >
              <div className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl border border-white/10">
                <div className={`absolute inset-0 ${index % 2 === 0 ? "bg-surface-container-high" : "bg-surface-container-highest"}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"
                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="material-symbols-outlined text-secondary text-4xl bg-surface/50 p-3 rounded-full w-max backdrop-blur-md">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};