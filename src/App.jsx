import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contest from "./pages/Contest";
import Add from "./pages/Add";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest/:contestId" element={<Contest />} />
        <Route path="/contest/:contestId/add" element={<Add />} />
      </Routes>
    </>
  );
}
