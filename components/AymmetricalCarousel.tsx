"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  metrics: { label: string; value: string }[];
}

const BASE_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Full Husbandry & Crew Change Logistics",
    category: "PORT AGENCY",
    location: "Puerto la Cruz, Venezuela",
    image: "https://ik.imagekit.io/santorini/cover-image.jpg?updatedAt=1781537310394",
    metrics: [
      { label: "Vessel Type", value: "Crude Tanker" },
      { label: "Personnel", value: "24 Crew" },
      { label: "Turnaround", value: "36 Hours" }
    ]
  },
  {
    id: "proj-2",
    title: "Emergency Underwater Hull Welding",
    category: "TECHNICAL REPAIRS",
    location: "Amuay Bay, Falcón",
    image: "https://ik.imagekit.io/santorini/cover-image.jpg?updatedAt=1781537310394",
    metrics: [
      { label: "Class", value: "Lloyd's Reg." },
      { label: "Depth", value: "14 Meters" },
      { label: "Status", value: "Certified" }
    ]
  },
  {
    id: "proj-3",
    title: "High-Specification Marine Bunkering",
    category: "MARINE SUPPLIES",
    location: "Cardón Port Terminal",
    image: "https://ik.imagekit.io/santorini/cover-image.jpg?updatedAt=1781537310394",
    metrics: [
      { label: "Fuel Type", value: "MGO LS" },
      { label: "Volume", value: "4,500 MT" },
      { label: "Rate", value: "600 MT/h" }
    ]
  },
  {
    id: "proj-4",
    title: "Strategic Canal Transit Coordination",
    category: "PORT AGENCY",
    location: "Panama Canal Corridor",
    image: "https://ik.imagekit.io/santorini/cover-image.jpg?updatedAt=1781537310394",
    metrics: [
      { label: "Waterway", value: "Panama Canal" },
      { label: "Optimization", value: "Zero Delay" },
      { label: "Vessel", value: "Neopanamax" }
    ]
  }
];

const MULTIPLIED_PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS, ...BASE_PROJECTS];

export const AsymmetricCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(BASE_PROJECTS.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning || isMobile) return;

    const totalItems = BASE_PROJECTS.length;
    
    if (currentIndex >= totalItems * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalItems);
      }, 800);
      return () => clearTimeout(timer);
    }

    if (currentIndex < totalItems) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + totalItems);
      }, 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, isMobile]);

  return (
    <section className="bg-surface py-24 px-5 md:px-10 max-w-container-max mx-auto overflow-hidden" id="portfolio">
      <div className="flex items-end justify-between mb-16">
        <div>
          <span className="text-secondary font-label-md tracking-[0.2em] uppercase block mb-3">
            Case Studies
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Operations Ledger
          </h2>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface hover:bg-white/5 hover:border-secondary/40 transition-all duration-300 cursor-pointer group z-30"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-on-surface hover:bg-white/5 hover:border-secondary/40 transition-all duration-300 cursor-pointer group z-30"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-full h-[480px] md:h-[520px] overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar">
        <div 
          className={`flex gap-6 h-full ${isTransitioning && !isMobile ? "carousel-transition" : ""}`}
          style={{
            transform: isMobile ? "none" : `translateX(calc(-${currentIndex} * 274px))`,
          }}
        >
          {(isMobile ? BASE_PROJECTS : MULTIPLIED_PROJECTS).map((project, index) => {
            const isLarge = isMobile ? true : index === currentIndex;

            return (
              <div
                key={`${project.id}-${index}`}
                onClick={!isLarge && !isMobile ? () => { setCurrentIndex(index); setIsTransitioning(true); } : undefined}
                className={`card-transition relative rounded-2xl overflow-hidden border border-white/5 bg-surface-container-low text-left shadow-xl flex-shrink-0 snap-center h-full ${
                  !isLarge ? "cursor-pointer hover:border-white/20" : ""
                } ${
                  isLarge 
                    ? "w-[85vw] md:w-[550px] z-10 opacity-100" 
                    : "w-[calc(50vw-30px)] md:w-[250px] z-0 opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  priority={isLarge}
                  sizes={isLarge ? "550px" : "250px"}
                  className="object-cover select-none pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                  <span className="text-secondary font-label-md text-label-sm uppercase tracking-widest mb-2 block whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.category} {isLarge && `• ${project.location}`}
                  </span>

                  <h3 className={`font-headline-sm text-white font-bold leading-tight transition-all duration-500 ${
                    isLarge ? "text-xl md:text-3xl mb-4" : "text-base line-clamp-2"
                  }`}>
                    {project.title}
                  </h3>

                  <div className={`transition-all duration-500 ease-out overflow-hidden ${
                    isLarge ? "max-h-40 opacity-100 border-t border-white/10 pt-4" : "max-h-0 opacity-0"
                  }`}>
                    <div className="grid grid-cols-3 gap-4 min-w-[260px]">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wider mb-1">{m.label}</p>
                          <p className="font-label-md text-label-xs md:text-label-sm text-white font-semibold whitespace-nowrap">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};