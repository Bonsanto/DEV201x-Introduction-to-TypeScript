///<reference path="foodGroup.ts"/>
class BaseRecipeCategory {
    private _name:string;
    private _foodGroups:FoodGroup[] = [];

    get name():string {
        return this._name;
    }

    set name(name:string) {
        this._name = name;
    }

    get foodGroups():FoodGroup[] {
        return this._foodGroups;
    }

    set foodGroups(foodGroups:FoodGroup[]) {
        this._foodGroups = foodGroups;
    }
} 