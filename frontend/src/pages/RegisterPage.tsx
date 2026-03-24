import { Link } from "react-router-dom";
import Layout from "../components/Layout";

type RegisterPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function RegisterPage({ theme, toggleTheme }: RegisterPageProps) {
  return (
    <Layout title="Регистрация" navType="auth" theme={theme} toggleTheme={toggleTheme}>
      <div className="form-card">
        <label>Почта</label>
        <input type="email" placeholder="Введите почту" />

        <label>Пароль</label>
        <input type="password" placeholder="Введите пароль" />

        <button className="primary-button">Зарегистрироваться</button>

        <p className="auth-hint">
          <span className="auth-hint-text">Уже есть аккаунт? </span>
          <Link to="/login" className="auth-hint-link">
            Войти
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default RegisterPage;