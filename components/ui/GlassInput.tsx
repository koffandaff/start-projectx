import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextarea?: boolean;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, label, error, isTextarea, id, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col items-start font-[var(--font-body)]">
        <label
          htmlFor={id}
          className="text-xs sm:text-sm font-bold text-[#064E3B] mb-2 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {label}
        </label>

        {isTextarea ? (
          <textarea
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            id={id}
            onInput={(e) => {
              e.currentTarget.style.height = 'auto';
              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
              if (props.onInput) props.onInput(e);
            }}
            className={cn(
              "w-full px-5 py-4 bg-[#F0EEE9] border-[2px] border-[#064E3B] outline-none text-[#022C22] placeholder:text-[#064E3B]/40 transition-all duration-300 resize-none overflow-hidden",
              "focus:bg-[#FAFAF8] focus:shadow-[4px_4px_0_#064E3B]",
              error && "border-red-500 focus:shadow-[4px_4px_0_#EF4444]",
              className
            )}
            rows={5}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.RefObject<HTMLInputElement>}
            id={id}
            className={cn(
              "w-full px-5 py-4 bg-[#F0EEE9] border-[2px] border-[#064E3B] outline-none text-[#022C22] placeholder:text-[#064E3B]/40 transition-all duration-300",
              "focus:bg-[#FAFAF8] focus:shadow-[4px_4px_0_#064E3B] h-14",
              error && "border-red-500 focus:shadow-[4px_4px_0_#EF4444]",
              className
            )}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p className="mt-2 text-xs font-bold text-red-500 tracking-wide">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
