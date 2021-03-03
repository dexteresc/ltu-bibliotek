import Link from "next/link";
import { stringify } from "postcss";

export default function Header(props) {
  return (
    <header className="top-0 bg-gray-100 shadow-lg sticky">
      <div className="flex p-5 w-full xl:w-2/3 items-center cursor-pointer justify-start md:justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center justify-between mr-5">
            <img
              className="h-12 mr-5"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Lule%C3%A5_tekniska_universitet_Logo.svg"
              alt=""
            />
            <div className="text-xl w-1 md:w:2/5 font-bold text-blue-700 invisible md:visible">
              Universitetsbiblioteket
            </div>
          </div>
        </Link>
        <div className="flex w-full md:w-1/2 bg-gray-200 border-2 border-blue-800 focus:bg-white rounded transition">
          <input
            type="text"
            placeholder="Sök artikel"
            className="block p-2 w-full rounded-sm focus:outline-none"
          />
          <button type="submit" className="bg-blue-800 p-2 text-white">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full h-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
    </header>
  );
}
