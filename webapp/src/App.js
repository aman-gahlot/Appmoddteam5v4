import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import FormPage from "./components/form/Form";
import Confirm from "./pages/confirmation/Confirm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/webapp" element={<Home/>}/>
        <Route path="/webapp/hotels" element={<List/>}/>
        <Route path="/webapp/hotels/:id" element={<Hotel/>}/>
        <Route path="/webapp/form" element={<FormPage/>}/>
        <Route path="/webapp/confirmation" element={<Confirm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
