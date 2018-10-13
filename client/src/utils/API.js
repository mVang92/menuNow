import axios from "axios";

export default {
  
  getItems: () => axios.get('/api/item'),
  createMenu: data => {
    console.log('HIT THIS ROUTE')
    // Won't work if they enter more than 3 submenus
    return (
      axios.post(`/api/menu`, {
        submenu: [
          data[0],
          data[1],
          data[2]
        ]
      })
      .then(console.log("MENU CREATED"))
      .catch(error => { console.log(error) })
    )
  },
  save: data => {
    console.log(data)
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
