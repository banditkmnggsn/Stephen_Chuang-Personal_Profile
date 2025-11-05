import { LucideIcon } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: LucideIcon;
  tags?: string[];
  link?: string;
}

export default function Card({ title, subtitle, description, icon: Icon, tags, link }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
      {Icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-blue-600" size={24} />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {subtitle && <p className="text-sm text-gray-600 mb-3">{subtitle}</p>}
      <p className="text-gray-700 mb-4">{description}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          View Project <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}