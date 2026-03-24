export default function LoaderSkeleton() {
  return (
    <div className="fixed inset-0 bg-gray-50 z-[9999] p-3 w-full flex flex-col items-center animate-pulse overflow-y-auto">
      
      {/* Hero Skeleton */}
      <div className="w-full max-w-[1920px] h-[70vh] md:h-[80vh] rounded-4xl bg-gray-200 relative mb-8 overflow-hidden">
        {/* Faint Inner Accents */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-300/50 to-transparent" />
        
        {/* Center Text Skeletons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-6">
          <div className="w-3/4 md:w-1/2 h-16 md:h-24 bg-gray-300 rounded-2xl" />
          <div className="w-1/2 md:w-1/3 h-6 bg-gray-300 rounded-full" />
          <div className="w-32 h-12 bg-gray-400 rounded-full mt-4" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="w-full max-w-[1920px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 rounded-4xl bg-gray-200 border border-gray-100 flex flex-col p-8 gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="w-3/4 h-8 bg-gray-300 rounded-lg" />
            <div className="w-full h-20 bg-gray-300 rounded-xl" />
          </div>
        ))}
      </div>
      
    </div>
  );
}
