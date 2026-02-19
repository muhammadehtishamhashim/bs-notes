import { cn } from "@/lib/cn";
import { FileText, Cpu, Image as ImageIcon } from "lucide-react";

interface ByteSourceProps {
  binary: string;
  hex: string;
  decimal: number;
}

export function ByteSource({ binary, hex, decimal }: ByteSourceProps) {
  return (
    <div className="mb-10 flex justify-center">
      <div className="relative group rounded-xl bg-card border shadow-sm p-6 text-center w-64 transition-all hover:shadow-md hover:border-primary/50">
        <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest">
          Source Byte
        </div>
        <div className="font-mono text-3xl font-bold tracking-widest text-primary mb-2">
          {binary}
        </div>
        <div className="flex justify-center gap-4 text-xs font-mono text-muted-foreground border-t pt-2">
          <span>Hex: <span className="text-foreground font-semibold">{hex}</span></span>
          <span>Dec: <span className="text-foreground font-semibold">{decimal}</span></span>
        </div>
      </div>
    </div>
  );
}

interface ContextCardProps {
  type: "text" | "image" | "program";
  title: string;
  children: React.ReactNode;
}

export function ContextCard({ type, title, children }: ContextCardProps) {
  const styles = {
    text: {
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    image: {
      icon: ImageIcon,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    program: {
      icon: Cpu,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className="flex flex-col items-center rounded-xl border bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-lg hover:-translate-y-1">
      <div className={cn("mb-4 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold ring-1 ring-inset", style.bg, style.color, style.border)}>
        <Icon className="h-3.5 w-3.5" />
        {title}
      </div>
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function ByteContextContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 rounded-2xl border bg-muted/30 p-8 md:p-12">
      {children}
    </div>
  );
}

export function ByteInterpretationGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {children}
        </div>
    )
}
