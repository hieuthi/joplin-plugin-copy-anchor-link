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
			const id = message.split(':')[1];
			joplin.clipboard.writeText(`[${id}](:/${selectedNote.id}\#${id})`);
		});
	},
});
