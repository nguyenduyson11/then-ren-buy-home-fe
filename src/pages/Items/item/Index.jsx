import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
function Index({item}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }
  return (
    <div className="group relative">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={item.images[0]}
          alt={item.images[0]}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500 info-items">
        <Link to={`/items/${item._id}`}>
          <span className="absolute inset-0" />
          <strong>Diện tích:</strong> {item.acreage} m2
        </Link>
        <Link to={`/items/${item._id}`}>
          <span className="absolute inset-0" />
          <strong>Giá:</strong> {formatter.format(parseFloat(item.price))} vnd
        </Link>
      </h3>
      <h3 className="mt-6 text-sm text-gray-500 info-items">
        <Link to={`/items/${item._id}`}>
          <span className="absolute inset-0" />
           <strong>Quận:</strong> {item.categoryId.title}
        </Link>
        <Link to={`/items/${item._id}`}>
          <span className="absolute inset-0" />
          <strong>Phòng ngủ:</strong> {item.bedroom}
        </Link>
        <Link to={`/items/${item._id}`}>
          <span className="absolute inset-0" />
          <strong>Phòng vệ sinh:</strong> {item.bathroom}
        </Link>
      </h3>
      <p className="text-base font-semibold text-gray-500">
        Mô tả: {truncateString(item.description, 60)}
        
      </p>
    </div>
  );
}

export default Index;
