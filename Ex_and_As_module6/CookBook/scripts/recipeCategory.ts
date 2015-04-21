///<reference path="baseRecipeCategory.ts"/>
class RecipeCategory extends BaseRecipeCategory {
    public description:string;

    constructor(name:string, foodGroups:FoodGroup[], description:string) {
        super(name, foodGroups);
        //todo: possible problems
        this.description = description;
    }
}