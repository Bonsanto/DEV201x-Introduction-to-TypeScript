///<reference path="baseRecipeCategory.ts"/>
///<reference path="interfaces.ts"/>
///<reference path="recipeExample.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(category) {
        _super.call(this, category.name, category.foodGroups);
        this.description = category.description;
        this.examples = category.examples;
    }
    return RecipeCategory;
})(BaseRecipeCategory);
//# sourceMappingURL=recipeCategory.js.map