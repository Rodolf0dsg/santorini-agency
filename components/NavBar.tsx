"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl backdrop-blur-md bg-surface/70 z-50 border border-white/10 shadow-lg rounded-full">
        <div className="flex justify-between items-center px-6 md:px-10 py-3 w-full">

          <Link 
            href={'/'}
            className="flex items-center gap-4"
          >
            <Image
              height={100}
              width={100}
              alt="Santorini Ships Solutions"
              className="h-9 w-auto"
              src="/logo-santorini-white.png"
            />
            <span className="hidden md:block font-headline-lg text-lg font-bold text-on-surface">
              Santorini Ships
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {              
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-md text-sm uppercase tracking-widest font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-secondary"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Botón menú mobile TODO: Agregar boton de llamada abajo */}
          <button 
            className="md:hidden text-on-surface hover:text-secondary transition-colors cursor-pointer flex items-center justify-center" 
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-surface-container-highest z-70 transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-end border-b border-white/10">
          <button 
            className="text-on-surface hover:text-secondary transition-colors cursor-pointer flex items-center justify-center" 
            onClick={closeMenu}
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`font-headline-lg-mobile text-headline-lg-mobile transition-colors ${
                  isActive 
                    ? "text-secondary font-bold" 
                    : "text-on-surface hover:text-secondary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};