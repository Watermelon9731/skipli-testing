/* eslint-disable react-hooks/exhaustive-deps */
import { Link, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getGithubUserList } from "../../services/github.service";
import { AvatarImage, PageInput } from "./styles";
import FavoriteButton from "./favoriteButton/favoriteButton";

const titleList = [
  "login",
  "id",
  "avatar_url",
  "html_url",
  "followers_url",
  "repos_url",
];

interface Props {
  inputText: string;
}

// const sampleUser = {
//   login: "aaa",
//   id: "1704",
//   avatar_url: "https://avatars.githubusercontent.com/u/1704?v=4",
//   html_url: "https://github.com/aaa",
//   followers_url: "https://api.github.com/users/aaa/followers",
//   repos_url: "https://api.github.com/users/aaa/repos",
// };

export default function DataTable({ inputText }: Props) {
  const [listUser, setListUser] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const [rowPerPage, setRowPerPage] = useState(20);
  const [selected, setSelected] = useState<number[]>([]);

  const textDebounce = useDebouncedCallback((value) => {
    if (value === rowPerPage) return;
    setRowPerPage(value);
  }, 1000);

  const debounce = useDebouncedCallback(async (value) => {
    try {
      const result = await getGithubUserList(value);
      setListUser(result.items);
      setCount(result.total_count);
    } catch (error) {}
  }, 1000);

  useEffect(() => {
    if (!inputText || inputText === "") return;
    debounce({ keyword: inputText, page: page, perPage: rowPerPage });
  }, [page, inputText, rowPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    if (page >= count - (count % rowPerPage)) return;
    setPage(newPage);
  };

  const handleRowPerPageChange = (event: any) => {
    const value = event.target.value;
    textDebounce(value);
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
      if (key === "avatar_url") {
        return (
          <TableCell key={idx} align={"left"}>
            <Box
              width={40}
              overflow={"hidden"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              paddingLeft={2}
            >
              <AvatarImage src={item[key]} />
            </Box>
          </TableCell>
        );
      } else if (key.includes("url")) {
        return (
          <TableCell key={idx} align={"left"}>
            <Link href={`${item[key]}`}>{item[key]}</Link>
          </TableCell>
        );
      } else {
        return (
          <TableCell key={idx} align={"left"}>
            {item[key]}
          </TableCell>
        );
      }
    });
  };

  return (
    <Box padding={5} overflow={"hidden"}>
      {listUser && listUser.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography textTransform={"uppercase"}>LIKE</Typography>
                  </TableCell>
                  {renderTableHeader()}
                </TableRow>
              </TableHead>
              <TableBody>
                {listUser.map((row, idx) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                      <FavoriteButton
                        selected={selected}
                        setSelected={setSelected}
                        data={row}
                      />
                      {renderTableBodyContent(row)}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display={"flex"} paddingTop={2} paddingBottom={2}>
            <TablePagination
              rowsPerPageOptions={[20]}
              component="div"
              count={count}
              rowsPerPage={rowPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
            <Box display={"flex"} alignItems={"center"} gap={2} padding={1}>
              <PageInput
                defaultValue={rowPerPage}
                type="number"
                min={0}
                onChange={handleRowPerPageChange}
              />
              <Typography>Row per page</Typography>
            </Box>
          </Box>
        </Paper>
      ) : null}
    </Box>
  );
}
