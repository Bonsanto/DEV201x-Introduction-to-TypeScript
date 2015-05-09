/// <reference path="typings/jquery.d.ts" />
import RecipeCategories = require('recipeCategories');
import RecipeCategory = require('RecipeCategory');
import Interfaces = require('interfaces');
import Loader = require('recipeLoader');


(() => {
    var recipeCategories:RecipeCategories.RecipeCategories<Interfaces.IRecipeCategory>;
    var renderer = null;

    window.onload = () => {
        var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

        categoriesSelect.onchange = () => loadRecipes();

        var loader = new Loader.RecipeLoader('/JSON/recipeTypes.json');

        loader.load();

        renderer = new renderer.Renderer();
    };

    function loadRecipes() {
        var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
        try {
            var category = recipeCategories.items
                //Find selected item by name
                .filter(item => item.name === el.value)
                //return the item
                .reduce(item => new RecipeCategory.RecipeCategory({
                    name: el.value,
                    foodGroups: item.foodGroups,
                    description: item.description,
                    examples: item.examples
                }));
            renderer.renderCategory(category);
        }
        catch (ex) {
            alert(ex.message)
        }
    }
})();