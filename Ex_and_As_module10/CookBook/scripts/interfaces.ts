///<reference path="foodGroup.ts"/>
///<reference path="ingredient.ts"/>

interface IBaseRecipeCategory {
    name :string;
    foodGroups: FoodGroup[];
}

interface IRecipeCategory extends IBaseRecipeCategory {
    description:string;
    examples: IExample[];
}


interface IFoodGroup {
    name: string;
}

interface IExample {
    name: string;
    prepTime: string;
    ingredients: Ingredient[];
}

interface IRecipeCategorySummary {
    title: string;
    text: string;
}