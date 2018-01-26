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

    register() {
        console.log('wew', this.state);
        this.state.go('registration');
    }
}

export default LoginController;
