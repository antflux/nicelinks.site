"use strict";var precacheConfig=[["index.html","1438679ea8f8352c36af64decbcd7f78"],["service-worker.js","4d27ec55518b362612df484e2e8ce6c5"],["static/css/0.db4cba896aab245cb3c2.css","821fb63531f768c8997ecc1f81a00518"],["static/css/1.81fe3bb99077ce829587.css","67c1b7c82c9c567a680ccb7c843738fd"],["static/css/2.8a84b240aa71e367b223.css","7e5cbb06cea9a82fe2d3a072c5a5b1ab"],["static/css/app.d6920e1d9405925de1b68384f6697dae.css","9f63d447494371d1ccc1065cdc310b94"],["static/css/app.ee16f869ce576992f92e.css","eaaf1d1fbf6b455914241ab21b1a064c"],["static/js/0.baebf00fac05c76d18f4.js","aebd7bf8f827c89e4c87683f1e9151b2"],["static/js/1.ff2dc7ab0ed558e13ac9.js","ac3c004ec1eae81354e2bf5a19746918"],["static/js/2.d57d3fbaf7f265c5096d.js","702218e8abcbe545824c375528d7383c"],["static/js/4.fb70eb794f6b44ed965e.js","7ad9145b034b822ee4b221bd6527eeb1"],["static/js/5.dbebabada94070987fe1.js","eb6c309eeddd45a2b6fb94fcc66e9d9a"],["static/js/app.8649c7a2811cc400c22c.js","1df2de16414abf09f56b426e681914e5"],["static/js/autotrack.js","b9a8213eae619a8362c4496bef632aea"],["static/js/browsermodal.js","9bf6f461a553ddead8edc562e86f957e"],["static/js/polyfill.min.js","868eefa71408a0f3f61c490810fc4568"],["static/js/vendor.dll.js","e5005e24024f96f11b86a7ced9427fcd"]],cacheName="sw-precache-v3-nicelinks-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});