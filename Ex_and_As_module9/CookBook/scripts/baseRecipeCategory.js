///<reference path="foodGroup.ts"/>
///<reference path="interfaces.ts"/>
var BaseRecipeCategory = (function () {
    function BaseRecipeCategory(name, foodGroups) {
        this.foodGroups = [];
        this.name = name;
        this.foodGroups = foodGroups;
    }
    return BaseRecipeCategory;
})();
//# sourceMappingURL=baseRecipeCategory.js.map