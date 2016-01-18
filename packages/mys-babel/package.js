Package.describe({
  name: 'mys:babel',
  summary: 'All es2015 related things',
  version: '0.0.1'
});

Package.onUse(function babelOnUse(api) {
  var packages = [
    'pbastowski:angular-babel@1.0.9'
  ];
  api.use(packages);
  api.imply(packages);
});
