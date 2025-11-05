import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/ui/Card';
import { MapPin, Mail, Phone, Briefcase, Code } from 'lucide-react';

export default function Home() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team, building scalable web applications with React and Next.js",
      icon: Briefcase
    },
    {
      title: "Full Stack Developer",
      company: "Startup XYZ",
      period: "2020 - 2022",
      description: "Developed full-stack applications using Node.js, React, and PostgreSQL",
      icon: Code
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tags: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and dark mode",
      tags: ["Next.js", "Framer Motion", "CSS"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "React.js", "Next.js", "Node.js",
    "Tailwind CSS", "Git", "REST APIs", "PostgreSQL",
    "MongoDB", "Docker", "AWS", "CI/CD"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              YN
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stephen Chuang
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | IoT Developer | Problem Solver
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="#contact">Get In Touch</Button>
            <Button variant="outline" href="#projects">View Projects</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600">Cikarang, West Java, ID</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">your.email@example.com</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+62 812-3456-7890</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center mt-12 max-w-3xl mx-auto">
            Passionate full-stack developer with 4+ years of experience building modern web applications. 
            Specialized in React ecosystem and creating user-friendly interfaces. Always eager to learn 
            new technologies and solve complex problems.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <Card key={i} {...exp} subtitle={`${exp.company} • ${exp.period}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Card key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <span key={i} className="px-6 py-3 bg-white rounded-lg shadow-md text-gray-800 font-medium hover:shadow-lg transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m currently available for freelance work and full-time positions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="mailto:your.email@example.com">
              Send Email
            </Button>
            <Button variant="outline" href="https://linkedin.com/in/yourusername">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}