import React, { useEffect, useState } from "react";
import Category from "../category/Index";
import Item from "../item/Index";
import { getItems } from "../../../api/itemApi";
import Loading from "../../../components/Loading/Index";
import EmptyData from "../../../components/EmptyData/Index";

function Index() {
  const [filter, setFilter] = useState({});
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFilter = (value) => {
    setFilter({...value });
  };
  const getListItems = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await getItems(filter);
      setPosts(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    getListItems();
  }, [filter]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Category handleFilter={handleFilter} />
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Danh sách nhà
          </h2>
          {error || posts.length === 0 ? (
            <EmptyData />
          ) : (
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {posts.map((item) => (
                <Item key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
