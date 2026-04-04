import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

// Renamed from GlassCard to EditorialCard but kept file name for refactoring ease
export default function EditorialCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("editorial-panel", className)}>
      {children}
    </div>
  );
}
