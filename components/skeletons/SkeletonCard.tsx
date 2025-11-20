import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="w-60 flex flex-col gap-3 cursor-pointer">
      <Skeleton className="h-[350px] w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-9 w-20" />
    </div>
  );
}
