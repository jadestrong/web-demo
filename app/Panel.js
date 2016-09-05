import TinyEmitter from 'tiny-emitter';
import request from 'browser-request';

export default class Panel extends TinyEmitter{
	constructor() {
		super();
		this.request = request;
		this.URL = 'https://localhost:3000'
	}
}
