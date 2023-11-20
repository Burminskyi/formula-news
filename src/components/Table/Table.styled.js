import styled from "@emotion/styled";
import TableCell from "@mui/material/TableCell";

export const TableCellWrap = styled.div`
  height: 71px;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledTableCell = styled(TableCell)`
  color: var(--darkText);
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 157%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-feature-settings: "clig" off, "liga" off;
  border: 1px solid #efeff3;
  padding: 8px 16px;
  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &:not(:last-child) {
    border-right: 1px solid #efeff3;
  }
`;
