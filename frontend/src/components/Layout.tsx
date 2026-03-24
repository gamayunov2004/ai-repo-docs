import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  title?: string;
  children: ReactNode;
  navType: "public" | "auth" | "app";
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function Layout({
  title,
  children,
  navType,
  theme,
  toggleTheme,
}: LayoutProps) {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <Link to="/" className="logo">
              AI Repo Docs
            </Link>

            <button
              type="button"
              className="theme-switch"
              onClick={toggleTheme}
              aria-label="Переключить тему"
            >
              <span className={`theme-switch-track ${theme === "light" ? "light" : ""}`}>
                <span className="theme-switch-thumb"></span>
              </span>
              <span className="theme-switch-label">
                {theme === "dark" ? "Тёмная" : "Светлая"}
              </span>
            </button>
          </div>

          {title && <h1 className="page-title">{title}</h1>}

          <nav className="nav">
            {navType === "public" && (
              <>
                <Link to="/login">Войти</Link>
                <Link to="/register" className="nav-button">
                  Регистрация
                </Link>
              </>
            )}

            {navType === "auth" && (
              <>
                <Link to="/">Главная</Link>
                <Link to="/login">Войти</Link>
                <Link to="/register" className="nav-button">
                  Регистрация
                </Link>
              </>
            )}

            {navType === "app" && (
              <>
                <Link to="/repositories">Мои репозитории</Link>
                <Link to="/repositories/new" className="nav-button">
                  Добавить репозиторий
                </Link>
                <Link to="/login" className="nav-logout">
                  Выйти
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;