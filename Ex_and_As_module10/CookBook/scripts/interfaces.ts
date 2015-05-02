///<reference path="foodGroup.ts"/>
///<reference path="ingredient.ts"/>

module RecipeData {
    export interface IBaseRecipeCategory {
        name :string;
        foodGroups: FoodGroup[];
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
        ingredients: Ingredient[];
    }

    export interface IRecipeCategorySummary {
        title: string;
        text: string;
    }
}