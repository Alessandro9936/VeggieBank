import { Board } from "./pages/Board";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { RecipeDetail } from "./components/board/RecipeDetail";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Board />}>
          <Route path=":id" element={<RecipeDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
