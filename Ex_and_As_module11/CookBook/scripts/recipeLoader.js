/// <reference path="initializer.ts" />
define(["require", "exports", 'foodGroup', 'ingredient', "RecipeCategory", "RecipeCategories", "RecipeCategorySummary", "recipeExample"], function (require, exports, FoodGroup, Ingredient, RecipeCategory, RecipeCategories, RecipeCategorySummary, Example) {
    var RecipeLoader = (function () {
        function RecipeLoader(url) {
            this.url = url;
        }
        RecipeLoader.prototype.load = function () {
            var _this = this;
            $.getJSON(this.url, function (data) {
                _this.mapData(data);
            });
        };
        RecipeLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var categories = data.recipeCategories;
                recipeCategories = new RecipeCategories.RecipeCategories();
                var recipeCategoriesSummary = new RecipeCategories.RecipeCategories();
                categories.forEach(function (category) {
                    var recipeCategory = new RecipeCategory({
                        name: category.title,
                        foodGroups: _this.getFoodGroups(category),
                        description: category.details,
                        examples: _this.getExamples(category)
                    });
                    recipeCategories.items.push(recipeCategory);
                    recipeCategoriesSummary.items.push(new RecipeCategorySummary.RecipeCategorySummary({
                        title: category.details,
                        text: category.title
                    }));
                });
                //Render the categories into the select
                renderer.renderCategories(recipeCategoriesSummary);
            }
            else {
                renderer.renderError();
            }
        };
        RecipeLoader.prototype.getFoodGroups = function (category) {
            //Map foodgroups data to TS object
            return category.foodGroups.map(function (foodGroup) {
                var group = new FoodGroup.FoodGroup(foodGroup.title);
                return group;
            });
        };
        RecipeLoader.prototype.getExamples = function (category) {
            var _this = this;
            return category.examples.map(function (example) {
                return new Example.Example({
                    name: example.name,
                    ingredients: _this.getIngredients(example),
                    prepTime: example.prepTime
                });
            });
        };
        RecipeLoader.prototype.getIngredients = function (example) {
            return example.ingredients.map(function (value) {
                return new Ingredient.Ingredient(value);
            });
        };
        return RecipeLoader;
    })();
    exports.RecipeLoader = RecipeLoader;
});
//# sourceMappingURL=recipeLoader.js.map