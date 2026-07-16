"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInOnScroll from "@/components/sections/FadeInOnScroll";

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href: string;
  category: "past" | "upcoming";
  badge: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "fallfest-2025",
    title: "FallFest 2025",
    description: "Our flagship quantum hackathon and workshop series. Explore quantum computing with industry experts, hands-on Qiskit labs, and amazing projects.",
    date: "Autumn 2025",
    location: "SIT Campus / Hybrid",
    image: "/assets/fallfest/Full_Illustration.png",
    href: "/fallfest",
    category: "past",
    badge: "Completed",
  }
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = EVENTS_DATA.filter((event) => {
    if (activeTab === "all") return true;
    return event.category === activeTab;
  });

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* Header section */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span>Club Events</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-title text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
        >
          Quantum Events & Hackathons
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
        >
          Discover hackathons, guest lectures, coding sprints, and community meetups hosted by Symbiosis Quantum Club.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#060A2C]/60 border border-gray-800 p-1.5 rounded-xl flex gap-1 backdrop-blur-md">
          {(["all", "upcoming", "past"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg font-display text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab} Events
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredEvents.map((event) => (
            <FadeInOnScroll key={event.id} className="h-full">
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full flex flex-col bg-[#060A2C]/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl"
              >
                {/* Glow decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none" />

                {/* Event Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-gray-800/80 bg-gray-900/50">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-600/90 text-white shadow-md">
                      {event.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-3 font-display">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <h3 className="font-title text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-display text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  <div className="pt-4 border-t border-gray-800/60 mt-auto">
                    <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium gap-2">
                      <Link href={event.href}>
                        Explore Event <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </FadeInOnScroll>
          ))}

          {filteredEvents.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16 bg-[#060A2C]/20 border border-dashed border-gray-800 rounded-2xl"
            >
              <p className="font-display text-gray-400 text-base">No events found in this category. Stay tuned for updates!</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
