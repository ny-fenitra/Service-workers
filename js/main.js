// Make sure sw are supported
if(navigator.serviceWorker){
    window.onload = () => {
        navigator.serviceWorker
        .register('/sw_cache_site.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(err))
    }
}