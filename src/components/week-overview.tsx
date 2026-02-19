import { cn } from "@/lib/cn";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Module {
  title: string;
  description: string;
  link: string;
}

interface WeekOverviewProps {
  title: string;
  description: string;
  modules: Module[];
}

export function WeekOverview({ title, description, modules }: WeekOverviewProps) {
  return (
    <div className="my-8 rounded-xl border bg-linear-to-br from-card to-muted/20 shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6 border-b bg-muted/10">
        <h3 className="text-2xl font-bold leading-none tracking-tight text-primary/90">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-2xl">{description}</p>
      </div>
      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Link
              key={index}
              href={module.link}
              className={cn(
                "group relative flex flex-col justify-between rounded-xl border bg-card p-5 transition-all duration-300",
                "hover:border-primary/50 hover:shadow-lg hover:-translate-y-1",
                "no-underline" 
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {module.description}
                </p>
              </div>
              <div className="mt-5 flex items-center text-xs font-semibold uppercase tracking-wider text-primary/80 group-hover:text-primary">
                Start Learning <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
