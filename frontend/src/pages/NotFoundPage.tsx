import Layout from "../components/Layout";

type NotFoundPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function NotFoundPage({ theme, toggleTheme }: NotFoundPageProps) {
  return (
    <Layout title="Страница не найдена" navType="auth" theme={theme} toggleTheme={toggleTheme}>
      <div className="card">
        <p>Запрошенная страница не существует.</p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;