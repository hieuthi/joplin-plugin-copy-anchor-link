module.exports = {
	default: function(context) {
		return {
			plugin: function (markdownIt, _options) {
				const pluginId = context.pluginId;
				markdownIt.core.ruler.push('anchorIcon', state => {
					const tokens = state.tokens
					for (let idx = 0; idx < tokens.length; idx++) {
						const token = tokens[idx]
						if (token.type !== 'heading_open') { continue }
						state.tokens[idx+1].children.push(Object.assign(new state.Token('span_open', 'span', 1), {attrs:[['class','copy-anchor-icon']]}));
						state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {content: " "}));
						["oi", "of", "li", "lh", "gi", "gh", "gf"].forEach(name => {
							state.tokens[idx+1].children.push(Object.assign(new state.Token('span_open', 'span', 1), {attrs:[['class',`cai-${name}`]]}));
							state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {content: "🔗"}))
							state.tokens[idx+1].children.push(new state.Token('span_close', 'span', -1));
							state.tokens[idx+1].children.push(Object.assign(new state.Token('html_inline', '', 0), {content: " "}))
						})
						state.tokens[idx+1].children.push(new state.Token('span_close', 'span', -1));
					}
				})
			},
			assets: function () {
				return [
					{ name: 'anchorLinkView.js'  },
					{ name: 'anchorLinkView.css' }
				]
			},
		};
	}
}
