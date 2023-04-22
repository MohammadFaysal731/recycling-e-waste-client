import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import RequireAuth from './components/RequireAuth';
import { privateRoutes } from './routes/privateRoutes';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        {publicRoutes?.map(({ path, Comment }, index) => (
          <Route path={path} element={<Comment />} key={index} />
        ))}
        {privateRoutes?.map(({ path, Comment }, index) => (
          <Route path={path} element={<RequireAuth><Comment /></RequireAuth>} key={index} />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
