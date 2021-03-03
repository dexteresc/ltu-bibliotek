import { useRouter } from "next/router";
import Header from "../../../components/header";
import { books } from "../../../data/books";
const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  let book = books[id - 1];

  return (
    <div className="bg-gray-100">
      <Header></Header>
      <div className="mx-auto mt-5 w-4/5 shadow-md rounded bg-white p-5">
        <div className="w-full h-16 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-2xl">{book.title}</div>
            <div className="text-lg">{book.author}</div>
          </div>
          <div className="text-white bg-blue-800 rounded"><p className="font-bold">Antal:</p> {book.antal ? book.antal : "Vet inte"}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
