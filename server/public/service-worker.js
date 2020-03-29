"use strict";var precacheConfig=[["index.html","5823ccab3489643c5852c606c76ccbe5"],["service-worker.js","6b40a325e56ffa83cdf017afd375f290"],["static/css/0.6dcd7f0ef43ffc021e90.css","1d07c7ed11d28d5eaac0596e820c06ec"],["static/css/1.37b308e37bd7198c9174.css","67c1b7c82c9c567a680ccb7c843738fd"],["static/css/5.01ae0309791a08571c57.css","08ca9a2cb6bcf06aaa1f893c68b70de6"],["static/css/app.6a5d2fcec0a0d4392379.css","4e89323ae1618ab48fb3b080b75d04e7"],["static/css/app.d6920e1d9405925de1b68384f6697dae.css","9f63d447494371d1ccc1065cdc310b94"],["static/js/0.610e1392afe18c5b50c3.js","639ab8d8fe4147160546650a342fdfa5"],["static/js/1.735fd128f463f9a13053.js","eca5d40cd79f6071759ddc706ac29388"],["static/js/3.d52d82b18401e1fcf4cd.js","58f139d42aa0e62c5545df53da7af2b3"],["static/js/4.f65b4e3445a87d42b71d.js","b53ef098c62d35c15530783f4d3ba876"],["static/js/5.946ec061b4aa83f7f9ae.js","81b7b5de420a0c153092a9d29475962c"],["static/js/app.d0d2ba2b32e76e082dcb.js","848369debb2eda07a4c176a7c4e700d6"],["static/js/autotrack.js","b9a8213eae619a8362c4496bef632aea"],["static/js/browsermodal.js","9bf6f461a553ddead8edc562e86f957e"],["static/js/polyfill.min.js","868eefa71408a0f3f61c490810fc4568"],["static/js/vendor.dll.js","e5005e24024f96f11b86a7ced9427fcd"]],cacheName="sw-precache-v3-nicelinks-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});