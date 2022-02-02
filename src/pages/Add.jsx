import styled from "styled-components";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Add() {
  return (
    <StyledAdd>
      <div className="header">
        <h2>Add Nomination</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          nesciunt dolor harum! Ullam temporibus quas quae. Obcaecati
          consequuntur autem repudiandae?
        </p>
      </div>
      <div className="form">
        <Form>
          <div className="grid">
            <label>
              Name of Artist<span>*</span>
              <input type="text" placeholder="Name of Artist" required />
            </label>
            <label>
              Medium<span>*</span>
              <input type="text" placeholder="Medium URL" required />
            </label>
            <label>
              Website<span>*</span>
              <input type="text" placeholder="Website URL" required />
            </label>
            <label>
              Instagram
              <input type="text" placeholder="Instagram URL" />
            </label>
            <label>
              Opensea
              <input type="text" placeholder="Opensea URL" />
            </label>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </StyledAdd>
  );
}

const StyledAdd = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  .header {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      color: #adadad;
      font-weight: 300;
      margin-bottom: 0.5rem;
    }
  }
  .form {
    margin-top: 1rem;
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    button {
      width: 100%;
    }
  }
`;
