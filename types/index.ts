export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  stack: string;
  type?: string;
  image?: string;
  icon?: string;
  liveUrl?: string | null;
  status: "live" | "demo" | "archived" | "completed";
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  deadline: string;
  description: string;
}
