"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronsDown } from "lucide-react";

const HERO_VIDEOS = [
  "/videos/hero-section/bigOne.mp4",
  "/videos/hero-section/RuiXue.mp4",
  "/videos/hero-section/smallOne.mp4",
];

export const HeroSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activePlayer, setActivePlayer] = useState<'A' | 'B'>('A');
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.0 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeVideo = activePlayer === 'A' ? videoRefA.current : videoRefB.current;
    const inactiveVideo = activePlayer === 'A' ? videoRefB.current : videoRefA.current;

    if (!isHeroVisible) {
      videoRefA.current?.pause();
      videoRefB.current?.pause();
      return;
    }

    if (activeVideo) {
      activeVideo.play().catch(() => console.log("Autoplay bloqueado"));
    }

    const nextIdx = (currentIdx + 1) % HERO_VIDEOS.length;
    if (inactiveVideo) {
      inactiveVideo.src = HERO_VIDEOS[nextIdx];
      inactiveVideo.load();
    }
  }, [currentIdx, activePlayer, isHeroVisible]);

  useEffect(() => {
    if (!isHeroVisible) return;

    const activeVideo = activePlayer === 'A' ? videoRefA.current : videoRefB.current;
    const inactiveVideo = activePlayer === 'A' ? videoRefB.current : videoRefA.current;

    if (!activeVideo) return;

    const handleTimeUpdate = () => {
      if (activeVideo.duration && activeVideo.currentTime > activeVideo.duration - 1.2) {
        if (inactiveVideo && inactiveVideo.paused) {
          inactiveVideo.play().catch(() => console.log("Pre-play bloqueado"));
        }
      }
    };

    activeVideo.addEventListener("timeupdate", handleTimeUpdate);
    return () => activeVideo.removeEventListener("timeupdate", handleTimeUpdate);
  }, [currentIdx, activePlayer, isHeroVisible]);

  const handleVideoEnded = () => {
    const nextIdx = (currentIdx + 1) % HERO_VIDEOS.length;
    setCurrentIdx(nextIdx);
    setActivePlayer(activePlayer === 'A' ? 'B' : 'A');
  };

  return (
    <section 
      ref={sectionRef}
      style={{ clipPath: "contents" }}       
      className="relative min-h-screen md:h-screen w-full flex items-center justify-center bg-surface-container-lowest z-0 overflow-hidden"
    >
      
      <div className={`fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none ${!isHeroVisible ? "hidden" : "block"}`}>
        <video
          ref={videoRefA}
          onEnded={activePlayer === 'A' ? handleVideoEnded : undefined}
          muted
          playsInline
          src={HERO_VIDEOS[0]}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activePlayer === 'A' ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />

        <video
          ref={videoRefB}
          onEnded={activePlayer === 'B' ? handleVideoEnded : undefined}
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activePlayer === 'B' ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
        
        <Image
          alt="Santorini Maritime Background Placeholder"
          src="/images/hero-section/hero-section-image.png"
          fill
          priority
          sizes="100vw"
          className="object-cover select-none pointer-events-none z-1"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-surface-container-lowest/40 via-surface-container-lowest/60 to-surface-container-lowest z-20"></div>

      <div className="relative z-30 w-full max-w-7xl px-container-padding-mobile md:px-container-padding-desktop pt-28 pb-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          <div className="glass-card w-full p-8 md:p-12 rounded-xl">
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-4">
              Established Excellence
            </p>
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 wrap-break-word">
              Excellence in Maritime Solutions
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Santorini Ships Solutions provides technical precision and luxury hospitality for global fleet management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                className="bg-primary-container border border-secondary text-on-surface px-10 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-500 text-center rounded-full"
                href={'/services'}
              >
                Explore Services
              </Link>
              <a 
                className="border border-transparent text-secondary px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white/5 transition-all duration-300 text-center rounded-full"
                href="#services"
              >
                See our Portfolio
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center w-full">
            <img 
              alt="Santorini Ships Logo Grande" 
              className="w-full max-w-[320px] h-auto object-contain animate-bounce [animation-duration:3s] drop-shadow-[0_10px_20px_rgba(185,199,228,0.2)]"
              src="/logo-santorini-white.png" 
            />
          </div>

        </div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-secondary z-30">
        <ChevronsDown className="w-10 h-10 stroke-[1.5]" />
      </div>
    </section>
  );
};