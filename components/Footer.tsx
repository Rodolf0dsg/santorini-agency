"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background text-on-surface-variant w-full pt-20 pb-8 border-t border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start px-container-padding-mobile md:px-container-padding-desktop w-full max-w-7xl mx-auto gap-16">
        
        <div className="max-w-sm">
          <img
            alt="Santorini White" 
            className="h-12 mb-8 select-none pointer-events-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgKa5Kt2JFzYveYufietDw24n6id4-qVzNIzB_RYBp_VUh-sZOrd58GtfpQxN5x8j-RhsKHxrZ7Bo5UtZIWBY81cp70HVR6MdS-uCvw7s1lP8bSChZ0svT-fMDjzzKT7y-S_Xg_e_aZeKVyPDpywu3ZKnptRP16fQSkNjZhjtZeW9ssS1-N0xcfFnvjUoMtWTYZGcqDf-rQBzIcrf5RLi4xGgMUmq6Hfiq32fTjoZnepegngvIm9oz-hyTxsALhcOJGskis7_SQs"
          />
          <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
            Redefining maritime standards through engineering precision and strategic logistics integration. Local expertise across regional port terminals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full lg:w-auto">
          
          <div>
            <h5 className="font-label-md text-label-md text-secondary uppercase mb-6 tracking-widest">
              Navigation
            </h5>
            <ul className="space-y-4 font-body-md text-sm">
              <li>
                <Link className="text-on-surface-variant hover:text-white flex items-center gap-1 transition-all group" href="/services">
                  Our Services 
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant/40 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-white flex items-center gap-1 transition-all group" href="/#portfolio">
                  Operations Ledger 
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant/40 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-white flex items-center gap-1 transition-all group" href="/contact">
                  Contact Center 
                  <ArrowUpRight className="w-3.5 h-3.5 text-on-surface-variant/40 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-secondary uppercase mb-6 tracking-widest">
              Operational Dispatch
            </h5>
            <ul className="space-y-4 font-body-md text-sm">
              <li>
                <a 
                  href="https://wa.me/+584126953355" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-secondary/70 group-hover:text-secondary transition-colors" />
                  <span>+58 412-6953535</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@santoriniagency.com" 
                  target="_blank"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-secondary/70 group-hover:text-secondary transition-colors" />
                  <span className="break-all">info@santoriniagency.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-on-surface-variant/80">
                <MapPin className="w-4 h-4 text-secondary/70 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-on-surface font-medium">Punto Fijo, Venezuela</p>
                  <p className="text-xs text-on-surface-variant/60 mt-0.5">Paraguaná Peninsula Hub</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 px-container-padding-mobile md:px-container-padding-desktop w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant/60 gap-6 text-center md:text-left">
        <p>© 2026 Santorini Ships Solutions. Premium Maritime Excellence.</p>
      </div>
    </footer>
  );
};