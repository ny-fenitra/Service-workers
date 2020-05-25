const cacheName = 'v1'

const cacheAssets = [
    'index.html',
    'index2.html',
    'style.css',
    '/js/app.js',
    '/js/main.js',
    '/anime-master/lib/anime.js'
]

// Call Install Event
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed')

    // Wait until cache pages
    event.waitUntil(
       caches
       .open(cacheName)
       .then(cache => {
           console.log('Caching...')
           cache.addAll(cacheAssets)
       }) 
       .then(() => self.skipWaiting()) // Skip waiting
    )
})

// Call Activate Event
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated')

    // Remove unwanted caches
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing Old Cache')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

// Call Fetch Event
self.addEventListener('fetch', (event) =>{
    console.log('Service Worker: Fetching')
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    )
})