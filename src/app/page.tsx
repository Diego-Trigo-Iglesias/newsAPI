import NewsTabs from '@/components/NewsTabs';
import { Newspaper } from 'lucide-react';

export const metadata = {
  title: 'NewsHub - Noticias en Tiempo Real',
  description:
    'Mantente informado con las noticias más recientes del mundo. Explora noticias en tendencia o busca temas específicos.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Elegante */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
              <Newspaper size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">NewsHub</h1>
              <p className="text-xs text-gray-500">Noticias en tiempo real</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1400px] px-8 py-12">
        <NewsTabs />
      </main>
    </div>
  );
}
