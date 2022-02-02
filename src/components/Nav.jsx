import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <h3>Defi DAO</h3>
      </Link>
      <Button pill>Connect Wallet</Button>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ffffff;
  h3 {
    font-size: 1.5rem;
  }
`;
