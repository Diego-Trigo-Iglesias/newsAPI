'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="space-y-4 text-center">
        <div className="inline-flex">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
        </div>
        <p className="text-sm text-gray-600">Cargando noticias...</p>
      </div>
    </div>
  );
}
