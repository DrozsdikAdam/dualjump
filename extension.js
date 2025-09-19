const vscode = require('vscode');

var fileA = null;
var fileB = null;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const MountFile = vscode.commands.registerCommand("dualjump.mountFile", () => {
		const temp = vscode.window.activeTextEditor;
		const path = temp ? temp.document.uri.fsPath : null;
		if (temp) {

			if (!fileA && fileB !== path) {
				fileA = path;
				vscode.window.showInformationMessage("File A mounted: " + fileA)
			}

			if (!fileB && fileA !== path) {
				fileB = path;
				vscode.window.showInformationMessage("File B mounted: " + fileB)
			}

			if (fileA && fileB && fileA !== path && fileB !== path) {
				vscode.window.showWarningMessage("Both files are already mounted! unmount one to mount a new file.");
				return;
			}

			if (fileA && fileB) vscode.window.showInformationMessage("Both files mounted!")

		} else {
			vscode.window.showWarningMessage("No active file to mount!");
			return;
		}
	});

	const SwitchToFileA = vscode.commands.registerCommand("dualjump.SwitchToFileA", async () => {
		const temp = vscode.window.activeTextEditor;
		const path = temp ? temp.document.uri.fsPath : null;

		if (!fileA) {
			vscode.window.showWarningMessage("There is no file mounted here!")
			return;
		}

		if (fileA === path) {
			vscode.window.showWarningMessage("You are already in that file!")
			return;
		}

		if (fileA) {
			const doc = await vscode.workspace.openTextDocument(fileA);
			await vscode.window.showTextDocument(doc, { preview: false })
		}
	})

	const SwitchToFileB = vscode.commands.registerCommand("dualjump.SwitchToFileB", async () => {
		const temp = vscode.window.activeTextEditor;
		const path = temp ? temp.document.uri.fsPath : null;

		if (!fileB) {
			vscode.window.showWarningMessage("There is no file mounted here!")
			return;
		}

		if (fileB === path) {
			vscode.window.showWarningMessage("You are already in that file!")
			return;
		}

		if (fileB) {
			const doc = await vscode.workspace.openTextDocument(fileB);
			await vscode.window.showTextDocument(doc, { preview: false })
		}
	})

	const UnmountFile = vscode.commands.registerCommand("dualjump.unmountCurrentFile", () => {
		const temp = vscode.window.activeTextEditor;
		const path = temp ? temp.document.uri.fsPath : null;

		if (!temp) {
			vscode.window.showWarningMessage("No active file to unmount!");
			return;
		}

		if (fileA === path) {
			fileA = null;
			vscode.window.showInformationMessage("The first file has been unmounted.");
		}
		else if (fileB === path) {
			fileB = null;
			vscode.window.showInformationMessage("The second file has been unmounted.");
		} else {
			vscode.window.showWarningMessage("The active file is not mounted.");
			return;
		}
	})

	context.subscriptions.push(MountFile, SwitchToFileA, SwitchToFileB, UnmountFile);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
