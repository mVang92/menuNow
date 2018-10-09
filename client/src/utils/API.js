import axios from "axios";

export default {
  
  getItems: () => axios.get('/api/item'),
  save: data => {
    return (
      axios.post(`/api/item`, {
        _creator: data.user,
        name: data.name,
        ing: data.ing,
        desc: data.desc,
        price: data.price,
        note: data.note
      })
      .catch(function (error) {
        console.log(error);
      })
    )
  },
  update: id => axios.put(`/api/item/${id}`),
  delete: id => axios.delete(`/api/item/${id}`)
};
