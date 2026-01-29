'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({title = 'Error',message, onRetry }: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-center">
      <AlertCircle className="mx-auto mb-4 text-red-600" size={48} />
      <h3 className="mb-2 text-lg font-semibold text-red-900">{title}</h3>
      <p className="mb-4 text-red-700">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
        >
          <RefreshCw size={16} />
          Intentar de nuevo
        </button>
      )}
    </div>
  );
}
