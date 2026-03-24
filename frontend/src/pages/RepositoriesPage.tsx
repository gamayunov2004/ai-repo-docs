import { Link } from "react-router-dom";
import Layout from "../components/Layout";

type RepositoriesPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function RepositoriesPage({ theme, toggleTheme }: RepositoriesPageProps) {
  return (
    <Layout title="Мои репозитории" navType="app" theme={theme} toggleTheme={toggleTheme}>
      <div className="section-top">
        <Link to="/repositories/new" className="primary-button">
          Добавить репозиторий
        </Link>
      </div>

      <div className="repo-list">
        <div className="repo-card">
          <h3>fastapi-docs-service</h3>
          <p>Статус: Готово</p>
          <p>Источник: GitHub</p>
          <Link to="/repositories/1">Открыть</Link>
        </div>

        <div className="repo-card">
          <h3>react-dashboard-ui</h3>
          <p>Статус: В обработке</p>
          <p>Источник: GitHub</p>
          <Link to="/repositories/2">Открыть</Link>
        </div>
      </div>
    </Layout>
  );
}

export default RepositoriesPage;