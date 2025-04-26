import HeroSection from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section Preview */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-4xl font-bold mb-3">About Us</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <Card className="bg-[#060a20] border-gray-800">
          <CardContent className="p-8 md:p-10">
            <p className="mb-6 text-lg font-display text-gray-300 leading-relaxed">
              Symbiosis Quantum Club is a student-led initiative dedicated to exploring 
              and advancing the field of quantum computing. Founded in 2023, our club brings 
              together passionate students from diverse academic backgrounds who share 
              a common interest in quantum technologies.
            </p>
            <div className="text-center">
              <Button variant="outline" asChild className="font-display border-blue-700/50 hover:bg-blue-900/30 px-6">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-4xl font-bold mb-3">Explore Quantum Computing</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-[#060a20] border-gray-800 hover:border-blue-900/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Workshops</h3>
              <p className="font-display text-gray-300 mb-6">Join our hands-on workshops to learn quantum programming</p>
              <Button variant="link" className="text-blue-400 p-0 font-display">
                View Schedule →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#060a20] border-gray-800 hover:border-blue-900/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Resources</h3>
              <p className="font-display text-gray-300 mb-6">Access our curated collection of quantum computing resources</p>
              <Button variant="link" className="text-blue-400 p-0 font-display">
                Browse Library →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#060a20] border-gray-800 hover:border-blue-900/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Projects</h3>
              <p className="font-display text-gray-300 mb-6">Explore our ongoing quantum computing research projects</p>
              <Button variant="link" className="text-blue-400 p-0 font-display">
                See Projects →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-title text-3xl md:text-4xl font-bold mb-3">Join Our Community</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-[#060a20] border border-gray-800 rounded-xl p-8 md:p-12 text-center">
          <p className="font-display text-xl mb-6 max-w-2xl mx-auto text-gray-300">
            Connect with fellow quantum enthusiasts, participate in events, and stay updated with the latest developments.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 font-display px-8 py-6 h-auto text-lg">
            Join Discord
          </Button>
        </div>
      </section>
    </>
  );
}