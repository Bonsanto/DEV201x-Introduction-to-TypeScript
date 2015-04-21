var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="baseRecipeCategory.ts"/>
var RecipeCategory = (function (_super) {
    __extends(RecipeCategory, _super);
    function RecipeCategory(name, foodGroups, description) {
        _super.call(this, name, foodGroups);
        //todo: possible problems
        this.description = description;
    }
    return RecipeCategory;
})(BaseRecipeCategory);
//# sourceMappingURL=recipeCategory.js.map