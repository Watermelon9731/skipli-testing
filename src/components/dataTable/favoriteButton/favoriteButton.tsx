import { Box, TableCell } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { updateFavoriteProfile } from "../../../services/user.service";
import { USER_FAVORITE } from "../../../utils/constansts/user";
import { useState } from "react";

interface Props {
  data: any;
  selected: number[];
  setSelected: (selected: number[]) => void;
}

export default function FavoriteButton({ data, setSelected, selected }: Props) {
  const [profileId, setProfileId] = useState(-1);

  const handleSelect = (id: number) => {
    const selectedIndex: number = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleClick = async () => {
    const favoriteId = localStorage.getItem(USER_FAVORITE);
    if (!favoriteId || favoriteId === "") return;
    try {
      const result = await updateFavoriteProfile({
        favoriteId: favoriteId,
        profile: data,
      });
      if (result.data) {
        handleSelect(result.data.id);
        setProfileId(result.data.id);
        console.log(result.message);
      }
    } catch (error) {
      setProfileId(-1);
      console.log(error);
    }
  };
  return (
    <TableCell padding="checkbox">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={handleClick}
      >
        {selected.find((item) => item === profileId) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </Box>
    </TableCell>
  );
}
