"use client";

import { useState, useEffect, useRef } from "react";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  fullWidth?: boolean;
}

interface ServiceDomain {
  id: "port-agency" | "technical" | "supplies";
  navTitle: string;
  icon: string;
  mainTitle: string;
  mainDescription: string;
  cards: ServiceCard[];
}

const SERVICES_DATA: ServiceDomain[] = [
  {
    id: "port-agency",
    navTitle: "PORT AGENCY",
    icon: "anchor",
    mainTitle: "Port Agency Services",
    mainDescription: "End-to-end management of vessel arrivals and departures, ensuring absolute compliance and operational efficiency.",
    cards: [
      {
        icon: "anchor",
        title: "Full Agency",
        description: "Complete oversight of vessel requirements including documentation, clearance, and coordination with local port authorities."
      },
      {
        icon: "groups",
        title: "Husbandry",
        description: "Dedicated crew change management, medical assistance coordination, and shore-based logistics support for personnel."
      },
      {
        icon: "shield",
        title: "Protective Agency",
        description: "Safeguarding owner or charterer interests by auditing port disbursements and validating cargo operations."
      },
      {
        icon: "local_gas_station",
        title: "Bunker Call Agency",
        description: "Specialized logistics for refueling stops, minimizing downtime through optimized berth and barge scheduling."
      },
      {
        icon: "explore",
        title: "Canal & Straits Transits",
        description: "Strategic planning and documentation for major international waterway crossings, ensuring zero-delay passage through critical maritime corridors.",
        fullWidth: true
      }
    ]
  },
  {
    id: "technical",
    navTitle: "TECHNICAL & MAINTENANCE",
    icon: "engineering",
    mainTitle: "Technical & Maintenance",
    mainDescription: "Industrial-grade repair and cleaning solutions delivered by certified maritime engineers and technicians.",
    cards: [
      {
        icon: "layers",
        title: "Tank & Hold Cleaning",
        description: "Specialized high-pressure cleaning for cargo transition readiness, meeting international environmental standards."
      },
      {
        icon: "cleaning_services",
        title: "Cleaning",
        description: "Comprehensive hull and deck sanitation utilizing specialized maritime-safe chemical treatments."
      },
      {
        icon: "lan",
        title: "Mooring",
        description: "Critical inspection and replacement of mooring lines and deck hardware to ensure vessel security at berth."
      },
      {
        icon: "construction",
        title: "Welding & Repair",
        description: "Certified structural repairs and precision welding for hull integrity and onboard mechanical systems."
      },
      {
        icon: "ac_unit",
        title: "Refrigeration",
        description: "Industrial HVAC and refrigeration system maintenance for container units and onboard pantry storage, preventing cargo spoilage.",
        fullWidth: true
      }
    ]
  },
  {
    id: "supplies",
    navTitle: "MARINE SUPPLIES",
    icon: "inventory_2",
    mainTitle: "Marine Supplies",
    mainDescription: "Premium grade fuels, chemicals, and provisions sourced through an elite network of industrial suppliers.",
    cards: [
      {
        icon: "oil_barrel",
        title: "Fuels",
        description: "High-specification marine gas oil (MGO) and bunker fuels exceeding international performance standards."
      },
      {
        icon: "propane_tank",
        title: "Gas & Cylinders",
        description: "Supply of industrial gases, welding gas cylinders, and specialized atmospheric containers for onboard use."
      },
      {
        icon: "opacity",
        title: "Specialty Lubricants",
        description: "Engine room oil, hydraulic fluids, and grease formulations designed for extreme maritime environments."
      },
      {
        icon: "water_drop",
        title: "Potable Water",
        description: "Large-scale delivery of certified drinking water for crew consumption and technical operations."
      }
    ]
  }
];

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"port-agency" | "technical" | "supplies">("port-agency");
  const [hintedTab, setHintedTab] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (id: "port-agency" | "technical" | "supplies") => {
    setActiveTab(id);
    if (window.innerWidth < 768) {
      const element = document.getElementById(`content-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeouts: NodeJS.Timeout[] = [];

    const triggerCascadeHint = () => {
      const nonActiveTabs = SERVICES_DATA.filter((tab) => tab.id !== activeTab);
      if (nonActiveTabs.length === 0) return;

      timeouts.forEach(clearTimeout);
      timeouts = [];

      setHintedTab(nonActiveTabs[0].id);

      const t1 = setTimeout(() => {
        setHintedTab(null);
      }, 250);
      timeouts.push(t1);

      if (nonActiveTabs.length > 1) {
        const t2 = setTimeout(() => {
          setHintedTab(nonActiveTabs[1].id);
        }, 250);
        timeouts.push(t2);

        const t3 = setTimeout(() => {
          setHintedTab(null);
        }, 500);
        timeouts.push(t3);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerCascadeHint();
          intervalId = setInterval(triggerCascadeHint, 5000);
        } else {
          clearInterval(intervalId);
          timeouts.forEach(clearTimeout);
          setHintedTab(null);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="bg-surface py-24 px-5 md:px-10 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        <aside className="md:w-1/3 lg:w-1/4">
          <div className="sticky top-32">
            <div className="mb-8 hidden md:block">
              <h3 className="font-headline-sm text-headline-sm mb-2 text-deck-silver">Service Domains</h3>
              <div className="h-1 w-12 bg-secondary"></div>
            </div>
            
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible hide-scrollbar gap-2 md:gap-4 mb-10 md:mb-0">
              {SERVICES_DATA.map((tab) => {
                const isActive = activeTab === tab.id;
                const isHinted = hintedTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-4 p-4 rounded-xl transition-all duration-300 w-auto md:w-full text-left border cursor-pointer ${
                      isActive
                        ? "bg-surface-container-high border-white/5 shadow-[0_0_20px_rgba(243,190,88,0.15)] text-on-surface"
                        : isHinted
                        ? "bg-surface-container-low border-secondary/40 text-on-surface"
                        : "bg-transparent border-transparent text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    <span 
                      className={`material-symbols-outlined transition-transform duration-300 ${
                        isActive || isHinted ? "text-secondary scale-110" : "text-secondary"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span className="font-label-md text-label-md whitespace-nowrap">
                      {tab.navTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="md:w-2/3 lg:w-3/4 relative">
          {SERVICES_DATA.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <div 
                key={tab.id} 
                id={`content-${tab.id}`} 
                className={`w-full transition-all duration-700 ease-out ${
                  isActive 
                    ? "opacity-100 translate-y-0 z-10 pointer-events-auto relative" 
                    : "opacity-0 translate-y-8 z-0 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="mb-10">
                  <h2 className="font-headline-lg text-headline-lg mb-4">{tab.mainTitle}</h2>
                  <p className="text-on-surface-variant font-body-md max-w-2xl">{tab.mainDescription}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tab.cards.map((card, idx) => (
                    <div 
                      key={idx} 
                      className={`glass-card p-8 rounded-lg group ${card.fullWidth ? "sm:col-span-2" : ""}`}
                    >
                      <div className={card.fullWidth ? "flex items-start gap-6" : ""}>
                        <span className="material-symbols-outlined text-[40px] text-secondary mb-6 block group-hover:scale-110 transition-transform">
                          {card.icon}
                        </span>
                        <div>
                          <h4 className="font-headline-sm text-headline-sm mb-3">{card.title}</h4>
                          <p className="text-on-surface-variant text-body-md leading-relaxed">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};