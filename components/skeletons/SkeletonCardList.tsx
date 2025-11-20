import { SkeletonCard } from "./SkeletonCard";
import { SkeletonButton } from "./SkeletonButton";

export default function SkeletonCardList() {
  return (
    <div className="home-layout">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <SkeletonButton />
        <SkeletonButton />
      </div>
    </div>
  );
}
