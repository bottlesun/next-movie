/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org', 'www.gravatar.com'],
  },

  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        permanent: false,
      }
    ]
  },
  async rewrites() { //들어오는 요청 경로를 다른 대상 경로에 매핑할 수 있습니다.
    // api 등 필요 부분 보안을 위해서도 필요한 부분
    return [
      {
        source: '/api/:value',  // 들어오는 요청 경로 패턴
        destination: `https://api.themoviedb.org/3/:value/popular?api_key=${API_KEY}&language=ko-KR&include_adult=false`,
      },
      {
        source: '/api/contents/:value/:id',
        destination: `https://api.themoviedb.org/3/:value/:id?api_key=${API_KEY}&language=ko-KR&include_adult=false`,
      },
      {
        source: '/api/:value/:type',
        destination: `https://api.themoviedb.org/3/:value/:type?api_key=${API_KEY}&language=ko-KR&include_adult=false`,
      },
      {
        source: '/api/contents/:value/:id/:type',
        destination: `https://api.themoviedb.org/3/:value/:id/:type?api_key=${API_KEY}&language=ko-KR&include_adult=false`,
      },
      {
        source: '/api/search/:value/:query',
        destination: `https://api.themoviedb.org/3/search/:value?api_key=${API_KEY}&language=ko-KR&query=:query&include_adult=false`,
      },
    ]
  },
}

module.exports = nextConfig
