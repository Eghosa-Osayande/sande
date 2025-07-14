import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle } from "lucide-react";

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  status: "upcoming" | "current" | "completed";
}

interface PrizeTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function PrizeTimeline({ events, className = "" }: PrizeTimelineProps) {
  const getStatusIcon = (status: TimelineEvent["status"]) => {
    const iconClasses = "h-4 w-4";
    const statusMap = {
      upcoming: <Clock className={iconClasses} />,
      current: <Calendar className={`${iconClasses} text-accent`} />,
      completed: <CheckCircle className={`${iconClasses} text-green-600`} />,
    };
    return statusMap[status];
  };

  const getStatusVariant = (status: TimelineEvent["status"]) => {
    const variantMap = {
      upcoming: "secondary" as const,
      current: "default" as const,
      completed: "outline" as const,
    };
    return variantMap[status];
  };

  const getStatusColor = (status: TimelineEvent["status"]) => {
    const colorMap = {
      upcoming: "border-muted-foreground",
      current: "border-accent",
      completed: "border-green-600",
    };
    return colorMap[status];
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-poetry">Important Dates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < events.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-6 bg-border" />
              )}

              {/* Event */}
              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${getStatusColor(
                    event.status
                  )} bg-background flex items-center justify-center`}
                >
                  {getStatusIcon(event.status)}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <Badge
                      variant={getStatusVariant(event.status)}
                      className="text-xs"
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-accent">
                    {event.date}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
