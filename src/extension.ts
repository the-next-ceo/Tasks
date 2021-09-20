import * as vscode from 'vscode';
import { activityBar } from './activitybar';




export function activate(context: vscode.ExtensionContext) {

	const provider = new activityBar(context.extensionUri);

	context.subscriptions.push(
		
		vscode.window.registerWebviewViewProvider(activityBar.viewType, provider));

};






/* context.subscriptions.push(vscode.commands.registerCommand('addTask', () => {
	vscode.window.showInputBox({ placeHolder: "Enter the notes" }).then((text) => {
		console.log(text);

	}); */