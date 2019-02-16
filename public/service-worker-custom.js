console.log("Service-worker-custom");

self.addEventListener("fetch", function(event) {
  console.log("Fetch event:", event);
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      console.log("Cache response:", resp);
      return (
        resp ||
        fetch(event.request).then(function(response) {
          console.log("Fetch response:", response);
          let responseClone = response.clone();
          caches.open("v1").then(function(cache) {
            cache.put(event.request, responseClone);
          });

          return response;
        })
      );
    })
  );
});
