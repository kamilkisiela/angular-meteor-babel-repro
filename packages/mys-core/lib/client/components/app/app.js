const { SetModule, Component, View, Inject, bootstrap } = angular2now;

SetModule('app')

@Component('app')
@View({
  templateUrl: '/packages/mys:core/lib/client/components/app/app.html'
})
@Inject(['User'])
//
class AppComponent extends AssignInjectables {
  constructor() {
    super(arguments);

    this.model = {
      email: 'mys.sterowiec@gmail.com',
      password: 'angularbabel'
    };
  }

  signUp() {
    console.log('start');
    
    this.User.signUp(this.model)
      .then(() => {
        console.log('success');
      })
      .catch((e) => {
        console.log('error', e);
      });
  }
}

//
// Bootstrap
//
bootstrap(AppComponent);
