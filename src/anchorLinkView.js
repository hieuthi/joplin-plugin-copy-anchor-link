document.addEventListener('joplin-noteDidUpdate', makeAnchorLinkActionable );

if (/WebKit/i.test(navigator.userAgent)) { // sniff
	var _timer_anchor = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
				makeAnchorLinkActionable()
		}
	}, 10);
}

function sendCopyRequest(elem, format){
	const panel  = elem.parentElement
	const header = panel.parentElement.cloneNode(true);
	header.removeChild(header.lastElementChild);
	const id = header.id;
	const heading = header.textContent;

	webviewApi.postMessage('copyAnchorLink', {"id": id, "heading": heading, "format": format});
	panel.classList.add("clicked");
	setTimeout(() => {panel.classList.remove("clicked")}, 500);
}

function makeAnchorLinkActionable() {
	if (_timer_anchor) clearInterval(_timer_anchor);

	["oi", "of", "li", "lh", "gi", "gh", "gf"].forEach(name => {
		const elems = document.getElementsByClassName(`cai-${name}`);
		for (var i=0; i<elems.length; i++){
			elems[i].onclick = function(){ sendCopyRequest(this, name) };
		}
	})
}
