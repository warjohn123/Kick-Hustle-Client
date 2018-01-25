class LoginController {
    constructor($state) {
    	"ngInject";
    	let vm = this;
        vm.name = 'home';
        vm.state = $state;
    }

    login() {
    	console.log('hey');
    	this.state.go('dashboard');
    }
}

export default LoginController;
