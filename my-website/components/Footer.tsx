import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}