import { Routes, Route } from 'react-router-dom';
import Header from './containers/header/header';
import Home from './pages/home/index';
import Project from './pages/project';
import Error from './pages/error';
import Footer from './containers/footer/footer';
import './main.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
