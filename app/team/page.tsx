import SectionHeading from "@/components/ui/section-heading";
import TeamCard from "@/components/sections/team-card";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Archana Chaudhari",
      role: "Faculty Advisor",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Samarth Bhadane",
      role: "President",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },

    {
      name: "Nandini Patawri",
      role: "Vice President",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Eric Siquiera",
      role: "Technical Head",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Disha Gupta",
      role: "Technical Co-Head",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Mahi Laddha",
      role: "Media Head",
      bio: "Electrical Engineering student focused on quantum circuit design. Organizes hands-on workshops for club members.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10c0-1.242-.504-2.372-1.318-3.182L13.5 12.5l-1.5-1.5 4.682-4.682A5.001 5.001 0 009.73 2H9.5a5 5 0 00-5 5v.277c0 1.242.504 2.372 1.318 3.182L10.5 15.5l1.5-1.5-4.682-4.682A5.001 5.001 0 0114.27 14H14.5a5 5 0 005-5z" />
        </svg>
      )
    },
    {
      name: "Khushi Kashyap",
      role: "Event Head",
      bio: "Math and CS double major. Creates educational content about quantum programming and manages the club's online resources.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Manya Bhargava",
      role: "Documentation Head",
      bio: "Physics student with a passion for quantum outreach. Coordinates guest lectures, networking events, and hackathons.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <SectionHeading title="Our Team" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {teamMembers.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}