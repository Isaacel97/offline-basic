self.addEventListener('fetch', event => {
    const offilineResponse = new Response(`
        <h1>Connection lost</h1>
        <p>Check your internet connection</p>
    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    });
    const resp = fetch(event.request)
    .catch(() => offilineResponse)
    event.respondWith(resp)
})