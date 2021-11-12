module.exports = {
	default: function(context) {
		return {
			plugin: function (markdownIt, _options) {
				const pluginId = context.pluginId;
				markdownIt.core.ruler.push('anchorIcon', state => {
					const js = `
						let icon = this
						icon.classList.add("clicked");
						const id = icon.parentElement.id;
						webviewApi.postMessage('copyAnchorLink', 'copy:' + id);
						setTimeout(() => {icon.classList.remove("clicked")}, 1000);
					`

					const tokens = state.tokens
					for (let idx = 0; idx < tokens.length; idx++) {
						const token = tokens[idx]
						if (token.type !== 'heading_open') {
							continue
						}
						state.tokens[idx+1].children = tokens[idx+1].children.concat([
							Object.assign(new state.Token('span_open', 'span', 1), 
								{attrs:[['onclick', js],['class','copy-anchor-icon']]}),
							Object.assign(new state.Token('html_inline', '', 0), {content: "🔗"}),
							new state.Token('span_close', 'span', -1)
						])
					}
				})
			},
			assets: function () {
				return [{
					mime: 'text/css',
					inline: true,
					text: ` span.copy-anchor-icon {
								padding-left:8px;
								cursor: pointer;
							}
							span.copy-anchor-icon.clicked::after {
								content: "Copied!";
								font-size: 10px;
								font-weight: normal;
							}
						`
				}];
			},
		};
	}
}
