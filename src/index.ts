import joplin from 'api';
import { ContentScriptType } from "api/types";

joplin.plugins.register({
	onStart: async function() {
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			'copyAnchorLink',
			'./copyAnchorLink.js'
		);

		await joplin.contentScripts.onMessage('copyAnchorLink', async (message:any) => {
			const selectedNote = await joplin.workspace.selectedNote();
			const id      = message["id"];
			const heading = message["heading"];
			const format  = message["format"];
			switch (format){
				case "oi":
					joplin.clipboard.writeText(`\#${id}`);
					break;
				case "of":
					joplin.clipboard.writeText(`:/${selectedNote.id}\#${id}`);
					break;
				case "li":
					joplin.clipboard.writeText(`[${id}](\#${id})`);
					break;
				case "lh":
					joplin.clipboard.writeText(`[${heading}](\#${id})`);
					break;
				case "gi":
					joplin.clipboard.writeText(`[${id}](:/${selectedNote.id}\#${id})`);
					break;
				case "gh":
					joplin.clipboard.writeText(`[${heading}](:/${selectedNote.id}\#${id})`);
					break;
				case "gf":
					joplin.clipboard.writeText(`[${selectedNote.title} \# ${heading}](:/${selectedNote.id}\#${id})`);
					break;
			}
		});
	},
});
