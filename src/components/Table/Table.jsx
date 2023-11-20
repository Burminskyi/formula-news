import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

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

function createData(image, title, authors, description, date, URL) {
  return { image, title, authors, description, date, URL };
}

const rows = [
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
  createData(
    "",
    "Nashville mayor orders investigation after Audrey Hales writings posted online by radio host Steven Crowder - NBC News",
    "Phil Helsel Carla Kakouris-Solarana Natalie ObregonErik Ortiz",
    "The mayor of Nashville, Tennessee, called Monday for an investigation after images purported to be the writings of a shooter who killed six people at The Covenant School in March were posted online.",
    "2023-11-07",
    ""
  ),
];

export default function StickyHeadTable() {
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
          <TableHead
            sx={{
              background: "#EFEFF3",
              "& .myTableCell": {
                minWidth: "100px !important",
                width: "100px !important",
                height: "87px !important",
                padding: "8px 16px !important",
              },
            }}
          >
            <TableRow sx={{ height: "24 !important" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  sx={{
                    minWidth: column.minWidth,
                    width:
                      column.id === "image"
                        ? 100
                        : column.id === "title"
                        ? 222
                        : column.id === "authors"
                        ? 164
                        : column.id === "description"
                        ? 291
                        : column.id === "date"
                        ? 112
                        : 87,
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            minWidth: column.minWidth,
                            height: 87,
                            border: "1px solid #e0e0e0",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
