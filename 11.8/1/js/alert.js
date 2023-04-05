"use strict";

async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
		let responseJSON = await response.json();	
		return responseJSON	
	} else {
		throw new Error(response.status);
	}
}

loadJson('no-such-user.json').catch(alert);






