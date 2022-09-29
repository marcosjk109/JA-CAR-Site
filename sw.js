const cacheName = 'portfolio'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            cache.addAll([
                './',
                './index.html',
                './image/logoja.png',
                './carro.html',
                './tapete.html',
                './sofa.html',
                './css/style.css',
                './js/script.js',
                './js/sofa.js',
                './js/tapete.js',
                './js/script01.js',
                './js/swiper-bundle.min.js',
                './manifest.json',
                './css/gallery.css',
                './css/sofa.css',
                './css/style01.css',
                './css/tapete.css',
                './css/swiper-bundle.min.css',
                './server.js'
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}