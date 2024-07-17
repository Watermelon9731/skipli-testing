import SendIcon from "@mui/icons-material/Send";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Button, Card, CardContent, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAccessCode, verifyAccessCode } from "../services/login.service";
import { USER_FAVORITE, USER_ID } from "../utils/constants/user";
import { ResponseAccessCode } from "../utils/interfaces/login";

type Inputs = {
  phone_number: string;
  access_code: string;
  fieldRequired: string;
};

export default function Home() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const handlePhoneNumber = async () => {
    const phoneNumber = getValues("phone_number");
    try {
      const result: ResponseAccessCode = await getAccessCode({
        phoneNumber: phoneNumber,
      });
      localStorage.setItem(USER_ID, result.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitAccessCode: SubmitHandler<Inputs> = async (data) => {
    const userId = localStorage.getItem(USER_ID);
    if (!userId) return;
    try {
      const result = await verifyAccessCode({
        phoneNumber: data.phone_number,
        accessCode: data.access_code,
        userId: userId,
      });
      localStorage.setItem(USER_FAVORITE, result.favorite_id);
      navigate("/data");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
      padding={5}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography
            variantMapping={{ h2: "h2" }}
            fontWeight={600}
            fontSize={30}
            textAlign={"center"}
          >
            Welcome
          </Typography>
          <form onSubmit={handleSubmit(onSubmitAccessCode)}>
            <Box
              width={"300px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={3}
            >
              <Box textAlign={"center"}>
                <h3>Your Phone Number</h3>
                <Box marginBottom={3}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <Box fontSize={20}>+</Box>
                    <Input
                      placeholder="Input your phone number"
                      {...register("phone_number", { required: true })}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handlePhoneNumber}
                >
                  Send
                </Button>
              </Box>
              <Box textAlign={"center"}>
                <h3>Your Access Code</h3>
                <Box marginBottom={3}>
                  <Input
                    placeholder="Input your access code"
                    {...register("access_code", { required: true })}
                  />
                </Box>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<VerifiedUserIcon />}
                >
                  Verify
                </Button>
              </Box>
              <Box>
                {errors.fieldRequired && <span>This field is required</span>}
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
