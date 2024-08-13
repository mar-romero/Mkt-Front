import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/components/Header/Header';
import HomePage from './ui/pages/HomePage';
import CursosPage2 from './ui/pages/CursosPage';
import MembershipPages from './ui/pages/Membership';
import Company from './ui/pages/Company';
import AboutSection from './ui/pages/AboutSection';
import RegistrationForm from './ui/pages/RegistrationForm';
import Course from './ui/pages/Course';
import Login from './ui/pages/Login';
import LogoutPage from './ui/pages/Logout';
import Course2 from './ui/pages/Course2';
import MyCourses from './ui/pages/MyCourses';
import PaginaCurso from './ui/pages/CursoDetalle';

;
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" Component={CursosPage2} />
        <Route path="/membresia" Component={MembershipPages} />
        <Route path="/empresa" Component={Company} />
        <Route path="/sobre-nosotros" Component={AboutSection} />
        <Route path="/registro" Component={RegistrationForm} />
        <Route path="/curso" Component={Course} />
        <Route path="/curso2" Component={Course2} />
        <Route path="/login" Component={Login} />
        <Route path="/logout" Component={LogoutPage} />
        <Route path="/mycourse" Component={MyCourses} />
        <Route path="/PaginaCurso" Component={PaginaCurso} />

        {/* Agregar más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
