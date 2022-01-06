import React from "react";
import Info from "./Info/Index";
import BestItem from "./BestItem/Index";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <Info />
      <BestItem />
      <div className="rounded-md shadow">
        <Link
          to="/items"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Xem Thêm ...
        </Link>
      </div>
    </div>
  );
}

export default Index;
