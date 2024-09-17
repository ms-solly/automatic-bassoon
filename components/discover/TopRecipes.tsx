"use client";
import RecipeCard from "../RecipeCard";

interface Recipe {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const topRecipes: Recipe[] = [
    { id: 1, title: "Vegan Pasta Salad", description: "A fresh, vibrant pasta salad with tangy dressing.", imageUrl: "/food.jpg" },
    { id: 2, title: "Healthy Smoothie Bowls", description: "Packed with nutrients for a fresh start.", imageUrl: "/food.jpg" },
    { id: 3, title: "Delicious Vegan Tacos", description: "A delightful recipe for vegan tacos.", imageUrl: "/food.jpg" }
];

const TopRecipes: React.FC = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-pink-500 mt-4 mb-2">Top Recipes</h3>
            <div className="space-y-4 mt-4">
                {topRecipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopRecipes;
