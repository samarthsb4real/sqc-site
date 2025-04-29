"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "ChatBot", href: "/chatbot" },
    { name: "Team", href: "/team" },
    { name: "Mission", href: "/mission" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? "bg-[#030618]/90 backdrop-blur-sm border-b border-gray-800/50" : ""
    }`}>
      <div className="container mx-auto px-3 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-900/80 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold font-title text-white">SQ</span>
          </div>
          <span className="font-title font-medium text-base xs:text-lg truncate max-w-[140px] sm:max-w-none">
            <span className="hidden sm:inline">Symbiosis Quantum Club</span>
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`text-sm font-display transition-colors ${
                pathname === item.href ? "text-white font-medium" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-blue-800 text-white hover:bg-blue-600 font-display">Join Us</Button>
        </nav>
        
        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-200 h-10 w-10 p-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] max-w-[280px] bg-[#030618]/95 border-gray-800">
            <SheetHeader className="pb-2 border-b border-gray-800/50">
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-1 gap-2 p-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.name}>
                  <Link
                    href={item.href}
                    className={`py-1 px-4 text-base hover:text-gray-300 ${
                      pathname === item.href 
                        ? "text-white font-medium border-l-2 border-blue-500" 
                        : "text-gray-300"
                    }`}
                  ><SheetTitle className="text-gray-300 hover:text-gray-800">{item.name}</SheetTitle>
                    
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}