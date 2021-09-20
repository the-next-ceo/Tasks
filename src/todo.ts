/* eslint-disable @typescript-eslint/naming-convention */
import { readFileSync, writeFileSync } from "fs";
import { appendFileSync } from 'fs';
import * as vscode from 'vscode';

export class To_Do {
    i:number = 0;
    dict :{[index:number]: string} = {};
    item!: string;

    /* constructor(private i?: number, private item?: string) {
        //this.dict = {};
        /* this.i = 0;
        this.item = item;
    } */
    

    inc_call() {
        if (this.addItem(this.item) === true) {
            this.i += 1;

        }
    }
    /** This will add the notes to the array */
    addItem(item:string) {

        this.inc_call();
        if (this.item) {
            appendFileSync('todo.txt', `${item} `);
            for (var index = 1; index < 2; index++) {
                this.dict[this.i] = this.item;
            }
        }
        return true;
    }
    moveItem(move: Boolean) {

        if (move === true) {
            var file = readFileSync('todo.txt', 'utf-8');
            appendFileSync('move.txt', this.dict[this.i]);
            writeFileSync('todo.txt', file.replace(this.dict[this.i], ' '));

        }

    }

    /**
     * Return the content of the text file.
     * @param string 
     * @returns string
     */
    readItem() :string{
        //if(){
            return readFileSync(`../tasks/hello.txt`, 'utf-8');
       /*  }
        else{
            vscode.window.showErrorMessage("The file doesn't exist.");
        } */
    }

    dis(){
        return "hello world";
    }
    // var a = "this is called testing";
    // var b = "hello world";
    // var c = "fello world";
    // var d = "him and i";
    // addItem(a);
    // addItem(b);
    //addItem(c);
    //addItem(d); tasks\hello.txt
    
}
 
var a = new To_Do();
console.log(a.readItem());
