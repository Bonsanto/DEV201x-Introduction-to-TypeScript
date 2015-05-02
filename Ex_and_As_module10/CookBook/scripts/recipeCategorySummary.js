///<reference path="interfaces.ts"/>
var RecipeData;
(function (RecipeData) {
    var RecipeCategorySummary = (function () {
        function RecipeCategorySummary(parameter) {
            this.title = parameter.title;
            this.text = parameter.text;
        }
        return RecipeCategorySummary;
    })();
    RecipeData.RecipeCategorySummary = RecipeCategorySummary;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=recipeCategorySummary.js.map