import styled from "@emotion/styled";
import { Outlet } from "react-router";

const StyledWrapper = styled.div`
  font-family: "Monsterrat", sans-serif;
  background: #8eb69b;
  height: 100vh;
`;

export default function Layout() {
  return (
    <main>
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      ;
    </main>
  );
}
