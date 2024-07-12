import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../services/user.service";
import { USER_ID } from "../../utils/constansts/user";

export default function InformationCard() {
  const [infomation, setInfomation] = useState({
    phone_number: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem(USER_ID);
    if (!userId) return;
    async function getInformation(userId: string) {
      try {
        const result = await getUserProfile(userId);
        if (Object.keys(result).length === 0) return;
        setInfomation(result);
      } catch (error) {
        console.log(error);
      }
    }

    getInformation(userId);
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent sx={{ padding: 2 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Phone Number
          </Typography>
          <Typography variant="h5" component="div">
            +{infomation.phone_number}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
