import axios from 'axios';

export default {
 postSandData: async (name, description) =>{
  const res = await axios.post(`/api/product`,{name, description});
  return res.data || [];
 },

  getAll: async () => {
    const res = await axios.get(`/api/product`);
    return res.data || [];
  },
  deleteOne: async (id) => {
    const res = await axios.delete(`/api/product/${id}`);
    return res.data || [];
  },



}