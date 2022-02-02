import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Button, { SmallButton } from "../components/Button";
import { FaMedium, FaGlobeAmericas } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Contest() {
  const { contestId } = useParams();
  let navigate = useNavigate();

  const [voteModal, setVoteModal] = useState(false);

  const openVoteModal = () => {
    setVoteModal(true);
  };

  const closeVoteModal = () => {
    setVoteModal(false);
  };

  return (
    <StyledContest>
      {voteModal && (
        <Modal onClose={closeVoteModal}>
          <div className="vote">
            <p>You're voting for</p>
            <h3>Frosty Frost</h3>
            <div className="vote__actions">
              <Button func={closeVoteModal} warn border>
                Cancel
              </Button>
              <Button border>Confirm</Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="header">
        <h2>Nominated Creators</h2>
        <p>No nominations found.</p>
      </div>
      <div className="nominations">
        <p>
          Be the first to <Link to={`/contest/${contestId}/add`}>nominate</Link>{" "}
          a creator!
        </p>
        <Accordion title={`Frosty Frost`} rank={1}>
          <div className="nominee">
            <div className="links">
              <a href="/">
                <FaMedium />
              </a>
              <a href="/">
                <FaGlobeAmericas />
              </a>
            </div>
            <SmallButton alternate func={openVoteModal}>
              Vote
            </SmallButton>
          </div>
        </Accordion>
        <Accordion title={`Frosty Frost`} alt rank={2}>
          <div className="nominee">
            <div className="links">
              <a href="/">
                <FaMedium />
              </a>
              <a href="/">
                <FaGlobeAmericas />
              </a>
            </div>
            <SmallButton alternate func={openVoteModal}>
              Vote
            </SmallButton>
          </div>
        </Accordion>
        <Button func={() => navigate(`/contest/${contestId}/add`)}>
          Add Nomination
        </Button>
      </div>
    </StyledContest>
  );
}

const StyledContest = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  .vote {
    text-align: center;
    h3 {
      margin: 1.5rem 0;
    }
    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  .header {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      color: #adadad;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }
  .nominations {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    p {
      font-size: 1rem;
      color: #adadad;
      font-weight: 600;
      a {
        color: #1e78ff;
        text-decoration: underline;
      }
    }
    button {
      margin-top: 0.5rem;
      width: 100%;
    }
  }
  .nominee {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    a {
      display: inline-block;
      line-height: 1;
      transition: all 0.3s ease;
      svg {
        font-size: 1.5rem;
      }
      &:hover {
        color: #1e78ff;
      }
    }
    button {
      width: auto;
      margin-top: 0;
    }
  }
`;
