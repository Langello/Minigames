import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/Memotest";
import WordsPerMinute from "./screens/WordPerMinute";
import Pokemon from "./screens/Pokemon";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/Minigames" element={<Home />} />
      <Route path="/Memotest" element={<Memotest />} />
      <Route path="/wpm" element={<WordsPerMinute />} />
      <Route path="/Pokemon" element={<Pokemon />} />
    </Routes>
  );
}

export default App;
