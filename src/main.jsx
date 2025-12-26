import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import PreviousProjects from './PreviousProjects.jsx';
import Layout from './Layout.jsx';
import Shop from './Shop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/final-project-dainicole/">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="previous-projects" element={<PreviousProjects />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
