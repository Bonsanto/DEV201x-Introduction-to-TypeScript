///<reference path="recipesClass.ts"/>

//then populate drop-downs with items from the different classes
var request = new XMLHttpRequest();

//class logic
var recipes:Recipes;


function recipeTypeLoader() {
    var recipeGetter:RecipeType;

    //class logic
    recipes = JSON.parse(request.responseText);
    var rType = document.getElementById('RecipeType');

    recipeGetter = new RecipeType(<HTMLSelectElement>rType);
    recipeGetter.LoadRecipeTypes(recipes);
}

window.onload = () => {
    request.onload = recipeTypeLoader;
    request.open("get", "JSON/recipeTypes.json", true);
    request.send();
};

class RecipeType {
    _recipeType:HTMLSelectElement;

    constructor(recipeType:HTMLSelectElement) {
        this._recipeType = recipeType;
    }

    LoadRecipeTypes(types:Recipes) {
        for (var i = 0; i < types.recipeType.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = types.recipeType[i].name;
            this._recipeType.appendChild(opt);
        }
    }


}    




