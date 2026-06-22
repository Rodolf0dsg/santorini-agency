"use client";

import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-surface py-24 px-5 md:px-10 max-w-container-max mx-auto" id="contact">

      <div className="mb-7">
        <span className="text-secondary font-label-md tracking-[0.2em] uppercase block mb-3">
          Get in Touch
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Contact Our Operations
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div className="bg-surface-container-low p-6 md:p-10 rounded-2xl border border-white/5 shadow-xl">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
                    
          <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl flex gap-5 items-start group hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/10 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Phone Support</h3>
              <div className="flex flex-col gap-1 text-white/60 text-sm font-medium">
                <Link href="https://wa.me/+584126953355" target="_blank" className="hover:text-secondary transition-colors">
                  +58 (412) 6953355
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl flex gap-5 items-start group hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/10 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Email Communications</h3>
              <div className="flex flex-col gap-1 text-white/60 text-sm font-medium">
                <Link href="mailto:info@santoriniagency.com" className="hover:text-secondary transition-colors">
                  info@santoriniagency.com
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl flex gap-5 items-start group hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/10 transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Our Location</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Punto Fijo, Falcón, Venezuela.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl flex gap-5 items-start group hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary/10 transition-colors">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Operational Hours</h3>
              <span className="text-secondary font-semibold text-sm">24/7/365 Global Coverage</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}