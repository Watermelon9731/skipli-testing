import React from "react";
import Home from "./home";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  font-family: "Monsterrat", sans-serif;
`;

export default function Layout() {
  return (
    <StyledWrapper>
      <Home />
    </StyledWrapper>
  );
}
