# NewsHub - Agregador de Noticias en Tiempo Real# NewsHub - Agregador de Noticias en Tiempo RealThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



Una aplicación web moderna construida con **Next.js** y **React** que te permite mantenerte informado sobre las noticias más recientes del mundo. **¡Sin necesidad de registro ni claves API!**



## ✨ CaracterísticasUna aplicación web moderna construida con **Next.js** y **React** que te permite mantenerte informado sobre las noticias más recientes del mundo.## Getting Started



- 📰 **Noticias en Tendencia**: Explora las noticias más populares por país

- 🔍 **Búsqueda Personalizada**: Busca noticias sobre temas específicos

- 🌍 **Múltiples Países**: Selecciona noticias de 8 países diferentes## ✨ CaracterísticasFirst, run the development server:

- ⚡ **Carga Rápida**: Aplicación optimizada con Next.js

- 🎨 **Interfaz Moderna**: Diseño responsivo con Tailwind CSS

- 🐳 **Docker Ready**: Fácil de desplegar en cualquier servidor

- 🔓 **Sin Registro Requerido**: API gratuita sin necesidad de claves- 📰 **Noticias en Tendencia**: Explora las noticias más populares por país```bash

- 📱 **Completamente Responsivo**: Funciona en móvil, tablet y desktop

- 🔍 **Búsqueda Personalizada**: Busca noticias sobre temas específicosnpm run dev

## 🚀 Inicio Rápido

- 🌍 **Múltiples Países**: Selecciona noticias de diferentes países# or

### Requisitos Previos

- ⚡ **Carga Rápida**: Aplicación optimizada con Next.jsyarn dev

- **Node.js** 18+ o superior

- **npm**, **yarn**, **pnpm** o **bun**- 🎨 **Interfaz Moderna**: Diseño responsivo con Tailwind CSS# or

- **Docker** (opcional, para containerización)

- 🐳 **Docker Ready**: Fácil de desplegar en cualquier servidorpnpm dev

### Instalación Local (¡Sin registro requerido!)

- 🔐 **Seguro**: Manejo seguro de variables de entorno# or

1. **Clonar el repositorio**

bun dev

```bash

git clone https://github.com/tu-usuario/newsapi.git## 🚀 Inicio Rápido```

cd newsapi

```



2. **Instalar dependencias**### Requisitos PreviosOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



```bash

npm install

```- **Node.js** 18+ o superiorYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



3. **Ejecutar en desarrollo**- **npm**, **yarn**, **pnpm** o **bun**



```bash- Clave API de [NewsAPI](https://newsapi.org) (gratuita)This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

npm run dev

```- **Docker** (opcional, para containerización)



4. **Abre tu navegador**## Learn More



Accede a [http://localhost:3000](http://localhost:3000) ### Instalación Local



¡Eso es todo! No necesitas configurar nada más. Las noticias comenzarán a cargarse automáticamente.To learn more about Next.js, take a look at the following resources:



## 🐳 Despliegue con Docker1. **Clonar el repositorio**



### Usando Docker Compose (Recomendado)- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.



1. **Construir e iniciar el contenedor**```bash- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



```bashgit clone https://github.com/tu-usuario/newsapi.git

docker-compose up --build

```cd newsapiYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



2. **Acceder a la aplicación**```



Abre [http://localhost:3000](http://localhost:3000)## Deploy on Vercel



3. **Detener la aplicación**2. **Instalar dependencias**



```bashThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

docker-compose down

``````bash



### Usando Docker Directamentenpm installCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



```bash```

# Construir imagen

docker build -t newsapi:latest .3. **Configurar variables de entorno**



# Ejecutar contenedor```bash

docker run -p 3000:3000 newsapi:latestcp .env.example .env.local

``````



## 📊 Estructura del ProyectoEdita `.env.local` y añade tu clave API de NewsAPI:



``````env

newsapi/NEXT_PUBLIC_NEWS_API_KEY=tu_clave_api_aqui

├── src/NEXT_PUBLIC_API_BASE_URL=https://newsapi.org/v2

│   ├── app/                 # App Router de Next.js```

│   │   ├── page.tsx        # Página principal

│   │   ├── layout.tsx      # Layout global4. **Ejecutar en desarrollo**

│   │   └── globals.css     # Estilos globales

│   ├── components/          # Componentes React```bash

│   │   ├── NewsTabs.tsxnpm run dev

│   │   ├── TrendingNews.tsx```

│   │   ├── SearchNews.tsx

│   │   ├── NewsCard.tsxAbre [http://localhost:3000](http://localhost:3000) en tu navegador.

│   │   ├── SearchBar.tsx

│   │   ├── LoadingSpinner.tsx### Obtener Clave API de NewsAPI

│   │   └── ErrorMessage.tsx

│   └── services/            # Servicios de API1. Ve a [https://newsapi.org/register](https://newsapi.org/register)

│       └── newsapi.ts       # Cliente de GNews API2. Crea una cuenta

├── public/                  # Archivos estáticos3. Verifica tu email

├── Dockerfile              # Configuración Docker4. Copia tu clave API

├── docker-compose.yml      # Docker Compose5. Pégala en `.env.local`

├── .env.example           # Variables de entorno (referencia)

└── package.json           # Dependencias del proyecto## 🐳 Despliegue con Docker

```

### Usando Docker Compose (Recomendado)

## 🛠️ Tecnologías Utilizadas

1. **Asegúrate de tener el archivo `.env.local` configurado**

- **[Next.js](https://nextjs.org/)** - Framework React

- **[React](https://react.dev/)** - Librería UI```bash

- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estáticocp .env.example .env.local

- **[Tailwind CSS](https://tailwindcss.com/)** - CSS Utility-First# Edita .env.local con tu clave API

- **[Axios](https://axios-http.com/)** - Cliente HTTP```

- **[Lucide React](https://lucide.dev/)** - Iconos

- **[GNews API](https://gnews.io/)** - Fuente de noticias (gratuita)2. **Construir e iniciar el contenedor**



## 📚 Comandos Disponibles```bash

docker-compose up --build

```bash```

# Desarrollo

npm run dev           # Inicia servidor en http://localhost:30003. **Acceder a la aplicación**



# ProducciónAbre [http://localhost:3000](http://localhost:3000)

npm run build         # Construye la aplicación

npm start            # Inicia servidor en modo producción4. **Detener la aplicación**



# Linting```bash

npm run lint         # Verifica código con ESLintdocker-compose down

npm run lint --fix   # Corrige problemas automáticamente```

```

### Usando Docker Directamente

## 🎯 Características Principales

```bash

### 1. **Noticias en Tendencia**# Construir imagen

- Visualiza las noticias más populares de 8 países diferentesdocker build -t newsapi:latest .

- Actualización automática

- Navegación por página# Ejecutar contenedor

- Vista de tarjetas responsivasdocker run -p 3000:3000 \

  -e NEXT_PUBLIC_NEWS_API_KEY=tu_clave_api \

### 2. **Búsqueda Personalizada**  newsapi:latest

- Busca noticias sobre cualquier tema```

- Búsquedas populares sugeridas

- Resultados en tiempo real## 📊 Estructura del Proyecto

- Filtrado automático por relevancia

```

### 3. **Sin Configuración Requerida**newsapi/

- API completamente gratuita├── src/

- Sin necesidad de registrarse│   ├── app/                 # App Router de Next.js

- Sin límites de solicitudes para uso básico│   │   ├── page.tsx        # Página principal

- Funciona inmediatamente después de la instalación│   │   ├── layout.tsx      # Layout global

│   │   └── globals.css     # Estilos globales

## 🌐 Fuentes de Noticias│   ├── components/          # Componentes React

│   │   ├── NewsTabs.tsx

La aplicación utiliza **GNews API**, que agrega noticias de:│   │   ├── TrendingNews.tsx

- BBC│   │   ├── SearchNews.tsx

- Reuters│   │   ├── NewsCard.tsx

- AP News│   │   ├── SearchBar.tsx

- Associated Press│   │   ├── LoadingSpinner.tsx

- Más de 10,000 fuentes de noticias globales│   │   └── ErrorMessage.tsx

│   └── services/            # Servicios de API

## 🔐 Seguridad y Privacidad│       └── newsapi.ts       # Cliente de NewsAPI

├── public/                  # Archivos estáticos

- ✅ No recopilamos datos personales├── Dockerfile              # Configuración Docker

- ✅ No requiere autenticación├── docker-compose.yml      # Docker Compose

- ✅ API pública y documentada├── .env.example           # Variables de entorno ejemplo

- ✅ Código abierto y transparente├── .env.local             # Variables de entorno (NO compartir)

- ✅ Seguro para usar en cualquier contexto└── package.json           # Dependencias del proyecto

```

## 📝 Licencia

## 🛠️ Tecnologías Utilizadas

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

- **[Next.js](https://nextjs.org/)** - Framework React con Server-Side Rendering

## 🤝 Contribuir- **[React](https://react.dev/)** - Librería UI

- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático

Las contribuciones son bienvenidas. Por favor:- **[Tailwind CSS](https://tailwindcss.com/)** - CSS Utility-First

- **[Axios](https://axios-http.com/)** - Cliente HTTP

1. Fork el proyecto- **[Lucide React](https://lucide.dev/)** - Iconos

2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)- **[NewsAPI](https://newsapi.org/)** - Fuente de noticias

3. Commit tus cambios (`git commit -m 'Add amazing feature'`)

4. Push a la rama (`git push origin feature/amazing-feature`)## 📚 Comandos Disponibles

5. Abre un Pull Request

```bash

## 📧 Soporte# Desarrollo

npm run dev           # Inicia servidor en http://localhost:3000

Si encuentras problemas o tienes sugerencias, abre un [issue](https://github.com/tu-usuario/newsapi/issues).

# Producción

## 🙏 Agradecimientosnpm run build         # Construye la aplicación

npm start            # Inicia servidor en modo producción

- [GNews API](https://gnews.io/) por proporcionar acceso gratuito a noticias

- [Next.js](https://nextjs.org/) por el excelente framework# Linting

- [Tailwind CSS](https://tailwindcss.com/) por los estilosnpm run lint         # Verifica código con ESLint

- Todos los que contribuyen a este proyectonpm run lint --fix   # Corrige problemas automáticamente

```

---

## 🔐 Seguridad

**Hecho con ❤️ para mantener al mundo informado**

### Variables de Entorno

- **`.env.local`** contiene tus claves confidenciales y NO debe ser compartido
- **`.env.example`** es un template para mostrar qué variables son necesarias
- El archivo `.gitignore` está configurado para excluir archivos `.env.*`

### Mejores Prácticas

- ✅ Usa `NEXT_PUBLIC_` solo para variables públicas que se expondrán al navegador
- ✅ Mantén tus claves API privadas
- ✅ No hagas commit de `.env.local`
- ✅ Usa `.env.example` como referencia para colaboradores
- ✅ Rota tus claves API regularmente

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📧 Soporte

Si encuentras problemas o tienes sugerencias, abre un [issue](https://github.com/tu-usuario/newsapi/issues).

## 🙏 Agradecimientos

- [NewsAPI](https://newsapi.org/) por proporcionar el acceso a noticias
- [Next.js](https://nextjs.org/) por el excelente framework
- [Tailwind CSS](https://tailwindcss.com/) por los estilos
