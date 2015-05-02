///<reference path="foodGroup.ts"/>
///<reference path="interfaces.ts"/>
var RecipeData;
(function (RecipeData) {
    var BaseRecipeCategory = (function () {
        function BaseRecipeCategory(name, foodGroups) {
            this.foodGroups = [];
            this.name = name;
            this.foodGroups = foodGroups;
        }
        return BaseRecipeCategory;
    })();
    RecipeData.BaseRecipeCategory = BaseRecipeCategory;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=baseRecipeCategory.js.map