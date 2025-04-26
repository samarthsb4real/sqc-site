export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 bg-blue-900/80 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold font-title text-white">SQ</span>
            </div>
            <span className="font-title font-medium text-lg">Symbiosis Quantum Club</span>
          </div>
          <p className="font-display text-sm text-gray-400">© {new Date().getFullYear()} Symbiosis Quantum Club. All rights reserved.</p>
        </div>
        
        <div className="flex justify-start gap-8">
          <a href="#" className="text-sm font-display text-gray-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-sm font-display text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-sm font-display text-gray-400 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-sm font-display text-gray-400 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}