/* eslint-disable no-restricted-globals */

import { clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

clientsClaim();
skipWaiting();

// // self.skipWaiting();
// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

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
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.webp') && url.pathname.endsWith('.css'),
  new CacheFirst({
    cacheName: 'images and css',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);


