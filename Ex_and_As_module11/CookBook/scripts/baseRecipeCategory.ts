import Interfaces = require('interfaces');
import FoodGroup = require('foodGroup');

export class BaseRecipeCategory implements Interfaces.IBaseRecipeCategory {
    name:string;
    foodGroups:FoodGroup.FoodGroup[] = [];

    constructor(name:string, foodGroups:FoodGroup.FoodGroup[]) {
        this.name = name;
        this.foodGroups = foodGroups;
    }
}