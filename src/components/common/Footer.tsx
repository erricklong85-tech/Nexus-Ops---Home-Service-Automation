export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-black text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white font-bold text-xs">
            N
          </div>
          <span className="text-white">Nexus Ops</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()} Nexus Ops. All rights reserved.</div>
      </div>
    </footer>
  );
}
