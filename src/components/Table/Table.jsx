import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { selectIsLoading, selectTopNews } from "../../redux/News/selectors";

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
  console.log("topNews: ", topNews);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                <TableCell
                  key={column.id}
                  align="left"
                  sx={{
                    minWidth: column.minWidth,
                    width: column.minWidth,
                    padding: "8px 16px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {topNews
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const originalDate = row.publishedAt;
                const formattedDate = new Date(originalDate)
                  .toISOString()
                  .split("T")[0];
                return (
                  row.url !== "https://removed.com" && (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.URL}>
                      <TableCell>
                        <img src={row.urlToImage} alt={row.title} />
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.author}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{formattedDate}</TableCell>
                      <TableCell>
                        <a href={row.url} class="svg-link">
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
                              fill-opacity="0.54"
                            />
                          </svg>
                        </a>
                      </TableCell>
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
        count={topNews.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
