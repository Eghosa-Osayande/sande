import { Award, Calendar } from "lucide-react";

interface AwardBadgeProps {
  title: string;
  organization?: string;
  year?: string;
  description?: string;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function AwardBadge({
  title,
  organization,
  year,
  description,
  // variant = "default",
  className = "",
}: AwardBadgeProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <Award className="h-5 w-5 text-accent" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {organization && (
              <p className="text-sm text-muted-foreground">{organization}</p>
            )}
          </div>

          {year && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{year}</span>
            </div>
          )}

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
