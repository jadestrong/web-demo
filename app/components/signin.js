import Panel from '../Panel.js';
import renderSignin from '../templates/signin.js';


export default class Signin extends Panel {
	constructor(body) {
		super();
		this.body = body;
	}
	render() {
		this.body.innerHTML = renderSignin();
		this.addEventListener();
	}
	addEventListener() {
		this.formSubmit();
	}
	formSubmit() {
		const form = this.body.querySelector('form');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const email = form.querySelector('[data-email]');
			const password = form.querySelector('[data-password]');
			const opts = {
				method: 'POST',
				url: `${this.URL}/token`,
				json: true,
				body: {
					email: email,
					password: password
				}
			};
			this.request(opts, (err, res, data) => {
				if (err || res.status === 401) {
					this.emit('error');
				} else {
					this.emit('signin', data.token);
				}
			});
		});
	}
};