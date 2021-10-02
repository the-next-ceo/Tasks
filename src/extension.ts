import * as vscode from 'vscode';
import { activityBar } from './activitybar';
import { completed } from './completebar';


export function activate(context: vscode.ExtensionContext) {

	const provider = new activityBar(context.extensionUri);
	const provider2 = new completed(context.extensionUri);

	context.subscriptions.push(

		vscode.window.registerWebviewViewProvider(activityBar.viewType, provider),
		vscode.window.registerWebviewViewProvider(completed.viewType, provider2));

};






/* context.subscriptions.push(vscode.commands.registerCommand('addTask', () => {
	vscode.window.showInputBox({ placeHolder: "Enter the notes" }).then((text) => {
		console.log(text);

	}); */