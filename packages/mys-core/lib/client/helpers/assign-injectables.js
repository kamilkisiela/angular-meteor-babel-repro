/* global AssignInjectables: true */

/**
 * Extend class using AssignInjectables to bind
 * injected services to instance scope.
 *
 * @Inject(['foo', 'bar'])
 * class Example extends AssignInjectables {
 * 	constructor(){
 * 		super(arguments);
 * 		// this.foo;
 * 		// this.bar
 * 	}
 * }
 */

AssignInjectables = (function AssignInjectablesWrapper() {
  class AssignInjectables {
    constructor(args) {
      if (args && args.callee) {
        const injected = args.callee.$inject;

        if (injected && injected.length) {
          for (let i = 0; i < injected.length; i++) {
            this[injected[i]] = args[i];
          }
        }
      }
    }
  }

  return AssignInjectables;
})();
