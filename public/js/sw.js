var cacheName = 'Oslo';
var filesToCache = [
  '/',
  '/css/vendors/bootstrap/bootstrap.css',
  '/css/vendors/swiper/swiper-bundle.min.css',
  '/css/vendors/wow/wow-animate.css',
  '/css/style.css',

  '/js/vendors/bootstrap/bootstrap.bundle.min.js',
//   '/js/bootstrap/popper.min.js',
  '/js/vendors/feather/feather.min.js',
  '/js/vendors/swiper/swiper-bundle.min.js',
  '/js/vendors/swiper/swiper-custom.min.js',
  '/js/active-class.js',
//   '/js/demo-search3.js',
  '/js/grid-style.js',
//   '/js/here-map-route.js',
//   '/js/imagesloaded.pkgd.min.js',
//   '/js/isotop.js',
//   '/js/masonry.pkgd.min.js',
//   '/js/material-photo-gallery.min.js',
//   '/js/otp.js',
  '/js/password-showhide.js',
  '/js/range-slider.js',
  '/js/script.js',
  '/js/sticky-header.js',
//   '/js/timer.js',
//   '/js/user-dashboard-tab.js',
  '/js/vendors/wow/wow.js',
  '/js/vendors/wow/wow-custom.js',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {

      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
