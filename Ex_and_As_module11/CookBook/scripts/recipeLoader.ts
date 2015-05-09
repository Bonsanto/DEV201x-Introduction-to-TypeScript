/// <reference path="initializer.ts" />

import FoodGroup = require('foodGroup');
import Ingredient = require('ingredient');
import RecipeCategory = require("RecipeCategory");
import RecipeCategories = require("RecipeCategories");
import RecipeCategorySummary = require("RecipeCategorySummary");
import Interfaces = require("interfaces");
import Example = require("recipeExample");


export class RecipeLoader {
    constructor(public url:string) {
    }

    load() {
        $.getJSON(this.url, (data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        if (data) {
            var categories:any[] = data.recipeCategories;
            recipeCategories = new RecipeCategories.RecipeCategories<Interfaces.IRecipeCategory>();

            var recipeCategoriesSummary = new RecipeCategories.RecipeCategories<Interfaces.IRecipeCategorySummary>();

            categories.forEach((category) => {
                var recipeCategory = new RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
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
    }

    getFoodGroups(category):FoodGroup.FoodGroup[] {
        //Map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new FoodGroup.FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category):Interfaces.IExample[] {
        return category.examples.map((example) => {
            return new Example.Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example):Ingredient.Ingredient[] {
        return example.ingredients.map((value) => {
            return new Ingredient.Ingredient(value);
        });
    }
} 