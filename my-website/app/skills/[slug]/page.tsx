'use client'
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Small types to help TypeScript without changing runtime behavior
interface Project {
  title: string;
  description: string;
  image: string | string[];
  link: string;
}

// Data untuk SEMUA skill Anda
const skillsData: Record<string, { name: string; category: string; description: string; projects: Project[] }> = {
  // 🔌 IoT & Embedded
  platformio: {
    name: "Platform IO",
    category: "IoT & Embedded Systems",
    description: "Developing embedded systems and IoT projects using PlatformIO IDE",
    projects: [
      {
        title: "Smart Home Automation",
        description: "ESP32-based home automation system with sensor integration",
        image: "/screenshots/platformio-1.jpg",
        link: "https://github.com/yourusername/project"
      },
      {
        title: "Weather Station IoT",
        description: "Real-time weather monitoring with ESP8266 and cloud connectivity",
        image: "/screenshots/platformio-2.jpg",
        link: "#"
      },
      {
        title: "Industrial Monitoring System",
        description: "Arduino-based industrial sensor monitoring and data logging",
        image: "/screenshots/platformio-3.jpg",
        link: "#"
      }
    ]
  },

  // 📱 Mobile Development
  flutter: {
    name: "Flutter",
    category: "Mobile Development",
    description: "Building cross-platform mobile applications with Flutter framework",
    projects: [
      {
        title: "E-Commerce Mobile App",
        description: "Full-featured shopping app with payment gateway integration",
        image: "/screenshots/flutter-1.jpg",
        link: "https://play.google.com/store/apps"
      },
      {
        title: "Task Management App",
        description: "Productivity app with local database and cloud sync",
        image: "/screenshots/flutter-2.jpg",
        link: "#"
      },
      {
        title: "IoT Controller App",
        description: "Mobile interface for controlling IoT devices via Bluetooth/WiFi",
        image: "/screenshots/flutter-3.jpg",
        link: "#"
      }
    ]
  },

  // 🗄️ Database
  mysql: {
    name: "MySQL",
    category: "Database Management",
    description: "Designing and managing relational databases with MySQL",
    projects: [
      {
        title: "Inventory Management System",
        description: "Complete inventory database with complex queries and triggers",
        image: "/screenshots/mysql-1.jpg",
        link: "#"
      },
      {
        title: "School Management Database",
        description: "Comprehensive database for student, teacher, and course management",
        image: "/screenshots/mysql-2.jpg",
        link: "#"
      },
      {
        title: "E-Commerce Database Design",
        description: "Scalable database architecture for online shopping platform",
        image: "/screenshots/mysql-3.jpg",
        link: "#"
      }
    ]
  },

  // 🔥 Firebase
  firebase: {
    name: "Firebase",
    category: "Backend as a Service",
    description: "Building real-time applications with Firebase services",
    projects: [
      {
        title: "Real-time Chat Application",
        description: "Chat app with Firebase Realtime Database and Authentication",
        image: "/screenshots/firebase-1.jpg",
        link: "#"
      },
      {
        title: "Cloud Storage Manager",
        description: "File upload and management system using Firebase Storage",
        image: "/screenshots/firebase-2.jpg",
        link: "#"
      },
      {
        title: "Push Notification System",
        description: "Firebase Cloud Messaging integration for mobile apps",
        image: "/screenshots/firebase-3.jpg",
        link: "#"
      }
    ]
  },

  // 🟢 Node.js
  nodejs: {
    name: "Node.js",
    category: "Backend Development",
    description: "Building scalable backend APIs and server-side applications",
    projects: [
      {
        title: "REST API Server",
        description: "Express.js API with authentication and database integration",
        image: "/screenshots/nodejs-1.jpg",
        link: "https://github.com/yourusername/api"
      },
      {
        title: "Real-time WebSocket Server",
        description: "Socket.io implementation for real-time communication",
        image: "/screenshots/nodejs-2.jpg",
        link: "#"
      },
      {
        title: "IoT Data Gateway",
        description: "Node.js server for collecting and processing IoT sensor data",
        image: "/screenshots/nodejs-3.jpg",
        link: "#"
      }
    ]
  },

  // ⚡ Next.js
  nextjs: {
    name: "Next.js",
    category: "Full-Stack Web Development",
    description: "Creating modern web applications with Next.js framework",
    projects: [
      {
        title: "Corporate Website",
        description: "SEO-optimized company website with dynamic content",
        image: "/screenshots/nextjs-1.jpg",
        link: "https://yourwebsite.com"
      },
      {
        title: "E-Learning Platform",
        description: "Online course platform with video streaming and progress tracking",
        image: "/screenshots/nextjs-2.jpg",
        link: "#"
      },
      {
        title: "Portfolio Dashboard",
        description: "Admin dashboard for managing portfolio content",
        image: "/screenshots/nextjs-3.jpg",
        link: "#"
      }
    ]
  },

  // 🎨 Squareline Studio
  squareline: {
    name: "Squareline Studio",
    category: "Embedded UI Design",
    description: "Designing user interfaces for embedded displays and microcontrollers",
    projects: [
      {
        title: "Smart Thermostat UI",
        description: "Touch screen interface for ESP32-based thermostat",
        image: "/screenshots/squareline-1.jpg",
        link: "#"
      },
      {
        title: "Industrial HMI Panel",
        description: "Human-Machine Interface for industrial automation",
        image: "/screenshots/squareline-2.jpg",
        link: "#"
      },
      {
        title: "IoT Dashboard Display",
        description: "Real-time data visualization on TFT display",
        image: "/screenshots/squareline-3.jpg",
        link: "#"
      }
    ]
  },

  // 🤖 TensorFlow
  tensorflow: {
    name: "TensorFlow + Keras",
    category: "Machine Learning & AI",
    description: "Building and training machine learning models for various applications",
    projects: [
      {
        title: "Image Classification Model",
        description: "CNN model for classifying product images with 95% accuracy",
        image: "/screenshots/tensorflow-1.jpg",
        link: "#"
      },
      {
        title: "Predictive Maintenance System",
        description: "ML model for predicting equipment failure based on sensor data",
        image: "/screenshots/tensorflow-2.jpg",
        link: "#"
      },
      {
        title: "Object Detection for IoT",
        description: "Real-time object detection deployed on edge devices",
        image: "/screenshots/tensorflow-3.jpg",
        link: "#"
      }
    ]
  },

  // ⚡ EasyEDA
  easyeda: {
    name: "Easy EDA",
    category: "PCB Design & Electronics",
    description: "Designing printed circuit boards and electronic schematics",
    projects: [
      {
        title: "ESP32 Development Board",
        description: "Custom PCB design for ESP32 with sensor interfaces",
        image: "/screenshots/easyeda-1.jpg",
        link: "#"
      },
      {
        title: "Power Supply Module",
        description: "Switching power supply PCB design with 5V/3.3V outputs",
        image: "/screenshots/easyeda-2.jpg",
        link: "#"
      },
      {
        title: "IoT Sensor Node PCB",
        description: "Compact PCB for battery-powered IoT sensor deployment",
        image: "/screenshots/easyeda-3.jpg",
        link: "#"
      }
    ]
  },

  // 🎨 Design Tools - Canva
  canva: {
    name: "Canva",
    category: "Graphic Design",
    description: "Creating marketing materials, presentations, and social media graphics",
    projects: [
      {
        title: "Product Marketing Materials",
        description: "Brochures, flyers, and social media posts for product launch",
        image: "/screenshots/canva-1.jpg",
        link: "#"
      },
      {
        title: "Corporate Presentation",
        description: "Professional slide deck for company presentations",
        image: "/screenshots/canva-2.jpg",
        link: "#"
      },
      {
        title: "Social Media Campaign",
        description: "Instagram and Facebook post designs for marketing campaign",
        image: "/screenshots/canva-3.jpg",
        link: "#"
      }
    ]
  },

  // 🎨 Figma
  figma: {
    name: "Figma",
    category: "UI/UX Design",
    description: "Designing user interfaces and prototyping web/mobile applications",
    projects: [
      {
        title: "Mobile App UI Design",
        description: "Complete UI/UX design for e-commerce mobile application",
        image: "/screenshots/figma-1.jpg",
        link: "https://figma.com/file/yourproject"
      },
      {
        title: "Dashboard Interface",
        description: "Admin dashboard design with interactive components",
        image: "/screenshots/figma-2.jpg",
        link: "#"
      },
      {
        title: "Landing Page Mockup",
        description: "Responsive landing page design with modern aesthetics",
        image: "/screenshots/figma-3.jpg",
        link: "#"
      }
    ]
  },

  // 🖼️ Photoshop
  photoshop: {
    name: "Photoshop",
    category: "Photo Editing & Design",
    description: "Professional photo editing and graphic design with Adobe Photoshop",
    projects: [
      {
        title: "Product Photography Editing",
        description: "Professional product photo retouching for e-commerce",
        image: "/screenshots/photoshop-1.jpg",
        link: "#"
      },
      {
        title: "Marketing Banner Design",
        description: "Eye-catching banners for digital marketing campaigns",
        image: "/screenshots/photoshop-2.jpg",
        link: "#"
      },
      {
        title: "Photo Manipulation Art",
        description: "Creative photo compositing and digital art projects",
        image: "/screenshots/photoshop-3.jpg",
        link: "#"
      }
    ]
  },

  // 🔧 Fusion 360
  fusion360: {
    name: "3D CAD Design",
    category: "Fusion 360",
    description: "Designing precise 3D models and functional mechanical assemblies using Autodesk Fusion 360, focusing on both aesthetic appeal and practical engineering integration.",
    projects: [
      {
        title: "3D Enclosure Design",
        description: "Custom-designed 3D enclosure for an automated plant watering system powered by a standalone microcontroller.",
        image:   [ 
            "/portofolio/3D/Design/Enclosure1.png",
            "/portofolio/3D/Design/Enclosure2.png",
            "/portofolio/3D/Design/Enclosure3.png"
            ],
            link: "#"
      },
      {
        title: "3D Mechanical Design",
        description: "3D-printed maze platform with dynamic tilt mechanism, with dual-axis servo for real-time ball movement.",
        image: "/portofolio/3D/Design/mazeballer.png",
        link: "#"
      },
      {
        title: "3D Model - Smart Miniature House",
        description: "Custom-designed 3D miniature house enclosure created for a microcontroller-based project.",
        image: [
            "/portofolio/3D/Design/The Green Guardian.png",
            "/portofolio/3D/Design/The Green Guardian2.png"
        ],
        link: "#"
      }
    ]
  },

  // 🖨️ 3D Slicing
  "3dslicing": {
    name: "3D Slicing",
    category: "CrealityPrint",
    description: "Preparing and optimizing 3D models for printing with slicing software",
    projects: [
      {
        title: "3D Slicing & Print Optimization",
        description: "Functional 3D printed parts for various applications",
        image: [
                "/portofolio/3D/Slicing/slicing1.png",
                "/portofolio/3D/Slicing/slicing2.png",
                "/portofolio/3D/Slicing/slicing3.png"
        ],
        link: "#"
      },
      {
        title: "Slicing Optimization - Manual Support Placement",
        description: "Optimized slicing setup with manually placed supports to ensure clean overhangs, minimal surface artifacts, and optimize filament usage for print efficiency.",
        image: "/portofolio/3D/Slicing/mazeballer3.png",
        link: "#"
      },
    ]
  },

  // 🌐 Cisco
  cisco: {
    name: "Cisco Packet Tracer",
    category: "Network Engineering",
    description: "Designing and simulating computer networks with Cisco Packet Tracer",
    projects: [
      {
        title: "Enterprise Network Design",
        description: "Complete network topology for company infrastructure",
        image: "/screenshots/cisco-1.jpg",
        link: "#"
      },
      {
        title: "VLAN Configuration",
        description: "Network segmentation using VLANs and inter-VLAN routing",
        image: "/screenshots/cisco-2.jpg",
        link: "#"
      },
      {
        title: "Network Security Implementation",
        description: "Firewall configuration and access control lists (ACLs)",
        image: "/screenshots/cisco-3.jpg",
        link: "#"
      }
    ]
  },
};

export default function SkillDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Narrow params.slug (can be string | string[] | undefined) to a single string
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  // Guard access to skillsData — if slug is missing we'll treat as not found below
  const skill = slug && slug in skillsData ? skillsData[slug as keyof typeof skillsData] : undefined;

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!skill) return;

    const currentProject = skill.projects.find(p => 
      Array.isArray(p.image) ? p.image.includes(selectedImage!) : p.image === selectedImage
    );
    
    if (!currentProject || !Array.isArray(currentProject.image)) return;
    
    const currentIndex = currentProject.image.indexOf(selectedImage!);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % currentProject.image.length
      : (currentIndex - 1 + currentProject.image.length) % currentProject.image.length;
    
    setSelectedImage(currentProject.image[newIndex]);
    setCurrentImageIndex(newIndex);
  }, [selectedImage, skill]);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Skill Not Found</h1>
          <p className="text-gray-600 mb-6">The skill you&apos;re looking for doesn&apos;t exist.</p>
          <button 
            onClick={() => router.push('/#skills')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Skills
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => router.push('/#skills')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group transition"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition" size={20} />
            Back to Skills
          </button>

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {skill.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {skill.name}
            </h1>
            <p className="text-xl text-gray-600">
              {skill.description}
            </p>
          </div>

          {/* Projects Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              <span className="font-bold text-gray-900">{skill.projects.length}</span> projects showcasing this skill
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skill.projects.map((project: Project, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                {/* Screenshot */}
                <div 
                  className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer overflow-hidden"
                >
                  {Array.isArray(project.image) ? (
                    <div className="relative w-full h-full group">
                      {project.image.map((img, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          width={600}
                          height={400}
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={imgIndex === 0}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            imgIndex === currentImageIndex || (!selectedImage && imgIndex === 0) ? 'opacity-100' : 'opacity-0'
                          }`}
                          onError={() => {
                            const imgEl = document.createElement('img');
                            imgEl.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(skill.name)}`;
                          }}
                        />
                      ))}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
                        {project.image.map((img, idx) => (
                          <button
                            key={idx}
                              className={`w-3 h-3 rounded-full transition-all transform ${
                              (selectedImage ? img === selectedImage : idx === currentImageIndex)
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 ring-2 ring-white scale-110' 
                                : 'bg-white/50 hover:bg-white hover:scale-105'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(img);
                              setCurrentImageIndex(idx);
                            }}
                          />
                        ))}
                      </div>
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center"
                        onClick={() => {
                          if (Array.isArray(project.image)) {
                            setSelectedImage(project.image[currentImageIndex]);
                          }
                        }}
                      >
                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition transform scale-75 group-hover:scale-100" size={28} />
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="relative w-full h-full"
                      onClick={() => {
                        if (typeof project.image === 'string') {
                          setSelectedImage(project.image);
                          setCurrentImageIndex(0);
                        }
                      }}
                    >
                      <Image
                        src={typeof project.image === 'string' ? project.image : project.image[0]}
                        alt={project.title}
                        width={600}
                        height={400}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        onError={() => {
                          const imgEl = document.createElement('img');
                          imgEl.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(skill.name)}`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition transform scale-75 group-hover:scale-100" size={28} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal - Fullscreen Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition p-2 hover:bg-white/10 rounded-lg"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-7xl max-h-full">
            <div className="relative">
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  width={1200}
                  height={800}
                  quality={100}
                  sizes="100vw"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onError={() => {
                    const img = document.createElement('img');
                    img.src = 'https://placehold.co/1200x800/3b82f6/ffffff?text=Image+Not+Available';
                  }}
                />
                
                {/* Arrow Navigation */}
                {Array.isArray(skill.projects.find(p => 
                  Array.isArray(p.image) ? p.image.includes(selectedImage) : p.image === selectedImage
                )?.image) && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage('prev');
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage('next');
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              {/* Navigation buttons for multiple images */}
              {Array.isArray(skill.projects.find(p => 
                Array.isArray(p.image) ? p.image.includes(selectedImage) : p.image === selectedImage
              )?.image) && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {(skill.projects.find(p => 
                    Array.isArray(p.image) ? p.image.includes(selectedImage) : p.image === selectedImage
                  )?.image as string[]).map((img, idx) => (
                    <button
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all ${
                        img === selectedImage 
                          ? 'bg-blue-500 ring-2 ring-white' 
                          : 'bg-white/50 hover:bg-white'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(img);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}