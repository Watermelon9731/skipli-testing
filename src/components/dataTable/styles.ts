import styled from "@emotion/styled";

export const AvatarImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export const PageInput = styled("input")(({ theme }) => ({
  textAlign: "center",
  width: 68,
  padding: 10,
  border: "0.5px solid gray",
  borderRadius: 8,
}));
