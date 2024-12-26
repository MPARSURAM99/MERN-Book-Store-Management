import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import CreateBook from "./views/CreateBook.jsx";
import ShowBook from "./views/ShowBook.jsx";
import EditBook from "./views/EditBook.jsx";
import DeleteBook from "./views/DeleteBook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;

