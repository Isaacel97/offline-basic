self.addEventListener('fetch', event => {
    const offilineResponse = new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Mode offiline</h1>
            <p>Check your internet connection</p>
        </body>
        </html>
    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    });
    const resp = fetch(event.request)
    .catch(() => offilineResponse)
    event.respondWith(resp)
})