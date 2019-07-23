function getLinksFromMd(text) {
	const matches = [];
	const regExp = RegExp(/\[(.*?)\]\((.*?)\)/g);
	let target = regExp.exec(text);
	while (target) {
		matches.push({
			href: target[2],
			title: target[1]
		});
		target = regExp.exec(text);
	}
	return matches;
}

exports.getLinksFromMd = getLinksFromMd;