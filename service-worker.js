const CACHE_NAME = '3a-ai-v1';
const urlsToCache = [
  '/3A-AI/',
  '/3A-AI/index.html',
  '/3A-AI/home.html',
  '/3A-AI/chat.html',
  '/3A-AI/login.html',
  '/3A-AI/menu.html',
  '/3A-AI/profile.html',
  '/3A-AI/settings.html',
  '/3A-AI/history.html',
  '/3A-AI/education.html',
  '/3A-AI/agriculture.html',
  '/3A-AI/health.html',
  '/3A-AI/business.html',
  '/3A-AI/sanitation.html',
  '/3A-AI/technology.html',
  '/3A-AI/style.css',
  '/3A-AI/firebase.js',
  '/3A-AI/script.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app files');
        return cache.addAll(urlsToCache).catch(err => {
          console.log('Cache addAll error:', err);
          return Promise.resolve();
        });
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            if (request.method === 'GET') {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            if (request.destination === 'document') {
              return caches.match('/3A-AI/home.html');
            }
            return null;
          });
      })
  );
});
