'use client';

import { useEffect, useState } from 'react';
import NewsAPIService, { NewsArticle } from '@/services/newsapi';
import NewsCard from './NewsCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const COUNTRIES = [
  { code: 'US', name: '🇺🇸 Estados Unidos' },
  { code: 'MX', name: '🇲🇽 México' },
  { code: 'ES', name: '🇪🇸 España' },
  { code: 'AR', name: '🇦🇷 Argentina' },
  { code: 'BR', name: '🇧🇷 Brasil' },
  { code: 'GB', name: '🇬🇧 Reino Unido' },
  { code: 'FR', name: '🇫🇷 Francia' },
  { code: 'DE', name: '🇩🇪 Alemania' },
];

export default function TrendingNews() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('US');

  useEffect(() => {
    const fetchTrendingNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const newsService = new NewsAPIService();
        const response = await newsService.getTopHeadlines(selectedCountry, 20);
        setArticles(response.articles);
      } catch (err) {
        setError(
          'No pudimos cargar las noticias en este momento. Por favor, intenta de nuevo más tarde.'
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingNews();
  }, [selectedCountry]);

  const handleRetry = () => {
    // Retry fetching
  };

  if (error) {
    return (
      <ErrorMessage
        title="Error al cargar noticias"
        message={error}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Country Selector */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-sm font-bold text-gray-900">Noticias por País</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {COUNTRIES.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country.code)}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition-all ${
                selectedCountry === country.code
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
