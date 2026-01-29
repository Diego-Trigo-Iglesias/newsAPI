'use client';

import { useState } from 'react';
import TrendingNews from './TrendingNews';
import SearchNews from './SearchNews';
import { Newspaper, Search } from 'lucide-react';

type TabType = 'trending' | 'search';

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('trending');

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('trending')}
            className={`flex items-center gap-2 border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === 'trending'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Newspaper size={18} />
            Noticias en Tendencia
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`flex items-center gap-2 border-b-2 px-1 py-3 text-sm font-semibold transition-colors ${
              activeTab === 'search'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Search size={18} />
            Búsqueda Personalizada
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'trending' && <TrendingNews />}
        {activeTab === 'search' && <SearchNews />}
      </div>
    </div>
  );
}
