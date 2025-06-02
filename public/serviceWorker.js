const CacheName = "v1";
const CacheAssets = [
    "/",
    "/about",
    "/contact",
    "/projects",
    "/Volounteering_in_Bali",
];

// Install event: cache all listed URLs
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CacheName)
      .then((cache) => cache.addAll(CacheAssets))
      .then(() => self.skipWaiting()) // Activate worker immediately
  );
});

// Activate event: clean up old caches if needed
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CacheName)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Fetch event: respond with cached resources or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found, else fetch from network
      return response || fetch(event.request);
    })
  );
});