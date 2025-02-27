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
  Divider,
} from "@mui/material";
import { AvatarImage } from "../components/dataTable/styles";
import { useEffect } from "react";
import { getFavoriteProfileList } from "../services/user.service";
import { USER_ID } from "../utils/constants/user";
import InformationCard from "../components/informationCard/informationCard";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";
import FavoriteButton from "../components/dataTable/favoriteButton/favoriteButton";

const titleList = ["login", "id", "avatar_url", "html_url", "followers_url"];

export default function Profile() {
  const { favoriteList, setFavoriteList } = useFavoriteStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem(USER_ID);
    if (!userId || userId === "") return;

    async function getListData(id: string) {
      try {
        const data = await getFavoriteProfileList(id);
        setFavoriteList(data.profiles);
      } catch (error) {
        console.log(error);
      }
    }

    getListData(userId);
  }, []);

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
          <TableCell
            key={idx}
            align={"left"}
            onClick={() => navigate(`/profile/${item["id"]}`)}
            sx={{ cursor: "pointer" }}
          >
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
      <Typography variant="h4" paddingLeft={5}>
        User Information
      </Typography>
      <Box padding={5} paddingTop={2} paddingBottom={2} overflow={"hidden"}>
        <InformationCard />
      </Box>
      <Box padding={5} paddingBottom={2}>
        <Divider />
      </Box>
      <Typography variant="h4" paddingLeft={5}>
        Favorite
      </Typography>
      <Box padding={5} paddingTop={2} overflow={"hidden"}>
        {favoriteList && favoriteList.length > 0 ? (
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
                  {favoriteList.map((row, idx) => {
                    const isSelected = !!favoriteList.find(
                      (item) => item.id === row.id
                    );
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        <FavoriteButton selected={isSelected} data={row} />
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
