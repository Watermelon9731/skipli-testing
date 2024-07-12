import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
} from "@mui/material";
import { AvatarImage } from "../components/dataTable/styles";
import { useEffect, useState } from "react";
import { getFavoriteProfileList } from "../services/user.service";
import { USER_ID } from "../utils/constansts/user";

const titleList = ["login", "id", "avatar_url", "html_url", "followers_url"];

export default function Profile() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem(USER_ID);
    if (!userId || userId === "") return;

    async function getListData(id: string) {
      try {
        const data = await getFavoriteProfileList(id);
        setListUser(data.profiles);
      } catch (error) {
        console.log(error);
      }
    }

    getListData(userId);
  }, []);

  const handleGetProfileInfo = async () => {};

  const renderTableHeader = () => {
    return titleList.map((head, idx) => (
      <TableCell key={idx}>
        <Typography textTransform={"uppercase"}>{head}</Typography>
      </TableCell>
    ));
  };

  const renderTableBodyContent = (item: any) => {
    return titleList.map((key, idx) => {
      if (key === "id") {
        return (
          <TableCell key={idx} align={"left"} onClick={handleGetProfileInfo}>
            {item[key]}
          </TableCell>
        );
      } else if (key === "avatar_url") {
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
    <Box height={"100%"} bgcolor={"white"} padding={5}>
      <Box padding={5} overflow={"hidden"}>
        {listUser && listUser.length > 0 ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>{renderTableHeader()}</TableRow>
                </TableHead>
                <TableBody>
                  {listUser.map((row, idx) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        {renderTableBodyContent(row)}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ) : null}
      </Box>
    </Box>
  );
}
