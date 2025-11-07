import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/ui/Card';
import { MapPin, Mail, Phone, Briefcase, ArrowBigUpDashIcon } from 'lucide-react';

export default function Home() {
  const experiences = [
    {
      title: "President of Student Association",
      company: "HIMTEK",
      period: "2025 - 2026",
      description: "Led 40+ members and managed organizational operations, sponsorships, and event execution. Oversaw IoT Expo (16 projects) and CEAFO event (3,000+ attendees).",
      icon: ArrowBigUpDashIcon
    },
    {
      title: "Team Promotion BINUS Online",
      company: "Bina Nusantara University",
      period: "2024 - 2025",
      description: "Developed full-stack applications using Node.js, React, and PostgreSQL",
      icon: Briefcase
    }
  ];

  const projects = [
    {
      title: "The Green Guardian",
      description: "The Green Guardian is a smart IoT device designed to automatically monitor and care for home garden plants.",
      tags: ["Flutter", "LVGL", "ESP32", "Firebase", "SquareLine Studio", "EasyEDA", "Fusion 360"],
      link: "https://github.com/banditkmnggsn/The_Green_Guardian"
    },
    {
      title: "Cisco Packet Tracer",
      description: "Collaborative task management tool with real-time updates",
      tags: ["React", "Firebase", "Material-UI"],
      link: "https://www.youtube.com/@stephenchuang1358"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and dark mode",
      tags: ["Next.js", "Framer Motion", "CSS"],
      link: "#"
    }
  ];

const skills = [
  { name: "Platform IO", slug: "platformio" },
  { name: "Flutter", slug: "flutter" },
  { name: "MySQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Next.js", slug: "nextjs" },
  { name: "Squareline Studio", slug: "squareline" },
  { name: "TensorFlow + Keras", slug: "tensorflow" },
  { name: "Easy EDA", slug: "easyeda" },
  { name: "Canva", slug: "canva" },
  { name: "Figma", slug: "figma" },
  { name: "Photoshop", slug: "photoshop" },
  { name: "3D CAD Design", slug: "fusion360" },
  { name: "3D Slicing", slug: "3dslicing" },
  { name: "Cisco Packet Tracer", slug: "cisco" },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-600 shadow-xl">
            <img  src="pas_foto.jpg" 
              alt="Stephen Chuang"
               className="w-full h-full object-cover"
            />
          </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stephen Chuang
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-1">
           Computer Engineering Student | IoT & Embedded Systems Developer
          </p>          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
           Full Stack Developer | 3D Product Designer
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
              <p className="text-gray-600">Kemanggisan, West Jakarta, ID</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">stephenchuang19@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-bold mb-2">Whatsapp</h3>
              <p className="text-gray-600">+62 896-3050-7963</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center mt-12 max-w-3xl mx-auto">
            I am a passionate Computer Engineering student with a keen interest in IoT and Embedded Systems development. With hands-on experience in full-stack web development and 3D product design, I enjoy creating innovative solutions that bridge the gap between hardware and software. My goal is to leverage my skills to contribute to cutting-edge projects that make a real-world impact.
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
    <p className="text-center text-gray-600 mb-8">Click on any skill to view related projects and work samples</p>
    <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
      {skills.map((skill, i) => (
        <a 
          key={i} 
          href={`/skills/${skill.slug}`}
          className="px-6 py-3 bg-white rounded-lg shadow-md text-gray-800 font-medium hover:shadow-xl hover:scale-105 transition transform cursor-pointer hover:bg-blue-50 hover:text-blue-600"
        >
          {skill.name}
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m currently open for full-time internship opportunities—ready to learn, contribute, and grow with a passionate team.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="mailto:stephenchuang19@gmail.com">
              Send Email
            </Button>
            <Button variant="outline" href="https://www.linkedin.com/in/stephen-chuang-6528682bb">
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}