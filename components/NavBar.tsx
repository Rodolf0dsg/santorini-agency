"use client"; // Obligatorio para usar interactividad (useState)

import { useState } from "react";

export const NavBar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl backdrop-blur-md bg-surface/70 z-50 border border-white/10 shadow-lg rounded-full">
        <div className="flex justify-between items-center px-6 md:px-10 py-3 w-full">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              alt="Santorini Ships Solutions"
              className="h-9 w-auto"
              src="/logo-santorini-white.png"
            />
            <span className="hidden md:block font-headline-lg text-lg font-bold text-on-surface">
              Santorini Ships
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a className="font-label-md text-sm uppercase tracking-widest text-secondary font-bold hover:text-secondary-fixed transition-colors duration-300" href="#services">Fleet</a>
            <a className="font-label-md text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#about">Services</a>
            <a className="font-label-md text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#gallery">Portal</a>
            <a className="font-label-md text-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#contact">Contact</a>
          </div>

          <button className="md:hidden text-on-surface hover:text-secondary transition-colors" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-surface-container-highest z-70 transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div className="p-6 flex justify-end border-b border-white/10">
          <button className="text-on-surface hover:text-secondary transition-colors" onClick={closeMenu}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
          <a onClick={closeMenu} className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-secondary transition-colors" href="#services">Fleet</a>
          <a onClick={closeMenu} className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-secondary transition-colors" href="#services">Services</a>
          <a onClick={closeMenu} className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-secondary transition-colors" href="#about">Logistics</a>
          <a onClick={closeMenu} className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-secondary transition-colors" href="#about">About</a>
          <a onClick={closeMenu} className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-secondary transition-colors" href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};