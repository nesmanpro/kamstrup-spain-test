import { Skeleton } from "../ui/skeleton";

export default function SkeletonDetails() {
  return (
    <main className="flex flex-col md:flex-row items-center w-full mb-20">
      <div className="w-[300px] md:w-64 aspect-square flex-1/2 md:flex-1/3 flex flex-col items-center">
        <Skeleton className="h-72 w-[250px]" />
      </div>
      <div className="flex flex-col gap-10 flex-1/2 md:flex-2/3 mt-20 md:mt-0">
        <div className="flex justify-between items-center w-full ">
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-8 w-[100px]" />
        </div>
        <div className=" flex items-center gap-5">
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
        </div>
        <div className=" flex items-center gap-5">
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
        </div>
        <div className=" flex items-center gap-5">
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
          <Skeleton className="h-7 w-[100px]" />
        </div>
      </div>
    </main>
  );
}
