export default class class Site {
	private _url: String;

	constructor(url: String) {
		this._url = url;
	}

	get url(): String {
		return this._url;
	}
}
