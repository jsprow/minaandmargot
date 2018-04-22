"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a5e7fd51b4f9f84198fb7ce10d6b61c8"],["/static/css/main.8f2afe8e.css","1a9b8e8cdff5359b731eb62049bbeee8"],["/static/js/main.321358b6.js","d6baa87e0f263cac3db3c1919da90e46"],["/static/media/bgImage.f6078bd9.jpg","f6078bd915577255b39f4e6003e6df2b"],["/static/media/clothing_ribbon.e4913264.svg","e4913264d2a99df3e08c96f21a710c70"],["/static/media/contact_ribbon.fc1cd828.svg","fc1cd82895a91808a321039b2124f38f"],["/static/media/email.8f046e63.svg","8f046e63e90cf0e58dbb7634576e9055"],["/static/media/facebook.dd5d23f6.svg","dd5d23f619d6f981f4f06c0afd358892"],["/static/media/gallery1.f19d738a.jpg","f19d738ac7db55dc85a8059a7852c735"],["/static/media/gallery2.ae17a9c0.jpg","ae17a9c098d22558d082080093269ca2"],["/static/media/gallery3.06b24364.jpg","06b24364d12e2483b2a76b48e7a631ad"],["/static/media/gallery4.e91a3154.jpg","e91a31544b2d8556b63d1932ab739778"],["/static/media/gallery5.03563644.jpg","0356364445cce2639fd9128808416a03"],["/static/media/gallery6.054a29a4.jpg","054a29a42300331cc2e3f8d410faa72d"],["/static/media/gallery7.cb5c40db.jpg","cb5c40db869a9cfe35321a4f9ae8458d"],["/static/media/gallery8.76cc5f1d.jpg","76cc5f1dd42e62218d18c4f0cc446a53"],["/static/media/instagram.fca32d23.svg","fca32d231eb5226070d9f8fd03c8b9ba"],["/static/media/logo.14dfe139.svg","14dfe139f9fb96a81e7e08ed78950eef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});