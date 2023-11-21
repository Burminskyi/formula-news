import styled from "@emotion/styled";

export const StyledArticlePage = styled.section`
  padding-top: 32px;
  padding-bottom: 60px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 38px;
  h1 {
    font-size: 22px;
    line-height: 133.4%;
  }
`;

export const ReturnBtn = styled.button`
  border: none;
  background: none;
`;

export const GreyText = styled.p`
  font-weight: 600;
  line-height: 157%;
  color: rgba(33, 41, 50, 0.54);
  &.top {
    margin-bottom: 20px;
  }
  &.bottom {
    margin-top: 20px;
  }
`;

export const ParagraphHeader = styled.span`
  font-weight: 700;
  line-height: 133.4%;
`;

export const ParagraphWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageWrap = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url('путь_к_изображению.jpg');
  background-size: cover;
`;

export const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0); /* Пример прозрачного цвета фона */
  position: absolute;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  z-index: 0;
`;

