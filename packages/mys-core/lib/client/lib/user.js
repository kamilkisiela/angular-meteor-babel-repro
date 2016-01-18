const { SetModule, Service, Inject } = angular2now;

SetModule('app');

@Service({
  name: 'User'
})
@Inject(['UsePromise'])
//
class UserService extends AssignInjectables {
  constructor() {
    super(arguments);
  }

  /**
   * Sign up new user.
   */
  signUp({
    email,
    password
  }) {
    return this.UsePromise.on(Accounts, 'createUser', {
      email,
      password
    });
  }
}
