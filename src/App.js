import "./App.css";
import Header from "./components/header/Index";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import Post from "./pages/Post/Index";
import Item from "./pages/Items/Index";
import DetailItem from './pages/Detail/Index';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<DetailItem />} />
        <Route path="/items" element={<Item />} />
        <Route path="/items/create" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
