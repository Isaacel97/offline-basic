if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}

if (window.caches) {
    // console.log('caches is supported');
    // create a new cache
    caches.open('test-1').then(cache => {

    })
    caches.open('test-2').then(cache => {
    
    })

    // verify if a cache exists
    // caches.has('test-1').then(hasCache => {
    //     console.log('Has cache test-1', hasCache);
    // })
    // caches.has('test-3').then(hasCache => {
    //     console.log('Has cache test-3', hasCache);
    // })

    // delete a cache
    caches.delete('test-1').then(deleted => {
        console.log('Cache test-1 deleted', deleted);
    })

    // save files in cache
    caches.open('cache-1').then(cache => {
        // add only one file
        cache.add('/index.html')
        // add multiple files
        cache.addAll([
            'logo192.png',
            'logo512.png',
            'pages/offline.html',
        ]).then(() => {
            // intercept files
            cache.put('index.html', new Response('file intercepted'))
        })
        // get files in cache
        cache.keys().then(keys => {
            console.log('Files in cache', keys);
        })
        // get all caches
        caches.keys().then(keys => {
            console.log('All caches', keys);
        })
    })
}
