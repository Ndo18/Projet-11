import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Accueil from './components/pages/Accueil';
import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import User from './components/pages/User';
import './style/Websitestyle.css'

function App() {
  return (
    <>
     <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/Sign-In' element={<SignIn />} /> {/* SignIn Page */}
        <Route path='/user' element={<User />} /> {/* Page connecté */}
        <Route path='*' element /> {/* Error */}
      </Routes>
    <Footer />
    </Router>
    </>
  );
}
export default App;
