"use client";

import { useState } from "react";

export const ContactSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

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
          var height = "100%"; // El CSS de arriba reforzará que esto se cumpla
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  
          <div className="reveal active">
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-4">
              Direct Communication
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Ready for Departure?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
              Our regional centers are active 24/7. Reach out to our technical dispatch for immediate operational assistance at port or anchorage.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-full border border-white/10 text-secondary bg-surface group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface mb-1">+58 412-6953535</p>
                  <p className="font-body-md text-sm text-on-surface-variant">Main Technical Dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-full border border-white/10 text-secondary bg-surface group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface mb-1 md:break-words">info@santoriniagency.com</p>
                  <p className="font-body-md text-sm text-on-surface-variant">Corporate Inquiries</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-full border border-white/10 text-secondary bg-surface group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface mb-1">Santorini Marine Hub</p>
                  <p className="font-body-md text-sm text-on-surface-variant">Global Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group bg-surface-container-low isolation-isolate">
            
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-20" />
            
            <iframe
              title="Paraguaná Live Marine Traffic Radar"
              srcDoc={iframeHtmlContent}
              onLoad={() => setMapLoaded(true)}
              className="w-full h-full border-0 z-10 relative opacity-90 group-hover:opacity-100 transition-opacity duration-500 min-h-[450px] [filter:invert(90%)_hue-rotate(180deg)_contrast(110%)_brightness(95%)]"
              scrolling="no"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
            
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