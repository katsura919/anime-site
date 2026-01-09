import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-xl bg-white/5 backdrop-blur-lg border border-white/10",
        hover && "transition-all duration-300 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
