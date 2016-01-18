var client = 'client';

Package.describe({
  name: 'mys:angular',
  summary: 'Just core Angular stuff with ui-router and few helpers, nothing else',
  version: '0.0.1'
});

Package.onUse(function angularOnUse(api) {
  var packages = [
    'mys:babel',
    'angular@1.3.5',
    'pbastowski:angular2-now@0.3.18',
    'angular:angular@1.4.8',
    'angular:angular-sanitize@1.4.8',
    'angular:angular-touch@1.4.8',
    'angular:angular-cookies@1.4.8',
    'angularui:angular-ui-router'
  ];
  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/client/core.js'
  ], client);
});
