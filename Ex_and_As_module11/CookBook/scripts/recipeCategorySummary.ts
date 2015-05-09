import Interfaces = require("interfaces");

export class RecipeCategorySummary implements Interfaces.IRecipeCategorySummary {
    title:string;
    text:string;

    constructor(parameter:Interfaces.IRecipeCategorySummary) {
        this.title = parameter.title;
        this.text = parameter.text;
    }
}