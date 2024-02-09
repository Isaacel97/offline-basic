self.addEventListener('fetch', event => {
    const offilineResponse = new Response('pages/offline.html');
    const resp = fetch(event.request)
    .catch(() => offilineResponse)
    event.respondWith(resp)
})