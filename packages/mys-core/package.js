var client = 'client';
var server = 'server';

Package.describe({
  name: 'mys:core',
  summary: 'Main package to rule them all!',
  version: '0.0.1'
});

Package.onUse(function coreOnUse(api) {
  var packages = [
    'mys:angular',
    // externals
    'meteor-base',
    'session',
    'tracker',
    'mobile-experience',
    'underscore',
    'check',
    'random',
    'standard-minifiers',
    'mdg:validated-method',

    // database
    'mongo',
    'aldeed:collection2@2.8.0',
    'aldeed:simple-schema@1.5.3',

    // accounts
    'service-configuration',
    'accounts-base',
    'accounts-password',
    'accounts-oauth',
    'accounts-google',
    'accounts-facebook',
    'splendido:accounts-meld@1.3.1'
  ];

  api.versionsFrom('METEOR@1.0');

  api.use(packages);

  api.addFiles([
    'lib/client/module.js',
    'lib/client/index.html',
    //
    'lib/client/helpers/assign-injectables.js',
    'lib/client/helpers/use-promise.js',
    'lib/client/lib/user.js',
    //
    'lib/client/components/app/app.html',
    'lib/client/components/app/app.js'
  ], client);

  api.addFiles([
    'lib/server/accounts.js'
  ], server);
});
