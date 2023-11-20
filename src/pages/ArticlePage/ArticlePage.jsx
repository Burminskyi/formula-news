import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const ArticlePage = () => {
  const location = useLocation();

  // Проверяем, есть ли объект state в location
  const { state } = location;

  // Проверяем, есть ли параметры в объекте state
  const { row } = state || {};

  // Используем полученные параметры для отображения данных статьи
  if (!row) {
    // Обработка ситуации, когда нет данных статьи
    return <div>Данные статьи не найдены</div>;
  }

  const { urlToImage, title, description, content } = row;

  return (
    <div>
      <Container>
        <h1>{title}</h1>
        <span>Description</span>
        <p>{description}</p>
      </Container>
      <img src={urlToImage} alt={title} />
      <Container>
        <span>Content</span>
        <p>{content}</p>
      </Container>
    </div>
  );
};

export default ArticlePage;
