//class logic
class Recipes {
    recipeType:RecipeItem[];

    get recipeItem() {
        return this.recipeType;
    }

    set recipeItem(_recipeItems:RecipeItem[]) {
        this.recipeType = _recipeItems;
    }
}

class RecipeItem {
    name:string;
    class:RecipeClass[];

    get recipeItemName():string {
        return this.name;
    }

    set recipeItemName(recipeTypeName:string) {
        this.name = recipeTypeName;
    }

    get recipeItemClass (){
        return this.class;
    }

    set recipeItemClass(recipeItemClass:RecipeClass[]){
        this.class = recipeItemClass;
    }
}

class RecipeClass {
    type:string;

    get recipeType():string {
        return this.type;
    }

    set recipeType(_type:string) {
        this.type = _type;
    }
}





