import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPage, setRowsPerPage } from "../../redux/News/slice";
import {
  selectError,
  selectIsLoading,
  selectPage,
  selectRowsPerPage,
  selectTopNews,
  selectTotalResults,
} from "../../redux/News/selectors";

import { Loader } from "../Loader/Loader";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { StyledTableCell, TableCellWrap } from "./Table.styled";

const columns = [
  { id: "image", label: "Image", minWidth: 100 },
  { id: "title", label: "Title", minWidth: 222 },
  {
    id: "authors",
    label: "Authors",
    minWidth: 164,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 291,
  },
  {
    id: "date",
    label: "Publication date",
    minWidth: 112,
  },
  {
    id: "URL",
    label: "Original URL",
    minWidth: 87,
  },
];

export default function StickyHeadTable() {
  const topNews = useSelector(selectTopNews);
  const totalResults = useSelector(selectTotalResults);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);

  const rowsPerPage = useSelector(selectRowsPerPage);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage));
    updateURLParams({ page: newPage + 1 });
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(setRowsPerPage(event.target.value));
    dispatch(setPage(0));
    updateURLParams({ page: 1 });
  };

  const updateURLParams = (params) => {
    const queryParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
      queryParams.set(key, value);
    });

    const newURL = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState({}, "", newURL);
  };

  const convertToSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
  };

  if (isLoading) return <Loader />;

  const handleRowClick = (row) => {
    const formattedTitle = convertToSlug(row.title);
    navigate(`/article/${formattedTitle}`, { state: { row } });
  };

  if (error) return <p>{error}</p>;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ width: "1180px", margin: "auto" }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ tableLayout: "fixed" }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align="left"
                  sx={{
                    minWidth: column.minWidth,
                    maxWidth: column.minWidth,
                    width: column.minWidth,
                    backgroundColor: "#ECF0F6",
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {topNews.map((row) => {
              const originalDate = row.publishedAt;
              const formattedDate = new Date(originalDate)
                .toISOString()
                .split("T")[0];

              return (
                row.url !== "https://removed.com" && (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.url}>
                    <StyledTableCell>
                      <TableCellWrap className="centered">
                        {" "}
                        <img src={row.urlToImage} alt={row.title} />
                      </TableCellWrap>
                    </StyledTableCell>
                    <StyledTableCell className="title-cell">
                      <TableCellWrap
                        onClick={() => handleRowClick(row)}
                        className="title-cell"
                      >
                        {row.title}
                      </TableCellWrap>
                    </StyledTableCell>
                    <StyledTableCell>
                      <TableCellWrap>{row.author}</TableCellWrap>
                    </StyledTableCell>
                    <StyledTableCell>
                      <TableCellWrap>{row.description}</TableCellWrap>
                    </StyledTableCell>
                    <StyledTableCell>
                      <TableCellWrap className="centered">
                        {formattedDate}
                      </TableCellWrap>
                    </StyledTableCell>
                    <StyledTableCell>
                      <TableCellWrap className="centered">
                        <a href={row.url} className="svg-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <path
                              d="M14.6666 6.21796H12.1666C11.7083 6.21796 11.3333 6.59296 11.3333 7.05129C11.3333 7.50962 11.7083 7.88462 12.1666 7.88462H14.6666C16.0416 7.88462 17.1666 9.00962 17.1666 10.3846C17.1666 11.7596 16.0416 12.8846 14.6666 12.8846H12.1666C11.7083 12.8846 11.3333 13.2596 11.3333 13.718C11.3333 14.1763 11.7083 14.5513 12.1666 14.5513H14.6666C16.9666 14.5513 18.8333 12.6846 18.8333 10.3846C18.8333 8.08462 16.9666 6.21796 14.6666 6.21796ZM7.16663 10.3846C7.16663 10.843 7.54163 11.218 7.99996 11.218H13C13.4583 11.218 13.8333 10.843 13.8333 10.3846C13.8333 9.92629 13.4583 9.55129 13 9.55129H7.99996C7.54163 9.55129 7.16663 9.92629 7.16663 10.3846ZM8.83329 12.8846H6.33329C4.95829 12.8846 3.83329 11.7596 3.83329 10.3846C3.83329 9.00962 4.95829 7.88462 6.33329 7.88462H8.83329C9.29163 7.88462 9.66663 7.50962 9.66663 7.05129C9.66663 6.59296 9.29163 6.21796 8.83329 6.21796H6.33329C4.03329 6.21796 2.16663 8.08462 2.16663 10.3846C2.16663 12.6846 4.03329 14.5513 6.33329 14.5513H8.83329C9.29163 14.5513 9.66663 14.1763 9.66663 13.718C9.66663 13.2596 9.29163 12.8846 8.83329 12.8846Z"
                              fill="black"
                              fillOpacity="0.54"
                            />
                          </svg>
                        </a>
                      </TableCellWrap>
                    </StyledTableCell>
                  </TableRow>
                )
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={totalResults || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
