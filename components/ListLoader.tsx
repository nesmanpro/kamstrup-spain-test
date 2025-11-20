"use client";

import { ReactNode } from "react";
import SkeletonCardList from "./skeletons/SkeletonCardList";

interface DataLoaderProps {
  loading: boolean;
  error: any;
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

export default function ListLoader({
  loading,
  error,
  children,
  fallback = <SkeletonCardList />,
  errorFallback = (
    <div className="home-layout w-full">Ups! Something went wrong</div>
  ),
}: DataLoaderProps) {
  if (loading) return <>{fallback}</>;
  if (error) return <>{errorFallback}</>;
  return <>{children}</>;
}
