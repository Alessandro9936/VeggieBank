import github from "./assets/github.png";
import logo from "./assets/logo.png";
import chevron from "./assets/chevron-down.svg";
import chevronRight from "./assets/chevron-right.svg";
import chevronLeft from "./assets/chevron-left.svg";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

function App() {
  return (
    <>
      {/* --------------HEADER----------------- */}
      <header className="header">
        <a href="/home" className="header__logo">
          <img className="logo" src={logo} alt="" />
        </a>
        <a href="https://github.com/Alessandro9936/S2I_React">
          <img
            className="github-logo"
            src={github}
            alt="github icon redirect to project directory"
          />
        </a>
      </header>

      {/* -------------BOARD WITH CONTEXT--------------- */}
      <main className="board">
        {/* -------------ASIDE--------------- */}
        <aside className="board__aside-open">
          <img className="sidebar-handler icon" src={close} alt="" />
          {/*<p className="sidebar-text">Filter recipe</p> --> 
          - Display paragraph when modal is closed
          - Split components --> one when is opened, one when is closed ? Pass different props to the same one?
          */}
          {/* -------------SEARCH COMPONENT--------------- */}
          <div className="search-section">
            <h2>Search by name:</h2>
            <input type="text" placeholder="Recipe name..." />
          </div>
          {/* -------------FILTERS COMPONENT--------------- */}
          <div className="filters-section">
            <h2>Filter by:</h2>
            <div className="filter-container">
              {/* -------------FILTER COMPONENT (TYPE, OPTIONS)--------------- */}
              <ul className="filter">
                <div className="filter__header">
                  <span>Cuisine</span>
                  <img className="icon" src={chevron}></img>
                </div>
                <div className="options-container hidden">
                  <li className="option active">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                </div>
              </ul>
              {/* -------------FILTER COMPONENT (TYPE, OPTIONS)--------------- */}
              <ul className="filter">
                <div className="filter__header">
                  <span>Type</span>
                  <img className="icon" src={chevron}></img>
                </div>
                <div className="options-container hidden">
                  <li className="option active">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                </div>
              </ul>
              {/* -------------FILTER COMPONENT (TYPE, OPTIONS)--------------- */}
              <ul className="filter">
                <div className="filter__header">
                  <span>Intollarences</span>
                  <img className="icon" src={chevron}></img>
                </div>
                <div className="options-container hidden">
                  <li className="option active">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                  <li className="option">apple</li>
                </div>
              </ul>
            </div>
          </div>
          {/* -------------SORTS COMPONENT--------------- */}
          <div className="sort-section">
            <h2>Sort by:</h2>
            {/* -------------SORT COMPONENT (TYPE, OPTIONS)--------------- */}
            <ul className="filter">
              <div className="filter__header">
                <span>Price</span>
                <img className="icon" src={chevron}></img>
              </div>
              <div className="options-container hidden">
                <li className="option active">apple</li>
                <li className="option">apple</li>
                <li className="option">apple</li>
                <li className="option">apple</li>
                <li className="option">apple</li>
                <li className="option">apple</li>
                <li className="option">apple</li>
              </div>
            </ul>
          </div>
          {/* -------------ACTIVE FILTERS COMPONENT--------------- */}
          <div className="active-filters-section">
            <h2>Active filters:</h2>
            <div className="filter-container">
              {/* -------------ACTIVE FILTER COMPONENT (TYPE, ACTIVE FILTERS X TYPE)--------------- */}
              <div className="active-filter">
                <p>Cuisine:</p>
                <div className="actice-filter__buttons">
                  {/* ACTIVE TAG COMPONENT (ACTIVE FILTER) */}
                  <span className="active-tag">Arabian</span>
                </div>
              </div>
              {/* -------------ACTIVE FILTER COMPONENT (TYPE, ACTIVE FILTERS X TYPE)--------------- */}
              <div className="active-filter">
                <p>Type:</p>
                <div className="actice-filter__buttons">
                  <span className="active-tag">Main Course</span>
                </div>
              </div>
              {/* -------------ACTIVE FILTER COMPONENT (TYPE, ACTIVE FILTERS X TYPE)--------------- */}
              <div className="active-filter">
                <p>Intollarences:</p>
                <div className="actice-filter__buttons">
                  <span className="active-tag">Dairy</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="board__content">
          {/*
          <ul className="recipes">
            <li className="recipe-container">
              <img
                src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
                alt="recipe image"
              />
              <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
            </li>
          </ul>
          */}
          <div className="recipe-detail">
            <div className="recipe-block-flex">
              <img
                className="recipe-image"
                src="https://spoonacular.com/recipeImages/716429-312x231.jpg"
                alt=""
              />

              <div className="recipe-specifics">
                <h1>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h1>
                <p>Cooking time:</p>
                <p>
                  Complete Description:
                  <a
                    href="http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html"
                    target="_blank"
                  >
                    Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs
                  </a>
                </p>
                <div className="tags">
                  <p>Tags:</p>
                  <span className="active-tag">Dairy</span>
                  <span className="active-tag">Dairy</span>
                  <span className="active-tag">Dairy</span>
                  <span className="active-tag">Dairy</span>
                </div>
              </div>
              <img className="icon" src={close} alt="" />
            </div>

            <div className="recipe-block-flex">
              <div className="recipe-ingredients">
                <div className="ingredients-header">
                  <h2>Ingredients:</h2>
                  <div className="servings">
                    <img className="icon" src={chevronLeft} alt="" />
                    <span className="servings-number">1</span>
                    <img className="icon" src={chevronRight} alt="" />
                  </div>
                </div>
                <div className="ingredients-container">
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                  <div className="ingredient">
                    <div className="ingredient-image">
                      <img src="" alt="" />
                    </div>
                    <div className="ingredient-specs">
                      <p>Amuount</p>
                      <p>Ingredient</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recipe-nutrients">
                <h2>Nutrients</h2>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
                <div className="nutrient">
                  <p className="nutrient-name">Energy</p>
                  <p className="quantity">200 Kcal</p>
                </div>
              </div>
            </div>

            <div className="recipe-block">
              <h2>Recipe Steps:</h2>
              <div className="step">
                <div className="step-number">
                  <p>1</p>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, eum voluptates voluptatibus at incidunt fuga. Ex
                  doloremque nesciunt eos debitis sequi exercitationem. Quasi
                  perferendis accusantium voluptatibus sequi minus officiis
                  natus. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Placeat eveniet voluptatem accusamus dolores obcaecati
                  ducimus error eaque, voluptatibus vel consequuntur omnis
                  tempora? Iure tempore sapiente reiciendis velit nemo
                  praesentium dicta! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi, error? Ut, suscipit at iusto
                  accusantium sapiente rem sit voluptatem soluta dolore
                  architecto obcaecati, explicabo quasi perferendis est debitis
                  temporibus reiciendis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Molestiae sit fuga placeat nam cupiditate
                  illum corporis a, fugit, necessitatibus reiciendis aperiam
                  laboriosam quo cumque dolorem tempore in, sunt ab harum!
                </p>
              </div>
              <div className="step">
                <div className="step-number">
                  <p>1</p>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, eum voluptates voluptatibus at incidunt fuga. Ex
                  doloremque nesciunt eos debitis sequi exercitationem. Quasi
                  perferendis accusantium voluptatibus sequi minus officiis
                  natus. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Placeat eveniet voluptatem accusamus dolores obcaecati
                  ducimus error eaque, voluptatibus vel consequuntur omnis
                  tempora? Iure tempore sapiente reiciendis velit nemo
                  praesentium dicta! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi, error? Ut, suscipit at iusto
                  accusantium sapiente rem sit voluptatem soluta dolore
                  architecto obcaecati, explicabo quasi perferendis est debitis
                  temporibus reiciendis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Molestiae sit fuga placeat nam cupiditate
                  illum corporis a, fugit, necessitatibus reiciendis aperiam
                  laboriosam quo cumque dolorem tempore in, sunt ab harum!
                </p>
              </div>
              <div className="step">
                <div className="step-number">
                  <p>1</p>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, eum voluptates voluptatibus at incidunt fuga. Ex
                  doloremque nesciunt eos debitis sequi exercitationem. Quasi
                  perferendis accusantium voluptatibus sequi minus officiis
                  natus. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Placeat eveniet voluptatem accusamus dolores obcaecati
                  ducimus error eaque, voluptatibus vel consequuntur omnis
                  tempora? Iure tempore sapiente reiciendis velit nemo
                  praesentium dicta! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi, error? Ut, suscipit at iusto
                  accusantium sapiente rem sit voluptatem soluta dolore
                  architecto obcaecati, explicabo quasi perferendis est debitis
                  temporibus reiciendis! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Molestiae sit fuga placeat nam cupiditate
                  illum corporis a, fugit, necessitatibus reiciendis aperiam
                  laboriosam quo cumque dolorem tempore in, sunt ab harum!
                </p>
              </div>
            </div>

            <div className="recommended">
              <h2>You may also like:</h2>
              <div className="reccommended-recipes">
                <div className="recipe-container">
                  <img
                    src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
                    alt="recipe image"
                  />
                  <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
                </div>
                <div className="recipe-container">
                  <img
                    src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
                    alt="recipe image"
                  />
                  <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
                </div>
                <div className="recipe-container">
                  <img
                    src="https://spoonacular.com/recipeImages/715538-312x231.jpg"
                    alt="recipe image"
                  />
                  <p>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
