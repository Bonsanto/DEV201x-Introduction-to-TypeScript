///<reference path="interfaces.ts"/>

module RecipeData {
    export class RecipeCategorySummary implements IRecipeCategorySummary {
        title:string;
        text:string;

        constructor(parameter:IRecipeCategorySummary) {
            this.title = parameter.title;
            this.text = parameter.text;
        }
    }
}