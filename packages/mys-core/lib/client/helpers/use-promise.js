const { SetModule, Service, Inject } = angular2now;

SetModule('app');
@Service({
  name: 'UsePromise'
})
@Inject(['$q'])
class UsePromise extends AssignInjectables {
  constructor() {
    super(arguments);
  }

  on(obj, func, ...args) {
    const deferred = this.$q.defer();

    args.push(function resolver(err, data) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(data);
      }
    });

    obj[func].apply(obj, args);

    return deferred.promise;
  }
}
