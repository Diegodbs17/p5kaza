import { Routes, Route } from 'react-router';
import Layout from './components/layout';
import Home from './pages/Home';
import About from "./pages/About";
import Accommodation from "./pages/Accommodation"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<div>Coucou</div>} />
        <Route path="*" element={<div>Coucou 404</div>} />
        <Route path="/Accommodation/:id" element={<Accommodation />} />
      </Route>
    </Routes>
  );
}

export default App;