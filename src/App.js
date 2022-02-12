import { NavBar } from "./components/Navbar";
import Routes from './Routes';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NavBar />
      <div>
      <Routes />
      <ToastContainer/>
      </div>
    </DndProvider>
  );
}

export default App;
