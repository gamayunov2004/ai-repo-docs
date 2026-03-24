import Layout from "../components/Layout";

type AddRepositoryPageProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function AddRepositoryPage({ theme, toggleTheme }: AddRepositoryPageProps) {
  return (
    <Layout title="Добавить репозиторий" navType="app" theme={theme} toggleTheme={toggleTheme}>
      <div className="form-card">
        <label>Название репозитория</label>
        <input type="text" placeholder="Введите название" />

        <label>Ссылка на GitHub</label>
        <input
          type="text"
          placeholder="https://github.com/username/repository"
        />

        <label>Описание</label>
        <textarea placeholder="Введите краткое описание" rows={5}></textarea>

        <button className="primary-button">Сохранить</button>
      </div>
    </Layout>
  );
}

export default AddRepositoryPage;