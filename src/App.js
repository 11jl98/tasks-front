import { NavBar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
