import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DataTable from "../components/dataTable/dataTable";

export default function Data() {
  const [inputText, setInputText] = useState("");

  const handleInputSearch = (event: any) => {
    const inputText = event.target.value;
    if (!inputText || inputText === "") return;
    setInputText(inputText);
  };

  return (
    <Box height={"100%"} bgcolor={"white"} padding={5}>
      <Typography
        variantMapping={{ h2: "h2" }}
        fontSize={30}
        textAlign={"center"}
      >
        Github User List
      </Typography>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box sx={{ "& > :not(style)": { m: 1 }, margin: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
            <ScreenSearchDesktopIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              label="Search Github User"
              variant="standard"
              sx={{ width: 500 }}
              onChange={handleInputSearch}
            />
          </Box>
        </Box>
      </Box>
      <DataTable inputText={inputText} />
    </Box>
  );
}
