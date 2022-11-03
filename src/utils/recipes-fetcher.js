const fetchRecipes = async (filtersString) => {
  const result = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch${
      filtersString ? filtersString : "?"
    }&diet=vegetarian&number=100&apiKey=${import.meta.env.VITE_KEY_1}`
  );
  const data = await result.json();
  return data;
};

export { fetchRecipes };
