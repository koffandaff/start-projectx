import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "tech" | "status" | "type" | "live";
  className?: string;
}

export default function Badge({ children, variant = "tech", className }: BadgeProps) {
  const variants = {
    tech: "text-[#064E3B] bg-[#064E3B]/5 border border-[#064E3B]/20",
    type: "text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30",
    status: "text-[#022C22] bg-amber-500/20 border border-amber-500/40",
    live: "text-[#F0EEE9] bg-[#064E3B] border border-[#022C22] shadow-sm animate-pulse",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest",
        variants[variant],
        className
      )}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}
