import Interfaces = require('interfaces');
import Examples = require('recipeExample');
import BaseRecipeCategory = require('baseRecipeCategory');

export class RecipeCategory extends BaseRecipeCategory.BaseRecipeCategory implements Interfaces.IRecipeCategory {
    description:string;
    examples:Examples.Example[];

    constructor(category:Interfaces.IRecipeCategory) {
        super(category.name, category.foodGroups);

        this.description = category.description;
        this.examples = category.examples;
    }
}