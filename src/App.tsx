import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
