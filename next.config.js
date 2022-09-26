/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org' , 'www.gravatar.com'],
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
        source: '/api/movies',  // 들어오는 요청 경로 패턴
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/:value/upcoming',
        destination: `https://api.themoviedb.org/3/:value/upcoming?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/:value/nowPlaying',
        destination: `https://api.themoviedb.org/3/:value/now_playing?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/tv',
        destination: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/tv/onAir',
        destination: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/:value/topRated',
        destination: `https://api.themoviedb.org/3/:value/top_rated?api_key=${API_KEY}&language=ko-KR`,
      },

      {
        source: '/api/contents/:value/:id',
        destination: `https://api.themoviedb.org/3/:value/:id?api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: '/api/contents/:value/:id/similar',
        destination: `https://api.themoviedb.org/3/:value/:id/similar?api_key=${API_KEY}&language=ko-KR`,
      },

    ]
  },
}

module.exports = nextConfig
