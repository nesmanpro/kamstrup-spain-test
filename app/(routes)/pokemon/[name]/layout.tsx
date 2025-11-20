"use client";

// React
import { ReactNode } from "react";

// Compoments
import { Separator } from "@/components/ui/separator";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div className="md:max-w-3xl lg:max-w-5xl  sm:mt-0 px-20 lg:px-0 w-full mt-10">
      <h1 className="sm:text-2xl font-medium">Details</h1>
      <Separator className="my-4" />
      {children}
    </div>
  );
}
