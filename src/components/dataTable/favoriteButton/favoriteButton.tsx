import { Box, TableCell } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { updateFavoriteProfile } from "../../../services/user.service";
import { USER_FAVORITE } from "../../../utils/constants/user";
import { useFavoriteStore } from "../../../store/favoriteStore";

interface Props {
  data: any;
  selected: boolean;
}

export default function FavoriteButton({ data, selected }: Props) {
  const { updateFavoriteList } = useFavoriteStore((state) => state);

  const handleClick = async (type: "ADD" | "REMOVE") => {
    const favoriteId = localStorage.getItem(USER_FAVORITE);
    if (!favoriteId || favoriteId === "") return;
    try {
      updateFavoriteList(data);
      const result = await updateFavoriteProfile({
        favoriteId: favoriteId,
        profile: data,
        type: type,
      });
      console.log(result?.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TableCell padding="checkbox">
      {selected ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => handleClick("REMOVE")}
        >
          <FavoriteIcon />
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => handleClick("ADD")}
        >
          <FavoriteBorderIcon />
        </Box>
      )}
    </TableCell>
  );
}
