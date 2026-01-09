import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-4 rounded-full font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-[#C8102E] hover:bg-opacity-90 text-white shadow-lg hover:shadow-2xl hover:scale-105",
        variant === "secondary" &&
          "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
