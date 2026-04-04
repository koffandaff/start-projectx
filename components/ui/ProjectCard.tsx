"use client";

import { ExternalLink, Database, Code2, Globe, Server, Camera, LineChart, Music, Book, Box, Map, Activity, Gamepad2, FileText, Cloud, Bot, ShieldAlert, Cpu, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Project } from "@/types";
import posthog from "posthog-js";

interface ProjectCardProps {
  project: Project & { image?: string; icon?: string; type?: string };
}

const getSafeIcon = (iconName: string) => {
  const iconProps = "w-16 h-16 text-[#064E3B] opacity-40 group-hover:opacity-100 group-hover:text-[#10B981] transition-all duration-700 relative z-10 scale-100 group-hover:scale-110";
  const icons: Record<string, React.ReactNode> = {
    bot: <Bot className={iconProps} />,
    cloud: <Cloud className={iconProps} />,
    shield: <ShieldAlert className={iconProps} />,
    camera: <Camera className={iconProps} />,
    chart: <LineChart className={iconProps} />,
    music: <Music className={iconProps} />,
    book: <Book className={iconProps} />,
    cube: <Box className={iconProps} />,
    database: <Database className={iconProps} />,
    map: <Map className={iconProps} />,
    hospital: <Activity className={iconProps} />,
    gamepad: <Gamepad2 className={iconProps} />,
    file: <FileText className={iconProps} />,
    server: <Server className={iconProps} />,
    globe: <Globe className={iconProps} />,
    message: <MessageCircle className={iconProps} />,
    code: <Code2 className={iconProps} />,
  };
  
  return icons[iconName] || <Cpu className={iconProps} />;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLive = project.status === "live" && project.liveUrl;

  const handleCardClick = () => {
    posthog.capture('project_card_click', { 
      projectTitle: project.title,
      projectType: project.type 
    });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "editorial-panel flex flex-col h-full group p-0 relative overflow-hidden bg-[var(--bg-panel)] cursor-pointer"
      )}
    >
      {/* Editorial Image / Icon Header */}
      <div className="h-48 sm:h-56 w-full relative overflow-hidden border-b var(--editorial-border) bg-[#F0EEE9]">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale-[50%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#E7E5E4]/50 group-hover:bg-[#064E3B]/10 transition-colors duration-700">
             {getSafeIcon(project.icon || "code")}
          </div>
        )}
        
        {/* Status indicator absolute positioned sharp square */}
        <div className="absolute top-0 right-0 z-20 bg-[#064E3B] px-4 py-2 text-white text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          {isLive ? "LIVE DEMO" : project.type || "INTERNAL"}
        </div>
      </div>

      {/* Card body - Sharp & Minimal */}
      <div className="p-5 sm:p-6 relative z-20 flex-grow flex flex-col bg-[var(--bg-panel)]">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="font-black text-[#022C22] text-xl sm:text-2xl uppercase tracking-tighter group-hover:text-[#10B981] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>
          {isLive && (
             <ExternalLink
               size={24}
               className="text-[#10B981] mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500"
             />
          )}
        </div>

        <p
          className="text-xs sm:text-sm text-[#064E3B]/80 mb-6 leading-relaxed font-medium line-clamp-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {project.description}
        </p>

        {/* Tech layout minimalist */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto border-t var(--editorial-border) pt-4">
          {project.tech.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]" style={{ fontFamily: "var(--font-mono)" }}>
              [{tag}]
            </span>
          ))}
        </div>

        {/* Action arrow heavily stylized */}
        <div className="border-t-[3px] border-[#064E3B] w-8 group-hover:w-full transition-all duration-700 ease-out mt-4 relative">
            <span className="absolute -top-3 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[#064E3B] font-bold text-lg">
                →
            </span>
        </div>
      </div>
    </div>
  );
}
