import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

import {
  GreyText,
  ImageWrap,
  ParagraphHeader,
  ParagraphWrap,
  ReturnBtn,
  StyledArticlePage,
  TitleWrap,
} from "./ArticlePage.styled";

const ArticlePage = () => {
  const location = useLocation();

  const { state } = location;
  const { row } = state || {};

  if (!row) {
    return <div>Данные статьи не найдены</div>;
  }

  const { urlToImage, title, description, content, source, author } = row;

  return (
    <StyledArticlePage>
      <Container>
        <TitleWrap>
          <ReturnBtn
            type="button"
            onClick={() => {
              if (location.state && location.state.from) {
                window.history.pushState(null, "", location.state.from);
              } else {
                window.history.back();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20 11.5H7.83L13.42 5.91L12 4.5L4 12.5L12 20.5L13.41 19.09L7.83 13.5H20V11.5Z"
                fill="#4E5460"
              />
            </svg>
          </ReturnBtn>
          <h1>{title}</h1>
        </TitleWrap>
        <GreyText className="top">Source: {source.name}</GreyText>
        <ParagraphWrap>
          <ParagraphHeader>Description</ParagraphHeader>
          <p>{description}</p>
        </ParagraphWrap>
      </Container>
      <ImageWrap>
        <img src={urlToImage} alt={title} />
      </ImageWrap>
      <Container>
        <ParagraphWrap>
          <ParagraphHeader>Content</ParagraphHeader>
          <p>{content}</p>
        </ParagraphWrap>
        <GreyText className="bottom">Authors: {author}</GreyText>
      </Container>
    </StyledArticlePage>
  );
};

export default ArticlePage;
