 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './pages/Home';
 import Modalidades from './pages/Modalidades';
 import Studio from './pages/Studio';
 import Contato from './pages/Contato';
 import Workshops from './pages/Workshops';
 import Coreografias from './pages/Coreografias';
 import Valores from './pages/Valores';
 import Equipe from './pages/Equipe';
//  import Contact from './pages/Contact';
 
 function AppRoutes() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/modalidades" element={<Modalidades />} />
         <Route path="/studio" element={<Studio />} />
         <Route path="/contato" element={<Contato />} />
         <Route path="/workshops" element={<Workshops />} />
         <Route path="/coreografias" element={<Coreografias />} />
         <Route path="/valores" element={<Valores />} />
         <Route path="/equipe" element={<Equipe />} />
         {/* <Route path="/contact" element={<Contact />} /> */}
       </Routes>
     </BrowserRouter>
   );
 }
 
 export default AppRoutes;