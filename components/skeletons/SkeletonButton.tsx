import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonButton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-9 w-20" />
    </div>
  );
}
