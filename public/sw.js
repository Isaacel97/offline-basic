self.addEventListener('install', event => {
    const cacheAppShell = caches.open('cache-1').then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/sw.js',
            'static/js/bundle.js',
            'favicon.ico',
        ]);
    });
    event.waitUntil(cacheAppShell);
});

self.addEventListener('fetch', event => {
    // Cache Only, no network request
    event.respondWith(caches.match(event.request));
});