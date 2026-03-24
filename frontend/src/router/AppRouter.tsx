import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RepositoriesPage from "../pages/RepositoriesPage";
import AddRepositoryPage from "../pages/AddRepositoryPage";
import RepositoryDetailsPage from "../pages/RepositoryDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

type AppRouterProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function AppRouter({ theme, toggleTheme }: AppRouterProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/login"
        element={<LoginPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/register"
        element={<RegisterPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/repositories"
        element={<RepositoriesPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/repositories/new"
        element={<AddRepositoryPage theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route
        path="/repositories/:id"
        element={
          <RepositoryDetailsPage theme={theme} toggleTheme={toggleTheme} />
        }
      />
      <Route
        path="*"
        element={<NotFoundPage theme={theme} toggleTheme={toggleTheme} />}
      />
    </Routes>
  );
}

export default AppRouter;