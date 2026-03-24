import { Link } from "react-router-dom";
import Layout from "../components/Layout";

type HomePageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function HomePage({ theme, toggleTheme }: HomePageProps) {
  return (
    <Layout navType="public" theme={theme} toggleTheme={toggleTheme}>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-badge">Учебный AI-сервис для работы с репозиториями</p>
          <h1>Генерация документации для GitHub-репозиториев с помощью ИИ</h1>
          <p className="hero-description">
            Добавьте ссылку на публичный репозиторий, получите понятное описание
            структуры и автоматически обновляемую документацию.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Начать работу
            </Link>
            <Link to="/login" className="secondary-button">
              Войти
            </Link>
          </div>
        </div>

        <div className="hero-demo">
          <div className="demo-window">
            <div className="demo-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="demo-body">
              <p><strong>Repository URL</strong></p>
              <div className="demo-input">https://github.com/user/project</div>

              <p><strong>Статус</strong></p>
              <div className="demo-status">Анализ репозитория...</div>

              <p><strong>Результат</strong></p>
              <div className="demo-docs">
                Сервис обнаружил backend на FastAPI, клиентскую часть на React и
                основные маршруты API. Сгенерирована краткая документация по структуре проекта.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>1. Добавьте ссылку</h3>
          <p>Пользователь указывает публичный GitHub-репозиторий для анализа.</p>
        </div>

        <div className="feature-card">
          <h3>2. ИИ анализирует проект</h3>
          <p>Сервис получает структуру репозитория и формирует описание кода.</p>
        </div>

        <div className="feature-card">
          <h3>3. Получите документацию</h3>
          <p>Система сохраняет результат и обновляет его при изменениях в репозитории.</p>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;