import "./App.css";
import { ToastContainer } from "react-toastify";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { MinhaRotas } from "./route/v2/MinhaRotas";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <ToastContainer />
      <MinhaRotas />

    </>
  );
}

export default App;
