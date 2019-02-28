const CACHE_NAME = "v1";

const readResponseFromCache = request => caches.match(request);

const writeResponseToCache = (request, response) =>
  caches.open(CACHE_NAME).then(cache => cache.put(request, response));

const fetchAndWriteToCache = request =>
  fetch(request).then(response => {
    if (!response || !response.ok) {
      return response;
    }

    writeResponseToCache(request, response.clone());

    return response;
  });

self.addEventListener("fetch", event => {
  if (event.request.url.startsWith("https://api.punkapi.com")) {
    // Cache API requests
    event.respondWith(
      readResponseFromCache(event.request).then(cachedResponse => {
        if (cachedResponse) {
          console.log("from cache:", cachedResponse);
          return cachedResponse;
        }

        return fetchAndWriteToCache(event.request);
      })
    );
  }
});
