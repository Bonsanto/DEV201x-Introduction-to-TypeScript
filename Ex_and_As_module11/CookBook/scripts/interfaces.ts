import FoodGroup = require('foodGroup');
import Ingredient = require('ingredient');

export interface IBaseRecipeCategory {
    name :string;
    foodGroups: FoodGroup.FoodGroup[];
}

export interface IRecipeCategory extends IBaseRecipeCategory {
    description:string;
    examples: IExample[];
}

export interface IFoodGroup {
    name: string;
}

export interface IExample {
    name: string;
    prepTime: string;
    ingredients: Ingredient.Ingredient[];
}

export interface IRecipeCategorySummary {
    title: string;
    text: string;
}