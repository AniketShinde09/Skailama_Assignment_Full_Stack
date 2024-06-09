import "./App.css";
import Loader from "./components/Loader";
import LoginDetails from "./components/LoginDetails";
import Navbar from "./components/Navbar";
import Mainroutes from "./pages/Mainroutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isEditTranscript = location.pathname.startsWith("/edit/transcript");

  return (
    <div className="App">
      {location.pathname === "/uploads" ||
      location.pathname === "/widgets" ||
      location.pathname === "/accounts/settings" ||
      isEditTranscript ? (
        ""
      ) : (
        <Navbar />
      )}
      <Mainroutes />
    </div>
  );
}

export default App;
