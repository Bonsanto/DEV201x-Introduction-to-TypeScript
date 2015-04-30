///<reference path="interfaces.ts"/>

class RecipeCategorySummary implements IRecipeCategorySummary {
    title:string;
    text:string;

    constructor(parameter:IRecipeCategorySummary) {
        this.title = parameter.title;
        this.text = parameter.text;
    }
}