import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getItems } from "../../../api/itemApi";
import Loading from '../../../components/Loading/Index';
import EmptyData from '../../../components/EmptyData/Index';


function Index() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
  const getListItems = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await getItems({limit: 4, sort: 'desc'});
      setPosts(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getListItems();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Nhà mới gần đây</h2>
        {error || posts.length === 0 ? (
            <EmptyData />
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {posts.map((product) => (
            <div key={product._id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.images[0]}
                  alt={product.images[0]}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/items/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {truncateString(product.title, 10)}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Địa chỉ: {product.address}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> Giá:{formatter.format(product.price)} vnd</p>
              </div>
            </div>
          ))}
        </div>
          )}
        
      </div>
    </div>
  )
}
export default Index;