import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackBtn.jsx";
import Spinner from "../components/Spiner.jsx";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
        console.log(book.title);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [book.title, id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id :</span>
            <span className="text-xl mr-4 text-gray-500">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title :</span>
            <span className="text-xl mr-4 text-gray-500">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author :</span>
            <span className="text-xl mr-4 text-gray-500">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year :</span>
            <span className="text-xl mr-4 text-gray-500">
              {book.publishYear}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
