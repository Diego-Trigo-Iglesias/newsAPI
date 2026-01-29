'use client';

import { useEffect, useState } from 'react';
import NewsAPIService, { NewsArticle } from '@/services/newsapi';
import NewsCard from './NewsCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';
import { Flame } from 'lucide-react';

interface SearchNewsProps {
  defaultQuery?: string;
}

const TRENDING_SEARCHES = [
  'Inteligencia Artificial',
  'Criptomonedas',
  'Tecnología',
  'Clima',
  'Deportes',
  'Política',
  'Ciencia',
  'Economía',
];

export default function SearchNews({ defaultQuery = '' }: SearchNewsProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(defaultQuery);

  useEffect(() => {
    if (!searchQuery) {
      setArticles([]);
      return;
    }

    const fetchSearchResults = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const newsService = new NewsAPIService();
        const response = await newsService.searchNews(searchQuery, 'publishedAt', 20, 'es');
        setArticles(response.articles);
      } catch (err) {
        setError(
          'No pudimos encontrar noticias. Verifica tu búsqueda e intenta de nuevo.'
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTrendingClick = (query: string) => {
    handleSearch(query);
  };

  return (
    <div className="space-y-6">
      {/* Search Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-sm font-bold text-gray-900">Busca Noticias</h2>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      </div>

      {/* Trending Searches */}
      {!searchQuery && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-900">
            <Flame size={16} className="text-orange-500" />
            Búsquedas Populares
          </h3>
          <div className="flex flex-wrap gap-2">
            {TRENDING_SEARCHES.map((search) => (
              <button
                key={search}
                onClick={() => handleTrendingClick(search)}
                className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {searchQuery && (
        <>
          {error ? (
            <ErrorMessage
              title="Error en la búsqueda"
              message={error}
              onRetry={() => handleSearch(searchQuery)}
            />
          ) : isLoading ? (
            <LoadingSpinner />
          ) : articles.length > 0 ? (
            <>
              <div className="rounded-lg border border-gray-200 bg-blue-50 px-6 py-4">
                <p className="text-xs text-gray-600">
                  {articles.length} resultados encontrados para:
                </p>
                <p className="mt-1 text-sm font-bold text-gray-900">&quot;{searchQuery}&quot;</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articles.map((article) => (
                  <NewsCard key={article.url} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-6 text-center">
              <p className="text-sm font-semibold text-gray-900">
                No se encontraron resultados para &quot;{searchQuery}&quot;
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Intenta con otras palabras clave
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
