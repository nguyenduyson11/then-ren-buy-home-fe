import axiosClient from './axiosClient';
export const getItems = (params)=>{
  return axiosClient.get('/posts', {params});
}
export const getCategory = ()=>{
  return axiosClient.get('/category');
}
export const getDetailItem = (id)=>{
  return axiosClient.get(`/posts/${id}`);
}
export const createItem = (data)=>{
  return axiosClient.post(`/posts`, data, {
    headers :{
      "content-type": "multipart/form-data"
    }
  });
}