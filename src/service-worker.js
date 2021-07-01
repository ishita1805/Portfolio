/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

clientsClaim();
self.skipWaiting();


precacheAndRoute(self.__WB_MANIFEST);


const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
  
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    } 
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.webp') && url.pathname.endsWith('.css') && url.pathname.endsWith('.pdf'),
  new CacheFirst({
    cacheName: 'images and css',
    plugins: [
      new ExpirationPlugin({ maxEntries: 80 }),
    ],
  })
);


// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

