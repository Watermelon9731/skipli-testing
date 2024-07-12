/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AvatarImage } from "../components/dataTable/styles";
import { useNavigate, useParams } from "react-router-dom";
import { getGithubUserProfile } from "../services/github.service";

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
  "name",
  "company",
  "blog",
  "location",
  "email",
  "hireable",
  "bio",
  "twitter_username",
  "public_repos",
  "public_gists",
  "followers",
  "following",
  "created_at",
  "updated_at",
];

export default function GithubUser() {
  const [listUser, setListUser] = useState([{}]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.slug) return navigate(-1);
    async function getUserInfo(id: number | string) {
      try {
        const result: object = await getGithubUserProfile(Number(id));
        setListUser([result]);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    getUserInfo(params.slug);
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
