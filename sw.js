self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // يقوم بجلب التحديثات فوراً من الإنترنت
  e.respondWith(fetch(e.request));
});
