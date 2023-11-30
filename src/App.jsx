import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsJson from "./foods.json";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const addFood = (newFood) => {
    setFoods([...foods, { ...newFood, id: Math.random().toString() }]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
