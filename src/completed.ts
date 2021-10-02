
/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import { getNonce } from '../src/nonce';


export class completed implements vscode.WebviewViewProvider {

    public static readonly viewType = 'completed';

    constructor(private readonly _uri: vscode.Uri) { }

    public resolveWebviewView(webView: vscode.WebviewView) {
        webView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._uri]
        };
        webView.webview.html = this.getHtmlWebView(webView.webview);


    }

    //use the welcome content for the intial view
    /*  use the accquire vscode api function
    */
    private getHtmlWebView(webview: vscode.Webview) {

        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._uri, 'out', 'compiled/completed/bundle.js')
        );
        const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._uri, 'out', 'compiled/completed/bundle.css')
        );
        const nonce = getNonce();


        return `
        <!DOCTYPE html>
        <html lang="en">
        
            <head>
                <meta charset="UTF-8">
                <!-- Content Security Policy -->
                <meta http-equiv="Content-Security-Policy"
                    content="default-src 'none'; img-src ${webview.cspSource} https: data:; script-src ${webview.cspSource}; style-src 'unsafe-inline' ${webview.cspSource};" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
                <link href="${styleUri}" rel="stylesheet" />
            </head>
        
            <body>
                <script nonce="${nonce}" src="${scriptUri}"></script>
                
            </body>
        
        </html>
        
        
        `;
    }




}
