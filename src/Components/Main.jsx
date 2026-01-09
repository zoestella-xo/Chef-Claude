import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
    const [ingredients, setIngredient] = useState(['Onion', 'Parsley', 'Chicken breast', 'Potato'])
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientsListEL = ingredients.map((ingredient)=>{
    return <li 
            key={ingredient} 
            className="ingredients-list">
                {ingredient}
            </li>})

    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredient((prevIngredientsList)=>{
            return [...prevIngredientsList, newIngredient]
        })
    }

    function toggleRecipeShown() {
        setRecipeShown(prev => !prev)
    }

    return <main>
        <p id="intro-text">Add any ingredients you have down below for the great Chef Claude to present you with a recipe for a sumptuous meal</p>
        
        <form action={addIngredient} id="add-ingredient-form">
            <input type="text" name="ingredient" placeholder="eg parsley" aria-label="Add Ingredient" id="input-el" />
            <button id="add-ingredient-btn">+ Add ingredient</button>
        </form>
        <IngredientsList 
            ingredients = {ingredients}
            ingredientsListEL = {ingredientsListEL}
            toggleRecipeShown = {toggleRecipeShown}
        />
        <ClaudeRecipe showRecipe= {recipeShown}/>
    </main>
}