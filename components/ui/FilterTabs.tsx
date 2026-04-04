"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: { label: string; value: string }[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function FilterTabs({ tabs, active, onChange, className }: FilterTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-x-4 gap-y-2 p-4 bg-[#FAFAF8] border-[3px] border-[#064E3B] shadow-[6px_6px_0_#064E3B] items-center w-full max-w-full",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              "px-4 sm:px-6 py-2.5 text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#10B981] relative text-center min-h-[44px] uppercase tracking-widest flex-none whitespace-nowrap",
              isActive
                ? "text-[#F0EEE9] bg-[#064E3B]"
                : "text-[#064E3B] hover:text-[#022C22] hover:bg-[#10B981]/10 bg-transparent"
            )}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
