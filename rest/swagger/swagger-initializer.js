window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "https://ampache.org/openapi.json",
        name: "Ampache API 8 (current)"
      },
      {
        url: "https://ampache.org/openapi-6.json",
        name: "Ampache API 6"
      }
    ],
    "urls.primaryName": "Ampache API 8 (current)",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
