import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

type RepositoryDetailsPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function RepositoryDetailsPage({ theme, toggleTheme }: RepositoryDetailsPageProps) {
  const { id } = useParams();

  const repository =
    id === "2"
      ? {
          name: "react-dashboard-ui",
          url: "https://github.com/example/react-dashboard-ui",
          status: "В обработке",
          lastCommit: "def456xyz",
          docs: "Документация ещё формируется. Сервис анализирует структуру проекта и подготавливает описание компонентов."
        }
      : {
          name: "fastapi-docs-service",
          url: "https://github.com/example/fastapi-docs-service",
          status: "Готово",
          lastCommit: "abc123def",
          docs: "Этот репозиторий содержит сервис для анализа структуры проекта и автоматической генерации документации с использованием ИИ."
        };

  return (
    <Layout title="Репозиторий" navType="app" theme={theme} toggleTheme={toggleTheme}>
      <div className="card">
        <p><strong>Название:</strong> {repository.name}</p>
        <p><strong>Ссылка:</strong> {repository.url}</p>
        <p><strong>Статус:</strong> {repository.status}</p>
        <p><strong>Последний commit:</strong> {repository.lastCommit}</p>

        <div className="button-group">
          <button className="primary-button">Сгенерировать документацию</button>
          <button className="secondary-button button-reset">Обновить</button>
        </div>
      </div>

      <div className="card">
        <h3>Сгенерированная документация</h3>
        <p>{repository.docs}</p>
      </div>
    </Layout>
  );
}

export default RepositoryDetailsPage;