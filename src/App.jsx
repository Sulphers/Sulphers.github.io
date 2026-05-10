import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import Recettes from './pages/Recettes';

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recettes" element={<Recettes />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
