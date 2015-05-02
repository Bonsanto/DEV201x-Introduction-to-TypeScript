///<reference path="baseRecipeCategory.ts"/>
///<reference path="interfaces.ts"/>
///<reference path="recipeExample.ts"/>

module RecipeData {
    export class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory {
        description:string;
        examples:Example[];

        constructor(category:IRecipeCategory) {
            super(category.name, category.foodGroups);

            this.description = category.description;
            this.examples = category.examples;
        }
    }
}