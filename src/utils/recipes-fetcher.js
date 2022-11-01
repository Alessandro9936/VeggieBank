const fetchRecipes = async (filtersString) => {
  const result = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch${
      filtersString ? filtersString : "?"
    }&diet=vegetarian&number=${process.env.KEY1}`
  );
  const data = await result.json();
  return data;
};

export { fetchRecipes };
