import App from './app.js';

window.onload = function () {
	var main = document.createElement('main');
	new App(main).init();
	document.body.appendChild(main);
};