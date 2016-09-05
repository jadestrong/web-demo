// import Signin from './components/signin.js';
import DefaultForm from './components/defaultform.js';
import Form from './templates/defaultform.js';
import Table from './templates/table.js'
import Menu from './templates/menu.js';

export default class App {
	constructor(body) {
		this.defaultForm = new DefaultForm(body, Menu());
	}
	init() {
		this.defaultForm.render();
	}
	// addEventListener() {
	// 	this.addSigninEvent();
	// }
	// addSigninEvent() {
	// 	this.signin.on('error', () => {
	// 		console.log('Something error');
	// 	});
	// 	this.signin.on('signin', (token) => {
	// 		localStorage.setItem('token', token);
	// 		console.log('It\'s time to render another component.');
	// 	});
	// }
}