import { Link } from "react-router-dom";
import Layout from "../components/Layout";

type LoginPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function LoginPage({ theme, toggleTheme }: LoginPageProps) {
  return (
    <Layout title="Авторизация" navType="auth" theme={theme} toggleTheme={toggleTheme}>
      <div className="form-card">
        <label>Почта</label>
        <input type="email" placeholder="Введите почту" />

        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />

        <button className="primary-button">Войти</button>

        <p className="auth-hint">
          <span className="auth-hint-text">Нет аккаунта? </span>
          <Link to="/register" className="auth-hint-link">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default LoginPage;