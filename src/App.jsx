import { Routes, Route } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
      </Route>
    </Routes>
  );
}

export default App;
