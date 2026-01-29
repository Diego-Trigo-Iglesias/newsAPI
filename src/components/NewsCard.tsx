'use client';

import Image from 'next/image';
import { NewsArticle } from '@/services/newsapi';
import { ExternalLink, Calendar, User } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const publishDate = new Date(article.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-lg">
      {/* Image */}
      {article.urlToImage && (
        <div className="relative h-44 w-full overflow-hidden bg-gray-100">
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Badge */}
        <div>
          <span className="inline-block rounded-sm bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700 uppercase tracking-tight">
            {article.source.name.split(' ')[0]}
          </span>
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3 className="line-clamp-3 text-sm font-bold text-gray-900 leading-snug">
            {article.title}
          </h3>
        </div>

        {/* Description */}
        {article.description && (
          <p className="line-clamp-2 text-xs text-gray-600">
            {article.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
          <div className="flex items-center gap-1 truncate">
            <User size={12} />
            <span className="truncate">{article.author || 'Desconocido'}</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
            <Calendar size={12} />
            <span>{publishDate}</span>
          </div>
        </div>

        {/* Button */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
        >
          Leer más
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
}
