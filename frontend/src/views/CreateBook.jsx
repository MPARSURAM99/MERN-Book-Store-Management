import { useState } from "react";
import axios from "axios";
import Spiner from "../components/Spiner";
import BackBtn from "../components/BackBtn";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:4000/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(`An error happende. Please check console`);
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spiner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 px-4 py-2 w-full">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 px-4 py-2 w-full">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 px-4 py-2 w-full">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
