"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "../ContactForm";

export const ContactSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const iframeHtmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
          iframe { width: 100% !important; height: 100% !important; border: 0 !important; }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          var width = "100%";
          var height = "100%";
          var latitude = "11.78";   
          var longitude = "-70.20";
          var zoom = "9";           
          var names = false;        
          var show_track = false;
        </script>
        <script type="text/javascript" src="https://www.vesselfinder.com/aismap.js"></script>
      </body>
    </html>
  `;

  return (
    <section className="relative py-24 md:py-32 bg-surface-container overflow-hidden isolation-isolate z-10" id="contact">
      <div className="max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-stretch">
          
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-4">
                Secure Port Clearance
              </p>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                Ready for Departure?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Initiate immediate agency appointment, husbandry log updates, or logistics dispatch. Our systems operate 24/7/365.
              </p>

              <ContactForm/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/5 pt-6">
              <a href="https://wa.me/+584126953535" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl border border-white/10 text-secondary bg-surface-container-low group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-on-surface-variant">Hotline 24/7</p>
                  <p className="text-xs text-on-surface font-semibold truncate">+58 412-6953535</p>
                </div>
              </a>

              <a href="mailto:info@santoriniagency.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div className="p-2.5 rounded-xl border border-white/10 text-secondary bg-surface-container-low group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-on-surface-variant">Email</p>
                  <p className="text-xs text-on-surface font-semibold truncate">info@santoriniagency.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl border border-white/10 text-secondary bg-surface-container-low">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-wider text-on-surface-variant">HQ Terminal</p>
                  <p className="text-xs text-on-surface font-semibold truncate">Punto Fijo, VZ</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            onClick={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            className="w-full h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group bg-surface-container-low isolation-isolate cursor-pointer"
          >
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-20" />

            <iframe
              title="Paraguaná Live Marine Traffic Radar"
              srcDoc={iframeHtmlContent}
              onLoad={() => setMapLoaded(true)}
              className={`w-full h-full border-0 z-10 relative opacity-90 group-hover:opacity-100 transition-all duration-500 [filter:invert(90%)_hue-rotate(180deg)_contrast(110%)_brightness(95%)] ${
                isInteracting ? "pointer-events-auto" : "pointer-events-none"
              }`}
              scrolling="no"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />

            {!isInteracting && mapLoaded && (
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10 flex items-center justify-center pointer-events-none lg:hidden">
                <span className="bg-background/90 text-white text-xs font-medium px-4 py-2 rounded-xl border border-white/10 shadow-xl">
                  Tap to interact with Radar
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 z-20 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${mapLoaded ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
              <p className="text-[11px] font-medium tracking-widest uppercase text-on-surface/80">
                {mapLoaded ? "Paraguaná Radar - Live Feed" : "Connecting to AIS Hub..."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};