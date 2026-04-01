"use client";

export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* IMAGE */}
      <div className="bg-gray-200 aspect-square animate-pulse" />

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>

        <div className="flex gap-2">
          <div className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
