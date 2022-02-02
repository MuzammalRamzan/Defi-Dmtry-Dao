import styled from "styled-components";
import Timer from "../components/Home/Timer";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <StyledHome>
      <div className="header">
        <h1>Contest</h1>
        <p>Current Contest Ends In</p>
        <Timer />
        <Button func={() => navigate("/contest/3")}>Vote Now</Button>
      </div>
      <div className="prev">
        <h4>Previous contests:</h4>
        <div className="grid">
          <Accordion title={`Contest #2`} alt>
            <p>No Data Available</p>
          </Accordion>
          <Accordion title={`Contest #1`} alt>
            <p>No Data Available</p>
          </Accordion>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  .header {
    text-align: center;
    h1 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      color: #adadad;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    button {
      margin-top: 1rem;
    }
  }
  .prev {
    margin-top: 2rem;
    h4 {
      font-size: 0.9rem;
      font-weight: 400;
      color: #adadad;
    }
    .grid {
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
`;
