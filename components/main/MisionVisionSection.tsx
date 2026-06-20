"use client";

import { useState, useEffect, useRef } from "react";
import { Ship, Eye, BadgeCheck } from "lucide-react";

interface TabItem {
  id: "mission" | "vision" | "values";
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  bgImage: string;
}

const PILLARS_DATA: TabItem[] = [
  {
    id: "mission",
    title: "Mission",
    icon: Ship,
    text: "To ensure maximum efficiency for every vessel under our care in Caribbean waters, coordinating seamless port operations with pinpoint precision and absolute loyalty to the shipowner.",
    bgImage: "https://ik.imagekit.io/santorini/crew-1.jpg?f-webp,q-80",
  },
  {
    id: "vision",
    title: "Vision",
    icon: Eye,
    text: "To be the leading technological and logistical benchmark in the global maritime sector, transforming port management through constant innovation and operational excellence.",
    bgImage: "https://ik.imagekit.io/santorini/boarding.jpg?tr=w-1920,f-webp,q-80", 
  },
  {
    id: "values",
    title: "Values",
    icon: BadgeCheck,
    text: "Integrity in every nautical mile, unwavering commitment to safety, and an relentless pursuit of technical perfection across all our services.",
    bgImage: "https://ik.imagekit.io/santorini/security.jpg?f-webp,q-80",
  },
];

export const MisionVisionSection = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");
  const [hintedTab, setHintedTab] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeouts: NodeJS.Timeout[] = [];

    const triggerCascadeHint = () => {
      const nonActiveTabs = PILLARS_DATA.filter((tab) => tab.id !== activeTab);
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
    <section ref={sectionRef} className="relative overflow-hidden border-y border-white/5" id="mission-vision">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        
        <div className="bg-[#0B192C] py-14 px-6 md:px-12 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-2">
              Corporate Purpose
            </p>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">
              Our Compass
            </h2>
            
            <div className="space-y-3 mb-8">
              {PILLARS_DATA.map((tab) => {
                const isActive = activeTab === tab.id;
                const isHinted = hintedTab === tab.id;
                const IconComponent = tab.icon;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-all duration-300 group cursor-pointer ${
                      isActive
                        ? "bg-secondary/15 border-secondary shadow-[0_0_15px_rgba(243,190,88,0.1)]"
                        : isHinted
                        ? "border-secondary/50 bg-secondary/5"
                        : "border-white/10 hover:border-secondary/50"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isActive 
                          ? "text-secondary scale-100" 
                          : isHinted 
                          ? "text-secondary scale-110" 
                          : "text-on-surface-variant group-hover:text-secondary group-hover:scale-110"
                      }`}
                    />
                    <span className="font-headline-lg-mobile text-lg font-bold text-on-surface">
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative h-32 sm:h-24">
              {PILLARS_DATA.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <p
                    key={tab.id}
                    className={`absolute inset-0 font-body-lg text-body-lg text-on-surface-variant leading-relaxed transition-all duration-700 ${
                      isActive
                        ? "opacity-100 translate-y-0 z-10"
                        : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                  >
                    {tab.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative h-[350px] lg:h-auto overflow-hidden">
          {PILLARS_DATA.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  isActive ? "opacity-100 z-10" : "opacity-0"
                }`}
                style={{ backgroundImage: `url('${tab.bgImage}')` }}
              />
            );
          })}
          <div className="absolute inset-0 bg-linear-to-r from-[#0B192C] to-transparent lg:block hidden z-20 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};