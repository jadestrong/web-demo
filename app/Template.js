import Panel from './Panel.js';

export default class Template extends Panel {
	constructor(body, renderModule) {
		super();
		this.body = body;
		this.renderModule = renderModule;
	}
	render() {
		this.body.innerHTML = this.renderModule;
	}
}