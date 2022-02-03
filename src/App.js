import { NavBar } from "./components/Navbar";
import Routes from './Routes';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
      <Routes />
      <ToastContainer/>
      </div>
    </>
  );
}

export default App;
