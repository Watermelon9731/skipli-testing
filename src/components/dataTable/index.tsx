import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";

const titleList = [
  "login",
  "id",
  "node_id",
  "avatar_url",
  "gravatar_id",
  "url",
  "html_url",
  "followers_url",
  "following_url",
  "gists_url",
  "starred_url",
  "subscriptions_url",
  "organizations_url",
  "repos_url",
  "events_url",
  "received_events_url",
  "type",
  "site_admin",
  "score",
];

interface Props {
  data: any[];
}

export default function DataTable({ data }: Props) {
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const renderTableHeader = () => {
    return titleList.map((head, idx) => (
      <TableCell key={idx}>
        <Typography textTransform={"uppercase"}>{head}</Typography>
      </TableCell>
    ));
  };

  const renderTableBodyContent = (item: any) => {
    return titleList.map((key, idx) => {
      return (
        <TableCell key={idx} align={"left"}>
          {item[key]}
        </TableCell>
      );
    });
  };

  return (
    <Box padding={5} overflow={"hidden"}>
      {data && data.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>{renderTableHeader()}</TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {renderTableBodyContent(row)}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20]}
            component="div"
            count={20}
            rowsPerPage={20}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      ) : null}
    </Box>
  );
}
