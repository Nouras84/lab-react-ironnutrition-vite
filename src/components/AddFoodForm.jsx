import React, { useState } from "react";

function AddFoodForm({ addFood }) {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 1,
  });

  const handleChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(newFood);
    setNewFood({ name: "", image: "", calories: 0, servings: 1 }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newFood.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="image"
        value={newFood.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="number"
        name="calories"
        value={newFood.calories}
        onChange={handleChange}
        placeholder="Calories"
      />
      <input
        type="number"
        name="servings"
        value={newFood.servings}
        onChange={handleChange}
        placeholder="Servings"
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
