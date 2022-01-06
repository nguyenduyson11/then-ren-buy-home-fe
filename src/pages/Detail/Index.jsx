import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { getDetailItem } from '../../api/itemApi';
import Loading from "../../components/Loading/Index";
import EmptyData from '../../components/EmptyData/Index';
function Index(props) {
  const {id} = useParams();
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getDetailPost = async () =>{
    try {
      setError('');
      setLoading(true);
      const response = await getDetailItem(id);
      setPost(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    getDetailPost();
  }, [id])
  console.log(post)
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <EmptyData />;
  }
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h2>
          <p className="mt-4 text-gray-500">
           {post.description}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Phòng ngủ</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.bedroom}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Phòng vệ sinh</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.bathroom}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Địa chỉ</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.address}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Hướng nhà</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.direction}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Diện tích</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.acreage}</dd>
              </div>
              <div  className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Quận</dt>
                <dd className="mt-2 text-sm text-gray-500">{post.categoryId ? post.categoryId.title : ''}</dd>
              </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {post.images?.map(image =>   <img
            key={image}
            src={image}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />)}
        </div>
      </div>
    </div>
  )
}

export default Index
