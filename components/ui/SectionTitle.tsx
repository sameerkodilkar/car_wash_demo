import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true, className, light = false }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-4", centered ? "items-center text-center" : "items-start text-left", className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn("text-sm font-semibold tracking-wider uppercase", light ? "text-blue-300" : "text-primary")}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-3xl md:text-5xl font-bold tracking-tight", light ? "text-white" : "text-navy")}
      >
        {title}
      </motion.h2>
    </div>
  );
}
